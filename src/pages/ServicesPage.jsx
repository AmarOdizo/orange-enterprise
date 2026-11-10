import React from 'react';

const WEALTH_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBdW1zF3_WXUhRahR2CZTsi9vCLiV4h-zRkqlC-nmShxGJ6kwyoovrvjgjsqSTyRmN7zqFthsQgwfx1v9fTgsSNNeiPVRZEiiYqIEPPad6qRK0f-cUQb9tyQlpLG32jEfISgi89LdLiZD5K1_lFwUAQiEPgXrut-CLucNYx6uLOZWhkzZqzA0yXH4V9ka2PhEL0UHyzz8yFudbuSpb3UvmITAzDgr5yfNpsUCwN_60H";
const INSURANCE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmRp5a6O5lbB32sm-nxPU6_dk5UuOohKQ4iJYzpxU2011Ft2jRA2c_nts8Amoc6hYurVh976ngJwrfw0IaIYoXwzuUc7B7SLVxiRmtV-f9o6rVqSk0c3mjq7DrTsXFnb38veex_LCrSQ1yPPtjRhV-RKkhnXnholm3JpFtZXEXQ_cBBBVm5Gl0l8Y1cZinz4YC4urJ4F-SkiGyqY4AvpZfUR8lEmKG4k1wWpXPGkvd";
const FINANCE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-_GMPEV95IeRuD4FbEZA8eZ1JXjrp9k906QUyDtpLL5JNCLP51ALurjFBBToTAmxqg4Sd1ed9Fla-akci1NJylX_Dq1c8GXRXn1-Izi-LKPnMbd8iajHiw99i7KVhNIeaZatpyftCEP49zAOFGKkdZ3fSFlOsi37bWWpecgUhJ2sVLcvbMiV-66QS8GIeSlXZzNybspYSMWMpT2Awoii2pCD2IhwfC_LnYlJu_0Ln";

export default function ServicesPage({ onOpenSchedule, onOpenIntake }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Editorial Header Block */}
      <section className="relative w-full bg-surface-container-low px-4 sm:px-margin-mobile lg:px-margin-desktop py-10 sm:py-16 lg:py-space-xl overflow-hidden border-b border-surface-container">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-space-lg relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3 sm:px-space-md py-1 sm:py-space-xs rounded-full bg-surface-container-highest">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-caps text-[10px] sm:text-label-caps text-on-surface uppercase tracking-widest font-bold">
                Our Advisory Offerings
              </span>
            </div>
            <div className="inline-flex items-center gap-space-xs font-label-sm text-xs sm:text-label-sm text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
              <span>AMFI ARN 83312 • Mumbai Desk</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-gutter-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-2 sm:gap-space-sm">
              <h1 className="font-display-hero text-display-hero-mobile sm:text-4xl lg:text-display-hero text-on-surface tracking-tight leading-[1.1] font-extrabold">
                Tailored strategies for financial growth.
              </h1>
              <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl mt-1 sm:mt-space-xs leading-relaxed">
                Comprehensive wealth management solutions designed for high-net-worth individuals, institutional portfolios, and family offices in Mumbai and beyond.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-space-md bg-surface-container-lowest p-5 sm:p-space-lg rounded-xl shadow-sm border border-surface-container mt-4 sm:mt-6 lg:mt-0">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                  Advisory Model
                </span>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary/10 text-primary font-bold">
                  Fiduciary Standards
                </span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-financial-metric-lg text-2xl sm:text-financial-metric-lg text-on-surface font-extrabold">
                  360°
                </span>
                <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                  Coverage across asset, protection & debt architecture
                </span>
              </div>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <button
                  onClick={() => scrollToSection('consultation-suite')}
                  className="inline-flex items-center justify-center w-full px-space-md py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-all duration-200 cursor-pointer font-semibold"
                >
                  Engage Advisory Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Anchor Navigation (Smooth Swipe on Mobile & Tablet) */}
      <section className="w-full bg-surface-container px-4 sm:px-margin-mobile lg:px-margin-desktop py-2 sm:py-space-md sticky top-16 sm:top-20 z-40 backdrop-blur-md shadow-xs border-b border-surface-container-high">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
          <span className="font-label-caps text-[10px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider font-bold shrink-0">
            Mandate Directory
          </span>
          <div className="flex items-center gap-2 sm:gap-space-sm shrink-0">
            <button
              onClick={() => scrollToSection('wealth-advisory')}
              className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-surface-container-lowest font-label-sm text-xs sm:text-label-sm text-on-surface hover:bg-primary-container hover:text-on-primary transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap"
            >
              01. Wealth advisory
            </button>
            <button
              onClick={() => scrollToSection('insurance-advisory')}
              className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-surface-container-lowest font-label-sm text-xs sm:text-label-sm text-on-surface hover:bg-primary-container hover:text-on-primary transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap"
            >
              02. Insurance advisory
            </button>
            <button
              onClick={() => scrollToSection('finance')}
              className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-surface-container-lowest font-label-sm text-xs sm:text-label-sm text-on-surface hover:bg-primary-container hover:text-on-primary transition-all shadow-xs cursor-pointer font-medium whitespace-nowrap"
            >
              03. Finance
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: WEALTH ADVISORY
          ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-xl border-b border-surface-container" id="wealth-advisory">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-caps text-label-caps px-space-sm py-space-xs rounded bg-surface-container font-semibold text-primary">
                  01 / MANDATE
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                  Path: /wealth-advisory
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
                Wealth advisory
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Detailed breakdown of portfolio growth, strategic asset management, disciplined execution, and long-term capital preservation aligned with the client’s future vision.
              </p>

              {/* Core Sub-Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">trending_up</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Portfolio Growth</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    Tactical equity, debt, and hybrid allocations engineered to outperform standard benchmarks under controlled volatility ceilings.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Capital Preservation</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    Defensive risk-budgeting protocols ensuring generational principal security across evolving economic cycles.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">tune</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Disciplined Execution</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    Quarterly rebalancing, automated systematic transfer structures, and institutional transaction speed.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Client Vision Alignment</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    Customized telemetry mapped to liquidity requirements, retirement timelines, and family legacy targets.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <button
                  onClick={() => onOpenSchedule('Wealth Advisory Mandate')}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-all cursor-pointer font-semibold"
                >
                  <span>Consult on Wealth Advisory</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Fiduciary engagement via ARN 83312
                </span>
              </div>
            </div>

            {/* Telemetry & Visual Graphic Column */}
            <div className="lg:col-span-5 flex flex-col gap-space-md mt-6 lg:mt-0">
              <div className="bg-inverse-surface text-inverse-on-surface p-space-lg rounded-xl shadow-xl flex flex-col gap-space-lg relative overflow-hidden border border-inverse-on-surface/10">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-outline-variant uppercase font-semibold">
                      Portfolio Analytics
                    </span>
                    <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                      Asset Allocation Model
                    </span>
                  </div>
                  <span className="px-space-sm py-space-xs rounded bg-surface-container-highest/20 font-label-caps text-label-caps text-primary-container font-bold">
                    Active Yield
                  </span>
                </div>

                {/* Inline SVG Allocation Curve */}
                <div className="w-full flex flex-col gap-space-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest">
                      14.8%
                    </span>
                    <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                      Strategic Benchmark Target
                    </span>
                  </div>
                  <svg className="w-full h-28 text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 320 80">
                    <path d="M0 65 C40 60, 80 45, 120 50 C160 55, 200 25, 240 28 C280 30, 300 8, 320 12 L320 80 L0 80 Z" fill="rgba(244, 119, 50, 0.15)"></path>
                    <path d="M0 65 C40 60, 80 45, 120 50 C160 55, 200 25, 240 28 C280 30, 300 8, 320 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-space-xs pt-space-xs border-t border-inverse-on-surface/15">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-outline-variant font-semibold">EQUITY ALPHA</span>
                    <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">58%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-outline-variant font-semibold">DEBT HEDGE</span>
                    <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">32%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-outline-variant font-semibold">LIQUID CASH</span>
                    <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">10%</span>
                  </div>
                </div>
              </div>

              {/* Editorial Photography Tile */}
              <div className="relative rounded-xl overflow-hidden shadow-sm h-52 bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Private client salon in Mumbai" 
                  src={WEALTH_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex items-end p-space-md">
                  <span className="font-label-sm text-label-sm text-surface-container-lowest font-semibold">
                    Private Client Salon • Nariman Point & BKC Desk Coverage
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INSURANCE ADVISORY
          ========================================================================= */}
      <section className="w-full bg-surface-container-low px-margin-mobile lg:px-margin-desktop py-space-xl border-b border-surface-container" id="insurance-advisory">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Visual Architecture Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-space-md">
              <div className="relative rounded-xl overflow-hidden shadow-md h-64 bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Wealth protection and estate structuring" 
                  src={INSURANCE_IMG} 
                />
                <div className="absolute top-space-md left-space-md">
                  <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest font-label-caps text-label-caps text-on-surface shadow-sm font-bold">
                    ESTATE SAFEGUARD
                  </span>
                </div>
              </div>

              {/* Protection Diagnostic Card */}
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md border border-surface-container">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                    Risk Mitigation Framework
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    100% Ring-Fenced
                  </span>
                </div>

                <div className="flex flex-col gap-space-sm">
                  <div className="flex justify-between items-center font-body-sm text-body-sm">
                    <span className="text-on-surface font-medium">Key-Person & Executive Liability</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">Comprehensive</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary-container h-2 rounded-full w-full"></div>
                  </div>

                  <div className="flex justify-between items-center font-body-sm text-body-sm mt-space-xs">
                    <span className="text-on-surface font-medium">Estate Transmission Liquidity</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">Optimized</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary-container h-2 rounded-full w-11/12"></div>
                  </div>

                  <div className="flex justify-between items-center font-body-sm text-body-sm mt-space-xs">
                    <span className="text-on-surface font-medium">Tax-Efficient Succession Structures</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">Protected</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary-container h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-caps text-label-caps px-space-sm py-space-xs rounded bg-surface-container font-semibold text-primary">
                  02 / MANDATE
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                  Path: /tax-planning
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
                Insurance advisory
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Detailed risk mitigation, estate protection, and wealth safeguarding frameworks to build a secure financial legacy that stands the test of time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Estate Protection</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Structuring liquidity buffers to prevent forced liquidation of core family assets during succession events.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[22px]">security</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Risk Mitigation</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Comprehensive health, commercial umbrella, and term liabilities calculated against aggregate family exposure.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[22px]">account_balance</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Tax Optimization</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Aligning regulatory deductions and lawful exemptions to maximize net estate yields under Indian tax codes.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[22px]">family_restroom</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Generational Legacy</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Trustee coordination and life covenant configurations ensuring frictionless inter-generational transfer.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <button
                  onClick={() => onOpenSchedule('Insurance & Estate Protection Mandate')}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-all cursor-pointer font-semibold"
                >
                  <span>Discuss Insurance Advisory</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Confidential Risk Appraisal
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FINANCE
          ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-xl border-b border-surface-container" id="finance">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-caps text-label-caps px-space-sm py-space-xs rounded bg-surface-container font-semibold text-primary">
                  03 / MANDATE
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                  Path: /finance
                </span>
              </div>

              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
                Finance
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Strategic financial planning, corporate and personal liquidity coordination, capital structuring, and cash flow optimization.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Liquidity Coordination</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Seamless synchronization between personal liquid funds and corporate working capital reserves.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">architecture</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Capital Structuring</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Debt syndication advisory, leverage calibration, and weighted average cost of capital minimization.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">waterfall_chart</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Cash Flow Optimization</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Dynamic forecasting that prevents idle operational cash while maintaining agility for sudden tactical investments.
                  </p>
                </div>

                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">business_center</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Strategic Planning</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Long-horizon balance sheet alignment tailored to enterprise owners and multi-generational business leaders.
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <button
                  onClick={() => onOpenSchedule('Finance & Capital Structuring Mandate')}
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-all cursor-pointer font-semibold"
                >
                  <span>Explore Finance Advisory</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Institutional Treasury & Planning
                </span>
              </div>
            </div>

            {/* Telemetry Card Column */}
            <div className="lg:col-span-5 flex flex-col gap-space-md mt-6 lg:mt-0">
              <div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-md border border-surface-container-high">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface uppercase font-bold">
                    Treasury Telemetry
                  </span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-on-surface-variant font-semibold">
                    Mumbai Hub
                  </span>
                </div>

                {/* Visual Bar Metric */}
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <div className="flex justify-between items-end">
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Short-Term Working Liquidity</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">+24.2% Eff.</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex justify-between items-end mt-space-xs">
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Debt Cost Compression</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">-185 bps</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-tertiary h-2 rounded-full w-3/5"></div>
                  </div>

                  <div className="flex justify-between items-end mt-space-xs">
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Capital Deployment Readiness</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">98.4%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-primary-container h-2 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div className="p-space-md bg-surface-container-lowest rounded-lg mt-space-xs flex items-start gap-space-sm border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    Integrated balance-sheet oversight ensures immediate capital accessibility without triggering premature redemption penalties or tax friction.
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-sm h-52 bg-surface-container">
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
      <section className="w-full bg-surface-container-high px-margin-mobile lg:px-margin-desktop py-space-xl" id="consultation-suite">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="bg-inverse-surface text-inverse-on-surface p-space-lg lg:p-space-xl rounded-xl shadow-2xl relative overflow-hidden border border-inverse-on-surface/10">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-highest/20 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-caps text-label-caps text-surface-container-lowest uppercase tracking-wider font-bold">
                    Consultation Intake Desk
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest tracking-tight font-bold">
                  Begin your bespoke advisory onboarding.
                </h2>
                <p className="font-body-lg text-body-lg text-secondary-fixed max-w-xl leading-relaxed">
                  Select your consultation channel below. Choose to book a private executive salon session or submit your confidential financial intake profile directly to our Mumbai desk.
                </p>
                <div className="flex items-center gap-space-sm pt-space-xs text-secondary-fixed font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">gavel</span>
                  <span>Regulatory reference: Orange Enterprise • ARN 83312</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-space-md mt-6 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Action Card 1: Schedule */}
                  <button
                    onClick={() => onOpenSchedule('Consultation Suite Booking')}
                    className="group text-left flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest text-on-surface hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-space-xs">
                        Schedule appointment
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Lock in an in-person or virtual advisory session with an AMFI registered principal.
                      </p>
                    </div>
                    <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold mt-space-md group-hover:underline">
                      <span>Select Slot</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </button>

                  {/* Action Card 2: Complete Intake */}
                  <button
                    onClick={() => onOpenIntake()}
                    className="group text-left flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest text-on-surface hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col gap-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">assignment</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-space-xs">
                        Complete intake
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Submit existing holdings and objectives confidentially for swift preliminary diagnostics.
                      </p>
                    </div>
                    <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold mt-space-md group-hover:underline">
                      <span>Start Questionnaire</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </button>
                </div>

                {/* Association Direct Contact Strip */}
                <div className="p-space-sm rounded-lg bg-surface-container-highest/10 flex items-center justify-between text-secondary-fixed font-body-sm text-body-sm">
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">call</span>
                    <a href="tel:+919820433220" className="hover:underline">Immediate Desk: +91 98204 33220</a>
                  </span>
                  <span className="text-outline-variant font-label-caps text-label-caps">HOURS: 9AM – 10PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Lifecycle */}
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
              The Engagement Lifecycle
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Disciplined execution from audit to asset stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-space-md">
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm relative border border-surface-container">
              <span className="font-headline-xl text-headline-xl text-primary-container/30 font-bold">01</span>
              <span className="font-headline-sm text-headline-sm text-on-surface -mt-space-md font-bold">Holistic Audit</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full diagnostic of your existing mutual funds, direct equities, insurance riders, and tax exposure.
              </p>
            </div>

            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm relative border border-surface-container">
              <span className="font-headline-xl text-headline-xl text-primary-container/30 font-bold">02</span>
              <span className="font-headline-sm text-headline-sm text-on-surface -mt-space-md font-bold">Custom Blueprints</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Formulation of bespoke allocation models balancing aggressive returns with ironclad downside shielding.
              </p>
            </div>

            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm relative border border-surface-container">
              <span className="font-headline-xl text-headline-xl text-primary-container/30 font-bold">03</span>
              <span className="font-headline-sm text-headline-sm text-on-surface -mt-space-md font-bold">Orderly Deployment</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Execution via AMFI registered distribution pathways, minimizing market slippage and timing risk.
              </p>
            </div>

            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm relative border border-surface-container">
              <span className="font-headline-xl text-headline-xl text-primary-container/30 font-bold">04</span>
              <span className="font-headline-sm text-headline-sm text-on-surface -mt-space-md font-bold">Continuous Audit</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Ongoing quarterly performance reviews, fiduciary rebalancing, and tax-loss harvesting adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

