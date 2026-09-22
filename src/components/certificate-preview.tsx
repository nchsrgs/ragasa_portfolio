"use client";

import Image from "next/image";
import { Eye, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Certification } from "@/types/portfolio";

export function CertificateDialog({ certification, index, count, onClose }: {
  certification: Certification;
  index: number;
  count: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      closeRef.current?.focus();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className="detail-dialog certificate-preview-dialog" aria-labelledby="certificate-preview-title" onClose={onClose}>
      <div className="detail-dialog-frame">
        <header className="detail-dialog-header">
          <div>
            <span className="detail-dialog-eyebrow">Certificate / {String(index + 1).padStart(2, "0")}</span>
            <h2 id="certificate-preview-title">{certification.name}</h2>
            <p className="certificate-preview-organization">{certification.organization ?? certification.issuer} · {certification.acquiredAt}</p>
          </div>
          <button ref={closeRef} className="icon-button detail-dialog-close" type="button" aria-label="Close certificate preview" onClick={() => dialogRef.current?.close()}><X size={21} /></button>
        </header>
        <div className="certificate-preview-body">
          <Image src={certification.asset.src} alt={certification.asset.alt} width={certification.asset.width} height={certification.asset.height} sizes="(max-width: 700px) 100vw, 960px" />
        </div>
        <footer className="certificate-preview-footer">
          <p>{certification.note ?? "Course completion award"}</p>
          <span>{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
        </footer>
      </div>
    </dialog>
  );
}

export function CertificatePreview({ certifications }: { certifications: Certification[] }) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const active = previewIndex === null ? null : certifications[previewIndex];

  return (
    <section className="overview-resume-group" aria-labelledby="overview-certifications-heading">
      <h2 id="overview-certifications-heading">Certifications <span>{String(certifications.length).padStart(2, "0")}</span></h2>
      <div className="overview-resume-list">
        {certifications.map((item, index) => (
          <button
            className="overview-certificate"
            key={item.id}
            type="button"
            aria-haspopup="dialog"
            aria-label={`Preview ${item.name} certificate`}
            onClick={(event) => { triggerRef.current = event.currentTarget; setPreviewIndex(index); }}
          >
            <strong>{item.name}</strong>
            <span>{item.organization ?? item.issuer}</span>
            <Eye size={16} aria-hidden="true" />
          </button>
        ))}
      </div>
      {active && previewIndex !== null && <CertificateDialog certification={active} index={previewIndex} count={certifications.length} onClose={() => { setPreviewIndex(null); triggerRef.current?.focus(); }} />}
    </section>
  );
}
