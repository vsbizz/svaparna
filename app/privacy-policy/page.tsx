"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Eye,
  Lock,
  FileText,
  Calendar,
  AlertTriangle,
  FileCheck2,
  Users,
} from "lucide-react";
import CTABand from "../components/home/CTABand";

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">
      
      {/* ── 1. HERO HEADER ────────────────────────────────────────────────── */}
      <section className="relative pt-20 sm:pt-28 pb-12 lg:pt-36">
        {/* Top accent bar matching your theme */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Legal Documentation
              </span>
            </div>
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-primary-brand tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="font-serif text-sm sm:text-base font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-start to-gold-end uppercase">
              Effective Date: June 29, 2026 · Last Updated: June 29, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. POLICY CONTENT ────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-primary-brand/10 p-6 sm:p-10 lg:p-12 space-y-12 text-neutral-700 text-base leading-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Introduction */}
            <div>
              <p>
                Svaparna Health (“we,” “our,” or “us”) operates <strong>svaparnahealth.com</strong> (the “Site”) to provide Integrative Health Services including Physiotherapy and Ayurvedic Consultations and Follow-up Sessions. This Privacy Policy explains how we collect, use, protect, and retain your personal and health information.
              </p>
              <p className="mt-4">
                We serve clients primarily in India and the United States of America. Your privacy is taken seriously and your data is handled with the same care we bring to your health.
              </p>
            </div>

            <hr className="border-primary-brand/10" />

            {/* 1. Services Covered */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#c8a358]" /> 1. Services Covered by This Policy
              </h2>
              <p>This Privacy Policy applies to all services offered through Svaparna Health, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Physiotherapy Consultations and Follow-up Sessions</strong> — in person in India and online in India.</li>
                <li><strong>Ayurvedic Consultations and Follow-up Sessions</strong> — in person in India and online globally, including clients based in the United States of America.</li>
              </ul>
            </div>

            {/* 2. Information We Collect */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Eye className="w-5 h-5 text-[#c8a358]" /> 2. Information We Collect
              </h2>
              <p>We collect only the information necessary to provide you with safe, coordinated, and effective care.</p>
              
              <div className="mt-6 space-y-4">
                <div className="p-5 rounded-2xl border border-primary-brand/10 bg-[#fbf5f9]/40">
                  <h3 className="font-bold text-primary-brand text-base">Contact Information</h3>
                  <p className="text-sm mt-1 leading-relaxed">Your name, email address, phone number, and location, collected when you book a consultation or contact us directly.</p>
                </div>
                <div className="p-5 rounded-2xl border border-primary-brand/10 bg-[#fbf5f9]/40">
                  <h3 className="font-bold text-primary-brand text-base">Health and Consultation Information</h3>
                  <p className="text-sm mt-1 leading-relaxed">Symptoms, medical history, diet and lifestyle details, reports, and any other health information you share during intake or consultation. This information is used solely to support your care.</p>
                </div>
                <div className="p-5 rounded-2xl border border-primary-brand/10 bg-[#fbf5f9]/40">
                  <h3 className="font-bold text-primary-brand text-base">Scheduling Information</h3>
                  <p className="text-sm mt-1 leading-relaxed">When you book through our website via Calendly, your name, email address, and scheduling preferences are collected by Calendly under their own Privacy Policy. We receive confirmation details to coordinate your appointment.</p>
                </div>
                <div className="p-5 rounded-2xl border border-primary-brand/10 bg-[#fbf5f9]/40">
                  <h3 className="font-bold text-primary-brand text-base">Technical Information</h3>
                  <p className="text-sm mt-1 leading-relaxed">Standard website analytics tools may collect your IP address, browser type, and page interaction data to help us maintain and improve the Site. This data is not linked to your personal health information.</p>
                </div>
              </div>
            </div>

            {/* 3. How We Use */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-[#c8a358]" /> 3. How We Use Your Information
              </h2>
              <p>Your information is used exclusively to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Schedule, confirm, and manage your appointments</li>
                <li>Conduct clinical assessments and deliver Physiotherapy and Ayurveda related services</li>
                <li>Communicate with you regarding your care, follow-up, and any changes to your appointments</li>
                <li>Issue invoices and process payments</li>
                <li>Maintain accurate clinical records in accordance with professional and legal standards</li>
                <li>Comply with applicable laws and regulatory requirements in India and the United States</li>
              </ul>
              <p className="pt-2 italic text-sm text-neutral-600">We do not use your information for marketing purposes without your explicit consent.</p>
            </div>

            {/* 4. Telehealth and Communication */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#fbf5f9] border border-primary-brand/8 space-y-4">
              <h2 className="font-serif text-xl text-primary-brand font-semibold">4. Telehealth and Communication</h2>
              <div className="space-y-3 text-sm leading-7">
                <p>
                  <strong>Video Consultations:</strong> Online consultations are conducted via Google Meet. All video and audio transmissions are encrypted in transit. Sometimes clients request video recordings of exercises or techniques performed during the session. We try our best to share the recordings of our clients based on their above request. We do not record consultations without your prior explicit written consent.
                </p>
                <p>
                  <strong>Email Communication:</strong> All email correspondence is managed through secure Google Workspace infrastructure using a domain-specific professional email account.
                </p>
                <p>
                  <strong>WhatsApp Business:</strong> For appointment coordination, payment confirmation, sharing of medical reports, treatment protocols, assessments and follow-up communication, we use WhatsApp Business. Please be aware that while WhatsApp uses end-to-end encryption, it is not a clinically certified secure platform. By communicating with us via WhatsApp you acknowledge and accept this.
                </p>
              </div>
            </div>

            {/* 5. Payments */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#c8a358]" /> 5. Payments
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>Indian Clients:</strong> Payments are currently collected manually via bank transfer or UPI. Details are shared directly upon booking confirmation.</p>
                <p><strong>US and International Clients:</strong> Payments are processed via PayPal. Your financial information is handled directly by PayPal under their Privacy Policy and PCI-DSS compliant security protocols. We do not store your payment details.</p>
                <p><strong>Future Payment Integration:</strong> We intend to integrate an online payment gateway such as Razorpay or Stripe in the future. When active, all transactions will be processed directly by the payment provider under their respective security protocols. This Privacy Policy will be updated accordingly.</p>
              </div>
            </div>

            {/* 6. Sharing and Disclosure */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Users className="w-5 h-5 text-[#c8a358]" /> 6. Sharing and Disclosure
              </h2>
              <p>We do not sell, rent, or trade your personal or health information under any circumstances.</p>
              <p>Your information may be shared only in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>Service Providers:</strong> Trusted third-party platforms including Google Workspace and Calendly, used strictly to operate our scheduling and communication systems. These providers are bound by their own privacy and security policies.</li>
                <li><strong>Legal Requirements:</strong> Where required by applicable law, court order, or regulatory authority in India or the United States. We will notify you of any legally required disclosure where permitted to do so.</li>
              </ul>
            </div>

            {/* 7. Data Retention */}
            <div className="p-6 rounded-2xl bg-white border border-[#c8a358]/20 border-l-[4px] border-l-[#c8a358]">
              <h3 className="font-serif text-lg text-primary-brand font-bold mb-1">7. Data Retention</h3>
              <p className="text-sm leading-relaxed">
                We retain your personal information and clinical consultation records for <strong>7 years</strong> following your last consultation with Svaparna Health. This period reflects professional medical record-keeping standards and applicable legal obligations in both India and the United States. Following this period, your data is securely deleted or permanently anonymized.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">8. Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-primary-brand/10 bg-[#fffef7]">
                  <h4 className="font-serif text-lg font-bold text-[#631a47] mb-2">Indian Clients</h4>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#c8a358] mb-2">DPDP Act, 2023</p>
                  <p className="text-sm leading-6">You have the right to access, correct, and request deletion of your personal data. To exercise any of these rights please contact us directly.</p>
                </div>
                <div className="p-6 rounded-2xl border border-primary-brand/10 bg-[#fffef7]">
                  <h4 className="font-serif text-lg font-bold text-[#631a47] mb-2">US Clients</h4>
                  <p className="text-xs uppercase tracking-wider font-bold text-[#c8a358] mb-2">Administrative Safeguards</p>
                  <p className="text-sm leading-6">While Svaparna Health is not a HIPAA-covered entity in the traditional sense, we maintain rigorous administrative and technical safeguards for all health information shared with us. You may request access to or deletion of your personal data at any time by contacting us directly.</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 italic mt-2"><strong>All Clients:</strong> You may withdraw consent for us to hold your data at any time. Please note that withdrawal of consent may affect our ability to continue providing services to you.</p>
            </div>

            {/* 9. Data Security */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">9. Data Security</h2>
              <p>We implement reasonable and appropriate technical and administrative measures to protect your personal and health information from unauthorized access, loss, or disclosure.</p>
              <p>However, no method of internet transmission or digital storage is entirely secure. While we are committed to protecting your information, we cannot guarantee absolute security of data transmitted online. By using our Site and services you acknowledge and accept this inherent limitation.</p>
            </div>

            {/* 10. Third-Party Links */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">10. Third-Party Links</h2>
              <p>Our Site may reference or link to third-party resources, platforms, or tools. Svaparna Health is not responsible for the privacy practices or content of any third-party sites. We encourage you to review the privacy policies of any external platforms you use in connection with our services.</p>
            </div>

            {/* 11. Children's Privacy */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">11. Children’s Privacy</h2>
              <p>Our services are intended for adults aged 18 and above. We do not knowingly collect personal information from individuals under 18 without verified parental or guardian consent. If you believe a minor has submitted information to us please contact us immediately.</p>
            </div>

            {/* 12. Updates to This Policy */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">12. Updates to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our services, technology, or legal obligations. When we do, the updated date at the top of this page will be revised. We encourage you to review this policy periodically. Continued use of our services following any update constitutes your acceptance of the revised policy.</p>
            </div>

            {/* 13. Contact Us */}
            <div className="space-y-4 pt-4 border-t border-primary-brand/10">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-[#c8a358]" /> 13. Contact Us
              </h2>
              <p>
                For any questions, concerns, or requests regarding this Privacy Policy or your personal data please reach out using the contact us page on our website or visit our online dashboard portal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CTA BAND ──────────────────────────────────────────────────── */}
      <CTABand
        title="Have Questions About Your Privacy?"
        description="We are committed to securing your clinical records and health history with rigorous safeguards. Contact our support intake team directly."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Get in Touch",
            href: "/#contact",
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
        ]}
      />
    </main>
  );
}