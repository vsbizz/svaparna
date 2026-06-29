import React, { useState } from "react";
import {
  Calendar,
  ClipboardList,
  FileText,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  User,
  HeartHandshake,
} from "lucide-react";
import { motion } from "motion/react";

interface StepType {
  id: number;
  num: string;
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  colorHex: string;
  badgeBg: string;
  iconBg: string;
  borderDashed: string;
  icon: React.ReactNode;
}

export default function OurProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps: StepType[] = [
    {
      id: 0,
      num: "STEP 1",
      badgeText: "DISCOVER",
      title: "Book Your Consultation",
      subtitle: "Online Scheduling",
      description:
        "Choose your care pathway: Online Physiotherapy (India), Online Ayurvedic Consultations (USA, India), or In-Person in Mumbai (Coming Soon).",
      colorHex: "#52133a", // deep plum
      badgeBg: "bg-[#52133a]",
      iconBg: "bg-[#52133a]/10 hover:bg-[#52133a]",
      borderDashed: "border-[#52133a]/30 group-hover:border-[#52133a]",
      icon: <Calendar className="w-7 h-7 text-white" />,
    },
    {
      id: 1,
      num: "STEP 2",
      badgeText: "EVALUATE",
      title: "Initial Assessment",
      subtitle: "1 Hour Comprehensive",
      description:
        "A comprehensive 1-on-1 evaluation with Dr. Aparna to understand your medical history, assess any imbalances and analyse your goals.",
      colorHex: "#844372", // orchid plum
      badgeBg: "bg-[#844372]",
      iconBg: "bg-[#844372]/10 hover:bg-[#844372]",
      borderDashed: "border-[#844372]/30 group-hover:border-[#844372]",
      icon: <ClipboardList className="w-7 h-7 text-white" />,
    },
    {
      id: 2,
      num: "STEP 3",
      badgeText: "STRATEGIZE",
      title: "Personalized Care Plan",
      subtitle: "Evidence-Based Design",
      description:
        "A tailored treatment plan with clear rationales for every physical exercise and Ayurvedic recommendation.",
      colorHex: "#d4af37", // bright gold
      badgeBg: "bg-[#d4af37]",
      iconBg: "bg-[#d4af37]/10 hover:bg-[#d4af37]",
      borderDashed: "border-[#d4af37]/30 group-hover:border-[#d4af37]",
      icon: <FileText className="w-7 h-7 text-white" />,
    },
    {
      id: 3,
      num: "STEP 4",
      badgeText: "RESTORE",
      title: "Ongoing Care",
      subtitle: "45 Mins Dedicated",
      description:
        "Consistent follow-up sessions ensuring Dr. Aparna's expertise every single time.",
      colorHex: "#c38e1a", // warm amber
      badgeBg: "bg-[#c38e1a]",
      iconBg: "bg-[#c38e1a]/10 hover:bg-[#c38e1a]",
      borderDashed: "border-[#c38e1a]/30 group-hover:border-[#c38e1a]",
      icon: <HeartHandshake className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section
      id="process"
      className="pt-24 lg:pt-20 bg-[#fffef7] overflow-hidden border-t border-primary-brand/5 relative"
    >
      {/* Background delicate elements mimicking the professional premium style */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-brand/[0.02] rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-start/[0.02] rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Luxury Tag */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full mb-5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-base uppercase tracking-widest text-primary-brand">
            WHAT TO EXPECT
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your First Visit
        </motion.h2>

        {/* <motion.p 
          className="text-neutral-800 text-sm sm:text-base font-light max-w-xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our patient care timeline. From ease of scheduling to customized clinical treatments designed specifically around your body's physical capabilities.
        </motion.p> */}

        {/* Process Diagram Box Container */}
        <div className="relative mt-16 pb-12 max-w-6xl mx-auto">
          {/* Desktop connecting dashed line */}

          <div className="hidden lg:block absolute top-[108px] left-[12%] right-[11%] h-[2px] border-t-2 border-dashed border-primary-brand/15 -z-10" />
          {/* 4-Column Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 items-start">
            {steps.map((step, index) => {
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center text-center group relative"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Step Serial Label above outer circle */}
                  <span className="text-sm font-bold tracking-widest text-[#a2658d] mb-4 block">
                    {step.num}
                  </span>

                  {/* HIGH-FIDELITY CIRCLE SCHEMA (Exactly matching the style layout uploaded in the prompt) */}
                  <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36">
                    {/* Rotating Dashed Outer Circle Indicator */}
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700 ${step.borderDashed} ${isHovered
                        ? "rotate-45 scale-[1.08]"
                        : "rotate-0 scale-100"
                        }`}
                    />

                    {/* Inner Solid Colored Interactive Circle - Be coloured by default with step colors */}
                    <motion.div
                      className={`w-28 h-28 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isHovered ? "scale-105" : "scale-100"
                        }`}
                      style={{
                        backgroundColor: step.colorHex,
                        border: `1.5px solid ${step.colorHex}25`,
                        boxShadow: isHovered
                          ? `0 10px 25px -5px ${step.colorHex}50`
                          : "0 4px 12px -2px rgba(82, 19, 58, 0.12)",
                      }}
                    >
                      {/* React Icon container */}
                      <div className="transition-all duration-300">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Badged Step tag under circular indicators (Exactly replicates rectangular color block "DISCOVER" from mock image) */}
                  <div
                    className={`text-sm font-bold tracking-[0.25em] text-white px-5.5 py-1.5 uppercase select-none shadow-xs mt-6 transition-all duration-300 rounded-[3px] ${step.badgeBg} ${isHovered ? "scale-105 shadow-md" : "opacity-90"
                      }`}
                  >
                    {step.badgeText}
                  </div>

                  {/* Step Primary Title */}
                  <h3 className="text-base font-bold text-primary-brand mt-5 mb-1 tracking-tight transition-colors duration-300 group-hover:text-gold-start">
                    {step.title}
                  </h3>

                  {/* Step Rich Description Body */}
                  <p className="text-base text-neutral-800 leading-relaxed font-normal max-w-xs mt-3.5 px-4">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Call to Action underneath */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center select-none"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <span className="text-xs sm:text-sm text-neutral-800 font-light">
            Ready to initiate your clinical wellness timeline?
          </span> */}
          {/* <button
            id="process-bottom-cta-visit"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center justify-center gap-2 bg-[#52133a] hover:bg-[#6e1e50] text-white px-7 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 cursor-pointer pointer-events-auto"
          >
            <span>Book Initial Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
