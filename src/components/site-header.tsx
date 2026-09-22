import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${profile.name}, home`}>
          <span className="brand-name">&lt; chos /&gt;</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
