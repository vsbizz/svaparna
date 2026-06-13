import { ArrowRight, Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

interface HeroProps {
  onStartJourneyClick: () => void;
  onBookConsultationClick: () => void;
}

export default function Hero({
  onStartJourneyClick,
  onBookConsultationClick,
}: HeroProps) {
  // 1. Capture the scroll progress of the page directly via Framer Motion
  const { scrollY } = useScroll();

  // 2. Map the scroll pixel values smoothly to the scale factor.
  // When scroll is 0, scale is 1. When scroll reaches 1200px, scale caps smoothly at 1.15.
  // This utilizes hardware-accelerated transforms instead of forcing React re-renders.
  const bgScale = useTransform(scrollY, [0, 1200], [1, 1.15], { clamp: true });

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 overflow-hidden bg-white px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Subtle Background Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12"></div>

      {/* Curved Container Wrapper */}
      <motion.div
        className="relative max-w-9xl mx-auto rounded-[24px] md:rounded-[48px] overflow-hidden bg-neutral-900 min-h-[480px] sm:min-h-[540px] lg:min-h-[680px] flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background Image Container changed to motion.div */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: bgScale }}
        >
          <img
            src="/assets/images/hero-banner.png"
            alt="Ayurvedic Wisdom and Advanced Physical Therapy Session"
            className="w-full h-full object-cover object-center opacity-85 brightness-[0.70]"
            referrerPolicy="no-referrer"
          />
          {/* Linear neutral dark-to-black overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40"></div>
        </motion.div>

        {/* Content Section */}
        <div className="relative z-10 w-full px-5 py-12 sm:px-12 sm:py-16 md:pt-20 md:pb-16 lg:px-16 text-center flex flex-col items-center justify-center mx-auto">
          {/* Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-base text-[#fffef7] leading-tight tracking-tight max-w-4xl text-center">
            Where Physiotherapy Precision <br className="hidden sm:inline" />
            Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-end via-white to-gold-start decoration-gold-start/40">
              Ayurvedic Wisdom
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-[#fffef7]/90 leading-relaxed font-sans font-light max-w-3xl text-center">
            At Svaparna Health the cause of your pain is not just managed - it
            is investigated, understood and addressed at its root through the
            combined power of evidence-based Physiotherapy and Ayurvedic
            Principles.
          </p>

          {/* Action CTAs Buttons */}
          <div className="mt-7 flex items-center justify-center w-full">
            <button
              id="hero-cta-start"
              onClick={onStartJourneyClick}
              className="group relative flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-bold text-sm sm:text-[15.5px] px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Healing Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* --- ANIMATED BEZIER SCURVE DIVIDER AND FEATURE BADGES --- */}
        {/* <motion.div
          className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none select-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.215, 0.61, 0.355, 1.0],
          }}
        >
          <svg
            viewBox="350 0 500 120"
            className="w-full max-w-[700px] h-[70px] sm:h-[90px] text-[#fffef7] fill-white mx-auto"
            preserveAspectRatio="none"
          >
            <path d="M370 120 C405 120 420 10 450 10 H750 C780 10 795 120 830 120 Z" />
          </svg>

          <div className="absolute inset-x-0 bottom-1 pointer-events-auto flex flex-col items-center justify-end">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-center space-x-1.5 px-4 py-1.5 md:py-2 bg-white backdrop-blur-md rounded-full shadow-xs border border-primary-brand/5 max-w-xs sm:max-w-md md:-translate-y-2 lg:-translate-y-4">
                <Plus className="w-3.5 h-3.5 text-primary-brand animate-pulse" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold tracking-wider text-primary-brand uppercase">
                  Same-Day Appointments Available
                </span>
              </div>

              <div className="flex items-center justify-center space-x-2 sm:space-x-12 mt-1 md:mt-2 w-full px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center space-x-1.5">
                  <Plus className="w-3.5 h-3.5 text-primary-brand/80" />
                  <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-widest text-primary-brand/80 uppercase">
                    NEW PATIENT SPECIAL OFFER
                  </span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Plus className="w-3.5 h-3.5 text-primary-brand/80" />
                  <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-widest text-primary-brand/80 uppercase">
                    INSURANCE ACCEPTED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
