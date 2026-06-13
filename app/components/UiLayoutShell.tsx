"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import BookingModal from "@/components/BookingModal";
import { NavItem } from "@/types";
import CalendlyModal from "./calendlyModal";

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

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  const openCalendly = (url: string) => {
    setCalendlyUrl(url);
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
      {/* Navbar stays on top of every page */}
      <Navbar navItems={navItems} openCalendly={openCalendly} />

      {/* This renders whatever page the user is currently on */}
      <main className="flex-grow">{children}</main>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        url={calendlyUrl}
        onClose={() => setIsCalendlyOpen(false)}
      />
      {/* Footer stays at the bottom of every page */}
      <Footer onBookClick={() => handleOpenBooking()} />

      {/* Global Modal can now be triggered from anywhere if you wire it to a context, or just stays global here */}
      {/* <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        preselectedType={selectedConsultType}
      /> */}
    </div>
  );
}
