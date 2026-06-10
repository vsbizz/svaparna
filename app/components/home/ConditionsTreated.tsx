"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConditionsTreatedProps {
  onBookConsultation: (condition?: string) => void;
}

const nicheItems = [
  {
    id: "01",
    title: "Vertigo (BPPV: Benign Paroxysmal Positional Vertigo)",
    subInfo:
      "Specialized assessment and maneuvers for vertigo and associated dizziness.",
  },
  {
    id: "02",
    title: "Urinary Incontinence in Women",
    subInfo:
      "Targeted pelvic floor rehabilitation to restore control and confidence.",
  },
  {
    id: "03",
    title: "Pregnancy-related low back pain",
    subInfo:
      "Safe, evidence-based physical therapy to manage and relieve back pain during pregnancy.",
  },
  {
    id: "04",
    title: "Diastasis Recti recovery postpartum",
    subInfo:
      "Guided core rehabilitation to safely close abdominal separation after childbirth.",
  },
  {
    id: "05",
    title: "Constipation in children",
    subInfo: "Gentle, non-invasive pediatric bowel management techniques.",
  },
  {
    id: "06",
    title: "Bed wetting in children",
    subInfo: "Pediatric bladder control strategies and pelvic floor education.",
  },
];

const orthoCards = [
  {
    id: "c1",
    tag: "ORTHOPEDIC",
    title: "Spine & Neck",
    description: [
      "Back pain",
      "Neck pain",
      "Lumbar Stenosis",
      "Cervical and lumbar radiculopathy",
      "Back strain",
      "Spondylosis",
      "Disc Herniation",
      "Sciatica",
      "Postural issues",
    ],
  },
  {
    id: "c2",
    tag: "ORTHOPEDIC",
    title: "Joints & Extremities",
    description: [
      "Knee Cartilage issues",
      "Knee ligament sprains",
      "Knee Arthritis",
      "Elbow tendonitis",
      "TMJ disorders",
      "Tension Headaches",
      "Plantar Fasciitis",
      "Ankle Sprains",
      "Shin splints",
      "Frozen Shoulder",
      "Shoulder Tendonitis",
      "Shoulder Labral Tear",
    ],
  },
  {
    id: "c3",
    tag: "POST-OP",
    title: "Surgical Recovery",
    description: [
      "Fracture recovery",
      "Post-operative care after joint replacement",
      "Post-operative care after arthroscopies",
      "Post-operative care after hernia surgery",
      "Post-operative care after C-Section",
    ],
  },
];

const SECTION_IMAGE = "assets/images/Manual-Therapy.webp";

export default function ConditionsTreatedCombined({
  onBookConsultation,
}: ConditionsTreatedProps) {
  const [activeItem, setActiveItem] = useState("01");

  return (
    <section id="conditions" className="bg-white text-primary-brand">
      {/* ── PART 1: NICHE FOCUS ───────────────────────────────────────────── */}
      <div className="border-b border-primary-brand/8">
        {/* Full-width heading — unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="px-6 sm:px-10 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-10 border-b border-primary-brand/8
                     flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="text-center  space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Featured Niche Focus Areas
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              What We Treat.
            </h2>
          </div>
          <p className="text-md text-neutral-500 leading-relaxed max-w-md shrink-0">
            Whether you are navigating pelvic floor issues or recovering from a
            sports injury, we provide targeted, evidence-based care.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] lg:h-[560px]">
          {/* LEFT: image — enhanced overlays + pull-quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-80 sm:h-[440px] lg:h-full overflow-hidden bg-[#1a0d14]
                       border-b lg:border-b-0 lg:border-r border-primary-brand/8"
          >
            <img
              src={SECTION_IMAGE}
              alt="Physiotherapist providing hands-on treatment"
              className="w-full h-full object-cover object-[center_25%] block"
            />

            {/* Layered overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(145deg, rgba(99,26,71,0.28) 0%, transparent 45%), " +
                  "linear-gradient(to bottom, transparent 35%, rgba(15,6,12,0.82) 100%)",
              }}
            />

            {/* Accent bar */}
            <div
              aria-hidden
              className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
              }}
            />

            {/* Ghost "06" — decorative count */}
            <div
              aria-hidden
              className="absolute top-8 right-10 leading-none select-none pointer-events-none"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(5rem, 12vw, 9rem)",
                color: "rgba(255,255,255,0.05)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              06
            </div>
          </motion.div>

          {/* RIGHT: list — hover reveals subInfo, gradient hairline on active */}
          <div className="flex justify-center flex-col px-6 sm:px-10 md:px-12 py-10 sm:py-12 bg-[#fffef7] lg:h-full lg:overflow-y-auto">
            <div className="divide-y divide-primary-brand/6">
              {nicheItems.map((item, index) => {
                const isActive = activeItem === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    onMouseEnter={() => setActiveItem(item.id)}
                    onClick={() => setActiveItem(item.id)}
                    className="group py-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      {/* Number */}
                      <span
                        className="shrink-0 font-light leading-none select-none transition-all duration-300 w-10 text-right"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.85rem",
                          color: isActive ? "#631a47" : "rgba(99,26,71,0.10)",
                        }}
                      >
                        {item.id}
                      </span>

                      {/* Gradient hairline on active */}
                      <div
                        className="self-stretch shrink-0 transition-all duration-300 rounded-full"
                        style={{
                          width: isActive ? "2px" : "1px",
                          background: isActive
                            ? "linear-gradient(to bottom, #9b6b3a, #631a47)"
                            : "rgba(99,26,71,0.08)",
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <h3
                          className="leading-snug transition-all duration-200 text-sm sm:text-2xl"
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            color: isActive ? "#2d1a26" : "#7a5a6a",
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* subInfo expands on active */}
                        {/* <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              key="sub"
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                                marginTop: 5,
                              }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="text-xs text-neutral-400 leading-relaxed overflow-hidden"
                            >
                              {item.subInfo}
                            </motion.p>
                          )}
                        </AnimatePresence> */}
                      </div>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -4,
                        }}
                        transition={{ duration: 0.16 }}
                        className="shrink-0"
                      >
                        <ChevronRight className="w-4 h-4 text-[#631a47]" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 2: ORTHOPEDIC — cards with premium enhancements ─────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center  space-y-4 mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              General Care{" "}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Orthopedic &amp; Post-Operative Care
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {orthoCards.map((card, index) => (
            <motion.div
              key={card.id}
              onClick={() =>
                onBookConsultation(`Therapy consultation for ${card.title}`)
              }
              className="group cursor-pointer rounded-[2rem] p-8 sm:p-10 flex flex-col min-h-[360px]
                         border border-primary-brand/6 relative overflow-hidden
                         hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(99,26,71,0.09)]
                         transition-all duration-300"
              style={{
                background: "linear-gradient(160deg, #f8f4f7 0%, #f2eaf1 100%)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Top accent bar — slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] origin-left scale-x-0
                           group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-t-[2rem]"
                style={{
                  background:
                    "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
                }}
              />

              {/* Ghost index number — bottom right */}
              <span
                aria-hidden
                className="absolute -bottom-5 -right-3 leading-none select-none pointer-events-none
                           opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "9rem",
                  color: "#631a47",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col flex-1">
                <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#9b6b3a] font-mono block mb-4">
                  {card.tag}
                </span>

                <h4
                  className="text-2xl font-normal text-primary-brand tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {card.title}
                </h4>

                {/* Hairline — grows on hover */}
                <div
                  className="h-px mb-5 w-8 group-hover:w-16 transition-all duration-500"
                  style={{
                    background: "linear-gradient(90deg, #9b6b3a, transparent)",
                  }}
                />

                <ul className="space-y-2.5 flex-1">
                  {card.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-600 text-sm leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#631a47]/25 mt-[7px] shrink-0
                                       group-hover:bg-[#631a47]/50 transition-colors duration-300"
                      />
                      <span className="group-hover:text-neutral-700 transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — slides up + fades in on hover */}
                {/* <div
                  className="mt-6 flex items-center gap-2
                               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-250"
                >
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#631a47] font-mono">
                    Book consultation
                  </span>
                  <ChevronRight className="w-3 h-3 text-[#631a47]" />
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
