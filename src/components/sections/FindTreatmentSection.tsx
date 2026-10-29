import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    problem: "I\u2019m in pain or it\u2019s urgent",
    services: [
      { label: "Emergency Care", href: "/services/emergency-dental-care" },
      { label: "Root Canals", href: "/services/root-canal-treatment" },
      { label: "Extractions", href: "/services/tooth-extractions" },
    ],
    image: "/images/sections/14-toothache-card-all-devices.jpg",
    alt: "Woman holding her cheek with tooth pain",
  },
  {
    problem: "I\u2019m missing teeth",
    services: [
      { label: "Implants", href: "/services/dental-implants" },
      { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
      { label: "Dentures", href: "/services/dentures-and-partials" },
    ],
    image: "/images/sections/15-restored-smile-card-all-devices.jpg",
    alt: "Man smiling with a confident restored smile",
  },
  {
    problem: "My gums bleed",
    services: [
      { label: "Gum Disease Treatment", href: "/services/gum-disease-treatment" },
    ],
    image: "/images/sections/16-gum-care-card-all-devices.jpg",
    alt: "Woman looking at her toothbrush with concern",
  },
  {
    problem: "I want a better smile",
    services: [
      { label: "Whitening", href: "/services/teeth-whitening" },
      { label: "Cosmetic", href: "/services/cosmetic-dentistry" },
      { label: "Clear Aligners", href: "/services/clear-aligners" },
    ],
    image: "/images/sections/17-bright-smile-card-all-devices.jpg",
    alt: "Young woman laughing with a bright smile",
  },
  {
    problem: "I need a check-up",
    services: [
      { label: "Exams, Cleanings, Fillings & Sealants", href: "/services/general-dentistry" },
    ],
    image: "/images/sections/18-dental-checkup-card-all-devices.jpg",
    alt: "Patient viewing dental x-ray with hygienist",
  },
  {
    problem: "It\u2019s for my child",
    services: [
      { label: "Children\u2019s Dentistry", href: "/services/childrens-dentistry" },
    ],
    image: "/images/sections/19-child-smile-card-all-devices.jpg",
    alt: "Young boy giving a thumbs-up in the dental chair",
  },
  {
    problem: "I\u2019m nervous",
    services: [
      { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
    ],
    image: "/images/sections/20-relaxed-waiting-card-all-devices.jpg",
    alt: "Woman relaxing with tea in a calm waiting area",
  },
];

export default function FindTreatmentSection() {
  return (
    <section className="py-14 lg:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-12 text-center">
          Find the right treatment for your problem.
        </h2>

        {/* Desktop grid — 4 columns, 8 cards (7 treatments + 1 CTA) */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {treatments.map((t) => (
            <div key={t.problem} className="group rounded-lg overflow-hidden bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-charcoal mb-2">{t.problem}</h3>
                <div className="flex flex-wrap gap-x-1 text-sm">
                  {t.services.map((s, i) => (
                    <span key={s.href}>
                      <Link href={s.href} className="text-teal hover:text-teal-dark transition-colors">{s.label}</Link>
                      {i < t.services.length - 1 && <span className="text-charcoal-light"> &middot; </span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 8th CTA card */}
          <div className="rounded-lg bg-teal flex flex-col items-center justify-center p-6 text-center">
            <span className="text-white font-heading text-2xl mb-3">Not sure?</span>
            <p className="text-white/80 text-sm mb-5">We&apos;ll help you figure out what you need.</p>
            <Link href="/book" className="inline-block px-6 py-2.5 bg-white text-teal font-medium rounded-md hover:bg-warm-white transition-colors text-sm">
              Tell us what&apos;s bothering you &rarr;
            </Link>
          </div>
        </div>

        {/* Mobile: compact list */}
        <div className="lg:hidden space-y-3">
          {treatments.map((t) => (
            <div key={t.problem} className="flex bg-white rounded-lg overflow-hidden">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image src={t.image} alt={t.alt} fill sizes="96px" className="object-cover" />
              </div>
              <div className="p-3 flex-1 min-w-0">
                <h3 className="font-medium text-charcoal text-[15px] mb-1">{t.problem}</h3>
                <div className="flex flex-wrap gap-x-1 text-sm">
                  {t.services.map((s, i) => (
                    <span key={s.href}>
                      <Link href={s.href} className="text-teal">{s.label}</Link>
                      {i < t.services.length - 1 && <span className="text-charcoal-light"> &middot; </span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/book" className="flex items-center justify-center py-4 bg-teal text-white font-medium rounded-lg">
            Not sure? Tell us what&apos;s bothering you &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
