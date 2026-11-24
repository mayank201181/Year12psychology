// PWA app icon as a PNG, drawn on demand.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;
const BRAND = SUBJECT.themeColorLight;
const BRAND_2 = "#5b21b6";

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

function SubjectGlyph({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="14" x2="50" y2="86" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" />
      <path d="M22 24 C22 54, 78 54, 78 24" fill="none" stroke="#ddd6fe" strokeWidth={8} strokeLinecap="round" />
      <line x1="36" y1="86" x2="64" y2="86" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" />
    </svg>
  );
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  const glyph = Math.round(size * (maskable ? 0.6 : 0.66));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_2} 100%)`,
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: glyph,
            height: glyph,
          }}
        >
          <SubjectGlyph px={glyph} />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
  );
}
