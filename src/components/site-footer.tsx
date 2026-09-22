import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { BackToTop } from "@/components/back-to-top";
import { profile } from "@/data/portfolio";

export function SiteFooter({ backHref }: { backHref?: string }) {
  return <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span>{backHref ? <Link href={backHref} aria-label="Back to portfolio" title="Back to portfolio"><ArrowUp size={18} aria-hidden="true" /></Link> : <BackToTop />}</div></footer>;
}
