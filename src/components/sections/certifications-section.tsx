import { ChevronDown } from "lucide-react";
import { CertificateGallery } from "@/components/certificate-gallery";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education, projects } from "@/data/portfolio";

export function CertificationsSection() {
  if (education.length === 0 && certifications.length === 0) return null;

  const [degree, ...earlierEducation] = education;

  return (
    <section id="credentials" className="section solution-credentials-section">
      <div className="container">
        <SectionHeading number={projects.length > 0 ? "04" : "03"} title="CREDENTIALS" />
        <div className="solution-credentials-grid">
          <div id="education" className="solution-education">
            <h3>Education</h3>
            {degree && <article><strong>{degree.qualification}</strong><p>{degree.school}</p><span>{degree.period}</span></article>}
            {earlierEducation.length > 0 && <details><summary>Earlier education <ChevronDown size={16} aria-hidden="true" /></summary><div className="solution-earlier-education">{earlierEducation.map((item) => <article key={item.id}><strong>{item.qualification}</strong><p>{item.school}</p><span>{item.period}</span></article>)}</div></details>}
          </div>
          {certifications.length > 0 && <div id="certifications" className="solution-certificates"><h3>Certificates <span>{String(certifications.length).padStart(2, "0")}</span></h3><CertificateGallery certifications={certifications} /></div>}
        </div>
      </div>
    </section>
  );
}
