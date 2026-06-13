"use client";

import { motion } from "motion/react";
import { Calendar, Check, Info } from "lucide-react";

interface PricingSectionProps {
  openCalendly: (url: string) => void;
}

const physioUrl = "https://calendly.com/qusaivsbizz/new-meeting";
const ayurvedaUrl = "https://calendly.com/qusaivsbizz/30min";

export default function PricingSection({ openCalendly }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="bg-[#fffef7] py-20 border-t border-primary-brand/5 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
            <span className="text-sm font-mono uppercase tracking-widest text-[#631a47]">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Simple, Honest Pricing
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed">
            Every session is 1-on-1 with Dr. Aparna. No assistants, no hidden fees.
          </p>
        </div>

        {/* ── 3-column pricing table ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-brand/8 rounded-[2rem] overflow-hidden shadow-sm">

          {/* ── Col 1: Physiotherapy (India) ── */}
          <div className="bg-white p-5 sm:p-8 flex flex-col gap-6">
            <div>
              <span className="text-base font-mono font-extrabold uppercase tracking-[0.18em] text-gold-start">
                Physiotherapy
              </span>
              <p className="text-sm text-neutral-400 mt-1">India only · Online + Mumbai in-person (coming soon)</p>
            </div>

            <div className="space-y-1">
              <Row label="Initial Consultation" sub="60 min" price="₹2,000" />
              <Row label="Follow-up Session" sub="45 min" price="₹1,500" />
            </div>

            {/* Packages */}
            <div className="bg-primary-brand/[0.03] border border-primary-brand/8 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-gold-start">Packages</span>
                <span className="text-xs bg-amber-50 border border-amber-200 text-amber-700 font-semibold px-2 py-0.5 rounded-full">After 1st session</span>
              </div>
              <PackageRow label="6 Sessions" price="₹7,200" per="₹1,200 / session" />
              <PackageRow label="12 Sessions" price="₹12,000" per="₹1,000 / session" />
            </div>

            <button
              onClick={() => openCalendly(physioUrl)}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold bg-gradient-to-r from-gold-start to-gold-end text-primary-brand hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Physiotherapy
            </button>
          </div>

          {/* ── Col 2: Ayurveda India ── */}
          <div className="bg-white p-5 sm:p-8 flex flex-col gap-6">
            <div>
              <span className="text-base font-mono font-extrabold uppercase tracking-[0.18em] text-gold-start">
                Ayurvedic Care · India
              </span>
              <p className="text-sm text-neutral-400 mt-1">Online + Mumbai in-person (coming soon)</p>
            </div>

            <div className="space-y-1">
              <Row label="Initial Consultation" sub="60 min" price="₹2,000" />
              <Row label="Follow-up Session" sub="45 min" price="₹1,500" />
            </div>

            <ul className="space-y-2.5 flex-1">
              {[
                "Prakriti (constitutional) analysis",
                "Nadi Pariksha (pulse diagnosis)",
                "Personalised diet & lifestyle plan",
                "Herbal & supplement guidance",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-start shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openCalendly(ayurvedaUrl)}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold border border-primary-brand/15 bg-primary-brand/8 text-primary-brand hover:bg-primary-brand hover:text-white transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Ayurvedic (India)
            </button>
          </div>

          {/* ── Col 3: Ayurveda USA ── */}
          <div className="bg-white p-5 sm:p-8 flex flex-col gap-6">
            <div>
              <span className="text-base font-mono font-extrabold uppercase tracking-[0.18em] text-gold-start">
                Ayurvedic Care · USA
              </span>
              <p className="text-sm text-neutral-400 mt-1">Online only</p>
            </div>

            <div className="space-y-1">
              <Row label="Initial Consultation" sub="60 min" price="$150" />
              <Row label="Follow-up Session" sub="45 min" price="$75" />
            </div>

            <ul className="space-y-2.5 flex-1">
              {[
                "Prakriti (constitutional) analysis",
                "Nadi Pariksha (pulse diagnosis)",
                "Personalised diet & lifestyle plan",
                "Herbal & supplement guidance",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-start shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600">{f}</span>
                </li>
              ))}
            </ul>

            {/* Physio not available note */}
            <div className="flex items-start gap-2.5 bg-primary-brand/[0.03] border border-primary-brand/8 rounded-xl p-4">
              <Info className="w-4 h-4 text-primary-brand/30 shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-400 leading-relaxed">
                Physiotherapy is not available for USA clients due to licensing regulations.
              </p>
            </div>

            <button
              onClick={() => openCalendly(ayurvedaUrl)}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold bg-gradient-to-r from-gold-start to-gold-end text-primary-brand hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Ayurvedic (USA)
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-neutral-400 mt-8 font-light">
          Session packages (6 & 12) are available for physiotherapy only, unlocked after your first consultation
        </p>
      </motion.div>
    </section>
  );
}

function Row({ label, sub, price }: { label: string; sub: string; price: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-primary-brand/8 last:border-0">
      <div>
        <p className="text-base font-medium text-neutral-800">{label}</p>
        <p className="text-xs text-neutral-400 mt-0.5">{sub}</p>
      </div>
      <span className="font-serif text-2xl font-normal text-primary-brand shrink-0">{price}</span>
    </div>
  );
}

function PackageRow({ label, price, per }: { label: string; price: string; per: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-primary-brand">{label}</span>
      <div className="text-right">
        <span className="font-serif text-lg font-normal text-primary-brand">{price}</span>
        <p className="text-xs text-neutral-400">{per}</p>
      </div>
    </div>
  );
}
