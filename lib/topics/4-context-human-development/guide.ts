import type { TopicGuide } from "../../types";

const SVG_BRAIN_ZPD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="Dual panel diagram: synaptic density blooming and pruning curve from birth to age 25 on the left, and Vygotsky Zone of Proximal Development concentric rings compared with Piagetian self-discovery on the right">
  <rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
  <text x="165" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1c1630">A. Synaptic Blooming, Pruning &amp; PFC Maturation</text>
  <line x1="46" y1="230" x2="305" y2="230" stroke="#5b5375" stroke-width="1.8"/>
  <line x1="46" y1="45" x2="46" y2="230" stroke="#5b5375" stroke-width="1.8"/>
  <text x="16" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b5375" transform="rotate(-90 16 138)">Relative Synaptic Density</text>
  <text x="176" y="264" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b5375">Age (Years)</text>
  <text x="52" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">0</text>
  <text x="96" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">2</text>
  <text x="150" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">6</text>
  <text x="206" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">14</text>
  <text x="292" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">25</text>
  <rect x="180" y="50" width="66" height="179" fill="#fef3c7" opacity="0.7"/>
  <text x="213" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Adolescent</text>
  <text x="213" y="75" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Mismatch</text>
  <path d="M 48 210 C 64 100, 82 62, 102 64 C 132 68, 168 128, 215 150 C 250 162, 275 166, 298 168" fill="none" stroke="#7c3aed" stroke-width="3"/>
  <path d="M 48 220 C 78 190, 125 148, 178 118 C 214 98, 255 96, 298 96" fill="none" stroke="#ea580c" stroke-width="2.4" stroke-dasharray="6,4"/>
  <circle cx="100" cy="64" r="4" fill="#7c3aed"/>
  <text x="108" y="56" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Blooming peak</text>
  <text x="148" y="136" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Pruning</text>
  <line x1="56" y1="283" x2="76" y2="283" stroke="#7c3aed" stroke-width="3"/>
  <text x="81" y="287" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Synaptic density (PFC)</text>
  <line x1="196" y1="283" x2="216" y2="283" stroke="#ea580c" stroke-width="2.4" stroke-dasharray="5,3"/>
  <text x="221" y="287" font-family="system-ui, sans-serif" font-size="9.5" fill="#1c1630">Limbic reward</text>
  <line x1="330" y1="18" x2="330" y2="296" stroke="#e2dcf0" stroke-width="1.5"/>
  <text x="485" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1c1630">B. Vygotsky ZPD vs Piagetian Schema Shift</text>
  <circle cx="485" cy="148" r="102" fill="#f1eef9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="485" cy="148" r="71" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.4"/>
  <circle cx="485" cy="148" r="38" fill="#dcfce7" stroke="#15803d" stroke-width="2.2"/>
  <text x="485" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d">Independent</text>
  <text x="485" y="156" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d">Mastery</text>
  <text x="485" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#5b21b6">ZPD (With MKO Scaffolding)</text>
  <text x="485" y="205" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#5b21b6">Language &amp; Cultural Tools</text>
  <text x="485" y="61" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#475569">Beyond Current Reach</text>
  <rect x="352" y="262" width="268" height="36" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="486" y="277" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1c1630">Piaget: Solo exploration → Disequilibrium → Accommodation</text>
  <text x="486" y="291" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Vygotsky: Social interaction (MKO) → Internalized cognition</text>
</svg>`;

const SVG_STRANGE_SITUATION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-label="Grouped bar chart comparing Strange Situation attachment distributions across five countries from van IJzendoorn and Kroonenberg 1988">
  <rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
  <text x="320" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Strange Situation Distributions Across Cultures (van IJzendoorn &amp; Kroonenberg, 1988)</text>
  <line x1="60" y1="228" x2="606" y2="228" stroke="#5b5375" stroke-width="1.8"/>
  <line x1="60" y1="54" x2="60" y2="228" stroke="#5b5375" stroke-width="1.8"/>
  <line x1="60" y1="184" x2="606" y2="184" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="60" y1="140" x2="606" y2="140" stroke="#e2dcf0" stroke-width="1"/>
  <line x1="60" y1="96" x2="606" y2="96" stroke="#e2dcf0" stroke-width="1"/>
  <text x="50" y="232" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">0%</text>
  <text x="50" y="188" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">20%</text>
  <text x="50" y="144" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">40%</text>
  <text x="50" y="100" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">60%</text>
  <text x="50" y="58" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" fill="#5b5375">80%</text>
  <text x="18" y="142" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b5375" transform="rotate(-90 18 142)">Infants (%)</text>
  <!-- USA: 65, 21, 14 (scale: 2.175 px per %) -->
  <rect x="78" y="87" width="22" height="141" rx="3" fill="#15803d"/>
  <text x="89" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">65</text>
  <rect x="103" y="182" width="22" height="46" rx="3" fill="#0369a1"/>
  <text x="114" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">21</text>
  <rect x="128" y="198" width="22" height="30" rx="3" fill="#ea580c"/>
  <text x="139" y="193" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">14</text>
  <text x="114" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1c1630">USA</text>
  <!-- W. Germany: 57, 35, 8 -->
  <rect x="186" y="104" width="22" height="124" rx="3" fill="#15803d"/>
  <text x="197" y="99" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">57</text>
  <rect x="211" y="152" width="22" height="76" rx="3" fill="#0369a1"/>
  <text x="222" y="147" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">35</text>
  <rect x="236" y="211" width="22" height="17" rx="3" fill="#ea580c"/>
  <text x="247" y="206" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">8</text>
  <text x="222" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1c1630">W. Germany</text>
  <!-- Japan: 68, 5, 27 -->
  <rect x="294" y="80" width="22" height="148" rx="3" fill="#15803d"/>
  <text x="305" y="75" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">68</text>
  <rect x="319" y="217" width="22" height="11" rx="3" fill="#0369a1"/>
  <text x="330" y="212" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">5</text>
  <rect x="344" y="169" width="22" height="59" rx="3" fill="#ea580c"/>
  <text x="355" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">27</text>
  <text x="330" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1c1630">Japan</text>
  <!-- Great Britain: 75, 22, 3 -->
  <rect x="402" y="65" width="22" height="163" rx="3" fill="#15803d"/>
  <text x="413" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">75</text>
  <rect x="427" y="180" width="22" height="48" rx="3" fill="#0369a1"/>
  <text x="438" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">22</text>
  <rect x="452" y="221" width="22" height="7" rx="3" fill="#ea580c"/>
  <text x="463" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">3</text>
  <text x="438" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1c1630">Great Britain</text>
  <!-- Sweden: 75, 21, 4 -->
  <rect x="510" y="65" width="22" height="163" rx="3" fill="#15803d"/>
  <text x="521" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#14532d">75</text>
  <rect x="535" y="182" width="22" height="46" rx="3" fill="#0369a1"/>
  <text x="546" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">21</text>
  <rect x="560" y="219" width="22" height="9" rx="3" fill="#ea580c"/>
  <text x="571" y="214" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">4</text>
  <text x="546" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1c1630">Sweden</text>
  <!-- Legend -->
  <rect x="112" y="268" width="14" height="14" rx="3" fill="#15803d"/>
  <text x="131" y="279" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">Type B: Secure</text>
  <rect x="242" y="268" width="14" height="14" rx="3" fill="#0369a1"/>
  <text x="261" y="279" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">Type A: Avoidant</text>
  <rect x="382" y="268" width="14" height="14" rx="3" fill="#ea580c"/>
  <text x="401" y="279" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1c1630">Type C: Resistant (Ambivalent)</text>
</svg>`;

const SVG_MARCIA_GRID = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="Marcia two-by-two identity status matrix crossing high and low exploration with high and low commitment">
  <rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
  <text x="345" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Marcia's Four Identity Statuses (Exploration × Commitment)</text>
  <text x="235" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d">COMMITMENT: HIGH (Present)</text>
  <text x="485" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#c2410c">COMMITMENT: LOW (Absent)</text>
  <text x="44" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#6d28d9" transform="rotate(-90 44 122)">EXPLORATION</text>
  <text x="64" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#6d28d9" transform="rotate(-90 64 122)">HIGH (Crisis)</text>
  <text x="44" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b5375" transform="rotate(-90 44 242)">EXPLORATION</text>
  <text x="64" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b5375" transform="rotate(-90 64 242)">LOW (None)</text>
  <!-- Achievement -->
  <rect x="115" y="64" width="240" height="108" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="235" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#14532d">Identity Achievement</text>
  <text x="235" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Weighed alternatives actively,</text>
  <text x="235" y="128" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">then made a personal choice.</text>
  <text x="235" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d">High Exploration + High Commitment</text>
  <!-- Moratorium -->
  <rect x="369" y="64" width="240" height="108" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="489" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#5b21b6">Moratorium</text>
  <text x="489" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Actively questioning beliefs, roles,</text>
  <text x="489" y="128" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">or careers; not yet committed.</text>
  <text x="489" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">High Exploration + Low Commitment</text>
  <!-- Foreclosure -->
  <rect x="115" y="186" width="240" height="108" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
  <text x="235" y="212" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#075985">Foreclosure</text>
  <text x="235" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Adopted family or cultural path</text>
  <text x="235" y="250" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">without exploring alternatives.</text>
  <text x="235" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">Low Exploration + High Commitment</text>
  <!-- Diffusion -->
  <rect x="369" y="186" width="240" height="108" rx="12" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>
  <text x="489" y="212" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#9a3412">Identity Diffusion</text>
  <text x="489" y="234" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">Neither exploring options nor</text>
  <text x="489" y="250" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1c1630">committing to a clear direction.</text>
  <text x="489" y="274" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#c2410c">Low Exploration + Low Commitment</text>
</svg>`;

const SVG_DESIGNS_TIMELINE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-label="Comparison grid of Cross-Sectional, Longitudinal, and Cross-Sequential developmental research designs across birth cohorts and testing years">
  <rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
  <text x="320" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#1c1630">Developmental Research Designs Across Calendar Time &amp; Birth Cohorts</text>
  <!-- Column headers -->
  <text x="195" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b5375">Year 2020</text>
  <text x="355" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b5375">Year 2025</text>
  <text x="515" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b5375">Year 2030</text>
  <!-- Row labels -->
  <text x="18" y="96" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#1c1630">Born 2015</text>
  <text x="18" y="156" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#1c1630">Born 2010</text>
  <text x="18" y="216" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#1c1630">Born 2005</text>
  <!-- Cross-Sectional vertical highlight (2020) -->
  <rect x="135" y="64" width="120" height="176" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Longitudinal horizontal highlight (Born 2015) -->
  <rect x="128" y="72" width="460" height="44" rx="10" fill="#ede9fe" fill-opacity="0.72" stroke="#7c3aed" stroke-width="2"/>
  <!-- Cross-Sequential box covering 2010 & 2005 across 2020-2030 -->
  <rect x="128" y="130" width="460" height="104" rx="10" fill="#e0f2fe" fill-opacity="0.45" stroke="#0369a1" stroke-width="1.8" stroke-dasharray="6,4"/>
  <!-- Nodes row 1: Born 2015 -->
  <rect x="155" y="80" width="80" height="28" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="195" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 5</text>
  <rect x="315" y="80" width="80" height="28" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="355" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 10</text>
  <rect x="475" y="80" width="80" height="28" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="515" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 15</text>
  <line x1="238" y1="94" x2="310" y2="94" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="310,94 303,90 303,98" fill="#7c3aed"/>
  <line x1="398" y1="94" x2="470" y2="94" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="470,94 463,90 463,98" fill="#7c3aed"/>
  <!-- Nodes row 2: Born 2010 -->
  <rect x="155" y="140" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="195" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 10</text>
  <rect x="315" y="140" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="355" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 15</text>
  <rect x="475" y="140" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="515" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 20</text>
  <line x1="238" y1="154" x2="310" y2="154" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="310,154 303,150 303,158" fill="#0369a1"/>
  <line x1="398" y1="154" x2="470" y2="154" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="470,154 463,150 463,158" fill="#0369a1"/>
  <!-- Nodes row 3: Born 2005 -->
  <rect x="155" y="198" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="195" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 15</text>
  <rect x="315" y="198" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="355" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 20</text>
  <rect x="475" y="198" width="80" height="28" rx="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.6"/>
  <text x="515" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1c1630">Age 25</text>
  <line x1="238" y1="212" x2="310" y2="212" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="310,212 303,208 303,216" fill="#0369a1"/>
  <line x1="398" y1="212" x2="470" y2="212" stroke="#0369a1" stroke-width="1.8"/>
  <polygon points="470,212 463,208 463,216" fill="#0369a1"/>
  <!-- Legend -->
  <rect x="24" y="256" width="16" height="14" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.6"/>
  <text x="46" y="267" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Cross-Sectional (vertical: fast, cohort confound)</text>
  <rect x="336" y="256" width="16" height="14" rx="3" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="358" y="267" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Longitudinal (horizontal: true Change, attrition risk)</text>
  <rect x="144" y="278" width="16" height="14" rx="3" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.6"/>
  <text x="166" y="289" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1c1630">Cross-Sequential (tracks multiple cohorts over time to separate Age from Cohort)</text>
</svg>`;

export const guide: TopicGuide = {
  id: "4-context-human-development",
  title: "Topic 4: Context 2 — Human Development",
  strand: "Contexts I: Health & Development",
  icon: "🌱",
  level: "SL",
  summary:
    "Compulsory Context 2 (IB Psychology FA2027): How biological maturation, cognitive schemas, cultural caregiving, identity formation, resilience, and ethical research designs illuminate lifespan Change, Perspective, Measurement, and Responsibility.",
  intro:
    "Under the IB Psychology First Assessment May 2027 syllabus, **Human Development** is one of the four **Compulsory Contexts** studied by both SL and HL learners. Rather than treating childhood as an isolated sub-discipline, FA2027 asks you to integrate **Biological**, **Cognitive**, and **Sociocultural** approaches through the **6 Core Concepts**—especially **Change** (neuroplasticity, recovery from deprivation, lifespan trajectories), **Perspective** (cross-cultural caregiving and non-Western identity pathways), **Measurement** (how we infer thoughts and attachment in pre-verbal infants), and **Responsibility** (protecting children and adolescents in research and policy).",
  guide: [
    {
      id: "brain-maturation-cognitive-dev",
      heading: "Brain Maturation, Synaptic Pruning & Cognitive Development",
      level: "SL",
      discovery: {
        problem:
          "A 16-year-old scores identically to a 30-year-old on a quiet, solitary reasoning test about driving hazards—yet in a driving simulator with two close friends watching, the 16-year-old runs twice as many yellow lights as the adult. Meanwhile, a 2-year-old actually has **more** synaptic connections in the prefrontal cortex than an adult neurologist. How can *losing* synapses make thinking sharper, and why does adolescent risk-taking spike specifically around peers?",
        idea:
          "Brain maturation is not simple growth—it is **sculpting**. Rapid early **synaptogenesis** ('blooming') creates an overabundance of connections; experience-dependent **synaptic pruning** eliminates unused pathways while **myelination** speeds up active circuits. In adolescence, limbic reward centres (the ventral striatum) surge in sensitivity at puberty years before the **prefrontal cortex (PFC)** finishes pruning and myelinating—creating an asymmetric biological window where peer presence amplifies reward valuation faster than cognitive control can brake it.",
      },
      body: `Human cognitive growth emerges from the continuous interplay of **biological brain maturation**, **active mental construction**, and **sociocultural scaffolding**.

### 1. Biological Foundations: Neuroplasticity, Pruning & the Adolescent Brain
- **Prenatal & early-life neuroplasticity:** From gestation through age 2–3, the infant brain undergoes rapid **synaptogenesis** (*synaptic blooming*), producing far more neural connections than an adult brain retains. Sensory regions (visual and auditory cortex) peak earliest (around 1–2 years), whereas the **prefrontal cortex (PFC)**—governing executive control, planning, and impulse inhibition—peaks later and prunes well into the mid-20s (Huttenlocher, 1990; Petanjek et al., 2011).
- **Synaptic pruning & myelination:** Following the 'use it or lose it' principle, frequently activated pathways are strengthened and insulated with **myelin** (accelerating neural conduction), while under-used synapses are pruned away. This illustrates the Core Concept of **Change**: environmental enrichment, stress, and learning physically reshape neural architecture across development.
- **Adolescent Dual-Systems / Imbalance Model (Casey et al., 2008; Steinberg, 2008):** Subcortical **limbic reward regions** (including the ventral striatum and amygdala) become hyper-responsive during puberty, whereas **PFC cognitive-control networks** mature more gradually across adolescence. In Chein et al.'s (2011) fMRI simulated-driving experiment, adolescents aged 14–18 took significantly more risks when peers watched than when alone, accompanied by heightened ventral striatum activation—a pattern absent in adults. Crucially, this is **not** biological determinism: cultural norms, parental monitoring, and prosocial peer environments steer how that heightened reward sensitivity is expressed.

### 2. Cognitive Approach: Piaget's Constructivist Theory & Modern Critiques
Jean Piaget (1936, 1952) argued that children are *active scientists* who construct mental frameworks called **schemas** through interaction with the physical world:
- **Assimilation:** Fitting new information into an existing schema (e.g., calling a zebra a 'horse').
- **Disequilibrium → Accommodation:** When new evidence contradicts current schemas, cognitive conflict prompts **accommodation**—modifying existing schemas or creating a new category ('zebra') to restore **equilibrium**.

| Piaget Stage | Approx. Age | Core Cognitive Milestones & Limitations |
|---|---|---|
| **Sensorimotor** | 0–2 years | Learning through senses and motor action; develops **object permanence** (knowing hidden objects still exist). |
| **Preoperational** | 2–7 years | Symbolic play and language flourish, but thinking shows **egocentrism** (difficulty taking another's visual/mental viewpoint) and **centration**, causing failure on **conservation** tasks (e.g., pouring water into a taller glass appears to create 'more'). |
| **Concrete Operational** | 7–11 years | Masters **conservation**, reversibility, and logical operations on tangible, concrete objects; still struggles with purely abstract hypotheses. |
| **Formal Operational** | 12+ years | **Hypothetical-deductive reasoning**, abstract logic, and systematic testing of variables. |

- **Evaluating Piaget through Measurement & Perspective:** Modern infant cognition studies show Piaget **underestimated** early competence because his tasks relied heavily on motor and verbal demands. **Baillargeon & DeVos (1991)** used a *violation-of-expectation* looking-time paradigm (a tall carrot passing behind a screen with a window) and found infants as young as **3.5 months** looked longer at impossible events—evidence of early object permanence. Similarly, **Hughes (1975)** replaced Piaget's abstract *Three Mountains* task with a relatable *'policeman doll'* hiding scenario: **90%** of 3.5–5-year-olds succeeded in perspective-taking when the task made 'human sense' (Donaldson, 1978). Cross-cultural research also shows Formal Operational thinking depends strongly on formal schooling rather than unfolding identically across all societies.

### 3. Sociocultural Approach: Vygotsky's Sociocultural Theory
Lev Vygotsky (1978) proposed a fundamentally different **Perspective**: higher cognitive functions originate *between people* (social interaction) before being internalized *within the child*:
- **Zone of Proximal Development (ZPD):** The gap between what a learner can solve independently and what they can accomplish with guidance from a **More Knowledgeable Other (MKO)**—a parent, teacher, or skilled peer.
- **Scaffolding (Wood, Bruner & Ross, 1976):** Structured, responsive support (hints, modelling, breaking tasks into sub-steps) that is gradually withdrawn as competence grows.
- **Cultural tools & language:** Unlike Piaget (who viewed early self-talk as 'egocentric speech'), Vygotsky argued that language is the primary cultural tool for thought—shifting from **social speech** → **private speech** (talking aloud to regulate problem-solving) → **inner speech** (silent verbal thought). Cross-cultural observations (Rogoff, 1990) confirm that children learn through *guided participation* adapted to local cultural practices (e.g., weaving in Guatemala or navigation in Pacific communities).`,
      diagram: SVG_BRAIN_ZPD,
      diagramCaption:
        "Left: Prefrontal synaptic density blooms rapidly in infancy before pruning into adulthood, while limbic reward sensitivity rises earlier in puberty (Casey/Steinberg). Right: Vygotsky's ZPD centres social scaffolding, contrasting with Piaget's solo schema accommodation.",
      workedExamples: [
        {
          title: "Integrating Approaches to Explain Adolescent Risk-Taking",
          problem:
            "A 15-year-old who understands the physics of braking distances still cycles recklessly fast when racing friends down a steep hill. Explain this behaviour by integrating **one biological** and **one sociocultural** factor, and identify the relevant FA2027 Core Concept.",
          steps: [
            "Identify the biological mechanism: Under Casey and Steinberg's **dual-systems / imbalance model**, the adolescent **ventral striatum** (limbic reward circuit) matures earlier than **prefrontal cortex (PFC)** inhibitory networks, which are still undergoing synaptic pruning and myelination.",
            "Connect to the sociocultural trigger: As shown in **Chein et al. (2011)**, the presence of peers heightens social-reward valuation in the ventral striatum, tipping decision-making toward immediate peer approval over long-term safety.",
            "Link explicitly to a Core Concept: **Change**—developmental mismatch is a *transient lifespan phase*, not a fixed deficit; as PFC connectivity consolidates into the mid-20s and social norms shift, impulse regulation improves.",
          ],
          answer:
            "Heightened limbic reward sensitivity outpacing PFC maturation (Biological) interacts with peer-present social reward cues (Sociocultural), exemplifying lifespan neurodevelopmental **Change**.",
          yourTurn: {
            question:
              "In Vygotsky's sociocultural theory, what is the three-letter acronym for the gap between what a child can do independently and what they can achieve with a More Knowledgeable Other?",
            answer: {
              type: "text",
              accept: ["ZPD", "Zone of Proximal Development"],
              display: "ZPD",
            },
            solution:
              "The **ZPD** (**Zone of Proximal Development**) defines the optimal learning space where **scaffolding** from a More Knowledgeable Other (MKO) drives cognitive growth.",
          },
        },
        {
          title: "Distinguishing Assimilation vs Accommodation & Evaluating Measurement",
          problem:
            "A 4-year-old sees a whale for the first time and shouts 'Big fish!' After her father explains that whales breathe air through lungs and feed milk to their babies, she creates a separate mental category for 'marine mammals'. Identify both Piagetian processes and critique Piaget's original method for testing 4-year-olds' perspective-taking.",
          steps: [
            "Calling a whale a 'fish' applies an existing schema to a novel stimulus → **assimilation**.",
            "Revising her schema structure to build a new 'marine mammal' category after cognitive conflict (disequilibrium) → **accommodation**.",
            "Evaluate Piaget's **Measurement** validity: In the Three Mountains task, abstract spatial geometry caused children under 7 to fail, whereas **Hughes (1975)** found 90% of 3.5–5-year-olds passed the relatable 'policeman doll' task—showing Piaget confounded egocentrism with unfamiliar task demands.",
          ],
          answer:
            "First **assimilation**, then **accommodation**; Piaget's Three Mountains task lacked construct/ecological validity compared with Hughes's (1975) policeman-doll task.",
        },
      ],
      keyPoints: [
        "Synaptic blooming builds dense connectivity in early childhood; experience-dependent **synaptic pruning** and **myelination** refine efficiency into the mid-20s.",
        "Adolescent risk-taking reflects an interaction between earlier-maturing **limbic reward circuits** (ventral striatum), slower-maturing **PFC control networks**, and **peer social contexts** (Chein et al., 2011).",
        "Piaget emphasized individual **schema construction** (assimilation → disequilibrium → accommodation) across four universal stages, whereas Vygotsky prioritized **social interaction** (**ZPD**, **scaffolding**, and language as a cultural tool).",
        "Violation-of-expectation studies (Baillargeon & DeVos, 1991) and relatable perspective tasks (Hughes, 1975) challenge Piaget's **Measurement** validity by revealing much earlier infant and preschool competence.",
      ],
      whyItWorks:
        "Pairing brain maturation with Piaget and Vygotsky prevents reductionism. Biological synaptic pruning explains *how* processing efficiency and executive control change with age; Piaget explains *how* individual learners reorganize conceptual schemas; Vygotsky explains *why* the pace and content of cognitive development vary across classrooms, languages, and cultures (**Perspective**).",
      strategies: [
        "In Paper 1 Section B/C essays, contrast **Piaget (individual, stage-like, universalist)** directly against **Vygotsky (social, continuous, culturally situated)** rather than describing them in separate silos.",
        "Whenever evaluating Piaget, anchor your critique in **Measurement** (verbal/motor task demands in Three Mountains vs Baillargeon's looking-time and Hughes's policeman doll).",
        "Avoid calling the adolescent brain 'broken' or 'immature'—frame PFC–limbic asymmetry as an evolutionarily adaptive window of social learning and neuroplastic **Change**.",
      ],
      thinkDeeper:
        "HL Extension Link (Technology & Culture): How might heavy reliance on search engines or generative AI act as either productive **scaffolding** inside a learner's ZPD or premature cognitive offloading that bypasses effortful schema **accommodation**?",
    },
    {
      id: "attachment-caregiving-culture",
      heading: "Attachment Theory, Internal Working Models & Cultural Variation",
      level: "SL",
      discovery: {
        problem:
          "In a standardized 20-minute laboratory observation, 27% of Japanese 1-year-olds become inconsolably distressed when their mother leaves the room for three minutes, whereas 35% of West German 1-year-olds barely glance up when their mother returns. Under the original American scoring manual, both groups are labelled 'insecurely attached'. Should psychologists conclude that Japanese and German parents are worse caregivers—or is something wrong with the test?",
        idea:
          "The label 'insecure' assumes Western middle-class caregiving routines are the universal baseline—a classic **imposed etic** (**Bias** and **Measurement** error). Japanese infants rarely experience brief separations from their mothers, so being left alone triggers acute shock; North German parents deliberately encourage early self-reliance, so calm reunion behaviour reflects cultural socialization rather than emotional rejection. Viewing attachment through cultural **Perspective** transforms how we interpret the exact same observable behaviour.",
      },
      body: `Early emotional bonds illustrate how evolutionary biology, cognitive representations, and cultural parenting practices fuse together in Human Development.

### 1. Biological & Cognitive Core: Bowlby's Attachment Theory
John Bowlby (1958, 1969, 1988) drew on ethology (such as Lorenz's imprinting and Harlow's rhesus monkey contact-comfort studies) to argue that infant attachment is an **evolved biological survival system**:
- **Social releasers & monotropy:** Smiling, crying, and clinging elicit caregiving protection. Bowlby originally proposed **monotropy**—one primary attachment figure (typically the mother)—though modern developmental psychology recognizes **multiple attachment networks** (fathers, grandparents, alloparents) across cultures.
- **Critical vs sensitive period:** Bowlby initially spoke of a strict *critical period* (first 2–2.5 years) after which maternal deprivation caused irreversible harm. Contemporary evidence supports a **sensitive period**—an optimal window of heightened plasticity during which forming attachment is easiest, though meaningful **Change** and recovery remain possible later.
- **Internal Working Model (IWM):** A **cognitive schema** formed from early caregiver responsiveness that encodes two expectations: *(1) Am I worthy of love and care?* and *(2) Are other people reliable and trustworthy?* This IWM acts as a relational template shaping friendships, emotional regulation, and adult romantic attachment (Hazan & Shaver, 1987).

### 2. Measuring Attachment: Ainsworth's Strange Situation & Cross-Cultural Variation
Mary Ainsworth et al. (1970, 1978) operationalized attachment quality through the **Strange Situation**—a controlled 8-episode observational laboratory procedure (~20 minutes) assessing how 12–18-month-olds balance exploration (using the caregiver as a **secure base**) with proximity-seeking during stranger entry, two brief separations, and two reunions:
- **Type B — Secure (~65–70% in US norms):** Explores freely with caregiver present; shows moderate distress on separation; greets caregiver warmly and settles quickly on reunion. Linked to consistent, sensitive caregiving.
- **Type A — Insecure-Avoidant (~20%):** Explores independently with minimal caregiver referencing; shows little visible distress on separation; ignores or turns away on reunion. Often linked to emotionally distant or independence-pushing caregiving.
- **Type C — Insecure-Resistant / Ambivalent (~10–15%):** Clingy, minimal exploration; intense distress on separation; seeks contact yet resists or pushes caregiver away angrily on reunion. Linked to inconsistent caregiver responsiveness.
- **Type D — Disorganized-Disoriented (Main & Solomon, 1986, 1990):** Added later; contradictory, dazed, or fearful behaviours (e.g., freezing, approaching while looking away), frequently associated with frightening, abusive, or severely traumatized caregiving contexts.

**Cross-Cultural Meta-Analysis (van IJzendoorn & Kroonenberg, 1988):** Analysed **32 Strange Situation studies across 8 countries (N = 1,990 infants)**. Three landmark conclusions emerged:
1. **Universal secure majority:** Type B (Secure) was the modal (most frequent) classification in **every single country** (ranging from ~50% in China to 75% in Great Britain and Sweden), supporting an evolutionary capacity for secure attachment.
2. **Cultural variation in insecure styles:** West Germany showed elevated **Avoidant (35%)** classifications (Grossmann et al., 1985—reflecting cultural emphasis on early independence), whereas Japan showed elevated **Resistant (27%)** and minimal **Avoidant (5%)** rates (Takahashi, 1986—Japanese infants co-sleep and are rarely left alone, making sudden laboratory separation unusually traumatic).
3. **Intra-cultural > inter-cultural variation:** Differences *within* the same country (e.g., between two US or Japanese samples) were roughly **1.5× larger** than differences *between* countries—warning against stereotyping entire nations (**Bias** & **Perspective**).

### 3. Early Deprivation & Recovery: Rutter's English and Romanian Adoptees (ERA) Study
Can children recover when early institutional deprivation severely disrupts attachment and stimulation? Michael Rutter et al. (1998, 2007, 2010) conducted a landmark **longitudinal** study following **165 Romanian orphans** who endured severe physical and emotional privation before adoption into supportive UK homes, compared against **52 UK domestic adoptees**:
- **Adopted before 6 months:** Showed remarkable physical, cognitive, and emotional catch-up—by ages 4, 6, and 11, their mean IQ and attachment profiles were largely indistinguishable from UK controls.
- **Adopted after 6 months (especially after 24 months):** Showed persistent elevated rates of **disinhibited attachment** (overly friendly, indiscriminate behaviour toward strangers), cognitive deficits, and quasi-autistic patterns into adolescence and young adulthood.
- **Conceptual insight (**Change** & **Causality**):** Because this was a **natural experiment**, researchers cannot randomly assign deprivation—pre-existing prenatal malnutrition or genetic vulnerabilities could act as confounding variables. Yet the stark dose–response boundary around 6 months powerfully supports a **sensitive period** rather than an all-or-nothing deterministic fate.`,
      diagram: SVG_STRANGE_SITUATION,
      diagramCaption:
        "Mean percentages from van IJzendoorn & Kroonenberg's (1988) cross-cultural meta-analysis. Type B (Secure) is the modal category in every sample, while Type A vs Type C shifts sharply with local caregiving norms.",
      workedExamples: [
        {
          title: "Calculating Strange Situation Proportions & Evaluating Measurement Bias",
          problem:
            "In a replication sample of **120 infants**, observers classify **78** as Type B (Secure), **27** as Type A (Avoidant), and **15** as Type C (Resistant). Calculate the percentage of infants in each category, then explain one **Measurement** limitation of applying this procedure across cultures.",
          steps: [
            "Compute Secure (Type B): {{78 / 120 * 100 = 65%}}.",
            "Compute Avoidant (Type A): {{27 / 120 * 100 = 22.5%}}.",
            "Compute Resistant (Type C): {{15 / 120 * 100 = 12.5%}}. Check total: {{65 + 22.5 + 12.5 = 100%}}.",
            "Evaluate **Measurement** & **Bias**: The Strange Situation is an **imposed etic** designed around Western nuclear-family norms where infants experience brief separations. In cultures featuring continuous maternal proximity (e.g., Japan) or communal multiple caregiving (e.g., Efe communities in Central Africa), reunion behaviours carry different cultural meanings, threatening construct validity.",
          ],
          answer:
            "Secure = 65%, Avoidant = 22.5%, Resistant = 12.5%; the procedure risks **imposed etic** bias when cultural caregiving practices differ from Western norms.",
          yourTurn: {
            question:
              "In a cross-cultural Strange Situation sample of 80 infants, 24 are classified as Insecure-Avoidant (Type A). What percentage of the sample is Insecure-Avoidant?",
            answer: {
              type: "number",
              value: 30,
              display: "30%",
            },
            solution:
              "Divide the Type A count by total sample size and multiply by 100: {{24 / 80 * 100 = 30%}}.",
          },
        },
      ],
      keyPoints: [
        "Bowlby's theory integrates **Biological** evolutionary survival with a **Cognitive** **Internal Working Model (IWM)** that guides later social expectations.",
        "Ainsworth's **Strange Situation** classifies Secure (B), Avoidant (A), and Resistant (C) styles; Main & Solomon later identified **Disorganized (D)** attachment.",
        "van IJzendoorn & Kroonenberg (1988) found Type B is modal worldwide, Type A/C rates reflect cultural socialization, and **intra-cultural variation is ~1.5× inter-cultural variation**.",
        "Rutter's ERA longitudinal study demonstrates **Change** within a **sensitive period**: near-complete catch-up when adopted before 6 months, versus enduring disinhibited attachment and cognitive risks after prolonged institutional deprivation.",
      ],
      whyItWorks:
        "Attachment is the quintessential FA2027 Human Development bridge: evolutionary survival predispositions (Biological) build an Internal Working Model (Cognitive) inside culturally diverse caregiving systems (Sociocultural). Critically evaluating the Strange Situation sharpens your command of **Perspective**, **Measurement**, and **Bias**.",
      strategies: [
        "Always distinguish **sensitive period** (optimal window with capacity for later recovery—supported by Rutter) from a rigid **critical period** (irreversible shut-off).",
        "When citing van IJzendoorn & Kroonenberg (1988), mention BOTH the universal finding (Secure is modal everywhere) AND the cultural nuance (imposed etic critique + intra-cultural variation > inter-cultural variation).",
        "In Paper 1/2 evaluations of Rutter's ERA study, note that natural experiments have high ecological validity and ethical feasibility, yet cannot completely isolate prenatal factors from institutional deprivation (**Causality**).",
      ],
      thinkDeeper:
        "HL Extension Link (Culture — Emic vs Etic): How would an **emic** attachment measure designed *inside* a multi-caregiver collectivist society differ from Ainsworth's single-dyad laboratory separation protocol?",
    },
    {
      id: "identity-moral-socioemotional",
      heading: "Identity Formation, Gender/Social Roles & Socio-Emotional Growth",
      level: "SL",
      discovery: {
        problem:
          "On the Hawaiian island of Kauai, 201 newborns faced severe combined adversity—chronic poverty, birth complications, and family instability. Psychologists predicted near-universal developmental breakdown. Yet 40 years later, **one-third** of those high-risk infants had become thriving, compassionate adults with stable careers and families. Why did identical childhood risk factors produce completely different lifespan outcomes?",
        idea:
          "Development is **probabilistic, not deterministic**. Emmy Werner's 40-year Kauai study revealed that risk factors interact dynamically with **protective factors** across biological (easy temperament), cognitive (internal locus of control, problem-solving), and sociocultural (at least one consistent, trusting adult mentor) levels. This resilience framework exemplifies **Change** and societal **Responsibility**: strengthening community mentors and supportive schools actively alters developmental trajectories.",
      },
      body: `Across childhood and adolescence, developing humans build a coherent sense of self, navigate gender and social roles, interpret others' minds, and adapt to adversity.

### 1. Psychosocial Identity: Erikson & Marcia's Identity Statuses
- **Erikson's Psychosocial Theory (1950, 1968):** Unlike Freud's biological drives, Erikson proposed **eight lifespan psychosocial stages**, each centred on a social-emotional crisis. In adolescence, **Identity vs Role Confusion** challenges young people to integrate personal values, cultural heritage, relationships, and vocational goals into a coherent identity.
- **Marcia's Identity Status Model (1966):** Operationalized Erikson's stage into four measurable statuses across two independent dimensions—**Exploration (Crisis)** (actively questioning alternatives) and **Commitment** (making a personal investment):
  1. **Identity Achievement** (*High Exploration, High Commitment*): Explored alternatives and committed to self-chosen goals.
  2. **Moratorium** (*High Exploration, Low Commitment*): Actively exploring roles/values without yet settling—often linked to healthy curiosity alongside temporary anxiety.
  3. **Foreclosure** (*Low Exploration, High Commitment*): Committed early to parents', peers', or society's expectations without weighing alternatives.
  4. **Identity Diffusion** (*Low Exploration, Low Commitment*): Neither actively exploring nor committed; prone to drift or disengagement.
- **Cultural Perspective & Change:** Identity formation is neither linear nor finished at 18—adults frequently cycle back from Achievement into Moratorium ('MAMA cycles'). Furthermore, cross-cultural psychologists critique Western bias in treating **Foreclosure** as inferior: in interdependent, collectivist cultures, honouring family guidance and collective harmony can foster high well-being and strong social belonging (**Perspective** & **Bias**).

### 2. Gender Identity & Social Roles: Bio–Cog–Soc Integration
How do children learn gender concepts and roles?
- **Biological factors:** Prenatal hormone exposure (e.g., androgens) influences early activity preferences, though twin and clinical studies show biology sets broad predispositions rather than rigid social scripts.
- **Cognitive — Gender Schema Theory (Martin & Halverson, 1981):** Once children acquire basic gender labelling (around ages 2–3), they actively build **gender schemas**—mental networks classifying toys, traits, and careers as 'for my group' (in-group) or 'not for my group' (out-group). Children pay closer attention to schema-consistent models and even **reconstruct memories** of counter-stereotypical images (e.g., later misremembering a female doctor as a nurse—directly linking back to Bartlett's schema theory!).
- **Sociocultural — Social Cognitive Theory of Gender (Bandura & Bussey, 1999):** Children acquire gendered behaviour through **observational learning** of parents, peers, and media, **differential reinforcement** (praising or teasing gender-typed play), and internalized **self-regulation**—shifting across historical eras as cultural media norms change.

### 3. Theory of Mind (ToM) & Peer Socio-Emotional Growth
**Theory of Mind** is the cognitive ability to attribute beliefs, desires, and intentions to oneself and others—and recognize that someone can hold a **false belief** different from reality.
- **Classic Measurement — Sally-Anne Task (Baron-Cohen, Leslie & Frith, 1985):** Sally puts a marble in her basket and leaves; Anne moves it to her box. Children are asked: *"Where will Sally look for her marble?"* Neurotypical children typically pass around **age 4** (~85% of neurotypical 4-year-olds and ~86% of children with Down syndrome passed in Baron-Cohen's original sample, compared with ~20% of autistic children).
- **Modern Measurement & Perspective Critique:** Later developmental research shows that explicit false-belief tasks heavily load verbal comprehension and executive inhibitory control. Non-verbal eye-gaze studies (Onishi & Baillargeon, 2005) reveal implicit belief tracking in 15-month-olds, and contemporary neurodiversity researchers emphasize the **double empathy problem** (Milton, 2012)—communication breakdowns arise bidirectionally between different neurotypes rather than from a one-sided deficit.

### 4. Resilience & Protective Factors: Werner's Kauai Longitudinal Study
Emmy Werner & Ruth Smith (1982, 1992, 2001) tracked **698 infants** born in 1955 on Kauai, Hawaii, across **40 years** (ages 1, 2, 10, 18, 32, and 40). Roughly **30% (201 children)** grew up under severe cumulative risk (poverty, perinatal stress, parental conflict/mental illness). Yet **one-third of the high-risk cohort (~72 individuals)** flourished as resilient adults. Even more strikingly, many troubled adolescents recovered in their 20s and 30s through military/educational opportunities, supportive partners, or community ties—demonstrating lifelong **Change**!

| Approach | Protective Factors Identified in Werner's Kauai Study |
|---|---|
| **Biological** | Easy, affectionate infant temperament; robust early health; low stress reactivity. |
| **Cognitive** | Internal locus of control (belief that effort shapes outcomes), strong reading/problem-solving skills, realistic planning. |
| **Sociocultural** | At least **one stable, caring adult** (parent, grandparent, older sibling, teacher, or coach) plus supportive school/community networks. |`,
      diagram: SVG_MARCIA_GRID,
      diagramCaption:
        "Marcia's (1966) 2×2 identity status matrix maps Exploration (Crisis) against Commitment. Statuses shift dynamically across domains (career, beliefs, relationships) and carry different meanings across cultures.",
      workedExamples: [
        {
          title: "Classifying Marcia's Identity Status & Applying Cultural Perspective",
          problem:
            "Priya, age 17, has always planned to join her parents' accountancy firm. She has never researched other university majors or questioned whether accountancy fits her interests, and feels calm and certain about her future. Classify Priya's status in Marcia's framework and evaluate one cultural limitation of viewing this status negatively.",
          steps: [
            "Check **Exploration**: Priya has *not* explored alternative careers or questioned her inherited plan → **Low Exploration**.",
            "Check **Commitment**: Priya has made a firm, settled choice → **High Commitment**.",
            "Map onto Marcia's grid: Low Exploration + High Commitment = **Foreclosure**.",
            "Apply Core Concept **Perspective**: Marcia's model emerged from individualistic North American samples valuing autonomous self-discovery. In interdependent cultures where family continuity and filial piety are central values, Foreclosure can correlate with high social support, lower anxiety, and positive adjustment rather than developmental immaturity.",
          ],
          answer:
            "**Foreclosure** (Low Exploration, High Commitment); judging Foreclosure as maladaptive reflects individualistic cultural **Bias** and overlooks adaptive interdependence.",
          yourTurn: {
            question:
              "Devon, age 18, is attending university open days, debating politics with peers, and shadowing both journalists and software engineers, but says he is not ready to commit to any career path yet. Which of Marcia's four identity statuses best describes Devon?",
            answer: {
              type: "text",
              accept: ["Moratorium", "Identity Moratorium"],
              display: "Moratorium",
            },
            solution:
              "Devon shows **High Exploration** (actively trying options and questioning) combined with **Low Commitment** (not yet decided) → **Moratorium**.",
          },
        },
      ],
      keyPoints: [
        "Erikson's adolescent task (*Identity vs Role Confusion*) was operationalized by **Marcia (1966)** into four statuses across Exploration × Commitment: **Achievement, Moratorium, Foreclosure, Diffusion**.",
        "Gender development integrates **biological predispositions**, **Gender Schema Theory** (Martin & Halverson: schemas distort counter-stereotypical memory), and **Social Cognitive Theory** (Bandura & Bussey: modelling and reinforcement).",
        "**Theory of Mind** (false-belief understanding via Baron-Cohen's Sally-Anne task) typically emerges explicitly around age 4, though verbal task demands and neurodiversity perspectives complicate interpretation.",
        "**Werner's 40-year Kauai study** proves adversity is not destiny: **protective factors** across biological, cognitive, and sociocultural levels foster lifelong **resilience** and **Change**.",
      ],
      whyItWorks:
        "Linking Marcia, gender schemas, Theory of Mind, and Werner's resilience research shows that socio-emotional development is never passive. Children actively filter social cues through schemas while cultural mentors and institutions either buffer or amplify early risk (**Perspective** & **Responsibility**).",
      strategies: [
        "Memorize Marcia's 2×2 matrix by testing two yes/no questions on any unseen scenario: *(1) Are they actively exploring alternatives?* and *(2) Have they committed?*",
        "In resilience essays, organize Werner's protective factors explicitly under **Biological, Cognitive, and Sociocultural** sub-pillars—guaranteed alignment with IB FA2027 integration criteria.",
        "When evaluating Martin & Halverson (1981), link it back to **Topic 2 Schema Theory** to show synoptic mastery across the IB syllabus.",
      ],
      thinkDeeper:
        "HL Extension Link (Motivation & Technology): How do algorithmic social-media feeds influence adolescents in **Moratorium** versus **Diffusion**—do they broaden healthy identity exploration or trap users inside narrow social-comparison echo chambers?",
    },
    {
      id: "developmental-methods-ethics",
      heading: "Developmental Research Designs: Longitudinal, Cross-Sectional & Ethics",
      level: "SL",
      discovery: {
        problem:
          "A 2026 cross-sectional study tests 100 18-year-olds and 100 70-year-olds on a timed tablet-based spatial-reasoning puzzle. The 18-year-olds average 84 points while the 70-year-olds average 58 points. A headline declares: *'Spatial intelligence collapses by 26 points as the brain ages!'* Name **two** major reasons this conclusion could be completely misleading—and design a better study to test true ageing.",
        idea:
          "A cross-sectional snapshot compares two different **birth cohorts** (born ~2008 vs ~1956) rather than watching the *same* people age! The 26-point gap confounds biological ageing with **cohort effects**—generational differences in touchscreen familiarity, schooling duration, nutrition, and visual-puzzle exposure (the Flynn effect). Only tracking cohorts over time (**longitudinal** or **cross-sequential** designs) can isolate true intra-individual **Change**.",
      },
      body: `Studying Human Development poses a unique methodological challenge: researchers cannot randomly assign someone's age, birth era, or childhood adversity. Choosing the right developmental design—and upholding strict **ethical Responsibility** with minors—is essential for valid inference (**Causality**, **Measurement**, **Bias**).

### 1. Comparing the Three Core Developmental Designs

| Feature | Longitudinal Design | Cross-Sectional Design | Cross-Sequential Design |
|---|---|---|---|
| **How it works** | Tracks the **same cohort** repeatedly across multiple ages/waves (e.g., Werner's Kauai study; Rutter's ERA study). | Compares **different age groups** tested once at the **same calendar time**. | Tracks **multiple birth cohorts** longitudinally over overlapping time periods (e.g., Schaie's Seattle Longitudinal Study). |
| **Tracks intra-individual Change?** | **Yes**—directly observes how individuals grow, stay stable, or recover. | **No**—measures group averages across different people at one point in time. | **Yes**—captures both individual trajectories and cross-age comparisons. |
| **Cohort effects?** | **Avoided** within the single sample (though results may not generalize to other generations). | **Severe confound**—cannot tell whether differences reflect age or generational era. | **Separated!** Comparing different cohorts at the *same age* isolates cohort effects from true age effects. |
| **Attrition & Practice Effects?** | **High risk:** Selective **attrition** (dropouts are often lower-SES, more stressed, or less healthy) biases surviving averages upward; **practice effects** inflate repeated test scores. | **None**—participants are tested only once. | **Moderate risk:** Shorter follow-up spans reduce attrition compared with lifetime studies, though some dropout and practice effects remain. |
| **Time & Cost** | Slow (years/decades) and expensive; instruments can become outdated. | Fast, economical, large samples easy to recruit. | Expensive and analytically complex, yet the gold standard for developmental **Measurement**. |

### 2. Quantifying Longitudinal Attrition & Retention
In Paper 1 Section B, Paper 2, and HL Paper 3 data-analysis questions, you must calculate and interpret sample loss accurately:
- **Attrition Rate (%):** {{(N_0 - N_t) / N_0 * 100%}} where {{N_0}} is the initial baseline sample and {{N_t}} is the number remaining at Wave {{t}}.
- **Retention Rate (%):** {{N_t / N_0 * 100%}} (always equals {{100% - "Attrition Rate"}}).
- **Why selective attrition threatens Bias & Measurement:** If 30% of families drop out of a 10-year childhood literacy study because of housing instability or stress, the remaining 70% is no longer representative—artificially inflating Wave 2 mean scores and masking real developmental vulnerability (**sampling/attrition bias**).

### 3. Ethical Responsibility with Children & Adolescents
Because children and adolescents have developing cognitive autonomy and lower social power relative to adult researchers, they constitute a **vulnerable population** requiring heightened **Responsibility**:
- **Informed Parental Consent + Child Assent:** Legal consent must be obtained from parents or guardians *before* participation, AND researchers must secure **child assent**—an age-appropriate, jargon-free explanation allowing the child to agree willingly. If a parent consents but the child refuses, the child's **dissent must override** parental consent!
- **Ongoing Right to Withdraw:** Young children may feel pressured to obey adults ('please the teacher' demand characteristics). Researchers must actively remind children they can stop at any moment without penalty and watch for **non-verbal distress cues** (crying, withdrawal, freezing) in pre-verbal infants.
- **Protection from Physical & Psychological Harm:** Paradigms involving mild stress (such as Ainsworth's Strange Situation) require strict stopping rules—e.g., terminating a separation episode immediately if an infant cries intensely for more than 20–30 seconds—and providing warm parent–child reunion play afterward.
- **Deception & Age-Appropriate Debriefing:** Deception with minors should be avoided wherever possible; when minimal cover stories are ethically justified, debriefing must use concrete, reassuring language ensuring children leave feeling respected rather than tricked or inadequate.
- **Confidentiality, Anonymity & Safeguarding Limits:** Multi-decade longitudinal records (school grades, brain scans, family adversity) demand rigorous anonymization—yet researchers also carry a **mandatory safeguarding duty** to breach confidentiality if a child discloses abuse or imminent harm (**Responsibility**).`,
      diagram: SVG_DESIGNS_TIMELINE,
      diagramCaption:
        "Vertical slice (Cross-Sectional) compares different cohorts in 2020; horizontal path (Longitudinal) tracks the 2015 cohort from age 5 to 15; overlapping horizontal bands (Cross-Sequential) compare Age 15 across the 2005, 2010, and 2015 cohorts to separate Age from Cohort effects.",
      workedExamples: [
        {
          title: "Calculating Longitudinal Attrition & Identifying Selective Bias",
          problem:
            "A 12-year longitudinal study of executive function starts with **250** children at age 6. By Wave 3 (age 18), **185** participants remain. (a) Calculate the attrition rate and retention rate. (b) Explain how **selective attrition** could distort the study's conclusions about cognitive **Change**.",
          steps: [
            "Find the number of dropouts: {{250 - 185 = 65}} participants lost.",
            "Calculate Attrition Rate: {{65 / 250 * 100 = 26%}}.",
            "Calculate Retention Rate: {{185 / 250 * 100 = 74%}} (check: {{26% + 74% = 100%}}).",
            "Explain selective attrition (**Bias** & **Measurement**): Participants who drop out over 12 years are disproportionately those facing family relocation, chronic stress, or academic difficulties. The surviving 74% therefore over-represents stable, higher-scoring individuals, artificially inflating Wave 3 averages and exaggerating apparent executive-function gains.",
          ],
          answer:
            "Attrition rate = **26%**, Retention rate = **74%**; selective loss of stressed/lower-scoring participants inflates Wave 3 means and reduces population validity.",
          yourTurn: {
            question:
              "A longitudinal adolescent identity study recruits 400 participants at age 13. By age 21, 312 participants complete the final wave. What is the **attrition rate** as a percentage?",
            answer: {
              type: "number",
              value: 22,
              display: "22%",
            },
            solution:
              "Dropouts = {{400 - 312 = 88}}. Attrition rate = {{88 / 400 * 100 = 22%}}.",
          },
        },
        {
          title: "Evaluating Ethical Responsibility in a Child Observational Study",
          problem:
            "A psychologist obtains written consent from a primary school principal and parents to film 6-year-olds attempting an unsolvable puzzle to measure frustration coping. Midway through, one child quietly looks down and says 'I want to go back to class', but the researcher smiles and says 'Just two more minutes, you're doing great!' Identify **two** ethical breaches and state how to remediate them.",
          steps: [
            "Breach 1 — **Right to withdraw & child assent**: Persuading the child to stay overrides active dissent and exploits adult–child power imbalance. Remediation: Halt testing immediately and escort the child back to class with zero negative feedback.",
            "Breach 2 — **Protection from psychological harm (undue distress/deception)**: Deliberately presenting an unsolvable puzzle can induce shame or helplessness in young children. Remediation: Use an age-appropriate solvable challenge or, if testing frustration tolerance, include strict distress stopping rules plus an immediate positive, confidence-restoring debriefing.",
          ],
          answer:
            "Violates ongoing **child assent / right to withdraw** and **protection from psychological harm**; stop immediately on verbal/non-verbal dissent and redesign with non-distressing tasks and supportive debriefing.",
        },
      ],
      keyPoints: [
        "**Longitudinal designs** capture true intra-individual **Change** without cohort confounds, but suffer from **attrition**, **practice effects**, and high cost.",
        "**Cross-sectional designs** are rapid and free of attrition/practice effects, yet confound age with **cohort effects**.",
        "**Cross-sequential designs** track multiple cohorts longitudinally to separate true developmental age change from cohort and historical-period effects.",
        "Ethical **Responsibility** with minors requires **parental consent + child assent** (dissent overrides consent), vigilant **right to withdraw**, strict **harm minimization**, and safeguarding-aware confidentiality.",
      ],
      whyItWorks:
        "Understanding developmental designs equips you for BOTH Paper 1 developmental essays and Paper 2 / HL Paper 3 unseen-study critiques. Whenever you see an age comparison, immediately ask: *Same people over time (watch for attrition/practice), or different birth cohorts today (watch for cohort effects)?*",
      strategies: [
        "Always check the denominator in attrition calculations: divide dropouts by the **initial baseline sample ({{N_0}})**, never by the remaining sample ({{N_t}}).",
        "In Paper 2 Section B unseen developmental studies, evaluate at least **two Core Concepts** explicitly—e.g., **Measurement** (practice effects or cohort confound) + **Responsibility** (child assent and distress stopping rules).",
        "When recommending a methodological improvement for a cross-sectional study, propose a **cross-sequential design** and explain *specifically* how comparing Cohort A and Cohort B at the exact same age isolates cohort bias.",
      ],
      thinkDeeper:
        "HL Extension Link (Paper 3 Data Analysis): If a 5-year longitudinal study shows a statistically significant rise in teen self-esteem (p < 0.01) alongside 38% selective attrition among low-scoring pupils, why does **statistical significance** fail to guarantee **internal validity**?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is **synaptic pruning** and why is it essential for cognitive development?",
        back: "Experience-dependent elimination of under-used synaptic connections following early 'blooming' (synaptogenesis). Combined with myelination, pruning makes neural circuits faster and more efficient through childhood and into the mid-20s.",
        level: "SL",
      },
      {
        front: "Explain Casey & Steinberg's **Adolescent Dual-Systems (Imbalance) Model**.",
        back: "Subcortical limbic reward regions (ventral striatum) mature rapidly at puberty, outpacing prefrontal cortex (PFC) inhibitory control networks (which mature into the mid-20s), creating heightened sensitivity to peer-present rewards (Chein et al., 2011).",
        level: "SL",
      },
      {
        front: "Distinguish Piaget's **assimilation** from **accommodation**.",
        back: "**Assimilation** fits new experience into an existing schema; **accommodation** alters or creates a new schema after disequilibrium to resolve mismatch with reality.",
        level: "SL",
      },
      {
        front: "How did **Baillargeon & DeVos (1991)** and **Hughes (1975)** challenge Piaget?",
        back: "Baillargeon's violation-of-expectation task showed **object permanence** at ~3.5 months; Hughes's relatable 'policeman doll' task showed 90% of 3.5–5-year-olds succeeded in perspective-taking—revealing Piaget's tasks suffered verbal/motor **Measurement** limitations.",
        level: "SL",
      },
      {
        front: "Define Vygotsky's **Zone of Proximal Development (ZPD)** and **scaffolding**.",
        back: "The **ZPD** is the gap between independent mastery and what a child can achieve with a **More Knowledgeable Other (MKO)**; **scaffolding** (Wood, Bruner & Ross, 1976) is tailored guidance gradually faded as autonomy grows.",
        level: "SL",
      },
      {
        front: "What is Bowlby's **Internal Working Model (IWM)**?",
        back: "A cognitive schema formed through early attachment experiences encoding expectations about whether the self is worthy of care and whether others are trustworthy—guiding future friendships and romantic relationships.",
        level: "SL",
      },
      {
        front: "List the four attachment classifications from Ainsworth and Main & Solomon.",
        back: "**Type B (Secure)**, **Type A (Insecure-Avoidant)**, **Type C (Insecure-Resistant/Ambivalent)** (Ainsworth et al., 1978), plus **Type D (Disorganized-Disoriented)** (Main & Solomon, 1986).",
        level: "SL",
      },
      {
        front: "State the three key findings of **van IJzendoorn & Kroonenberg (1988)**.",
        back: "(1) Secure (Type B) was modal in all 8 countries; (2) Insecure styles varied culturally (higher Avoidant in West Germany, higher Resistant in Japan); (3) **Intra-cultural variation was ~1.5× inter-cultural variation**.",
        level: "SL",
      },
      {
        front: "How does **Rutter's English & Romanian Adoptees (ERA)** study inform the Core Concept of **Change**?",
        back: "Orphans adopted **before 6 months** showed near-complete physical and cognitive catch-up, while those adopted **after 6 months** had higher persistent disinhibited attachment and cognitive delays—supporting a **sensitive period** with substantial recovery potential.",
        level: "SL",
      },
      {
        front: "Name Marcia's (1966) four identity statuses by Exploration × Commitment.",
        back: "**Achievement** (High E, High C), **Moratorium** (High E, Low C), **Foreclosure** (Low E, High C), **Diffusion** (Low E, Low C).",
        level: "SL",
      },
      {
        front: "How does **Martin & Halverson's (1981) Gender Schema Theory** explain gender stereotyping?",
        back: "Once children label their gender (~age 2–3), they actively organize behaviour into in-group/out-group gender schemas that guide attention and even distort memories of counter-stereotypical scenes.",
        level: "SL",
      },
      {
        front: "What is **Theory of Mind (ToM)** and how did **Baron-Cohen et al. (1985)** test it?",
        back: "ToM is understanding that others hold mental states and **false beliefs** distinct from reality. Tested via the **Sally-Anne false-belief task**, typically passed by ~age 4.",
        level: "SL",
      },
      {
        front: "What protective factors enabled resilience in **Werner's 40-year Kauai study**?",
        back: "One-third of high-risk infants thrived due to **Biological** (easy temperament), **Cognitive** (internal locus of control, problem-solving), and **Sociocultural** (at least one stable, supportive adult bond + community networks) protective factors.",
        level: "SL",
      },
      {
        front: "Contrast **cohort effects** with **attrition** and **practice effects**.",
        back: "**Cohort effects** confound **cross-sectional** designs (different birth eras); **attrition** (selective dropout) and **practice effects** (familiarity from repeat testing) threaten **longitudinal** designs. **Cross-sequential** designs help separate age from cohort.",
        level: "SL",
      },
      {
        front: "Distinguish **parental informed consent** from **child assent**.",
        back: "Parents/guardians give legal **consent**, while researchers must also obtain ongoing, age-appropriate **child assent**; a child's refusal (**dissent**) must always override parental consent.",
        level: "SL",
      },
      {
        front: "HL Extension (Culture): Why is applying Ainsworth's Strange Situation globally criticized as an **imposed etic**?",
        back: "It imports a scoring rubric built on Western nuclear-family norms (brief separations, dyadic maternal care) as if universal, risking misclassifying culturally adaptive independence (Germany) or acute separation distress (Japan) as 'insecure' (**Bias** & **Perspective**).",
        level: "HL",
      },
    ],
    mustKnow: [
      "In IB Psychology FA2027, **Human Development** is **Compulsory Context 2**—always integrate **Biological, Cognitive, and Sociocultural** explanations through the **6 Core Concepts**.",
      "Brain maturation relies on **synaptic blooming**, experience-dependent **pruning**, and **myelination**; adolescent PFC–limbic asymmetry interacts with **peer presence** (Chein et al., 2011).",
      "Contrast **Piaget** (solo constructivism, schemas, 4 stages; challenged by Baillargeon & Hughes on Measurement) with **Vygotsky** (social ZPD, scaffolding, cultural tools & language).",
      "Bowlby's **Internal Working Model** links evolutionary attachment to cognitive relationship expectations; **Rutter's ERA study** supports a **sensitive period** (~6 months threshold) rather than strict irreversibility.",
      "van IJzendoorn & Kroonenberg (1988): Secure attachment is modal across all 8 countries, Type A/C reflect cultural caregiving norms, and **intra-cultural variation exceeds inter-cultural variation (~1.5×)**.",
      "Marcia's 4 identity statuses (**Achievement, Moratorium, Foreclosure, Diffusion**) are dynamic across domains and should not be evaluated solely through individualistic Western assumptions.",
      "**Werner's Kauai study** proves resilience emerges from multi-level **Biological, Cognitive, and Sociocultural** protective factors—highlighting lifespan **Change** and social **Responsibility**.",
      "**Longitudinal** tracks true Change (risk: selective attrition & practice effects); **Cross-sectional** is fast (risk: cohort confound); **Cross-sequential** separates age from cohort.",
      "Attrition Rate = {{(N_0 - N_t) / N_0 * 100%}}; Retention Rate = {{N_t / N_0 * 100%}}—always divide by the initial baseline sample {{N_0}}.",
      "Ethical research with minors demands **parental consent + ongoing child assent**, active **right to withdraw** (watching non-verbal cues), strict distress stopping rules, and safeguarding protocols.",
    ],
    misconceptions: [
      {
        wrong: "Synaptic pruning means brain damage or losing intelligence as children grow older.",
        right: "Pruning is an adaptive sculpting process that removes inefficient, unused synapses while myelinating active pathways, making cognitive processing faster and more specialized.",
        level: "SL",
      },
      {
        wrong: "Teenagers take risks purely because their prefrontal cortex is 'missing' or they cannot understand danger.",
        right: "Adolescents understand risk accurately in calm, solitary settings; risk-taking spikes primarily in emotionally arousing, **peer-present** contexts where heightened limbic reward sensitivity temporarily outweighs still-maturing PFC control (Casey/Steinberg; Chein et al., 2011).",
        level: "SL",
      },
      {
        wrong: "van IJzendoorn & Kroonenberg (1988) proved Japanese and German parenting causes insecure attachment.",
        right: "Secure (Type B) was the most common pattern in BOTH Japan (68%) and West Germany (57%). Elevated Type C in Japan and Type A in West Germany largely reflect cultural caregiving norms clashing with an **imposed etic** Western laboratory protocol.",
        level: "SL",
      },
      {
        wrong: "If an infant misses forming an attachment in the first year, permanent, irreversible damage is guaranteed.",
        right: "Rutter's ERA longitudinal study supports a **sensitive period** rather than a rigid critical period: children adopted before 6 months achieved near-complete catch-up, and many adopted later still showed meaningful—though more variable—recovery (**Change**).",
        level: "SL",
      },
      {
        wrong: "Marcia's identity statuses are a strict sequential ladder where Foreclosure is always unhealthy.",
        right: "People move flexibly across statuses and differ by life domain (e.g., Achievement in friendships, Moratorium in career). In interdependent cultures, family-guided commitment (Foreclosure) often supports strong belonging and well-being (**Perspective**).",
        level: "SL",
      },
      {
        wrong: "A cross-sectional study comparing 15-year-olds and 55-year-olds directly measures how people change as they age.",
        right: "Cross-sectional designs compare **different birth cohorts** at one moment, confounding ageing with generational **cohort effects** (education, technology, health). Only longitudinal or cross-sequential designs track intra-individual **Change**.",
        level: "SL",
      },
      {
        wrong: "Once parents sign a consent form, researchers can require a reluctant child to finish the task.",
        right: "Parental consent is never sufficient on its own: researchers must obtain ongoing **child assent**, and a child's verbal or non-verbal **dissent** immediately overrides parental permission (**Responsibility**).",
        level: "SL",
      },
      {
        wrong: "HL Misconception: High intra-cultural variation in attachment means culture does not matter.",
        right: "High intra-cultural variation (~1.5× inter-cultural variation) shows that socioeconomic stress, family structure, and urban/rural subcultures interact *with* national values—meaning researchers must avoid stereotyping entire countries as homogeneous (**Bias** & **Perspective**).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Treating Human Development as a standalone legacy elective rather than FA2027 **Compulsory Context 2: Human Development** integrated with Biological, Cognitive, and Sociocultural approaches.",
      "Describing Piaget's four stages purely chronologically without evaluating **Measurement** validity (Baillargeon & DeVos, Hughes) or contrasting against **Vygotsky's sociocultural Perspective**.",
      "Writing 'Rutter proved institutional deprivation causes autism'—Rutter's ERA study was a **natural experiment** (cannot fully exclude prenatal confounds) and observed *quasi-autistic features* primarily in prolonged post-6-month deprivation.",
      "Forgetting to cite **intra-cultural variation (~1.5× inter-cultural variation)** when evaluating van IJzendoorn & Kroonenberg (1988)—this detail consistently pushes essays into the top markband.",
      "Calculating longitudinal attrition by dividing dropouts by the *final* sample {{N_t}} instead of the *initial baseline* sample {{N_0}}.",
      "Confusing **cohort effects** (cross-sectional confound) with **practice effects** or **attrition** (longitudinal confounds).",
      "Treating resilience in Werner's Kauai study as a purely inborn trait rather than showing the interaction of **Biological, Cognitive, and Sociocultural** protective factors.",
      "Listing generic ethics ('get consent, avoid harm') instead of child-specific FA2027 **Responsibility** safeguards (**parental consent + child assent**, non-verbal withdrawal cues, distress stopping rules, safeguarding limits).",
    ],
    mnemonics: [
      {
        topic: "Piaget's 4 Cognitive Stages",
        device: "Silly Penguins Can Fly",
        explanation: "**S**ensorimotor (0–2) → **P**reoperational (2–7) → **C**oncrete Operational (7–11) → **F**ormal Operational (12+).",
        level: "SL",
      },
      {
        topic: "Marcia's 4 Identity Statuses",
        device: "AM–FD (Active Morning, Fixed Drift)",
        explanation: "High Exploration = **A**chievement (+C) & **M**oratorium (−C); Low Exploration = **F**oreclosure (+C) & **D**iffusion (−C).",
        level: "SL",
      },
      {
        topic: "Developmental Design Threats",
        device: "Cross-Cohort / Long-LAP",
        explanation: "**Cross**-sectional risks **Cohort** effects; **Long**itudinal risks **L**ength/cost, **A**ttrition, and **P**ractice effects.",
        level: "SL",
      },
      {
        topic: "Child Research Ethics (Responsibility)",
        device: "P-A-W-S",
        explanation: "**P**arental consent, **A**ssent from child (dissent overrides!), **W**ithdrawal via verbal/non-verbal cues, **S**afeguarding & distress stopping rules.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Graduated Driver Licensing (GDL) Laws",
        emoji: "🚗",
        detail:
          "Informed directly by Steinberg and Chein et al.'s (2011) adolescent peer-presence findings, many countries restrict teenage novice drivers from carrying multiple teen passengers during their first year—cutting fatal crash rates substantially.",
      },
      {
        title: "Early Childhood Scaffolding in Singapore Preschools",
        emoji: "🏫",
        detail:
          "Singapore's Nurturing Early Learners (NEL) framework applies Vygotsky's ZPD and scaffolding—teachers model bilingual storytelling and hands-on numeracy prompts, then gradually fade guidance as children internalize strategies.",
      },
      {
        title: "Deinstitutionalization & Foster-Care Policy Reform",
        emoji: "🏡",
        detail:
          "Rutter's ERA study and the Bucharest Early Intervention Project prompted global child-welfare reforms replacing large impersonal orphanages with family-based foster care, emphasizing early placement within sensitive periods.",
      },
      {
        title: "Culturally Responsive Parenting Interventions",
        emoji: "🌏",
        detail:
          "Modern attachment interventions avoid imposing Western solo-sleeping norms on collectivist families, instead focusing on universal caregiver sensitivity and multi-caregiver warmth across grandparents and extended kin.",
      },
      {
        title: "Youth Mentoring & Resilience Programmes",
        emoji: "🤝",
        detail:
          "Inspired by Werner's Kauai discovery that one stable adult bond buffers adversity, school-based mentoring and community befriender programmes pair at-risk youth with consistent long-term mentors.",
      },
    ],
    videos: [
      {
        title: "The Mysterious Workings of the Adolescent Brain — Sarah-Jayne Blakemore (TED)",
        channel: "TED",
        url: "https://www.youtube.com/results?search_query=Sarah+Jayne+Blakemore+mysterious+workings+adolescent+brain+TED",
      },
      {
        title: "Piaget vs Vygotsky — Cognitive Development Explained",
        channel: "Sprouts",
        url: "https://www.youtube.com/results?search_query=Sprouts+Piaget+Vygotsky+cognitive+development+ZPD",
      },
      {
        title: "Ainsworth's Strange Situation & Attachment Theory",
        channel: "CrashCourse Psychology",
        url: "https://www.youtube.com/results?search_query=Crash+Course+Psychology+attachment+Ainsworth+Strange+Situation",
      },
      {
        title: "Longitudinal vs Cross-Sectional Research Designs in Developmental Psychology",
        channel: "IB Psychology Revision",
        url: "https://www.youtube.com/results?search_query=longitudinal+vs+cross+sectional+cohort+effect+developmental+psychology",
      },
    ],
    formulas: [
      {
        name: "Longitudinal Attrition Rate (%)",
        formula: "{{(N_0 - N_t) / N_0 * 100%}}",
        note: "N₀ = baseline sample at Wave 1; Nₜ = participants retained at Wave t. Always divide by N₀.",
        level: "SL",
      },
      {
        name: "Longitudinal Retention Rate (%)",
        formula: "{{N_t / N_0 * 100% = 100% - \"Attrition\"}}",
        note: "Proportion of the original cohort still participating at Wave t.",
        level: "SL",
      },
      {
        name: "Multi-Wave Compound Retention",
        formula: "{{N_k = N_0 * (1 - r)^k}}",
        note: "Expected sample remaining after k waves with constant per-wave attrition proportion r.",
        level: "SL",
      },
      {
        name: "Attachment Classification Proportion (%)",
        formula: "{{(n_\"type\" / N_\"total\") * 100%}}",
        note: "Used to compare Type B (Secure), Type A (Avoidant), and Type C (Resistant) shares across cultures.",
        level: "SL",
      },
      {
        name: "Cross-Cultural Intra- vs Inter-Variation Ratio",
        formula: "{{\"Intra-cultural variation\" ~= 1.5 * \"Inter-cultural variation\"}}",
        note: "Key van IJzendoorn & Kroonenberg (1988) benchmark warning against cultural overgeneralization.",
        level: "SL",
      },
      {
        name: "Vygotsky's Zone of Proximal Development (ZPD)",
        formula: "{{\"ZPD\" = \"Assisted Mastery (MKO)\" - \"Independent Mastery\"}}",
        note: "Optimal instructional window where scaffolding promotes internalization.",
        level: "SL",
      },
      {
        name: "Piagetian Cognitive Adaptation Cycle",
        formula: "{{\"Schema\" -> \"Assimilation\" -> \"Disequilibrium\" -> \"Accommodation\" -> \"Equilibrium\"}}",
        note: "Active constructivist mechanism driving stage transitions.",
        level: "SL",
      },
      {
        name: "Cross-Sectional Confound Identity",
        formula: "{{\"Observed Age Gap\" = \"True Age Change\" + \"Cohort Effect\"}}",
        note: "Why a single-time-point age comparison cannot isolate genuine developmental ageing.",
        level: "SL",
      },
      {
        name: "Marcia's 2×2 Status Mapping",
        formula: "{{\"Status\" = f(\"Exploration\" in {0, 1}, \"Commitment\" in {0, 1})}}",
        note: "(1,1) Achievement · (1,0) Moratorium · (0,1) Foreclosure · (0,0) Diffusion.",
        level: "SL",
      },
      {
        name: "HL Selective Attrition Bias Effect",
        formula: "{{mu_\"observed\" = mu_\"true\" + \"Bias\"_\"dropout\"}}",
        note: "Non-random loss of lower-scoring/stressed participants inflates observed longitudinal means.",
        level: "HL",
      },
    ],
  },
};
