// No "use client" → this runs on the server
import { redirect } from "next/navigation";

export default function HelpformRedirect() {
  // You can flip `redirect()` and return nothing
  redirect("https://quidedocs.vercel.app/helpform");
}
