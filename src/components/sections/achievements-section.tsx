import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { achievements, projects } from "@/data/portfolio";

export function AchievementsSection() {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="section section-achievements">
      <div className="container"><SectionHeading number={projects.length > 0 ? "05" : "04"} title="Achievements" />
        <div className="achievement-list">{achievements.map((item) => <article key={item.id}><h3>{item.title}</h3><p>{[item.issuer, item.year].filter(Boolean).join(" / ")}</p>{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.title}`}><ArrowUpRight size={20} /></a>}</article>)}</div>
      </div>
    </section>
  );
}
