import { DetailCard } from "@/components/detail-card";
import { ProjectDetails } from "@/components/detail-content";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <SectionHeading number="03" title="PROJECTS" aside="The decisions and systems behind my work." />
        <div className="detail-card-grid detail-card-grid--projects">
          {projects.map((project, index) => (
            <DetailCard
              key={project.id}
              id={`project-${project.id}`}
              kind="project"
              title={project.name}
              eyebrow={`Project / ${String(index + 1).padStart(2, "0")}`}
              details={<ProjectDetails project={project} />}
            >
              <p className="detail-card-description">{project.shortDescription}</p>
              <p className="detail-card-date">{project.date}</p>
              <ul className="detail-card-technologies" aria-label="Technology stack">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </DetailCard>
          ))}
        </div>
      </div>
    </section>
  );
}
