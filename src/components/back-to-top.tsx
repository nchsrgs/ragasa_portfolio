"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" title="Back to top"><ArrowUp size={18} aria-hidden="true" /></button>;
}
