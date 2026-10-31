import JsonLd from "./JsonLd";
import { site } from "@/content/site";

/** LocalBusiness (Dentist) structured data for the home and contact pages. */
export default function DentistSchema() {
  const open = site.hours.filter((h) => h.open && h.close);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        image: `${site.url}/images/sections/hero-poster-desktop.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: open.map((h) => h.day),
            opens: open[0]?.open,
            closes: open[0]?.close,
          },
        ],
        sameAs: [site.facebook],
        medicalSpecialty: "Dentistry",
      }}
    />
  );
}
