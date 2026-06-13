"use client";

import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  // Original FAQs
  {
    id: 0,
    question: "Why see a specialist like Dr. Aparna for your diagnosis?",
    answer:
      "Most people resort to costly surgeries or invasive options when significant recovery can often be achieved through conservative, integrative care. At Svaparna Health, Dr. Aparna combines clinical expertise with a holistic approach to help address the root cause of your concerns and improve your quality of life. She takes the time to truly listen, understand your needs, and develop an individualized treatment protocol. With over 13 years of rigorous USA-based training and experience, she provides an international standard of care.",
  },
  {
    id: 1,
    question: "Will I experience any pain during the session?",
    answer:
      "Some patients may experience mild, temporary discomfort during assessments or follow-up treatments, depending on their condition.",
  },
  {
    id: 2,
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring any previous medical or surgical reports, imaging studies such as MRI, CT scans, or X-rays, recent laboratory reports, and a list of your current medications and supplements. These records help us gain a comprehensive understanding of your health history.",
  },
  {
    id: 3,
    question: "How long are appointments?",
    answer:
      "The initial consultation lasts approximately 60 minutes, allowing for a detailed assessment and discussion of your concerns. Follow-up sessions are typically 45 minutes long.",
  },
  // Appointments #1
  {
    id: 4,
    question: "What should I expect during my first session?",
    answer:
      "Your initial 60-minute consultation involves a comprehensive 1-on-1 assessment with Dr. Aparna to evaluate your medical history, movement, and personal goals. From there, she will develop a personalized care plan tailored specifically to you.",
  },
  // Appointments #3
  {
    id: 5,
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Because we block out 45 to 60 minutes of 1-on-1 time exclusively for you, we require at least 24 hours' notice for any cancellations or rescheduling. This allows us to offer that time slot to another person who may urgently need care.",
  },
  // Appointments #5
  {
    id: 6,
    question: "What is the ideal protocol to be followed during the first appointment and follow up sessions?",
    answer:
      "Please be on time for your sessions so that you get the full benefit of the appointment. Please complete your paperwork and payments on time so that you are ready for your first appointment and follow-up sessions. Lastly, please be respectful and courteous in your interactions and we will do our best to respect your needs as well. Thank you and we look forward to helping you!",
  },
  // General #2
  {
    id: 7,
    question: "What is the difference between a Physiotherapy consultation and an Ayurvedic consultation?",
    answer:
      "Physiotherapy focuses on physical rehabilitation, movement disorders, and pain management (available in-clinic in Mumbai or online within India). The Ayurvedic consultation is holistic health counseling focused on evaluating your Prakriti (individual constitution), imbalances, gut health and providing dietary, lifestyle, and herbal recommendations (available online worldwide).",
  },
];

export default function FAQ() {
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white text-primary-brand relative overflow-hidden border-t border-primary-brand/5"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#631a47]">
                FAQs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            onClick={() => router.push("/faq")}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a] shrink-0"
          >
            View All FAQs
            <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-column accordion grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-[1.5rem] p-6 lg:p-7 transition-all duration-300 bg-[#fffdfc] ${isOpen
                    ? "border-primary-brand/20 shadow-xs ring-1 ring-primary-brand/5"
                    : "border-primary-brand/10 hover:border-primary-brand/20"
                  }`}
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-serif text-base sm:text-lg font-normal text-primary-brand tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-primary-brand border-primary-brand text-white"
                        : "bg-[#fcf5fa] border-primary-brand/10 text-primary-brand group-hover:bg-primary-brand/5"
                      }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-base text-neutral-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
