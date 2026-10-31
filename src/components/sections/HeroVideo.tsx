"use client";

import { useSyncExternalStore } from "react";

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
  poster: string;
  /** Media query for the layout this video belongs to, so only one file downloads. */
  media: string;
  className?: string;
};

/**
 * Muted, looping background video layered over the hero photo.
 * The photo underneath stays as the fallback: it shows while the video loads,
 * on the wrong breakpoint, and for visitors who prefer reduced motion.
 */
export default function HeroVideo({ src, poster, media, className }: HeroVideoProps) {
  const matches = useMediaQuery(media);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (!matches || reduceMotion) return null;

  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
