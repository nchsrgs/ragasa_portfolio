import { ChevronDown } from "lucide-react";
import { ExperienceDetails } from "@/components/detail-content";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section section-experience">
      <div className="container">
        <SectionHeading number="03" title="Experience" aside="Where theory met production work." />
        <div className="timeline-list">
          {experiences.map((experience) => {
            const hasMore = experience.contributions.length > 0 || Boolean(
              experience.systems?.length || experience.tools?.length || experience.methodologies?.length,
            );
            return (
              <article className="timeline-item experience-entry" key={experience.id}>
                <div className="timeline-side"><span className="timeline-dot" /><span>{experience.period}</span></div>
                <div className="timeline-content">
                  <p className="item-kicker">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  {experience.location && <p className="item-location">{experience.location}</p>}
                  <p className="experience-highlight">{experience.contributions[0]?.description ?? experience.summary}</p>
                  {experience.technologies.length > 0 && <ul className="experience-technologies" aria-label="Technology stack">{experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
                  {hasMore && <details className="experience-disclosure" name="experience-details">
                    <summary><span className="experience-more-label">View full experience</span><span className="experience-less-label">Hide details</span><ChevronDown size={17} aria-hidden="true" /></summary>
                    <ExperienceDetails experience={experience} />
                  </details>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
