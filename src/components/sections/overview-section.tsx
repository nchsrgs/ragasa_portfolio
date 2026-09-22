import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";

const iconByKind = { github: Github, linkedin: Linkedin, email: Mail };
const lifecycleStages = ["Discover", "Design", "Build", "Test", "Deploy", "Train", "Support"];

export function OverviewSection() {
  return (
    <section id="top" className="overview-section solution-hero" aria-labelledby="hero-name">
      <div className="container solution-hero-inner">
        <div className="overview-identity solution-identity">
          <div className="overview-portrait-frame">
            <span className="overview-frame-corner overview-frame-corner--top-left" aria-hidden="true" />
            <span className="overview-frame-corner overview-frame-corner--top-right" aria-hidden="true" />
            <span className="overview-frame-corner overview-frame-corner--bottom-left" aria-hidden="true" />
            <span className="overview-frame-corner overview-frame-corner--bottom-right" aria-hidden="true" />
            <div className="overview-portrait">
              <Image src={profile.photo.src} alt={profile.photo.alt} fill sizes="(max-width: 700px) 290px, (max-width: 1100px) 280px, 350px" priority />
              <div className="overview-photo-label" aria-hidden="true">Incoming System Consultant</div>
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
          <p className="solution-hero-kicker"><span aria-hidden="true" />Software Engineering / Systems Consulting</p>
          <h1 id="hero-name">{profile.name}</h1>
          <h2>Building reliable software. <em>Solving real client problems.</em></h2>
        </div>
        <p className="solution-hero-intro">My backend experience spans APIs, data-driven features, testing, and release support. As I move into systems consulting, I am focused on understanding client requirements, resolving application issues, and helping people use their systems with confidence.</p>
        <div className="solution-hero-role"><span>Next chapter</span><p>Incoming System Consultant at {profile.incomingRole.company} <strong>· {profile.incomingRole.starts}</strong></p></div>
        <div className="overview-actions solution-hero-actions">
          <a className="button button-primary" href="#experience">Explore experience <ArrowDownRight size={18} aria-hidden="true" /></a>
          <a className="overview-scroll-link" href="#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="lifecycle-band">
        <div className="container lifecycle-viewport">
          <ol className="lifecycle-list" aria-label="Development and consulting lifecycle">
            {lifecycleStages.map((stage) => <li key={stage}>{stage}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
