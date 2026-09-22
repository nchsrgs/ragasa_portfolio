import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { education, profile, socialLinks } from "@/data/portfolio";
import "./globals.css";
import "./overview.css";
import "./solutions.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} develops backend and data-driven software and is preparing for a System Consultant role at 128 Tech Consulting, Inc.`,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.name} develops backend and data-driven software and is preparing for a System Consultant role at 128 Tech Consulting, Inc.`,
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body><ThemeProvider>{children}</ThemeProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchema }} /></body>
    </html>
  );
}
