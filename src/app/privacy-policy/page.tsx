import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/page/LegalPage";
import { fullAddress, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Apex Dental NM collects, uses and protects information shared through this website.",
  alternates: { canonical: "/privacy-policy" },
};

// TODO(client): this is a starting draft. Have it reviewed by the practice's
// legal or compliance adviser before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we handle the information you share with us through this website."
      updated="Draft for review · October 2026"
    >
      <p>
        This policy explains how {site.name} (“we”, “us”) collects and uses information when you visit
        apexdentalnm.com or contact us through it. How we use and protect your health information as a patient is
        described in our <Link href="/notice-of-privacy-practices">Notice of Privacy Practices</Link>.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us</strong>, such as your name, phone number, email address and preferred
          appointment day when you send an appointment request or contact us.
        </li>
        <li>
          <strong>Technical information</strong>, such as your browser type, device and pages visited, which may be
          collected automatically to keep the site secure and working well.
        </li>
      </ul>
      <p>
        Please don’t send detailed medical information through website forms or email. Share it with us by phone or
        at your visit instead.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your request and arrange appointments</li>
        <li>To answer questions you send us</li>
        <li>To maintain and improve this website</li>
      </ul>
      <p>We don’t sell your personal information.</p>

      <h2>Sharing</h2>
      <p>
        We only share information with service providers who help us run this website or our practice, and only as
        needed to provide those services, or when the law requires it.
      </p>

      <h2>Cookies</h2>
      <p>
        This website may use cookies that are necessary for it to work. If we add analytics or other optional
        cookies, we’ll update this policy to describe them.
      </p>

      <h2>Third-party content</h2>
      <p>
        Pages may include content from other services, such as an embedded Google Map. Those services have their own
        privacy policies.
      </p>

      <h2>Children</h2>
      <p>This website is not directed at children under 13, and we don’t knowingly collect their information online.</p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Call <a href={site.phoneHref}>{site.phone}</a>, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>, or write to us at {fullAddress}.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
    </LegalPage>
  );
}
