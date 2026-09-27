import { ArrowLeft, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactMethod } from "@/components/contact-method";
import { profile, socialLinks } from "@/data/portfolio";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-inner">
        <div>
          {standalone && <Link className="experience-return" href="/"><ArrowLeft size={16} aria-hidden="true" />Back to portfolio</Link>}
          <span className="contact-eyebrow">LET&apos;S CONNECT</span>
          {standalone ? <h1>Let&apos;s talk through<br /><em>the problem.</em></h1> : <h2>Let&apos;s talk through<br /><em>the problem.</em></h2>}
          <p>For development roles, systems implementation, or a conversation about a technical challenge, I would be glad to connect.</p>
          <div className="contact-methods">
            <ContactMethod href={`mailto:${profile.email}?subject=Portfolio%20inquiry`} label={profile.email} copyValue={profile.email} icon={<Mail size={17} aria-hidden="true" />} />
            <ContactMethod href={profile.phoneHref} label={profile.phone} copyValue={profile.phone} icon={<Phone size={17} aria-hidden="true" />} />
            <div className="contact-address"><MapPin size={17} aria-hidden="true" />{profile.address}</div>
          </div>
        </div>
        <div className="contact-side">
          <span>ELSEWHERE</span>
          {socialLinks.filter((link) => link.kind !== "email").map((link) => <a key={link.kind} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={18} /></a>)}
          <a href={profile.resumeUrl} download>Resume <Download size={17} /></a>
        </div>
      </div>
    </section>
  );
}
