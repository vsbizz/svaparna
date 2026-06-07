import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const router = useRouter();

  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 0,
      question: "Why see a specialist like Dr. Aparna for your diagnosis?",
      answer:
        "Most people resort to costly surgeries or invasive options when significant recovery can often be achieved through conservative, integrative care. At Svaparna Health, Dr. Aparna combines clinical expertise with a holistic approach to help address the root cause of your concerns and improve your quality of life. She takes the time to truly listen, understand your needs, and develop an individualized treatment protocol. With over 13 years of rigorous US-based training and experience, she provides an international standard of care.",
    },
    {
      id: 1,
      question: "Will I experience any pain during the session?",
      answer:
        "Some patients may experience mild, temporary discomfort during assessments or follow-up treatments, depending on their condition. Our priority is to ensure you feel as comfortable as possible throughout your visit, and all techniques are adapted to your comfort level.",
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
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleScrollToBooking = () => {
    const bookingSection =
      document.getElementById("booking-modal-trigger") ||
      document.getElementById("contact");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Branding copy & Floating CTA Button */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-28">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              FAQs
            </span>

            {/* Heading can still use primary colors/plum */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="pt-4">
              <button
                id="btn-faq-view-more"
                onClick={() => router.push("/faq")}
                className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
              >
                View More
                <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordion style dropdown list */}
          <div className="lg:col-span-7 w-full flex flex-col space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-container-${faq.id}`}
                  className={`border rounded-[1.5rem] p-6 lg:p-7 transition-all duration-300 bg-[#fffdfc] ${
                    isOpen
                      ? "border-primary-brand/20 shadow-xs ring-1 ring-primary-brand/5"
                      : "border-primary-brand/10 hover:border-primary-brand/20"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="font-sans text-base sm:text-lg font-normal text-primary-brand tracking-tight pr-4">
                      {faq.question}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#fcf5fa] border-primary-brand/10 text-primary-brand rotate-180"
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
                        <div className="pt-4 text-base text-neutral-800 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
