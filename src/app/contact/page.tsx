import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import DentistSchema from "@/components/page/DentistSchema";
import { formatHour, fullAddress, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Contact Apex Dental at 6330 Riverside Plaza Lane NW, Suite 165, Albuquerque, NM 87120. Call 505-585-5157. Open Tuesday–Saturday, with plenty of parking behind the building.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <DentistSchema />
      <PageHero
        eyebrow="Contact us"
        title="We’re here to help,"
        titleAccent="on the west side."
        intro="Call, email or drop by Riverside Plaza. Tooth pain can be some of the worst pain there is—if you’re hurting, call us and we’ll do our best to see you the same day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-6">
          <div className="space-y-4">
            <ContactCard icon={Phone} title="Call us" action={{ label: site.phone, href: site.phoneHref }}>
              The fastest way to book or get emergency help.
            </ContactCard>
            <ContactCard icon={Mail} title="Email" action={{ label: site.email, href: `mailto:${site.email}` }}>
              For general questions. Please don’t email medical details.
            </ContactCard>
            <ContactCard
              icon={MapPin}
              title="Visit"
              action={{ label: "Get directions", href: site.mapsUrl, external: true }}
            >
              {fullAddress}
            </ContactCard>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-light">
                  <Clock className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 className="font-heading text-xl text-charcoal">Opening hours</h2>
              </div>
              <dl className="mt-4 divide-y divide-black/5">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-2 text-[15px]">
                    <dt className="text-charcoal">{h.day}</dt>
                    <dd className={h.open ? "text-charcoal-light" : "text-warm-gray"}>
                      {h.open && h.close ? `${formatHour(h.open)} – ${formatHour(h.close)}` : "Closed"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <iframe
                src={site.mapsEmbed}
                title="Map showing Apex Dental at Riverside Plaza, Albuquerque"
                className="h-[360px] w-full lg:h-[480px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <Car className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
              <p className="text-charcoal-light">
                <span className="font-medium text-charcoal">Parking:</span> we’re conveniently located on the west side
                of Albuquerque, with plenty of parking behind the building.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-terracotta/20 bg-white p-5">
              <Siren className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
              <p className="text-charcoal-light">
                <span className="font-medium text-charcoal">Dental emergency?</span> Call{" "}
                <a href={site.phoneHref} className="font-medium text-terracotta">
                  {site.phone}
                </a>{" "}
                for a same-day appointment. If swelling affects your breathing or swallowing, call 911.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-6">
          <SectionHeading
            title="Ready to book?"
            intro="Send us a request and our team will call you to find a time that suits you."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3.5 font-semibold text-white hover:bg-teal-dark"
            >
              Request an appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-charcoal/20 px-6 py-3.5 font-medium text-charcoal hover:border-teal hover:text-teal"
            >
              Find us on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
  action,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
  action: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light">
        <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h2 className="font-heading text-xl text-charcoal">{title}</h2>
        <p className="mt-1 text-charcoal-light">{children}</p>
        <a
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-2 inline-block break-all font-medium text-teal hover:text-teal-dark"
        >
          {action.label}
        </a>
      </div>
    </div>
  );
}
