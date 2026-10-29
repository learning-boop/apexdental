import {
  Clock,
  CalendarDays,
  MapPin,
  CreditCard,
  ScanLine,
  SmilePlus,
} from "lucide-react";

const tiles = [
  { icon: Clock, title: "Same-day emergency appointments", description: "In pain? Call us first." },
  { icon: CalendarDays, title: "Open Saturdays", description: "Care that fits around work and school." },
  { icon: MapPin, title: "West-side location", description: "Riverside Plaza, plenty of parking behind the building." },
  { icon: CreditCard, title: "Insurance & financing", description: "In-network with most major plans, plus CareCredit." },
  { icon: ScanLine, title: "Modern technology", description: "2D and 3D x-rays for accurate diagnosis." },
  { icon: SmilePlus, title: "Sedation options", description: "Laughing gas or a mild sedative to help you relax." },
];

export default function EnvironmentSection() {
  return (
    <section className="py-14 lg:py-28 bg-teal-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-12 text-center">
          Help that&apos;s easy to reach.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div key={tile.title} className="bg-white rounded-lg p-6">
                <Icon className="w-6 h-6 text-teal mb-3" strokeWidth={1.5} />
                <h3 className="font-medium text-charcoal mb-1">{tile.title}</h3>
                <p className="text-charcoal-light text-[15px]">{tile.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
