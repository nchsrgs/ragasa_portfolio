import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { education, profile, socialLinks } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} is a software engineer focused on backend development, REST APIs, and thoughtful technical solutions.`,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.name} is a software engineer focused on backend development, REST APIs, and thoughtful technical solutions.`,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.school })),
    sameAs: socialLinks.filter((link) => link.kind !== "email").map((link) => link.href),
  }).replace(/</g, "\\u003c");

  return (
    <html lang="en" suppressHydrationWarning>
      <body><ThemeProvider>{children}</ThemeProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchema }} /></body>
    </html>
  );
}
