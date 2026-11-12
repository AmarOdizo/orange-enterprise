import React, { useState, useEffect } from 'react';
import SipCalculator from '../components/SipCalculator';

const WEALTH_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBdW1zF3_WXUhRahR2CZTsi9vCLiV4h-zRkqlC-nmShxGJ6kwyoovrvjgjsqSTyRmN7zqFthsQgwfx1v9fTgsSNNeiPVRZEiiYqIEPPad6qRK0f-cUQb9tyQlpLG32jEfISgi89LdLiZD5K1_lFwUAQiEPgXrut-CLucNYx6uLOZWhkzZqzA0yXH4V9ka2PhEL0UHyzz8yFudbuSpb3UvmITAzDgr5yfNpsUCwN_60H";
const INSURANCE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmRp5a6O5lbB32sm-nxPU6_dk5UuOohKQ4iJYzpxU2011Ft2jRA2c_nts8Amoc6hYurVh976ngJwrfw0IaIYoXwzuUc7B7SLVxiRmtV-f9o6rVqSk0c3mjq7DrTsXFnb38veex_LCrSQ1yPPtjRhV-RKkhnXnholm3JpFtZXEXQ_cBBBVm5Gl0l8Y1cZinz4YC4urJ4F-SkiGyqY4AvpZfUR8lEmKG4k1wWpXPGkvd";
const FINANCE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-_GMPEV95IeRuD4FbEZA8eZ1JXjrp9k906QUyDtpLL5JNCLP51ALurjFBBToTAmxqg4Sd1ed9Fla-akci1NJylX_Dq1c8GXRXn1-Izi-LKPnMbd8iajHiw99i7KVhNIeaZatpyftCEP49zAOFGKkdZ3fSFlOsi37bWWpecgUhJ2sVLcvbMiV-66QS8GIeSlXZzNybspYSMWMpT2Awoii2pCD2IhwfC_LnYlJu_0Ln";

export default function ServicesPage({ onOpenSchedule, onOpenIntake }) {
  const showInsurance = false; // Config flag: Hidden until Parag confirms IRDAI licence or POSP
  const [activeMandate, setActiveMandate] = useState('mutual-funds');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = showInsurance 
      ? ['mutual-funds', 'insurance', 'finance'] 
      : ['mutual-funds', 'finance'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveMandate(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showInsurance]);

  return (
    <div className="flex flex-col w-full">
      {/* Top Editorial Header Block */}
      <section className="relative w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-hidden border-b border-surface-container">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="text-[10px] sm:text-xs text-on-surface uppercase tracking-widest font-bold">
                WHAT WE DO
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
              <span>AMFI-registered Mutual Fund Distributor • ARN-83312</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-tight font-extrabold">
                Clear, practical support for your investments.
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Disciplined mutual fund distribution and practical financial guidance designed around your life milestones, handled personally by Parag Doshi.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-xs border border-surface-container mt-2 sm:mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase text-on-surface-variant font-semibold">
                  Personal Practice
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">
                  25+ Years Experience
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl text-on-surface font-extrabold">
                  Personal
                </span>
                <span className="text-xs text-on-surface-variant">
                  Every client works directly with Parag
                </span>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => onOpenSchedule('Services Consultation')}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm rounded-lg shadow-xs transition-all duration-200 cursor-pointer font-bold"
                >
                  Talk to Parag
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Anchor Navigation */}
      <section className="w-full bg-surface-container px-4 sm:px-6 lg:px-8 py-2 sticky top-14 sm:top-16 z-40 backdrop-blur-md shadow-xs border-b border-surface-container-high">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-bold shrink-0">
            Directory
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => scrollToSection('mutual-funds')}
              className={`px-3 py-1 rounded-full text-xs transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap ${
                activeMandate === 'mutual-funds'
                  ? 'bg-primary-container text-on-primary font-semibold'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
              }`}
            >
              01. Mutual fund investments
            </button>
            {showInsurance && (
              <button
                onClick={() => scrollToSection('insurance')}
                className={`px-3 py-1 rounded-full text-xs transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap ${
                  activeMandate === 'insurance'
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
                }`}
              >
                02. Insurance
              </button>
            )}
            <button
              onClick={() => scrollToSection('finance')}
              className={`px-3 py-1 rounded-full text-xs transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap ${
                activeMandate === 'finance'
                  ? 'bg-primary-container text-on-primary font-semibold'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high'
              }`}
            >
              02. Business finance consulting
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: MUTUAL FUND INVESTMENTS
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-surface-container" id="mutual-funds">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container font-semibold text-primary">
                  01 / SERVICE
                </span>
                <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                  Flagship Offering
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface font-bold">
                Mutual fund investments
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Mutual fund schemes suited to your goals and risk profile, through SIPs or lump-sum investments, with paperwork and KYC handled for you.
              </p>

              {/* Core Sub-Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-1">
                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Goal-Aligned Schemes</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Selecting equity, hybrid and debt schemes suited to your distinct investment horizons.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Risk Profiling</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Understanding your comfort with risk before selecting any fund schemes.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Paperwork & KYC</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Hassle-free digital and physical documentation handled end-to-end.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Regular Reviews</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Reviewing your portfolio periodically to ensure schemes remain aligned with your life milestones.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenSchedule('Mutual Fund Consultation')}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm rounded-lg shadow-xs transition-all cursor-pointer font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="text-xs text-on-surface-variant font-medium">
                  AMFI-registered MFD ARN-83312
                </span>
              </div>
            </div>

            {/* Visual Graphic Column */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 mt-4 lg:mt-0">
              <div className="bg-inverse-surface text-inverse-on-surface p-4 sm:p-5 rounded-xl shadow-md flex flex-col gap-3 relative overflow-hidden border border-inverse-on-surface/10">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-outline-variant font-semibold">
                      Disciplined Diversification
                    </span>
                    <span className="text-sm sm:text-base text-surface-container-lowest font-bold">
                      Illustrative Asset Mix
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 text-[10px] text-primary-container font-bold">
                    Illustrative
                  </span>
                </div>

                {/* Inline SVG Allocation Curve */}
                <div className="w-full flex flex-col gap-1">
                  <svg className="w-full h-16 text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 320 80">
                    <path d="M0 65 C40 60, 80 45, 120 50 C160 55, 200 25, 240 28 C280 30, 300 8, 320 12 L320 80 L0 80 Z" fill="rgba(244, 119, 50, 0.15)"></path>
                    <path d="M0 65 C40 60, 80 45, 120 50 C160 55, 200 25, 240 28 C280 30, 300 8, 320 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-inverse-on-surface/15 text-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline-variant font-semibold">EQUITY FUNDS</span>
                    <span className="text-xs text-surface-container-lowest font-medium">Growth Focus</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline-variant font-semibold">DEBT FUNDS</span>
                    <span className="text-xs text-surface-container-lowest font-medium">Stability Focus</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline-variant font-semibold">LIQUID FUNDS</span>
                    <span className="text-xs text-surface-container-lowest font-medium">Emergency Buffer</span>
                  </div>
                </div>
              </div>

              {/* Editorial Photography Tile */}
              <div className="relative rounded-xl overflow-hidden shadow-xs h-36 sm:h-44 bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Investment planning session in Mumbai" 
                  src={WEALTH_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-surface-container-lowest font-semibold">
                    Personalized Portfolio Reviews • Mumbai Office
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive SIP Calculator */}
          <div className="w-full mt-4 sm:mt-6">
            <SipCalculator onOpenSchedule={onOpenSchedule} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INSURANCE (HIDDEN UNTIL CONFIRMED BY PARAG)
          ========================================================================= */}
      {showInsurance && (
        <section className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-surface-container" id="insurance">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Visual Column */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-3 sm:gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-xs h-36 sm:h-44 bg-surface-container">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Insurance and protection planning" 
                    src={INSURANCE_IMG} 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-[10px] text-on-surface shadow-xs font-bold">
                      PROTECTION
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-surface-container-lowest rounded-xl shadow-xs flex flex-col gap-2.5 border border-surface-container">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase text-on-surface-variant font-semibold">
                      Risk Review Framework
                    </span>
                    <span className="text-xs text-primary font-bold">
                      Coverage Check
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-on-surface font-medium">Life & Term Protection</span>
                      <span className="text-[11px] text-on-surface font-semibold">Adequacy Review</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary-container h-1.5 rounded-full w-full"></div>
                    </div>

                    <div className="flex justify-between items-center text-xs mt-1">
                      <span className="text-on-surface font-medium">Health & Critical Illness Cover</span>
                      <span className="text-[11px] text-on-surface font-semibold">Family Floater</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary-container h-1.5 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container font-semibold text-primary">
                    02 / SERVICE
                  </span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                    Protection [Confirm with Parag]
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface font-bold">
                  Insurance review [Confirm Parag offers this]
                </h2>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Reviewing term and health cover to ensure your family's financial security against unforeseen events.
                </p>

                {/* Direct CTA */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenSchedule('Insurance Consultation')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary text-xs sm:text-sm rounded-lg shadow-xs hover:bg-primary transition-all cursor-pointer font-semibold"
                  >
                    <span>Talk to Parag</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 3: BUSINESS FINANCE CONSULTING
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-surface-container" id="finance">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container font-semibold text-primary">
                  02 / CONSULTING
                </span>
                <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                  Business Finance [Confirm Parag offers this]
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-on-surface font-bold">
                Business finance consulting
              </h2>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Strategic financial consulting, working capital coordination, and cash flow planning for enterprises and business owners, drawing on Parag Doshi's Chartered Accountancy and Corporate Governance background.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-1">
                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">payments</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Liquidity Coordination</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Synchronization between personal liquid funds and corporate working capital reserves.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">domain</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Capital Structuring</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Debt coordination, leverage calibration, and capital cost structuring for growing businesses.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">waterfall_chart</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Cash Flow Planning</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Dynamic forecasting to manage operational cash while maintaining liquidity for key milestones.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-surface-container-low rounded-xl flex flex-col gap-1 border border-surface-container">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]">business_center</span>
                    <span className="text-xs sm:text-sm text-on-surface font-bold">Strategic Planning</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Balance sheet alignment tailored to enterprise owners and multi-generational business leaders.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenSchedule('Business Finance Consulting')}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm rounded-lg shadow-xs transition-all cursor-pointer font-bold"
                >
                  <span>Talk to Parag</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="text-xs text-on-surface-variant font-medium">
                  Confidential consultation
                </span>
              </div>
            </div>

            {/* Focus Card Column */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 mt-4 lg:mt-0">
              <div className="bg-surface-container p-4 sm:p-5 rounded-xl flex flex-col gap-2.5 border border-surface-container-high">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase text-on-surface font-bold">
                    Key Consulting Focus
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest text-[10px] text-on-surface-variant font-semibold">
                    Mumbai Desk
                  </span>
                </div>

                {/* Focus Areas */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex justify-between items-end text-xs">
                    <span className="text-on-surface-variant font-medium">Short-Term Working Liquidity</span>
                    <span className="text-on-surface font-bold">Cash Flow Alignment</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex justify-between items-end text-xs mt-1">
                    <span className="text-on-surface-variant font-medium">Debt & Capital Cost Alignment</span>
                    <span className="text-on-surface font-bold">Structure Review</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-tertiary h-1.5 rounded-full w-3/5"></div>
                  </div>

                  <div className="flex justify-between items-end text-xs mt-1">
                    <span className="text-on-surface-variant font-medium">Deployment Readiness</span>
                    <span className="text-on-surface font-bold">Milestone Focus</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-primary-container h-1.5 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-lowest rounded-lg mt-1 flex items-start gap-2 border border-surface-container text-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">info</span>
                  <p className="text-on-surface-variant leading-relaxed">
                    Chartered Accountancy expertise guiding business owners on operational cash synchronization and long-horizon balance sheet discipline.
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xs h-36 sm:h-44 bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Corporate skyline of Mumbai financial district Bandra Kurla Complex at dusk" 
                  src={FINANCE_IMG} 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION SUITE & LIFECYCLE
          ========================================================================= */}
      <section className="w-full bg-surface-container-high px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="consultation-suite">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="bg-inverse-surface text-inverse-on-surface p-5 sm:p-6 lg:p-8 rounded-xl shadow-xl relative overflow-hidden border border-inverse-on-surface/10">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-container-highest/20 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span className="text-[10px] text-surface-container-lowest uppercase tracking-wider font-bold">
                    Direct Contact Desk
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-surface-container-lowest tracking-tight font-bold">
                  Get in touch with Parag Doshi.
                </h2>
                <p className="text-xs sm:text-sm text-secondary-fixed max-w-xl leading-relaxed">
                  Select an option below. Schedule an introductory conversation or share your current portfolio details directly with our Mumbai desk.
                </p>
                <div className="flex items-center gap-2 pt-1 text-secondary-fixed text-xs">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                  <span>Orange Enterprise • AMFI-registered Mutual Fund Distributor • ARN-83312</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3 mt-4 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Action Card 1: Schedule */}
                  <button
                    onClick={() => onOpenSchedule('Consultation Suite Booking')}
                    className="group text-left flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest text-on-surface hover:shadow-lg hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      </div>
                      <span className="text-xs sm:text-sm text-on-surface font-bold mt-1">
                        Book a call
                      </span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Schedule an in-person or virtual meeting directly with Parag Doshi (AMFI-registered MFD).
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-2.5 group-hover:underline">
                      <span>Select Slot</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </div>
                  </button>

                  {/* Action Card 2: Complete Intake */}
                  <button
                    onClick={() => onOpenIntake()}
                    className="group text-left flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest text-on-surface hover:shadow-lg hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">assignment</span>
                      </div>
                      <span className="text-xs sm:text-sm text-on-surface font-bold mt-1">
                        Share portfolio details
                      </span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Share your existing mutual fund portfolio and investment goals for an initial review.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-2.5 group-hover:underline">
                      <span>Start Questionnaire</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </div>
                  </button>
                </div>

                {/* Direct Contact Strip */}
                <div className="p-2.5 rounded-lg bg-surface-container-highest/10 flex items-center justify-between text-secondary-fixed text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">call</span>
                    <a href="tel:+919820433220" className="hover:underline font-semibold">+91 98204 33220</a>
                  </span>
                  <span className="text-outline-variant text-[10px]">9AM – 10PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Lifecycle */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
              The Engagement Process
            </span>
            <h2 className="text-xl sm:text-2xl text-on-surface font-bold">
              Disciplined steps from portfolio review to ongoing monitoring
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-4 bg-surface-container-lowest rounded-xl shadow-xs flex flex-col gap-2 relative border border-surface-container">
              <span className="text-2xl text-primary-container/30 font-bold">01</span>
              <span className="text-xs sm:text-sm text-on-surface -mt-2 font-bold">Portfolio Review</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Review of your existing mutual funds, asset allocation, and milestone timelines.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-surface-container-lowest rounded-xl shadow-xs flex flex-col gap-2 relative border border-surface-container">
              <span className="text-2xl text-primary-container/30 font-bold">02</span>
              <span className="text-xs sm:text-sm text-on-surface -mt-2 font-bold">Goal Alignment</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Selecting suitable mutual fund schemes aligned with your investment horizon and risk profile.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-surface-container-lowest rounded-xl shadow-xs flex flex-col gap-2 relative border border-surface-container">
              <span className="text-2xl text-primary-container/30 font-bold">03</span>
              <span className="text-xs sm:text-sm text-on-surface -mt-2 font-bold">Orderly Execution</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Seamless digital KYC and distribution execution via AMFI-registered pathways.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-surface-container-lowest rounded-xl shadow-xs flex flex-col gap-2 relative border border-surface-container">
              <span className="text-2xl text-primary-container/30 font-bold">04</span>
              <span className="text-xs sm:text-sm text-on-surface -mt-2 font-bold">Periodic Monitoring</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Periodic portfolio reviews and disciplined allocation adjustments as your life milestones evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


