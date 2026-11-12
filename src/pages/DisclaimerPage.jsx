import React from 'react';

export default function DisclaimerPage({ setActivePage, onOpenSchedule }) {
  return (
    <div className="flex flex-col w-full min-h-[70vh] py-10 sm:py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-on-surface-variant">
          <button 
            onClick={() => setActivePage('home')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-on-surface font-semibold">Disclaimer</span>
        </div>

        {/* Header Block */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#E8D5C2] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FD6702]"></span>
            <span className="text-[11px] text-[#FD6702] uppercase tracking-wider font-bold">
              STATUTORY REGULATORY NOTICE · ARN-83312
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-4">
            Disclaimer
          </h1>

          <div className="prose prose-sm max-w-none text-on-surface-variant flex flex-col gap-4 text-xs sm:text-sm leading-relaxed">
            <p className="p-4 rounded-xl bg-[#FFF8F0] border border-[#E8D5C2] text-[#161C25] font-medium leading-relaxed">
              Orange Enterprise is an AMFI-registered Mutual Fund Distributor (ARN-83312). [Orange Enterprise is not registered with SEBI as an Investment Adviser.] Information on this website is for general awareness only and should not be treated as investment advice or a recommendation to buy or sell any scheme. Mutual fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. Investors should consider their own circumstances, and may seek independent professional advice, before investing.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              1. Distribution Role & AMFI Registration
            </h2>
            <p>
              Orange Enterprise acts strictly in its capacity as an AMFI-registered Mutual Fund Distributor holding valid ARN-83312 issued by the Association of Mutual Funds in India. Content provided across this website, communications, and publications is curated strictly for informational, educational, and awareness purposes.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              2. Mutual Fund Risk Factor
            </h2>
            <p className="font-semibold text-primary">
              Mutual fund investments are subject to market risks, read all scheme related documents carefully.
            </p>
            <p>
              The NAV (Net Asset Value) of schemes can fluctuate upward or downward depending on prevailing capital market conditions, interest rate movements, credit events, and macroeconomic factors. Past performance of any mutual fund scheme or asset class does not guarantee or indicate future returns.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              3. Independent Assessment
            </h2>
            <p>
              Investors should evaluate their own risk tolerance, liquidity requirements, and financial goals, and may seek independent professional tax or legal advice before making any investment decisions.
            </p>
          </div>

          {/* Contact Strip */}
          <div className="mt-8 pt-6 border-t border-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-on-surface-variant">
              <span>Have questions about scheme documentation or disclosures?</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenSchedule('Disclaimer Inquiries')}
                className="px-5 py-2.5 rounded-full bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Talk to Parag
              </button>
              <button
                onClick={() => setActivePage('home')}
                className="px-4 py-2.5 rounded-full bg-white text-[#161C25] hover:bg-[#FFF4E8] border border-[#E8D5C2] text-xs font-semibold transition-all cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

