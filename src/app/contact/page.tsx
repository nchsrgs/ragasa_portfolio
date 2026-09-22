import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipToContent } from "@/components/skip-to-content";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact | Nichos Ragasa",
  description: "Get in touch with Nichos Ragasa about software engineering and systems consulting.",
};

export default function ContactPage() {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="contact-page"><ContactSection standalone /></main>
      <SiteFooter backHref="/" />
    </>
  );
}
