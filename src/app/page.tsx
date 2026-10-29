import Hero from "@/components/sections/Hero";
import PainSection from "@/components/sections/PainSection";
import ConcernSection from "@/components/sections/ConcernSection";
import LifeImpactSection from "@/components/sections/LifeImpactSection";
import TurnSection from "@/components/sections/TurnSection";
import EnvironmentSection from "@/components/sections/EnvironmentSection";
import PersonalSection from "@/components/sections/PersonalSection";
import FindTreatmentSection from "@/components/sections/FindTreatmentSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import EmergencyBand from "@/components/sections/EmergencyBand";
import BookSection from "@/components/sections/BookSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      {/* 2. The Pain */}
      <PainSection />
      {/* 3. The Concern */}
      <ConcernSection />
      {/* 4. The Life Impact */}
      <LifeImpactSection />
      {/* 5. The Turn */}
      <TurnSection />
      {/* 6. Environment */}
      <EnvironmentSection />
      {/* 7. Personal */}
      <PersonalSection />
      {/* 8. Find Treatment */}
      <FindTreatmentSection />
      {/* 9. How It Works */}
      <HowItWorksSection />
      {/* 10. Doctors & Numbers */}
      <DoctorsSection />
      {/* 11. Reviews */}
      <ReviewsSection />
      {/* 12. Emergency Band */}
      <EmergencyBand />
      {/* 13. Book & Find Us */}
      <BookSection />
    </>
  );
}
