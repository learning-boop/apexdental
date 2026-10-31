import { Plus } from "lucide-react";
import JsonLd from "./JsonLd";

type Faq = { q: string; a: string };

/** Accessible accordion built on <details>, plus FAQPage structured data. */
export default function Faq({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 lg:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-charcoal [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus
              className="h-5 w-5 shrink-0 text-teal transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="-mt-1 pb-5 leading-relaxed text-charcoal-light">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
