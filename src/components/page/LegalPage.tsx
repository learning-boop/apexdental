import PageHero from "./PageHero";

/** Simple long-form layout for policy pages. */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} actions="none" crumbs={[{ label: title }]} />
      <section className="bg-warm-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-6">
          <p className="mb-8 text-sm text-warm-gray">{updated}</p>
          <div className="legal-prose space-y-5 text-[17px] leading-relaxed text-charcoal-light">{children}</div>
        </div>
      </section>
    </>
  );
}
