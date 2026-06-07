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
import CTABand from "./components/home/CTABand";
import Services from "./components/home/Services";
import { Calendar } from "lucide-react";
// import Contact from "@/components/Contact";

export default function Home() {
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
      <Consultations onSelectType={() => {}} />
      <Services onSelectService={() => {}} />
      <ConditionsTreated onBookConsultation={() => {}} />
      <OurProcess />
      <Difference onBookClick={() => {}} />
      <TreatmentPackages />
      <ReviewsCarousel />
      <FAQ />
      <CTABand
        title="Let's Get You Back to Better"
        description="We take pride in delivering highly personalized physical therapy."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Book a Free Consultation",
            href: "#",
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
        ]}
      />{" "}
    </>
  );
}
