// iOS home-screen icon: Psi (Ψ) + IB Psychology badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #5b21b6 100%)`,
        }}
      >
        <svg width={90} height={90} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <line x1="50" y1="14" x2="50" y2="86" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" />
          <path d="M22 24 C22 54, 78 54, 78 24" fill="none" stroke="#ddd6fe" strokeWidth={8} strokeLinecap="round" />
          <line x1="36" y1="86" x2="64" y2="86" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            padding: "2px 10px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 0.4,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
