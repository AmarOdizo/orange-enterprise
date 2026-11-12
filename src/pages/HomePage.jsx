import React, { useState } from 'react';
import HeroSphereNetwork from '../components/HeroSphereNetwork';

const ABOUT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD09XHqfHAACiOMMGHuNRecvitZyr8cxEByV7I5wECGIxyHAA2rOMsyI1pC-SpJTNfptv32rgLX-PYdHprzjwrRUKRE0_KNekqTHK1EjL7bgtzBNz7nbyj7sRSDm88_kvWqZuvr-JTayB-dbtmS9KeShpTh_59aRXUwtjrnJQLJ6sHmxHxva7XzhfrNTWTrzwqEgaHYdCQFtB9APdpQnT3yhC5FbPmOn6xILhusY8kL";

export default function HomePage({ _setActivePage, onOpenSchedule, _onOpenIntake }) {
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
      localStorage.setItem('oe_inquiries', JSON.stringify([...existing, { ...formData, source: 'Home Page Inquiry', submittedAt: new Date().toISOString() }]));
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
          HERO SECTION (One-Page Above-The-Fold: Fits Screen Without Scroll)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF4E8] via-[#FFF9F2] to-[#FDFBF7] lg:min-h-[calc(100vh-68px)] lg:max-h-[calc(100vh-68px)] flex items-center py-6 sm:py-8 lg:py-3 border-b border-[#F0DCB]/70">
        {/* Ambient Decorative Lighting */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FD6702]/8 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#FD6702]/6 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Hero Left Column: Editorial Typography & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center">
              
              {/* Trust Badge with Live Active Dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E8D5C2] shadow-2xs mb-2.5 sm:mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#161C25]/90 font-bold">
                  ORANGE ENTERPRISE · AMFI-REGISTERED MUTUAL FUND DISTRIBUTOR · ARN-83312 · MUMBAI
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] text-[#161C25] tracking-tight font-extrabold max-w-2xl leading-[1.14]">
                Disciplined investing,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD6702] to-[#FF7A1A]">
                  guided by 25 years
                </span>{' '}
                of experience.
                <span className="block text-lg sm:text-xl lg:text-2xl font-bold text-[#161C25]/85 mt-1 sm:mt-1.5">
                  Building Tomorrow, Today.
                </span>
              </h1>

              {/* Supporting Subtext */}
              <p className="text-xs sm:text-sm lg:text-[14px] text-[#161C25]/75 mt-2.5 sm:mt-3 max-w-xl leading-relaxed">
                Mutual fund investments for families, business owners and senior professionals in Mumbai, handled personally by Parag Doshi, FCA, FCS.
              </p>

              {/* Action Buttons Suite */}
              <div className="flex items-center gap-2.5 mt-4 sm:mt-5 w-full sm:w-auto">
                <button
                  onClick={() => onOpenSchedule('Hero Consultation')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Book a consultation</span>
                  <span className="material-symbols-outlined text-[17px]">calendar_today</span>
                </button>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-[#161C25] hover:bg-[#FFF4E8] border border-[#E8D5C2] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <span>Meet Parag</span>
                  <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                </a>
              </div>

              {/* Trust Metric Pillars Strip (Exactly 4 Compliant Boxes) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-xl mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-[#E8D5C2]/70">
                <div className="flex flex-col bg-white/70 p-2 sm:p-2.5 rounded-xl border border-[#E8D5C2]/60 shadow-2xs">
                  <span className="text-xs sm:text-sm lg:text-base text-[#161C25] font-extrabold truncate">
                    25+ years
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#161C25]/70 uppercase font-semibold mt-0.5">
                    In financial services
                  </span>
                </div>

                <div className="flex flex-col bg-white/70 p-2 sm:p-2.5 rounded-xl border border-[#E8D5C2]/60 shadow-2xs">
                  <span className="text-xs sm:text-sm lg:text-base text-[#FD6702] font-extrabold">
                    FCA · FCS
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#161C25]/70 uppercase font-semibold mt-0.5">
                    CA & CS
                  </span>
                </div>

                <div className="flex flex-col bg-white/70 p-2 sm:p-2.5 rounded-xl border border-[#E8D5C2]/60 shadow-2xs">
                  <span className="text-xs sm:text-sm lg:text-base text-[#161C25] font-extrabold">
                    JM · Zurich · CRISIL
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#161C25]/70 uppercase font-semibold mt-0.5">
                    Leadership Roles
                  </span>
                </div>

                <div className="flex flex-col bg-white/70 p-2 sm:p-2.5 rounded-xl border border-[#E8D5C2]/60 shadow-2xs">
                  <span className="text-xs sm:text-sm lg:text-base text-[#161C25] font-extrabold">
                    ARN-83312
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#161C25]/70 uppercase font-semibold mt-0.5">
                    AMFI-registered MFD
                  </span>
                </div>
              </div>

            </div>

            {/* Hero Right Column: Interactive 3D Sphere Network with Services Cards (Visual & Movable) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex items-center justify-center">
              <HeroSphereNetwork />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT ORANGE ENTERPRISE (Personal Attention, Not a Call Centre)
          ========================================================================= */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-surface" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Column (Clean Image without unverified return cards) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-surface-container-high max-h-[280px] sm:max-h-[320px] aspect-[4/3] border border-[#E8D5C2]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Financial strategist reviewing mutual fund portfolio" 
                  src={ABOUT_IMG} 
                />
                
                {/* Clean Compliance Badge Overlay */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/75 backdrop-blur-md text-white rounded-xl text-xs font-semibold border border-white/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FD6702]"></span>
                  <span>ARN-83312 • Mumbai Desk</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-4">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight font-extrabold">
                Personal attention, not a call centre.
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant mt-2.5 leading-relaxed">
                Orange Enterprise is a Mumbai-based mutual fund distribution practice founded by Parag Doshi in 2022. We work with a select number of families, business owners and senior professionals. Every client works directly with Parag, from the first conversation to every review.
              </p>
              
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Our approach is simple. We understand your goals and how much risk you are comfortable with, suggest mutual fund schemes suited to you, and review them with you regularly. No churning, and no chasing short-term market moves.
              </p>

              {/* 3 Core Compliant Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mt-4">
                <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="text-xs text-on-surface font-bold text-[#FD6702]">
                    Direct access
                  </span>
                  <span className="text-[11px] text-on-surface-variant leading-snug">
                    You speak with Parag, not a junior relationship manager.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="text-xs text-on-surface font-bold text-[#FD6702]">
                    Long-term discipline
                  </span>
                  <span className="text-[11px] text-on-surface-variant leading-snug">
                    Built across market cycles since 1993.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="text-xs text-on-surface font-bold text-[#FD6702]">
                    Transparent
                  </span>
                  <span className="text-[11px] text-on-surface-variant leading-snug">
                    [We explain clearly how we are paid. Confirm with Parag.]
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => onOpenSchedule('About Consultation')}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white text-xs sm:text-sm rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer font-bold text-center"
                >
                  <span>Book a consultation</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white text-[#161C25] hover:bg-[#FFF4E8] text-xs sm:text-sm rounded-full border border-[#E8D5C2] transition-colors cursor-pointer font-semibold text-center"
                >
                  <span>Speak with Parag</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO (Clear, Practical Support for Your Investments)
          ========================================================================= */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-1">
              <span className="text-[9px] uppercase tracking-wider font-bold">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight font-extrabold">
              Clear, practical support for your investments
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5">
              Disciplined mutual fund distribution and practical financial guidance designed around your life milestones.
            </p>
          </div>

          {/* Compliant Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Service Card 1: Mutual Fund Investments (Flagship) */}
            <div className="group flex flex-col bg-surface-container-lowest p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 relative ring-1 ring-[#FD6702]/30 border border-[#FD6702]/20">
              <div className="absolute top-3.5 right-3.5 bg-[#FD6702] text-white text-[9px] uppercase px-2 py-0.5 rounded-full font-bold">
                Flagship
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[22px]">monitoring</span>
              </div>
              <h3 className="text-base text-on-surface font-bold mb-1.5">
                Mutual fund investments
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Mutual fund schemes suited to your goals and risk profile, through SIPs or lump-sum investments, with paperwork and KYC handled for you.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs text-[#FD6702] hover:text-[#E55A00] font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Service Card 2: Investing for Life's Milestones */}
            <div className="group flex flex-col bg-surface-container-lowest p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 border border-surface-container">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3">
                <span className="material-symbols-outlined text-[22px]">family_restroom</span>
              </div>
              <h3 className="text-base text-on-surface font-bold mb-1.5">
                Investing for life's milestones
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Mutual fund solutions aligned to retirement, children's education and other long-term goals. <span className="text-[#FD6702]/90">[Confirm wording with Parag.]</span>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs text-[#FD6702] hover:text-[#E55A00] font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Service Card 3: Portfolio Reviews */}
            <div className="group flex flex-col bg-surface-container-lowest p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 border border-surface-container">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3">
                <span className="material-symbols-outlined text-[22px]">fact_check</span>
              </div>
              <h3 className="text-base text-on-surface font-bold mb-1.5">
                Portfolio reviews
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                Regular reviews of your mutual fund holdings, so your investments stay in line with your goals as life changes.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs text-[#FD6702] hover:text-[#E55A00] font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Service Card 4: Business Finance Consulting */}
            <div className="group flex flex-col bg-surface-container-lowest p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 border border-surface-container">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container mb-3">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
              </div>
              <h3 className="text-base text-on-surface font-bold mb-1.5">
                Business finance consulting
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 flex-1 leading-relaxed">
                For business owners: cash flow, working capital, banking relationships and treasury, drawing on Parag's years as a CFO. <span className="text-[#FD6702]/90">[Confirm Parag offers this.]</span>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs text-[#FD6702] hover:text-[#E55A00] font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
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
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-1">
              <span className="text-[9px] uppercase tracking-wider font-bold">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight font-extrabold">
              Speak directly with Parag
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Book a 30-minute introductory call, or send a message. Parag will personally get back to you within one working day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Contact Details Card */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF3E5] text-[#161C25] p-5 sm:p-6 rounded-2xl shadow-md border border-[#E8D5C2] flex flex-col relative overflow-hidden">
                <span className="text-[10px] uppercase text-[#FD6702] tracking-wider font-bold">
                  Direct Contact
                </span>
                <h3 className="text-base sm:text-lg text-[#161C25] font-extrabold mt-0.5">
                  Contact Parag Doshi
                </h3>

                <div className="flex flex-col gap-3.5 mt-4 text-xs text-[#161C25]/85">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[19px]">
                        phone
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase text-[#161C25]/55 font-bold tracking-wider">
                        Phone
                      </span>
                      <a className="text-xs sm:text-sm text-[#161C25] hover:text-[#FD6702] transition-colors font-bold truncate" href="tel:+919820433220">
                        +91 98204 33220
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[19px]">
                        mail
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase text-[#161C25]/55 font-bold tracking-wider">
                        Email
                      </span>
                      <a className="text-xs sm:text-sm text-[#161C25] hover:text-[#FD6702] transition-colors font-bold truncate" href="mailto:parag@[domain].in">
                        parag@[domain].in
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[19px]">
                        location_on
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase text-[#161C25]/55 font-bold tracking-wider">
                        Office
                      </span>
                      <span className="text-xs text-[#161C25] font-bold">
                        Mumbai, Maharashtra
                      </span>
                    </div>
                  </div>

                  {/* Hours Schedule Breakdown */}
                  <div className="flex items-start gap-3 pt-3 border-t border-[#E8D5C2]/80">
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <span className="material-symbols-outlined text-[19px]">
                        schedule
                      </span>
                    </div>
                    <div className="flex flex-col w-full text-[11px] bg-white/80 p-2.5 rounded-xl border border-[#E8D5C2]/70 shadow-2xs">
                      <span className="text-[9px] uppercase text-[#161C25]/60 font-bold tracking-wider mb-1">
                        Hours [Confirm; consider "By appointment"]
                      </span>
                      <div className="flex justify-between py-0.5 text-[#161C25]/75">
                        <span>Monday – Friday</span>
                        <span className="font-bold text-[#161C25]">9:00am – 10:00pm</span>
                      </div>
                      <div className="flex justify-between py-0.5 text-[#161C25]/75">
                        <span>Saturday</span>
                        <span className="font-bold text-[#161C25]">9:00am – 6:00pm</span>
                      </div>
                      <div className="flex justify-between py-0.5 text-[#161C25]/75">
                        <span>Sunday</span>
                        <span className="font-bold text-[#161C25]">9:00am – 12:00pm</span>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <div className="pt-2 border-t border-[#E8D5C2]/80 flex items-center justify-between">
                    <a 
                      className="inline-flex items-center gap-1.5 text-xs text-[#FD6702] hover:text-[#E55A00] hover:underline font-bold" 
                      href="https://linkedin.com/in/pbd09" 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[17px]">account_circle</span>
                      <span>linkedin.com/in/pbd09</span>
                    </a>
                    <span className="text-[10px] font-semibold text-[#161C25]/50 uppercase">
                      ARN-83312
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 pt-3 border-t border-[#E8D5C2]/80">
                  <button
                    onClick={() => onOpenSchedule('Quick Consultation')}
                    className="inline-flex items-center justify-center py-2.5 px-3 bg-white hover:bg-[#FD6702]/8 text-[#161C25] hover:text-[#FD6702] border border-[#E8D5C2] text-xs rounded-xl transition-all text-center cursor-pointer font-bold shadow-2xs"
                  >
                    Book consultation
                  </button>
                  <a
                    href="https://wa.me/919820433220?text=Hello%20Parag%2C%20I%20found%20your%20website%20and%20would%20like%20to%20talk."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs rounded-xl transition-all text-center cursor-pointer font-bold shadow-xs hover:shadow-sm"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form Card */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-4 sm:p-5 lg:p-6 rounded-xl shadow-md border border-surface-container w-full">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg text-on-surface font-bold">
                  Book a 30-minute introductory call
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Parag will personally get back to you within one working day.
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
                    placeholder="Share your goals or questions..."
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
                    I agree that Orange Enterprise may store my details to respond to my enquiry, as described in the Privacy Policy. <span className="text-error">*</span>
                  </label>
                </div>

                {/* Submission Success Banner */}
                {formSubmitted && (
                  <div className="p-2.5 rounded-md bg-surface-container text-on-surface flex items-center gap-2 border border-primary/20 text-xs">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                    <span className="font-semibold">
                      Thank you. Parag will get back to you within one working day.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer font-bold"
                  >
                    <span>Request a call</span>
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
