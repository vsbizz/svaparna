"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  // ... (Keep all your existing FAQ data here exactly as before)
  {
    question: "How soon will I start seeing results?",
    answer:
      "Recovery is highly individualized and depends on whether your condition is acute or chronic. While many patients experience noticeable relief within the first 1 to 2 sessions, complex issues require a steady, structured approach. During your initial 1-hour assessment, Dr. Aparna will provide a realistic timeline based on your specific condition and goals.",
  },
  {
    question: "What should I expect during my first session?",
    answer:
      "Your initial 60-minute consultation involves a comprehensive 1-on-1 assessment with Dr. Aparna to evaluate your medical history, movement, and personal goals. From there, she will develop a personalized care plan tailored specifically to you.",
  },
  {
    question:
      "What is the difference between a Physiotherapy consultation and an Ayurvedic consultation?",
    answer:
      "Physiotherapy focuses on physical rehabilitation, movement disorders, and pain management (available in-clinic in Mumbai or online within India). The Ayurvedic consultation is holistic health counseling focused on evaluating your Prakrti (individual constitution), imbalances, gut health and providing dietary, lifestyle, and herbal recommendations (available online worldwide).",
  },
  // {
  //   question:
  //     "How does the Ayurvedic consultation work alongside physical therapy?",
  //   answer:
  //     "While Physiotherapy addresses the structural and musculoskeletal causes of your pain, Ayurvedic principles support your body's internal healing environment. Together, they treat the whole person, optimizing recovery and preventing future injuries rather than just masking symptoms. Ayurvedic recommendations based on diet, lifestyle and home remedies are provided to better support recovery.",
  // },
  {
    question: "Can I consult with Dr. Aparna from outside India?",
    answer:
      "Yes! Our Ayurvedic consultations are available online globally. However, due to telehealth regulations, Physiotherapy diagnostics and treatments are strictly provided in-clinic or online within India.",
  },
  {
    question: "Do treatment packages expire?",
    answer:
      "Yes, To ensure you maintain consistency and stay on track with your recovery, package validity periods start from the date of purchase. Please note that discounted packages are strictly utilized for the specific condition/consultation they were purchased for.",
  },
  {
    question: "How do online Physiotherapy sessions work?",
    answer:
      "For patients residing in India including Mumbai, we offer convenient virtual Physiotherapy appointments. Using a secure video link, Dr. Aparna will conduct a thorough movement analysis, visually assess your condition, and guide you step-by-step through therapeutic exercises and self-management strategies from the comfort of your home.",
  },
  {
    question: "Do I need to buy any special equipment for my home exercises?",
    answer:
      "Not necessarily. Most of our rehabilitation protocols are designed using your own body weight or simple household items. If a specific tool (like a resistance band or a stretching strap) would significantly accelerate your recovery, Dr. Aparna will provide accessible recommendations during your session.",
  },
  {
    question: "Is it safe to undergo Physiotherapy while I am pregnant?",
    answer:
      "Absolutely. Dr. Aparna holds a CAPP-OB certification specifically for Pregnancy and Postpartum care. Prenatal physiotherapy is a safe, evidence-based way to manage pregnancy-related lower back pain, prepare your pelvic floor, and maintain healthy mobility.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Because we block out 45 to 60 minutes of 1-on-1 time exclusively for you, we require at least 24 hours' notice for any cancellations or rescheduling. This allows us to offer that time slot to another person who may urgently need care.",
  },
  {
    question:
      "What is the ideal protocol to be followed during the first appointment and follow up sessions?",
    answer:
      "Please be on time for your sessions so that you get the full benefit of the appointment. Please complete your paperwork and payments on time so that you are ready for your first appointment and follow-sessions. Lastly, please be respectful and courteous in your interactions and we will do our best to respect your needs as well. Thank you and we look forward to helping you!",
  },
  {
    question: "Why see a specialist like Dr Aparna for your diagnosis?",
    answer:
      "Most people resort to costly surgeries or invasive options when a lot of support towards healing can be provided through conservative approaches like the integrative care offered at Svaparna Health. Dr Aparna’s clinical and holistic expertise provides the perfect blend to help you resolve your concerns and improve the quality of your life. Dr. Aparna takes the time to truly listen to you and craft an individualized protocol for each person based on their conditions. Her 13+ years of US based rigorous training and experience guarantee an international standard of care.",
  },
  {
    question: "Will I experience any pain during the session?",
    answer:
      "There might be some mild pain noted during your initial assessment or follow up sessions but this is temporary. We try to make sure everyone feels as comfortable as possible during their sessions.",
  },
  {
    question: "Do you accept insurance?",
    answer: "No, we don't accept any insurance.",
  },
  {
    question: "Do I need a referral from another doctor?",
    answer: "No, a referral from another doctor is not required",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Previous medical and surgical reports, imaging such as MRI/CT Scan/Ultrasound/X-ray reports, lab reports related to bloodwork and other tests, list of current medications and supplements. Your detailed medical history and background helps us thoroughly analyze your concerns and find the best solutions for your care.",
  },
  {
    question: "How long are my appointments?",
    answer:
      "The initial consultation is an hour long and the follow-up sessions are 45 minutes long",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Cash, UPI for Indian clients and PayPal for US clients",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFaq = useMemo(() => faqs[activeIndex], [activeIndex]);

  return (
    <>
      {/* 1. REMOVED ALL OVERFLOW CLASSES from the main wrapper */}
      <main className="bg-[#fffef7] text-primary-brand relative w-full">
        {/* Hero */}
        <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          {/* Isolated the overflow hidden so background blur doesn't cause scrolling, but doesn't break sticky */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold-start/5 blur-3xl" />
            <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-primary-brand/5 blur-3xl" />
            <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-gold-start/10 blur-3xl" />
          </div>

          <motion.div
            className="relative mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
                FAQs
              </div>

              <h1 className="mt-5 font-serif text-3xl leading-tight text-primary-brand sm:text-4xl lg:text-6xl">
                Frequently Asked Questions
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-700 sm:text-base lg:text-lg">
                Explore answers to the most common questions about treatment,
                consultations, policies, and care pathways.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Interactive FAQ */}
        <section className="px-4 py-32 sm:px-6 lg:px-8">
          {/* 2. REMOVED lg:items-start. This allows both columns to stretch to the bottom of the grid. */}
          <motion.div
            className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Left Side: Question navigator */}
            {/* Left Side: Question navigator */}
            <div className="h-fit">
              <div className="mb-5 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#4b8078]" />
                <p className="text-xs uppercase tracking-[0.28em] text-primary-brand/55">
                  Select a question
                </p>
              </div>

              {/* Scrollable Questions Container */}
              <div className="h-[75vh] overflow-y-auto pr-3 space-y-2 scrollbar-thin scrollbar-thumb-primary-brand/15 scrollbar-track-transparent">
                {faqs.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.question}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group w-full rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-primary-brand/15 bg-white shadow-sm"
                          : "border-transparent bg-transparent hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isActive
                              ? "bg-primary-brand/5 text-primary-brand"
                              : "bg-primary-brand/5 text-primary-brand/70"
                          }`}
                        >
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm leading-6 transition-colors sm:text-base ${
                              isActive
                                ? "font-medium text-primary-brand"
                                : "text-neutral-700"
                            }`}
                          >
                            {item.question}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* 3. RIGHT SIDE TRACK: This div spans the whole vertical height of the grid */}
            {/* Right Side: sticky answer card */}
            <div className="relative w-full">
              <div className="lg:sticky lg:top-[40vh] w-full">
                <div className="absolute -right-10 top-0 hidden h-24 w-24 rounded-full bg-primary-brand/5 blur-2xl lg:block" />

                <div className="relative overflow-hidden rounded-[2.75rem] border border-primary-brand/10 bg-white/85 shadow-sm backdrop-blur-sm">
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-brand/5">
                        <Sparkles className="h-5 w-5 text-[#4b8078]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-primary-brand/55">
                          Answer
                        </p>
                        <p className="mt-1 text-sm text-primary-brand/70">
                          {String(activeIndex + 1).padStart(2, "0")} /{" "}
                          {String(faqs.length).padStart(2, "0")}
                        </p>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFaq.question}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="mt-8"
                      >
                        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-primary-brand sm:text-4xl">
                          {activeFaq.question}
                        </h2>

                        <div className="mt-6 max-w-3xl border-l border-primary-brand/10 pl-5 sm:pl-7">
                          <p className="text-base leading-8 text-neutral-800 sm:text-lg">
                            {activeFaq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-10 flex flex-wrap gap-3">
                      <Link
                        href="/consultations"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-start to-gold-end px-5 py-2.5 text-sm font-semibold text-primary-brand shadow-sm transition-transform hover:scale-[1.02]"
                      >
                        Book an Appointment
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href="https://wa.me/919892924914?text=Hello%20Dr.%20Aparna%2C%20I%20have%20a%20question."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-white px-5 py-2.5 text-sm font-semibold text-primary-brand shadow-sm transition-transform hover:scale-[1.02]"
                      >
                        Chat on WhatsApp
                        <MessageCircle className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
