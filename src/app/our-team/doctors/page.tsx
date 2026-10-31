import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, GraduationCap, HeartHandshake } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import BookingCta from "@/components/page/BookingCta";
import JsonLd from "@/components/page/JsonLd";
import { doctors } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Dentists in West Albuquerque",
  description:
    "Meet Dr. Sunil Kumar Reddy, DMD and Dr. Suneel Namburi, DMD—experienced general, implant, cosmetic and restorative dentists at Apex Dental, Albuquerque.",
  alternates: { canonical: "/our-team/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      {doctors.map((d) => (
        <JsonLd
          key={d.slug}
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: d.name,
            honorificSuffix: d.credentials,
            jobTitle: d.role,
            worksFor: { "@type": "Dentist", name: site.name, url: site.url },
          }}
        />
      ))}

      <PageHero
        eyebrow="Our doctors"
        title="Experienced hands"
        titleAccent="you can trust."
        intro="All of our staff are licensed professionals. Our dentists bring advanced training in implants, prosthodontics and cosmetic dentistry—and a gentle, unhurried approach."
        crumbs={[{ label: "Our team", href: "/our-team/doctors" }, { label: "Doctors" }]}
      />

      {doctors.map((d, i) => (
        <section
          key={d.slug}
          id={d.slug}
          className={`scroll-mt-32 py-14 lg:py-20 ${i % 2 === 0 ? "bg-sand" : "bg-white"}`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-6">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-teal shadow-lg">
                {d.image ? (
                  <Image
                    src={d.image}
                    alt={`${d.name}, ${d.credentials}`}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    style={d.imagePosition ? { objectPosition: d.imagePosition } : undefined}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-white">
                    <span className="font-heading text-7xl text-[#f6c9a6]">
                      {d.name
                        .replace("Dr. ", "")
                        .split(" ")
                        .filter((_, idx, arr) => idx === 0 || idx === arr.length - 1)
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="text-sm text-white/70">Photo coming soon</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{d.role}</p>
              <h2 className="font-heading mt-2 text-3xl text-charcoal lg:text-[2.75rem]">{d.name}</h2>
              <p className="mt-1 text-lg text-charcoal-light">{d.credentials}</p>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-light">
                {d.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <InfoList icon={GraduationCap} title="Education" items={d.education} className="md:col-span-2" />
                <InfoList icon={Award} title="Advanced training" items={d.training} />
                <InfoList icon={HeartHandshake} title="Memberships" items={d.memberships} />
              </div>

              <p className="mt-6 italic text-charcoal-light">{d.personal}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-teal-light py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center lg:px-6">
          <p className="font-heading text-2xl text-charcoal">Meet the friendly faces at the front desk and chairside.</p>
          <Link
            href="/our-team/staff"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white transition-colors hover:bg-teal-dark"
          >
            Meet our staff
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

function InfoList({
  icon: Icon,
  title,
  items,
  className = "",
}: {
  icon: typeof Award;
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-light">
          <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="font-heading text-xl text-charcoal">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[15px] text-charcoal-light">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
