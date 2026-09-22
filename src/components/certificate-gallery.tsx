"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { useRef, useState } from "react";
import { CertificateDialog } from "@/components/certificate-preview";
import type { Certification } from "@/types/portfolio";

export function CertificateGallery({ certifications }: { certifications: Certification[] }) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const selected = previewIndex === null ? null : certifications[previewIndex];

  return (
    <>
      <div className="certificate-gallery">
        {certifications.map((item, index) => (
          <button key={item.id} type="button" className="certificate-record" aria-label={`Preview ${item.name} certificate`} aria-haspopup="dialog" onClick={(event) => { triggerRef.current = event.currentTarget; setPreviewIndex(index); }}>
            <span className="certificate-record-copy">
              <span className="certificate-record-index">{String(index + 1).padStart(2, "0")} / {String(certifications.length).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <span className="certificate-record-issuer">{item.organization ?? item.issuer}</span>
              <span className="certificate-record-footer"><span>{item.acquiredAt}</span><span className="certificate-record-action"><Eye size={15} aria-hidden="true" /> Preview</span></span>
            </span>
            <span className="certificate-record-image"><Image src={item.asset.src} alt="" width={item.asset.width} height={item.asset.height} sizes="(max-width: 700px) calc(100vw - 36px), 260px" /></span>
          </button>
        ))}
      </div>
      {selected && previewIndex !== null && <CertificateDialog certification={selected} index={previewIndex} count={certifications.length} onClose={() => { setPreviewIndex(null); triggerRef.current?.focus(); }} />}
    </>
  );
}
