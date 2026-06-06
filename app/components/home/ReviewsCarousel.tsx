"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: "Hi, I'm Smriti, and I consulted Dr. Aparna of Swaparna Health for a back injury of mine. This happened a couple of months ago, and I was in severe pain. So Dr. Aparna actually tapped me on the back so that I could do my daily activities and so that my work week was not affected. And over the course of the last one and a half months, I have become independent and I'm able to do all the activities again with minimal problems and pain. So I have seen the progress in my posture and in the way I am doing day-to-day activities. And there is a lot of change which I am noticing in terms of how I feel and how I'm getting things done. So I highly recommend Dr. Aparna for all your needs of physical therapy. Thank you.",
      author: "Ms. Smriti",
      leftVideo: "assets/testimonial-videos/MsSmritiTestimonial.mov",
      rightImage: "assets/testimonial-videos/testimonial-img1.png",
      platform: "Google reviews",
    },
    {
      id: 1,
      text: "Hi, this is Mala. I had an umbilical hernia surgery in January. After my umbilical hernia surgery, Dr. Aparna's unique combination of physiotherapy and Ayurveda helped me recover far beyond my expectations. Her exercises improved my mobility immediately, while Ayurvedic treatments eased bloating, supported scar healing, and strengthened my core. Within six weeks, I was back to yoga and all my normal activities.",
      author: "Mrs. Mala",
      leftVideo: "assets/testimonial-videos/MrsMalaTestimonialTake2.mov",
      rightImage: "assets/testimonial-videos/testimonial-img3.png",
      platform: "Google reviews",
    },
    {
      id: 2,
      text: "Hello, This is Dr. Suri. I'm an acupunctress from California. I've had the opportunity to work with Dr. Aparna, and I really come to appreciate both her knowledge and the care she puts into her work. One thing that stands out to me is that how much she truly listens. She takes time to understand each person's concerns and creates an approach that feels personalized and thoughtful rather than one-size-fits-all. I would highly recommend experiencing the integrative approach that Dr. Aparna and Svaparna Health bring to supporting health and wellness.",
      author: "Dr. Suri",
      leftVideo: "assets/testimonial-videos/DrSuriTestimonial.mp4",
      rightImage: "assets/testimonial-videos/testimonial-img2.png",
      platform: "Google reviews",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="reviews"
      className="py-12 sm:py-14 bg-[#fffef7] text-primary-brand relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[#fcf7f4] rounded-[2rem] sm:rounded-[2.25rem] p-4 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-xs border border-primary-brand/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10 text-left relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Testimonials
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary-brand tracking-tight">
                Recovery, in Their Own Words.
              </h2>
            </div>

            <div className="shrink-0 flex items-center space-x-4">
              <button
                id="btn-read-more-reviews"
                onClick={() => window.open("https://google.com", "_blank")}
                className="inline-flex items-center justify-center bg-primary-brand text-white hover:bg-[#52133a] active:scale-98 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-2xs transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                Read More Reviews
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-6 items-stretch"
              >
                <div className="lg:col-span-8 flex flex-col md:flex-row bg-white rounded-[1.75rem] overflow-hidden shadow-[0_10px_35px_rgba(99,26,71,0.02)] border border-primary-brand/5">
                  <div className="w-[full] md:w-[38%] relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[60vh] min-h-[200px] bg-black">
                    <video
                      src={testimonials[currentIndex].leftVideo}
                      className="w-full h-full object-cover object-center"
                      controls
                      preload="metadata"
                      playsInline
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/5 to-transparent" />
                  </div>

                  <div className="w-full md:w-[62%] p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between text-left space-y-6 bg-white">
                    <div>
                      <span className="font-serif text-5xl sm:text-6xl leading-none text-gold-start select-none block -mt-2 -ml-2 font-black">
                        “
                      </span>
                      <p className="text-xs sm:text-sm md:text-[15px] text-neutral-900 leading-relaxed font-light font-sans mt-2">
                        {testimonials[currentIndex].text}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4 pt-4 border-t border-primary-brand/10">
                      <span className="font-serif text-sm sm:text-base font-bold text-primary-brand">
                        {testimonials[currentIndex].author}
                      </span>

                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.11-.3-.23-.63-.35-.63z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>

                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 text-amber-500 fill-amber-500"
                              />
                            ))}
                          </div>
                        </div>

                        <span className="text-[8px] font-bold text-primary-brand/50 mt-1 uppercase tracking-widest font-mono">
                          {testimonials[currentIndex].platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 relative h-[240px] sm:h-[280px] lg:h-[60vh] rounded-[1.75rem] overflow-hidden shadow-[0_10px_35px_rgba(99,26,71,0.02)] border border-primary-brand/5">
                  <img
                    src={testimonials[currentIndex].rightImage}
                    alt="Active pain-free physical outcome"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-4 sm:space-x-6 relative z-20">
            <button
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-primary-brand/20 text-primary-brand flex items-center justify-center hover:bg-primary-brand/5 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(t.id)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === t.id
                      ? "bg-primary-brand w-6"
                      : "bg-primary-brand/20 w-2"
                  }`}
                  aria-label={`Go to slide ${t.id + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-primary-brand/20 text-primary-brand flex items-center justify-center hover:bg-primary-brand/5 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
