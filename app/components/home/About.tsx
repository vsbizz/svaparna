import { useState } from "react";
import {
  Sparkles,
  Calendar,
  Award,
  BookOpen,
  Quote,
  X,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";

export default function FounderProfile() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Moving marquee list of degrees & credentials
  const certifications = [
    "DPT (Doctor of Physical Therapy), LEND Fellow",
    "BSc Molecular and Cellular Biology (UIUC)",
    "CAPP-OB Certified (Pregnancy & Post-Partum Care)",
    "Certified Vestibular Rehabilitation Specialist",
    "Herman & Wallace Certified (Pediatric Bowel and Bladder)",
    "Level 2 Ayurvedic Practitioner (Kerala Ayurveda Academy USA)",
    "Ayurvedic Pulse Diagnosis Certified",
  ];

  return (
    <section id="about" className="pt-10 pb-20 bg-[#fffef7] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Modern Asymmetrical Creative Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-primary-brand/10 bg-primary-brand/[0.02] group">
              {/* Refined representative avatar/portrait of a warm, professional clinical expert */}
              <img
                src="/assets/images/DrAparna.png"
                alt="Dr. Aparna Sekhar, DPT"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Sleek integrated overlay matching premium luxury branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/80 via-transparent to-transparent"></div>

              {/* Bottom Info Floating Card inside image frame */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-primary-brand/5 shadow-lg">
                {/* <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gold-start uppercase tracking-wider block font-mono">
                      Founder & Clinical Director
                    </span>
                    <h4 className="font-serif text-base font-bold text-primary-brand mt-0.5">
                      Dr. Aparna Sekhar
                    </h4>
                  </div>
                </div> */}
                <div className="w-full h-[1px] bg-primary-brand/10 my-2"></div>
                <p className="text-base text-neutral-800 leading-relaxed font-normal">
                  <strong>SVAPARNA (स्वपर्णा)</strong> is a Sanskrit word
                  meaning,{" "}
                  <span className="italic font-semibold text-[#631a47]">
                    self-sustaining and needing nothing external to thrive
                  </span>
                  . It is a reflection of Dr. Aparna’s own name and a philosophy
                  for her clients: helping you return to your true self (
                  <strong>sva-rupa</strong>) and achieve a state of holistic
                  balance.
                </p>
              </div>
            </div>

            {/* Absolute Decorative Geometric Accents to enrich visual aesthetics */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold-start/20 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-12 -right-6 w-32 h-32 border-2 border-primary-brand/10 rounded-full -z-10"></div>
          </div>

          {/* Right Side: Philosophy Statement & Clinical Background */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Fine line branding tag */}
            <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                About Our Founder
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              Meet Dr. Aparna Sekhar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-start to-gold-end font-light text-2xl">
                (PT, DPT, Cert VRS, AHC)
              </span>
            </h2>

            {/* The Philosophy of Svaparna Core Component Block */}
            {/* <div className="bg-primary-brand/[0.02] border border-primary-brand/10 rounded-3xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#631a47] pointer-events-none">
                <Quote className="w-24 h-24 rotate-180" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-primary-brand font-sans">
                  The Philosophy of Svaparna
                </span>
                <span className="text-xs text-gold-start font-serif font-semibold font-mono">
                  स्वपर्णा
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-950 font-light leading-relaxed">
                <strong>SVAPARNA (स्वपर्णा)</strong> is a Sanskrit word meaning,{" "}
                <span className="italic font-semibold text-[#631a47]">
                  self-sustaining and needing nothing external to thrive
                </span>
                . It is a reflection of Dr. Aparna’s own name and a philosophy
                for her clients: helping you return to your true self (
                <strong>sva-rupa</strong>) and achieve a state of holistic
                balance.
              </p>
            </div> */}

            {/* Biographical Narrative Block */}
            <div className="space-y-4">
              <p className="text-base text-neutral-800 leading-relaxed font-normal">
                Dr. Aparna is a <strong>Physiotherapist</strong> with over{" "}
                <strong>13 years of clinical experience</strong> in the USA
                serving diverse clientele and also a certified Ayurvedic
                Practitioner. As a founder of Svaparna Health, she seamlessly
                integrates evidence-based rehabilitation and the principles of
                Ayurveda into a genuinely unique approach towards care. She has
                been a Clinical Instructor for students in Community College
                settings in the US in the USA and worked inpartnered with Pro
                Bono Clinics to provide free Physiotherapy care to those in
                need.
              </p>
            </div>

            {/* Read Story Action Button */}
            <div className="pt-2">
              <button
                id="btn-read-full-story"
                onClick={() => setIsStoryModalOpen(true)}
                className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
              >
                Read Dr. Aparna &apos; s Full Story
                <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="max-w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* --- INFINITE AUTO-MOVING CAROUSEL OF CERTIFICATIONS & DEGREES --- */}
        <div className="mt-20 border-t border-b border-primary-brand/10 py-6 bg-primary-brand/[0.02] relative overflow-hidden">
          <div className="flex select-none overflow-hidden">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap min-w-full justify-around">
              {/* Loop index twice to provide seamless horizontal movement support */}
              {[...certifications, ...certifications, ...certifications].map(
                (cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 shrink-0"
                  >
                    <div className="h-2 w-2 rounded-full bg-gold-start"></div>
                    <span className="font-mono text-xs sm:text-sm text-primary-brand/90 font-medium uppercase tracking-wider">
                      {cert}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>
      {/* --- EXQUISITE MODAL EXPANSION DIALOGUE: DR. APARNA'S DETAIL TIMELINE --- */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in pointer-events-auto">
          <div
            id="story-modal-panel"
            className="relative bg-white w-full max-w-3xl rounded-[2.5rem] border border-primary-brand/15 shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto no-scrollbar scroll-smooth flex flex-col justify-between"
          >
            {/* Close trigger button */}
            <button
              id="story-modal-close"
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-primary-brand/5 rounded-full flex items-center justify-center text-primary-brand hover:bg-[#631a47]/10 transition-colors pointer-events-auto"
            >
              <X className="w-5 h-5 text-primary-brand" />
            </button>

            {/* Modal Inside Content */}
            <div className="space-y-6 text-left">
              <div className="space-y-1.5 pt-4">
                <span className="text-xs uppercase tracking-widest text-gold-start font-mono block">
                  Complete Educational & Clinical Profile
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-brand">
                  Dr. Aparna Sekhar
                </h3>
                <p className="text-xs font-mono text-[#631a47] font-semibold">
                  Doctor of Physical Therapy & Accredited Ayurvedic Practitioner
                </p>
              </div>

              {/* Extended Bio */}
              <div className="space-y-4 text-sm text-primary-brand/85 leading-relaxed font-light">
                <p>
                  Dr. Aparna’s journey began with a rigorous scientific
                  foundation in cellular physiology. Driven by clinical
                  curiosity regarding neuromuscular systems, she pursued her
                  **Master of Science** and subsequent **Doctor of Physical
                  Therapy (DPT)** degrees at the highly acclaimed **University
                  of Illinois at Chicago**.
                </p>
                <p>
                  As she treated thousands of patients in the United States, she
                  continually analyzed cases of complex back pain, scoliosis,
                  pelvic floor dysfunction, and nerve damage. She noted that
                  while modern physical therapy possesses incredible tools to
                  isolate and rebuild muscles, treating the whole patient
                  required balancing internal stress, visceral vitality, and
                  dietary inputs.
                </p>
                <p>
                  To complete this therapeutic union, she underwent deep
                  mentorships in **Kerala-style authentic panchakarma
                  therapeutics** and finished advanced accreditations directly
                  with USA &apos; s premier Ayurvedic training councils. The
                  outcome is **Svaparna Health**—a haven where each patient
                  holds control over their path, restoring natural biomechanics
                  while achieving deep mental, physiological, and emotional
                  balance.
                </p>
              </div>

              {/* Complete Clinical Qualifications Grid */}
              <div className="pt-4 border-t border-primary-brand/10 space-y-4">
                <h4 className="font-serif text-lg font-bold text-primary-brand">
                  Core Board Certifications & Licensure
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Doctor of Physical Therapy (UIC, USA)",
                    "LEND Post-Graduate Clinical Fellow",
                    "CAPP-OB Pregnancy & Postpartum Specialty",
                    "Certified Vestibular Rehabilitation Specialist",
                    "Pediatric Bowel and Bladder Board Certified",
                    "Ayurvedic Health Counselor (AHC, USA)",
                    "Licensed Practitioner in Pulse Diagnosis (Nadi Pariksha)",
                    "Molecular and Cellular Biology Alumna (UIUC)",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 bg-[#edf4f0]/50 p-3 rounded-xl border border-primary-brand/5"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-start shrink-0 mt-0.5" />
                      <span className="text-xs leading-tight font-medium text-primary-brand/90 font-sans">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Panel Actions */}
            <div className="mt-8 pt-4 border-t border-primary-brand/10 flex justify-end">
              <button
                id="btn-story-modal-dismiss"
                onClick={() => setIsStoryModalOpen(false)}
                className="bg-primary-brand hover:bg-[#501338] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles for seamless marquee flow across standard monitors */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
