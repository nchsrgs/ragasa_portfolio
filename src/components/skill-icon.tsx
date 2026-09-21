import {
  Database,
  Kanban,
  Layers3,
  Network,
  Table2,
  TestTube2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SkillName } from "@/data/portfolio";

type SkillIconDefinition =
  | { kind: "brand"; src: string; monochrome?: boolean; boostOnDark?: boolean }
  | { kind: "concept"; icon: LucideIcon };

const skillIcons: Record<SkillName, SkillIconDefinition> = {
  TypeScript: { kind: "brand", src: "/icons/devicon/typescript-original.svg" },
  JavaScript: { kind: "brand", src: "/icons/devicon/javascript-original.svg" },
  SQL: { kind: "concept", icon: Database },
  Java: { kind: "brand", src: "/icons/devicon/java-original.svg" },
  "C#": { kind: "brand", src: "/icons/devicon/csharp-original.svg" },
  "Node.js": { kind: "brand", src: "/icons/devicon/nodejs-original.svg" },
  "Express.js": { kind: "brand", src: "/icons/devicon/express-original.svg", monochrome: true },
  "RESTful APIs": { kind: "concept", icon: Network },
  TypeORM: { kind: "brand", src: "/icons/typeorm.svg", monochrome: true },
  HTML5: { kind: "brand", src: "/icons/devicon/html5-original.svg" },
  CSS3: { kind: "brand", src: "/icons/devicon/css3-original.svg" },
  MySQL: { kind: "brand", src: "/icons/devicon/mysql-original.svg", boostOnDark: true },
  PostgreSQL: { kind: "brand", src: "/icons/devicon/postgresql-original.svg" },
  "Database design": { kind: "concept", icon: Workflow },
  "SQL queries": { kind: "concept", icon: Table2 },
  Git: { kind: "brand", src: "/icons/devicon/git-original.svg" },
  Bitbucket: { kind: "brand", src: "/icons/devicon/bitbucket-original.svg" },
  Jira: { kind: "brand", src: "/icons/devicon/jira-original.svg" },
  YouTrack: { kind: "concept", icon: Kanban },
  Apidog: { kind: "concept", icon: TestTube2 },
  Postman: { kind: "brand", src: "/icons/devicon/postman-plain.svg" },
  Linux: { kind: "brand", src: "/icons/devicon/linux-plain.svg", monochrome: true },
  Agile: { kind: "concept", icon: Workflow },
  "Software architecture": { kind: "concept", icon: Network },
  "Full-stack development": { kind: "concept", icon: Layers3 },
};

export function SkillIcon({ name }: { name: SkillName }) {
  const definition = skillIcons[name];
  if (definition.kind === "brand") {
    const url = `url("${definition.src}")`;
    if (definition.monochrome) {
      return (
        <span
          className="skill-icon skill-icon-mono"
          style={{ maskImage: url, WebkitMaskImage: url }}
          aria-hidden="true"
        />
      );
    }

    return (
      <span
        className={`skill-icon skill-icon-color${definition.boostOnDark ? " skill-icon-dark-boost" : ""}`}
        style={{ backgroundImage: url }}
        aria-hidden="true"
      />
    );
  }

  const Icon = definition.icon;
  return <Icon className="skill-icon" size={16} strokeWidth={1.9} aria-hidden="true" />;
}
