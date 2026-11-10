import Image from "next/image";

const cards = [
  {
    title: "At work",
    description: "Hard to focus when your tooth won\u2019t stop aching.",
    image: "/images/lifestyle/work-dental-discomfort.jpg",
  },
  {
    title: "At home",
    description: "Skipping family meals you used to enjoy.",
    image: "/images/lifestyle/dinner-dental-discomfort.jpg",
  },
  {
    title: "With people",
    description: "Holding back a laugh, hiding your smile.",
    image: "/images/lifestyle/smile-confidence.jpg",
  },
];

export default function LifeImpactSection() {
  return (
    <section className="py-10 lg:py-16 bg-sand">
      <div className=" mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-12 text-center">
          And slowly, it shows up everywhere.
        </h2>

        {/* Desktop: wide banner with overlay cards */}
        <div className="hidden lg:block relative rounded-lg overflow-hidden">
          <Image
            src="/images/lifestyle/family-dinner-banner.jpg"
            alt="Family gathering where one person is experiencing tooth discomfort"
            width={1916}
            height={821}
            className="w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 pt-24">
            <div className="grid grid-cols-3 gap-6">
              {cards.map((card) => (
                <div key={card.title} className="bg-white/95 backdrop-blur rounded-lg p-5">
                  <h3 className="font-medium text-charcoal mb-1">{card.title}</h3>
                  <p className="text-[16px] text-charcoal-light">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4">
          {cards.map((card) => (
            <div key={card.title} className="rounded-lg overflow-hidden bg-white">
              <Image
                src={card.image}
                alt={card.description}
                width={1672}
                height={941}
                className="w-full object-cover aspect-video"
              />
              <div className="p-4">
                <h3 className="font-medium text-charcoal mb-1">{card.title}</h3>
                <p className="text-[16px] text-charcoal-light">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
