import type { ReactNode } from "react";

export function SectionHeading({ number, title, aside }: { number: string; title: string; aside?: ReactNode }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main"><span className="section-number">{number}</span><h2>{title}</h2></div>
      {aside && <div className="section-heading-aside">{aside}</div>}
    </div>
  );
}
