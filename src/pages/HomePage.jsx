import React, { useState, useMemo } from 'react';
import HeroSphereNetwork from '../components/HeroSphereNetwork';
import { getInsights } from '../data/insightsData';

const ABOUT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD09XHqfHAACiOMMGHuNRecvitZyr8cxEByV7I5wECGIxyHAA2rOMsyI1pC-SpJTNfptv32rgLX-PYdHprzjwrRUKRE0_KNekqTHK1EjL7bgtzBNz7nbyj7sRSDm88_kvWqZuvr-JTayB-dbtmS9KeShpTh_59aRXUwtjrnJQLJ6sHmxHxva7XzhfrNTWTrzwqEgaHYdCQFtB9APdpQnT3yhC5FbPmOn6xILhusY8kL";

export default function HomePage({ _setActivePage, onOpenSchedule, _onOpenIntake }) {
  const insights = useMemo(() => getInsights(), []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    topic: 'Mutual fund investments',
    message: '',
    consent: false,
    website: '' // honeypot
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) {
      // Spam detected via honeypot
      setFormSubmitted(true);
      return;
    }
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in all required fields (Name, Email, Phone).');
      return;
    }
    if (!formData.consent) {
      setFormError('Please accept the consent checkbox to submit your inquiry.');
      return;
    }

    setFormError('');
    try {
      const existing = JSON.parse(localStorage.getItem('oe_inquiries') || '[]');
      localStorage.setItem('oe_inquiries', JSON.stringify([
        ...existing, 
        { 
          ...formData, 
          subject: formData.topic,
          source: 'Home Page Inquiry', 
          submittedAt: new Date().toISOString() 
        }
      ]));
    } catch {
      // ignore
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', city: '', topic: 'Mutual fund investments', message: '', consent: false, website: '' });
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
                    Chartered Accountant, Company Secretary
                  </span>
                </div>

                <div className="flex flex-col bg-white/70 p-2 sm:p-2.5 rounded-xl border border-[#E8D5C2]/60 shadow-2xs">
                  <span className="text-xs sm:text-sm lg:text-base text-[#161C25] font-extrabold">
                    JM · Zurich · CRISIL
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#161C25]/70 uppercase font-semibold mt-0.5">
                    Former leadership roles
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
                  href="#parag"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white text-[#161C25] hover:bg-[#FFF4E8] text-xs sm:text-sm rounded-full border border-[#E8D5C2] transition-colors cursor-pointer font-semibold text-center"
                >
                  <span>Meet Parag</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET PARAG DOSHI SECTION
          ========================================================================= */}
      <section className="w-full py-10 sm:py-14 lg:py-16 bg-surface border-b border-surface-container" id="parag">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Photo of Parag & Quick Badges */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Photo Frame Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F2F4F7] to-[#E4E7EC] border-2 border-dashed border-[#D0D5DD] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center shadow-xs">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#98A2B3] mb-3">
                  <span className="material-symbols-outlined text-[40px]">person</span>
                </div>
                <span className="text-sm font-bold text-[#344054]">
                  Photo of Parag
                </span>
                <span className="text-xs text-[#667085] max-w-[220px] mt-1 leading-snug">
                  [3–5 professional photos to be added before launch]
                </span>
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E8D5C2] flex items-center justify-between text-[11px] font-semibold text-[#161C25] shadow-2xs">
                  <span>Parag Doshi, FCA, FCS</span>
                  <span className="text-[#FD6702] font-bold">ARN-83312</span>
                </div>
              </div>

              {/* Languages Line */}
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container flex items-center gap-2.5 text-xs text-on-surface">
                <span className="material-symbols-outlined text-primary text-[18px]">translate</span>
                <span>
                  <strong className="font-bold">Languages:</strong> English, Hindi, Marathi, Gujarati
                </span>
              </div>

              {/* Quote Card */}
              <div className="p-4 rounded-xl bg-[#FFF8F0] border border-[#E8D5C2] flex items-start gap-3 shadow-2xs">
                <span className="material-symbols-outlined text-[#FD6702] text-[24px] shrink-0 mt-0.5">format_quote</span>
                <p className="text-xs sm:text-sm font-semibold text-[#161C25] italic leading-relaxed">
                  "Wealth is built through discipline, not by chasing the market."
                </p>
              </div>
            </div>

            {/* Right Column: Bio, Credentials & Career Timeline */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold">
                  MEET THE FOUNDER
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-extrabold">
                Parag Doshi, FCA, FCS
              </h2>
              <span className="text-xs sm:text-sm text-[#FD6702] font-bold mt-1">
                Founder and CEO, Orange Enterprise
              </span>

              {/* Bio Paragraphs */}
              <div className="mt-3.5 flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <p>
                  Parag has spent more than 25 years inside India's financial institutions, from mutual fund houses to research and corporate finance. That experience shapes how he works with clients today: carefully, patiently and with an eye on the long term.
                </p>
                <p>
                  He began his career at A.F. Ferguson & Co., worked in compliance at JM Mutual Fund, and headed AMC finance at Zurich India Mutual Fund, where he was part of the team on two fund acquisitions. He later served as CFO and Company Secretary of JM Financial AMC, and at CRISIL Fund Services worked on fund manager selection and fund research for institutions, receiving CRISIL's award for Outstanding Contribution in 2008.
                </p>
                <p>
                  After working with HNI and retail investors at Reliance Capital, he spent nearly nine years at Garware Hi-Tech Films, rising to Senior GM, Corporate Affairs, including a period as CFO. In 2022 he founded Orange Enterprise to work directly with families and business owners.
                </p>
              </div>

              {/* Credentials Badges */}
              <div className="w-full mt-5 pt-4 border-t border-surface-container">
                <span className="text-[10px] uppercase text-on-surface-variant font-bold tracking-wider mb-2.5 block">
                  Credentials & Qualifications
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low border border-surface-container text-xs text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Fellow Chartered Accountant (ICAI)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low border border-surface-container text-xs text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Fellow Company Secretary (ICSI)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low border border-surface-container text-xs text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    B.Com, University of Mumbai
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#FFF4E8] border border-[#E8D5C2] text-xs text-[#FD6702] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD6702]"></span>
                    CFA Institute Investment Foundations Program (2019)
                  </span>
                </div>
              </div>

              {/* Career Timeline */}
              <div className="w-full mt-6 pt-5 border-t border-surface-container">
                <span className="text-[10px] uppercase text-on-surface-variant font-bold tracking-wider mb-3.5 block">
                  Career Timeline (25+ Years in Financial Services)
                </span>
                <div className="relative border-l-2 border-[#E8D5C2] ml-2 pl-4 flex flex-col gap-3.5">
                  {[
                    { years: '2022 – present', org: 'Orange Enterprise', role: 'Founder and CEO' },
                    { years: '2013 – 2022', org: 'Garware Hi-Tech Films Ltd', role: 'GM Finance to Senior GM, Corporate Affairs (incl. CFO, 2019)' },
                    { years: '2012 – 2013', org: 'Financial advisory firm', role: 'Manager, Finance' },
                    { years: '2010 – 2011', org: 'Reliance Capital', role: 'Managed HNI and retail investment portfolios' },
                    { years: '2007 – 2009', org: 'CRISIL Ltd', role: 'Manager, Fund Services · Award for Outstanding Contribution, 2008' },
                    { years: '2003 – 2006', org: 'JM Financial AMC', role: 'CFO and Company Secretary' },
                    { years: '1998 – 2003', org: 'Zurich India AMC', role: 'Head of AMC Finance' },
                    { years: '1997 – 1998', org: 'JM Mutual Fund', role: 'Compliance Manager' },
                    { years: '1993 – 1996', org: 'A.F. Ferguson & Co.', role: 'Articleship' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#FD6702]"></span>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-on-surface">
                            {item.org}
                          </span>
                          <span className="text-xs text-on-surface-variant font-medium">
                            — {item.role}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#FD6702] shrink-0 bg-[#FFF4E8] px-2 py-0.5 rounded">
                          {item.years}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white text-xs sm:text-sm rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer font-bold text-center"
                >
                  <span>Book a conversation with Parag</span>
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
          HOW WE WORK SECTION
          ========================================================================= */}
      <section className="w-full py-10 sm:py-14 lg:py-16 bg-surface border-b border-surface-container" id="how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-1">
              <span className="text-[9px] uppercase tracking-wider font-bold">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight font-extrabold">
              How we work with you
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
              Four simple, disciplined steps designed to make mutual fund investing straightforward and goal-aligned.
            </p>
          </div>

          {/* 4 Steps: Row on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#FD6702]/30">01</span>
                  <span className="w-8 h-8 rounded-lg bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">forum</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-on-surface mb-1.5">
                  An introductory conversation
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  30 minutes, at no cost, to understand where you are and what you want.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#FD6702]/30">02</span>
                  <span className="w-8 h-8 rounded-lg bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">psychology</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-on-surface mb-1.5">
                  Understanding your profile
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Your goals, time horizon and comfort with risk, plus KYC.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#FD6702]/30">03</span>
                  <span className="w-8 h-8 rounded-lg bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-on-surface mb-1.5">
                  Suitable schemes, clearly explained
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We explain each recommendation and its risks in plain language.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#FD6702]/30">04</span>
                  <span className="w-8 h-8 rounded-lg bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">sync</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-on-surface mb-1.5">
                  Regular reviews
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <span className="text-[#FD6702] font-semibold">[half-yearly]</span> reviews, and a conversation whenever your life changes.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onOpenSchedule('Process Consultation')}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-white text-[#161C25] hover:bg-[#FFF4E8] text-xs sm:text-sm rounded-full border border-[#E8D5C2] transition-colors cursor-pointer font-bold shadow-2xs"
            >
              <span>Schedule your 30-minute introductory call</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INSIGHTS SECTION
          ========================================================================= */}
      <section className="w-full py-10 sm:py-14 lg:py-16 bg-surface-container-low border-b border-surface-container" id="insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 mb-1">
              <span className="text-[9px] uppercase tracking-wider font-bold">
                PUBLICATIONS & COMMENTARY
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight font-extrabold">
              Insights from Parag
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
              Notes on investing, markets and money, written over 25 years.
            </p>
          </div>

          {/* 3 Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.map((item) => (
              <div 
                key={item.id}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFF4E8] text-[#FD6702] text-[10px] font-bold border border-[#E8D5C2]">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-medium">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-on-surface mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-container flex items-center justify-between">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#FD6702] hover:text-[#E55A00] font-bold"
                  >
                    <span>{item.linkText}</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Standard Disclaimer line at the end of Insights */}
          <div className="mt-8 p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container flex items-start gap-2.5 text-xs text-on-surface-variant max-w-3xl mx-auto text-center justify-center">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">info</span>
            <p className="leading-relaxed">
              Mutual fund investments are subject to market risks, read all scheme related documents carefully. Past publications are for archival and educational awareness only.
            </p>
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
                {/* Honeypot anti-spam field (hidden from real users) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-name">
                      Name <span className="text-error font-bold text-[#FD6702]">*</span>
                    </label>
                    <input
                      id="home-contact-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Mahindra"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all border border-surface-container"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-phone">
                      Phone <span className="text-error font-bold text-[#FD6702]">*</span>
                    </label>
                    <input
                      id="home-contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98204 33220"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all border border-surface-container"
                    />
                  </div>
                </div>

                {/* Row 2: Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-email">
                      Email <span className="text-error font-bold text-[#FD6702]">*</span>
                    </label>
                    <input
                      id="home-contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all border border-surface-container"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-city">
                      City
                    </label>
                    <input
                      id="home-contact-city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai"
                      className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all border border-surface-container"
                    />
                  </div>
                </div>

                {/* Row 3: "I'm interested in" Dropdown */}
                <div className="flex flex-col">
                  <label className="text-xs text-on-surface mb-1 font-semibold" htmlFor="home-contact-topic">
                    I'm interested in
                  </label>
                  <select
                    id="home-contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all border border-surface-container cursor-pointer"
                  >
                    <option value="Mutual fund investments">Mutual fund investments</option>
                    <option value="Investing for retirement or goals">Investing for retirement or goals</option>
                    <option value="Portfolio review">Portfolio review</option>
                    <option value="Business finance consulting">Business finance consulting</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                {/* Row 4: Message Field */}
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
                    className="w-full p-2.5 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-[#FD6702] transition-all resize-none border border-surface-container"
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
                    className="mt-0.5 h-3.5 w-3.5 rounded accent-[#FD6702] cursor-pointer"
                  />
                  <label className="text-[11px] text-on-surface-variant cursor-pointer leading-tight" htmlFor="home-consent-check">
                    I agree that Orange Enterprise may store my details to respond to my enquiry, as described in the <a href="#privacy" className="underline hover:text-[#FD6702] font-semibold">Privacy Policy</a>. <span className="text-[#FD6702] font-bold">*</span>
                  </label>
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="p-2.5 rounded-md bg-red-50 text-red-700 flex items-center gap-2 border border-red-200 text-xs">
                    <span className="material-symbols-outlined text-[16px] text-red-600">error</span>
                    <span>{formError}</span>
                  </div>
                )}

                {/* Submission Success Banner */}
                {formSubmitted && (
                  <div className="p-3 rounded-md bg-emerald-50 text-emerald-800 flex items-center gap-2 border border-emerald-200 text-xs">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
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
