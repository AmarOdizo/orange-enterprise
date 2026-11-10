import React from 'react';

const LOGO_URL = "/orange-enterprise-logo.png";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActivePage, onOpenSchedule, onOpenIntake, onOpenLegal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FFF8F0] text-[#161C25] mt-12 sm:mt-16 border-t border-[#F2DECA]">
      
      {/* =========================================================================
          PRE-FOOTER CALL-TO-ACTION CARD (Modern Wealth Banner)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFF4E8] via-[#FFEDE0] to-[#FFF4E8] border border-[#F2DECA] p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Subtle decorative background circles */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#FD6702]/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#FD6702]/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] text-[10px] font-bold tracking-wider uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD6702] animate-pulse"></span>
                Strategic Fiduciary Advisory
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#161C25] leading-snug">
                Ready to build and protect your enduring wealth?
              </h3>
              <p className="text-xs sm:text-sm text-[#161C25]/75 leading-relaxed">
                Connect directly with our Mumbai advisory desk for bespoke mutual fund strategies, comprehensive portfolio diagnostics, and institutional asset architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenSchedule('Footer Executive Consultation')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm font-bold shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Book Consultation</span>
              </button>
              
              <a
                href="tel:+919820433220"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#FFF4E8] text-[#161C25] border border-[#F2DECA] text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FD6702]">phone</span>
                <span>+91 98204 33220</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN MULTI-COLUMN FOOTER NAVIGATION
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Fiduciary Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button 
              onClick={() => handleNav('home')} 
              className="text-left focus:outline-none cursor-pointer w-fit group"
            >
              <img 
                alt="Orange Enterprise Logo" 
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
                src={LOGO_URL} 
              />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FD6702]/10 border border-[#FD6702]/20 text-[10px] text-[#FD6702] font-bold tracking-wider uppercase w-fit">
              <span className="material-symbols-outlined text-[13px]">verified</span>
              <span>ARN 83312 • AMFI REGISTERED DISTRIBUTOR</span>
            </div>

            <p className="text-xs text-[#161C25]/75 leading-relaxed max-w-sm">
              Wealth management redefined. Tailored financial strategies, bespoke fiduciary solutions, and disciplined capital preservation designed for families and businesses in Mumbai.
            </p>

            {/* Credential links */}
            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-[#161C25]/85 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">corporate_fare</span>
                <span>In association with <strong>Wealth Works</strong></span>
              </div>
              <a 
                className="inline-flex items-center gap-1.5 text-[#FD6702] hover:underline font-semibold w-fit" 
                href="http://www.linkedin.com/in/pbd09" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <span>Principal Profile: linkedin.com/in/pbd09</span>
              </a>
            </div>
          </div>

          {/* Column 2: Advisory Offerings (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-[#161C25] tracking-wider font-extrabold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD6702]"></span>
              Advisory Offerings
            </span>
            <nav className="flex flex-col gap-2 text-xs">
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Mutual Fund Portfolios</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Strategic Wealth Advisory</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Insurance & Risk Shield</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Structured Finance & Liquidity</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Asset Allocation & Succession</span>
              </button>
            </nav>
          </div>

          {/* Column 3: Quick Navigation & Client Suite (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase text-[#161C25] tracking-wider font-extrabold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD6702]"></span>
              Client Suite
            </span>
            <nav className="flex flex-col gap-2 text-xs">
              <button 
                onClick={() => handleNav('home')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Home Overview
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                About Our Firm
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Contact Advisory Salon
              </button>
              <button 
                onClick={() => onOpenSchedule('Footer Book Consultation')} 
                className="text-left text-[#FD6702] font-bold hover:underline transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
              <button 
                onClick={() => onOpenIntake()} 
                className="text-left text-[#161C25]/75 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Complete Intake Profile
              </button>
            </nav>
          </div>

          {/* Column 4: Mumbai Advisory Desk (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-[#161C25] tracking-wider font-extrabold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD6702]"></span>
              Mumbai Advisory Desk
            </span>

            {/* Operating status badge */}
            <div className="p-3 rounded-xl bg-white border border-[#F2DECA] flex flex-col gap-2 text-xs shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#161C25]/70">
                  Desk Status
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Active Reception
                </span>
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-[#161C25]/80 pt-1 border-t border-[#F2DECA]/60">
                <div className="flex justify-between">
                  <span className="text-[#161C25]/60">Mon – Fri</span>
                  <span className="font-semibold text-[#161C25]">9:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#161C25]/60">Saturday</span>
                  <span className="font-semibold text-[#161C25]">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#161C25]/60">Sunday</span>
                  <span className="font-semibold text-[#161C25]">9:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-1.5 text-xs text-[#161C25]/80 pt-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">location_on</span>
                <span>Mumbai Financial District, MH India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">phone</span>
                <a className="hover:text-[#FD6702] transition-colors font-bold text-[#161C25]" href="tel:+919820433220">
                  +91 98204 33220
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">mail</span>
                <a className="hover:text-[#FD6702] transition-colors font-medium text-[#161C25]" href="mailto:wlthwrks@gmail.com">
                  wlthwrks@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            REGULATORY DISCLOSURE & STATUTORY NOTICE (Trust Architecture)
            ========================================================================= */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-white border border-[#F2DECA] shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <span className="material-symbols-outlined text-[20px] text-[#FD6702] shrink-0 mt-0.5">
              shield_with_heart
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#161C25]">
                AMFI Regulatory Disclosure & Fiduciary Risk Notice
              </span>
              <p className="text-[11px] text-[#161C25]/75 leading-relaxed">
                Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Registration <strong>ARN 83312</strong> is issued by the Association of Mutual Funds in India (AMFI). Indicative returns, benchmark trajectories, and past performance do not guarantee future yields. Orange Enterprise operates strictly under SEBI fiduciary frameworks and client confidentiality protocols.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs text-[#161C25]/70 font-semibold flex-wrap">
            <button 
              onClick={() => onOpenLegal('Privacy Policy')} 
              className="hover:text-[#FD6702] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Terms of Service')} 
              className="hover:text-[#FD6702] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Cookie Policy')} 
              className="hover:text-[#FD6702] transition-colors cursor-pointer"
            >
              Fiduciary Disclosures
            </button>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM COPYRIGHT BAR & SMOOTH SCROLL TO TOP
            ========================================================================= */}
        <div className="mt-8 pt-5 border-t border-[#F2DECA] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#161C25]/60">
          <div>
            © {CURRENT_YEAR} <strong>Orange Enterprise</strong> (ARN 83312). All rights reserved. In association with Wealth Works.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FFF4E8] text-[#161C25] border border-[#F2DECA] text-[11px] font-bold shadow-2xs transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <span className="material-symbols-outlined text-[14px] text-[#FD6702] group-hover:-translate-y-0.5 transition-transform">
              arrow_upward
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
