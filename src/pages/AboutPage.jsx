import React from 'react';

const BOARDROOM_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAROJossp1IyQ3YhEacDA1ncwPuFTsSnCGyxAgjpq6BjqM7B8DJ9lsSG0UEsIFvoNmhQgA-RkjfZ1N-_-mUbROY1oGo3FPy5pIX17uyG4-qimhhnBdGXp6JPKL0YG2GZcdvugt9LuL8gz3cfRkiaBxqQtN4yfSQV9_aiUon5waHOzcpWgOQPO6Bw11EEr32k-PA2jRAxG4nlNmeT1pOxh5vX8UWFoPKECxkCD7Rh2c8";

export default function AboutPage({ onOpenSchedule }) {
  return (
    <div className="flex flex-col w-full">

      {/* Section 1: Executive Header with Compact Editorial Scale */}
      <section className="relative w-full bg-surface py-8 sm:py-12 lg:py-14 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary-fixed/25 via-secondary-fixed/15 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -bottom-24 left-10 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-surface-container via-surface-container-high/30 to-transparent blur-2xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            
            <div className="lg:col-span-8 flex flex-col gap-2.5 sm:gap-3">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-primary bg-primary-fixed/50 px-2.5 py-0.5 rounded-full font-bold">
                  ABOUT ORANGE ENTERPRISE
                </span>
                <span className="text-outline-variant">•</span>
                <span className="text-[10px] sm:text-xs text-on-surface-variant tracking-wider uppercase font-semibold">
                  ARN 83312 • Mumbai Desk
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-tight max-w-3xl font-extrabold">
                Disciplined investing,{' '}
                <span className="text-primary-container underline decoration-primary-fixed decoration-2 underline-offset-4">
                  guided by 25 years
                </span>{' '}
                of experience.
              </h1>

              <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Mutual fund investments for families, business owners and senior professionals in Mumbai, handled personally by Parag Doshi, FCA, FCS.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end mt-2 sm:mt-4 lg:mt-0">
              <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl shadow-xs flex flex-col gap-2 relative overflow-hidden border border-surface-container">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-fixed/20 rounded-bl-full pointer-events-none"></div>
                <div className="text-[11px] uppercase tracking-widest text-primary font-bold">
                  AMFI Credentials
                </div>
                <div className="text-lg sm:text-xl text-on-surface font-bold">
                  ARN-83312
                </div>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  AMFI-registered Mutual Fund Distributor, ARN-83312, based in Mumbai.
                </div>
                <div className="pt-1 flex items-center justify-between text-xs text-on-surface">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
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
      <section className="w-full bg-surface-container-lowest py-8 sm:py-12 lg:py-14 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Photographic Feature (Boardroom high above Mumbai skyline) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[340px] rounded-xl overflow-hidden shadow-sm group">
                <img 
                  alt="Orange Enterprise office overlooking Mumbai" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src={BOARDROOM_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/90 via-on-secondary-fixed/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-on-primary flex flex-col gap-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] tracking-widest uppercase w-fit font-bold">
                    <span className="material-symbols-outlined text-[13px]">apartment</span>
                    Mumbai Office
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white drop-shadow-xs">
                    Disciplined investing, guided by 25 years of experience.
                  </p>
                  <span className="text-[11px] sm:text-xs text-secondary-fixed font-light">
                    Direct consultations with Parag Doshi.
                  </span>
                </div>
              </div>
            </div>

            {/* Verbatim Company Text & Practice Foundation */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low p-4 sm:p-5 lg:p-6 rounded-xl shadow-xs border border-surface-container mt-4 lg:mt-0">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-primary font-bold">
                    Institutional Creed
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
                </div>
                
                <div className="text-base sm:text-lg text-on-surface font-bold leading-snug">
                  Guiding capital with deliberate rigor and client-aligned precision.
                </div>
                
                {/* Company Story */}
                <blockquote className="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface p-3 sm:p-3.5 rounded-lg shadow-xs border-l-3 border-primary italic">
                  “Orange Enterprise is a Mumbai-based mutual fund distribution practice founded by Parag Doshi in 2022. We work with a select number of families, business owners and senior professionals. Every client works directly with Parag, from the first conversation to every review.”
                </blockquote>
                
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Our approach is simple. We understand your goals and how much risk you are comfortable with, suggest mutual fund schemes suited to you, and review them with you regularly. No churning, and no chasing short-term market moves.
                </p>
              </div>

              <div className="pt-3 mt-3 flex items-center justify-between bg-surface-container px-3 py-2 rounded-lg text-xs">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-on-surface-variant font-semibold">Primary Hub</span>
                  <span className="text-xs sm:text-sm text-on-surface font-bold">Mumbai, India</span>
                </div>
                <div className="h-6 w-px bg-outline-variant/30"></div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] uppercase text-on-surface-variant font-semibold">Entity Status</span>
                  <span className="text-xs sm:text-sm text-primary font-bold">Active • ARN 83312</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values & Tenets Section */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-surface-container">
            <div className="flex flex-col mb-5 sm:mb-6">
              <span className="text-[11px] uppercase tracking-widest text-primary font-bold">
                Guiding Foundations
              </span>
              <h2 className="text-xl sm:text-2xl text-on-surface mt-1 font-bold">
                Core Tenets of Our Practice
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-0.5">
                Three pillar principles that govern every recommendation, scheme review, and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {/* Tenet 1 */}
              <div className="bg-surface p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">tune</span>
                  </div>
                  <span className="text-[10px] text-primary tracking-widest uppercase font-bold">
                    Pillar 01
                  </span>
                  <h3 className="text-sm sm:text-base text-on-surface font-bold">
                    Tailor-Made Strategies
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Bespoke solutions built around individual client aspirations. We construct agile investment matrices tailored to specific tax environments, lifestyle horizons, and family covenants.
                  </p>
                </div>
                <div className="mt-3 pt-2 flex items-center gap-1 text-xs text-primary font-semibold">
                  <span>Goal-Driven Allocations</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Tenet 2 */}
              <div className="bg-surface p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed group-hover:bg-inverse-surface group-hover:text-inverse-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[20px]">hourglass_top</span>
                  </div>
                  <span className="text-[10px] text-secondary tracking-widest uppercase font-bold">
                    Pillar 02
                  </span>
                  <h3 className="text-sm sm:text-base text-on-surface font-bold">
                    Long-Term Legacy
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Multi-generational wealth preservation that stands the test of time. We shield family wealth from market volatility and inflation cycles while prioritizing capital compounding.
                  </p>
                </div>
                <div className="mt-3 pt-2 flex items-center gap-1 text-xs text-on-surface font-semibold">
                  <span>Generational Continuity</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Tenet 3 */}
              <div className="bg-surface p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-surface-container">
                <div className="flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                  <span className="text-[10px] text-primary tracking-widest uppercase font-bold">
                    Pillar 03
                  </span>
                  <h3 className="text-sm sm:text-base text-on-surface font-bold">
                    Transparency & Integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Strict ARN-83312 compliance and client-first commitment. Every scheme recommendation undergoes disciplined due diligence with complete transparency on commissions and risks.
                  </p>
                </div>
                <div className="mt-3 pt-2 flex items-center gap-1 text-xs text-primary font-semibold">
                  <span>Regulatory Adherence</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Leadership & Practice Infrastructure */}
      <section className="w-full bg-surface py-8 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Leadership Focus */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-[11px] uppercase tracking-widest text-primary font-bold">
                  LEADERSHIP
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl text-on-surface leading-snug font-bold">
                Personal guidance by Parag Doshi, FCA, FCS.
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Parag has spent more than 25 years inside India's financial institutions, from mutual fund houses to research and corporate finance. That experience shapes how he works with clients today: carefully, patiently and with an eye on the long term.
              </p>

              {/* Executive Leadership Profile Card */}
              <div className="bg-surface-container-low p-4 rounded-xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-1 border border-surface-container">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                    PD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base text-on-surface font-bold">
                      Parag Doshi, FCA, FCS
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Founder and CEO, Orange Enterprise • ARN-83312
                    </span>
                    <span className="text-[10px] text-primary mt-0.5 uppercase tracking-wider font-semibold">
                      Mumbai, Maharashtra, India
                    </span>
                  </div>
                </div>

                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-inverse-surface text-inverse-on-surface hover:bg-on-background transition-colors rounded-lg text-xs shrink-0 shadow-xs font-semibold" 
                  href="https://linkedin.com/in/pbd09" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Rapid Contact Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">phone</span>
                  <a className="hover:text-on-surface transition-colors font-semibold text-on-surface" href="tel:+919820433220">
                    +91 98204 33220
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                  <a className="hover:text-on-surface transition-colors font-semibold text-on-surface" href="mailto:parag@[domain].in">
                    parag@[domain].in
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Operational Hours & Location */}
            <div className="lg:col-span-6 flex flex-col gap-3 mt-4 lg:mt-0">
              <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl shadow-xs flex flex-col gap-3 border border-surface-container">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-primary font-bold">
                      Location & Desk Availability
                    </span>
                    <span className="text-sm sm:text-base text-on-surface font-bold">
                      Mumbai Desk Schedule
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                </div>

                {/* Schedule Timings Matrix */}
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Monday – Friday</span>
                    <span className="text-on-surface-variant font-medium">9:00am – 10:00pm IST</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Saturday</span>
                    <span className="text-on-surface-variant font-medium">9:00am – 6:00pm IST</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-surface">
                    <span className="font-semibold text-on-surface">Sunday</span>
                    <span className="text-on-surface-variant font-medium">9:00am – 12:00pm IST</span>
                  </div>
                </div>

                {/* Geographic Marker */}
                <div className="pt-1 flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-on-surface-variant font-bold">
                    Registered Office & Meeting Location
                  </span>
                  <div className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                    <div className="flex flex-col text-xs text-on-surface">
                      <span className="font-semibold">Mumbai, Maharashtra, India</span>
                      <span className="text-[11px] text-on-surface-variant">
                        In-person meetings by appointment
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center">
                  <button
                    onClick={() => onOpenSchedule('In-Person Meeting')}
                    className="inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline cursor-pointer"
                  >
                    <span>Reserve a conversation</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


