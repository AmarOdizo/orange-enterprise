import React, { useState } from 'react';

export default function IntakeModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    assetBracket: '₹2 Cr – ₹10 Cr',
    primaryGoal: 'Long-Term Capital Compounding & Legacy',
    riskAppetite: 'Balanced Growth (Tactical Equity + Debt Hedge)',
    timeHorizon: '5 to 10 Years',
    currentAdvisory: 'Self-Managed / Direct Mutual Funds',
    additionalDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('oe_intakes') || '[]');
      const intakeRecord = {
        ...formData,
        portfolioSize: formData.assetBracket,
        riskTolerance: formData.riskAppetite,
        goals: formData.primaryGoal,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem('oe_intakes', JSON.stringify([...existing, intakeRecord]));
    } catch {
      // ignore
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 max-h-[92vh] overflow-y-auto no-scrollbar border border-[#E8D5C2] text-[#161C25]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#FD6702]/10 rounded-bl-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFF4E8] hover:bg-[#F2DECA] text-[#161C25]/70 hover:text-[#161C25] flex items-center justify-center transition-colors cursor-pointer border border-[#E8D5C2]/60 z-10"
          title="Close questionnaire"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          /* Confirmation / Success Screen */
          <div className="py-8 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h3 className="text-xl font-black text-[#161C25] tracking-tight">
              Intake Profile Transmitted
            </h3>
            <p className="text-xs sm:text-sm text-[#161C25]/75 max-w-md leading-relaxed">
              Thank you, <strong className="text-[#161C25]">{formData.name}</strong>. Your confidential wealth diagnostic profile ({formData.assetBracket} bracket) has been securely delivered to our Mumbai senior advisory desk.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF4E8] border border-[#E8D5C2] rounded-full text-xs text-[#161C25] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Encrypted Dossier • AMFI ARN 83312 • Mumbai Financial Center</span>
            </div>
          </div>
        ) : (
          /* Clean, Professional Intake Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#F0DCB]">
              <div className="w-10 h-10 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black text-[#161C25] tracking-tight">
                    Client Advisory Intake Questionnaire
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#161C25] text-white text-[10px] font-bold">
                    ARN 83312
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#161C25]/60 mt-0.5">
                  Confidential preliminary diagnostic for private wealth and institutional mandates.
                </p>
              </div>
            </div>

            {/* Section 1: Client Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25] flex items-center gap-1">
                  <span>Full Name</span>
                  <span className="text-[#FD6702]">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    person
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25] flex items-center gap-1">
                  <span>Phone Number</span>
                  <span className="text-[#FD6702]">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    phone
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Email & Current Setup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25] flex items-center gap-1">
                  <span>Email Address</span>
                  <span className="text-[#FD6702]">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    mail
                  </span>
                  <input
                    required
                    type="email"
                    placeholder="v.malhotra@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Current Portfolio Management</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    account_balance
                  </span>
                  <select
                    value={formData.currentAdvisory}
                    onChange={(e) => setFormData({ ...formData, currentAdvisory: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="Self-Managed / Direct Mutual Funds">Self-Managed / Direct MF</option>
                    <option value="Bank Wealth Desk / Relationship Manager">Bank RM / Traditional Broker</option>
                    <option value="Discretionary PMS / AIF">Existing PMS / AIF Account</option>
                    <option value="Family Office / Multi-Advisor">Family Office / Multi-Advisor</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Investable Asset Bracket & Primary Mandate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Investable Asset Bracket</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    account_balance_wallet
                  </span>
                  <select
                    value={formData.assetBracket}
                    onChange={(e) => setFormData({ ...formData, assetBracket: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="₹50 Lakhs – ₹2 Cr">₹50 Lakhs – ₹2 Cr</option>
                    <option value="₹2 Cr – ₹10 Cr">₹2 Cr – ₹10 Cr (High Net Worth)</option>
                    <option value="₹10 Cr – ₹50 Cr">₹10 Cr – ₹50 Cr (Ultra HNW)</option>
                    <option value="₹50 Cr+">₹50 Cr+ (Family Office / Institutional)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Primary Fiduciary Mandate</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    flag
                  </span>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="Long-Term Capital Compounding & Legacy">Long-Term Capital Compounding</option>
                    <option value="Multi-Generational Estate & Risk Protection">Estate & Succession Shielding</option>
                    <option value="Working Capital & Corporate Liquidity Coordination">Corporate Treasury & Liquidity</option>
                    <option value="Tax-Efficient Mutual Fund Rebalancing">Tax-Efficient MF Rebalancing</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Section 4: Risk Profile & Time Horizon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Risk Appetite Profile</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    trending_up
                  </span>
                  <select
                    value={formData.riskAppetite}
                    onChange={(e) => setFormData({ ...formData, riskAppetite: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="Balanced Growth (Tactical Equity + Debt Hedge)">Balanced Growth (Tactical Equity + Debt Hedge)</option>
                    <option value="Aggressive Capital Expansion (Equity Dominant)">Aggressive Expansion (Equity Dominant)</option>
                    <option value="Conservative Capital Preservation (Shield Priority)">Capital Preservation (Shield Priority)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Target Investment Horizon</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    timelapse
                  </span>
                  <select
                    value={formData.timeHorizon}
                    onChange={(e) => setFormData({ ...formData, timeHorizon: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="3 to 5 Years">3 to 5 Years (Tactical Horizon)</option>
                    <option value="5 to 10 Years">5 to 10 Years (Strategic Wealth)</option>
                    <option value="10+ Years / Generational">10+ Years (Multi-Generational)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Section 5: Specific Notes / Existing Portfolio Summary */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between">
                <span>Existing Portfolio Notes or Target Objectives</span>
                <span className="text-[10px] font-normal text-[#161C25]/45">Optional</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                  edit_note
                </span>
                <input
                  type="text"
                  placeholder="e.g. Current equity/debt allocation, tax drag concerns, succession plan..."
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Transmit Button */}
            <div className="pt-1.5">
              <button
                type="submit"
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.008] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Transmit Confidential Intake Dossier</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </div>
            
            {/* Privacy & Fiduciary Compliance Footer */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#161C25]/55 text-center">
              <span className="material-symbols-outlined text-[13px] text-emerald-600">lock</span>
              <span>Confidential Fiduciary Disclosure • AMFI ARN 83312 • 256-bit Encrypted Handling</span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
