"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Award,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  Waves,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import CTABand from "../components/home/CTABand";

const credentials = [
  "Post-Graduate Doctor of Physical Therapy (UIC)",
  "BSc Molecular and Cellular Biology (UIUC)",
  "Level 2 Ayurvedic Practitioner (Kerala Ayurveda Academy, USA)",
  "Certified Vestibular Rehabilitation Specialist (Cert VRS)",
  "CAPP-OB Certified (Pregnancy & Post-Partum Care)",
  "Herman & Wallace Certified (Pediatric Bowel and Bladder)",
  "Ayurvedic Pulse Diagnosis Certified",
];

const focusAreas = [
  {
    title: "Musculoskeletal Dysfunction & Chronic Pain",
    description:
      "Precise treatment for movement-related pain, recurring injuries, and long-term musculoskeletal conditions.",
    icon: Stethoscope,
  },
  {
    title: "Vestibular Rehabilitation",
    description:
      "Evidence-based care for dizziness, vertigo, balance concerns, and vestibular dysfunction.",
    icon: Waves,
  },
  {
    title: "Pre & Post-Surgical Rehabilitation",
    description:
      "Structured support to restore mobility, strength, and confidence before and after surgery.",
    icon: ClipboardList,
  },
  {
    title: "Pelvic Floor Dysfunction",
    description:
      "Comprehensive care for pelvic health concerns that affect daily function and quality of life.",
    icon: ShieldCheck,
  },
  {
    title: "Pregnancy & Postpartum Women’s Health",
    description:
      "Specialized support during pregnancy, recovery after childbirth, and beyond.",
    icon: HeartHandshake,
  },
  {
    title: "Clinical Instructor & Pro Bono Service",
    description:
      "Clinical instructor for students in community college settings in the USA and free Physiotherapy care through Pro Bono Clinics.",
    icon: Award,
  },
];

const expectations = [
  {
    title: "1-on-1 Attention",
    description:
      "Every visit is personally led by Dr. Aparna. No handoffs, no generic templates.",
    icon: UserCheck,
  },
  {
    title: "Deep Listening",
    description:
      "Your concerns are reviewed carefully so your plan reflects the full picture, not just symptoms.",
    icon: MessageCircle,
  },
  {
    title: "Customized Guidance",
    description:
      "Each recommendation is tailored to your condition, goals, and recovery timeline.",
    icon: Sparkles,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
      {children}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">
      {/* Hero */}
      <section
        id="about-hero"
        className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gold-start/5 blur-3xl" />
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-brand/5 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-gold-start/10 blur-3xl" />
        </div>

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>About Svaparna Health</SectionLabel>

            <h1 className="mt-6 font-serif text-4xl leading-tight text-primary-brand sm:text-5xl lg:text-7xl">
              Meet Dr. Aparna Sekhar
            </h1>

            <p className="mt-4 text-lg text-primary-brand/80 sm:text-xl">
              PT, DPT, Cert VRS
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
              Senior Physiotherapist, Ayurvedic Practitioner & Integrative
              Health Specialist
            </p>
          </div>

          {/* Image + Story */}
          <motion.div
            className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="/assets/images/DrAparna.png"
                  alt="Dr. Aparna Sekhar"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeUp}>
              <div className="mb-8 border-l-2 border-primary-brand/15 pl-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-brand/60">
                  1-on-1 Care
                </p>

                <h2 className="mt-3 font-serif text-3xl text-primary-brand sm:text-4xl">
                  Every visit is personally led
                </h2>

                <p className="mt-3 text-neutral-600">
                  You receive 100% of my expertise, one-on-one, at every single
                  visit.
                </p>
              </div>

              <div className="space-y-5 text-base leading-8 text-neutral-800">
                <p>
                  Recovery is rarely a straight line. Most people who find their
                  way to Svaparna Health have already tried the conventional
                  route. They are not looking for another generic,
                  one-size-fits-all approach. They are looking for someone who
                  will listen, look deeper, and treat them as a whole person
                  rather than just a set of symptoms.
                </p>

                <p>That is exactly why I built Svaparna Health.</p>

                <p>
                  As a Senior Integrative Health Specialist, I believe true
                  healing requires more than superficial fixes. It requires
                  precise, in-depth, and customized guidance. Here, you are
                  never handed off to an intern or an assistant. You receive
                  100% of my expertise, one-on-one, at every single visit.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="mt-16 border-t border-primary-brand/10 pt-12">
            <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="font-serif text-5xl text-primary-brand">
                  13+
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="font-serif text-5xl text-primary-brand">
                  USA
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  Clinical Practice
                </div>
              </div>

              <div>
                <div className="font-serif text-5xl text-primary-brand">
                  100%
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  One-on-One Care
                </div>
              </div>

              <div>
                <div className="font-serif text-5xl text-primary-brand">2</div>
                <div className="mt-2 text-sm text-neutral-600">
                  Healing Disciplines
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/#consultations"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-start to-gold-end px-6 py-3 text-sm font-semibold text-primary-brand shadow-sm transition-transform hover:scale-[1.02]"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://wa.me/919892924914?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-white px-6 py-3 text-sm font-semibold text-primary-brand shadow-sm"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Experience & Training */}
      <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="relative mx-auto max-w-7xl rounded-[3rem] border border-primary-brand/10 bg-[#FCFBF8] px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Top Badge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-brand/10 bg-white shadow-sm">
              <Award className="h-10 w-10 text-primary-brand" />
            </div>
          </div>

          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-start">
              International Pedigree & Clinical Expertise
            </div>

            <h2 className="mt-6 font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-5xl">
              International Clinical Experience Rooted in Evidence-Based Care
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-700">
              I am a Doctor of Physical Therapy with more than thirteen years of
              clinical experience practicing across the United States in
              outpatient rehabilitation settings. Throughout my career, I have
              worked with individuals across all age groups, helping them
              recover from injuries, restore function after surgery, manage
              chronic conditions, and improve long-term quality of life.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-neutral-700">
              In addition to my clinical practice, I have served as a Clinical
              Instructor for students in Community College settings in the USA
              and partnered with Pro Bono Clinics to provide free Physiotherapy
              care to those in need.
            </p>
          </div>

          {/* Main Layout */}
          <div className="relative mt-20 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-12">
            {/* LEFT SIDE */}
            <div className="relative space-y-20 lg:pr-10">
              <div className="absolute right-[20px] top-0 hidden h-full w-px bg-primary-brand/10 lg:block" />

              {focusAreas.slice(0, 3).map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`relative ${index === 1 ? "lg:mt-10" : ""}`}
                  >
                    <div className="absolute right-[-39px] top-4 hidden h-10 w-10 items-center justify-center rounded-full bg-[#FCFBF8] lg:flex">
                      <Icon className="h-5 w-5 text-[#4b8078]" />
                    </div>

                    <div className="max-w-[280px] text-center lg:ml-auto lg:text-right">
                      <h3 className="font-serif text-2xl leading-tight text-primary-brand">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-700">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER IMAGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mx-auto w-full max-w-[560px]"
            >
              <div className="rounded-[2.75rem] border border-primary-brand/10 bg-white p-8">
                <div className="rounded-[2.25rem] border border-primary-brand/10 bg-white p-5">
                  <div className="overflow-hidden rounded-[1.75rem]">
                    <img
                      src="/assets/images/3.jpg"
                      alt="Dr. Aparna Sekhar"
                      className="aspect-[4/6] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="relative space-y-20 lg:pl-10">
              <div className="absolute left-[20px] top-0 hidden h-full w-px bg-primary-brand/10 lg:block" />

              {focusAreas.slice(3, 6).map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`relative ${index === 1 ? "lg:mt-10" : ""}`}
                  >
                    <div className="absolute left-[-39px] top-4 hidden h-10 w-10 items-center justify-center rounded-full bg-[#FCFBF8] lg:flex">
                      <Icon className="h-5 w-5 text-[#4b8078]" />
                    </div>

                    <div className="max-w-[280px] text-center lg:text-left">
                      <h3 className="font-serif text-2xl leading-tight text-primary-brand">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-700">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Journey to Ayurveda */}
      <section id="journey" className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <SectionLabel>The Journey to Ayurveda</SectionLabel>

            <h2 className="mt-5 font-serif text-3xl text-primary-brand sm:text-4xl lg:text-5xl">
              Discovering the Missing Piece
            </h2>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Image */}
            <motion.div
              className="lg:sticky lg:top-28"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="/assets/images/ayurveda-image.webp"
                  alt="Holistic consultation setting"
                  className="aspect-[4/5] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[18px] top-0 h-full w-px bg-primary-brand/15" />

              <div className="space-y-14">
                {/* Step 1 */}
                <motion.div
                  className="relative pl-16"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary-brand/15 bg-white text-sm font-semibold text-primary-brand">
                    01
                  </div>

                  <h3 className="font-serif text-2xl text-primary-brand">
                    Working Alongside Holistic Health Professionals
                  </h3>

                  <p className="mt-4 text-base leading-8 text-neutral-800">
                    During my professional journey in the US, I had the
                    opportunity to work alongside holistic health professionals,
                    including Acupuncturists, Chiropractors, and Naturopaths.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="relative pl-16"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary-brand/15 bg-white text-sm font-semibold text-primary-brand">
                    02
                  </div>

                  <h3 className="font-serif text-2xl text-primary-brand">
                    A Deeper Professional and Personal Interest
                  </h3>

                  <p className="mt-4 text-base leading-8 text-neutral-800">
                    This sparked a deep professional and personal interest in
                    understanding different holistic systems of knowledge.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="relative pl-16"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary-brand/15 bg-white text-sm font-semibold text-primary-brand">
                    03
                  </div>

                  <h3 className="font-serif text-2xl text-primary-brand">
                    Formal Ayurvedic Training
                  </h3>

                  <p className="mt-4 text-base leading-8 text-neutral-800">
                    I was genuinely impressed with the depth of Ayurvedic
                    science in analyzing the body, mind, and spirit frameworks.
                    After three years of dedicated study at the Kerala Ayurveda
                    Academy in the USA, I became a certified Level 2 Ayurvedic
                    Practitioner.
                  </p>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  className="relative pl-16"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-gold-start/20 bg-gold-start/10 text-sm font-semibold text-primary-brand">
                    04
                  </div>

                  <h3 className="font-serif text-2xl text-primary-brand">
                    An Integrated Approach Today
                  </h3>

                  <p className="mt-4 text-base leading-8 text-neutral-800">
                    Today, I work at the intersection of both worlds, bringing
                    evidence-based Physiotherapy and ancient Ayurvedic
                    principles together into a genuinely integrated approach
                    towards health and balance.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="relative overflow-hidden bg-[#FCFBF8] px-4 py-16 sm:px-6 lg:px-8"
      >
        {/* subtle background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary-brand/5 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-start/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2" />
          <div className="absolute inset-y-0 left-0 w-px bg-white/60" />
        </div>

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Left content */}
            <motion.div variants={fadeUp} className="lg:sticky lg:top-28">
              <SectionLabel>Our Philosophy</SectionLabel>

              <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-5xl">
                Helping You Return to Your Natural State of Balance
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-neutral-700">
                It is a reflection of my own name (Aparna) but more importantly,
                it is the foundational philosophy for my clients: helping you
                return to your true self (SVA-RUPA) and achieve a state of
                lasting holistic balance. If you are motivated to actively
                improve your well-being, ready to be genuinely understood, and
                systematically guided, you are in the right place.
              </p>
            </motion.div>

            {/* Right visual narrative */}
            <motion.div variants={fadeUp} className="relative">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-primary-brand/10 bg-white/80 shadow-sm">
                {/* image */}
                <div
                  className="relative min-h-[560px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/images/handShake.jpg')",
                  }}
                >
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#FCFBF8]/20 to-[#FCFBF8]/92" />
                </div>

                {/* top quote */}
                <div className="absolute left-1/2 top-8 w-[calc(100%-2rem)] -translate-x-1/2 sm:top-10 sm:w-[88%]">
                  <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/70 bg-white/78 px-6 py-6 shadow-sm backdrop-blur-md sm:px-8 sm:py-7">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-brand/5 text-primary-brand">
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary-brand/55">
                          Guiding Principle
                        </p>
                        <p className="mt-3 max-w-xl font-serif text-[1.45rem] leading-[1.35] text-primary-brand sm:text-[1.5rem]">
                          SVAPARNA (स्वपर्णा) is a Sanskrit word meaning
                          self-sustaining and needing nothing external to
                          thrive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom principles strip */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FCFBF8] via-[#FCFBF8]/96 to-transparent px-6 pb-8 pt-24 sm:px-8 sm:pb-9">
                  <div className="mx-auto max-w-4xl">
                    <div className="grid gap-4 md:grid-cols-3 md:divide-x md:divide-primary-brand/10">
                      <div className="flex items-start gap-3 md:pr-6">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <HeartPulse className="h-4 w-4 text-[#4b8078]" />
                        </div>
                        <p className="text-sm leading-7 text-neutral-800">
                          Self-sustaining and needing nothing external to
                          thrive.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 md:px-6">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <Leaf className="h-4 w-4 text-[#4b8078]" />
                        </div>
                        <p className="text-sm leading-7 text-neutral-800">
                          Helping you return to your true self.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 md:pl-6">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <ShieldCheck className="h-4 w-4 text-[#4b8078]" />
                        </div>
                        <p className="text-sm leading-7 text-neutral-800">
                          A state of lasting holistic balance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Credentials & Certifications</SectionLabel>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-5xl">
              Advanced Training Across Modern Rehabilitation & Ayurveda
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-700">
              Combining international physiotherapy expertise with specialized
              Ayurvedic training to provide a truly integrative approach to
              health, recovery, and long-term well-being.
            </p>
          </div>

          {/* Main Layout */}
          <div className="relative mt-20">
            {/* Center Connector */}
            <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-primary-brand/15 to-transparent" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Physiotherapy Side */}
              <motion.div
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-primary-brand/10 bg-white/90 p-8 backdrop-blur-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/assets/images/2.jpg')",
                  }}
                />

                <div
                  className="absolute inset-0 bg-white/30"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-brand/5">
                      <HeartPulse className="h-7 w-7 text-[#4b8078]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-primary-brand/50">
                        Modern Rehabilitation
                      </p>

                      <h3 className="mt-1 font-serif text-3xl text-primary-brand">
                        Physiotherapy
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {credentials
                      .slice(0, Math.ceil(credentials.length / 2))
                      .map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.35, delay: index * 0.04 }}
                          className="flex items-start gap-3 border-b border-primary-brand/10 pb-4"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#4b8078]" />

                          <p className="text-sm leading-7 text-neutral-700">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>

              {/* Center Circle */}
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-primary-brand/10 bg-gradient-to-br from-white to-primary-brand/[0.03] shadow-sm">
                  <div className="absolute inset-3 rounded-full border border-primary-brand/10" />

                  <div className="text-center">
                    <div className="font-serif text-5xl text-primary-brand">
                      +
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-primary-brand/60">
                      Integrated
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ayurveda Side */}
              <motion.div
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-primary-brand/10 bg-white/90 p-8 backdrop-blur-sm"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/assets/images/ayurveda.jpg')",
                  }}
                />

                <div
                  className="absolute inset-0 bg-white/30"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-brand/5">
                      <Leaf className="h-7 w-7 text-[#4b8078]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-primary-brand/50">
                        Holistic Healing
                      </p>

                      <h3 className="mt-1 font-serif text-3xl text-primary-brand">
                        Ayurveda
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {credentials
                      .slice(Math.ceil(credentials.length / 2))
                      .map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.35, delay: index * 0.04 }}
                          className="flex items-start gap-3 border-b border-primary-brand/10 pb-4"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#4b8078]" />

                          <p className="text-sm leading-7 text-neutral-700">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Statement */}
            <div className="mx-auto mt-14 max-w-4xl text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary-brand/10 bg-white px-6 py-3 shadow-sm">
                <Sparkles className="h-4 w-4 text-[#4b8078]" />

                <span className="text-sm font-medium text-primary-brand">
                  Evidence-Based Rehabilitation + Ayurvedic Wisdom
                </span>
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-700">
                The integration of these disciplines allows for a personalized
                treatment approach that addresses not only symptoms, but the
                broader physical, functional, and lifestyle factors influencing
                health.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What to Expect */}
      <section id="expectations" className="px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel>The Svaparna Experience</SectionLabel>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Care That Is Entirely Focused on You
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {expectations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-primary-brand/10 bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex items-baseline gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-brand/5 text-primary-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-primary-brand">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-800">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to Start Your Recovery?"
        description="Book an online Physiotherapy consultation in India, or an online Ayurveda consultation from anywhere in the world. In person appointments are coming soon!"
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
