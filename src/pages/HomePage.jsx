import React, { useState } from 'react';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJUSnGNHCshsywHkCy3L0pIeXhA6HNk6K5qTB8hKFK2Ikt6j_qDhtSQXTEpPEvx7mTwUNMfJHq74NRh88jWef1fwLaI3Bf-hvz3m4dCOn0r8Jpvqku8gQofl-E3ANV_Z9IO9uRMo0YxVB_sR9NiRnGqFgpo3Aq4fxVMVbnluEd-rYKMDq_NNqRf7-UmCQFWQ9TCS_OKhDp4XhjdUpFSqY-DMgfs_tNbImsKNxjqTqZ";
const ABOUT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD09XHqfHAACiOMMGHuNRecvitZyr8cxEByV7I5wECGIxyHAA2rOMsyI1pC-SpJTNfptv32rgLX-PYdHprzjwrRUKRE0_KNekqTHK1EjL7bgtzBNz7nbyj7sRSDm88_kvWqZuvr-JTayB-dbtmS9KeShpTh_59aRXUwtjrnJQLJ6sHmxHxva7XzhfrNTWTrzwqEgaHYdCQFtB9APdpQnT3yhC5FbPmOn6xILhusY8kL";

export default function HomePage({ setActivePage, onOpenSchedule, onOpenIntake }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('oe_inquiries') || '[]');
      localStorage.setItem('oe_inquiries', JSON.stringify([...existing, { ...formData, source: 'Home Salon Form', submittedAt: new Date().toISOString() }]));
    } catch {
      // ignore
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION (Compact & Proportional)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-8 sm:py-12 lg:py-16">
        {/* Subtle Architectural Ambient Backdrop Gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Hero Left Column: Editorial Typography */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                  ORANGE ENTERPRISE • ARN 83312 • MUMBAI
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-extrabold max-w-xl leading-tight">
                Wealth management <span className="text-primary-container">redefined</span>.
                <span className="block text-lg sm:text-xl lg:text-2xl font-bold text-on-surface/85 mt-1">
                  Building Tomorrow, Together.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-on-surface-variant mt-2.5 max-w-lg leading-relaxed">
                Strategic wealth management solutions, bespoke mutual fund advisory, and disciplined fiduciary architecture designed for families, entrepreneurs, and institutions in Mumbai.
              </p>

              {/* Executive CTA Suite */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary text-xs sm:text-sm rounded-md shadow-xs hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-semibold text-center"
                >
                  <span>View services</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 bg-inverse-surface text-inverse-on-surface text-xs sm:text-sm rounded-md shadow-xs hover:bg-on-background transition-all duration-200 cursor-pointer font-semibold text-center"
                >
                  Get in touch
                </button>
              </div>

              {/* Telemetry & Trust Badges Strip (Scaled Down) */}
              <div className="grid grid-cols-3 gap-2 w-full max-w-md mt-5 pt-3 bg-surface-container-lowest/90 p-2.5 sm:p-3 rounded-lg backdrop-blur-sm shadow-xs border border-surface-container">
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base text-on-surface font-bold truncate">
                    ARN 83312
                  </span>
                  <span className="text-[9px] text-on-surface-variant uppercase mt-0.5">
                    AMFI Registered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base text-primary-container font-bold">
                    100%
                  </span>
                  <span className="text-[9px] text-on-surface-variant uppercase mt-0.5">
                    Fiduciary Focus
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base text-on-surface font-bold">
                    Mumbai
                  </span>
                  <span className="text-[9px] text-on-surface-variant uppercase mt-0.5">
                    Financial Capital
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Compact High-Fidelity Visual */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-surface-container-highest max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] aspect-[16/10]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Orange Enterprise executive wealth advisory session in Mumbai" 
                  src={HERO_IMG} 
                />
                
                {/* Compact Architectural Glass Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 sm:p-2.5 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg shadow-md flex items-center justify-between border border-surface-container gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-on-surface font-semibold truncate leading-tight">
                        Trusted Wealth Advisory
                      </span>
                      <span className="text-[10px] text-on-surface-variant truncate">
                        Mumbai • HNW Client Salon
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] uppercase text-primary bg-primary-fixed px-2 py-0.5 rounded-full font-bold shrink-0">
                    Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT & CORPORATE PROFILE SECTION (Compact Proportions)
          ========================================================================= */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-surface" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Storytelling Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-xl overflow-hidden shadow-md bg-surface-container-high max-h-[260px] sm:max-h-[300px] aspect-[4/3]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Wealth strategist analyzing investment portfolio reports" 
                  src={ABOUT_IMG} 
                />
                
                {/* Compact Inline Chart Overlay */}
                <div className="absolute top-2.5 right-2.5 p-2.5 bg-inverse-surface/95 text-inverse-on-surface rounded-lg shadow-lg max-w-[170px] border border-inverse-on-surface/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase tracking-wider text-inverse-on-surface/80 font-bold">
                      Asset Security
                    </span>
                    <span className="material-symbols-outlined text-[14px] text-primary-container">
                      trending_up
                    </span>
                  </div>
                  
                  <svg className="w-full h-6 text-primary-container stroke-current fill-none stroke-2" viewBox="0 0 100 32">
                    <path d="M0,28 L20,24 L40,26 L60,14 L80,18 L100,4"></path>
                  </svg>
                  
                  <span className="text-base text-inverse-on-surface block mt-0.5 font-bold">
                    +18.4%
                  </span>
                  <span className="text-[9px] text-inverse-on-surface/60">
                    Annualized Benchmark
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-4">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container mb-2">
                <span className="text-[9px] uppercase tracking-wider font-bold">
                  EMPOWER YOUR WEALTH
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl text-on-surface tracking-tight font-bold">
                Strategic wealth management solutions
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Orange Enterprise is your trusted partner in navigating the complex world of wealth management. Based in Mumbai, we specialize in tailor-made financial strategies that cater to your unique goals and aspirations. Our experienced team is dedicated to enhancing your financial journey, ensuring that every decision is aligned with your vision for the future. Together, we will build a secure financial legacy that stands the test of time.
              </p>

              {/* Core Value Proposition Grid (Compact) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-4">
                <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5 border border-surface-container">
                  <div className="w-8 h-8 rounded-md bg-surface-container-lowest shadow-xs flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      account_balance
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface font-semibold">
                      Registered Intermediary
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                      ARN 83312 certified mutual fund & fiduciary distribution.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5 border border-surface-container">
                  <div className="w-8 h-8 rounded-md bg-surface-container-lowest shadow-xs flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      architecture
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface font-semibold">
                      Wealth Architecture
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                      Custom asset allocation engineered for resilience and yield.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary text-xs sm:text-sm rounded-md shadow-xs hover:bg-primary transition-all duration-200 cursor-pointer font-semibold text-center"
                >
                  <span>Get in touch</span>
                  <span className="material-symbols-outlined text-[15px]">call</span>
                </button>

                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-surface-container text-on-surface text-xs sm:text-sm rounded-md hover:bg-surface-container-high transition-colors cursor-pointer font-semibold text-center"
                >
                  <span>Learn About Us</span>
                  <span className="material-symbols-outlined text-[15px]">chevron_right</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINANCIAL SERVICES OVERVIEW (Compact Proportions)
          ========================================================================= */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant mb-1">
              <span className="text-[9px] uppercase tracking-wider text-primary font-bold">
                EMPOWER YOUR WEALTH
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl text-on-surface tracking-tight font-bold">
              Tailored strategies for financial growth
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Comprehensive, client-aligned financial advisory practices designed for capital appreciation.
            </p>
          </div>

          {/* Luxury 3-Card Services Grid (Compact & Refined) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Service Card 1: Insurance Advisory */}
            <div className="group flex flex-col bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-surface-container">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-3">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">shield</span>
              </div>
              <span className="text-[10px] uppercase text-primary tracking-wider mb-1 font-bold">
                Protection Frameworks
              </span>
              <h3 className="text-base sm:text-lg text-on-surface font-bold mb-1.5">
                Insurance advisory
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Comprehensive risk mitigation frameworks and institutional life protection architectures guarding balance sheets against eventualities.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Insurance advisory</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Service Card 2: Wealth Advisory (Flagship) */}
            <div className="group flex flex-col bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 relative ring-1 ring-primary/20 border border-primary/20">
              <div className="absolute top-3 right-3 bg-primary-container text-on-primary text-[9px] uppercase px-2 py-0.5 rounded-full font-bold">
                Flagship
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-3">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">monitoring</span>
              </div>
              <span className="text-[10px] uppercase text-primary tracking-wider mb-1 font-bold">
                Capital Allocation
              </span>
              <h3 className="text-base sm:text-lg text-on-surface font-bold mb-1.5">
                Wealth advisory
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Bespoke asset allocation models, mutual fund portfolio engineering, and rigorous macroeconomic analysis built around distinct client horizons.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Wealth advisory</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Service Card 3: Finance */}
            <div className="group flex flex-col bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-surface-container">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-3">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">payments</span>
              </div>
              <span className="text-[10px] uppercase text-primary tracking-wider mb-1 font-bold">
                Structural Liquidity
              </span>
              <h3 className="text-base sm:text-lg text-on-surface font-bold mb-1.5">
                Finance
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Strategic liquidity management, financial optimization, debt positioning, and structured cash-flow planning for operational resilience.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Finance</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT INQUIRY & CONTACT SECTION (Compact Proportions)
          ========================================================================= */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-surface" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container mb-1">
              <span className="text-[9px] uppercase tracking-wider font-bold">
                Direct Advisory Salon
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl text-on-surface tracking-tight font-bold">
              Get in touch
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
              We're here to assist you! Reach out to our AMFI registered advisory team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Contact Details Card (Compact) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="bg-inverse-surface text-inverse-on-surface p-4 sm:p-5 rounded-xl shadow-lg flex flex-col">
                <span className="text-[10px] uppercase text-primary-container tracking-wider font-bold">
                  Orange Enterprise Desk
                </span>
                <h3 className="text-base sm:text-lg text-inverse-on-surface font-semibold mt-0.5">
                  Direct Advisory & Salon
                </h3>

                <div className="flex flex-col gap-3 mt-4 text-xs text-inverse-on-surface/90">
                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">
                        phone
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase text-inverse-on-surface/60 font-semibold">
                        Phone Consultation
                      </span>
                      <a className="text-xs sm:text-sm text-inverse-on-surface hover:text-primary-container transition-colors font-semibold truncate" href="tel:+919820433220">
                        +91 98204 33220
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">
                        mail
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase text-inverse-on-surface/60 font-semibold">
                        Electronic Dispatch
                      </span>
                      <a className="text-xs sm:text-sm text-inverse-on-surface hover:text-primary-container transition-colors font-semibold truncate" href="mailto:wlthwrks@gmail.com">
                        wlthwrks@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">
                        location_on
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase text-inverse-on-surface/60 font-semibold">
                        Location Headquarters
                      </span>
                      <span className="text-xs text-inverse-on-surface font-semibold">
                        Mumbai, MH India
                      </span>
                    </div>
                  </div>

                  {/* Hours Schedule Breakdown (Compact) */}
                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-inverse-on-surface/15">
                    <div className="w-8 h-8 rounded-md bg-inverse-on-surface/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px] text-primary-container">
                        schedule
                      </span>
                    </div>
                    <div className="flex flex-col w-full text-[11px]">
                      <span className="text-[9px] uppercase text-inverse-on-surface/60 font-semibold mb-0.5">
                        Advisory Operating Hours
                      </span>
                      <div className="flex justify-between py-0.5 text-inverse-on-surface/80">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 10:00pm</span>
                      </div>
                      <div className="flex justify-between py-0.5 text-inverse-on-surface/80">
                        <span>Saturday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 6:00pm</span>
                      </div>
                      <div className="flex justify-between py-0.5 text-inverse-on-surface/80">
                        <span>Sunday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 12:00pm</span>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <div className="pt-2 border-t border-inverse-on-surface/15">
                    <a 
                      className="inline-flex items-center gap-1.5 text-xs text-primary-container hover:underline font-semibold" 
                      href="http://www.linkedin.com/in/pbd09" 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">account_circle</span>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => onOpenSchedule('Quick Consultation')}
                    className="inline-flex items-center justify-center py-2 px-3 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-inverse-on-surface text-xs rounded-md transition-colors text-center cursor-pointer font-semibold"
                  >
                    Book consultation
                  </button>
                  <button
                    onClick={() => onOpenIntake()}
                    className="inline-flex items-center justify-center py-2 px-3 bg-primary-container hover:bg-primary text-on-primary text-xs rounded-md transition-colors text-center cursor-pointer font-semibold"
                  >
                    Complete intake
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Inquiry Form Card (Compact) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-4 sm:p-5 lg:p-6 rounded-xl shadow-md border border-surface-container w-full">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg text-on-surface font-bold">
                  Initiate Strategic Consultation
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Please provide your details below. An authorized wealth advisor will reach out confidentially.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-name">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="home-contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-email">
                      Email address <span className="text-error">*</span>
                    </label>
                    <input
                      id="home-contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.malhotra@domain.com"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-phone">
                      Phone number <span className="text-error">*</span>
                    </label>
                    <input
                      id="home-contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-msg">
                    Message
                  </label>
                  <textarea
                    id="home-contact-msg"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your portfolio goals or advisory requirements..."
                    className="w-full p-2.5 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none"
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 mt-0.5">
                  <input
                    id="home-consent-check"
                    required
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 h-3.5 w-3.5 rounded accent-primary cursor-pointer"
                  />
                  <label className="text-[11px] text-on-surface-variant cursor-pointer leading-tight" htmlFor="home-consent-check">
                    I allow this website to store my submission so they can respond to my inquiry. <span className="text-error">*</span>
                  </label>
                </div>

                {/* Submission Success Banner */}
                {formSubmitted && (
                  <div className="p-2.5 rounded-md bg-surface-container text-on-surface flex items-center gap-2 border border-primary/20 text-xs">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                    <span className="font-semibold">
                      Thank you! Your strategic inquiry has been submitted. Our Mumbai team will connect shortly.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-primary-container text-on-primary text-xs sm:text-sm rounded-md shadow-xs hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-semibold"
                  >
                    <span>Submit</span>
                    <span className="material-symbols-outlined text-[15px]">send</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
