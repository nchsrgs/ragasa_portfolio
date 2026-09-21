"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { certifications, profile } from "@/data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  ...(certifications.length > 0 ? [{ label: "Certifications", href: "#certifications" }] : []),
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`} onClick={() => setMenuOpen(false)}>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!menuOpen}>
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}
