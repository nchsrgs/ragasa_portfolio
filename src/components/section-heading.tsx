import type { ReactNode } from "react";

export function SectionHeading({ number, title, aside, as: Heading = "h2" }: { number: string; title: string; aside?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main"><span className="section-number">{number}</span><Heading>{title}</Heading></div>
      {aside && <div className="section-heading-aside">{aside}</div>}
    </div>
  );
}
