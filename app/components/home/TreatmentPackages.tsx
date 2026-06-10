"use client";

import { motion } from "motion/react";

export default function TreatmentPackages() {
  return (
    <section
      id="nature-inspired"
      className="relative overflow-hidden border-t border-primary-brand/5 bg-[#fffefd] py-20 text-primary-brand"
      style={{
        backgroundColor: "#fffefd",
        backgroundImage: `
          radial-gradient(#c8a35822 0.8px, transparent 0.8px), 
          radial-gradient(#c8a35822 0.8px, #fffefd 0.8px)
        `,
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0, 12px 12px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffefd] via-[#fffefd]/30 to-[#fffefd]" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-16">
          <div className="mb-5 inline-flex items-center rounded-full border border-primary-brand/10 bg-primary-brand/5 px-5 py-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[#631a47]">
              Our Packages
            </span>
          </div>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-primary-brand sm:text-4xl md:text-5xl">
            Transparent Pricing & Healing Plans
          </h2>
        </div>

        {/*
          Layout: [physio | ayurveda] left 2-col grid + image pinned right
          On mobile: stacks vertically, image shows between sections
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-0 lg:gap-14 xl:gap-16 items-start">
          {/* LEFT: both pricing columns side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px md:bg-primary-brand/8">
            {/* ── Physiotherapy ── */}
            <motion.div
              className="bg-[#fffefd] md:pr-10 pb-12 md:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3 pt-2">
                <span className="h-px w-10 bg-gold-start/50" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-start">
                  Physiotherapy
                </span>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-brand">
                    Consultation Pricing
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">
                    Physiotherapy in India
                  </p>

                  <div className="mt-7 space-y-4">
                    <div className="flex items-center justify-between border-b border-primary-brand/10 pb-3">
                      <span className="text-base text-neutral-900">
                        Initial Consultation
                      </span>
                      <span className="text-lg font-semibold text-primary-brand">
                        ₹2,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-primary-brand/10 pb-3">
                      <span className="text-base text-neutral-900">
                        Follow-up Session
                      </span>
                      <span className="text-lg font-semibold text-primary-brand">
                        ₹1,500
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-primary-brand/10 bg-white/80 p-5 shadow-sm">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-start">
                    Packages
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4 border-b border-primary-brand/10 pb-3">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-primary-brand">
                          6 Sessions
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-neutral-700">
                          Ideal for focused short-term recovery, pain
                          management, mobility improvement, and restoring
                          movement confidence.
                        </p>
                      </div>
                      <span className="shrink-0 text-lg font-semibold text-primary-brand">
                        ₹7,200
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-primary-brand">
                          12 Sessions
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-neutral-700">
                          Comprehensive care plan designed for long-term
                          healing, rehabilitation, and lasting results.
                        </p>
                      </div>
                      <span className="shrink-0 text-lg font-semibold text-primary-brand">
                        ₹12,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Ayurveda ── */}
            <motion.div
              className="bg-[#fffefd] md:pl-10 pt-12 md:pt-0 border-t md:border-t-0 border-primary-brand/8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3 pt-2">
                <span className="h-px w-10 bg-gold-start/50" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-start">
                  Ayurvedic Care
                </span>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-brand">
                    Consultation Pricing
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">
                    Online Ayurvedic consultation across USA & India
                  </p>

                  <div className="mt-7 space-y-4">
                    <div className="border-b border-primary-brand/10 pb-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base text-neutral-900">
                          Initial Consultation
                        </span>
                        <div className="flex flex-col items-end">
                          <span className="text-md font-semibold text-primary-brand">
                            $150 (online-USA)
                          </span>
                          <span className="text-md font-semibold text-primary-brand">
                            ₹2,000 (India)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-primary-brand/10 pb-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base text-neutral-900">
                          Follow-up Session
                        </span>
                        <div className="flex flex-col items-end">
                          <span className="text-md font-semibold text-primary-brand">
                            $75 (online-USA)
                          </span>
                          <span className="text-md font-semibold text-primary-brand">
                            ₹1,500 (India)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-primary-brand/10 bg-white/80 p-5 shadow-sm">
                  <p className="text-sm leading-7 text-neutral-700">
                    Ayurvedic care is available across usa, with personalized
                    guidance tailored to your constitution, lifestyle, and
                    healing goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: sticky image */}
          <motion.div
            className="hidden lg:block lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-brand/8 shadow-[0_25px_60px_rgba(99,26,71,0.10)] bg-[#1a0d14]">
              <img
                src="assets/images/healthcare-pricing.webp"
                alt="consultation and healing therapy"
                className="w-full object-cover object-center block brightness-[0.82] saturate-90"
                style={{ aspectRatio: "3/4" }}
              />

              {/* Overlay */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(99,26,71,0.20) 0%, transparent 45%), " +
                    "linear-gradient(to bottom, transparent 50%, rgba(15,6,12,0.75) 100%)",
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-6xl lg:mt-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
