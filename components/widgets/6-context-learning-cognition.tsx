"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// Widget 1: Classical & Operant Reinforcement Schedule Simulator
// ============================================================================
type SimMode = "classical" | "operant";
type ScheduleKind = "VR" | "FR" | "VI" | "FI";

function ConditioningScheduleSimulator() {
  const [mode, setMode] = useState<SimMode>("classical");

  // Classical controls
  const [acqTrials, setAcqTrials] = useState(10);
  const [extTrials, setExtTrials] = useState(8);
  const [restMode, setRestMode] = useState<"none" | "rest">("rest");

  // Operant controls
  const [schedule, setSchedule] = useState<ScheduleKind>("VR");
  const [density, setDensity] = useState(8);
  const [extSwitch, setExtSwitch] = useState<"active" | "extinction">("extinction");

  const classicalData = useMemo(() => {
    const pts: Array<{ x: number; y: number; phase: "acq" | "ext" | "rec" }> = [];
    const kAcq = 0.25;
    const kExt = 0.3;
    for (let t = 0; t <= acqTrials; t++) {
      const y = 100 * (1 - Math.exp(-kAcq * t));
      pts.push({ x: t, y, phase: "acq" });
    }
    const peak = pts[pts.length - 1]?.y ?? 0;
    for (let e = 1; e <= extTrials; e++) {
      const y = peak * Math.exp(-kExt * e);
      pts.push({ x: acqTrials + e, y, phase: "ext" });
    }
    const postExt = pts[pts.length - 1]?.y ?? peak;
    const recStart = acqTrials + extTrials + 2;
    let recPeak = postExt;
    if (restMode === "rest" && extTrials > 0) {
      recPeak = Math.min(peak * 0.68, postExt + 0.36 * (peak - postExt));
      for (let r = 0; r <= 4; r++) {
        const y = recPeak * Math.exp(-0.42 * r);
        pts.push({ x: recStart + r, y, phase: "rec" });
      }
    }
    const maxX = Math.max(20, (pts[pts.length - 1]?.x ?? 20) + 1);
    return { pts, peak: Math.round(peak), postExt: Math.round(postExt), recPeak: Math.round(recPeak), maxX, recStart };
  }, [acqTrials, extTrials, restMode]);

  const operantData = useMemo(() => {
    const T = 100;
    const extStart = extSwitch === "extinction" ? 60 : 101;
    const pts: Array<{ t: number; r: number }> = [{ t: 0, r: 0 }];
    const rewards: Array<{ t: number; r: number }> = [];

    let cum = 0;
    let sinceReward = 0;
    let pauseLeft = 0;
    let nextVarTarget = Math.max(3, Math.round(density * 0.8));
    let varStep = 0;
    const varMultipliers = [0.65, 1.35, 0.5, 1.5, 0.9, 1.15, 0.7, 1.25];

    for (let t = 1; t <= T; t++) {
      const inExt = t > extStart;
      const extElapsed = Math.max(0, t - extStart);
      let delta = 0;

      if (schedule === "VR") {
        const baseRate = Math.max(1.3, 2.5 - density * 0.045);
        delta = inExt ? baseRate * Math.exp(-0.022 * extElapsed) : baseRate;
        cum += delta;
        sinceReward += delta;
        if (!inExt && sinceReward >= nextVarTarget) {
          rewards.push({ t, r: cum });
          sinceReward = 0;
          varStep = (varStep + 1) % varMultipliers.length;
          nextVarTarget = Math.max(2, density * varMultipliers[varStep]);
        }
      } else if (schedule === "FR") {
        const baseRate = Math.max(1.2, 2.2 - density * 0.04);
        if (pauseLeft > 0 && !inExt) {
          delta = 0.08;
          pauseLeft -= 1;
        } else {
          delta = inExt ? baseRate * Math.exp(-0.085 * extElapsed) : baseRate;
        }
        cum += delta;
        sinceReward += delta;
        if (!inExt && sinceReward >= density) {
          rewards.push({ t, r: cum });
          sinceReward = 0;
          pauseLeft = Math.min(5, Math.max(2, Math.round(density / 3)));
        }
      } else if (schedule === "VI") {
        const baseRate = Math.max(0.85, 1.45 - density * 0.025);
        delta = inExt ? baseRate * Math.exp(-0.032 * extElapsed) : baseRate;
        cum += delta;
        sinceReward += 1;
        if (!inExt && sinceReward >= nextVarTarget) {
          rewards.push({ t, r: cum });
          sinceReward = 0;
          varStep = (varStep + 1) % varMultipliers.length;
          nextVarTarget = Math.max(3, Math.round(density * 1.4 * varMultipliers[varStep]));
        }
      } else {
        // FI: classic scalloped curve
        const interval = Math.max(6, Math.round(density * 1.6));
        const frac = Math.min(1, sinceReward / interval);
        const scallopRate = 0.15 + 2.35 * frac * frac;
        delta = inExt ? 1.15 * Math.exp(-0.07 * extElapsed) : scallopRate;
        cum += delta;
        sinceReward += 1;
        if (!inExt && sinceReward >= interval) {
          rewards.push({ t, r: cum });
          sinceReward = 0;
        }
      }
      pts.push({ t, r: cum });
    }

    const rAt60 = Math.round(pts[60]?.r ?? 0);
    const rAt100 = Math.round(pts[100]?.r ?? 0);
    const extGain = rAt100 - rAt60;
    const maxR = Math.max(120, Math.ceil((pts[pts.length - 1]?.r ?? 120) / 20) * 20);
    return { pts, rewards, rAt60, rAt100, extGain, maxR, extStart };
  }, [schedule, density, extSwitch]);

  const scheduleMeta: Record<ScheduleKind, { pause: string; resistance: string; summary: string }> = {
    VR: {
      pause: "None",
      resistance: "Highest",
      summary:
        "Variable-Ratio (VR) delivers the steepest steady response rate and strongest resistance to extinction — the mechanism behind slot machines and gacha apps.",
    },
    FR: {
      pause: "Brief post-reward",
      resistance: "Low–Moderate",
      summary:
        "Fixed-Ratio (FR) creates crisp stair-step bursts punctuated by a short post-reinforcement pause once each fixed quota is earned.",
    },
    VI: {
      pause: "None",
      resistance: "High",
      summary:
        "Variable-Interval (VI) maintains moderate, steady responding (like pop quizzes or checking messages) with strong persistence during extinction.",
    },
    FI: {
      pause: "Long scallop",
      resistance: "Moderate–Low",
      summary:
        "Fixed-Interval (FI) generates the classic scalloped curve — minimal effort immediately after reinforcement followed by a frantic pre-deadline surge.",
    },
  };

  // SVG mapping helpers (560 x 215)
  const W = 560;
  const H = 215;
  const padL = 46;
  const padR = 20;
  const padT = 22;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const cx = (val: number, maxVal: number) => padL + (val / maxVal) * plotW;
  const cy = (val: number, maxVal: number) => padT + plotH - (val / maxVal) * plotH;

  const classicalAcqPath = classicalData.pts
    .filter((p) => p.phase === "acq")
    .map((p, i) => `${i === 0 ? "M" : "L"} ${cx(p.x, classicalData.maxX).toFixed(1)} ${cy(p.y, 100).toFixed(1)}`)
    .join(" ");

  const classicalExtPts = classicalData.pts.filter((p) => p.phase === "ext" || p.x === acqTrials);
  const classicalExtPath =
    extTrials > 0
      ? classicalExtPts
          .map((p, i) => `${i === 0 ? "M" : "L"} ${cx(p.x, classicalData.maxX).toFixed(1)} ${cy(p.y, 100).toFixed(1)}`)
          .join(" ")
      : "";

  const classicalRecPts = classicalData.pts.filter((p) => p.phase === "rec");
  const classicalRecPath = classicalRecPts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${cx(p.x, classicalData.maxX).toFixed(1)} ${cy(p.y, 100).toFixed(1)}`)
    .join(" ");

  const operantPath = operantData.pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${cx(p.t, 100).toFixed(1)} ${cy(p.r, operantData.maxR).toFixed(1)}`)
    .join(" ");

  return (
    <WidgetFrame
      title="Classical & Operant Conditioning Simulator"
      tryThis={[
        "In **Classical** mode, push Extinction to 12 trials and toggle **24h Rest** to watch Spontaneous Recovery prove extinction does not erase the original trace.",
        "Switch to **Operant** mode with **Extinction at t = 60s** and compare **VR** vs **FR** and **FI** cumulative curves.",
      ]}
      caption={
        mode === "classical" ? (
          <span>
            <strong>Pavlovian Change:</strong> {acqTrials} CS+UCS pairings build CR strength to{" "}
            <strong>{classicalData.peak}%</strong>. Presenting CS alone for {extTrials} trials suppresses CR down to{" "}
            <strong>{classicalData.postExt}%</strong>
            {restMode === "rest" && extTrials > 0
              ? `, yet a 24-hour rest triggers spontaneous recovery back to ${classicalData.recPeak}% — proving extinction creates inhibitory learning rather than erasure.`
              : "."}
          </span>
        ) : (
          <span>
            <strong>Skinnerian Schedule ({schedule}):</strong> {scheduleMeta[schedule].summary}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Conditioning paradigm"
          value={mode}
          onChange={setMode}
          options={[
            { value: "classical", label: "Classical (Pavlov)" },
            { value: "operant", label: "Operant Schedules (Skinner)" },
          ]}
        />

        {mode === "classical" ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Slider
                label="Acquisition pairings (CS + UCS)"
                value={acqTrials}
                min={2}
                max={20}
                onChange={setAcqTrials}
                format={(v) => `${v} trials`}
              />
              <Slider
                label="Extinction trials (CS alone)"
                value={extTrials}
                min={0}
                max={15}
                onChange={setExtTrials}
                format={(v) => `${v} trials`}
              />
            </div>
            <Segmented
              label="Post-extinction rest delay"
              value={restMode}
              onChange={setRestMode}
              options={[
                { value: "none", label: "No Rest Pause" },
                { value: "rest", label: "24h Rest → Spontaneous Recovery" },
              ]}
            />

            <div className="rounded-xl border border-line bg-white p-2">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
                aria-label="Classical conditioning acquisition, extinction, and spontaneous recovery curve"
              >
                {/* Phase shading */}
                <rect
                  x={padL}
                  y={padT}
                  width={cx(acqTrials, classicalData.maxX) - padL}
                  height={plotH}
                  fill="#ede9fe"
                  opacity={0.45}
                />
                {extTrials > 0 ? (
                  <rect
                    x={cx(acqTrials, classicalData.maxX)}
                    y={padT}
                    width={cx(acqTrials + extTrials, classicalData.maxX) - cx(acqTrials, classicalData.maxX)}
                    height={plotH}
                    fill="#ffedd5"
                    opacity={0.45}
                  />
                ) : null}
                {restMode === "rest" && extTrials > 0 ? (
                  <rect
                    x={cx(classicalData.recStart, classicalData.maxX)}
                    y={padT}
                    width={cx(classicalData.recStart + 4, classicalData.maxX) - cx(classicalData.recStart, classicalData.maxX)}
                    height={plotH}
                    fill="#dcfce7"
                    opacity={0.5}
                  />
                ) : null}

                {/* Grid */}
                {[0, 25, 50, 75, 100].map((v) => (
                  <g key={v}>
                    <line x1={padL} x2={W - padR} y1={cy(v, 100)} y2={cy(v, 100)} stroke="#e5e7eb" strokeWidth={1} />
                    <text x={padL - 6} y={cy(v, 100) + 3} fontSize={9.5} textAnchor="end" fill="#6b7280">
                      {v}%
                    </text>
                  </g>
                ))}
                <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="#374151" strokeWidth={1.5} />
                <line x1={padL} x2={padL} y1={padT} y2={padT + plotH} stroke="#374151" strokeWidth={1.5} />

                {/* Phase labels */}
                <text x={padL + 6} y={padT + 13} fontSize={9.5} fontWeight={700} fill="#5b21b6">
                  Acquisition
                </text>
                {extTrials > 0 ? (
                  <text x={cx(acqTrials, classicalData.maxX) + 5} y={padT + 13} fontSize={9.5} fontWeight={700} fill="#c2410c">
                    Extinction
                  </text>
                ) : null}
                {restMode === "rest" && extTrials > 0 ? (
                  <text x={cx(classicalData.recStart, classicalData.maxX) + 3} y={padT + 13} fontSize={9} fontWeight={700} fill="#15803d">
                    Recovery
                  </text>
                ) : null}

                {/* Curves */}
                <path d={classicalAcqPath} fill="none" stroke="#7c3aed" strokeWidth={3} strokeLinecap="round" />
                {classicalExtPath ? (
                  <path d={classicalExtPath} fill="none" stroke="#ea580c" strokeWidth={3} strokeLinecap="round" />
                ) : null}
                {classicalRecPath ? (
                  <>
                    <line
                      x1={cx(acqTrials + extTrials, classicalData.maxX)}
                      y1={cy(classicalData.postExt, 100)}
                      x2={cx(classicalData.recStart, classicalData.maxX)}
                      y2={cy(classicalData.recPeak, 100)}
                      stroke="#16a34a"
                      strokeWidth={1.8}
                      strokeDasharray="4 3"
                    />
                    <path d={classicalRecPath} fill="none" stroke="#16a34a" strokeWidth={3} strokeLinecap="round" />
                  </>
                ) : null}

                <text x={padL + plotW / 2} y={H - 8} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#4b5563">
                  Conditioning Trials →
                </text>
                <text
                  x={14}
                  y={padT + plotH / 2}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={700}
                  fill="#4b5563"
                  transform={`rotate(-90 14 ${padT + plotH / 2})`}
                >
                  CR Strength (%)
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Readout label="Peak CR Strength" value={`${classicalData.peak}%`} tone="brand" />
              <Readout label="After Extinction" value={`${classicalData.postExt}%`} tone={classicalData.postExt < 25 ? "good" : "ink"} />
              <Readout
                label="Recovery Rebound"
                value={restMode === "rest" && extTrials > 0 ? `${classicalData.recPeak}%` : "Off"}
                tone={restMode === "rest" && extTrials > 0 ? "bad" : "ink"}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Segmented
                label="Operant schedule type"
                value={schedule}
                onChange={setSchedule}
                options={[
                  { value: "VR", label: "VR (Var. Ratio)" },
                  { value: "FR", label: "FR (Fix. Ratio)" },
                  { value: "VI", label: "VI (Var. Int.)" },
                  { value: "FI", label: "FI (Fix. Int.)" },
                ]}
              />
              <Segmented
                label="Reward delivery toggle"
                value={extSwitch}
                onChange={setExtSwitch}
                options={[
                  { value: "active", label: "Rewards On" },
                  { value: "extinction", label: "Extinction at 60s" },
                ]}
              />
            </div>

            <Slider
              label={schedule === "VR" || schedule === "FR" ? "Average / Fixed Ratio Requirement" : "Average / Fixed Time Interval"}
              value={density}
              min={4}
              max={16}
              onChange={setDensity}
              format={(v) => (schedule === "VR" || schedule === "FR" ? `${v} responses` : `${Math.round(v * 1.5)} s`)}
            />

            <div className="rounded-xl border border-line bg-white p-2">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
                aria-label="Skinner operant conditioning cumulative response recorder"
              >
                {extSwitch === "extinction" ? (
                  <>
                    <rect
                      x={cx(60, 100)}
                      y={padT}
                      width={W - padR - cx(60, 100)}
                      height={plotH}
                      fill="#fee2e2"
                      opacity={0.4}
                    />
                    <line
                      x1={cx(60, 100)}
                      x2={cx(60, 100)}
                      y1={padT}
                      y2={padT + plotH}
                      stroke="#dc2626"
                      strokeWidth={1.6}
                      strokeDasharray="5 3"
                    />
                    <text x={cx(60, 100) + 5} y={padT + 13} fontSize={9.5} fontWeight={800} fill="#b91c1c">
                      Rewards Stopped (Extinction)
                    </text>
                  </>
                ) : null}

                {[0, 0.25, 0.5, 0.75, 1].map((f) => {
                  const val = Math.round(operantData.maxR * f);
                  return (
                    <g key={f}>
                      <line x1={padL} x2={W - padR} y1={cy(val, operantData.maxR)} y2={cy(val, operantData.maxR)} stroke="#e5e7eb" strokeWidth={1} />
                      <text x={padL - 6} y={cy(val, operantData.maxR) + 3} fontSize={9.5} textAnchor="end" fill="#6b7280">
                        {val}
                      </text>
                    </g>
                  );
                })}
                <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="#374151" strokeWidth={1.5} />
                <line x1={padL} x2={padL} y1={padT} y2={padT + plotH} stroke="#374151" strokeWidth={1.5} />

                <path
                  d={operantPath}
                  fill="none"
                  stroke={schedule === "VR" ? "#7c3aed" : schedule === "FR" ? "#0d9488" : schedule === "VI" ? "#2563eb" : "#ea580c"}
                  strokeWidth={3}
                  strokeLinejoin="round"
                />

                {/* Reward delivery hash pips */}
                {operantData.rewards.map((rw, idx) => (
                  <circle
                    key={`${rw.t}-${idx}`}
                    cx={cx(rw.t, 100)}
                    cy={cy(rw.r, operantData.maxR)}
                    r={3.2}
                    fill="#16a34a"
                    stroke="#ffffff"
                    strokeWidth={1}
                  />
                ))}

                <text x={padL + plotW / 2} y={H - 8} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#4b5563">
                  Elapsed Session Time (seconds) • Green dots = Reward Delivered
                </text>
                <text
                  x={14}
                  y={padT + plotH / 2}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={700}
                  fill="#4b5563"
                  transform={`rotate(-90 14 ${padT + plotH / 2})`}
                >
                  Cumulative Responses
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Readout label="Responses by 60s" value={operantData.rAt60} tone="brand" />
              <Readout label="Post-Reward Pause" value={scheduleMeta[schedule].pause} tone="ink" />
              <Readout
                label={extSwitch === "extinction" ? "Extinction Persistence" : "Extinction Resistance"}
                value={extSwitch === "extinction" ? `+${operantData.extGain} reps` : scheduleMeta[schedule].resistance}
                tone={schedule === "VR" || schedule === "VI" ? "good" : "bad"}
              />
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// Widget 2: Cognitive Load & Working-Memory Capacity Lab
// ============================================================================
type LearnerProfile = "novice" | "expert" | "stress";
type StudyStrategy = "reread" | "dual" | "retrieval";

function CognitiveLoadLab() {
  const [profile, setProfile] = useState<LearnerProfile>("novice");
  const [intrinsic, setIntrinsic] = useState(4);
  const [extraneous, setExtraneous] = useState(3);
  const [strategy, setStrategy] = useState<StudyStrategy>("retrieval");
  const [sleepHours, setSleepHours] = useState(8);

  const model = useMemo(() => {
    const wmCap = profile === "expert" ? 12 : profile === "stress" ? 7 : 10;
    const effIntrinsic = profile === "expert" ? Math.max(1, intrinsic - 2) : intrinsic;
    const effExtraneous = strategy === "dual" ? Math.max(0, extraneous - 1) : extraneous;
    const used = effIntrinsic + effExtraneous;
    const overload = Math.max(0, used - wmCap);
    const germane = Math.max(0, wmCap - used);

    // Retention curve across Days 0, 1, 3, 7
    const sleepFactor = sleepHours >= 8 ? 1.0 : sleepHours >= 6 ? 0.88 : 0.72;
    const loadEfficiency = overload > 0 ? Math.max(0.32, 0.65 - overload * 0.1) : Math.min(1.0, 0.72 + (germane / wmCap) * 0.45);
    const decayBase = strategy === "retrieval" ? 0.042 : strategy === "dual" ? 0.068 : 0.115;
    const effDecay = decayBase / (sleepFactor * Math.max(0.5, loadEfficiency));
    const day0 = Math.round(Math.min(96, (strategy === "reread" ? 84 : 80) * (overload > 0 ? Math.max(0.55, 1 - overload * 0.12) : 1)));

    const days = [0, 1, 2, 3, 5, 7];
    const curve = days.map((d) => ({
      day: d,
      pct: Math.round(Math.max(10, day0 * Math.exp(-effDecay * d))),
      rereadRef: Math.round(81 * Math.exp(-0.102 * d)),
    }));
    const day7 = curve[curve.length - 1]?.pct ?? 0;
    const status: "Optimal" | "Tight" | "Overloaded" = overload > 0 ? "Overloaded" : germane <= 1 ? "Tight" : "Optimal";

    return { wmCap, effIntrinsic, effExtraneous, used, overload, germane, curve, day7, status };
  }, [profile, intrinsic, extraneous, strategy, sleepHours]);

  // Bar SVG geometry (560 x 92)
  const BW = 560;
  const maxUnits = Math.max(14, model.used + 1);
  const bx = (u: number) => 20 + (u / maxUnits) * (BW - 40);

  // Retention SVG geometry (560 x 180)
  const RW = 560;
  const RH = 180;
  const padL = 44;
  const padR = 24;
  const padT = 18;
  const padB = 32;
  const pw = RW - padL - padR;
  const ph = RH - padT - padB;
  const rx = (day: number) => padL + (day / 7) * pw;
  const ry = (pct: number) => padT + ph - (pct / 100) * ph;

  const userPath = model.curve
    .map((p, i) => `${i === 0 ? "M" : "L"} ${rx(p.day).toFixed(1)} ${ry(p.pct).toFixed(1)}`)
    .join(" ");
  const refPath = model.curve
    .map((p, i) => `${i === 0 ? "M" : "L"} ${rx(p.day).toFixed(1)} ${ry(p.rereadRef).toFixed(1)}`)
    .join(" ");

  return (
    <WidgetFrame
      title="Cognitive Load & Working-Memory Capacity Lab"
      tryThis={[
        "Raise **Extraneous Load** to 6 while keeping **Intrinsic Load** at 5 — watch Working Memory overflow and starve Germane schema building.",
        "Switch Learner Context to **Stress / Threat Drag** (mirroring Schmader & Johns's stereotype-threat WM drain), then compare **Massed Rereading** vs **Spaced Retrieval** with 8h sleep.",
      ]}
      caption={
        <span>
          <strong>Sweller + LTP Synthesis:</strong>{" "}
          {model.status === "Overloaded"
            ? `Working memory is overloaded by ${model.overload} unit${model.overload === 1 ? "" : "s"} — zero capacity remains for germane schema encoding! Cut extraneous clutter (split-attention / phone alerts) first.`
            : `With ${model.germane} unit${model.germane === 1 ? "" : "s"} of free germane headroom and ${sleepHours}h slow-wave sleep, ${
                strategy === "retrieval"
                  ? "spaced retrieval practice actively consolidates LTP traces for strong 7-day retention."
                  : strategy === "dual"
                    ? "dual coding distributes verbal and visual input across working-memory channels, cutting extraneous friction."
                    : "massed rereading feels smooth on Day 0 but suffers steep forgetting by Day 7 (Roediger & Karpicke, 2006)."
              }`}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Learner working-memory context"
            value={profile}
            onChange={setProfile}
            options={[
              { value: "novice", label: "Novice (10 WM)" },
              { value: "expert", label: "Schema Expert (12 WM)" },
              { value: "stress", label: "Threat / Stress (7 WM)" },
            ]}
          />
          <Segmented
            label="Study strategy"
            value={strategy}
            onChange={setStrategy}
            options={[
              { value: "reread", label: "Massed Reread" },
              { value: "dual", label: "Dual Coding" },
              { value: "retrieval", label: "Spaced Retrieval" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Intrinsic Load (element interactivity)"
            value={intrinsic}
            min={1}
            max={8}
            onChange={setIntrinsic}
            format={(v) => `${v} units`}
          />
          <Slider
            label="Extraneous Load (clutter / phone alerts)"
            value={extraneous}
            min={0}
            max={7}
            onChange={setExtraneous}
            format={(v) => `${v} units`}
          />
        </div>

        <Stepper
          label="Nightly Sleep Consolidation (SWS)"
          value={sleepHours}
          min={4}
          max={9}
          onChange={setSleepHours}
          format={(v) => `${v} hrs`}
        />

        {/* SVG 1: Working Memory Capacity Bar */}
        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox={`0 0 ${BW} 92`}
            className="h-auto w-full"
            role="img"
            aria-label="Working memory capacity bar showing intrinsic, extraneous, and germane cognitive load"
          >
            <text x={20} y={16} fontSize={10.5} fontWeight={800} fill="#1c1630">
              Working-Memory Capacity Meter ({model.wmCap} units ceiling)
            </text>

            {/* Background capacity track */}
            <rect x={bx(0)} y={26} width={bx(model.wmCap) - bx(0)} height={34} rx={6} fill="#f3f4f6" stroke="#d1d5db" strokeWidth={1.2} />

            {/* Intrinsic segment */}
            <rect x={bx(0)} y={26} width={Math.max(0, bx(model.effIntrinsic) - bx(0))} height={34} rx={4} fill="#f59e0b" />
            {model.effIntrinsic >= 2 ? (
              <text x={(bx(0) + bx(model.effIntrinsic)) / 2} y={47} textAnchor="middle" fontSize={10} fontWeight={800} fill="#ffffff">
                Intrinsic ({model.effIntrinsic})
              </text>
            ) : null}

            {/* Extraneous segment */}
            {model.effExtraneous > 0 ? (
              <>
                <rect
                  x={bx(model.effIntrinsic)}
                  y={26}
                  width={Math.max(0, bx(model.effIntrinsic + model.effExtraneous) - bx(model.effIntrinsic))}
                  height={34}
                  rx={4}
                  fill={model.overload > 0 ? "#dc2626" : "#ea580c"}
                />
                {model.effExtraneous >= 2 ? (
                  <text
                    x={(bx(model.effIntrinsic) + bx(model.effIntrinsic + model.effExtraneous)) / 2}
                    y={47}
                    textAnchor="middle"
                    fontSize={10}
                    fontWeight={800}
                    fill="#ffffff"
                  >
                    Extraneous ({model.effExtraneous})
                  </text>
                ) : null}
              </>
            ) : null}

            {/* Germane headroom segment */}
            {model.germane > 0 ? (
              <>
                <rect
                  x={bx(model.used)}
                  y={26}
                  width={Math.max(0, bx(model.wmCap) - bx(model.used))}
                  height={34}
                  rx={4}
                  fill="#16a34a"
                />
                {model.germane >= 2 ? (
                  <text x={(bx(model.used) + bx(model.wmCap)) / 2} y={47} textAnchor="middle" fontSize={10} fontWeight={800} fill="#ffffff">
                    Germane ({model.germane})
                  </text>
                ) : null}
              </>
            ) : null}

            {/* WM Ceiling marker */}
            <line x1={bx(model.wmCap)} x2={bx(model.wmCap)} y1={20} y2={68} stroke="#b91c1c" strokeWidth={2.2} strokeDasharray="4 2" />
            <text x={bx(model.wmCap)} y={82} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#b91c1c">
              WM Limit ({model.wmCap})
            </text>
            {model.overload > 0 ? (
              <text x={bx(model.used)} y={16} textAnchor="end" fontSize={10} fontWeight={800} fill="#dc2626">
                OVERLOAD (+{model.overload})!
              </text>
            ) : null}
          </svg>
        </div>

        {/* SVG 2: 7-Day Retention Projection */}
        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox={`0 0 ${RW} ${RH}`}
            className="h-auto w-full"
            role="img"
            aria-label="Projected seven day memory retention curve comparing current cognitive load setup with massed rereading"
          >
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={padL} x2={RW - padR} y1={ry(v)} y2={ry(v)} stroke="#e5e7eb" strokeWidth={1} />
                <text x={padL - 6} y={ry(v) + 3} fontSize={9.5} textAnchor="end" fill="#6b7280">
                  {v}%
                </text>
              </g>
            ))}
            <line x1={padL} x2={RW - padR} y1={padT + ph} y2={padT + ph} stroke="#374151" strokeWidth={1.4} />
            <line x1={padL} x2={padL} y1={padT} y2={padT + ph} stroke="#374151" strokeWidth={1.4} />

            {/* Dashed reference: massed rereading */}
            <path d={refPath} fill="none" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 4" />
            <text x={rx(7) - 4} y={ry(40) + 14} textAnchor="end" fontSize={9} fontWeight={700} fill="#6b7280">
              Rereading ref (~40%)
            </text>

            {/* Active setup retention curve */}
            <path
              d={userPath}
              fill="none"
              stroke={model.status === "Overloaded" ? "#dc2626" : "#7c3aed"}
              strokeWidth={3.2}
              strokeLinecap="round"
            />
            {model.curve.map((pt) => (
              <circle
                key={pt.day}
                cx={rx(pt.day)}
                cy={ry(pt.pct)}
                r={3.8}
                fill={model.status === "Overloaded" ? "#dc2626" : "#7c3aed"}
              />
            ))}

            {[0, 1, 3, 5, 7].map((d) => (
              <text key={d} x={rx(d)} y={RH - 10} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#4b5563">
                Day {d}
              </text>
            ))}
            <text x={rx(7) - 6} y={Math.max(padT + 12, ry(model.day7) - 8)} textAnchor="end" fontSize={10} fontWeight={800} fill="#4c1d95">
              Day 7: {model.day7}%
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Germane Headroom" value={`${model.germane} units`} tone={model.germane >= 3 ? "good" : model.germane === 0 ? "bad" : "ink"} />
          <Readout
            label="Load Status"
            value={model.status}
            tone={model.status === "Optimal" ? "good" : model.status === "Overloaded" ? "bad" : "ink"}
          />
          <Readout label="7-Day Recall Est." value={`${model.day7}%`} tone={model.day7 >= 55 ? "good" : model.day7 < 35 ? "bad" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "conditioning-schedule-simulator",
    title: "Classical & Operant Conditioning Simulator",
    blurb: "Simulate Pavlovian acquisition, extinction, and spontaneous recovery — or compare Skinner's VR, FR, VI, and FI cumulative response curves.",
    Component: ConditioningScheduleSimulator,
  },
  {
    id: "cognitive-load-wm-lab",
    title: "Cognitive Load & Working-Memory Capacity Lab",
    blurb: "Balance Sweller's intrinsic, extraneous, and germane loads against working-memory limits, sleep consolidation, and 7-day retrieval retention.",
    Component: CognitiveLoadLab,
  },
];

export default widgets;
