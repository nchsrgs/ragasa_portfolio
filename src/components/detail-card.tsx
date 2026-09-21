"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type DetailCardProps = {
  id: string;
  kind: "project" | "certification";
  title: string;
  eyebrow: string;
  actionLabel?: string;
  children: ReactNode;
  details: ReactNode;
};

export function DetailCard({ id, kind, title, eyebrow, actionLabel = "View details", children, details }: DetailCardProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogId = `${id}-dialog`;

  useEffect(() => {
    if (open && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      closeRef.current?.focus();
    }
  }, [open]);

  return (
    <article className={`detail-card detail-card--${kind}`}>
      <span className="detail-card-eyebrow">{eyebrow}</span>
      <h3 className="detail-card-title">
        <button
          ref={triggerRef}
          className="detail-card-trigger"
          type="button"
          aria-haspopup="dialog"
          aria-controls={dialogId}
          aria-label={`${actionLabel} for ${title}`}
          onClick={() => setOpen(true)}
        >{title}</button>
      </h3>
      <div className="detail-card-summary">{children}</div>
      <span className="detail-card-action" aria-hidden="true">{actionLabel}<ArrowUpRight size={17} /></span>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className={`detail-dialog detail-dialog--${kind}`}
        aria-labelledby={`${dialogId}-title`}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
      >
        <div className="detail-dialog-frame">
          <header className="detail-dialog-header">
            <div>
              <span className="detail-dialog-eyebrow">{eyebrow}</span>
              <h2 id={`${dialogId}-title`}>{title}</h2>
            </div>
            <button ref={closeRef} className="icon-button detail-dialog-close" type="button" aria-label={`Close ${title} details`} onClick={() => dialogRef.current?.close()}><X size={21} /></button>
          </header>
          <div className="detail-dialog-body">{open && details}</div>
        </div>
      </dialog>
    </article>
  );
}
