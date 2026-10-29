const steps = [
  {
    number: "1",
    title: "Call or book online",
    description: "Pick a time that works \u2014 we\u2019ll confirm by phone.",
  },
  {
    number: "2",
    title: "Exam and x-rays",
    description: "A careful, painless check of your teeth and gums.",
  },
  {
    number: "3",
    title: "Your plan, explained",
    description: "Full treatment plan and price before we begin.",
  },
  {
    number: "4",
    title: "Treatment and follow-up",
    description: "We\u2019ll check in to make sure you\u2019re healing well.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-14 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-14 text-center">
          What happens when you visit.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-heading text-teal/70 leading-none">{step.number}</span>
              <h3 className="font-medium text-charcoal mt-2 mb-1">{step.title}</h3>
              <p className="text-sm text-charcoal-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
