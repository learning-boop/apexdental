import type { Metadata } from "next";
import { CalendarCheck, PhoneCall, Siren } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import BookSection from "@/components/sections/BookSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Apex Dental in west Albuquerque. Tell us what’s bothering you and we’ll call you to find a time. Same-day emergency appointments: 505-585-5157.",
  alternates: { canonical: "/book" },
};

const next = [
  { icon: CalendarCheck, title: "Send your request", body: "Tell us what’s bothering you and when suits you." },
  { icon: PhoneCall, title: "We call you back", body: "Our team calls to confirm a time and answer questions." },
  { icon: Siren, title: "In pain right now?", body: `Don’t wait for a call back—phone ${site.phone}.` },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a visit"
        title="Let’s find you a time."
        titleAccent="We’ll do the rest."
        intro="Send a quick request and our team will call you to arrange your appointment. For emergencies, please call us instead."
        actions="none"
        crumbs={[{ label: "Book a visit" }]}
      >
        <ul className="hero-rise mt-8 grid gap-3 sm:grid-cols-3" style={{ animationDelay: "240ms" }}>
          {next.map((n) => {
            const Icon = n.icon;
            return (
              <li key={n.title} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Icon className="h-5 w-5 text-[#f6c9a6]" aria-hidden="true" />
                <p className="mt-2 font-medium">{n.title}</p>
                <p className="mt-1 text-sm text-white/70">{n.body}</p>
              </li>
            );
          })}
        </ul>
      </PageHero>
      <div className="bg-warm-white">
        <BookSection showHeading={false} />
      </div>
    </>
  );
}
