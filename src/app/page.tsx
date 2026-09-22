import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipToContent } from "@/components/skip-to-content";
import { LegacyExperienceRedirect } from "@/components/legacy-experience-redirect";
import { OverviewSection } from "@/components/sections/overview-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <LegacyExperienceRedirect />
      <SkipToContent />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <OverviewSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
