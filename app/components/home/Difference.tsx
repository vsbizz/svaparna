import {
  UserCheck,
  GraduationCap,
  HeartHandshake,
  Award,
  Sparkles,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";

interface DifferenceProps {
  onBookClick: () => void;
}

export default function Difference({ onBookClick }: DifferenceProps) {
  const values = [
    {
      id: "val-1",
      icon: <UserCheck className="w-8 h-8 text-primary-brand" />,
      title: "1-on-1 Care",
      desc: "You will never be handed off to an intern or an assistant. You receive 100% of Dr. Aparna’s expertise at every visit. No superficial fixes, just precise, in-depth, customized guidance.",
    },
    {
      id: "val-2",
      icon: <GraduationCap className="w-8 h-8 text-primary-brand" />,
      title: "International Standards",
      desc: "Over 13 years of clinical experience in the USA with a Doctor of Physical Therapy (DPT) degree. Every exercise is prescribed with a deep, evidence-based rationale.",
    },
    {
      id: "val-3",
      icon: <HeartHandshake className="w-8 h-8 text-primary-brand" />,
      title: "Integrative Approach",
      desc: "We don't just treat the symptom. By blending Physiotherapy and Ayurvedic Practices, we support your body's natural healing environment.",
    },
    {
      id: "val-4",
      icon: <Award className="w-8 h-8 text-primary-brand" />,
      title: "Niche Specializations",
      desc: "Pelvic Floor, Pediatric Bowel/Bladder, Vestibular Rehab, and Postpartum Recovery: specialized clinical areas most standard therapy centers don't cover.",
    },
  ];

  return (
    <section
      id="difference"
      className="py-16 bg-[#fffef7] px-4 sm:px-6 lg:px-8"
    >
      {/* Outer rounded card duplicating the beautiful Flexora style but aligned to Svaparna brand guidelines */}
      <motion.div
        className="relative max-w-9xl mx-auto rounded-[24px] md:rounded-[48px] overflow-hidden shadow-sm bg-neutral-50/90 border border-primary-brand/10 p-5 sm:p-10 md:p-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Decorative background blurs to mimic professional organic modern layout */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold-end/10 rounded-full blur-3xl pointer-events-none -translate-y-16"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-brand/5 rounded-full blur-3xl pointer-events-none translate-y-16"></div>

        {/* Header Block centered */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              The Svaparna Difference
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Expert Care, Every Single Session
          </h2>
        </div>

        {/* 4-Column / Grid Layout matching image spec */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto mb-12">
          {values.map((v) => (
            <div
              key={v.id}
              id={v.id}
              className="flex flex-col items-center text-center p-5 sm:p-8 border border-primary-brand/5 rounded-[2rem] hover:ring-2 hover:ring-gold-start/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon Container with centered layout */}
              <div className="w-16 h-16 rounded-2xl bg-primary-brand/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {v.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-base text-primary-brand mb-3 group-hover:text-gold-start transition-colors leading-snug">
                {v.title}
              </h3>

              {/* Description body context */}
              <p className="text-base text-neutral-800 leading-relaxed font-normal">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons with only one beautiful, prominent golden primary button */}
        {/* <div className="relative z-10 flex items-center justify-center w-full">
          <button
            id="diff-btn-book"
            onClick={onBookClick}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
          >
            <Calendar className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
            Book Your Consultation
          </button>
        </div> */}
      </motion.div>
    </section>
  );
}
