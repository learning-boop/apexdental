import type { Metadata } from "next";
import Image from "next/image";
import { CircleCheck, CreditCard, Phone } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import Faq from "@/components/page/Faq";
import BookingCta from "@/components/page/BookingCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Dental Insurance & Financing",
  description:
    "Apex Dental is in-network with many dental plans including Delta Dental, MetLife, Cigna, Aetna, UnitedHealthcare, TRICARE and more, plus CareCredit financing. Call to check your plan.",
  alternates: { canonical: "/new-patients/insurance-and-financing" },
};

// From the clinic's previous insurance list.
// TODO(client): confirm this list is current before launch. New Mexico Medicaid
// moved from Centennial Care to Turquoise Care in 2024.
const plans = [
  "Aetna",
  "Ameritas",
  "Assurant Dental",
  "Avesis",
  "BenefitSource",
  "Blue Cross Blue Shield of New Mexico",
  "Careington",
  "Cigna",
  "Connection Dental",
  "Delta Dental",
  "Dental Network of America",
  "DentaQuest",
  "DenteMax",
  "GEHA",
  "GEHA Connection Dental Federal",
  "Guardian",
  "Humana",
  "LHI",
  "Maverest Dental Network",
  "Medicare health plans",
  "MetLife",
  "Molina Healthcare",
  "MultiPlan",
  "New Mexico Medicaid (Centennial Care)",
  "Presbyterian Health Plan",
  "Principal Financial Group",
  "TRICARE",
  "U.S. Department of Veterans Affairs",
  "UniCare",
  "United Concordia Dental",
  "UnitedHealthcare",
];

const faqs = [
  {
    q: "My plan isn’t listed. Can I still come in?",
    a: "Yes. Plans and networks change, so call us with your insurance details and we’ll tell you how your benefits apply.",
  },
  {
    q: "What if I don’t have dental insurance?",
    a: "You’re very welcome. We’ll explain the cost of your treatment before we begin, and CareCredit financing can help spread payments.",
  },
  {
    q: "Will insurance cover clear aligners?",
    a: "If your plan includes orthodontic coverage, aligners are generally covered to the same extent as braces. Check your plan for details.",
  },
  {
    q: "Is cosmetic treatment covered?",
    a: "Purely cosmetic treatment usually isn’t, but restorative parts sometimes are. We’ll help you understand what applies before you decide.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title="Insurance and financing,"
        titleAccent="made simple."
        intro="We’re in-network with many dental plans and offer CareCredit financing, so cost doesn’t have to stand between you and the care you need."
        crumbs={[{ label: "New patients", href: "/new-patients/your-first-visit" }, { label: "Insurance & financing" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading
            eyebrow="In-network plans"
            title="Insurance we work with."
            intro="Networks change often, so please call us to confirm your plan before your visit."
            className="mb-10"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <CircleCheck className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-charcoal">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white hover:bg-teal-dark"
          >
            <Phone className="h-4 w-4" />
            Check your plan: {site.phone}
          </a>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div>
            <SectionHeading
              eyebrow="Financing"
              title="Spread the cost with CareCredit."
              intro="CareCredit is a health and wellness credit card you can use to pay for dental treatment over time, including treatment insurance doesn’t cover."
            />
            <ul className="mt-6 space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                Apply online or ask our team when you visit
              </li>
              <li className="flex gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                Useful for implants, cosmetic treatment and larger plans
              </li>
            </ul>
            <a
              href="https://www.carecredit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-medium text-teal hover:text-teal-dark"
            >
              Learn more at carecredit.com &rarr;
            </a>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-sand p-12">
            <Image
              src="/images/logos/logo-carecredit.jpg"
              alt="CareCredit"
              width={840}
              height={143}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-light py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-6">
          <SectionHeading eyebrow="Questions" title="Paying for your care." />
          <Faq faqs={faqs} />
        </div>
      </section>

      <BookingCta />
    </>
  );
}
