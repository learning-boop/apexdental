import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

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
  title: "Apex Dental NM | Family & Emergency Dentist | West Albuquerque",
  description:
    "Family, children's and emergency dentistry on Albuquerque's west side. Same-day emergency appointments. Open Tue-Sat 9am-7pm. Call 505-585-5157.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
