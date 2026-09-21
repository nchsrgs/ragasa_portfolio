import { ArrowUpRight } from "lucide-react";
import { DetailCard } from "@/components/detail-card";
import { ProjectDetails } from "@/components/detail-content";
import { SectionHeading } from "@/components/section-heading";
import { projects, socialLinks } from "@/data/portfolio";

export function ProjectsSection() {
  const githubUrl = socialLinks.find((link) => link.kind === "github")?.href;

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <SectionHeading number="05" title="Selected projects" aside="Things I have built and learned from." />
        {projects.length > 0 ? (
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
        ) : (
          <div className="projects-empty"><span className="empty-index">WORK / IN PROGRESS</span><div><h3>Building the next case study.</h3><p>Project stories will live here. Until then, you can explore my public code on GitHub.</p>{githubUrl && <a className="inline-link" href={githubUrl} target="_blank" rel="noopener noreferrer">View my GitHub <ArrowUpRight size={17} /></a>}</div></div>
        )}
      </div>
    </section>
  );
}
