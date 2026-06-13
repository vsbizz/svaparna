"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  };

  return (
    <main className="bg-[#fffef7] min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
            <span className="text-xs font-mono uppercase tracking-widest text-[#631a47]">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Contact Us
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed">
            Have a question or ready to begin your journey? Reach out and Dr. Aparna's team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

          {/* ── Left: contact details ── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactCard
              icon={<Phone className="w-5 h-5 text-primary-brand" />}
              label="Phone"
              lines={["+91 98929 24914"]}
            />
            <ContactCard
              icon={<Mail className="w-5 h-5 text-primary-brand" />}
              label="Email"
              lines={["contact@svaparnahealth.com"]}
            />
            <ContactCard
              icon={<MapPin className="w-5 h-5 text-primary-brand" />}
              label="Location"
              lines={["Mumbai, India (In-Person, Coming Soon)", "USA & India (Online)"]}
            />
            <ContactCard
              icon={<Clock className="w-5 h-5 text-primary-brand" />}
              label="Hours"
              lines={["Mon – Fri: 9:00 AM – 6:00 PM IST", "Sat: 10:00 AM – 2:00 PM IST"]}
            />

            {/* Book via Calendly */}
            <div className="bg-primary-brand rounded-[1.5rem] p-6 text-white space-y-3">
              <p className="font-serif text-xl font-normal">Ready to book?</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Skip the form and schedule directly with Dr. Aparna.
              </p>
              <a
                href="https://calendly.com/qusaivsbizz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-semibold text-sm px-5 py-3 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book a Consultation
              </a>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            className="lg:col-span-2 bg-white border border-primary-brand/10 rounded-[2rem] p-8 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary-brand/10 flex items-center justify-center">
                  <Send className="w-7 h-7 text-primary-brand" />
                </div>
                <h3 className="font-serif text-2xl text-primary-brand">Message Sent!</h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  Thank you for reaching out. Dr. Aparna's team will get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-4 text-sm font-semibold text-primary-brand underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-serif text-2xl font-normal text-primary-brand mb-6">
                  Send a Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  <Field label="Full Name" required>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      required
                      className="input-base"
                    />
                  </Field>
                  <Field label="Email Address" required>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@email.com"
                      required
                      className="input-base"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  <Field label="Phone Number">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Subject" required>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="input-base"
                    >
                      <option value="">Select a topic</option>
                      <option>Physiotherapy Consultation (India)</option>
                      <option>Ayurvedic Consultation (India)</option>
                      <option>Ayurvedic Consultation (USA)</option>
                      <option>Session Packages</option>
                      <option>General Enquiry</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" required>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your condition or question..."
                    required
                    className="input-base resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold bg-gradient-to-r from-gold-start to-gold-end text-primary-brand hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(99, 26, 71, 0.15);
          border-radius: 0.75rem;
          background: #fffef7;
          color: #3b1a2e;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-base:focus {
          border-color: rgba(99, 26, 71, 0.4);
          box-shadow: 0 0 0 3px rgba(99, 26, 71, 0.06);
        }
        .input-base::placeholder {
          color: rgba(99, 26, 71, 0.3);
        }
      `}</style>
    </main>
  );
}

function ContactCard({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 bg-white border border-primary-brand/10 rounded-[1.5rem] p-5 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-primary-brand/8 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-[#9b6b3a] mb-1">{label}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-neutral-700 leading-relaxed">{l}</p>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-primary-brand/60">
        {label}{required && <span className="text-gold-start ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
