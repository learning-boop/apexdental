import Link from "next/link";
import Image from "next/image";
import { Award, Users, CalendarDays, Zap } from "lucide-react";

const chips = [
  "Toothache",
  "Broken tooth",
  "Missing teeth",
  "Bleeding gums",
  "Better smile",
  "My child",
  "I\u2019m nervous",
];

const trustItems = [
  { icon: Award, text: "14 years of experience" },
  { icon: Users, text: "3,500+ patients" },
  { icon: CalendarDays, text: "Open Saturdays" },
  { icon: Zap, text: "Same-day emergency appointments" },
];

export default function Hero() {
  return (
    <section className="relative bg-warm-white">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="py-12 pr-4">
              <p className="text-sm font-medium tracking-wide text-teal mb-4">
                Family &amp; Emergency Dentist &middot; West Albuquerque
              </p>
              <h1 className="font-heading text-[2.5rem] leading-[1.15] text-charcoal mb-5" style={{ textWrap: "balance" }}>
                Whatever brought you here, we can help&mdash;often the same day.
              </h1>
              <p className="text-lg leading-relaxed text-charcoal-light mb-8">
                Toothache, a broken tooth, missing teeth or a nervous child&mdash;we
                care for children and adults of every age, including patients who
                feel anxious or have medical needs.
              </p>

              <p className="text-sm font-medium text-charcoal mb-3">
                What&apos;s bothering you?
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {chips.map((chip) => (
                  <Link
                    key={chip}
                    href="/book"
                    className="px-4 py-1.5 text-sm border border-black/10 text-charcoal rounded-full hover:border-teal hover:text-teal transition-colors"
                  >
                    {chip}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link href="/book" className="px-6 py-3 bg-teal text-white font-medium rounded-md hover:bg-teal-dark transition-colors">
                  Book a Visit
                </Link>
                <a href="tel:5055855157" className="px-6 py-3 border border-charcoal text-charcoal font-medium rounded-md hover:bg-charcoal hover:text-white transition-colors">
                  Call 505-585-5157
                </a>
              </div>
            </div>

            <div className="relative py-8">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/01-hero-laptop.jpg"
                  alt="Patient smiling in a dental chair at Apex Dental"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  style={{ objectPosition: "75% 35%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/sections/02-hero-mobile.jpg"
            alt="Patient smiling in a dental chair at Apex Dental"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="px-5 py-5">
          <p className="text-xs font-medium tracking-wide text-teal mb-2">
            Family &amp; Emergency Dentist &middot; West Albuquerque
          </p>
          <h1 className="font-heading text-[1.75rem] leading-[1.15] text-charcoal mb-3" style={{ textWrap: "balance" }}>
            Whatever brought you here, we can help&mdash;often the same day.
          </h1>
          <p className="text-[15px] leading-relaxed text-charcoal-light mb-4">
            Toothache, a broken tooth, missing teeth or a nervous child&mdash;we
            care for children and adults of every age.
          </p>

          <p className="text-sm font-medium text-charcoal mb-2">
            What&apos;s bothering you?
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {chips.map((chip) => (
              <Link key={chip} href="/book" className="px-3 py-1 text-[13px] border border-black/10 text-charcoal rounded-full">
                {chip}
              </Link>
            ))}
          </div>

          <Link href="/book" className="flex justify-center py-3 bg-teal text-white font-medium rounded-md">
            Book a Visit
          </Link>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-y border-black/5 bg-sand">
        <div className="max-w-7xl mx-auto px-5 lg:px-6 py-4 lg:py-5">
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-x-10 gap-y-2 lg:gap-y-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.text} className="flex items-center gap-2 text-xs lg:text-sm font-medium text-charcoal">
                  <Icon className="w-4 h-4 text-teal flex-shrink-0" />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
