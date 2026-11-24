// Browser-tab icon: royal violet square with crisp Psi (Ψ) glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #5b21b6 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={22} height={22} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="14" x2="50" y2="86" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" />
          <path d="M22 24 C22 54, 78 54, 78 24" fill="none" stroke="#ddd6fe" strokeWidth={9} strokeLinecap="round" />
          <line x1="36" y1="86" x2="64" y2="86" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
