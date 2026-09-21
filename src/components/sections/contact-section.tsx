import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-inner">
        <div>
          <span className="contact-eyebrow">LET&apos;S CONNECT</span>
          <h2>Have something<br /><em>in mind?</em></h2>
          <p>Whether it is a role, a collaboration, or a conversation about technology, I would be glad to hear from you.</p>
          <div className="contact-methods">
            <a className="contact-email" href={`mailto:${profile.email}`} aria-label={`Contact Nichos by email at ${profile.email}`}><Mail size={18} aria-hidden="true" />Contact Nichos</a>
            <a className="contact-phone" href={profile.phoneHref}><Phone size={17} />{profile.phone}</a>
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
