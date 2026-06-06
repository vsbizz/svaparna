"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clover,
  Sparkles,
  ChevronRight,
  ChevronUp,
  Dumbbell,
  HeartPulse,
  Compass,
  Heart,
  ShieldCheck,
  Baby,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainServices = [
    {
      id: "msrv-ortho",
      title: "Orthopedic & Sports Rehab",
      description:
        "Relief from low back pain, neck pain, ankle sprains, and sports injuries.",
      image: "assets/images/7.jpg",
    },
    {
      id: "msrv-surgery",
      title: "Pre & Post-Surgical Rehabilitation",
      description:
        "Guided recovery to restore function, mobility, and strength after surgery.",
      image: "assets/images/Pre-Post-Surgical-Rehabilitation.webp",
    },
    {
      id: "msrv-vestibular",
      title: "Vestibular Rehabilitation",
      description:
        "Specialized assessment and treatment for vertigo (BPPV), dizziness, and balance disorders.",
      image: "assets/images/Vestibular-Rehabilitation.png",
    },
    {
      id: "msrv-pregnancy",
      title: "Pregnancy & Postpartum Care",
      description:
        "Support and guidance during pregnancy, management of low back pain during pregnancy, postpartum rehabilitation, and diastasis recti recovery.",
      image: "assets/images/Pregnancy-Postpartum-Care.webp",
    },
    {
      id: "msrv-pelvic",
      title: "Pelvic Floor Rehabilitation",
      description:
        "Specialized women's health addressing urinary incontinence and pelvic floor dysfunction.",
      image: "assets/images/Pelvic-Floor-Rehabilitation.webp",
    },
    {
      id: "msrv-pediatric",
      title: "Pediatric Care",
      description:
        "Gentle management of bowel and bladder issues in children such as constipation and bedwetting.",
      image: "assets/images/Pediatric-Care.webp",
    },
  ];

  const specialties = [
    {
      id: "spec-ortho",
      title: "Orthopedic & Sports Rehab",
      icon: Dumbbell,
      badge: "Clinical PT",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Relief from low back pain, neck pain, ankle sprains, and sports injuries.",
      points: [],
    },
    {
      id: "spec-surgery",
      title: "Pre & Post-Surgical Rehabilitation",
      icon: HeartPulse,
      badge: "Orthopaedic",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Guided recovery to restore function, mobility, and strength after surgery.",
      points: [],
    },
    {
      id: "spec-vestibular",
      title: "Vestibular Rehabilitation",
      icon: Compass,
      badge: "Neuromuscular",
      iconColor: "text-gold-start bg-gold-start/10",
      description:
        "Specialized assessment and treatment for vertigo (BPPV), dizziness, and balance disorders.",
      points: [],
    },
    {
      id: "spec-maternity",
      title: "Pregnancy & Postpartum Care",
      icon: Heart,
      badge: "Women's Health",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Support and guidance during pregnancy, management of low back pain during pregnancy and postpartum rehabilitation.",
      points: [],
    },
    {
      id: "spec-pelvic",
      title: "Pelvic Floor Rehabilitation",
      icon: ShieldCheck,
      badge: "Specialized",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Specialized women's health addressing urinary incontinence and pelvic floor dysfunction.",
      points: [],
    },
    {
      id: "spec-pediatric",
      title: "Pediatric Care",
      icon: Baby,
      badge: "Gentle Therapy",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Gentle management of bowel and bladder issues in children such as constipation and bedwetting.",
      points: [],
    },
  ];

  const ayurvedicSpecialty = {
    id: "spec-ayur",
    title: "Ayurvedic Consultations",
    icon: Leaf,
    badge: "Constitutional Medicine",
    description:
      "A personalized assessment of your Prakrti (individual constitution) and current imbalances, with practical guidance on dietary, lifestyle, and herbal recommendations to support your well-being.",
    benefit:
      "Best for addressing chronic inflammation, digestive weaknesses, sleep disruptions, and structural nervous vulnerabilities.",
    points: [],
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#fffef7] text-primary-brand relative overflow-hidden select-none border-t border-primary-brand/10"
    >
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-primary-brand/[0.02] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-108 h-108 bg-gold-start/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <motion.div
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            From Everyday Pain to Specialized Care.
          </h2>
        </div>

        <div className="w-full max-w-7xl mx-auto mb-16 relative">
          {/* Custom Navigation */}
          <button className="pb-2 text-2xl services-prev absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg border border-primary-brand/10 flex items-center justify-center text-primary-brand hover:bg-primary-brand hover:text-white transition-all text-2xl sm:text-3xl">
            ‹
          </button>

          <button className="pb-2 text-2xl services-next absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-lg border border-primary-brand/10 flex items-center justify-center text-primary-brand hover:bg-primary-brand hover:text-white transition-all text-2xl sm:text-3xl">
            ›
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={false}
            grabCursor={true}
            spaceBetween={32}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="services-swiper"
          >
            {mainServices.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  id={`main-service-card-${item.id}`}
                  onClick={() => onSelectService(item.title)}
                  className="group h-[500px] sm:h-[520px] lg:h-[560px] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-4 pb-6 sm:pb-8 transition-all duration-300 shadow-[0_12px_40px_rgba(99,26,71,0.03)] border border-[#f0ece9] hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col"
                >
                  <div className="flex flex-col flex-1">
                    <div className="relative w-full aspect-[4/4] rounded-[2rem] overflow-hidden mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center translate-y-1/2 shadow-xs z-10 pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-primary-brand/5 flex items-center justify-center">
                          <Clover className="w-5 h-5 text-primary-brand" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center px-2 mt-2 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-bold text-primary-brand tracking-tight group-hover:text-gold-start transition-colors min-h-[72px] flex items-center justify-center text-center">
                        {" "}
                        {item.title}
                      </h3>

                      <div className="w-8 h-[1.5px] bg-[#c8a358]/55 mx-auto my-3.5"></div>

                      <p className="text-xs sm:text-sm text-neutral-900 font-light leading-relaxed max-w-[230px] mx-auto line-clamp-5">
                        {" "}
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center">
          <button
            id="btn-view-all-services-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
          >
            <span>
              {isExpanded
                ? "Close Specialized Care Catalog"
                : "View All Services"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
            ) : (
              <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-16 w-full max-w-7xl mx-auto"
            >
              <div className="pt-10 border-t border-primary-brand/10 space-y-12">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center space-x-1 bg-primary-brand/5 border border-primary-brand/10 px-3.5 py-1 rounded-full mb-3">
                    <Sparkles className="w-3 h-3 text-gold-start" />
                    <span className="text-[10px] font-bold text-[#631a47] uppercase tracking-widest">
                      Specialized Clinical Operations
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary-brand tracking-tight">
                    From Everyday Pain to Specialized Care
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-900 font-light mt-2 leading-relaxed">
                    Dr. Aparna leads advanced clinical treatments in these
                    niche, post-graduate medical specializations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {" "}
                  {specialties.map((spec) => {
                    const SpecIcon = spec.icon;
                    return (
                      <div
                        key={spec.id}
                        onClick={() => onSelectService(spec.title)}
                        className="group relative flex flex-col justify-between h-full min-h-[280px] bg-[#fffefd] border border-primary-brand/10 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div
                              className={`h-11 w-11 rounded-xl flex items-center justify-center ${spec.iconColor} shadow-inner`}
                            >
                              <SpecIcon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[9px] font-semibold tracking-wider text-[#631a47] uppercase bg-white border border-[#631a47]/10 px-2.5 py-0.5 rounded-full">
                              {spec.badge}
                            </span>
                          </div>

                          <h5 className="font-serif text-lg font-bold text-primary-brand mb-2 group-hover:text-gold-start transition-colors">
                            {spec.title}
                          </h5>

                          <p className="text-xs text-neutral-900 font-light leading-relaxed mb-5">
                            {spec.description}
                          </p>

                          <ul className="space-y-1.5 mb-6">
                            {spec.points.map((pt, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-xs text-neutral-900 gap-2"
                              >
                                <div className="h-1 w-1 rounded-full bg-gold-start" />
                                <span className="font-light">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-primary-brand/5 flex items-center justify-between text-xs font-bold text-primary-brand">
                          <span className="group-hover:text-gold-start transition-colors">
                            Request Care
                          </span>
                          <div className="w-6 h-6 bg-primary-brand text-white rounded-full flex items-center justify-center group-hover:bg-gold-start transition-colors">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  id="expanded-ayurveda-specialty-card"
                  onClick={() => onSelectService(ayurvedicSpecialty.title)}
                  className="relative bg-gradient-to-r from-primary-brand to-[#5e1441] text-white rounded-3xl p-6 sm:p-10 overflow-hidden border border-gold-start/20 shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="absolute right-0 bottom-0 opacity-5 text-white pointer-events-none transform translate-y-6 translate-x-6">
                    <Leaf className="w-72 h-72 rotate-45" />
                  </div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
                    <div className="space-y-3.5 text-left max-w-4xl">
                      <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        <Sparkles className="w-3 h-3 text-gold-end" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-gold-end font-mono">
                          {ayurvedicSpecialty.badge}
                        </span>
                      </div>

                      <h5 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {ayurvedicSpecialty.title}
                      </h5>

                      <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                        {ayurvedicSpecialty.description}
                      </p>
                    </div>

                    <button className="w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-bold text-xs px-6 py-3.5 rounded-full shadow-md group-hover:scale-102 transition-transform cursor-pointer pointer-events-auto">
                      {" "}
                      Inquire Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
