import Link from "next/link";
import Image from "next/image";
import {
  HeartPulse,
  Hammer,
  CircleAlert,
  Droplets,
  CircleDot,
  Thermometer,
} from "lucide-react";

const cards = [
  {
    icon: HeartPulse,
    title: "Throbbing toothache",
    image: "/images/sections/21-pain-throbbing-toothache.jpg",
    alt: "Woman holding her cheek at night with a throbbing toothache",
    description: "Often a deep cavity or an infected nerve.",
    href: "/services/root-canal-treatment",
    linkLabel: "Root Canal",
  },
  {
    icon: Hammer,
    title: "Pain when you bite",
    image: "/images/sections/22-pain-bite.jpg",
    alt: "Man wincing after biting into an apple",
    description: "Can mean a cracked tooth or a lost filling.",
    href: "/services/emergency-dental-care",
    linkLabel: "Emergency Care",
  },
  {
    icon: CircleAlert,
    title: "Swollen gum or face",
    image: "/images/sections/23-pain-swollen-face.jpg",
    alt: "Woman checking a swollen cheek in the mirror",
    description: "A sign of infection that needs quick care.",
    href: "/services/emergency-dental-care",
    linkLabel: "Emergency Care",
  },
  {
    icon: Droplets,
    title: "Bleeding gums",
    image: "/images/sections/24-pain-bleeding-gums.jpg",
    alt: "Man pausing while flossing because his gums feel tender",
    description: "An early warning of gum disease.",
    href: "/services/gum-disease-treatment",
    linkLabel: "Gum Treatment",
  },
  {
    icon: CircleDot,
    title: "Loose or missing tooth",
    image: "/images/sections/25-pain-loose-tooth.jpg",
    alt: "Man checking a loose tooth with a hand mirror",
    description: "Gaps let other teeth drift and bone shrink.",
    href: "/services/dental-implants",
    linkLabel: "Implants",
  },
  {
    icon: Thermometer,
    title: "Hot and cold sensitivity",
    image: "/images/sections/26-pain-sensitivity.jpg",
    alt: "Woman wincing after a sip of iced coffee",
    description: "Worn enamel or a cavity reaching the inner tooth.",
    href: "/services/general-dentistry",
    linkLabel: "General Dentistry",
  },
];

export default function PainSection() {
  return (
    <section className="py-14 lg:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="max-w-xl mx-auto text-center mb-10 lg:mb-12">
          <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-4">
            It starts with what you feel.
          </h2>
          <p className="text-charcoal-light text-lg">
            Pain is your body&apos;s signal that something needs care. Here&apos;s what it often means.
          </p>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group flex w-[82%] shrink-0 snap-start flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow sm:w-auto"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 82vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative flex flex-1 flex-col px-6 pb-6 pt-8">
                  <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="w-6 h-6 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-medium text-charcoal mb-1">{card.title}</h3>
                  <p className="text-charcoal-light mb-4">{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-auto text-sm font-medium text-teal hover:text-teal-dark transition-colors"
                  >
                    {card.linkLabel} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
