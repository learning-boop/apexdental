"use client";

import { useState } from "react";

const problems = [
  "Toothache",
  "Broken tooth",
  "Missing teeth",
  "Bleeding gums",
  "Better smile",
  "It\u2019s for my child",
  "I\u2019m nervous",
];

const days = ["No preference", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function BookSection() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", problem: "", day: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="book" className="py-14 lg:py-28 pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-[2.5rem] text-charcoal mb-3">
            Book your visit.
          </h2>
          <p className="text-charcoal-light text-lg">
            Tell us what&apos;s going on and our team will call you to find a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Name" id="name" type="text" required value={formData.name} onChange={handleChange} />
            <Field label="Phone" id="phone" type="tel" required value={formData.phone} onChange={handleChange} />
            <Field label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />

            <div>
              <label htmlFor="problem" className="block text-sm text-charcoal mb-1">What&apos;s bothering you?</label>
              <select id="problem" name="problem" required value={formData.problem} onChange={handleChange} className="w-full px-4 py-2.5 border border-black/10 rounded-md text-charcoal bg-white focus:outline-none focus:border-teal">
                <option value="">Select...</option>
                {problems.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="day" className="block text-sm text-charcoal mb-1">Preferred day</label>
              <select id="day" name="day" value={formData.day} onChange={handleChange} className="w-full px-4 py-2.5 border border-black/10 rounded-md text-charcoal bg-white focus:outline-none focus:border-teal">
                <option value="">Select...</option>
                {days.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <button type="submit" className="w-full py-3 bg-teal text-white font-medium rounded-md hover:bg-teal-dark transition-colors">
              Request Appointment
            </button>
            <p className="text-center text-sm text-charcoal-light">
              or call <a href="tel:5055855157" className="text-teal font-medium">505-585-5157</a>
            </p>
            <p className="text-center text-xs text-warm-gray">
              Please don&apos;t include medical details in this form.
            </p>
          </form>

          {/* Map & info */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5!2d-106.7284!3d35.1861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220e8db43b9c2d%3A0x8c3b3b3b3b3b3b3b!2s6330%20Riverside%20Plaza%20Ln%20NW%20Suite%20165%2C%20Albuquerque%2C%20NM%2087120!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex Dental location on Google Maps"
                className="w-full"
              />
            </div>

            <div className="space-y-3 text-[15px]">
              <p className="text-charcoal">
                <strong>6330 Riverside Plaza Lane NW, Suite 165</strong><br />
                Albuquerque, NM 87120
              </p>
              <p className="text-charcoal-light">Mon: Closed &middot; Tue&ndash;Sat: 9 am&ndash;7 pm &middot; Sun: Closed</p>
              <p className="text-charcoal-light">Plenty of parking behind the building</p>
              <a
                href="https://maps.google.com/?q=6330+Riverside+Plaza+Ln+NW+Suite+165+Albuquerque+NM+87120"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal hover:text-teal-dark transition-colors"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type, required, value, onChange }: {
  label: string; id: string; type: string; required?: boolean;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-charcoal mb-1">{label}</label>
      <input type={type} id={id} name={id} required={required} value={value} onChange={onChange}
        className="w-full px-4 py-2.5 border border-black/10 rounded-md text-charcoal focus:outline-none focus:border-teal" />
    </div>
  );
}
