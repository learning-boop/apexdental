/** Consistent section titles for inner pages. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p>
      )}
      <h2
        className="font-heading mt-2 text-3xl leading-tight text-charcoal lg:text-[2.5rem]"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-charcoal-light">{intro}</p>}
    </div>
  );
}
