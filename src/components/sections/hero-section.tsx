import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { PracticeBand } from "@/components/sections/practice-band";

const iconByKind = { github: Github, linkedin: Linkedin, email: Mail };

export function HeroSection() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero container">
        <div className="hero-content">
        <p className="eyebrow"><strong className="eyebrow-role">{profile.role}</strong> <span aria-hidden="true">/</span> {profile.location}</p>
        <h1 id="hero-title" aria-label={profile.name}>
          {profile.nameLines.map((line, lineIndex) => (
            <span className="hero-name-line" aria-hidden="true" key={line}>
              {Array.from(lineIndex === profile.nameLines.length - 1 ? `${line}` : line).map((letter, letterIndex) => (
                <span className="hero-letter" key={`${letterIndex}-${letter}`} style={{ animationDelay: `${(lineIndex * 8 + letterIndex) * 38}ms` }}>{letter}</span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-lead">{profile.heroLead}</p>
        <p className="hero-description">{profile.heroDescription}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/experience">View experience <ArrowUpRight size={18} /></a>
          <Link className="button button-text" href="/contact">Get in touch <ArrowRight size={18} /></Link>
        </div>
        <div className="hero-meta">
          <div className="social-links" aria-label="Professional profiles">
            {socialLinks.map((link) => {
              const Icon = iconByKind[link.kind];
              return <a key={link.kind} href={link.href} target={link.kind === "email" ? undefined : "_blank"} rel={link.kind === "email" ? undefined : "noopener noreferrer"} aria-label={link.label} title={link.label}><Icon size={19} /></a>;
            })}
          </div>
          <a className="resume-link" href={profile.resumeUrl} download>Download resume <Download size={16} /></a>
        </div>
        </div>
        <div className="hero-visual">
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 36vw, 420px"
          priority
          className="portrait-image"
        />
        <span className="portrait-code" aria-hidden="true">{"{ }"}</span>
        </div>
      </div>
      <PracticeBand />
    </section>
  );
}
