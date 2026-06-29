"use client";

import { motion } from "motion/react";
import {
  Scale,
  FileWarning,
  HelpCircle,
  Calendar,
  ShieldAlert,
  ClipboardList,
  Fingerprint,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Globe2,
  Lock as LockIcon,
} from "lucide-react";
import CTABand from "../components/home/CTABand";

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">
      
      {/* ── 1. HERO HEADER ────────────────────────────────────────────────── */}
      <section className="relative pt-20 sm:pt-28 pb-12 lg:pt-36">
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
                Service Agreement
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
              Terms & Conditions
            </h1>
            <p className="font-serif text-sm sm:text-base font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-start to-gold-end uppercase">
              Effective Date: June 29, 2026 · Last Updated: June 29, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TERMS CONTENT ────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-primary-brand/10 p-6 sm:p-10 lg:p-12 space-y-12 text-neutral-700 text-base leading-8 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Preamble */}
            <div>
              <p>
                Please read these Terms and Conditions carefully before using our website or booking any Session with Svaparna Health. By accessing our Site or engaging our services you agree to be bound by these Terms. If you do not agree please do not use our services.
              </p>
            </div>

            <hr className="border-primary-brand/10" />

            {/* 1. About Svaparna Health */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c8a358]" /> 1. About Svaparna Health
              </h2>
              <p>
                Svaparna Health is an Integrative Health Practice founded and operated by Dr. Aparna Sekhar, a Senior Physiotherapist with over 13 years of clinical experience and a certified Ayurvedic Practitioner.
              </p>
              <p>Svaparna Health offers the following services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Physiotherapy Consultations and Follow-up Sessions</strong> — in person in India and online</li>
                <li><strong>Ayurvedic Consultations and Follow-up Sessions</strong> — in person in India and online globally including clients based in the United States</li>
              </ul>
              <p>Our website is located at <strong>svaparnahealth.com</strong> and operates from Mumbai, India.</p>
            </div>

            {/* 2. Acceptance of Terms */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-[#c8a358]" /> 2. Acceptance of Terms
              </h2>
              <p>By using this Site, booking a consultation, or engaging with Svaparna Health in any capacity you confirm that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You are at least 18 years of age or are booking on behalf of a minor with full parental or guardian authority</li>
                <li>You have read, understood, and agree to these Terms and Conditions in their entirety</li>
                <li>You agree to our Privacy Policy which forms part of these Terms by reference</li>
              </ul>
            </div>

            {/* 3. Nature of Services */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Scale className="w-5 h-5 text-[#c8a358]" /> 3. Nature of Services
              </h2>
              
              <div className="space-y-3 pl-2 border-l border-primary-brand/10">
                <h3 className="font-serif text-lg font-bold text-[#631a47]">3.1 Physiotherapy Services</h3>
                <p className="text-sm">
                  Physiotherapy Consultations and Follow-up Sessions at Svaparna Health are provided by a Senior Physiotherapist within the applicable scope of practice. These services include clinical assessment, rehabilitation guidance, and therapeutic recommendations for musculoskeletal, vestibular, pelvic floor and related physical conditions.
                </p>
                <p className="text-sm font-semibold">Physiotherapy Services are currently offered:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>In person in Mumbai, India</li>
                  <li>Online via telehealth for clients within India</li>
                </ul>
              </div>

              <div className="space-y-3 pl-2 border-l border-primary-brand/10">
                <h3 className="font-serif text-lg font-bold text-[#631a47]">3.2 Ayurvedic Consultations</h3>
                <p className="text-sm">
                  Ayurvedic Consultations and Follow-up Sessions at Svaparna Health involve detailed Ayurvedic constitutional and imbalance analysis, diet and lifestyle guidance.
                </p>
                <p className="text-sm font-semibold">These consultations:</p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Are not a substitute for medical diagnosis or treatment</li>
                  <li>Do not constitute the practice of medicine under any applicable medical practice act</li>
                  <li>Are not intended to diagnose, cure, treat, or prevent any disease or medical condition</li>
                  <li>Are provided as educational and constitutional guidance based on Ayurvedic principles</li>
                </ul>
                <p className="text-sm italic text-neutral-600">
                  Clients are advised and encouraged to consult a licensed physician or appropriate medical professional for the diagnosis and treatment of any health condition. Ayurvedic guidance provided by Svaparna Health is complementary to and not a replacement for conventional medical care.
                </p>
              </div>

              <div className="space-y-2 pl-2 border-l border-primary-brand/10">
                <h3 className="font-serif text-lg font-bold text-[#631a47]">3.3 Integrative Approach</h3>
                <p className="text-sm">
                  Where Physiotherapy and Ayurvedic principles are discussed together within a session, the clinical and regulatory boundaries of each modality remain distinct. Physiotherapy services and Ayurvedic guidance are provided within their respective and separate scopes of practice at all times.
                </p>
              </div>
            </div>

            {/* 4. Telehealth Services */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#c8a358]" /> 4. Telehealth Services
              </h2>
              <div className="space-y-3 text-sm">
                <p><strong>4.1 Platform:</strong> Online consultations are conducted via Google Meet. By booking an online consultation you confirm that you have access to a stable internet connection and a device capable of supporting video consultation.</p>
                <p><strong>4.2 Technical Limitations:</strong> Svaparna Health is not responsible for service interruptions, technical failures, connectivity issues, or any limitations arising from your device, internet connection, or third party platform performance. In the event of a significant technical disruption during a consultation or a follow-up session we will make reasonable efforts to reschedule or continue the session.</p>
                <p><strong>4.3 Jurisdiction and Eligibility:</strong> It is your responsibility to confirm that receiving telehealth or consultation services from a practitioner based in India is permitted under the laws and regulations applicable in your location. Svaparna Health does not accept liability for any regulatory non-compliance arising from your local jurisdiction.</p>
                <p><strong>4.4 Recording:</strong> Consultations and sessions are not recorded without your prior explicit written consent. Unauthorized recording of any session by the client is strictly prohibited.</p>
              </div>
            </div>

            {/* 5. Booking and Appointments Framework */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#fbf5f9] border border-primary-brand/8 space-y-4">
              <h2 className="font-serif text-xl text-primary-brand font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#631a47]" /> 5. Booking and Appointments
              </h2>
              <div className="space-y-3 text-sm leading-7">
                <p><strong>5.1 Scheduling:</strong> Appointments are booked through our website via Calendly. By booking an appointment you agree to Calendly’s own Terms of Service and Privacy Policy in addition to these Terms.</p>
                <p><strong>5.2 Confirmation:</strong> Your appointment is confirmed upon receipt of booking confirmation via email and payment of the applicable consultation fee as outlined in Section 6.</p>
                
                <div className="bg-white/80 rounded-xl p-4 border border-primary-brand/5 my-2">
                  <p><strong>5.3 Cancellations and Rescheduling by Client:</strong> We require a minimum of <strong>24 hours notice</strong> for cancellation or rescheduling of any appointment.</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Cancellations made with more than 24 hours notice will receive a full credit toward a future appointment.</li>
                    <li>Cancellations made with less than 24 hours notice and No-shows without prior notice will forfeit the full fee for the appointment.</li>
                  </ul>
                </div>

                <p><strong>5.4 Cancellations by Svaparna Health:</strong> In the event that Svaparna Health needs to cancel or reschedule your appointment we will provide as much advance notice as possible and offer a full credit or refund of any prepaid fee.</p>
                <p><strong>5.5 Late Arrivals:</strong> If you arrive or connect more than 15 minutes late to your scheduled appointment the session may be shortened accordingly or rescheduled at our discretion. The full session fee remains applicable.</p>
              </div>
            </div>

            {/* 6. Fees and Payment */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <LockIcon className="w-5 h-5 text-[#c8a358]" /> 6. Fees and Payment
              </h2>
              <div className="space-y-3 text-sm">
                <p><strong>6.1 Consultation Fees:</strong> Current fees for the sessions are listed on our Services page. Svaparna Health reserves the right to update fees at any time. Fee changes will not apply to appointments already confirmed and paid.</p>
                <p><strong>6.2 Payment — Indian Clients:</strong> Clients based in India may pay via UPI or bank transfer. Payment details will be shared via WhatsApp Business upon booking confirmation. Payment is due prior to or at the time of consultation unless otherwise agreed.</p>
                <p><strong>6.3 Payment — US and International Clients:</strong> Clients based in the United States and internationally may pay via PayPal. Payment details will be shared upon booking confirmation. Payment is due prior to the consultation.</p>
                <p><strong>6.4 Future Payment Integration:</strong> Svaparna Health intends to integrate an online payment gateway in the future. These Terms will be updated to reflect any changes to payment processing at that time.</p>
                <p><strong>6.5 Refunds:</strong> Fees related to an appointment are non-refundable once a session has been completed.</p>
              </div>
            </div>

            {/* 7. Client Responsibilities */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <FileWarning className="w-5 h-5 text-[#c8a358]" /> 7. Client Responsibilities
              </h2>
              <p>By engaging Svaparna Health’s services you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Provide complete, accurate, and current information regarding your health history, medications, conditions, and any other relevant details prior to and during consultation</li>
                <li>Inform your care provider immediately of any changes to your health status that may affect your care</li>
                <li>Follow up with a licensed physician or appropriate medical professional for any condition requiring medical diagnosis or treatment</li>
                <li>Not use Svaparna Health’s services as a substitute for emergency medical care</li>
                <li>Engage respectfully and professionally in all communications with Svaparna Health</li>
              </ul>
              <p className="text-sm font-semibold text-neutral-800 mt-2">Svaparna Health accepts no liability for any adverse outcome arising from your failure to disclose complete and accurate health information.</p>
            </div>

            {/* 8. No Emergency Services Critical Alert */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#fbf5f9] border border-red-200/60 text-neutral-800 space-y-3">
              <h3 className="font-serif text-xl font-normal text-red-800 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-700" /> 8. No Emergency Services
              </h3>
              <p className="text-sm leading-7">
                Svaparna Health does not provide emergency medical services. Our services are not designed or intended for acute, urgent, or emergency care situations under any circumstances.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-bold text-sm text-[#631a47]">
                <div className="p-3 bg-white/60 rounded-xl border border-red-100">🇮🇳 India Emergency: Dial 112</div>
                <div className="p-3 bg-white/60 rounded-xl border border-red-100">🇺🇸 United States Emergency: Dial 911</div>
              </div>
            </div>

            {/* 9. Health Information Disclaimer */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">9. Health Information Disclaimer</h2>
              <p>Results from Physiotherapy and Ayurvedic Sessions vary between individuals. Svaparna Health does not guarantee specific outcomes, improvements, or results from any consultation or course of care.</p>
              <p>Information shared during the Sessions is based on the details you provide and constitutes professional guidance within the applicable scope of practice. It does not constitute a second opinion on any existing medical diagnosis or treatment plan without explicit prior agreement.</p>
            </div>

            {/* 10. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">10. Limitation of Liability</h2>
              <p className="text-sm">To the fullest extent permitted by applicable law:</p>
              <p className="text-sm">Svaparna Health and its founder shall not be liable for any indirect, incidental, consequential, special, or punitive damages of any kind arising from or related to your use of our services or this Site, including but not limited to: adverse reactions to diet or lifestyle recommendations; failure to achieve expected health outcomes; decisions made based on consultation guidance; technical failures of third party platforms used to deliver services; or unauthorized access to data transmitted through third party platforms.</p>
              <div className="p-4 rounded-xl bg-white border border-primary-brand/10 text-sm font-semibold">
                Our total liability to any client for any claim arising directly from our services shall not exceed the total fees paid by that client for the specific consultation giving rise to the claim.
              </div>
              <p className="text-xs text-neutral-500">Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
            </div>

            {/* 11. Indemnification */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">11. Indemnification</h2>
              <p className="text-sm leading-7">
                You agree to indemnify, defend, and hold harmless Svaparna Health, its founder, representatives, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses including reasonable legal fees arising out of or related to: your failure to disclose complete and accurate health information; your decision to discontinue, modify, or disregard consultation guidance without informing your practitioner; your use of third party platforms, links, or external resources; your voluntary sharing of personal health information through unsecured channels including personal email or WhatsApp; your violation of these Terms and Conditions; or any claim by a third party arising from your use of our services.
              </p>
            </div>

            {/* 12. Intellectual Property */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Fingerprint className="w-5 h-5 text-[#c8a358]" /> 12. Intellectual Property
              </h2>
              <p>All content on this Site including text, graphics, logos, images, and service descriptions is the intellectual property of Svaparna Health unless otherwise stated. No content may be copied, reproduced, distributed, or used for commercial purposes without our prior written consent.</p>
              <p>Consultation notes, health recommendations, and written materials provided to you during or following your consultation are for your personal use only and may not be shared, published, or distributed without written permission.</p>
            </div>

            {/* 13. Confidentiality */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">13. Confidentiality</h2>
              <p>All health information shared with Svaparna Health is treated as strictly confidential in accordance with our Privacy Policy. We will not disclose your personal or health information to any third party except as described in our Privacy Policy or as required by law.</p>
            </div>

            {/* 14. WhatsApp Business Disclosures */}
            <div className="p-6 rounded-2xl bg-white border border-[#c8a358]/20 border-l-[4px] border-l-[#c8a358] space-y-3">
              <h3 className="font-serif text-lg text-primary-brand font-bold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#c8a358]" /> 14. WhatsApp Business Communication
              </h3>
              <p className="text-sm leading-6">
                Svaparna Health uses WhatsApp Business for appointment coordination, payment confirmation, sharing of medical reports, treatment protocols, assessments and follow-up communication. While WhatsApp uses end-to-end encryption, it is not a clinically certified secure communication platform.
              </p>
              <p className="text-sm leading-6 font-semibold">By communicating with Svaparna Health via WhatsApp you acknowledge and accept that:</p>
              <ul className="list-disc pl-6 text-xs space-y-1 text-neutral-600">
                <li>WhatsApp is not a HIPAA-compliant or clinically certified secure platform</li>
                <li>You voluntarily choose to use this channel for communication</li>
                <li>Svaparna Health cannot be held liable for any breach of confidentiality arising from the inherent limitations of WhatsApp as a communication platform</li>
              </ul>
              <p className="text-xs italic text-neutral-500">For sensitive health information we recommend using our secure email channel wherever possible.</p>
            </div>

            {/* 15. Governing Law and Dispute Resolution */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-primary-brand font-normal flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-[#c8a358]" /> 15. Governing Law and Dispute Resolution
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>15.1 Indian Clients:</strong> These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</p>
                <p><strong>15.2 US and International Clients:</strong> For clients based in the United States, these Terms shall be governed by applicable US federal and state law. Where permitted by law, disputes shall first be referred to mediation before any formal legal proceedings are initiated. Both parties agree to make reasonable good faith efforts to resolve disputes informally before pursuing formal remedies.</p>
                <p><strong>15.3 General:</strong> Nothing in this clause prevents either party from seeking urgent injunctive relief from a court of competent jurisdiction where necessary.</p>
              </div>
            </div>

            {/* 16, 17, 18. Miscellaneous */}
            <div className="space-y-4 text-sm pt-4 border-t border-primary-brand/10">
              <p><strong>16. Changes to These Terms:</strong> Svaparna Health reserves the right to update or modify these Terms and Conditions at any time. The updated effective date will be reflected at the top of this page. Your continued use of our services following any update constitutes your acceptance of the revised Terms. We will make reasonable efforts to notify existing clients of any material changes via email.</p>
              <p><strong>17. Severability:</strong> If any provision of these Terms is found to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms entirely. The remaining provisions shall continue in full force and effect.</p>
              <p><strong>18. Entire Agreement:</strong> These Terms and Conditions together with our Privacy Policy constitute the entire agreement between you and Svaparna Health regarding your use of our services and supersede any prior agreements, representations, or understandings whether written or oral.</p>
            </div>

            {/* 19. Contact Us */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-primary-brand font-normal">19. Contact Us</h2>
              <p>
                For any questions regarding these Terms and Conditions please reach out through our contact us page on our website or visit our portal link.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CTA BAND ──────────────────────────────────────────────────── */}
      <CTABand
        title="Ready to Begin Your Care Routine?"
        description="Schedule a 1-on-1 holistic evaluation. Online consultations are available for internal Ayurvedic guidance globally and Physiotherapy inside India."
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Book Appointment",
            href: "/#consultations",
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
        ]}
      />
    </main>
  );
}