"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "children",
    label: "Children",
    bullets: [
      "Gentle first visits that build confidence",
      "Help with habits like thumb-sucking",
      "Sealants that protect growing teeth",
    ],
    link: { href: "/services/childrens-dentistry", text: "Learn more about children\u2019s dentistry" },
    image: "/images/sections/09-child-dental-care-all-devices.jpg",
    alt: "Happy child in a dental chair holding her mother\u2019s hand",
  },
  {
    id: "adults",
    label: "Adults & families",
    bullets: [
      "Check-ups, cleanings and repairs under one roof",
      "Cosmetic options to improve your smile",
      "Flexible scheduling including Saturdays",
    ],
    link: { href: "/services/general-dentistry", text: "Learn more about general dentistry" },
    image: "/images/sections/10-family-check-in-all-devices.jpg",
    alt: "Father and son checking in at the dental clinic reception",
  },
  {
    id: "seniors",
    label: "Seniors & care homes",
    bullets: [
      "Dentures, implants and compassionate care",
      "67 elderly-care facilities served across New Mexico",
      "We work with caregivers and family members",
    ],
    link: { href: "/services/dentures-and-partials", text: "Learn more about dentures & implants" },
    image: "/images/sections/11-senior-smile-all-devices.jpg",
    alt: "Senior woman smiling at her reflection after dental work",
  },
  {
    id: "anxious",
    label: "Anxious patients",
    bullets: [
      "We go at your pace, no rushing",
      "Sedation options: laughing gas or mild sedative",
      "A calm, judgement-free environment",
    ],
    link: { href: "/services/sedation-dentistry", text: "Learn more about sedation dentistry" },
    image: "/images/sections/12-calm-dental-visit-all-devices.jpg",
    alt: "Patient reclining calmly with headphones during a dental visit",
  },
  {
    id: "complex",
    label: "Medically complex",
    bullets: [
      "Treatment planned around your health needs",
      "Coordination with your physician when needed",
      "Referral to specialists when that\u2019s safer",
    ],
    link: { href: "/about", text: "Learn more about our approach" },
    image: "/images/sections/13-accessible-clinic-all-devices.jpg",
    alt: "Patient in a wheelchair being welcomed at an accessible clinic entrance",
  },
];

export default function PersonalSection() {
  const [activeTab, setActiveTab] = useState("children");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-14 lg:py-28 bg-teal-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-10 text-center">
          Care that fits who you are.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeTab === tab.id
                  ? "bg-teal text-white"
                  : "border border-black/10 text-charcoal hover:border-teal hover:text-teal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full">
            <Image
              src={current.image}
              alt={current.alt}
              width={1086}
              height={1448}
              className="rounded-lg object-cover w-full max-h-[400px] lg:max-h-none"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-charcoal mb-4">{current.label}</h3>
            <ul className="space-y-2 mb-6">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-baseline gap-3 text-charcoal-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                  {b}
                </li>
              ))}
            </ul>
            <Link href={current.link.href} className="text-teal hover:text-teal-dark transition-colors">
              {current.link.text} &rarr;
            </Link>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mt-12">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm text-charcoal-light border border-black/5">
            <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" /></svg>
            Male and female dentists who speak multiple languages
          </span>
        </div>
      </div>
    </section>
  );
}
