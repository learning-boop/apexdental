import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page/PageHero";
import { pageGroups } from "@/content/pages";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on the Apex Dental NM website in one place.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every page,"
        titleAccent="in one place."
        actions="none"
        crumbs={[{ label: "Sitemap" }]}
      />
      <section className="bg-warm-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
          {pageGroups.map((g) => (
            <div key={g.title}>
              <h2 className="font-heading text-2xl text-charcoal">{g.title}</h2>
              <ul className="mt-4 space-y-2">
                {g.pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-teal hover:text-teal-dark hover:underline">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
