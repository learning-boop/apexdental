import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sunil Kumar Reddy",
    credentials: "DMD, BDS",
    bio: "Implant training through the AAID, cosmetic smile design, experienced with children, anxious and elderly patients.",
    image: null as string | null, // Awaiting proper headshot from client
    placeholder: "Professional headshot needed \u2014 please ask the client",
  },
  {
    name: "Dr. Suneel Namburi",
    credentials: "DMD, MDS, MFDS",
    bio: "Specialist training in prosthodontics, DMD from Boston University, 10+ years in general, cosmetic and restorative dentistry.",
    image: "/images/team/dr-suneel-namburi.jpg",
    placeholder: null,
  },
];

const counters = [
  { number: "14", label: "Years of experience" },
  { number: "3,500", label: "Happy patients" },
  { number: "67", label: "Elderly-care facilities served" },
  { number: "1,500", label: "Hours of continuing education" },
];

const logos = [
  { name: "AAID", src: "/images/logos/logo-aaid.png" },
  { name: "AACD", src: "/images/logos/logo-aacd.jpg" },
  { name: "CareCredit", src: "/images/logos/logo-carecredit.jpg" },
  { name: "ClearCorrect", src: "/images/logos/logo-clearcorrect.png" },
];

export default function DoctorsSection() {
  return (
    <section className="py-14 lg:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-12 text-center">
          Experienced hands you can trust.
        </h2>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-white rounded-lg overflow-hidden">
              {doc.image ? (
                <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: doc.name.includes("Namburi") ? "right center" : "center 15%" }}
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] md:aspect-[4/5] bg-sand flex items-center justify-center text-warm-gray text-sm px-4 text-center">
                  {doc.placeholder}
                </div>
              )}
              <div className="p-6">
                <h3 className="font-heading text-xl text-charcoal">{doc.name}</h3>
                <p className="text-sm text-warm-gray mb-3">{doc.credentials}</p>
                <p className="text-charcoal-light leading-relaxed">{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {counters.map((c) => (
            <div key={c.label} className="text-center">
              <p className="font-heading text-4xl text-teal">{c.number}</p>
              <p className="text-sm text-charcoal-light mt-1">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Logos — uniform height, greyscale */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={160}
                height={32}
                className="object-contain h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all mix-blend-multiply"
              />
          ))}
        </div>
      </div>
    </section>
  );
}
