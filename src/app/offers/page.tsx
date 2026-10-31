import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Gift, Sparkles } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import BookingCta from "@/components/page/BookingCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Current offers at Apex Dental, west Albuquerque—including a free dental implant consultation and CareCredit financing. Call 505-585-5157 to ask about new-patient offers.",
  alternates: { canonical: "/offers" },
};

// TODO(client): confirm current offers, terms and expiry dates before launch.
const offers = [
  {
    icon: Gift,
    tag: "Dental implants",
    title: "Free implant consultation",
    body: "Talk through your options for replacing missing teeth—single implants, implant bridges or implant-supported dentures—with a full plan and costs.",
    cta: "Book your consultation",
    href: "/book",
  },
  {
    icon: CreditCard,
    tag: "Financing",
    title: "Spread the cost with CareCredit",
    body: "Pay for your treatment over time with CareCredit, including care your insurance doesn’t cover.",
    cta: "How financing works",
    href: "/new-patients/insurance-and-financing",
  },
  {
    icon: Sparkles,
    tag: "New patients",
    title: "Ask about new-patient offers",
    body: "Offers change throughout the year. Call us to hear what’s available for your first visit.",
    cta: `Call ${site.phone}`,
    href: site.phoneHref,
  },
];

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Special offers"
        title="Good care that’s"
        titleAccent="easier to afford."
        intro="Offers and financing to help you get the treatment you need, without waiting."
        crumbs={[{ label: "Special offers" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <ul className="grid gap-6 lg:grid-cols-3">
            {offers.map((o) => {
              const Icon = o.icon;
              const isExternal = o.href.startsWith("tel:");
              const className =
                "group mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white transition-colors hover:bg-teal-dark";
              return (
                <li key={o.title} className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-sm">
                  <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f6c9a6]/30" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-teal-light">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{o.tag}</p>
                  <h2 className="font-heading mt-2 text-2xl text-charcoal">{o.title}</h2>
                  <p className="mt-2 flex-1 leading-relaxed text-charcoal-light">{o.body}</p>
                  {isExternal ? (
                    <a href={o.href} className={className}>
                      {o.cta}
                    </a>
                  ) : (
                    <Link href={o.href} className={className}>
                      {o.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm text-charcoal-light">
            Offers may change. Ask our team for full details.
          </p>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
