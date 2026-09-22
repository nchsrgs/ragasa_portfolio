import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="section section-education">
      <div className="container">
        <SectionHeading number="04" title="Education" />
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-item" key={item.id}>
              <span className="education-index" aria-hidden="true">0{index + 1}</span>
              <div className="education-main"><h3>{item.qualification}</h3><p className="education-school">{item.school}</p></div>
              <p className="education-period">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
