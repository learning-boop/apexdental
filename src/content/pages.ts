import { services } from "./services";

// Every page on the site, grouped. Used by the HTML sitemap page and sitemap.xml.
export const pageGroups: { title: string; pages: { label: string; href: string }[] }[] = [
  {
    title: "Main",
    pages: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Special offers", href: "/offers" },
      { label: "Contact", href: "/contact" },
      { label: "Book a visit", href: "/book" },
    ],
  },
  {
    title: "Services",
    pages: [
      { label: "All services", href: "/services" },
      ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    ],
  },
  {
    title: "Our team",
    pages: [
      { label: "Our doctors", href: "/our-team/doctors" },
      { label: "Our staff", href: "/our-team/staff" },
    ],
  },
  {
    title: "New patients",
    pages: [
      { label: "Your first visit", href: "/new-patients/your-first-visit" },
      { label: "Registration forms", href: "/new-patients/registration-forms" },
      { label: "Insurance & financing", href: "/new-patients/insurance-and-financing" },
      { label: "Post-op instructions", href: "/new-patients/post-op-instructions" },
    ],
  },
  {
    title: "Legal",
    pages: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Notice of privacy practices", href: "/notice-of-privacy-practices" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
