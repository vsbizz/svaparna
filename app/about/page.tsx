"use client";

import { motion } from "motion/react";
import {
  Calendar,
  CheckCircle2,
  HeartPulse,
  Leaf,
  MessageCircle,
} from "lucide-react";
import CTABand from "../components/home/CTABand";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">

      {/* ── 1. HERO / BIO ────────────────────────────────────────────────── */}
      <section id="about-hero" className="relative pt-20 sm:pt-28 pb-0 lg:pt-36">
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center justify-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Meet Our Founder
              </span>
            </div>
          </motion.div>

          {/* Name + titles */}
          <motion.div
            className="text-center mb-14 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal text-primary-brand tracking-tight leading-tight">
              Dr. Aparna Sekhar{" "}
              <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-light text-primary-brand align-middle">
                (PT, DPT, Cert VRS)
              </span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-start to-gold-end">
              Senior Physiotherapist · Ayurvedic Practitioner · Integrative Health Specialist
            </p>
          </motion.div>

          {/* Photo + Bio — two column */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 sm:pb-24 border-b border-primary-brand/8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-primary-brand/10 group">
                <img
                  src="/assets/images/DrAparna.png"
                  alt="Dr. Aparna Sekhar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/80 via-transparent to-transparent" />
                {/* floating card — same as homepage */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-primary-brand/5 shadow-lg">
                  <div className="w-full h-[1px] bg-primary-brand/10 my-2" />
                  <p className="text-base text-neutral-800 leading-relaxed font-normal">
                    <strong>SVAPARNA (स्वपर्णा)</strong> is a Sanskrit word meaning,{" "}
                    <span className="italic font-semibold text-[#631a47]">
                      self-sustaining and self-renewing
                    </span>
                    . It is a reflection of Dr. Aparna's own name and a philosophy
                    for her clients: helping you return to your true self (
                    <strong>sva-rupa</strong>) and achieve a state of holistic balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-base leading-8 text-neutral-700">
              <p>
                Recovery is rarely a straight line. Most people who find their
                way to Svaparna Health have tried the conventional route. They
                are not looking for another generic, one-size-fits-all approach.
                They are looking for someone who will actually listen, look
                deeper, and treat them as a whole person rather than just a set
                of symptoms.
              </p>

              <p className="text-base font-bold text-primary-brand leading-relaxed">
                That is exactly why I built Svaparna Health.
              </p>

              <p>
                I am a Doctor of Physical Therapy (Physiotherapy) with over 13
                years of clinical experience practicing across the United States
                in outpatient rehabilitation. Throughout my career, I have
                successfully worked with clients of all age-groups, guiding them
                through everything from acute injury recovery to complex,
                long-term conditions.
              </p>

              <p>
                In addition to my clinical practice, I have served as a Clinical
                Instructor for students in Community College settings in the USA
                and partnered with Pro Bono Clinics to provide free
                Physiotherapy care to those in need.
              </p>

              <p>
                During my professional journey in the USA, I had the opportunity
                to work alongside holistic health professionals, including
                Acupuncturists, Chiropractors, and Naturopaths. This sparked a
                deep professional and personal interest in understanding different
                holistic systems of knowledge. After three years of dedicated
                study at the Kerala Ayurveda Academy in the USA, I became a
                certified Level 2 Ayurvedic Practitioner.
              </p>

              <p>
                Today, I work at the intersection of both worlds, bringing
                evidence-based Physiotherapy and ancient Ayurvedic principles
                together into a genuinely integrated approach towards health and
                balance. Here, you are never handed off to an intern or an
                assistant. You receive 100% of my expertise, 1-on-1, at every
                single visit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CREDENTIALS ───────────────────────────────────────────────── */}
      <section id="credentials" className="bg-[#fbf5f9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-[#fffef7] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
                Credentials &amp; Certifications
              </div>
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight">
                Advanced Training Across Modern Rehabilitation &amp; Ayurvedic Practice
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Combining International Physiotherapy expertise with specialized
                Ayurvedic training to provide a truly integrative approach to
                health, recovery, and long-term well-being.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                {/* ── Physiotherapy ── */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="border border-primary-brand/10 flex flex-col"
                >
                  <div className="flex items-center gap-4 px-8 sm:px-10 py-7 border-b border-primary-brand/8">
                    <div className="w-11 h-11 rounded-xl border border-primary-brand/10 bg-primary-brand/5 flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5 text-primary-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a358] font-bold mb-0.5">
                        Modern Rehabilitation
                      </p>
                      <h3 className="text-2xl font-normal text-primary-brand leading-none">
                        Physiotherapy
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 divide-y divide-primary-brand/6">
                    {[
                      "Post-Graduate Doctor of Physical Therapy, University of Illinois at Chicago (LEND Fellow)",
                      "Vestibular Rehabilitation Certification (Cert VRS)",
                      "CAPP-OB Certification in Pregnancy & Post-Partum Care (APTA Women's Health)",
                      "Herman & Wallace Certification in Pediatric Bowel and Bladder",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        className="group flex items-start gap-3.5 py-4 sm:py-5 px-4 sm:px-8 lg:px-10 hover:bg-primary-brand/[0.025] transition-colors duration-200"
                      >
                        <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-[#c8a358] group-hover:scale-110 transition-transform duration-200" />
                        <p className="text-sm leading-6 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* + divider circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-11 h-11 rounded-full border border-primary-brand"
                  style={{ background: "#fbf5f9" }}
                >
                  <span className="text-[30px] font-normal text-primary-brand leading-none mb-1">+</span>
                </div>

                {/* ── Ayurveda ── */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="border border-primary-brand/10 border-l-0 flex flex-col border-t-0 lg:border-t"
                >
                  <div className="flex items-center gap-4 px-8 sm:px-10 py-7 border-b border-primary-brand/8">
                    <div className="w-11 h-11 rounded-xl border border-primary-brand/10 bg-primary-brand/5 flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-primary-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a358] font-bold mb-0.5">
                        Holistic Healing
                      </p>
                      <h3 className="text-2xl font-normal text-primary-brand leading-none">
                        Ayurveda
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 divide-y divide-primary-brand/6 flex justify-start flex-col">
                    {[
                      "Level 1 Ayurvedic Health Counselor Certification from Kerala Ayurveda Academy, USA",
                      "Level 2 Ayurvedic Practitioner (Kerala Ayurveda Academy, USA)",
                      "Ayurvedic Pulse Diagnosis Certification",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        className="group flex items-start gap-3.5 py-4 sm:py-5 px-4 sm:px-8 lg:px-10 hover:bg-primary-brand/[0.025] transition-colors duration-200"
                      >
                        <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-[#c8a358] group-hover:scale-110 transition-transform duration-200" />
                        <p className="text-sm leading-6 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CTA BAND ──────────────────────────────────────────────────── */}
      <CTABand
        title="Ready to Start Your Recovery?"
        description="Book an online Physiotherapy consultation in India, or an online Ayurvedic consultation from anywhere in the world. In person appointments are coming soon!"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Book an Appointment",
            href: "/#consultations",
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
          {
            label: "Chat on WhatsApp",
            href: "https://wa.me/919892924914?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation.",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
