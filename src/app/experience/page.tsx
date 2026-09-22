import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipToContent } from "@/components/skip-to-content";
import { ExperienceSection } from "@/components/sections/experience-section";

export const metadata: Metadata = {
  title: "Experience | Nichos Ragasa",
  description: "Nichos Ragasa's software engineering experience and upcoming systems consulting role.",
};

export default function ExperiencePage() {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="experience-page"><ExperienceSection standalone /></main>
      <SiteFooter backHref="/" />
    </>
  );
}
