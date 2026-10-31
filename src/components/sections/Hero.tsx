import Link from "next/link";
import { getImageProps } from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowRight, Phone } from "lucide-react";
import HeroVideo from "./HeroVideo";

const chips = [
  "Toothache",
  "Broken tooth",
  "Missing teeth",
  "Bleeding gums",
  "Better smile",
  "My child",
  "I’m nervous",
];

const stats = [
  { value: "14 years", label: "Of experience" },
  { value: "3,500+", label: "Patients treated" },
  { value: "Saturdays", label: "Open Tue–Sat, 9–7" },
  { value: "Same day", label: "Emergency appointments" },
];

// Background media. Each video switches on automatically once its file is in /public;
// until then (and for visitors who prefer reduced motion) the poster photo shows.
// Desktop is a full-width 16:9 loop, mobile a tall 9:16 loop.
const MEDIA = {
  desktop: {
    video: "/videos/hero-desktop.mp4",
    poster: "/images/sections/hero-poster-desktop.jpg",
    width: 1920,
    height: 1080,
  },
  mobile: {
    video: "/videos/hero-mobile.mp4",
    poster: "/images/sections/hero-poster-mobile.jpg",
    width: 720,
    height: 1280,
  },
};

const DESKTOP_QUERY = "(min-width: 1024px)";
const MOBILE_QUERY = "(max-width: 1023.98px)";

function publicFileExists(publicPath: string) {
  return existsSync(path.join(process.cwd(), "public", publicPath));
}

export default function Hero() {
  const hasDesktopVideo = publicFileExists(MEDIA.desktop.video);
  const hasMobileVideo = publicFileExists(MEDIA.mobile.video);

  // Art direction: one <picture>, so each device downloads only its own poster.
  const common = {
    alt: "Smiling patient relaxing in a dental chair at Apex Dental",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: MEDIA.desktop.poster,
    width: MEDIA.desktop.width,
    height: MEDIA.desktop.height,
  });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    src: MEDIA.mobile.poster,
    width: MEDIA.mobile.width,
    height: MEDIA.mobile.height,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <>
      <section className="hero-screen relative isolate overflow-hidden bg-teal-dark text-white">
        {/* Background: poster photo, looping video on top, then colour overlays */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <picture>
            <source media={DESKTOP_QUERY} srcSet={desktopSrcSet} />
            <source media={MOBILE_QUERY} srcSet={mobileSrcSet} />
            <img
              {...imgProps}
              alt=""
              className="h-full w-full object-cover object-[50%_28%] lg:object-[70%_35%]"
            />
          </picture>
          {hasDesktopVideo && (
            <HeroVideo
              src={MEDIA.desktop.video}
              poster={MEDIA.desktop.poster}
              media={DESKTOP_QUERY}
              className="absolute inset-0 h-full w-full object-cover object-[70%_35%]"
            />
          )}
          {hasMobileVideo && (
            <HeroVideo
              src={MEDIA.mobile.video}
              poster={MEDIA.mobile.poster}
              media={MOBILE_QUERY}
              className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
            />
          )}
          {/* Mobile: deep teal rising from the bottom behind the text */}
          <div className="absolute inset-0 bg-linear-to-t from-teal-dark from-20% via-teal-dark/80 via-50% to-transparent to-80% lg:hidden" />
          {/* Desktop: deep teal from the left behind the text, clear over the patient */}
          <div className="absolute inset-0 hidden bg-linear-to-r from-teal-dark/95 from-15% via-teal-dark/70 via-45% to-transparent to-75% lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-linear-to-t from-teal-dark/80 to-transparent lg:block" />
        </div>

        <div className="mx-auto flex h-full max-w-7xl flex-col px-5 lg:px-6">
          <div className="flex flex-1 flex-col justify-end pb-6 lg:max-w-[600px] lg:justify-center lg:pb-4 lg:pt-6 xl:max-w-[680px] lg:short:pt-4">
            <p className="hero-rise inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md lg:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3a27d] opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f3a27d]" />
              </span>
              <span>
                Family &amp; Emergency Dentist
                <span className="hidden sm:inline"> &middot; West Albuquerque</span>
              </span>
            </p>

            <h1
              className="hero-rise font-heading mt-4 text-[clamp(2rem,8.2vw,2.75rem)] leading-[1.06] tracking-tight lg:mt-5 lg:text-[clamp(2.5rem,min(4.2vw,6.8vh),4rem)] lg:short:mt-4"
              style={{ textWrap: "balance", animationDelay: "80ms" }}
            >
              Whatever brought you here, we can help&mdash;
              <span className="text-[#f6c9a6]">often the same day.</span>
            </h1>

            <p
              className="hero-rise mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 lg:mt-5 lg:text-lg lg:short:mt-4 short-phone:hidden [@media(max-height:640px)]:hidden"
              style={{ animationDelay: "160ms" }}
            >
              Toothache, a broken tooth, missing teeth or a nervous child&mdash;gentle care
              for every age, including anxious patients and those with medical needs.
            </p>

            <div className="hero-rise mt-6 lg:mt-8 lg:short:mt-6" style={{ animationDelay: "240ms" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 lg:text-xs">
                What&apos;s bothering you?
              </p>
              <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
                {chips.map((chip) => (
                  <Link
                    key={chip}
                    href="/book"
                    className="shrink-0 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-teal"
                  >
                    {chip}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="hero-rise mt-6 grid grid-cols-2 gap-3 lg:mt-8 lg:flex lg:items-center lg:short:mt-6"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-4 py-3.5 font-semibold text-teal sm:px-6 shadow-lg shadow-black/20 transition-colors hover:bg-sand"
              >
                Book a Visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:5055855157"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 px-4 py-3.5 font-medium sm:px-6 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                <span className="lg:hidden">Call now</span>
                <span className="hidden lg:inline">505-585-5157</span>
              </a>
            </div>
          </div>

          {/* Desktop: trust stats sit inside the first screen */}
          <div className="hero-rise hidden pb-8 lg:block lg:short:pb-6" style={{ animationDelay: "420ms" }}>
            <dl className="grid grid-cols-4 divide-x divide-white/15 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse px-6 py-4 short:py-3">
                  <dt className="mt-1 text-xs text-white/70">{s.label}</dt>
                  <dd className="font-heading text-2xl leading-none">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mobile: the same stats as a strip just below the first screen */}
      <div className="border-b border-black/5 bg-sand lg:hidden">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-xs text-charcoal-light">{s.label}</dt>
              <dd className="font-heading text-lg leading-tight text-teal">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
