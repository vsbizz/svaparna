"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: "appointments",
    label: "Appointments",
    items: [
      {
        question: "What should I expect during my first session?",
        answer:
          "Your initial 60-minute consultation involves a comprehensive 1-on-1 assessment with Dr. Aparna to evaluate your medical history, analyse your concerns, and discuss your personal goals. From there, she will develop a personalized care plan tailored specifically to you.",
      },
      {
        question: "How long are my appointments?",
        answer:
          "The initial consultation is an hour long and the follow-up sessions are 45 minutes long",
      },
      {
        question: "What should I bring to my first appointment?",
        answer:
          "Please share any previous medical and surgical reports, imaging such as MRI/CT Scan/Ultrasound/X-ray reports, lab reports related to bloodwork and other tests, list of current medications and supplements. Your detailed medical history and background helps us thoroughly analyze your concerns and find the best solutions for your care.",
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
          "Please be on time for your sessions so that you get the full benefit of the appointment. Please complete your paperwork and payments on time so that you are ready for your first appointment and follow-sessions. We request you to please be respectful and courteous in your interactions and we will do our best to respect your needs as well. Thank you and we look forward to helping you!",
      },
      {
        question: "What payment methods are accepted?",
        answer: "Cash, UPI for Indian clients and PayPal for USA clients",
      },
    ],
  },
  {
    id: "treatment",
    label: "Treatment",
    items: [
      {
        question: "How soon will I start seeing results?",
        answer:
          "Recovery is highly individualized and depends on whether your condition is acute or chronic. While many patients experience noticeable relief within the first 1 to 2 sessions, complex issues require a steady, structured approach. During your initial 1-hour assessment, Dr. Aparna will provide a realistic timeline based on your specific condition and goals.",
      },
      {
        question: "Will I experience any pain during the session?",
        answer:
          " There might be some mild pain noted during your initial assessment or follow up sessions but this is temporary. We try to make sure everyone feels as comfortable as possible during their sessions.",
      },
      {
        question: "Is it safe to undergo Physiotherapy while I am pregnant?",
        answer:
          "Absolutely. Dr. Aparna holds a CAPP-OB certification specifically for Pregnancy and Postpartum care. Prenatal Physiotherapy is a safe, evidence-based way to manage pregnancy-related lower back pain, prepare your pelvic floor, and maintain healthy mobility.",
      },
      {
        question:
          "Do I need to buy any special equipment for my home exercises?",
        answer:
          "Not necessarily. Most of our rehabilitation protocols are designed using your own body weight or simple household items. If a specific tool (like a resistance band or a stretching strap) would significantly accelerate your recovery, Dr. Aparna will provide accessible recommendations during your session.",
      },
    ],
  },
  {
    id: "online",
    label: "Online & Packages",
    items: [
      {
        question: "How do online Physiotherapy sessions work?",
        answer:
          "For patients residing in India including Mumbai, we offer convenient virtual Physiotherapy appointments. Using a secure video link, Dr. Aparna will conduct a thorough movement analysis, visually assess your condition, and guide you step-by-step through therapeutic exercises and self-management strategies from the comfort of your home.",
      },
      {
        question: "Do treatment packages expire?",
        answer:
          "Yes, To ensure you maintain consistency and stay on track with your recovery, package validity periods start from the date of purchase. Please note that discounted packages are strictly utilized for the specific condition/consultation they were purchased for.",
      },
    ],
  },
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "Why see a specialist like Dr Aparna for your diagnosis?",
        answer:
          "Most people resort to costly surgeries or invasive options when a lot of support towards healing can be provided through conservative approaches like the integrative care offered at Svaparna Health. Dr Aparna's clinical and holistic expertise provides the perfect blend to help you resolve your concerns and improve the quality of your life. Dr. Aparna takes the time to truly listen to you and craft an individualized protocol for each person based on their conditions. Her 13+ years of USA based rigorous training and experience guarantee an international standard of care.",
      },
      {
        question:
          "What is the difference between a Physiotherapy consultation and an Ayurvedic consultation?",
        answer:
          "Physiotherapy focuses on physical rehabilitation, movement disorders, and pain management (available in-clinic in Mumbai or online within India). The Ayurvedic consultation is holistic health counseling focused on evaluating your Prakrti (individual constitution), imbalances, gut health and providing dietary, lifestyle, and herbal recommendations (available online worldwide).",
      },
      {
        question:
          "How are Ayurvedic Principles incorporated in Physiotherapy sessions?",
        answer:
          "While Physiotherapy addresses the structural and musculoskeletal causes of your pain, Ayurvedic principles support your body's internal healing environment. Together, they treat the whole person, optimizing recovery and preventing future injuries rather than just masking symptoms. Ayurvedic recommendations based on diet, lifestyle and home remedies are provided to better support recovery.",
      },
      {
        question: "Can I consult with Dr. Aparna from outside India?",
        answer:
          "Yes! Our Ayurvedic consultations are available online globally. However, due to telehealth regulations, Physiotherapy diagnostics and treatments are strictly provided in-clinic or online within India.",
      },
      {
        question: "Do you accept insurance?",
        answer: "No, we don't accept any insurance.",
      },
      {
        question: "Do I need a referral from another doctor?",
        answer: "No, a referral from another doctor is not required",
      },
    ],
  },
];

/* ── Shared accordion card used in the 2-col grid ── */
function FAQCard({
  item,
  id,
  openId,
  onToggle,
}: {
  item: FAQItem;
  id: string;
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  const isOpen = openId === id;
  return (
    <div
      className={`border rounded-[1.5rem] p-6 lg:p-7 transition-all duration-300 bg-[#fffdfc] ${
        isOpen
          ? "border-primary-brand/20 shadow-sm ring-1 ring-primary-brand/5"
          : "border-primary-brand/10 hover:border-primary-brand/20"
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
      >
        <span className="font-serif text-base sm:text-lg font-normal text-primary-brand tracking-tight pr-4 min-h-[3.5rem] flex items-center">
          {item.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
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
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openGridId, setOpenGridId] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenIndex(null);
  };

  const allFAQs = categories.flatMap((cat) =>
    cat.items.map((item, i) => ({ ...item, uid: `${cat.id}-${i}` }))
  );

  return (
    <>

      {/* ── SECTION 2: 2-column grid with all FAQs ── */}
      <section className="py-30 bg-white text-primary-brand border-t border-primary-brand/5">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-12 space-y-3">
            <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#631a47]">
                FAQs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Left column — even indices */}
            <div className="flex flex-col gap-4">
              {allFAQs.filter((_, i) => i % 2 === 0).map((faq) => (
                <FAQCard
                  key={faq.uid}
                  item={faq}
                  id={faq.uid}
                  openId={openGridId}
                  onToggle={(id) => setOpenGridId(openGridId === id ? null : id)}
                />
              ))}
            </div>
            {/* Right column — odd indices */}
            <div className="flex flex-col gap-4">
              {allFAQs.filter((_, i) => i % 2 !== 0).map((faq) => (
                <FAQCard
                  key={faq.uid}
                  item={faq}
                  id={faq.uid}
                  openId={openGridId}
                  onToggle={(id) => setOpenGridId(openGridId === id ? null : id)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
