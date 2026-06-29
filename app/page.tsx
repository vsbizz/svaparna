// app/page.tsx
"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Consultations from "./components/home/Consultations";
import Services from "./components/home/Services";
import ConditionsTreated from "./components/home/ConditionsTreated";
import OurProcess from "./components/home/OurProcess";
import Difference from "./components/home/Difference";
import PricingSection from "./components/home/PricingSection";
import ReviewsCarousel from "./components/home/ReviewsCarousel";
import FAQ from "./components/home/FAQ";
import CTABand from "./components/home/CTABand";
import CalendlyModal from "./components/calendlyModal";

// Explicitly define the accepted service type variants
type ServiceType = "physiotherapy" | "ayurvedaIndia" | "ayurvedaUSA";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeService, setActiveService] =
    useState<ServiceType>("physiotherapy");

  // Generalized helper handler to trigger booking workflows across children sections
  const handleOpenBooking = (service: ServiceType) => {
    setActiveService(service);
    setIsCalendlyOpen(true);
  };

  return (
    <>
      <Hero
        onStartJourneyClick={() => console.log("Start journey")}
        onBookConsultationClick={() => handleOpenBooking("ayurvedaIndia")}
      />

      <About />

      <Consultations
        onSelectType={(type) => handleOpenBooking(type as ServiceType)}
      />

      <Services />

      <ConditionsTreated
        onBookConsultation={() => handleOpenBooking("physiotherapy")}
      />

      <OurProcess />

      <Difference onBookClick={() => handleOpenBooking("ayurvedaUSA")} />
      <PricingSection
        openCalendly={(service: string) =>
          handleOpenBooking(service as ServiceType)
        }
      />
      <ReviewsCarousel />
      <FAQ />
      <CTABand
        title="Let's Get You Back to Better"
        description="We take pride in delivering highly personalized care."
        image="assets/images/cta-img.png"
        buttons={[
          {
            label: "Book a Consultation",
            onClick: () => handleOpenBooking("ayurvedaIndia"),
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
        ]}
      />

      {/* Redesigned 2-Step Configuration Modal state integration */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        service={activeService}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
}
