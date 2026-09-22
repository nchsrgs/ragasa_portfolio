import Link from "next/link";
import { ArrowLeft, ChevronDown, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

const orderedExperiences = [...experiences].sort((a, b) => Number(Boolean(a.upcoming)) - Number(Boolean(b.upcoming)));

export function ExperienceSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="experience" className="section solution-experience-section">
      <div className="container">
        {standalone && <Link className="experience-return" href="/"><ArrowLeft size={16} aria-hidden="true" />Back to portfolio</Link>}
        <SectionHeading number="01" title="EXPERIENCE" as={standalone ? "h1" : "h2"} />
        <div className="solution-experience-list">
          {orderedExperiences.map((experience, index) => (
            <article className="solution-experience-item" key={experience.id}>
              <div className="solution-experience-meta"><span>{String(index + 1).padStart(2, "0")} / {experience.upcoming ? "NEXT ROLE" : "DELIVERED WORK"}</span><p>{experience.period}</p></div>
              <div className="solution-experience-body">
                <div className="solution-experience-title"><h3>{experience.role}</h3>{experience.upcoming && <span>Upcoming</span>}</div>
                <p className="solution-experience-company">{experience.company}{experience.location && <> <MapPin size={13} aria-hidden="true" /> {experience.location}</>}</p>
                <p className="solution-experience-summary">{experience.summary}</p>
                <div className="solution-contribution-heading">{experience.upcoming ? "Planned scope" : "Selected contributions"}</div>
                <ul className="solution-contributions">
                  {experience.contributions.slice(0, experience.upcoming ? 2 : 3).map((contribution) => <li key={contribution.label}><strong>{contribution.label}</strong><span>{contribution.description}</span></li>)}
                </ul>
                {experience.contributions.length > (experience.upcoming ? 2 : 3) && <details className="solution-experience-disclosure"><summary>More {experience.upcoming ? "planned responsibilities" : "contributions"}<ChevronDown size={16} aria-hidden="true" /></summary><ul className="solution-additional-contributions">{experience.contributions.slice(experience.upcoming ? 2 : 3).map((contribution) => <li key={contribution.label}><strong>{contribution.label}</strong><span>{contribution.description}</span></li>)}</ul></details>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
