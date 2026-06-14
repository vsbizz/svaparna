"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConditionsTreatedProps {
  onBookConsultation: (condition?: string) => void;
}

// ── Add your local image paths here ──────────────────────────────────────────
const nicheItems = [
  {
    id: "01",
    title: "Vertigo (BPPV: Benign Paroxysmal Positional Vertigo)",
    subInfo:
      "Specialized assessment and maneuvers for vertigo and associated dizziness.",
    image: "/assets/images/bppv.png",
  },
  {
    id: "02",
    title: "Urinary Incontinence in Women",
    subInfo:
      "Targeted pelvic floor rehabilitation to restore control and confidence.",
    image: "/assets/images/urinary-incontinence.jpg",
  },
  {
    id: "03",
    title: "Pregnancy-related low back pain",
    subInfo:
      "Safe, evidence-based physical therapy to manage and relieve back pain during pregnancy.",
    image: "/assets/images/pregnancy-back-pain.jpeg",
  },
  {
    id: "04",
    title: "Diastasis Recti recovery postpartum",
    subInfo:
      "Guided core rehabilitation to safely close abdominal separation after childbirth.",
    image: "/assets/images/recti.jpg",
  },
  {
    id: "05",
    title: "Constipation in children",
    subInfo: "Gentle, non-invasive pediatric bowel management techniques.",
    image: "/assets/images/constipation-in-children.webp",
  },
  {
    id: "06",
    title: "Bed wetting in children",
    subInfo: "Pediatric bladder control strategies and pelvic floor education.",
    image: "/assets/images/bed-wetting-children.jpeg",
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

// Fallback shown when no per-item image is hovered yet
const DEFAULT_IMAGE = "/assets/images/Manual-Therapy.webp";

export default function ConditionsTreatedCombined({
  onBookConsultation,
}: ConditionsTreatedProps) {
  const [activeItem, setActiveItem] = useState("01");

  const activeNiche = nicheItems.find((n) => n.id === activeItem)!;
  // Use the item's specific image if provided, otherwise fall back to default
  const currentImage = activeNiche.image || DEFAULT_IMAGE;

  return (
    <section id="conditions" className="bg-white text-primary-brand">
      {/* ── PART 1: NICHE FOCUS ───────────────────────────────────────────── */}
      <div className="border-b border-primary-brand/8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="px-6 sm:px-10 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-10 border-b border-primary-brand/8
                     flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Featured Niche Focus Areas
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              What We Treat
            </h2>
          </div>
          <p className="text-md text-neutral-500 leading-relaxed max-w-md shrink-0">
            Whether you are navigating pelvic floor issues or recovering from a
            sports injury, we provide targeted, evidence-based care.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] lg:h-[560px]">
          {/* LEFT: image panel with reveal crossfade */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-60 sm:h-[360px] lg:h-full overflow-hidden bg-[#1a0d14]
                       border-b lg:border-b-0 lg:border-r border-primary-brand/8"
          >
            {/*
              All 6 images are pre-rendered in the DOM, stacked.
              The active one gets opacity-100 + scale(1), others are opacity-0 + scale(1.04).
              This gives a smooth reveal without AnimatePresence mount/unmount flicker.
              clipPath slides from left-to-right on the active image for the reveal effect.
            */}
            {nicheItems.map((item) => {
              const isActive = item.id === activeItem;
              const src = item.image || DEFAULT_IMAGE;
              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.06,
                  }}
                  transition={{
                    opacity: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                    scale: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  style={{ zIndex: isActive ? 1 : 0 }}
                >
                  <img
                    src={src}
                    alt={item.title}
                    className={`w-full h-full object-cover object-[center_25%] block`}
                  />
                </motion.div>
              );
            })}

            {/* Layered overlay — always on top of images */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(145deg, rgba(99,26,71,0.28) 0%, transparent 45%), " +
                  "linear-gradient(to bottom, transparent 35%, rgba(15,6,12,0.82) 100%)",
              }}
            />

            {/* Accent bar */}
            <div
              aria-hidden
              className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
              }}
            />

            {/* Active condition label — bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <p
                    className="text-white text-base sm:text-lg font-normal leading-snug max-w-xs"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {activeNiche.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: interactive list */}
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
                      {/* Gradient hairline */}
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

      {/* ── PART 2: ORTHOPEDIC ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            General Orthopedic & Post-Operative Care
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {orthoCards.map((card, index) => (
            <motion.div
              key={card.id}
              onClick={() =>
                onBookConsultation(`Therapy consultation for ${card.title}`)
              }
              className={`relative group cursor-pointer rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 bg-[#f5f4ef]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <span className="text-[10px] text-[#a39775] sm:text-xs font-bold tracking-[0.2em] uppercase mb-5 block ">
                  {card.tag}
                </span>

                <h4 className="font-serif text-2xl font-normal text-primary-brand tracking-tight mb-5">
                  {card.title}
                </h4>

                <ul className="space-y-3">
                  {card.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-700 text-base leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-start mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
