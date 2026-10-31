import type { MetadataRoute } from "next";
import { pageGroups } from "@/content/pages";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageGroups
    .flatMap((g) => g.pages)
    .filter((p) => p.href !== "/sitemap")
    .map((p) => ({
      url: `${site.url}${p.href === "/" ? "" : p.href}`,
      changeFrequency: p.href === "/" ? "weekly" : "monthly",
      priority: p.href === "/" ? 1 : p.href.startsWith("/services") ? 0.8 : 0.6,
    }));
}
