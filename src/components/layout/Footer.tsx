import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { services } from "@/data/services";

/**
 * FOOTER
 * Rich 4-column footer with contact info, links, departments, and social icons
 * Navy background with white/muted text — premium feel
 */

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                Sanwariya <span className="text-accent">Paras</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {HOSPITAL.fullName} is a trusted healthcare center in Chittorgarh, Rajasthan, offering 24×7 emergency, ICU, and advanced cardiac care services.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={HOSPITAL.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href={HOSPITAL.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a
                href={HOSPITAL.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/services" },
                { name: "Our Doctors", href: "/team" },
                { name: "Blog", href: "/blog" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5">Departments</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-white/60 text-sm">{HOSPITAL.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${HOSPITAL.phone.primary}`} className="text-white/60 hover:text-accent transition-colors block">
                    {HOSPITAL.phone.primary}
                  </a>
                  <a href={`tel:${HOSPITAL.phone.secondary}`} className="text-white/60 hover:text-accent transition-colors block">
                    {HOSPITAL.phone.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-1 shrink-0" />
                <a href={`mailto:${HOSPITAL.email}`} className="text-white/60 hover:text-accent text-sm transition-colors">
                  {HOSPITAL.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-1 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>Mon–Sat: {HOSPITAL.opdHours.morning}</p>
                  <p>Evening: {HOSPITAL.opdHours.evening}</p>
                  <p className="text-cta">{HOSPITAL.opdHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {HOSPITAL.fullName}. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Made with ❤️ for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
