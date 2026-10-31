import type { Metadata } from "next";
import LegalPage from "@/components/page/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Apex Dental NM is committed to making its website usable for everyone. Learn about our accessibility features and how to get help.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      intro="We want everyone to be able to find information and book care with us, whatever their abilities."
      updated="October 2026"
    >
      <p>
        {site.name} is working to make this website accessible to as many people as possible, and we aim to meet the
        Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.
      </p>

      <h2>What we’ve done</h2>
      <ul>
        <li>Clear headings and page structure that work with screen readers</li>
        <li>Text alternatives for meaningful images</li>
        <li>Colour contrast chosen for readability</li>
        <li>Full keyboard navigation, with visible focus</li>
        <li>Animation and background video that pause for visitors who prefer reduced motion</li>
        <li>Layouts that adapt to phones, tablets and screen zoom</li>
      </ul>

      <h2>Need help?</h2>
      <p>
        If anything on this site is hard to use, or you need information in another format, please call us on{" "}
        <a href={site.phoneHref}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>. We’re
        also happy to help with any access needs for your visit—just let us know when you book.
      </p>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is ongoing. We review the site regularly and welcome feedback that helps us improve it.
      </p>
    </LegalPage>
  );
}
