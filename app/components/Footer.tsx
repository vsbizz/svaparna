import { MouseEvent } from "react";
import { Phone, Clover, ChevronUp, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onBookClick?: () => void;
}

// Custom authentic Yelp floral starburst vector icon for maximum design accuracy
const YelpIcon = () => (
  <svg
    className="w-4 h-4 fill-current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.24 10.285V4.76c0-.465-.3-.885-.75-.99a4.845 4.845 0 00-2.115 0c-.45.105-.75.525-.75.99v5.525c0 .18.15.345.345.345h2.91a.345.345 0 00.36-.345zm4.845 1.635l4.335-3.3a1.05 1.05 0 00.18-1.485 5.115 5.115 0 00-1.74-1.29c-.435-.195-.945-.105-1.275.255l-3.87 3.825a.36.36 0 00-.03.495c.105.15.3.21.465.12l1.935-.62zm-6.09 1.155L6.66 17.41c-.33.36-.84.45-1.275.255a5.115 5.115 0 00-1.74-1.29 1.05 1.05 0 00.18-1.485l4.335-3.3a.36.36 0 00.495.03c.135.105.195.3.12.465l-.615 1.935zm-.96-4.665h-5.52c-.465 0-.885.3-.99.75a4.845 4.845 0 000 2.115c.105.45.525.75.99.75h5.52c.18 0 .345-.15.345-.345V8.755c.015-.195-.15-.345-.345-.345zm8.13 6.645l-3.87-3.825a.36.36 0 00-.495.03c-.105.135-.105.33 0 .465l3.87 3.825c.33.36.84.45 1.275.255a5.115 5.115 0 001.74-1.29 1.05 1.05 0 00-.18-1.485l-2.34.02z" />
  </svg>
);

export default function Footer({ onBookClick }: FooterProps) {
  const mapAddress = "200 Sutter St #602, San Francisco, CA 94108";
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(mapAddress)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;

  const handleScrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="relative w-full bg-white select-none">
      {/* ================= MAP SECTION ================= */}
      {/* <div className="relative w-full h-[450px] overflow-hidden bg-neutral-100">
        <iframe
          title="Svaparna Clinic Location Map"
          src="https://maps.google.com/maps?q=200%20Sutter%20St%20%23602,%20San%20Francisco,%20CA%2094108&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 pointer-events-auto"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        <div className="absolute left-4 sm:left-8 top-4 z-20 w-[calc(100%-2rem)] sm:w-[360px] bg-white text-left p-4 rounded-lg shadow-md border border-neutral-200/40 select-text font-sans">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-800 tracking-tight leading-tight select-text">
                200 Sutter St #602
              </h3>
              <p className="text-xs text-neutral-500/95 leading-relaxed select-text mt-0.5 max-w-[220px]">
                200 Sutter St #602, San Francisco, CA 94108, USA
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a73e8] hover:bg-[#155fc0] text-white flex items-center justify-center shadow-xs transition-colors"
                title="Get Directions"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.43 10.43L13.57 1.57c-.78-.78-2.05-.78-2.83 0l-8.91 8.91c-.78.78-.78 2.05 0 2.83l8.91 8.91c.78.78 2.05.78 2.83 0l8.91-8.92c.78-.78.78-2.05-.05-2.81zm-9.35 6.15v-2.08h-2.16v2.08h-1.83v-3h3.99V9.58l3 3.42-3 3.58z" />
                </svg>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center border border-neutral-300/50 shadow-xs transition-colors"
                title="View Larger Map"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-[50%] top-[45%] lg:left-[51%] md:top-[43%] translate-x-[-50%] translate-y-[-100%] pointer-events-none select-none z-10">
          <div className="relative flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#ea4335] text-white flex items-center justify-center border-2 border-white shadow-md animate-bounce-slow">
              <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-black/25 blur-xs mt-0.5" />
          </div>
        </div>
      </div> */}

      <div className="relative w-full bg-primary-brand text-white pb-12 z-20">
        {/* <svg
          className="absolute left-0 right-0 w-full h-[120px] text-primary-brand fill-current pointer-events-none select-none z-10"
          style={{ top: "-119px" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0 90 C 200 90, 320 90, 440 90 C 490 90, 510 20, 560 20 L 880 20 C 930 20, 950 90, 1000 90 C 1120 90, 1240 90, 1440 90 L 1440 120 L 0 120 Z" />
        </svg> */}

        {/* Master footer core layout wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 relative z-10">
          {/* 1. Header Branding Icon Block */}
          <div className="flex justify-center px-4">
            <div className="flex flex-col items-center text-center space-y-4 py-6 max-w-xl">
              <img
                src="/assets/images/bg-removed-logo.png"
                alt="Logo"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto transition-transform duration-300"
              />
              <p className="text-sm font-semibold text-white leading-relaxed tracking-wide">
                Modern Recovery. Timeless Healing.
              </p>
              <p className="text-xs font-light text-white/80 leading-relaxed max-w-sm">
                Where modern clinical approaches to health meet the ancient wisdom of Ayurvedic science. International standards of care with direct access to a senior specialist.
              </p>
            </div>
          </div>
          {/* 3. Comprehensive Multi-column navigation links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-left pb-12 pt-8">
            {/* Menu 1 - About */}
            <div className="space-y-4">
              <h4 className="text-[13px] tracking-[0.25em] text-gold-start font-mono uppercase">
                ABOUT
              </h4>
              <ul className="space-y-2 text-md  font-light text-[#f5edf2] font-sans">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleScrollToSection(e, "about")}
                    className="hover:text-white transition-colors"
                  >
                    Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    onClick={(e) => handleScrollToSection(e, "reviews")}
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#nature-inspired"
                    onClick={(e) => handleScrollToSection(e, "nature-inspired")}
                    className="hover:text-white transition-colors"
                  >
                    Philosophy
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSection(e, "contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu 2 - Services */}
            <div className="space-y-4">
              <h4 className="text-[13px] tracking-[0.25em] text-gold-start font-mono uppercase">
                SERVICES
              </h4>
              <ul className="space-y-2 text-md  font-light text-[#f5edf2] font-sans">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Pelvic Floor Rehabilitation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Pregnancy & Postpartum Care
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Pediatric Care{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Vestibular Rehabilitation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Orthopedic & Sports Rehab
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, "services")}
                    className="hover:text-white transition-colors"
                  >
                    Pre/Post-Surgical Rehabilitation
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu 3 - Conditions */}
            <div className="space-y-4">
              <h4 className="text-[13px] tracking-[0.25em] text-gold-start font-mono uppercase">
                CONDITIONS
              </h4>
              <ul className="space-y-2 text-md  font-light text-[#f5edf2] font-sans">
                <li>
                  <a
                    href="#conditions"
                    onClick={(e) => handleScrollToSection(e, "conditions")}
                    className="hover:text-white transition-colors"
                  >
                    Back pain
                  </a>
                </li>
                <li>
                  <a
                    href="#conditions"
                    onClick={(e) => handleScrollToSection(e, "conditions")}
                    className="hover:text-white transition-colors"
                  >
                    Neck pain
                  </a>
                </li>
                <li>
                  <a
                    href="#conditions"
                    onClick={(e) => handleScrollToSection(e, "conditions")}
                    className="hover:text-white transition-colors"
                  >
                    Headaches/migraines
                  </a>
                </li>
                <li>
                  <a
                    href="#conditions"
                    onClick={(e) => handleScrollToSection(e, "conditions")}
                    className="hover:text-white transition-colors"
                  >
                    Sciatica
                  </a>
                </li>
                <li>
                  <a
                    href="#conditions"
                    onClick={(e) => handleScrollToSection(e, "conditions")}
                    className="hover:text-white transition-colors"
                  >
                    Shoulder Pain
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu 4 - Patients */}
            <div className="space-y-4">
              <h4 className="text-[13px] tracking-[0.25em] text-gold-start font-mono uppercase">
                PATIENTS
              </h4>
              <ul className="space-y-2 text-md  font-light text-[#f5edf2] font-sans">
                <li>
                  <button
                    onClick={onBookClick}
                    className="hover:text-white transition-colors bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none"
                  >
                    Patient Paperwork
                  </button>
                </li>
                <li>
                  <button
                    onClick={onBookClick}
                    className="hover:text-white transition-colors bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none"
                  >
                    Book an appointment
                  </button>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleScrollToSection(e, "faq")}
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-0.5 text-center flex flex-col sm:flex-row items-center gap-8 sm:gap-14 justify-center">
            <div className="address">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold-start font-mono block">
                ADDRESS
              </span>
              <p className="font-sans text-md font-light leading-relaxed select-text text-white">
                Mumbai, India <span className="text-gold-start/70 text-xs">(Coming Soon)</span><br />
                Online: India & USA
              </p>
            </div>
            <div className="hours">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold-start font-mono block">
                CONTACT
              </span>
              <div className="font-sans text-sm font-light leading-relaxed select-text text-white">
                <p>contact@svaparnahealth.com</p>
                <p>+91 98929 24914</p>
              </div>
            </div>
          </div>
          {/* Dividing line separating menus from global copyrights block */}
          <div className="w-full h-[1px] bg-white/20 relative my-6">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>

          {/* 4. Bottom Legal Trademark copyrights & Social handles row */}
          <div className="flex flex-col md:flex-row items-center justify-between text-center gap-6 pt-4 text-md font-light text-[#cbdcd6]">
            {/* Copyright Label */}
            <div className="order-3 md:order-1 text-left">
              <span>2026 © Svaparna. All rights reserved.</span>
            </div>

            {/* Middle legal anchors */}
            <div className="order-2 flex items-center justify-center space-x-4 select-none">
              <a href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms and Conditions
              </a>
              <span className="text-gold-start/40 select-none">•</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>

            {/* Right block: Actionable Social handles & Upward floating trigger */}
            <div className="order-1 md:order-3 flex items-center justify-center space-x-6 w-full md:w-auto">
              {/* Handles circular widgets */}
              <div className="flex items-center space-x-3 shrink-0">
                {/* Instagram */}
                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#cbdcd6] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a> */}

                {/* Yelp Styled custom burst icon */}
                {/* <a
                  href="https://yelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#cbdcd6] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  title="Read customer reviews on Yelp"
                >
                  <YelpIcon />
                </a> */}

                {/* Facebook */}
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#cbdcd6] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a> */}

                {/* LinkedIn */}
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#cbdcd6] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                  title="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a> */}
              </div>

              {/* Float Anchor upward controller button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[#cbdcd6] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer active:scale-95 shrink-0"
                aria-label="Scroll to top of page"
                title="Scroll To Top"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
