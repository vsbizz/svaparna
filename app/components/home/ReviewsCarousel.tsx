"use client";

import { useState, useRef, useEffect, type RefObject } from "react";
import { Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ───────────────────────────────────────────────────────────────────

type VideoTestimonial = {
  type: "video";
  text: string;
  author: string;
  location: string;
  shortQuote: string;
  leftVideo: string;
  thumbnail: string;
  platform: string;
  objectPosition?: string;
};

type WrittenTestimonial = {
  type: "written";
  text: string;
  author: string;
  location: string;
  shortQuote: string;
  image: string;
  thumbnail: string;
  platform: string;
};

type Testimonial = VideoTestimonial | WrittenTestimonial;

// ─── Data - no id field, array index is the single source of truth ───────────

const testimonials: Testimonial[] = [
  // 1. Suri
  {
    type: "video",
    text: "Hello, this is Dr. Suri, an acupuncturist from California. I've had the opportunity to work with Dr. Aparna, and I truly appreciate both her knowledge and the care she puts into her work. What stands out to me is how much she truly listens. She takes time to understand each person's concerns and creates an approach that feels personalized and thoughtful rather than one-size-fits-all. I would highly recommend experiencing the integrative approach that Dr. Aparna and Svaparna Health bring to supporting health.",
    author: "Dr. Suri",
    location: "Acupuncturist, California",
    shortQuote:
      "She truly listens and creates an approach that feels personalized and thoughtful.",
    leftVideo: "assets/testimonial-videos/DrSuriTestimonial.mp4",
    thumbnail: "assets/testimonial-videos/testimonial-img3.png",
    platform: "Google Reviews",
    objectPosition: "center 20%",
  },
  // 2. Mala
  {
    type: "video",
    text: "Hi, this is Mala. I had umbilical hernia surgery in January. Dr. Aparna's unique combination of physiotherapy and Ayurvedic care helped me recover far beyond my expectations. Her exercises improved my mobility immediately, while Ayurvedic recommendations eased bloating, supported scar healing, and strengthened my core. Within six weeks, I was back to yoga and all my normal activities.",
    author: "Mrs. Mala",
    location: "Retired Banker, India",
    shortQuote:
      "Within six weeks, I was back to yoga and all my normal activities.",
    leftVideo: "assets/testimonial-videos/MrsMalaTestimonialTake2.mov",
    thumbnail: "assets/testimonial-videos/testimonial-img1.png",
    platform: "Google Reviews",
    objectPosition: "center 60%",
  },
  // 3. Ranjani
  {
    type: "video",
    text: "I have been working with Dr. Aparna from Svaparna Health over the past 10 months to help address my chronic PCOS of 10 years. Dr. Aparna has been excellent at providing insights about my body and helping me understand my prakriti and how it affects my PCOS. She provided me with personalized Ayurvedic formulations, diet recommendations, lifestyle changes, and yoga practices that have really helped manage my PCOS symptoms. I've experienced improvement in my mood, energy levels, and the regularity of my menstrual cycles. I'm very grateful to Svaparna Health and highly recommend them to everyone. Thank you.",
    author: "Ms. Ranjani",
    location: "Occupational Therapist, California",
    shortQuote:
      "Personalized Ayurvedic care that helped improve my PCOS symptoms.",
    leftVideo: "assets/testimonial-videos/MsRanjaniTestimonial.mp4",
    thumbnail: "assets/testimonial-videos/ranjaniTestimonial.png",
    platform: "Google Reviews",
    objectPosition: "center 25%",
  },
  // 4. Jenny (Dr. Jessy)
  {
    type: "written",
    text: "I have had the privilege of receiving guidance from Dr. Aparna on several health concerns, particularly related to gut health and foot-related issues. In today's fast-paced world where sedentary lifestyles, chronic stress, irregular routines, and poor lifestyle habits increasingly contribute to a wide range of health concerns, Dr. Aparna's approach offers a refreshing and much-needed perspective. I have consistently been impressed by her depth of knowledge, thoughtful approach, and ability to provide practical solutions grounded in both Physiotherapy and Ayurveda. What sets her apart is her interdisciplinary expertise. She skillfully integrates evidence-based Physiotherapy principles with traditional Indian Knowledge Systems, offering holistic recommendations that address the root causes of health concerns rather than merely alleviating symptoms. Her guidance on lifestyle modifications, Ayurvedic practices, and simple home remedies has always been insightful, personalized, and easy to incorporate into daily life. I would highly recommend her to anyone seeking comprehensive, patient-centered care that considers the body, mind, and lifestyle as interconnected aspects of health. Her passion for helping people achieve better health is evident in every interaction, and I have greatly benefited from her guidance and expertise.",
    author: "Dr. Jessy",
    location: "College Professor, India",
    shortQuote:
      "A truly holistic practitioner who considers the body, mind, and lifestyle as interconnected aspects of health.",
    image: "assets/testimonial-videos/DrJessyPicture.jpg",
    thumbnail: "assets/testimonial-videos/DrJessyPicture.jpg",
    platform: "Google Reviews",
  },
  // 5. Smriti
  {
    type: "video",
    text: "Hi, I'm Smriti, and I consulted Dr. Aparna of Svaparna Health for a back injury of mine. This happened a couple of months ago, and I was in severe pain. Dr. Aparna's treatment plan helped me regain the ability to do my daily activities without affecting my work week. Over the course of the last one and a half months, I have become independent and able to do all activities again with minimal pain. I've seen significant progress in my posture and day-to-day functioning. There is a lot of positive change in how I feel and how I'm getting things done. I highly recommend Dr. Aparna for all your physical therapy needs. Thank you.",
    author: "Ms. Smriti",
    location: "Entrepreneur, India",
    shortQuote:
      "I've become independent and able to do all activities again with minimal pain.",
    leftVideo: "assets/testimonial-videos/MsSmritiTestimonial.mov",
    thumbnail: "assets/testimonial-videos/testimonial-img2.png",
    platform: "Google Reviews",
    objectPosition: "center 20%",
  },
  // 6. Vivek
  {
    type: "written",
    text: "I did an online Ayurvedic Consultation with Dr. Aparna of Svaparna Health to seek solutions for sleep issues/digestive health/stress management. Her expertise in Ayurveda helped me identify the root causes of my imbalances rather than just treating the symptoms. The guidance was structured, easy to follow, and highly customized to my daily life. I've seen tangible results in all areas, waking up daily with more energy for daily activities. I highly recommend her to anyone looking to restore their health naturally.",
    author: "Mr. Vivek",
    location: "Financial Advisor, North Carolina",
    shortQuote:
      "Her root-cause approach brought lasting improvements to my sleep, digestion, and energy.",
    image: "assets/testimonial-videos/MrVivekProfilePicForTestimonial.jpg",
    thumbnail: "assets/testimonial-videos/MrVivekProfilePicForTestimonial.jpg",
    platform: "Google Reviews",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoogleStars() {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.19-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>
      <span className="text-[9px] uppercase tracking-[0.15em] font-mono text-[#631a47]/40 font-semibold pl-0.5">
        Google Reviews
      </span>
    </div>
  );
}

function AuthorMeta({
  author,
  location,
}: {
  author: string;
  location: string;
}) {
  return (
    <div>
      <p
        className="text-white text-base font-semibold"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {author}
      </p>
      <p className="text-white/70 text-[11px] leading-tight mt-0.5">
        {location}
      </p>
    </div>
  );
}

function VideoPanel({
  t,
  videoRef,
  isPlaying,
  onTogglePlay,
}: {
  t: VideoTestimonial;
  videoRef: RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) {
  return (
    <div
      className="lg:col-span-3 relative bg-[#1a0d14] group"
      style={{ minHeight: "320px" }}
    >
      <video
        ref={videoRef}
        src={t.leftVideo}
        className="w-full h-full object-cover"
        style={{ minHeight: "320px", maxHeight: "540px", display: "block", objectPosition: t.objectPosition ?? "center 30%" }}
        playsInline
        preload="metadata"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#1a0d14]/70 via-transparent to-transparent pointer-events-none"
      />
      <button
        onClick={onTogglePlay}
        className="absolute inset-0 flex items-center justify-center group/btn"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <motion.div
          className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 transition-all duration-300 ${
            isPlaying
              ? "opacity-0 group-hover/btn:opacity-100 bg-black/30"
              : "opacity-100 bg-white/20"
          }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white fill-white" />
          ) : (
            <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
          )}
        </motion.div>
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
        <div className="flex items-end justify-between">
          <AuthorMeta author={t.author} location={t.location} />
        </div>
      </div>
    </div>
  );
}

function ImagePanel({ t }: { t: WrittenTestimonial }) {
  return (
    <div
      className="lg:col-span-3 relative bg-[#1a0d14] overflow-hidden"
      style={{ minHeight: "320px" }}
    >
      <img
        src={t.image}
        alt={t.author}
        className="w-full h-full object-cover object-[center_20%]"
        style={{ minHeight: "320px", maxHeight: "540px", display: "block" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#1a0d14]/70 via-transparent to-transparent pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
        <div className="flex items-end justify-between">
          <AuthorMeta author={t.author} location={t.location} />
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = testimonials[currentIndex];

  // navigate always by array index - single source of truth
  const navigate = (newIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
    setIsPlaying(false);
  };

  const handleNext = () =>
    navigate(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
      1,
    );

  const handlePrev = () =>
    navigate(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
      -1,
    );

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // reset video whenever slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 lg:py-28 bg-[#fffef7] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #631a47 0%, transparent 55%), radial-gradient(circle at 80% 75%, #9b6b3a 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center space-y-4 mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
             Our Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Recovery, in Their Own Words.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(99,26,71,0.08)] lg:h-[520px]"
            >
              {current.type === "video" ? (
                <VideoPanel
                  t={current}
                  videoRef={videoRef}
                  isPlaying={isPlaying}
                  onTogglePlay={togglePlay}
                />
              ) : (
                <ImagePanel t={current} />
              )}

              <div className="lg:col-span-2 flex flex-col h-full overflow-hidden bg-[#fffef7]">
                {/* Scrollable text region */}
                <div className="flex-1 min-h-0 overflow-y-auto px-7 pt-5 sm:px-8 lg:px-10 pb-4">
                  <span
                    aria-hidden
                    className="block text-5xl leading-none select-none -ml-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: "#9b6b3a",
                      fontWeight: 300,
                    }}
                  >
                    "
                  </span>
                  <p
                    className="text-[#2d1a26] text-lg sm:text-xl lg:text-2xl leading-snug mb-3 font-normal"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {current.shortQuote}
                  </p>
                  <div
                    className="h-px w-10 mb-2"
                    style={{
                      background: "linear-gradient(90deg, #9b6b3a, transparent)",
                    }}
                  />
                  <p className="text-black text-sm leading-relaxed font-light">
                    {current.text}
                  </p>
                </div>

                {/* Always-visible nav — never scrolls away */}
                <div className="shrink-0 px-7 sm:px-8 lg:px-10 py-5 border-t border-primary-brand/8 flex items-center justify-between bg-[#fffef7]">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-2xl font-normal text-[#631a47]"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#631a47]/30 text-sm font-light">
                      / {String(testimonials.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full border border-[#631a47]/20 text-[#631a47] flex items-center justify-center hover:border-[#631a47]/60 hover:bg-[#631a47]/5 active:scale-95 transition-all duration-200"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full bg-[#631a47] text-white flex items-center justify-center hover:bg-[#52133a] active:scale-95 transition-all duration-200 shadow-sm"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 flex items-stretch gap-2 sm:gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => navigate(i, i > currentIndex ? 1 : -1)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "ring-2 ring-[#631a47] ring-offset-2 ring-offset-[#fffef7]"
                  : "opacity-40 hover:opacity-70"
              }`}
              style={{ width: 60, height: 72, flexShrink: 0 }}
              aria-label={`Go to ${t.author}'s testimonial`}
            >
              <img
                src={t.thumbnail}
                alt={t.author}
                className="w-full h-full object-cover"
              />
              {t.type === "video" && (
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#631a47] flex items-center justify-center">
                  <Play className="w-1.5 h-1.5 text-white fill-white translate-x-[0.5px]" />
                </div>
              )}
              {i === currentIndex && (
                <motion.div
                  layoutId="thumb-active"
                  className="absolute inset-0 border-2 border-[#631a47]/40 rounded-xl"
                />
              )}
            </button>
          ))}
        </motion.div>

        <div className="mt-2 flex gap-3 justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ width: 60, flexShrink: 0 }}
              className={`text-center transition-all duration-300 ${
                i === currentIndex ? "opacity-100" : "opacity-30"
              }`}
            >
              <span className="text-[9px] uppercase tracking-widest font-mono text-[#631a47] block truncate">
                {t.author.split(" ").pop()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
