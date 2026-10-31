import type { Metadata } from "next";
import LegalPage from "@/components/page/LegalPage";
import { fullAddress, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices",
  description:
    "Your rights over your health information at Apex Dental NM, and how to request a copy of our Notice of Privacy Practices.",
  alternates: { canonical: "/notice-of-privacy-practices" },
};

// TODO(client): HIPAA requires the practice's own Notice of Privacy Practices.
// Replace the summary below with the full notice (or link a PDF) before launch.
export default function NoticeOfPrivacyPracticesPage() {
  return (
    <LegalPage
      eyebrow="Patient privacy"
      title="Notice of Privacy Practices"
      intro="How your health information may be used and shared, and how you can get access to it."
      updated="Summary · full notice available on request"
    >
      <p>
        As a dental practice, {site.name} is required by law to protect the privacy of your health information and to
        give you a notice explaining our legal duties and privacy practices. You can ask for a paper copy of our full
        Notice of Privacy Practices at any visit, or by calling <a href={site.phoneHref}>{site.phone}</a>.
      </p>

      <h2>Your rights</h2>
      <p>Under the HIPAA Privacy Rule, you generally have the right to:</p>
      <ul>
        <li>See and get a copy of your health and billing records</li>
        <li>Ask us to correct information you think is wrong or incomplete</li>
        <li>Ask us to contact you in a specific way or at a specific address</li>
        <li>Ask us to limit what we use or share</li>
        <li>Get a list of certain disclosures we’ve made</li>
        <li>Get a paper copy of this notice</li>
        <li>Choose someone to act for you</li>
        <li>File a complaint if you believe your rights have been violated</li>
      </ul>

      <h2>Complaints</h2>
      <p>
        You can complain to us using the contact details below, or to the U.S. Department of Health and Human
        Services Office for Civil Rights. We will not retaliate against you for filing a complaint.
      </p>

      <h2>Contact</h2>
      <p>
        {site.name}, {fullAddress}. Phone <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
