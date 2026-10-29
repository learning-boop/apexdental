import Link from "next/link";
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
    description: "Often a deep cavity or an infected nerve.",
    href: "/services/root-canal-treatment",
    linkLabel: "Root Canal",
  },
  {
    icon: Hammer,
    title: "Pain when you bite",
    description: "Can mean a cracked tooth or a lost filling.",
    href: "/services/emergency-dental-care",
    linkLabel: "Emergency Care",
  },
  {
    icon: CircleAlert,
    title: "Swollen gum or face",
    description: "A sign of infection that needs quick care.",
    href: "/services/emergency-dental-care",
    linkLabel: "Emergency Care",
  },
  {
    icon: Droplets,
    title: "Bleeding gums",
    description: "An early warning of gum disease.",
    href: "/services/gum-disease-treatment",
    linkLabel: "Gum Treatment",
  },
  {
    icon: CircleDot,
    title: "Loose or missing tooth",
    description: "Gaps let other teeth drift and bone shrink.",
    href: "/services/dental-implants",
    linkLabel: "Implants",
  },
  {
    icon: Thermometer,
    title: "Hot and cold sensitivity",
    description: "Worn enamel or a cavity reaching the inner tooth.",
    href: "/services/general-dentistry",
    linkLabel: "General Dentistry",
  },
];

export default function PainSection() {
  return (
    <section className="py-14 lg:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-4">
            It starts with what you feel.
          </h2>
          <p className="text-charcoal-light text-lg">
            Pain is your body&apos;s signal that something needs care. Here&apos;s what it often means.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-white rounded-lg p-6">
                <Icon className="w-6 h-6 text-terracotta mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-charcoal mb-1">{card.title}</h3>
                <p className="text-charcoal-light mb-3">{card.description}</p>
                <Link href={card.href} className="text-sm text-teal hover:text-teal-dark transition-colors">
                  {card.linkLabel} &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
