import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Certification, Experience, Project } from "@/types/portfolio";

function TechnologyList({ technologies }: { technologies: string[] }) {
  return <ul className="detail-technology-list" aria-label="Technologies">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>;
}

export function ExperienceDetails({ experience }: { experience: Experience }) {
  return (
    <div className="detail-content experience-expanded">
      {experience.contributions.length > 0 && <p className="detail-intro">{experience.summary}</p>}
      {experience.contributions.length > 1 && <section className="detail-content-section" aria-label="Additional contributions"><h4>Additional contributions</h4><dl className="contribution-list">{experience.contributions.slice(1).map((contribution) => <div className="contribution-row" key={contribution.label}><dt>{contribution.label}</dt><dd>{contribution.description}</dd></div>)}</dl></section>}
      {experience.systems && experience.systems.length > 0 && <section className="detail-content-section"><h4>Systems worked on</h4><ul className="detail-bullet-list">{experience.systems.map((system) => <li key={system.name}><strong>{system.name}</strong><span>{system.description}</span></li>)}</ul></section>}
      {experience.tools && experience.tools.length > 0 && <section className="detail-content-section"><h4>Tools</h4><p>{experience.tools.join(", ")}</p></section>}
      {experience.methodologies && experience.methodologies.length > 0 && <section className="detail-content-section"><h4>Ways of working</h4><p>{experience.methodologies.join(", ")}</p></section>}
    </div>
  );
}

export function ProjectDetails({ project }: { project: Project }) {
  if (project.isNDA) {
    return (
      <div className="detail-content">
        <div className="detail-facts"><span>{project.date}</span><span>Restricted project</span></div>
        <p className="detail-intro">{project.shortDescription}</p>
        <TechnologyList technologies={project.technologies} />
        <div className="restricted-notice"><h3>Project access restricted</h3><p>This project was developed under a non-disclosure agreement. Further details and source code cannot be shared publicly.</p></div>
      </div>
    );
  }

  const links = [
    ...(project.websiteUrl ? [{ label: "Live website", href: project.websiteUrl }] : []),
    ...(project.repositoryUrl ? [{ label: "Source code", href: project.repositoryUrl }] : []),
    ...(project.links ?? []),
  ];

  return (
    <div className="detail-content">
      <div className="detail-facts"><span>{project.date}</span></div>
      <p className="detail-intro">{project.description}</p>
      <TechnologyList technologies={project.technologies} />
      {project.image && <div className="detail-project-image"><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 100vw, 760px" /></div>}
      {project.contribution && <section className="detail-content-section"><h3>My contribution</h3><p>{project.contribution}</p></section>}
      {project.features && project.features.length > 0 && <section className="detail-content-section"><h3>Key features</h3><ul className="detail-bullet-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>}
      {project.architecture && project.architecture.length > 0 && <section className="detail-content-section"><h3>Technical approach</h3><ul className="detail-bullet-list">{project.architecture.map((detail) => <li key={detail}>{detail}</li>)}</ul></section>}
      {links.length > 0 && <nav className="detail-links" aria-label={`${project.name} links`}>{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}</nav>}
    </div>
  );
}

export function CertificationDetails({ certification }: { certification: Certification }) {
  const { asset } = certification;

  return (
    <div className="detail-content">
      <div className="detail-facts"><span>{certification.acquiredAt}</span>{certification.issuer && <span>{certification.issuer}</span>}</div>
      <div className="certificate-viewer">
        {asset.kind === "pdf" ? (
          <iframe src={asset.src} title={`${certification.name} certificate PDF`} loading="lazy" />
        ) : (
          <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 760px) 100vw, 900px" />
        )}
      </div>
      <a className="certificate-open-link" href={asset.src} target="_blank" rel="noopener noreferrer">Open certificate in a new tab<ExternalLink size={16} /></a>
    </div>
  );
}
