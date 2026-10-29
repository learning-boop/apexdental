import { ChevronDown } from "lucide-react";

export default function TurnSection() {
  return (
    <section className="py-10 lg:py-14 bg-gradient-to-b from-sand to-teal-light">
      <div className="max-w-2xl mx-auto px-5 lg:px-6 text-center">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-3">
          Here&apos;s what changes when you come to Apex.
        </h2>
        <p className="text-lg text-charcoal-light mb-6">
          Care that fits around your life&mdash;and around you.
        </p>
        <ChevronDown className="w-6 h-6 text-teal mx-auto animate-bounce" />
      </div>
    </section>
  );
}
