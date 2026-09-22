"use client";

import { useEffect } from "react";

export function LegacyExperienceRedirect() {
  useEffect(() => {
    const redirects: Record<string, string> = { "#experience": "/experience", "#contact": "/contact" };
    const destination = redirects[window.location.hash];
    if (destination) window.location.replace(destination);
  }, []);

  return null;
}
