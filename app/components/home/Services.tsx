"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Clover } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const mainServices: ServiceItem[] = [
  {
    id: "msrv-pelvic",
    title: "Pelvic Floor Rehabilitation",
    description:
      "Specialized women's health addressing urinary incontinence and pelvic floor dysfunction.",
    image: "/assets/images/Pelvic-Floor-Rehabilitation.webp",
  },
  {
    id: "msrv-pregnancy",
    title: "Pregnancy & Postpartum Care",
    description:
      "Management of low back pain during pregnancy, postpartum rehabilitation, and diastasis recti recovery.",
    image: "/assets/images/Pregnancy-Postpartum-Care.webp",
  },
  {
    id: "msrv-pediatric",
    title: "Pediatric Care",
    description:
      "Gentle management of bowel and bladder issues in children such as constipation and bedwetting.",
    image: "/assets/images/pediatric-care.jpg",
  },
  {
    id: "msrv-vestibular",
    title: "Vestibular Rehabilitation",
    description:
      "Specialized assessment and treatment for vertigo (BPPV), dizziness, and balance disorders.",
    image: "/assets/images/Vestibular-Rehabilitation.webp",
  },
  {
    id: "msrv-ortho",
    title: "Orthopedic & Sports Rehab",
    description:
      "Relief from low back pain, neck pain, ankle sprains, and sports injuries.",
    image: "/assets/images/sport.webp",
  },
  {
    id: "msrv-surgery",
    title: "Pre/Post-Surgical Rehabilitation",
    description:
      "Guided recovery to restore function, mobility, and strength after any surgery.",
    image: "/assets/images/Pre-Post-Surgical-Rehabilitation.jpg",
  },
];

/* ── New image-always-visible card ── */
function NewServiceCard({
  item,
  index,
}: {
  item: ServiceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group bg-white border border-primary-brand/10 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3]">
        <div className="w-full h-full overflow-hidden rounded-t-[2rem]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>

        {/* Floating Icon */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30">
          <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-primary-brand/10">
            <div className="w-10 h-10 rounded-full bg-primary-brand/5 flex items-center justify-center">
              <Clover className="w-5 h-5 text-primary-brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-12 pb-7 text-center">
        <h3 className="font-serif text-xl font-normal text-primary-brand leading-snug group-hover:text-gold-start transition-colors duration-300">
          {item.title}
        </h3>

        <div className="w-8 h-px bg-gold-start/50 mx-auto my-3" />

        <p className="mt-4 max-w-md text-base leading-7 text-neutral-700 transition-colors duration-500 group-hover:text-primary-brand/85 group-hover:font-bold">
          {item.description}
        </p>

        <a
          href="#pricing"
          className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brand hover:text-gold-start transition-colors duration-300"
        >
          View Packages
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesGridSection() {
  return (
    <>
      {/* ── NEW: image-always-visible grid (for client comparison) ── */}
      <section className="bg-[#fffef7] px-4 py-16 sm:px-6 lg:px-8 border-t border-primary-brand/5">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#631a47]">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
              Our Specialized Physiotherapy Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((item, index) => (
              <NewServiceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
