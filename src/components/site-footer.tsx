import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed with purpose. Built with care.</span><a href="#top">Back to top ↑</a></div></footer>;
}
