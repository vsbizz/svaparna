import Link from "next/link";
import { motion } from "motion/react";

interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

interface CTABandProps {
  title: string;
  description: string;
  image: string;
  buttons: CTAButton[];
}

export default function CTABand({
  title,
  description,
  image,
  buttons,
}: CTABandProps) {
  return (
    <section
      id="cta-band"
      className="flex flex-col items-center justify-between py-16 pb-30 text-primary-brand"
    >
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-t-[1.5rem] border border-primary-brand/5 bg-primary-brand/5 px-4 pt-20 pb-12 text-center shadow-lg sm:px-6 sm:rounded-t-[2.5rem] lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl font-normal tracking-tight text-primary-brand sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-3xl px-4 text-base leading-relaxed text-neutral-800">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {buttons.map((button, index) => {
            const content = (
              <>
                {button.icon}
                <span>{button.label}</span>
              </>
            );

            const className =
              button.variant === "secondary"
                ? "inline-flex items-center gap-2 rounded-full border border-primary-brand/15 bg-white px-8 py-3.5 text-xs font-semibold text-primary-brand shadow-sm transition-all duration-300 hover:shadow-md"
                : "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-start to-gold-end px-8 py-3.5 text-xs font-bold text-primary-brand shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl";

            if (button.href) {
              return (
                <Link key={index} href={button.href} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={index}
                onClick={button.onClick}
                className={className}
              >
                {content}
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="group relative aspect-[21/9] min-h-[300px] overflow-hidden rounded-b-[1.5rem] border border-b-primary-brand/5 shadow-lg sm:min-h-[420px] sm:rounded-b-[2.5rem]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center transition-all duration-1000 group-hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
