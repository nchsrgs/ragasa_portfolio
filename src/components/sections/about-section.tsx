import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <SectionHeading number="01" title="About me" aside="A little context behind the code." />
        <div className="about-grid">
          <p className="about-statement">Curious by nature.<br /><em>Intentional</em> in practice.</p>
          <div className="about-copy">{profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="inline-link" href={profile.resumeUrl} download>More in my resume <ArrowUpRight size={17} /></a></div>
        </div>
      </div>
    </section>
  );
}
