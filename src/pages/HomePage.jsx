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
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24">
        {/* Subtle Architectural Ambient Backdrop Gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-secondary-fixed/25 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Hero Left Column: Editorial Typography */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-space-lg">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">
                  ORANGE ENTERPRISE • ARN 83312 • MUMBAI
                </span>
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight font-extrabold max-w-xl">
                Wealth management <span className="text-primary-container">redefined</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md max-w-xl leading-relaxed">
                Strategic wealth management solutions designed to navigate financial complexities and build enduring legacies.
              </p>

              {/* Executive CTA Suite */}
              <div className="flex flex-wrap items-center gap-space-md mt-space-xl">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View services</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-space-lg py-3.5 bg-inverse-surface text-inverse-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-on-background transition-all duration-200 cursor-pointer"
                >
                  Get in touch
                </button>
              </div>

              {/* Telemetry & Trust Badges Strip */}
              <div className="grid grid-cols-3 gap-space-md w-full max-w-lg mt-space-xl pt-space-lg bg-surface-container-lowest/80 p-space-md rounded-xl backdrop-blur-sm shadow-sm border border-surface-container">
                <div className="flex flex-col">
                  <span className="font-financial-metric-lg text-headline-lg text-on-surface font-bold">
                    ARN 83312
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    AMFI Registered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-financial-metric-lg text-headline-lg text-primary-container font-bold">
                    100%
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    Fiduciary Focus
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-financial-metric-lg text-headline-lg text-on-surface font-bold">
                    Mumbai
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    Financial Capital
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: High-Fidelity Consultation Visual */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-highest aspect-[4/3] lg:aspect-[5/4]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Orange Enterprise executive wealth advisory session in Mumbai" 
                  src={HERO_IMG} 
                />
                
                {/* Architectural Glass Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-space-md bg-surface-container-lowest/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-between border border-surface-container">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Trusted Wealth Advisory
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Mumbai Metropolitan • HNW Client Salon
                      </span>
                    </div>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase text-primary bg-primary-fixed px-2.5 py-1 rounded-full font-bold">
                    Active
                  </span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary-container/10 -z-10 transform rotate-6"></div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT & CORPORATE PROFILE SECTION
          ========================================================================= */}
      <section className="w-full py-space-xl lg:py-24 bg-surface" id="about">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Visual Storytelling Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/3] lg:aspect-square">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Wealth strategist analyzing investment portfolio reports" 
                  src={ABOUT_IMG} 
                />
                
                {/* Inline Chart Overlay Tile */}
                <div className="absolute top-4 right-4 p-space-md bg-inverse-surface/95 text-inverse-on-surface rounded-xl shadow-xl max-w-[210px] border border-inverse-on-surface/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-caps text-label-caps uppercase text-inverse-on-surface/80">
                      Asset Security
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-primary-container">
                      trending_up
                    </span>
                  </div>
                  
                  {/* Inline Sparkline SVG */}
                  <svg className="w-full h-8 text-primary-container stroke-current fill-none stroke-2" viewBox="0 0 100 32">
                    <path d="M0,28 L20,24 L40,26 L60,14 L80,18 L100,4"></path>
                  </svg>
                  
                  <span className="font-financial-metric-lg text-headline-sm text-inverse-on-surface block mt-1 font-bold">
                    +18.4%
                  </span>
                  <span className="font-body-sm text-[11px] text-inverse-on-surface/60">
                    Annualized Benchmark
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container mb-space-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">
                  EMPOWER YOUR WEALTH
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight font-bold">
                Strategic wealth management solutions
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md leading-relaxed">
                Orange Enterprise is your trusted partner in navigating the complex world of wealth management. Based in Mumbai, we specialize in tailor-made financial strategies that cater to your unique goals and aspirations. Our experienced team is dedicated to enhancing your financial journey, ensuring that every decision is aligned with your vision for the future. Together, we will build a secure financial legacy that stands the test of time.
              </p>

              {/* Core Value Proposition Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full mt-space-lg">
                <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm border border-surface-container">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">
                      account_balance
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Registered Intermediary
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      ARN 83312 certified mutual fund & fiduciary distribution.
                    </span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm border border-surface-container">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">
                      architecture
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Wealth Architecture
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Custom asset allocation engineered for resilience and yield.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-space-xl flex items-center gap-4">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md hover:bg-primary transition-all duration-200 cursor-pointer"
                >
                  <span>Get in touch</span>
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </button>

                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span>Learn About Us</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINANCIAL SERVICES OVERVIEW
          ========================================================================= */}
      <section className="w-full py-space-xl lg:py-24 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-highest text-on-surface-variant mb-space-xs">
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">
                EMPOWER YOUR WEALTH
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight font-bold">
              Tailored strategies for financial growth
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              Comprehensive, client-aligned financial advisory practices designed for capital appreciation and multigenerational preservation.
            </p>
          </div>

          {/* Luxury 3-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            
            {/* Service Card 1: Insurance Advisory */}
            <div className="group flex flex-col bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative border border-surface-container">
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-space-lg">
                <span className="material-symbols-outlined text-[30px]">shield</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider mb-space-xs font-bold">
                Protection Frameworks
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">
                Insurance advisory
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg flex-1 leading-relaxed">
                Comprehensive risk mitigation frameworks and institutional life protection architectures guarding personal, familial, and enterprise balance sheets against volatile eventualities.
              </p>
              <div className="pt-space-md border-t-0 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Insurance advisory</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Service Card 2: Wealth Advisory (Flagship) */}
            <div className="group flex flex-col bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative ring-1 ring-primary/20 border border-primary/20">
              <div className="absolute top-4 right-4 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-2.5 py-1 rounded-full font-bold">
                Flagship
              </div>
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-space-lg">
                <span className="material-symbols-outlined text-[30px]">monitoring</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider mb-space-xs font-bold">
                Capital Allocation
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">
                Wealth advisory
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg flex-1 leading-relaxed">
                Bespoke asset allocation models, mutual fund portfolio engineering, and rigorous macroeconomic analysis built around the distinct horizon goals of Mumbai's discerning investors.
              </p>
              <div className="pt-space-md border-t-0 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Wealth advisory</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Service Card 3: Finance */}
            <div className="group flex flex-col bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative border border-surface-container">
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200 mb-space-lg">
                <span className="material-symbols-outlined text-[30px]">payments</span>
              </div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider mb-space-xs font-bold">
                Structural Liquidity
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">
                Finance
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg flex-1 leading-relaxed">
                Strategic liquidity management, financial optimization, debt positioning, and structured cash-flow planning crafted to reinforce operational resilience and investment capability.
              </p>
              <div className="pt-space-md border-t-0 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors font-semibold cursor-pointer"
                >
                  <span>Explore Finance</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT INQUIRY & CONTACT SECTION
          ========================================================================= */}
      <section className="w-full py-space-xl lg:py-24 bg-surface" id="contact">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          
          <div className="flex flex-col items-start mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container mb-space-xs">
              <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">
                Direct Advisory Salon
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight font-bold">
              Get in touch
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              We're here to assist you! Reach out to our AMFI registered advisory team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            
            {/* Left Column: Contact Details Card */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-inverse-surface text-inverse-on-surface p-space-xl rounded-2xl shadow-xl flex flex-col">
                <span className="font-label-caps text-label-caps uppercase text-primary-container tracking-wider font-bold">
                  Orange Enterprise Desk
                </span>
                <h3 className="font-headline-md text-headline-md text-inverse-on-surface font-semibold mt-1">
                  Direct Advisory & Salon
                </h3>

                <div className="flex flex-col gap-space-md mt-space-lg font-body-md text-body-md text-inverse-on-surface/90">
                  {/* Phone */}
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px] text-primary-container">
                        phone
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps uppercase text-inverse-on-surface/60">
                        Phone Consultation
                      </span>
                      <a className="font-headline-sm text-headline-sm text-inverse-on-surface hover:text-primary-container transition-colors font-semibold" href="tel:+919820433220">
                        +91 98204 33220
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px] text-primary-container">
                        mail
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps uppercase text-inverse-on-surface/60">
                        Electronic Dispatch
                      </span>
                      <a className="font-headline-sm text-headline-sm text-inverse-on-surface hover:text-primary-container transition-colors font-semibold" href="mailto:wlthwrks@gmail.com">
                        wlthwrks@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-inverse-on-surface/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px] text-primary-container">
                        location_on
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps uppercase text-inverse-on-surface/60">
                        Location Headquarters
                      </span>
                      <span className="font-body-md text-body-md text-inverse-on-surface font-semibold">
                        Mumbai, MH India
                      </span>
                    </div>
                  </div>

                  {/* Hours Schedule Breakdown */}
                  <div className="flex items-start gap-space-sm mt-space-xs pt-space-md border-t border-inverse-on-surface/15">
                    <div className="w-10 h-10 rounded-lg bg-inverse-on-surface/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px] text-primary-container">
                        schedule
                      </span>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="font-label-caps text-label-caps uppercase text-inverse-on-surface/60 mb-1">
                        Advisory Operating Hours
                      </span>
                      <div className="flex justify-between py-1 text-body-sm text-inverse-on-surface/80">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 10:00pm</span>
                      </div>
                      <div className="flex justify-between py-1 text-body-sm text-inverse-on-surface/80">
                        <span>Saturday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 6:00pm</span>
                      </div>
                      <div className="flex justify-between py-1 text-body-sm text-inverse-on-surface/80">
                        <span>Sunday</span>
                        <span className="font-medium text-inverse-on-surface">9:00am – 12:00pm</span>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <div className="flex items-center justify-between pt-space-md mt-space-xs border-t border-inverse-on-surface/15">
                    <a 
                      className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary-container hover:underline" 
                      href="http://www.linkedin.com/in/pbd09" 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">account_circle</span>
                      <span>Connect with Advisor on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-space-sm mt-space-xl">
                  <button
                    onClick={() => onOpenSchedule('Quick Appointment')}
                    className="inline-flex items-center justify-center py-2.5 px-space-sm bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-inverse-on-surface font-label-sm text-label-sm rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Schedule appointment
                  </button>
                  <button
                    onClick={() => onOpenIntake()}
                    className="inline-flex items-center justify-center py-2.5 px-space-sm bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Complete intake
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Inquiry Form Card */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-2xl shadow-xl border border-surface-container">
              <div className="mb-space-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Initiate Strategic Consultation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Please provide your details below. An authorized wealth advisor will reach out confidentially.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface mb-1 font-semibold" htmlFor="home-contact-name">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="home-contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface mb-1 font-semibold" htmlFor="home-contact-email">
                      Email address <span className="text-error">*</span>
                    </label>
                    <input
                      id="home-contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.malhotra@domain.com"
                      className="w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-on-surface mb-1 font-semibold" htmlFor="home-contact-phone">
                      Phone number <span className="text-error">*</span>
                    </label>
                    <input
                      id="home-contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface mb-1 font-semibold" htmlFor="home-contact-msg">
                    Message
                  </label>
                  <textarea
                    id="home-contact-msg"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your portfolio goals or advisory requirements..."
                    className="w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none"
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-space-sm mt-1">
                  <input
                    id="home-consent-check"
                    required
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer"
                  />
                  <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="home-consent-check">
                    I allow this website to store my submission so they can respond to my inquiry. <span className="text-error">*</span>
                  </label>
                </div>

                {/* Submission Success Banner */}
                {formSubmitted && (
                  <div className="p-space-md rounded-lg bg-surface-container text-on-surface flex items-center gap-space-sm border border-primary/20">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="font-body-sm text-body-sm font-semibold">
                      Thank you! Your strategic inquiry has been submitted. Our Mumbai advisory team will be in touch shortly.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-space-sm">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-semibold"
                  >
                    <span>Submit</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
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

