import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, FileText, ShieldCheck, Wind } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import Faq from "@/components/page/Faq";
import BookingCta from "@/components/page/BookingCta";

export const metadata: Metadata = {
  title: "Your First Visit",
  description:
    "New to Apex Dental? Here’s what to bring and what happens at your first visit—an unhurried exam, x-rays, and a clear plan with prices before any treatment.",
  alternates: { canonical: "/new-patients/your-first-visit" },
};

const bring = [
  "Photo ID",
  "Your dental insurance card, if you have one",
  "A list of any medicines you take",
  "Details of medical conditions or allergies",
  "Your completed new-patient forms, if you have them",
  "Recent dental x-rays from another dentist, if available",
];

const steps = [
  { title: "Welcome and check-in", body: "We’ll go through your forms, insurance and any worries you have." },
  {
    title: "A careful, painless exam",
    body: "We check your teeth, gums and bite, and take x-rays when they’re needed.",
  },
  {
    title: "Your plan, explained",
    body: "We talk you through what we found and give you a full treatment plan and prices before we begin.",
  },
  {
    title: "Treatment or next visit",
    body: "Depending on what you need, we may start the same day or book your next appointment.",
  },
];

const faqs = [
  {
    q: "Do you see children and adults?",
    a: "Yes. We care for patients of every age, from a child’s first visit to grandparents with dentures or implants.",
  },
  {
    q: "What if I’m in pain now?",
    a: "Call us on 505-585-5157. We keep time for emergencies and do our best to see you the same day.",
  },
  {
    q: "I haven’t been to a dentist in years. Will I be judged?",
    a: "Never. Many of our patients come to us after a long break. We’ll start gently and focus on getting you comfortable.",
  },
  {
    q: "Can I be sedated if I’m very nervous?",
    a: "Yes—we offer laughing gas and oral sedation for anxious patients. Mention it when you book so we can plan ahead.",
  },
];

export default function FirstVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title="Your first visit,"
        titleAccent="made easy."
        intro="No rush and no surprises. Here’s what to bring and what to expect, so you can walk in feeling ready."
        image="/images/sections/20-relaxed-waiting-card-all-devices.jpg"
        imageAlt="Woman relaxing with a cup of tea in a calm dental waiting area"
        badge="New patients welcome"
        crumbs={[{ label: "New patients", href: "/new-patients/your-first-visit" }, { label: "Your first visit" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-6">
          <div>
            <SectionHeading eyebrow="Before you come" title="What to bring." />
            <ul className="mt-6 space-y-3">
              {bring.map((b) => (
                <li key={b} className="flex gap-3 text-charcoal-light">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 self-start">
            <LinkCard
              icon={FileText}
              title="Save time with your forms"
              body="Get your new-patient paperwork before the day."
              href="/new-patients/registration-forms"
            />
            <LinkCard
              icon={ShieldCheck}
              title="Insurance and financing"
              body="See the plans we work with and how CareCredit can help."
              href="/new-patients/insurance-and-financing"
            />
            <LinkCard
              icon={Wind}
              title="Feeling nervous?"
              body="Ask about laughing gas or oral sedation when you book."
              href="/services/sedation-dentistry"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading eyebrow="On the day" title="What happens when you visit." className="mb-10" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl bg-warm-white p-6 ring-1 ring-black/5">
                <span className="font-heading flex h-11 w-11 items-center justify-center rounded-full bg-teal text-lg text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-medium text-charcoal">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal-light">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-teal-light py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-6">
          <SectionHeading eyebrow="Questions" title="New patient questions." />
          <Faq faqs={faqs} />
        </div>
      </section>

      <BookingCta />
    </>
  );
}

function LinkCard({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof FileText;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link href={href} className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-light">
        <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="flex-1">
        <span className="block font-medium text-charcoal">{title}</span>
        <span className="mt-0.5 block text-sm text-charcoal-light">{body}</span>
      </span>
      <ArrowRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
