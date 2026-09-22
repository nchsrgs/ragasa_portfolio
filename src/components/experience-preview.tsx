"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ExperienceDetails } from "@/components/detail-content";
import type { Experience } from "@/types/portfolio";

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = experiences.length > 1;
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 1);

  return (
    <section id="experience" className="overview-resume-group" aria-labelledby="overview-experience-heading">
      <div className="overview-resume-heading">
        <h2 id="overview-experience-heading">Experience</h2>
        {hasMore ? (
          <button type="button" className="overview-experience-toggle" aria-controls="overview-experience-list" aria-expanded={showAll} onClick={() => setShowAll((value) => !value)}>
            {showAll ? "Show less" : "View all"}
          </button>
        ) : <span className="overview-resume-count">01</span>}
      </div>
      <div id="overview-experience-list" className="overview-resume-list">
        {visibleExperiences.map((experience) => <ExperiencePreview key={experience.id} experience={experience} />)}
      </div>
    </section>
  );
}

export function ExperiencePreview({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `experience-${experience.id}-title`;

  useEffect(() => {
    if (open && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      closeRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <button className="overview-experience" type="button" ref={triggerRef} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label={`View ${experience.role} experience at ${experience.company}`}>
        <strong>{experience.role}</strong>
        <span>{experience.company}</span>
        <small>{experience.period}</small>
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <dialog className="detail-dialog overview-experience-dialog" ref={dialogRef} aria-labelledby={titleId} onClose={() => { setOpen(false); triggerRef.current?.focus(); }}>
        <div className="detail-dialog-frame">
          <header className="detail-dialog-header">
            <div><span className="detail-dialog-eyebrow">{experience.company} / {experience.period}</span><h2 id={titleId}>{experience.role}</h2></div>
            <button className="icon-button detail-dialog-close" ref={closeRef} type="button" aria-label="Close experience details" onClick={() => dialogRef.current?.close()}><X size={21} /></button>
          </header>
          <div className="detail-dialog-body">
            <ExperienceDetails experience={experience} />
            {experience.technologies.length > 0 && <ul className="detail-technology-list" aria-label="Technologies">{experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
          </div>
        </div>
      </dialog>
    </>
  );
}
