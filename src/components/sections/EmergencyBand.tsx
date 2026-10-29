export default function EmergencyBand() {
  return (
    <section className="py-14 lg:py-20 bg-terracotta">
      <div className="max-w-2xl mx-auto px-5 lg:px-6 text-center">
        <h2 className="font-heading text-2xl lg:text-3xl text-white mb-2">
          Dental emergency? Don&apos;t wait.
        </h2>
        <p className="text-white/80 mb-8">
          Same-day emergency appointments available.
        </p>
        <a
          href="tel:5055855157"
          className="inline-block px-8 py-3 bg-white text-terracotta font-medium rounded-md hover:bg-warm-white transition-colors"
        >
          Call 505-585-5157
        </a>
      </div>
    </section>
  );
}
