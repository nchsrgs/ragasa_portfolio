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
  title: `${profile.name} | Software Engineer`,
  description: `${profile.name} is a software engineer working across frontend, backend, data, testing, and delivery.`,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} | Software Engineer`,
    description: `${profile.name} is a software engineer working across frontend, backend, data, testing, and delivery.`,
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
