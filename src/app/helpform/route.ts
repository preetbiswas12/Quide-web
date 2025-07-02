import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// GET /helpform  → 308 redirect to external site
export function GET(_req: NextRequest) {
  return NextResponse.redirect(
    "https://quidedocs.vercel.app/helpform",
    308                     // 308 = permanent; use 307 for temporary
  );
}

// Optional: handle HEAD to avoid host‑level 404 for pre‑flight checks
export const HEAD = GET;
