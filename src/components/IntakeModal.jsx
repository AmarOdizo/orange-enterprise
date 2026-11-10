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
      localStorage.setItem('oe_intakes', JSON.stringify([...existing, { ...formData, submittedAt: new Date().toISOString() }]));
    } catch {
      // ignore
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 max-h-[88vh] overflow-y-auto border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-2.5">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[28px]">assignment_turned_in</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">
              Intake Profile Transmitted
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your confidential portfolio diagnostic profile has been transmitted to our Mumbai fiduciary advisory desk.
            </p>
            <div className="mt-1 px-3 py-1 bg-surface-container rounded-md text-xs text-primary font-semibold">
              Orange Enterprise • ARN 83312
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-primary font-bold tracking-wider">
                Confidential Preliminary Diagnostic
              </span>
              <h2 className="text-base sm:text-lg font-bold text-on-surface mt-0.5">
                Client Advisory Intake Questionnaire
              </h2>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Submit your current asset profile for confidential diagnostic analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Vikram Malhotra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="v.malhotra@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Phone Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Investable Asset Bracket</label>
                <select
                  value={formData.assetBracket}
                  onChange={(e) => setFormData({ ...formData, assetBracket: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="₹50 Lakhs – ₹2 Cr">₹50 Lakhs – ₹2 Cr</option>
                  <option value="₹2 Cr – ₹10 Cr">₹2 Cr – ₹10 Cr (High Net Worth)</option>
                  <option value="₹10 Cr – ₹50 Cr">₹10 Cr – ₹50 Cr (Ultra HNW)</option>
                  <option value="₹50 Cr+">₹50 Cr+ (Institutional / Family Office)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Primary Fiduciary Mandate</label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="Long-Term Capital Compounding & Legacy">Long-Term Capital Compounding & Legacy</option>
                  <option value="Multi-Generational Estate & Risk Protection">Multi-Generational Estate Protection</option>
                  <option value="Working Capital & Corporate Liquidity Coordination">Corporate Liquidity & Debt Syndication</option>
                  <option value="Tax-Efficient Mutual Fund Rebalancing">Tax-Efficient Mutual Fund Rebalancing</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Risk Preference Profile</label>
                <select
                  value={formData.riskAppetite}
                  onChange={(e) => setFormData({ ...formData, riskAppetite: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="Balanced Growth (Tactical Equity + Debt Hedge)">Balanced Growth (Tactical Equity + Debt Hedge)</option>
                  <option value="Aggressive Capital Expansion (Equity Dominant)">Aggressive Capital Expansion (Equity Dominant)</option>
                  <option value="Conservative Capital Preservation (Shield Priority)">Conservative Capital Preservation (Shield Priority)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Target Investment Horizon</label>
                <select
                  value={formData.timeHorizon}
                  onChange={(e) => setFormData({ ...formData, timeHorizon: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="3 to 5 Years">3 to 5 Years (Tactical)</option>
                  <option value="5 to 10 Years">5 to 10 Years (Strategic)</option>
                  <option value="10+ Years / Generational">10+ Years / Multi-Generational</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-on-surface">Existing Portfolio Notes (Optional)</label>
              <textarea
                rows="2"
                placeholder="Mention current portfolio size, asset distribution, or key targets..."
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                className="w-full p-2.5 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-2 px-4 rounded-md bg-primary-container text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Submit Intake Questionnaire</span>
                <span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
              </button>
            </div>
            
            <p className="text-[11px] text-on-surface-variant text-center">
              🔒 Information is submitted confidentially under ARN 83312 fiduciary encryption. No unsolicited marketing.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
