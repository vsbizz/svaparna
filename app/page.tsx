// app/page.tsx
"use client";

import Hero from "./components/home/Hero";
// import InspiredByNature from "@/components/InspiredByNature";
import About from "./components/home/About";
// import Services from "@/components/Services";
import ConditionsTreated from "./components/home/ConditionsTreated";
// import CoveredHeadToToe from "@/components/CoveredHeadToToe";
import OurProcess from "./components/home/OurProcess";
import ReviewsCarousel from "./components/home/ReviewsCarousel";
import FAQ from "./components/home/FAQ";
// import BackToBetterCTA from "@/components/BackToBetterCTA";
import Consultations from "./components/home/Consultations";
import Difference from "./components/home/Difference";
import TreatmentPackages from "./components/home/TreatmentPackages";
import PricingSection from "./components/home/PricingSection";
import CTABand from "./components/home/CTABand";
import Services from "./components/home/Services";
import { Calendar } from "lucide-react";
import CalendlyModal from "./components/calendlyModal";
import { useState } from "react";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  const openCalendly = (url: string) => {
    setCalendlyUrl(url);
    setIsCalendlyOpen(true);
  };

  return (
    <>
      <Hero
        onStartJourneyClick={() => console.log("Start journey")}
        onBookConsultationClick={() => console.log("Book consultation")}
      />
      {/* <InspiredByNature />
      <CoveredHeadToToe onBookConsultation={() => {}} />
      <Contact /> */}
      <About />
      <Consultations onSelectType={() => { }} />
      <Services />
      <ConditionsTreated onBookConsultation={() => { }} />
      <OurProcess />
      <Difference onBookClick={() => { }} />
      <TreatmentPackages openCalendly={openCalendly} />
      <PricingSection openCalendly={openCalendly} />
      <ReviewsCarousel />
      <FAQ />
      <CTABand
        title="Let's Get You Back to Better"
        description="We take pride in delivering highly personalized care."
        image="assets/images/cta-img.png"
        buttons={[
          {
            label: "Book a Consultation",
            onClick: () => openCalendly("https://calendly.com/qusaivsbizz"),
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
        ]}
      />
      <CalendlyModal
        isOpen={isCalendlyOpen}
        url={calendlyUrl}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
}
