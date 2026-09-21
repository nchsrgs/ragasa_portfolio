import { SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/skill-icon";
import { currentlyLearning, skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <SectionHeading number="02" title="Tech Stack" aside="A focused toolkit, shaped by real delivery." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-top"><span className="skill-index">0{index + 1}</span><h3>{group.label}</h3></div>
              <div className="skill-items">{group.items.map((item) => <span className="skill-item" key={item}><SkillIcon name={item} /><span className="skill-item-label">{item}</span></span>)}</div>
            </div>
          ))}
        </div>
        <div className="learning-row"><span className="learning-label">Currently exploring</span><div>{currentlyLearning.map((item) => <span className="learning-item" key={item}><SkillIcon name={item} />{item}</span>)}</div></div>
      </div>
    </section>
  );
}
