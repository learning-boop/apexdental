import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import JsonLd from "./JsonLd";
import { site } from "@/content/site";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  badge?: string;
  crumbs: Crumb[];
  /** "emergency" puts the phone call first. "none" hides the buttons. */
  actions?: "default" | "emergency" | "none";
  children?: React.ReactNode;
};

/**
 * The top of every inner page. Same deep-teal palette and peach accent as the
 * home hero, but sized to its content rather than the full screen.
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  intro,
  image,
  imageAlt = "",
  imagePosition,
  badge,
  crumbs,
  actions = "default",
  children,
}: PageHeroProps) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <section className="relative isolate overflow-hidden bg-teal-dark text-white">
      <JsonLd data={breadcrumbLd} />
      {/* Soft glows for depth */}
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-mid/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#f6c9a6]/10 blur-3xl"
      />

      <div
        className={`mx-auto max-w-7xl px-5 py-10 lg:px-6 lg:py-16 ${
          image ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" : ""
        }`}
      >
        <div className={image ? "" : "max-w-3xl"}>
          <nav aria-label="Breadcrumb" className="hero-rise mb-5 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/90">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="hero-rise inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md lg:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#f3a27d]" aria-hidden="true" />
            {eyebrow}
          </p>

          <h1
            className="hero-rise font-heading mt-4 text-[clamp(2rem,7vw,2.6rem)] leading-[1.08] tracking-tight lg:mt-5 lg:text-[clamp(2.5rem,3.6vw,3.5rem)]"
            style={{ textWrap: "balance", animationDelay: "80ms" }}
          >
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-[#f6c9a6]">{titleAccent}</span>
              </>
            )}
          </h1>

          {intro && (
            <p
              className="hero-rise mt-4 max-w-xl text-base leading-relaxed text-white/80 lg:mt-5 lg:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              {intro}
            </p>
          )}

          {actions !== "none" && (
            <div
              className="hero-rise mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              {actions === "emergency" ? (
                <>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-terracotta px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-terracotta-dark"
                  >
                    <Phone className="h-4 w-4" />
                    Call {site.phone}
                  </a>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Request an appointment
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/book"
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-6 py-3.5 font-semibold text-teal shadow-lg shadow-black/20 transition-colors hover:bg-sand"
                  >
                    Book a Visit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </a>
                </>
              )}
            </div>
          )}

          {children}
        </div>

        {image && (
          <div className="hero-rise relative" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <Image
                src={image}
                alt={imageAlt}
                fill
                preload
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
            </div>
            {badge && (
              <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-teal-dark/80 px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-md lg:-left-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3a27d] opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f3a27d]" />
                </span>
                {badge}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
