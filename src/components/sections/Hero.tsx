import Link from "next/link";
import { getImageProps } from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowRight, Phone } from "lucide-react";
import HeroVideo from "./HeroVideo";

const stats = [
  { value: "14 years", label: "Of experience" },
  { value: "3,500+", label: "Patients treated" },
  { value: "Saturdays", label: "Open Tue–Sat, 9–7" },
  { value: "Same day", label: "Emergency appointments" },
];

// Background media. Each clip is a short story (a nervous patient is reassured and
// relaxes), so it plays once and rests on her smile instead of looping.
// `poster` is the clip's first frame, shown while it loads so the swap is seamless.
// `still` is its last frame, shown on its own whenever the video can't or shouldn't
// play: reduced motion, no video file, or autoplay blocked.
// Desktop is a 16:9 clip, mobile a tall 9:16 clip.
const MEDIA = {
  desktop: {
    video: "/videos/hero-desktop.mp4",
    poster: "/images/hero/dental-office-poster-desktop.jpg",
    still: "/images/hero/dental-office-still-desktop.jpg",
    width: 1280,
    height: 720,
  },
  mobile: {
    video: "/videos/hero-mobile.mp4",
    poster: "/images/hero/dental-office-poster-mobile.jpg",
    still: "/images/hero/dental-office-still-mobile.jpg",
    width: 720,
    height: 1280,
  },
};

const DESKTOP_QUERY = "(min-width: 1024px)";
const MOBILE_QUERY = "(max-width: 1023.98px)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function publicFileExists(publicPath: string) {
  return existsSync(path.join(process.cwd(), "public", publicPath));
}

export default function Hero() {
  const hasDesktopVideo = publicFileExists(MEDIA.desktop.video);
  const hasMobileVideo = publicFileExists(MEDIA.mobile.video);

  // Art direction: one <picture>, so each device downloads only its own image.
  // With motion it shows the clip's first frame (the video then plays on top of it);
  // with reduced motion, or no video file, it shows the smiling last frame instead.
  const common = {
    alt: "Smiling patient relaxing in a dental chair at Apex Dental",
    sizes: "100vw",
  };
  const srcSetFor = (src: string, size: { width: number; height: number }) =>
    getImageProps({ ...common, src, width: size.width, height: size.height }).props.srcSet;

  const desktopStillSrcSet = srcSetFor(MEDIA.desktop.still, MEDIA.desktop);
  const desktopSrcSet = hasDesktopVideo
    ? srcSetFor(MEDIA.desktop.poster, MEDIA.desktop)
    : desktopStillSrcSet;
  const mobileStillSrcSet = srcSetFor(MEDIA.mobile.still, MEDIA.mobile);
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    src: hasMobileVideo ? MEDIA.mobile.poster : MEDIA.mobile.still,
    width: MEDIA.mobile.width,
    height: MEDIA.mobile.height,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <>
      <section className="hero-screen relative isolate overflow-hidden bg-teal-dark text-white">
        {/* Background: photo, video on top (plays once), then colour overlays */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {/* Framing: on desktop the media sits 6% right so her face stays clear of the
              headline as the camera pushes in; on mobile it sits 7% up so her face stays
              above the text. The gaps this leaves are under the solid teal overlays. */}
          <picture>
            <source media={`${DESKTOP_QUERY} and ${REDUCED_MOTION}`} srcSet={desktopStillSrcSet} />
            <source media={DESKTOP_QUERY} srcSet={desktopSrcSet} />
            <source media={`${MOBILE_QUERY} and ${REDUCED_MOTION}`} srcSet={mobileStillSrcSet} />
            <source media={MOBILE_QUERY} srcSet={mobileSrcSet} />
            <img
              {...imgProps}
              alt=""
              className="h-full w-full -translate-y-[7%] object-cover object-[50%_28%] lg:translate-x-[6%] lg:translate-y-0 lg:object-[70%_35%]"
            />
          </picture>
          {hasDesktopVideo && (
            <HeroVideo
              src={MEDIA.desktop.video}
              poster={MEDIA.desktop.poster}
              endFrame={MEDIA.desktop.still}
              media={DESKTOP_QUERY}
              className="absolute inset-0 h-full w-full translate-x-[6%] object-cover object-[70%_35%]"
            />
          )}
          {hasMobileVideo && (
            <HeroVideo
              src={MEDIA.mobile.video}
              poster={MEDIA.mobile.poster}
              endFrame={MEDIA.mobile.still}
              media={MOBILE_QUERY}
              className="absolute inset-0 h-full w-full -translate-y-[7%] object-cover object-[50%_28%]"
            />
          )}
          {/* Mobile: deep teal rising from the bottom behind the text */}
          <div className="absolute inset-0 bg-linear-to-t from-teal-dark from-20% via-teal-dark/80 via-50% to-transparent to-80% lg:hidden" />
          {/* Desktop: covers the strip the 6% shift leaves at the left edge, fading out */}
          <div className="absolute inset-y-0 left-0 hidden w-[15%] bg-linear-to-r from-teal-dark from-40% to-transparent lg:block" />
          {/* Desktop: deep teal from the left behind the text, clear over the patient */}
          <div className="absolute inset-0 hidden bg-linear-to-r from-teal-dark/95 from-15% via-teal-dark/70 via-45% to-transparent to-75% lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-linear-to-t from-teal-dark/80 to-transparent lg:block" />
        </div>

        <div className="mx-auto flex h-full flex-col px-5 lg:px-6">
          <div className="flex flex-1 flex-col justify-end pb-4 lg:max-w-[600px] lg:justify-center lg:pb-4 lg:pt-6 xl:max-w-[680px] lg:short:pt-4">

            <h1
              className="hero-rise font-heading text-[clamp(2rem,8.2vw,2.75rem)] leading-[1.06] tracking-tight lg:text-[clamp(2.5rem,min(4.2vw,6.8vh),4rem)]"
              style={{ textWrap: "balance", animationDelay: "80ms" }}
            >
              Whatever brought you here, we can help&mdash;
              <span className="text-[#f6c9a6]">often the same day.</span>
            </h1>


            <div
              className="hero-rise mt-5 grid grid-cols-2 gap-3 lg:mt-8 lg:flex lg:items-center lg:short:mt-6"
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
