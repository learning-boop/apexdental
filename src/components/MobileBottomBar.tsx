"use client";

import { Phone, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-sand-dark shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="grid grid-cols-3 h-14">
        <a
          href="tel:5055855157"
          className="flex flex-col items-center justify-center gap-0.5 text-charcoal active:bg-sand/50"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-0.5 text-teal active:bg-teal-light"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Book</span>
        </Link>
        <a
          href="https://maps.google.com/?q=6330+Riverside+Plaza+Ln+NW+Suite+165+Albuquerque+NM+87120"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-charcoal active:bg-sand/50"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[11px] font-medium">Directions</span>
        </a>
      </div>
    </div>
  );
}
