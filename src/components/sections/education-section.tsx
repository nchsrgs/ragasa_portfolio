import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="section section-education">
      <div className="container">
        <SectionHeading number="04" title="Education" />
        <div className="timeline-list">
          {education.map((item) => (
            <article className="timeline-item education-item" key={item.id}>
              <div className="timeline-side"><span className="timeline-dot" /><span>{item.period}</span></div>
              <div className="timeline-content"><p className="item-kicker">{item.school}</p><h3>{item.qualification}</h3>{item.details && <p className="item-summary">{item.details}</p>}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
