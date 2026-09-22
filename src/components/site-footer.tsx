import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top" aria-label="Back to top" title="Back to top"><ArrowUp size={18} aria-hidden="true" /></a></div></footer>;
}
