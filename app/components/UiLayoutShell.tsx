"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavItem } from "@/types";
import CalendlyModal from "./calendlyModal";

// Define the strict types expected by your new CalendlyModal configuration
type ServiceType = "physiotherapy" | "ayurvedaIndia" | "ayurvedaUSA";

export default function UiLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "US Spinal & Joint Alignment",
  );
  const [selectedConsultType, setSelectedConsultType] = useState<
    "online" | "offline"
  >("online");

  // State for controlling your new 2-step booking flow
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceType>("ayurvedaIndia");

  // Changed from tracking raw URLs to tracking the user's selected service type
  const openCalendly = (service: ServiceType) => {
    setActiveService(service);
    setIsCalendlyOpen(true);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const handleOpenBooking = (
    serviceName?: string,
    type?: "online" | "offline",
  ) => {
    if (serviceName) setSelectedService(serviceName);
    if (type) setSelectedConsultType(type);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        Note: Update any "Book Now" CTA buttons inside your Navbar component 
        to call openCalendly("ayurvedaIndia"), openCalendly("physiotherapy"), or openCalendly("ayurvedaUSA") 
        instead of passing raw web links.
      */}
<Navbar navItems={navItems} openCalendly={(service: any) => openCalendly(service as ServiceType)} />

      {/* This renders whatever page the user is currently on */}
      <main className="flex-grow">{children}</main>
      
      {/* Fully wired up state modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        service={activeService}
        onClose={() => setIsCalendlyOpen(false)}
      />
      
      {/* Footer stays at the bottom of every page */}
      <Footer onBookClick={() => handleOpenBooking()} />

      {/* Global Modal placeholder if needed down the road */}
      {/* <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        preselectedType={selectedConsultType}
      /> */}
    </div>
  );
}