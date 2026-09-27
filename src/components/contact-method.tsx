"use client";

import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";

export function ContactMethod({ href, label, copyValue, icon }: { href: string; label: string; copyValue: string; icon: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copyContactValue() {
    let didCopy = false;

    try {
      await navigator.clipboard.writeText(copyValue);
      didCopy = true;
    } catch {
      const input = document.createElement("textarea");
      input.value = copyValue;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      didCopy = document.execCommand("copy");
      input.remove();
    }

    if (didCopy) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  }

  return (
    <div className="contact-method-row">
      <a className="contact-method-link" href={href}>{icon}<span>{label}</span></a>
      <button className="contact-copy-button" type="button" onClick={copyContactValue} aria-label={copied ? `${label} copied` : `Copy ${label}`} title={copied ? "Copied" : "Copy"}>
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      </button>
    </div>
  );
}
