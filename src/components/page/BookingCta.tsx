import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

/** Closing call to action used at the bottom of inner pages. */
export default function BookingCta({
  title = "Ready when you are.",
  text = "Tell us what’s going on and our team will find you a time—often the same week, and the same day for emergencies.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-warm-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="relative isolate overflow-hidden rounded-2xl bg-teal px-6 py-10 text-white lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#f6c9a6]/15 blur-3xl"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-heading text-3xl lg:text-[2.5rem]" style={{ textWrap: "balance" }}>
                {title}
              </h2>
              <p className="mt-3 max-w-xl text-white/80 lg:text-lg">{text}</p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-white/75 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#f6c9a6]" aria-hidden="true" />
                  Tue&ndash;Sat, 9 am&ndash;7 pm
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#f6c9a6]" aria-hidden="true" />
                  Riverside Plaza, west Albuquerque
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-teal transition-colors hover:bg-sand"
              >
                Book a Visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-medium transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
