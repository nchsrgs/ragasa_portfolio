"use client";

import { useState } from "react";
import type { Education } from "@/types/portfolio";

export function EducationList({ education }: { education: Education[] }) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = education.length > 1;
  const visibleEducation = showAll ? education : education.slice(0, 1);

  return (
    <section id="education" className="overview-resume-group" aria-labelledby="overview-education-heading">
      <div className="overview-resume-heading">
        <h2 id="overview-education-heading">Education</h2>
        {hasMore ? (
          <button type="button" className="overview-experience-toggle" aria-controls="overview-education-list" aria-expanded={showAll} onClick={() => setShowAll((value) => !value)}>
            {showAll ? "Show less" : "View all"}
          </button>
        ) : <span className="overview-resume-count">{String(education.length).padStart(2, "0")}</span>}
      </div>
      <div id="overview-education-list" className="overview-resume-list">
        {visibleEducation.map((item) => (
          <article className="overview-education" key={item.id}>
            <h3>{item.qualification}</h3>
            <p>{item.school}</p>
            <span>{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
