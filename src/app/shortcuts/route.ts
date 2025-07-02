import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  return NextResponse.redirect(
    "https://quidedocs.vercel.app/shortcuts",
    308
  );
}

export const HEAD = GET;
