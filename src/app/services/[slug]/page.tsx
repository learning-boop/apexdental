import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CircleCheck,
  Clock3,
  HeartPulse,
  Phone,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import HelpTiles from "@/components/page/HelpTiles";
import Faq from "@/components/page/Faq";
import BookingCta from "@/components/page/BookingCta";
import JsonLd from "@/components/page/JsonLd";
import EmergencyBand from "@/components/sections/EmergencyBand";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

// Unknown slugs fall through to notFound() below.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.image }],
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map((r) => getService(r)).filter((r) => r !== undefined);
  const isEmergency = s.slug === "emergency-dental-care";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.metaDescription,
          serviceType: s.name,
          areaServed: "Albuquerque, NM",
          url: `${site.url}/services/${s.slug}`,
          provider: {
            "@type": "Dentist",
            name: site.name,
            telephone: site.phone,
            url: site.url,
          },
        }}
      />

      <PageHero
        eyebrow={s.name}
        title={s.title}
        titleAccent={s.titleAccent}
        intro={s.intro}
        image={s.image}
        imageAlt={s.imageAlt}
        imagePosition={s.imagePosition}
        badge={s.badge}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.name }]}
        actions={isEmergency ? "emergency" : "default"}
      />

      {/* 1. The pain -> the concern -> the impact */}
      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading
            eyebrow="Sound familiar?"
            title="What’s going on—and why it matters."
            className="mb-10"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <StoryCard icon={HeartPulse} label="What’s happening">
              <p className="leading-relaxed text-charcoal-light">{s.pain}</p>
            </StoryCard>
            <StoryCard icon={TriangleAlert} label="Signs to look out for">
              <ul className="space-y-2.5">
                {s.signs.map((sign) => (
                  <li key={sign} className="flex gap-3 text-charcoal-light">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </StoryCard>
            <StoryCard icon={Clock3} label="If you wait">
              <p className="leading-relaxed text-charcoal-light">{s.impact}</p>
              <Link
                href={isEmergency ? site.phoneHref : "/book"}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-dark"
              >
                {isEmergency ? `Call ${site.phone}` : "Tell us what’s going on"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </StoryCard>
          </div>
        </div>
      </section>

      {/* Emergency only: first aid before you arrive */}
      {s.firstAid && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-6">
            <SectionHeading
              eyebrow="Before you get here"
              title="Dental first aid."
              intro="These steps can ease pain and protect the tooth—but they’re not a substitute for seeing us."
              className="mb-10"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {s.firstAid.map((f) => (
                <div key={f.name} className="rounded-xl border border-black/5 border-l-4 border-l-terracotta bg-warm-white p-6">
                  <h3 className="text-lg font-medium text-charcoal">{f.name}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal-light">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. The turn: how Apex helps + who it's for */}
      <section className="bg-linear-to-b from-sand to-teal-light py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:px-6">
          <div>
            <SectionHeading
              eyebrow="Here’s what changes"
              title="How Apex makes it easier."
              className="mb-8"
            />
            <HelpTiles keys={s.help} />
          </div>
          <div className="self-start rounded-2xl bg-white p-6 shadow-sm lg:mt-[4.5rem] lg:p-8">
            <h2 className="font-heading text-2xl text-charcoal">{s.goodForHeading}</h2>
            <ul className="mt-5 space-y-3">
              {s.goodFor.map((g) => (
                <li key={g} className="flex gap-3 text-charcoal-light">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            {s.notFor && (
              <div className="mt-6 rounded-lg bg-sand p-4 text-sm leading-relaxed text-charcoal-light">
                <p className="font-medium text-charcoal">Not suitable for everyone</p>
                {s.notFor.map((n) => (
                  <p key={n} className="mt-1">
                    {n}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Options and details */}
      {s.details && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-14 px-5 lg:px-6">
            {s.details.map((d) => (
              <div key={d.heading}>
                <SectionHeading title={d.heading} intro={d.intro} className="mb-8" />
                <div
                  className={`grid gap-5 sm:grid-cols-2 ${d.items.length === 3 ? "lg:grid-cols-3" : d.items.length >= 4 ? "lg:grid-cols-4" : ""}`}
                >
                  {d.items.map((item) => (
                    <div key={item.name} className="rounded-xl border border-black/5 bg-warm-white p-6">
                      <h3 className="font-heading text-xl text-teal">{item.name}</h3>
                      <p className="mt-2 leading-relaxed text-charcoal-light">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Treatment, step by step */}
      <section className={`py-14 lg:py-20 ${s.details ? "bg-teal-light" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading eyebrow="Your treatment" title="What to expect, step by step." className="mb-10" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((step, i) => (
              <li key={step.title} className="relative rounded-xl bg-white p-6 shadow-sm">
                <span className="font-heading flex h-11 w-11 items-center justify-center rounded-full bg-teal text-lg text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium text-charcoal">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal-light">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Aftercare */}
      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:gap-12 lg:px-6">
          <div>
            <SectionHeading eyebrow="Afterwards" title={s.aftercareHeading ?? "Recovery and aftercare."} className="mb-6" />
            <ul className="space-y-3">
              {s.aftercare.map((a) => (
                <li key={a} className="flex gap-3 text-charcoal-light">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          {s.callUsIf && (
            <div className="self-start rounded-2xl border border-terracotta/20 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10">
                  <ShieldAlert className="h-5 w-5 text-terracotta" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-2xl text-charcoal">Call us if</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {s.callUsIf.map((c) => (
                  <li key={c} className="flex gap-3 text-charcoal-light">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-6">
          <div>
            <SectionHeading eyebrow="Questions" title="Things patients often ask." />
            <p className="mt-4 text-charcoal-light">
              Can&apos;t see your question? Call us on{" "}
              <a href={site.phoneHref} className="font-medium text-teal hover:text-teal-dark">
                {site.phone}
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </div>
          <Faq faqs={s.faqs} />
        </div>
      </section>

      {/* 7. Related treatments */}
      <section className="bg-warm-white pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading title="Related treatments." className="mb-8" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={r.imagePosition ? { objectPosition: r.imagePosition } : undefined}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl text-charcoal">{r.name}</h3>
                  <p className="mt-2 flex-1 text-charcoal-light">{r.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {s.urgent ? (
        <div className="bg-warm-white pt-14 lg:pt-20">
          <EmergencyBand />
        </div>
      ) : null}
      <BookingCta />
    </>
  );
}

function StoryCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof HeartPulse;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm lg:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10">
          <Icon className="h-5 w-5 text-terracotta" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="font-heading text-xl text-charcoal">{label}</h3>
      </div>
      {children}
    </div>
  );
}
