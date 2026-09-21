import { DetailCard } from "@/components/detail-card";
import { CertificationDetails } from "@/components/detail-content";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section section-certifications">
      <div className="container">
        <SectionHeading number="06" title="Certifications" />
        <div className="detail-card-grid detail-card-grid--certifications">
          {certifications.map((certification, index) => (
            <DetailCard
              key={certification.id}
              id={`certification-${certification.id}`}
              kind="certification"
              title={certification.name}
              eyebrow={`Certificate / ${String(index + 1).padStart(2, "0")}`}
              actionLabel="View certificate"
              details={<CertificationDetails certification={certification} />}
            >
              <p className="detail-card-date">{certification.acquiredAt}</p>
            </DetailCard>
          ))}
        </div>
      </div>
    </section>
  );
}
