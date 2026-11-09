import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import IntroSplash, { INTRO_SCRIPT } from "@/components/IntroSplash";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apexdentalnm.com"),
  title: {
    default: "Apex Dental NM | Family & Emergency Dentist | West Albuquerque",
    template: "%s | Apex Dental NM",
  },
  description:
    "Family, children's and emergency dentistry on Albuquerque's west side. Same-day emergency appointments. Open Tue-Sat 9am-7pm. Call 505-585-5157.",
  openGraph: {
    type: "website",
    siteName: "Apex Dental NM",
    locale: "en_US",
    images: [{ url: "/images/hero/dental-office-still-desktop.jpg", width: 1280, height: 720 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: INTRO_SCRIPT sets data-intro on <html> before React hydrates.
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] text-charcoal antialiased">
        <IntroSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
