import React, { useState } from 'react';

export default function SipCalculator({ onOpenSchedule }) {
  const [calcType, setCalcType] = useState('sip'); // 'sip' | 'lumpsum'
  const [monthlyAmount, setMonthlyAmount] = useState(15000);
  const [lumpSumAmount, setLumpSumAmount] = useState(250000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12.5);

  // Calculations
  const isSip = calcType === 'sip';
  const principal = isSip ? monthlyAmount * 12 * years : lumpSumAmount;

  let totalValue = 0;
  if (isSip) {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    totalValue = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  } else {
    totalValue = lumpSumAmount * Math.pow(1 + expectedReturn / 100, years);
  }

  const wealthGain = Math.max(0, totalValue - principal);
  const gainPercentage = principal > 0 ? ((wealthGain / totalValue) * 100).toFixed(0) : 0;

  // Indian Rupee Currency Formatter
  const formatINR = (val) => {
    const rounded = Math.round(val);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(rounded);
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl shadow-lg border border-surface-container p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-surface-container">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed/40 text-primary text-[10px] font-bold tracking-wider uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            Systematic Investment Planning
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-on-surface tracking-tight">
            Mutual Fund SIP Calculator
          </h3>
          <p className="text-xs text-on-surface-variant">
            Simulate your compounding potential with systematic portfolio allocation.
          </p>
        </div>

        {/* SIP vs Lumpsum Switcher */}
        <div className="inline-flex p-1 rounded-lg bg-surface-container-low border border-surface-container self-start sm:self-center">
          <button
            type="button"
            onClick={() => setCalcType('sip')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              isSip
                ? 'bg-primary-container text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly SIP
          </button>
          <button
            type="button"
            onClick={() => setCalcType('lumpsum')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              !isSip
                ? 'bg-primary-container text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            One-Time Lumpsum
          </button>
        </div>
      </div>

      {/* Grid: Inputs vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
        
        {/* Left Column: Sliders & Controls */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Amount Control */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-on-surface">
                {isSip ? 'Monthly Investment Amount' : 'Total Lumpsum Investment'}
              </label>
              <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-on-surface">
                {formatINR(isSip ? monthlyAmount : lumpSumAmount)}
              </span>
            </div>
            <input
              type="range"
              min={isSip ? 1000 : 25000}
              max={isSip ? 200000 : 5000000}
              step={isSip ? 1000 : 25000}
              value={isSip ? monthlyAmount : lumpSumAmount}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (isSip) setMonthlyAmount(val);
                else setLumpSumAmount(val);
              }}
              className="w-full accent-[#FD6702] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
              <span>{formatINR(isSip ? 1000 : 25000)}</span>
              <span>{formatINR(isSip ? 200000 : 5000000)}</span>
            </div>
          </div>

          {/* Time Horizon Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-on-surface">
                Investment Horizon
              </label>
              <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-on-surface">
                {years} {years === 1 ? 'Year' : 'Years'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#FD6702] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Expected Return Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-on-surface">
                Expected Annualized Return (CAGR)
              </label>
              <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-primary-container">
                {expectedReturn}% p.a.
              </span>
            </div>
            <input
              type="range"
              min="8"
              max="20"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full accent-[#FD6702] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
              <span>8% (Conservative)</span>
              <span>12.5% (Balanced Equity)</span>
              <span>20% (Aggressive)</span>
            </div>
          </div>

        </div>

        {/* Right Column: Calculated Wealth Matrix */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low rounded-xl p-4 sm:p-5 border border-surface-container">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
              Projected Maturity Corpus
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FD6702] mt-0.5 tracking-tight">
              {formatINR(totalValue)}
            </div>

            {/* Split Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-surface-container">
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase font-medium">
                  Total Invested
                </span>
                <span className="text-xs sm:text-sm font-bold text-on-surface">
                  {formatINR(principal)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase font-medium">
                  Estimated Wealth Gain
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary-container">
                  +{formatINR(wealthGain)}
                </span>
              </div>
            </div>

            {/* Visual Proportion Bar */}
            <div className="mt-4">
              <div className="h-2.5 w-full rounded-full bg-surface-container overflow-hidden flex">
                <div 
                  style={{ width: `${100 - gainPercentage}%` }} 
                  className="bg-inverse-surface h-full"
                  title={`Invested: ${100 - gainPercentage}%`}
                ></div>
                <div 
                  style={{ width: `${gainPercentage}%` }} 
                  className="bg-[#FD6702] h-full"
                  title={`Gains: ${gainPercentage}%`}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-inverse-surface"></span>
                  <span>Invested ({100 - gainPercentage}%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FD6702]"></span>
                  <span>Compounded Gains ({gainPercentage}%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-5 pt-4 border-t border-surface-container flex flex-col gap-2">
            <button
              onClick={() => onOpenSchedule && onOpenSchedule(`SIP Planning (${formatINR(isSip ? monthlyAmount : lumpSumAmount)} / ${years} yrs)`)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary-container hover:bg-primary text-on-primary rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>Schedule Portfolio Strategy</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <p className="text-[10px] text-on-surface-variant text-center leading-tight">
              Mutual Fund investments are subject to market risks. Calculations are illustrative estimates.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

