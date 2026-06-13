import {
  Laptop,
  Landmark,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
  Globe,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface ConsultationSelectorSectionProps {
  onSelectType?: (type: "online" | "offline") => void;
}

export default function ConsultationSelectorSection({
  onSelectType: _onSelectType,
}: ConsultationSelectorSectionProps) {
  const [showSoonNotice, setShowSoonNotice] = useState(false);

  const cards = [
    {
      id: "online-india",
      category: "India Telehealth",
      status: "active",
      badgeColor: "bg-indigo-50 text-indigo-900 border-indigo-100",
      title: "Online Consultations (India)",
      description: "Virtual Physiotherapy and Ayurvedic Consultations delivered securely online across India.",
      features: [
        "Virtual movement and in-depth analysis",
        "Guided home rehabilitation exercise plans",
        "Integrated Ayurvedic counseling",
      ],
      icon: <Laptop className="w-5 h-5 text-gold-start" />,
      buttonText: "View Pricing & Book",
      action: () => {
        const el = document.getElementById("pricing");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "online-global",
      category: "Global Telehealth",
      status: "active",
      badgeColor:
        "bg-emerald-55 bg-primary-brand/10 text-primary-brand border-primary-brand/10",
      title: "Online Consultations (USA)",
      description:
        "Ayurvedic assessment and guidance delivered securely online across USA.",
      features: [
        "In-depth Prakriti (constitution) analysis",
        "Personalized dietary & lifestyle design",
        "Holistic herbal & supplement recommendations",
      ],
      icon: <Globe className="w-5 h-5 text-gold-start" />,
      buttonText: "View Pricing & Book",
      action: () => {
        const el = document.getElementById("pricing");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "offline-india",
      category: "In-Clinic Care",
      status: "coming-soon",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      title: "Offline Consultations (Mumbai)",
      description:
        "Physiotherapy and Ayurvedic Consultations in person at our clinic.",
      features: [
        "Comprehensive 1-on-1 assessment",
        "Evidence-based in person care",
        "Integrated Ayurvedic healing protocols",
      ],
      icon: <Landmark className="w-5 h-5 text-gold-start" />,
      buttonText: "Offline Services Coming Soon",
      action: () => {
        setShowSoonNotice(true);
        setTimeout(() => setShowSoonNotice(false), 4000);
      },
    },
  ];

  return (
    <section
      id="consultations"
      className="py-24 bg-[#fffef7] text-primary-brand relative overflow-hidden border-t border-primary-brand/5"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              Choose Your Care{" "}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Choose Your Care Pathway
          </h2>
        </div>

        {/* <motion.p 
          className="text-base text-neutral-800 leading-relaxed font-normal max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Begin your customized holistic recovery path. Choose our premium in-clinic hands-on physiotherapy in Mumbai, or select interactive remote coaching from anywhere in the world.
        </motion.p> */}

        {/* Notice alert for offline coming soon */}
        {showSoonNotice && (
          <motion.div
            className="mb-8 max-w-md mx-auto p-4 bg-amber-50 text-amber-900 border border-amber-200 rounded-2xl text-xs sm:text-sm text-left shadow-sm flex items-start gap-2.5 animate-scale-up"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Star className="w-5 h-5 text-gold-start fill-gold-start shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">In-Clinic Booking Opening Soon</p>
              <p className="text-neutral-700 font-light mt-0.5">
                Physical bookings for our Mumbai clinic are launching soon. You
                can sign up via our contact form or book a live Online
                Consultation immediately!
              </p>
            </div>
          </motion.div>
        )}

        {/* Three-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group flex flex-col h-full bg-white border border-primary-brand/10 rounded-[2rem] hover:border-gold-start/40 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              {/* Purple Header Section */}
              <div className="bg-primary-brand/5 rounded-t-[2rem] p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-brand mb-3 leading-tight text-center group-hover:text-gold-start transition-colors">
                  {card.title}
                </h3>

                <p className="text-base text-neutral-800 leading-relaxed font-normal text-center min-h-[48px]">
                  {card.description}
                </p>
              </div>

              {/* White Content Section */}
              <div className="flex flex-col flex-1 bg-white rounded-[2rem] px-4 sm:px-6 pb-4">
                <ul className="space-y-3 mb-5 pt-6 flex-1">
                  {card.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start text-left gap-2.5 text-base text-neutral-800 leading-relaxed"
                    >
                      <Check className="w-4.5 h-4.5 text-gold-start shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={card.action}
                  className={`w-full inline-flex items-center justify-center gap-2 group font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer ${
                    card.status === "coming-soon"
                      ? "bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border border-neutral-300/40"
                      : "bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{card.buttonText}</span>
                  </div>

                  {card.status !== "coming-soon" && (
                    <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
