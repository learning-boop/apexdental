import Link from "next/link";
import Image from "next/image";

const servicesLinks = [
  { label: "Emergency Dental Care", href: "/services/emergency-dental-care" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Root Canals", href: "/services/root-canal-treatment" },
  { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
  { label: "Dentures", href: "/services/dentures-and-partials" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Clear Aligners", href: "/services/clear-aligners" },
  { label: "Children\u2019s Dentistry", href: "/services/childrens-dentistry" },
  { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
  { label: "All Services \u2192", href: "/services" },
];

const patientsLinks = [
  { label: "Book a Visit", href: "/book" },
  { label: "New Patient Forms", href: "/new-patients/registration-forms" },
  { label: "Insurance & Financing", href: "/new-patients/insurance-and-financing" },
  { label: "Your First Visit", href: "/new-patients/your-first-visit" },
  { label: "Post-Op Instructions", href: "/new-patients/post-op-instructions" },
  { label: "Special Offers", href: "/offers" },
  { label: "Our Doctors", href: "/our-team/doctors" },
  { label: "Our Staff", href: "/our-team/staff" },
  { label: "About Us", href: "/about" },
];

const hours = [
  { day: "Mon", time: "Closed" },
  { day: "Tue\u2013Sat", time: "9 am\u20137 pm" },
  { day: "Sun", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-teal text-white pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image src="/images/logo.svg" alt="" width={22} height={30} className="h-7 w-auto brightness-200" />
              <span className="font-heading text-lg text-white">Apex Dental</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Family, children&apos;s and emergency dentistry on Albuquerque&apos;s west side.
            </p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Patients */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Patients</h3>
            <ul className="space-y-2">
              {patientsLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Visit Us</h3>
            <address className="not-italic text-sm text-white/60 space-y-3">
              <p>6330 Riverside Plaza Lane NW, Suite 165,<br />Albuquerque, NM 87120</p>
              <p><a href="tel:5055855157" className="hover:text-white transition-colors">505-585-5157</a></p>
              <p><a href="mailto:apexdentalnm@gmail.com" className="hover:text-white transition-colors">apexdentalnm@gmail.com</a></p>
            </address>
            <div className="mt-4 space-y-0.5 text-sm text-white/60">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between max-w-[160px]">
                  <span>{h.day}</span><span>{h.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/80">Plenty of parking behind the building</p>
            <a href="https://maps.google.com/?q=6330+Riverside+Plaza+Ln+NW+Suite+165+Albuquerque+NM+87120" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-teal-light hover:text-white transition-colors">
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2026 Apex Dental NM</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/notice-of-privacy-practices" className="hover:text-white transition-colors">Notice of Privacy Practices</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
