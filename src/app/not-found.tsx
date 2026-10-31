import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-dark text-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#f6c9a6]/10 blur-3xl"
      />
      <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-28">
        <p className="font-heading text-7xl text-[#f6c9a6]">404</p>
        <h1 className="font-heading mt-4 text-3xl lg:text-5xl">We couldn’t find that page.</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/80 lg:text-lg">
          It may have moved when we updated our website. Try one of these instead—or call us and we’ll help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-teal hover:bg-sand"
          >
            Go to the homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3.5 font-medium hover:bg-white/10"
          >
            See our services
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-medium hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
