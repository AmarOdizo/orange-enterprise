import React from 'react';

const BOARDROOM_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAROJossp1IyQ3YhEacDA1ncwPuFTsSnCGyxAgjpq6BjqM7B8DJ9lsSG0UEsIFvoNmhQgA-RkjfZ1N-_-mUbROY1oGo3FPy5pIX17uyG4-qimhhnBdGXp6JPKL0YG2GZcdvugt9LuL8gz3cfRkiaBxqQtN4yfSQV9_aiUon5waHOzcpWgOQPO6Bw11EEr32k-PA2jRAxG4nlNmeT1pOxh5vX8UWFoPKECxkCD7Rh2c8";

export default function AboutPage({ setActivePage, onOpenSchedule }) {
  return (
    <div className="flex flex-col w-full">
      {/* Top Subtle Architectural Bar & Navigation Tracker */}
      <section className="w-full bg-surface-container-low py-space-sm border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs">
            <button 
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface font-semibold">About Institution</span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container font-label-caps text-label-caps text-on-surface font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              AMFI REGISTRATION ARN 83312
            </span>
            <span className="text-on-surface-variant">Mumbai Financial District</span>
          </div>
        </div>
      </section>

      {/* Section 1: Executive Header with Editorial Scale */}
      <section className="relative w-full bg-surface py-space-xl lg:py-24 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-32 right-0 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-primary-fixed/30 via-secondary-fixed/20 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -bottom-24 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-surface-container via-surface-container-high/40 to-transparent blur-2xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end">
            
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary bg-primary-fixed/50 px-3 py-1 rounded-full font-bold">
                  ABOUT ORANGE ENTERPRISE
                </span>
                <span className="text-outline-variant">•</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase font-semibold">
                  ARN 83312 • Mumbai Financial Center
                </span>
              </div>

              <h1 className="font-headline-xl lg:font-display-hero text-headline-xl lg:text-display-hero text-on-surface tracking-tight leading-[1.08] max-w-4xl font-extrabold">
                Empower your wealth through{' '}
                <span className="text-primary-container underline decoration-primary-fixed decoration-4 underline-offset-8">
                  strategic discipline
                </span>.
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-sm leading-relaxed">
                Institutional caliber private wealth planning and capital guidance tailored for high-net-worth families, entrepreneurs, and visionary investors across India.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end mt-6 lg:mt-0">
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden border border-surface-container">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed/20 rounded-bl-full pointer-events-none"></div>
                <div className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-bold">
                  Fiduciary Credentials
                </div>
                <div className="font-headline-md text-headline-md text-on-surface font-bold">
                  ARN 83312
                </div>
                <div className="text-body-sm text-body-sm text-on-surface-variant leading-snug">
                  Certified Mutual Fund Distribution desk operating in association with Wealth Works, compliant with SEBI & AMFI code of fiduciary conduct.
                </div>
                <div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    Verified Distributor
                  </span>
                  <span className="text-on-surface-variant">Est. Mumbai</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Detailed Story & Mumbai Panoramic Boardroom Asset */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
            {/* Photographic Feature (Boardroom high above Mumbai skyline) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] rounded-xl overflow-hidden shadow-lg group">
                <img 
                  alt="Orange Enterprise advisory session in an executive boardroom overlooking Mumbai" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src={BOARDROOM_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-space-md lg:p-space-lg text-on-primary flex flex-col gap-space-xs">
                  <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps tracking-widest uppercase w-fit font-bold">
                    <span className="material-symbols-outlined text-[14px]">apartment</span>
                    Mumbai Advisory Headquarters
                  </div>
                  <p className="font-headline-sm text-headline-sm font-semibold text-white drop-shadow-sm">
                    Strategic counsel framed against India’s most dynamic economic epicenter.
                  </p>
                  <span className="font-body-sm text-body-sm text-secondary-fixed font-light">
                    High-level consultation sessions at our private executive salon.
                  </span>
                </div>
              </div>
            </div>

            {/* Verbatim Company Text & Fiduciary Foundation */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low p-space-lg lg:p-space-xl rounded-xl shadow-sm border border-surface-container mt-6 lg:mt-0">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-bold">
                    Institutional Creed
                  </span>
                  <span className="material-symbols-outlined text-primary text-[28px]">account_balance</span>
                </div>
                
                <div className="font-headline-md text-headline-md text-on-surface font-bold leading-snug">
                  Guiding capital with deliberate rigor and client-aligned precision.
                </div>
                
                {/* Exact Verbatim Company Quote */}
                <blockquote className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed bg-surface p-space-md rounded-lg shadow-sm border-l-4 border-primary">
                  “Orange Enterprise is your trusted partner in navigating the complex world of wealth management. Based in Mumbai, we specialize in tailor-made financial strategies that cater to your unique goals and aspirations. Our experienced team is dedicated to enhancing your financial journey, ensuring that every decision is aligned with your vision for the future. Together, we will build a secure financial legacy that stands the test of time.”
                </blockquote>
                
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every client journey begins with intensive listening. We reject standardized asset models in favor of rigorous portfolio mapping that considers generational transition, risk liquidity, and wealth sustainability.
                </p>
              </div>

              <div className="pt-space-md mt-space-md flex items-center justify-between bg-surface-container px-space-md py-space-sm rounded-lg">
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-semibold">Primary Hub</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Mumbai, India</span>
                </div>
                <div className="h-8 w-px bg-outline-variant/30"></div>
                <div className="flex flex-col text-right">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-semibold">Entity Status</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">Active • ARN 83312</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values & Tenets Section */}
          <div className="mt-space-xl pt-space-lg">
            <div className="flex flex-col mb-space-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-bold">
                Guiding Foundations
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-xs font-bold">
                Core Tenets of Our Wealth Practice
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                Three pillar principles that govern every recommendation, asset review, and fiduciary relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              {/* Tenet 1 */}
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">tune</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold">
                    Pillar 01
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Tailor-Made Strategies
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Bespoke solutions built around individual client aspirations. We construct agile investment matrices tailored to specific tax environments, lifestyle horizons, and family covenants.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-primary font-semibold">
                  <span>Goal-Driven Allocations</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Tenet 2 */}
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed group-hover:bg-inverse-surface group-hover:text-inverse-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[24px]">hourglass_top</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase font-bold">
                    Pillar 02
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Long-Term Legacy
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Multi-generational wealth preservation that stands the test of time. We shield family wealth from market volatility and inflation cycles while prioritizing capital compounding.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface font-semibold">
                  <span>Generational Continuity</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Tenet 3 */}
              <div className="bg-surface p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold">
                    Pillar 03
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Transparency & Integrity
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Strict ARN 83312 compliance and unwavering fiduciary dedication. Every product recommendation undergoes unbiased due diligence with total disclosure of fee structures and risks.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-primary font-semibold">
                  <span>Regulatory Adherence</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Leadership, Advisory Network & Fiduciary Infrastructure */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Left: Leadership Focus and Wealth Works Alliance */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-bold">
                  LEADERSHIP & NETWORK
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight font-bold">
                Institutional stewardship in association with Wealth Works.
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Orange Enterprise is anchored by executive leadership bringing decades of cumulative market experience. In formal association with <strong>Wealth Works</strong>, our advisory practice combines proprietary analytics, deep Mumbai market access, and tailored advisory mechanisms.
              </p>

              {/* Executive Leadership Profile Card */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mt-space-xs border border-surface-container">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md font-bold text-headline-sm">
                    OE
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Principal Advisor & Leadership
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Wealth Works Association • ARN 83312
                    </span>
                    <span className="font-label-caps text-label-caps text-primary mt-1 uppercase tracking-wider font-semibold">
                      Mumbai, Maharashtra, India
                    </span>
                  </div>
                </div>

                <a 
                  className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-inverse-surface text-inverse-on-surface hover:bg-on-background transition-colors rounded-lg font-label-md text-label-md shrink-0 shadow-sm font-semibold" 
                  href="http://www.linkedin.com/in/pbd09" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Rapid Contact Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary">phone</span>
                  <a className="hover:text-on-surface transition-colors font-semibold text-on-surface" href="tel:+919820433220">
                    +91 98204 33220
                  </a>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                  <a className="hover:text-on-surface transition-colors font-semibold text-on-surface" href="mailto:wlthwrks@gmail.com">
                    wlthwrks@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Operational Salon Hours & Location */}
            <div className="lg:col-span-6 flex flex-col gap-space-md mt-6 lg:mt-0">
              <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container">
                <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-primary font-bold">
                      Location & Desk Availability
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Advisory Desk Schedule
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                </div>

                {/* Schedule Timings Matrix */}
                <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Monday – Friday</span>
                    <span className="text-on-surface-variant font-label-md text-label-md font-medium">9:00am – 10:00pm IST</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Saturday</span>
                    <span className="text-on-surface-variant font-label-md text-label-md font-medium">9:00am – 6:00pm IST</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Sunday</span>
                    <span className="text-on-surface-variant font-label-md text-label-md font-medium">9:00am – 12:00pm IST</span>
                  </div>
                </div>

                {/* Geographic Marker */}
                <div className="pt-space-xs flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-bold">
                    Physical Salon & Registered Desk
                  </span>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                    <div className="flex flex-col font-body-md text-body-md text-on-surface">
                      <span className="font-semibold">Mumbai, Maharashtra, India</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Central financial nexus • Private meeting salon by confirmed appointment
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-space-xs flex items-center gap-space-md">
                  <button
                    onClick={() => onOpenSchedule('In-Person Salon Consultation')}
                    className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold hover:underline cursor-pointer"
                  >
                    <span>Reserve a confidential consultation</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Action CTA Banner (Midnight Navy Tier) */}
      <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl lg:py-24 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-tertiary-container/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-fixed font-label-caps text-label-caps tracking-widest uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              BEGIN THE COLLABORATION
            </div>

            <h2 className="font-headline-xl lg:font-display-hero text-headline-xl lg:text-display-hero text-white tracking-tight leading-tight font-extrabold">
              Ready to begin your financial journey?
            </h2>

            <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl leading-relaxed">
              Partner with Orange Enterprise to formulate a comprehensive, disciplined wealth strategy designed for capital protection and generational endurance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mt-space-md w-full sm:w-auto">
              <button
                onClick={() => onOpenSchedule('Advisory Collaboration')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-primary-container text-white font-label-md text-label-md rounded-lg shadow-md hover:bg-primary transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Schedule appointment</span>
              </button>

              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-white text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container-low transition-all duration-200 cursor-pointer font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Get in touch</span>
              </button>
            </div>

            <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-center gap-space-md text-secondary-fixed-dim font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed">verified</span>
                AMFI Registered ARN 83312
              </span>
              <span>•</span>
              <span>Dedicated Fiduciary Advisory</span>
              <span>•</span>
              <span>Mumbai Desk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

