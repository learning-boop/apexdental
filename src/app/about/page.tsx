import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, Brain, HeartHandshake, Languages, Stethoscope, Users } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import HelpTiles from "@/components/page/HelpTiles";
import BookingCta from "@/components/page/BookingCta";
import { doctors } from "@/content/team";

export const metadata: Metadata = {
  title: "About Our West Albuquerque Dental Clinic",
  description:
    "Apex Dental provides team-based, comprehensive dental care for children and adults on Albuquerque’s west side—including anxious patients and those with medical needs.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "14", label: "Years of experience" },
  { value: "3,500+", label: "Patients cared for" },
  { value: "67", label: "Elderly-care facilities served in New Mexico" },
  { value: "1,500", label: "Hours of continuing education" },
];

const ages = [
  {
    icon: Baby,
    title: "Children",
    body: "Gentle first visits, sealants and help with habits like thumb-sucking.",
    href: "/services/childrens-dentistry",
  },
  {
    icon: Users,
    title: "Adults & families",
    body: "Check-ups, cleanings and repairs for the whole family under one roof.",
    href: "/services/general-dentistry",
  },
  {
    icon: HeartHandshake,
    title: "Seniors & care homes",
    body: "Dentures, implants and compassionate care—we’ve served 67 elderly-care facilities.",
    href: "/services/dentures-and-partials",
  },
  {
    icon: Brain,
    title: "Anxious patients",
    body: "Had a bad experience before? We go at your pace, with sedation options.",
    href: "/services/sedation-dentistry",
  },
  {
    icon: Stethoscope,
    title: "Medically complex",
    body: "We plan treatment around your health and refer to specialists when that’s safer.",
    href: "/book",
  },
];

const logos = [
  { name: "American Academy of Implant Dentistry", src: "/images/logos/logo-aaid.png", w: 250, h: 81 },
  { name: "American Academy of Cosmetic Dentistry", src: "/images/logos/logo-aacd.jpg", w: 640, h: 160 },
  { name: "Rutgers School of Dental Medicine", src: "/images/logos/logo-rutgers-dental.jpg", w: 370, h: 118 },
  { name: "Boston University Henry M. Goldman School of Dental Medicine", src: "/images/logos/logo-boston-university-dental.png", w: 192, h: 88 },
  { name: "CareCredit", src: "/images/logos/logo-carecredit.jpg", w: 840, h: 143 },
  { name: "ClearCorrect", src: "/images/logos/logo-clearcorrect.png", w: 2600, h: 660 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Apex Dental"
        title="Team-based care for every age,"
        titleAccent="right here on the west side."
        intro="We care for children and adults of all ages—including patients who feel anxious or have a developmental or medical condition that makes dental care more complex."
        image="/images/sections/13-accessible-clinic-all-devices.jpg"
        imageAlt="Smiling young man in a wheelchair arriving at a bright, accessible dental clinic with his mother"
        imagePosition="50% 40%"
        badge="14 years of experience"
        crumbs={[{ label: "About us" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div>
            <SectionHeading eyebrow="Our story" title="A patient-first clinic, built around you." />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-light">
              <p>
                Apex Dental has grown into a modern facility for everyday dentistry, the treatment of tooth loss,
                cosmetic dentistry and advanced restorative care—with same-day emergency appointments when you need
                them most.
              </p>
              <p>
                Our team of male and female dentists speaks multiple languages, so you and your family can feel
                understood and in trusted hands. State-of-the-art equipment and a real commitment to continuing
                education help us give you the best possible treatment.
              </p>
              <p>Your care, comfort and satisfaction are our top priorities. We look forward to meeting you.</p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4 self-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-white p-6 shadow-sm">
                <dt className="mt-2 text-sm text-charcoal-light">{s.label}</dt>
                <dd className="font-heading text-4xl text-teal">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-teal-light py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Our mission</p>
          <blockquote
            className="font-heading mt-4 text-2xl leading-snug text-charcoal lg:text-[2.25rem]"
            style={{ textWrap: "balance" }}
          >
            “To provide the most up-to-date general, orthodontic and family dentistry—and a world-class facility for
            the treatment of tooth loss, cosmetic and advanced restorative dentistry.”
          </blockquote>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading eyebrow="Why patients choose us" title="Help that’s easy to reach." className="mb-10" />
          <div className="grid gap-4 lg:grid-cols-2">
            <HelpTiles keys={["same-day", "saturday", "family", "sedation"]} />
            <HelpTiles keys={["technology", "insurance", "experience", "location"]} />
          </div>
          <p className="mt-6 flex items-center gap-2 text-charcoal-light">
            <Languages className="h-5 w-5 text-teal" aria-hidden="true" />
            Male and female dentists who speak multiple languages.
          </p>
        </div>
      </section>

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading eyebrow="Care that fits you" title="Whoever you are, you’re welcome here." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ages.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  href={a.href}
                  className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-light">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-medium text-charcoal">{a.title}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-charcoal-light">{a.body}</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-teal transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div>
            <SectionHeading
              eyebrow="Our dentists"
              title="Experienced hands you can trust."
              intro="Our dentists trained in India, Scotland and the United States, with advanced study in implants, prosthodontics and cosmetic smile design."
            />
            <ul className="mt-6 space-y-3">
              {doctors.map((d) => (
                <li key={d.slug} className="rounded-xl border border-black/5 bg-warm-white p-5">
                  <p className="font-heading text-xl text-charcoal">
                    {d.name}, <span className="text-base text-charcoal-light">{d.credentials}</span>
                  </p>
                  <p className="mt-1 text-sm text-charcoal-light">{d.summary}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/our-team/doctors"
              className="mt-6 inline-flex items-center gap-2 font-medium text-teal hover:text-teal-dark"
            >
              Meet our doctors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <p className="mb-5 text-sm font-medium text-charcoal-light">Training, memberships and partners</p>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {logos.map((l) => (
                <li key={l.name} className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-4">
                  <Image
                    src={l.src}
                    alt={l.name}
                    width={l.w}
                    height={l.h}
                    className="max-h-12 w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
