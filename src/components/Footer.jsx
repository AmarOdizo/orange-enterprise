import React from 'react';

const LOGO_URL = "/orange-enterprise-logo.png";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActivePage, onOpenSchedule, _onOpenIntake, onOpenLegal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B1528] via-[#0E2246] to-[#3A1C0A] text-white mt-12 sm:mt-16 border-t-2 border-[#FD6702]/70 shadow-2xl">
      
      {/* =========================================================================
          AMBIENT ORANGE + BLUE LIGHTING (Artistic Visual Mix)
          ========================================================================= */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#FD6702]/25 via-[#FF7700]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#1E40AF]/30 via-[#0284C7]/15 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] rounded-full bg-gradient-to-r from-[#2563EB]/10 via-[#FD6702]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      {/* =========================================================================
          MAIN MULTI-COLUMN FOOTER NAVIGATION
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & AMFI Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button 
              onClick={() => handleNav('home')} 
              className="text-left focus:outline-none cursor-pointer w-fit group"
            >
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30 shadow-md flex items-center justify-center w-fit">
                <img 
                  alt="Orange Enterprise Logo" 
                  className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
                  src={LOGO_URL} 
                />
              </div>
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FD6702]/20 border border-[#FD6702]/40 text-[10px] text-[#FFA366] font-bold tracking-wider uppercase w-fit">
              <span className="material-symbols-outlined text-[13px] text-[#FD6702]">verified</span>
              <span>AMFI-REGISTERED MUTUAL FUND DISTRIBUTOR • ARN-83312</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Mutual fund investments for families, business owners and senior professionals in Mumbai, handled personally by Parag Doshi, FCA, FCS. Building Tomorrow, Today.
            </p>

            {/* Credential links */}
            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <a 
                className="inline-flex items-center gap-1.5 text-[#FFA366] hover:text-white hover:underline font-semibold w-fit transition-colors" 
                href="https://linkedin.com/in/pbd09" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">account_circle</span>
                <span>Parag Doshi: linkedin.com/in/pbd09</span>
              </a>
            </div>
          </div>

          {/* Column 2: What We Do (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-wider font-extrabold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FD6702] to-[#38BDF8]"></span>
              What We Do
            </span>
            <nav className="flex flex-col gap-2 text-xs">
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Mutual Fund Investments</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Investing for Milestones</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Portfolio Reviews</span>
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="material-symbols-outlined text-[14px] text-[#FD6702] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                <span>Business Finance Consulting</span>
              </button>
            </nav>
          </div>

          {/* Column 3: Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-wider font-extrabold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FD6702] to-[#38BDF8]"></span>
              Navigation
            </span>
            <nav className="flex flex-col gap-2 text-xs">
              <button 
                onClick={() => handleNav('home')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className="text-left text-slate-300 hover:text-[#FD6702] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button 
                onClick={() => onOpenSchedule('Footer Book Consultation')} 
                className="text-left text-[#FFA366] font-bold hover:text-white transition-colors cursor-pointer"
              >
                Book a Consultation
              </button>
            </nav>
          </div>

          {/* Column 4: Mumbai Office (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-wider font-extrabold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FD6702] to-[#38BDF8]"></span>
              Mumbai Office
            </span>

            {/* Operating status badge */}
            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col gap-2 text-xs shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-300">
                  Hours [Confirm]
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open
                </span>
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-slate-300 pt-1.5 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday – Friday</span>
                  <span className="font-semibold text-white">9:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Saturday</span>
                  <span className="font-semibold text-white">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="font-semibold text-white">9:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">location_on</span>
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">phone</span>
                <a className="hover:text-white transition-colors font-bold text-[#FFA366]" href="tel:+919820433220">
                  +91 98204 33220
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">mail</span>
                <a className="hover:text-white transition-colors font-medium text-slate-200" href="mailto:parag@[domain].in">
                  parag@[domain].in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            REGULATORY DISCLOSURE & STATUTORY NOTICE
            ========================================================================= */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-[#091526]/80 backdrop-blur-md border border-white/15 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <span className="material-symbols-outlined text-[20px] text-[#FD6702] shrink-0 mt-0.5">
              shield
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-white">
                Orange Enterprise · AMFI-registered Mutual Fund Distributor · ARN-83312
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Mutual fund investments are subject to market risks, read all scheme related documents carefully. Registration <strong>ARN-83312</strong> is issued by the Association of Mutual Funds in India (AMFI). Past performance is not indicative of future returns.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs text-slate-300 font-semibold flex-wrap">
            <button 
              onClick={() => onOpenLegal('Privacy Policy')} 
              className="hover:text-[#FFA366] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Disclaimer')} 
              className="hover:text-[#FFA366] transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Terms of Service')} 
              className="hover:text-[#FFA366] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM COPYRIGHT BAR & SMOOTH SCROLL TO TOP
            ========================================================================= */}
        <div className="mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
          <div>
            © {CURRENT_YEAR} <strong className="text-white">Orange Enterprise</strong>. AMFI-registered Mutual Fund Distributor · ARN-83312. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[11px] font-bold shadow-xs backdrop-blur-sm transition-all cursor-pointer group"
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
