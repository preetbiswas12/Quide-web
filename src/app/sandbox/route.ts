// src/app/helpform/route.ts
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";      // make sure it isn’t pruned

export function GET() {
  return NextResponse.redirect(
    "https://quidedocs.vercel.app/sandbox",
    307,            // 307 for temporary
  );
}
// optional, stops Vercel pre‑flight from 404‑ing
export const HEAD = GET;
