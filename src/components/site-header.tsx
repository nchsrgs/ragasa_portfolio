import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <span className="brand-name">&lt; chos /&gt;</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
