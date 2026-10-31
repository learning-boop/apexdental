import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import BookingCta from "@/components/page/BookingCta";
import { staff } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the patient coordinators and dental assistants at Apex Dental in west Albuquerque—the friendly team who make every visit comfortable.",
  alternates: { canonical: "/our-team/staff" },
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our staff"
        title="The friendly faces"
        titleAccent="behind every visit."
        intro="From your first phone call to the moment you leave the chair, our coordinators and assistants are here to make you feel welcome, informed and comfortable."
        crumbs={[{ label: "Our team", href: "/our-team/doctors" }, { label: "Staff" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((m) => (
              <li key={m.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-[4/5] bg-teal-light">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={m.imagePosition ? { objectPosition: m.imagePosition } : undefined}
                  />
                </div>
                <div className="flex-1 p-6">
                  <h2 className="font-heading text-2xl text-charcoal">{m.name}</h2>
                  <p className="mt-0.5 text-sm font-medium text-terracotta">{m.role}</p>
                  <p className="mt-3 leading-relaxed text-charcoal-light">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-light py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center lg:px-6">
          <p className="font-heading text-2xl text-charcoal">Want to know who’ll be treating you?</p>
          <Link
            href="/our-team/doctors"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-teal px-5 py-3 font-medium text-white transition-colors hover:bg-teal-dark"
          >
            Meet our doctors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
