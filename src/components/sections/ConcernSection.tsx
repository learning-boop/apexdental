import Link from "next/link";
import Image from "next/image";

const concerns = [
  "Chewing on one side only",
  "Woken at night by pain",
  "Avoiding cold drinks",
  "Dentures that slip when you talk or eat",
  "Covering your smile in photos",
];

export default function ConcernSection() {
  return (
    <section className="py-14 lg:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image LEFT */}
          <div>
            <Image
              src="/images/sections/03-tooth-pain-laptop.jpg"
              alt="Man pausing while eating because of tooth pain"
              width={1448}
              height={1086}
              className="hidden lg:block rounded-lg object-cover w-full"
            />
            <Image
              src="/images/sections/04-tooth-pain-mobile.jpg"
              alt="Man pausing while eating because of tooth pain"
              width={1122}
              height={1402}
              className="lg:hidden rounded-lg object-cover w-full"
            />
          </div>

          {/* Text RIGHT */}
          <div>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-6">
              Then it stops you doing everyday things.
            </h2>
            <ul className="space-y-3 mb-8">
              {concerns.map((c) => (
                <li key={c} className="flex items-baseline gap-3 text-charcoal-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-charcoal-light mb-8 leading-relaxed">
              Small problems are easier to fix early. The longer they wait, the bigger they grow.
            </p>
            <Link href="/book" className="inline-block px-6 py-3 bg-teal text-white font-medium rounded-md hover:bg-teal-dark transition-colors">
              Tell us what&apos;s going on &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
