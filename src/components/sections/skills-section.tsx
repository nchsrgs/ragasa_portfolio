import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/skill-icon";
import { skillGroups } from "@/data/portfolio";

const capabilities = [
  { title: "Backend systems", description: "Application logic, REST APIs, and maintainable services.", tools: ["Node.js", "Express.js", "TypeScript", "Spring Boot"] },
  { title: "Data & integration", description: "Relational models, queries, and dependable data flows.", tools: ["SQL", "PostgreSQL", "MySQL", "TypeORM", "Firebase"] },
  { title: "Quality & delivery", description: "Testing, debugging, documentation, and release support.", tools: ["Unit Testing", "Linux", "Git", "Docker"] },
  { title: "Interfaces & workflow", description: "Frontend foundations and collaborative development.", tools: ["React", "Next.js", "Agile Development", "Jira"] },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="section solution-capabilities-section">
      <div className="container">
        <SectionHeading number="02" title="CAPABILITIES" />
        <div className="solution-capability-list">
          {capabilities.map((capability, index) => (
            <article className="solution-capability" key={capability.title}>
              <span className="solution-capability-index">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
              <ul aria-label={`${capability.title} technologies`}>{capability.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
        <details className="solution-toolkit"><summary>Full toolkit <ChevronDown size={17} aria-hidden="true" /></summary><div className="solution-toolkit-grid">{skillGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}><SkillIcon name={item} />{item}</li>)}</ul></div>)}</div></details>
      </div>
    </section>
  );
}
