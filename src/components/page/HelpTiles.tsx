import {
  Award,
  CalendarDays,
  Clock,
  HeartHandshake,
  MapPin,
  MessagesSquare,
  ScanLine,
  ShieldCheck,
  Users,
  Wind,
} from "lucide-react";
import type { HelpKey } from "@/content/services";

// The "Solution around you" building blocks (ICF environmental factors).
export const helpCatalogue: Record<HelpKey, { icon: typeof Clock; title: string; body: string }> = {
  "same-day": {
    icon: Clock,
    title: "Same-day emergency slots",
    body: "In pain? Call first thing and we’ll do our best to see you the same day.",
  },
  saturday: {
    icon: CalendarDays,
    title: "Open Saturdays",
    body: "Appointments Tuesday to Saturday, 9 am–7 pm, around work and school.",
  },
  sedation: {
    icon: Wind,
    title: "Sedation if you’re nervous",
    body: "Laughing gas or a mild oral sedative so you can relax through treatment.",
  },
  insurance: {
    icon: ShieldCheck,
    title: "Insurance & CareCredit",
    body: "In-network with many major plans, plus CareCredit financing.",
  },
  technology: {
    icon: ScanLine,
    title: "2D and 3D x-rays",
    body: "Clear images so we can diagnose accurately and plan precisely.",
  },
  gentle: {
    icon: HeartHandshake,
    title: "Gentle, explained care",
    body: "We explain every step—and the price—before treatment begins.",
  },
  experience: {
    icon: Award,
    title: "Specialist-trained dentists",
    body: "Advanced training in implants, prosthodontics and cosmetic dentistry.",
  },
  consult: {
    icon: MessagesSquare,
    title: "No-pressure consultation",
    body: "Talk through your options, timeline and costs before you decide.",
  },
  family: {
    icon: Users,
    title: "Care for the whole family",
    body: "Children, parents and grandparents seen under one roof.",
  },
  location: {
    icon: MapPin,
    title: "Easy to reach",
    body: "Riverside Plaza on the west side, with plenty of parking behind the building.",
  },
};

export default function HelpTiles({ keys }: { keys: HelpKey[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {keys.map((key) => {
        const h = helpCatalogue[key];
        const Icon = h.icon;
        return (
          <div key={key} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light">
              <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-medium text-charcoal">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{h.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
