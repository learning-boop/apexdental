"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

type HeroVideoProps = {
  src: string;
  /** The clip's first frame, matching the photo underneath so the swap is seamless. */
  poster: string;
  /** The clip's last frame, shown instead if the browser refuses to autoplay. */
  endFrame: string;
  /** Media query for the layout this video belongs to, so only one file downloads. */
  media: string;
  className?: string;
};

/**
 * Muted background video layered over the hero photo. It plays once and then rests
 * on its final frame: the clip goes from worry to relief, so looping would snap her
 * back to worried every few seconds.
 * The photo underneath stays as the fallback: it shows while the video loads,
 * on the wrong breakpoint, and for visitors who prefer reduced motion.
 */
export default function HeroVideo({ src, poster, endFrame, media, className }: HeroVideoProps) {
  const matches = useMediaQuery(media);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const active = matches && !reduceMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !video) return;
    const start = () => {
      // Autoplay can be refused (iOS Low Power Mode, data-saver settings). Rather than
      // leave her stuck on the worried opening frame, show the smiling end frame.
      video.play().catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "NotAllowedError") {
          setAutoplayBlocked(true);
        }
      });
    };
    // While the first-visit intro covers the page, wait for its curtain to lift so the
    // story starts from her first frame (see IntroSplash).
    if (document.documentElement.dataset.intro === "play") {
      window.addEventListener("apex:intro-reveal", start, { once: true });
      return () => window.removeEventListener("apex:intro-reveal", start);
    }
    start();
  }, [active]);

  if (!active) return null;

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={autoplayBlocked ? endFrame : poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
