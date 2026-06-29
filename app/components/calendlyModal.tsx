"use client";

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { X, Clock, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CalendlyModalProps {
  isOpen: boolean;
  service: "physiotherapy" | "ayurvedaIndia" | "ayurvedaUSA";
  onClose: () => void;
}

type ConsultationType = "initial" | "followup";

const calendlyLinks = {
  physiotherapy: {
    initial: "https://calendly.com/contact-svaparnahealth/30min",
    followup: "https://calendly.com/contact-svaparnahealth/follow-up-meeting",
  },
  ayurvedaIndia: {
    initial: "https://calendly.com/contact-svaparnahealth/initial-consultation-physiotherapy-india-clone",
    followup: "https://calendly.com/contact-svaparnahealth/follow-up-consultation-clone",
  },
  ayurvedaUSA: {
    initial: "https://calendly.com/contact-svaparnahealth/initial-consultation-ayurveda-india-clone",
    followup: "https://calendly.com/contact-svaparnahealth/follow-up-consultation-ayurvedia-india-clone",
  },
};

const serviceLabels = {
  physiotherapy: "Physiotherapy",
  ayurvedaIndia: "Ayurvedic Care (India)",
  ayurvedaUSA: "Ayurvedic Care (USA)",
};

export default function CalendlyModal({
  isOpen,
  service,
  onClose,
}: CalendlyModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [consultationType, setConsultationType] = useState<ConsultationType>("initial");
  const [hasConsented, setHasConsented] = useState<boolean>(false);

  // Sync / Reset state whenever the modal closes or opens
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setConsultationType("initial");
      setHasConsented(false);
    }
  }, [isOpen]);

  // Adjust checkbox state dynamically depending on selected consultation type
  useEffect(() => {
    if (consultationType === "followup") {
      setHasConsented(true);
    } else {
      setHasConsented(false);
    }
  }, [consultationType]);

  if (!isOpen) return null;

  // Defensively protect against bad strings or raw URLs passed at runtime
  const safeServiceKey = calendlyLinks[service] ? service : "ayurvedaIndia";

  // Use the safe key to resolve labels and URLs
  const currentServiceLabel = serviceLabels[safeServiceKey];
  const targetUrl = calendlyLinks[safeServiceKey][consultationType];

  const handleBackToStep1 = () => {
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 animate-fade-in" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative z-10 w-[95%] max-w-5xl overflow-hidden rounded-3xl bg-[#fffef7] text-neutral-800 shadow-2xl transition-all duration-300 border border-primary-brand/10 flex flex-col h-[85vh] max-h-[750px]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white border border-primary-brand/10 p-2 text-neutral-400 hover:text-primary-brand hover:border-gold-start shadow-sm transition-all duration-200 group"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
        </button>

        {/* STEP 1: Configuration Flow */}
        {step === 1 && (
          <div className="p-6 sm:p-10 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#631a47] mb-1 block">
                Booking Portal
              </span>
              <h2 className="text-3xl font-serif tracking-tight text-primary-brand">
                Book Consultation
              </h2>
              <p className="text-sm font-medium text-neutral-500 mt-1">
                {currentServiceLabel}
              </p>
            </div>

            {/* Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Card 1: Initial */}
              <button
                type="button"
                onClick={() => setConsultationType("initial")}
                className={`group text-left p-6 rounded-2xl border-2 transition-all duration-300 bg-white flex flex-col justify-between h-full relative overflow-hidden ${
                  consultationType === "initial"
                    ? "border-gold-start shadow-md ring-1 ring-gold-start/20"
                    : "border-primary-brand/10 hover:border-gold-start/40 hover:shadow-sm"
                }`}
              >
                {consultationType === "initial" && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary-brand/5 rounded-bl-3xl flex items-center justify-center text-gold-start">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-gold-start bg-primary-brand/5 px-2.5 py-1 rounded-full w-max mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    60 Minutes
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-brand transition-colors">
                    Initial Consultation
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                    Suitable for first-time patients. Includes diagnostic onboarding, root-cause assessment, and baseline routine planning.
                  </p>
                </div>
              </button>

              {/* Card 2: Follow-up */}
              <button
                type="button"
                onClick={() => setConsultationType("followup")}
                className={`group text-left p-6 rounded-2xl border-2 transition-all duration-300 bg-white flex flex-col justify-between h-full relative overflow-hidden ${
                  consultationType === "followup"
                    ? "border-gold-start shadow-md ring-1 ring-gold-start/20"
                    : "border-primary-brand/10 hover:border-gold-start/40 hover:shadow-sm"
                }`}
              >
                {consultationType === "followup" && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary-brand/5 rounded-bl-3xl flex items-center justify-center text-gold-start">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-gold-start bg-primary-brand/5 px-2.5 py-1 rounded-full w-max mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    45 Minutes
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-brand transition-colors">
                    Follow-up Consultation
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                    For existing patients continuing treatment. Progress review, recovery metrics evaluation, and routine updates.
                  </p>
                </div>
              </button>
            </div>

            {/* Consent Module */}
            <div className="p-4 sm:p-5 rounded-2xl bg-primary-brand/[0.02] border border-primary-brand/5 mb-8 transition-all duration-300">
              <label className={`flex items-start gap-3 select-none ${consultationType === "initial" ? "cursor-pointer" : "cursor-not-allowed"}`}>
                <input
                  type="checkbox"
                  checked={hasConsented}
                  disabled={consultationType === "followup"}
                  onChange={(e) => setHasConsented(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-primary-brand/20 text-primary-brand accent-primary-brand focus:ring-gold-start disabled:opacity-50 transition-all cursor-pointer disabled:cursor-not-allowed"
                />
                <span className="text-sm leading-relaxed text-neutral-600">
                  {consultationType === "initial" ? (
                    <>
                      I have read and agree to Svaparna Health's{" "}
                      <Link 
                        href="/terms-and-conditions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-[#631a47] underline underline-offset-2 hover:text-primary-brand transition-colors"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link 
                        href="/privacy-policy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-[#631a47] underline underline-offset-2 hover:text-primary-brand transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </>
                  ) : (
                    <span className="text-neutral-400">
                      I confirm that I have already accepted Svaparna Health's Terms & Conditions and Privacy Policy.
                    </span>
                  )}
                </span>
              </label>
            </div>

            {/* Step 1 Actions */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-primary-brand/5 bg-[#fffef7]">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-primary-brand/10 bg-white text-neutral-600 font-medium text-sm hover:bg-neutral-50 active:bg-neutral-100 transition-all shadow-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!hasConsented}
                onClick={() => setStep(2)}
                className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-sm shadow-sm flex items-center justify-center gap-2 group transition-all duration-300 bg-gradient-to-r from-gold-start to-gold-end text-primary-brand hover:scale-[1.02] hover:shadow-md disabled:opacity-50 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
              >
                Continue to Booking
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-disabled:translate-x-0" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Calendly Inline Integration */}
        {step === 2 && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* Dynamic Step 2 Header bar */}
            <div className="px-6 py-4 bg-white border-b border-primary-brand/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-16 shrink-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBackToStep1}
                  className="p-2 -ml-2 rounded-full hover:bg-primary-brand/5 text-neutral-500 hover:text-primary-brand transition-all"
                  aria-label="Back to service details"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h3 className="font-serif text-lg text-primary-brand">
                    Book {currentServiceLabel}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mt-0.5 font-medium">
                    <span>
                      {consultationType === "initial" ? "Initial Consultation" : "Follow-up Consultation"}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-primary-brand/10" />
                    <span className="flex items-center gap-1 font-mono text-gold-start">
                      <Clock className="w-3 h-3" />
                      {consultationType === "initial" ? "60 Min" : "45 Min"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Widget Embed Area */}
            <div className="flex-1 bg-white overflow-hidden relative">
              <InlineWidget 
                url={targetUrl} 
                styles={{ 
                  height: "100%",
                  width: "100%",
                }} 
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}