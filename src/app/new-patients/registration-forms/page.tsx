import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, FileHeart, FileText, Mail, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
import BookingCta from "@/components/page/BookingCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "New Patient Registration Forms",
  description:
    "Save time at your first visit to Apex Dental. Find out which new-patient forms you’ll need and how to get them before your appointment.",
  alternates: { canonical: "/new-patients/registration-forms" },
};

// TODO(client): send the PDF forms. When they arrive, add a `file` path to each
// form below (e.g. "/forms/new-patient-registration.pdf") and a download link
// will appear automatically.
const forms: { icon: typeof FileText; title: string; body: string; file?: string }[] = [
  {
    icon: ClipboardList,
    title: "New patient registration",
    body: "Your contact details, emergency contact and how you heard about us.",
  },
  {
    icon: FileHeart,
    title: "Medical and dental history",
    body: "Medicines, allergies and health conditions, so we can treat you safely.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance information",
    body: "Your plan details, so we can check your benefits before your visit.",
  },
  {
    icon: FileText,
    title: "Privacy acknowledgment",
    body: "Confirms you’ve received our Notice of Privacy Practices.",
  },
];

export default function RegistrationFormsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title="Registration forms."
        titleAccent="Less paperwork on the day."
        intro="Filling in your forms ahead of time means more of your visit is spent on you. Here’s what we’ll ask for."
        crumbs={[{ label: "New patients", href: "/new-patients/your-first-visit" }, { label: "Registration forms" }]}
      />

      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <SectionHeading eyebrow="Forms" title="What you’ll fill in." className="mb-10" />
          <ul className="grid gap-5 sm:grid-cols-2">
            {forms.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-light">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl text-charcoal">{f.title}</h3>
                    <p className="mt-1 text-charcoal-light">{f.body}</p>
                    {f.file && (
                      <a href={f.file} className="mt-3 inline-block text-sm font-medium text-teal hover:text-teal-dark" download>
                        Download PDF
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-2xl bg-teal p-6 text-white lg:p-10">
            <h2 className="font-heading text-2xl lg:text-3xl">Get your forms before your visit</h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Call or email us and we’ll send your new-patient forms ahead of your appointment. You’re also welcome to
              arrive a little early and fill them in with us.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-teal hover:bg-sand"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
              <a
                href={`mailto:${site.email}?subject=New%20patient%20forms`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 font-medium hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Please don’t email medical details. Bring them to your visit or share them by phone.
            </p>
          </div>

          <p className="mt-8 text-charcoal-light">
            Next:{" "}
            <Link href="/new-patients/your-first-visit" className="font-medium text-teal hover:text-teal-dark">
              what to expect at your first visit
            </Link>
            .
          </p>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
