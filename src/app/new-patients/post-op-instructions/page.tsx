import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, Phone, ShieldAlert, Siren } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import BookingCta from "@/components/page/BookingCta";
import { getService } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Post-Op Instructions",
  description:
    "Aftercare instructions from Apex Dental for extractions, implants, root canals, fillings, crowns, dentures, deep cleaning, whitening and sedation—and when to call us.",
  alternates: { canonical: "/new-patients/post-op-instructions" },
};

// Aftercare comes straight from each treatment page, so the two never disagree.
const topics = [
  { id: "extraction", title: "After a tooth extraction or wisdom teeth", slug: "tooth-extractions" },
  { id: "implant", title: "After dental implant surgery", slug: "dental-implants" },
  { id: "root-canal", title: "After a root canal", slug: "root-canal-treatment" },
  { id: "filling", title: "After a filling", slug: "general-dentistry" },
  { id: "crown", title: "After a crown or bridge", slug: "crowns-and-bridges" },
  { id: "dentures", title: "With new dentures", slug: "dentures-and-partials" },
  { id: "deep-clean", title: "After a deep cleaning", slug: "gum-disease-treatment" },
  { id: "whitening", title: "After teeth whitening", slug: "teeth-whitening" },
  { id: "sedation", title: "After sedation", slug: "sedation-dentistry" },
];

export default function PostOpPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title="Post-op instructions."
        titleAccent="Heal well at home."
        intro="Choose your treatment for simple aftercare steps and the signs that mean you should call us."
        actions="none"
        crumbs={[{ label: "New patients", href: "/new-patients/your-first-visit" }, { label: "Post-op instructions" }]}
      >
        <div className="hero-rise mt-7 flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-sm backdrop-blur-md" style={{ animationDelay: "240ms" }}>
          <Siren className="mt-0.5 h-5 w-5 shrink-0 text-[#f6c9a6]" aria-hidden="true" />
          <p className="text-white/85">
            If you have trouble breathing or swallowing, or swelling is spreading fast, call 911 or go to the nearest
            emergency room.
          </p>
        </div>
      </PageHero>

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[260px_1fr] lg:gap-14 lg:px-6">
          <nav aria-label="Jump to a treatment" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Jump to</p>
            <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {topics.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="block rounded-full bg-white px-4 py-2 text-sm text-charcoal hover:text-teal lg:rounded-md lg:bg-transparent lg:px-3 lg:hover:bg-white"
                  >
                    {t.title.replace(/^(After|With) (a |an )?/i, "").replace(/^./, (c) => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            {topics.map((t) => {
              const s = getService(t.slug);
              if (!s) return null;
              return (
                <article key={t.id} id={t.id} className="scroll-mt-32 rounded-2xl bg-white p-6 shadow-sm lg:p-8">
                  <h2 className="font-heading text-2xl text-charcoal lg:text-3xl">{t.title}</h2>
                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="font-medium text-charcoal">{s.aftercareHeading ?? "What to do"}</h3>
                      <ul className="mt-3 space-y-2.5">
                        {s.aftercare.map((a) => (
                          <li key={a} className="flex gap-3 text-charcoal-light">
                            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {s.callUsIf && (
                      <div className="rounded-xl bg-terracotta/5 p-5">
                        <h3 className="flex items-center gap-2 font-medium text-charcoal">
                          <ShieldAlert className="h-5 w-5 text-terracotta" aria-hidden="true" />
                          Call us if
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {s.callUsIf.map((c) => (
                            <li key={c} className="flex gap-3 text-charcoal-light">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-6 inline-block text-sm font-medium text-teal hover:text-teal-dark"
                  >
                    More about {s.name.toLowerCase()} &rarr;
                  </Link>
                </article>
              );
            })}

            <div className="flex flex-col items-start gap-4 rounded-2xl bg-teal p-6 text-white sm:flex-row sm:items-center sm:justify-between lg:p-8">
              <p className="font-heading text-2xl">Not sure if something’s normal?</p>
              <a
                href={site.phoneHref}
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-teal hover:bg-sand"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
