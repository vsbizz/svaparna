"use client";

import { motion } from "motion/react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import CTABand from "../components/home/CTABand";
import {
  Activity,
  ArrowRight,
  Baby,
  Brain,
  ChefHat,
  HeartPulse,
  Leaf,
  MapPinned,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waves,
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

type PathwayItem = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  cta: string;
  note?: string;
  soon?: boolean;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
      {children}
    </div>
  );
}

function ServiceRow({ number, item }: { number: number; item: ServiceItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group flex gap-3 border-b border-primary-brand/10 py-4 last:border-b-0"
    >
      <div className="flex shrink-0 flex-col items-center pt-0.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-brand/10 bg-white shadow-sm transition-transform duration-300 group-hover:scale-[1.04]">
          <Icon className="h-5 w-5 text-[#4b8078]" />
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-serif text-xl leading-tight text-primary-brand sm:text-2xl">
            {item.title}
          </h3>
        </div>

        <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-800">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function PathwayStrip({ item }: { item: PathwayItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="grid gap-4 border-b border-primary-brand/10 py-5 last:border-b-0 lg:grid-cols-[1fr_auto] lg:items-center"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-brand/5 text-primary-brand">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-xl text-primary-brand sm:text-2xl">
              {item.title}
            </h3>

            {item.soon ? (
              <span className="rounded-full border border-gold-start/20 bg-gold-start/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-primary-brand/70">
                Coming Soon
              </span>
            ) : null}
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-800">
            {item.description}
          </p>

          {item.note ? (
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">
              {item.note}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex justify-start lg:justify-end">
        {item.soon ? (
          <span className="w-full inline-flex items-center justify-center gap-2 group font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border border-neutral-300/40">
            {item.cta}
          </span>
        ) : (
          <Link
            href={item.href}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
          >
            {item.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

const physiotherapyServices: ServiceItem[] = [
  {
    title: "Orthopedic & Sports Rehab",
    description:
      "Targeted relief and recovery from low back pain, neck pain, ankle sprains, and sports injuries.",
    icon: Activity,
  },
  {
    title: "Pre & Post-Surgical Rehabilitation",
    description:
      "Guided, evidence-based recovery to restore structural function and mobility after surgery.",
    icon: RefreshCcw,
  },
  {
    title: "Vestibular Rehabilitation",
    description:
      "Specialized clinical assessment and maneuvers for vertigo (BPPV), dizziness, and balance disorders.",
    icon: Brain,
  },
  {
    title: "Pregnancy & Postpartum Care",
    description:
      "Safe support during pregnancy, management of prenatal low back pain, postpartum rehabilitation, and diastasis recti recovery.",
    icon: HeartPulse,
  },
  {
    title: "Pelvic Floor Rehabilitation",
    description:
      "Specialized women’s health care addressing urinary incontinence and pelvic floor dysfunction.",
    icon: ShieldCheck,
  },
  {
    title: "Pediatric Care",
    description:
      "Gentle, non-invasive management of bowel and bladder issues in children, such as constipation and bedwetting.",
    icon: Baby,
  },
];

const ayurvedaItems: ServiceItem[] = [
  {
    title: "Personalized Prakrti Assessment",
    description:
      "A deep evaluation of your individual constitution and current imbalances.",
    icon: Sparkles,
  },
  {
    title: "Lifestyle & Dietary Coaching",
    description:
      "Practical, daily guidance on nutrition and daily routines (Dinacharya) that support tissue recovery and reduce inflammation.",
    icon: ChefHat,
  },
  {
    title: "Holistic Modalities",
    description:
      "Customized recommendations incorporating yoga, pranayama (breathwork), and specific Ayurveda formulations and herbs to accelerate your recovery and support overall well-being.",
    icon: Leaf,
  },
];

const pathways: PathwayItem[] = [
  {
    title: "In-Clinic Care (India)",
    description:
      "Experience our full spectrum of hands-on Physiotherapy and Integrative Ayurveda Care at our clinic.",
    href: "/consultations/offline-india",
    cta: "Explore Offline Consultations (India)",
    note: "Coming Soon! We are in the process of constructing an integrative health clinic space to host our patients.",
    soon: true,
    icon: MapPinned,
  },
  {
    title: "Virtual Telehealth (India)",
    description:
      "Secure, online Physiotherapy movement analysis and Ayurvedic Counseling from the comfort of your home.",
    href: "#",
    cta: "Explore Online Consultations (India)",
    icon: Waves,
  },
  {
    title: "Global Wellness (International / US)",
    description:
      "Access Ayurvedic lifestyle coaching, diet, and holistic recommendations from anywhere in the world.",
    href: "#",
    cta: "Explore Online Consultations (Global)",
    icon: Sparkles,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold-start/5 blur-3xl" />
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-brand/5 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-gold-start/10 blur-3xl" />
        </div>

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Services</SectionLabel>

            <h1 className="mt-5 font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-6xl">
              Comprehensive Care. One Unified Philosophy.
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-700 sm:text-base lg:text-lg">
              From everyday pain to highly specialized recovery, explore our
              integrative approach to sustainable healing.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Integrative Difference */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Visual side */}
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-primary-brand/5 blur-2xl" />
            <div className="overflow-hidden rounded-[2.75rem] border border-primary-brand/10 bg-white shadow-sm">
              <img
                src="assets/images/integrative-diffrence.jpg"
                alt="Therapeutic care"
                className="aspect-[4/4] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-brand/50">
              <span className="h-px w-10 bg-primary-brand/15" />
              integrative care
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-6">
            <SectionLabel>The Integrative Difference</SectionLabel>

            <h2 className="mt-4 max-w-xxl font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-4xl">
              The cause of your pain is not just managed, it is investigated,
              understood, and addressed at its root.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-neutral-800 sm:text-base lg:text-lg">
              At Svaparna Health, We do not just treat the symptom. By blending
              the biomechanical precision of evidence-based Physiotherapy with
              the holistic wisdom of Ayurvedic Principles, we actively support
              your body &apos; s natural healing environment. Every exercise is
              prescribed with a deep medical rationale, and every lifestyle
              recommendation is tailored to your unique constitution.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 border-t border-primary-brand/10 pt-4">
                <Activity className="mt-1 h-5 w-5 shrink-0 text-[#4b8078]" />
                <div>
                  <div className="font-medium text-primary-brand">
                    Biomechanics
                  </div>
                  <div className="mt-1 text-sm leading-6 text-neutral-700">
                    Evidence-led movement care.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-primary-brand/10 pt-4">
                <Leaf className="mt-1 h-5 w-5 shrink-0 text-[#4b8078]" />
                <div>
                  <div className="font-medium text-primary-brand">Ayurveda</div>
                  <div className="mt-1 text-sm leading-6 text-neutral-700">
                    Holistic wisdom for balance.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-primary-brand/10 pt-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#4b8078]" />
                <div>
                  <div className="font-medium text-primary-brand">
                    Precision
                  </div>
                  <div className="mt-1 text-sm leading-6 text-neutral-700">
                    Tailored care for each body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Physiotherapy Services */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Physiotherapy Services</SectionLabel>

            <h2 className="mt-4 max-w-5xl font-serif text-2xl leading-[1.15] tracking-[-0.02em] text-primary-brand sm:text-3xl lg:text-4xl">
              Our Physical Rehabilitation services are rooted in international
              standards of care, targeting the physical structures of the body
              to restore function, mobility, and strength.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr_1fr] lg:items-start">
            <div className="space-y-0">
              {physiotherapyServices.slice(0, 3).map((item, index) => (
                <ServiceRow key={item.title} number={index + 1} item={item} />
              ))}
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2.5rem] border border-primary-brand/10 bg-white shadow-sm">
                <img
                  src="assets/images/4.jpg"
                  alt="Physiotherapy care"
                  className="aspect-[4/5] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-0">
              {physiotherapyServices.slice(3, 6).map((item, index) => (
                <ServiceRow key={item.title} number={index + 4} item={item} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ayurvedic Integration */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] border border-primary-brand/10 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1600"
                alt="Ayurvedic wellness"
                className="aspect-[4/5] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <SectionLabel>Ayurvedic Integration</SectionLabel>
              <h2 className="mt-4 max-w-xxl font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-4xl">
                True healing happens when the body is in balance. Our Ayurvedic
                care focuses on your internal environment.
              </h2>

              <div className="mt-8 rounded-[2rem] border border-primary-brand/10 bg-white/80 px-5 shadow-sm">
                {ayurvedaItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="flex gap-3 border-b border-primary-brand/10 py-5 last:border-b-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-brand/5 text-primary-brand">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl text-primary-brand sm:text-2xl">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-neutral-800">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Choose Your Care Pathway */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Choose Your Care Pathway</SectionLabel>

            <h2 className="mt-4 max-w-5xl font-serif text-2xl leading-[1.15] tracking-[-0.02em] text-primary-brand sm:text-3xl lg:text-4xl">
              Because our clinical and holistic services are regulated
              differently across international borders, please select the
              consultation path that matches your current location.
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[3rem] border border-primary-brand/10 bg-white/80 px-4 shadow-sm sm:px-6 lg:px-8">
            {pathways.map((item) => (
              <PathwayStrip key={item.title} item={item} />
            ))}
          </div>
        </motion.div>
      </section>

      <CTABand
        title="Ready to Start Your Recovery?"
        description="Book an online Physiotherapy consultation in India, or an online Ayurveda consultation from anywhere in the world. In person appointments are coming soon!"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Book an Appointment",
            href: "#",
            icon: <ArrowRight className="h-4 w-4" />,
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
