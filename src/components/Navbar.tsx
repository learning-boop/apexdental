"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const servicesMenu = [
  {
    group: "In pain or urgent",
    items: [
      { label: "Emergency Dental Care", href: "/services/emergency-dental-care" },
      { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
      { label: "Tooth Extractions & Wisdom Teeth", href: "/services/tooth-extractions" },
    ],
  },
  {
    group: "Missing teeth",
    items: [
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
      { label: "Dentures & Partials", href: "/services/dentures-and-partials" },
    ],
  },
  {
    group: "Gums",
    items: [
      { label: "Gum Disease Treatment", href: "/services/gum-disease-treatment" },
    ],
  },
  {
    group: "Better smile",
    items: [
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { label: "Clear Aligners", href: "/services/clear-aligners" },
    ],
  },
  {
    group: "Check-ups",
    items: [
      { label: "General Dentistry", href: "/services/general-dentistry" },
    ],
  },
  {
    group: "Children",
    items: [
      { label: "Children's Dentistry", href: "/services/childrens-dentistry" },
    ],
  },
  {
    group: "Nervous patients",
    items: [
      { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
    ],
  },
];

const teamMenu = [
  { label: "Our Doctors", href: "/our-team/doctors" },
  { label: "Our Staff", href: "/our-team/staff" },
];

const patientsMenu = [
  { label: "Registration Forms", href: "/new-patients/registration-forms" },
  { label: "Insurance & Financing", href: "/new-patients/insurance-and-financing" },
  { label: "Your First Visit", href: "/new-patients/your-first-visit" },
  { label: "Post-Op Instructions", href: "/new-patients/post-op-instructions" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden lg:block bg-deep-teal text-[13px] tracking-wide">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-white/70">
          <span>6330 Riverside Plaza Ln NW, Suite 165</span>
          <span aria-hidden>&middot;</span>
          <span>Open Tue&ndash;Sat 9 am&ndash;7 pm</span>
          <span aria-hidden>&middot;</span>
          <a href="tel:5055855157" className="hover:text-white transition-colors">505-585-5157</a>
        </div>
      </div>

      {/* Main bar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.svg" alt="" width={28} height={38} className="h-9 w-auto" />
              <span className="font-heading text-xl tracking-tight text-charcoal">
                Apex Dental
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              <DropdownTrigger
                label="Services"
                active={activeDropdown === "services"}
                onEnter={() => handleMouseEnter("services")}
                onLeave={handleMouseLeave}
                align="left"
              >
                <div className="bg-white rounded-xl shadow-xl border border-black/5 p-6 w-[700px]">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                    {servicesMenu.map((s) => (
                      <div key={s.group}>
                        <p className="text-[11px] font-semibold text-warm-gray uppercase tracking-widest mb-2">{s.group}</p>
                        {s.items.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-1 text-[15px] text-charcoal hover:text-teal transition-colors">{item.label}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-black/5">
                    <Link href="/book" className="text-[15px] text-teal hover:text-teal-dark transition-colors flex items-center gap-1">
                      Not sure what you need? Tell us what&apos;s bothering you
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </DropdownTrigger>

              <NavLink href="/about">About</NavLink>

              <DropdownTrigger
                label="Our Team"
                active={activeDropdown === "team"}
                onEnter={() => handleMouseEnter("team")}
                onLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-xl shadow-xl border border-black/5 p-3 w-48">
                  {teamMenu.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-2 px-3 text-[15px] text-charcoal hover:text-teal rounded-lg transition-colors">{item.label}</Link>
                  ))}
                </div>
              </DropdownTrigger>

              <DropdownTrigger
                label="New Patients"
                active={activeDropdown === "patients"}
                onEnter={() => handleMouseEnter("patients")}
                onLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-xl shadow-xl border border-black/5 p-3 w-52">
                  {patientsMenu.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-2 px-3 text-[15px] text-charcoal hover:text-teal rounded-lg transition-colors">{item.label}</Link>
                  ))}
                </div>
              </DropdownTrigger>

              <NavLink href="/offers">Offers</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:5055855157" className="text-sm text-charcoal-light hover:text-charcoal transition-colors">505-585-5157</a>
              <Link href="/services/emergency-dental-care" className="px-4 py-2 bg-terracotta text-white text-sm font-medium rounded-md hover:bg-terracotta-dark transition-colors">Emergency</Link>
              <Link href="/book" className="px-5 py-2 bg-teal text-white text-sm font-medium rounded-md hover:bg-teal-dark transition-colors">Book a Visit</Link>
            </div>

            {/* Mobile right */}
            <div className="flex lg:hidden items-center gap-2">
              <a href="tel:5055855157" className="p-2 text-charcoal" aria-label="Call us">
                <Phone className="w-5 h-5" />
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-charcoal" aria-label={mobileOpen ? "Close menu" : "Open menu"}>
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white overflow-y-auto no-scrollbar lg:hidden">
          <div className="px-5 py-5 flex flex-col min-h-full">
            <a href="tel:5055855157" className="flex items-center justify-center gap-2 w-full py-3 bg-terracotta text-white font-medium rounded-md mb-6">
              <Phone className="w-4 h-4" />
              Call 505-585-5157
            </a>

            <MobileAccordion label="Services" open={mobileAccordion === "services"} toggle={() => toggleAccordion("services")}>
              <div className="pl-1 space-y-4 pb-2">
                {servicesMenu.map((s) => (
                  <div key={s.group}>
                    <p className="text-[11px] font-semibold text-warm-gray uppercase tracking-widest mb-1">{s.group}</p>
                    {s.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-[15px] text-charcoal-light">{item.label}</Link>
                    ))}
                  </div>
                ))}
                <Link href="/book" onClick={() => setMobileOpen(false)} className="block text-[15px] text-teal pt-1">
                  Not sure? Tell us what&apos;s bothering you &rarr;
                </Link>
              </div>
            </MobileAccordion>

            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>

            <MobileAccordion label="Our Team" open={mobileAccordion === "team"} toggle={() => toggleAccordion("team")}>
              <div className="pl-1 pb-2">
                {teamMenu.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-[15px] text-charcoal-light">{item.label}</Link>
                ))}
              </div>
            </MobileAccordion>

            <MobileAccordion label="New Patients" open={mobileAccordion === "patients"} toggle={() => toggleAccordion("patients")}>
              <div className="pl-1 pb-2">
                {patientsMenu.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-[15px] text-charcoal-light">{item.label}</Link>
                ))}
              </div>
            </MobileAccordion>

            <MobileLink href="/offers" onClick={() => setMobileOpen(false)}>Offers</MobileLink>
            <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>

            <div className="mt-auto pt-8 pb-24">
              <Link href="/book" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3 bg-teal text-white font-medium rounded-md">Book a Visit</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-3 py-2 text-[15px] text-charcoal hover:text-teal transition-colors">
      {children}
    </Link>
  );
}

function DropdownTrigger({
  label, active, onEnter, onLeave, children, align = "center",
}: {
  label: string; active: boolean; onEnter: () => void; onLeave: () => void; children: React.ReactNode; align?: "center" | "left";
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1 px-3 py-2 text-[15px] text-charcoal hover:text-teal transition-colors">
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
      </button>
      {active && (
        <div className={`absolute top-full pt-3 ${align === "left" ? "left-0" : "left-1/2 -translate-x-1/2"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="block py-3.5 text-[16px] text-charcoal border-b border-black/5">
      {children}
    </Link>
  );
}

function MobileAccordion({
  label, open, toggle, children,
}: {
  label: string; open: boolean; toggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border-b border-black/5">
      <button onClick={toggle} className="flex items-center justify-between w-full py-3.5 text-[16px] text-charcoal">
        {label}
        <ChevronDown className={`w-4 h-4 opacity-40 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && children}
    </div>
  );
}
