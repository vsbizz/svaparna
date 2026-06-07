"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import BookingModal from "@/components/BookingModal";
import { NavItem } from "@/types";

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

  const navItems: NavItem[] = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Faq", href: "/faq" },
    { label: "Our Process", href: "/#process" },
    { label: "Online Consultations", href: "/#consultations" },
    { label: "Offline Consultations", href: "/#consultations" },
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
      <Navbar navItems={navItems} onBookClick={() => handleOpenBooking()} />

      {/* This renders whatever page the user is currently on */}
      <main className="flex-grow">{children}</main>

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
