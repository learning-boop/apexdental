import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import BookingCta from "@/components/page/BookingCta";
import EmergencyBand from "@/components/sections/EmergencyBand";
import { getService, serviceGroups, services } from "@/content/services";

export const metadata: Metadata = {
  title: "Dental Services in West Albuquerque",
  description:
    "Emergency care, implants, crowns, dentures, gum treatment, whitening, clear aligners, children’s and sedation dentistry at Apex Dental, west Albuquerque. Find the right treatment for your problem.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const az = [...services].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Start with what’s bothering you."
        titleAccent="We’ll take it from there."
        intro="From a sudden toothache to a brand-new smile, our team treats children and adults of every age under one roof. Pick your problem below to see how we can help."
        image="/images/sections/10-family-check-in-all-devices.jpg"
        imageAlt="Father and teenage son checking in at a bright dental reception"
        imagePosition="50% 35%"
        badge="13 treatments under one roof"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading
            eyebrow="Find your treatment"
            title="Choose the problem that sounds like you."
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceGroups.map((g) => (
              <article
                key={g.id}
                id={g.id}
                className="flex scroll-mt-32 flex-col overflow-hidden rounded-2xl bg-white shadow-sm sm:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-auto sm:w-2/5">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h2 className="font-heading text-2xl text-charcoal">{g.label}</h2>
                  <ul className="mt-4 divide-y divide-black/5">
                    {g.slugs.map((slug) => {
                      const s = getService(slug);
                      if (!s) return null;
                      return (
                        <li key={slug}>
                          <Link href={`/services/${slug}`} className="group flex items-start justify-between gap-4 py-3">
                            <span>
                              <span className="block font-medium text-teal group-hover:text-teal-dark">{s.name}</span>
                              <span className="mt-0.5 block text-sm text-charcoal-light">{s.summary}</span>
                            </span>
                            <ArrowRight
                              className="mt-1 h-4 w-4 shrink-0 text-teal transition-transform group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-teal p-8 text-white">
              <h2 className="font-heading text-2xl">Not sure what you need?</h2>
              <p className="mt-2 text-white/80">
                Tell us what’s bothering you and we’ll point you in the right direction—no pressure.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-teal transition-colors hover:bg-sand"
              >
                Tell us what’s bothering you
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading title="All treatments, A to Z." className="mb-8" />
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {az.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between border-b border-black/5 py-3.5 text-charcoal hover:text-teal"
                >
                  {s.name}
                  <ArrowRight className="h-4 w-4 text-teal opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EmergencyBand />
      <BookingCta />
    </>
  );
}
