import Image from "next/image";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";

const iconByKind = { github: Github, linkedin: Linkedin, email: Mail };
const lifecycleStages = ["Understand", "Design", "Build", "Test", "Refine", "Deploy", "Support"];
const nameWords = profile.name.split(" ");

export function OverviewSection() {
  return (
    <section id="top" className="overview-section solution-hero" aria-labelledby="hero-name">
      <div className="container solution-hero-inner">
        <div className="overview-identity solution-identity">
          <div className="overview-portrait-frame">
            <div className="overview-portrait">
              <Image src={profile.photo.src} alt={profile.photo.alt} fill sizes="(max-width: 700px) 290px, (max-width: 1100px) 310px, 370px" priority />
            </div>
          </div>
          <div className="overview-identity-copy">
            <p className="overview-location"><MapPin size={14} strokeWidth={1.8} aria-hidden="true" />BULACAN | PH</p>
            <div className="overview-socials" aria-label="Professional profiles">
              {socialLinks.map((link) => {
                const Icon = iconByKind[link.kind];
                return <a key={link.kind} href={link.href} target={link.kind === "email" ? undefined : "_blank"} rel={link.kind === "email" ? undefined : "noopener noreferrer"} aria-label={link.label} title={link.label}><Icon size={18} aria-hidden="true" /></a>;
              })}
              <a href={profile.resumeUrl} download aria-label="Download resume" title="Download resume"><Download size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="solution-hero-copy">
          <p className="solution-hero-kicker"><span aria-hidden="true" />Software Engineer / Full-stack development</p>
          <h1 id="hero-name" aria-label={profile.name}>
            {nameWords.map((word, wordIndex) => (
              <span className="solution-name-word" aria-hidden="true" key={word}>
                {[...word].map((letter, letterIndex) => (
                  <span
                    className="solution-name-letter"
                    key={`${word}-${letterIndex}`}
                    style={{ animationDelay: `${120 + (wordIndex * (nameWords[0].length + 1) + letterIndex) * 38}ms` }}
                  >{letter}</span>
                ))}
              </span>
            ))}
          </h1>
          <h2>Building dependable software <em>across the stack.</em></h2>
        </div>
        <p className="solution-hero-intro">I turn requirements into working applications, connecting thoughtful interfaces with reliable APIs and data. My experience includes enterprise backend development, testing, debugging, and deployment support.</p>
        <div className="solution-hero-role"><span>Focus</span><p>Frontend <strong>/</strong> Backend <strong>/</strong> Data <strong>/</strong> Delivery</p></div>
      </div>
      <div className="lifecycle-band">
        <div className="container lifecycle-viewport">
          <ol className="lifecycle-list" aria-label="Software development lifecycle">
            {lifecycleStages.map((stage) => <li key={stage}>{stage}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
