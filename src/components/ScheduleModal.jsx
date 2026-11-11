import React, { useState } from 'react';

const TODAY_DATE = new Date().toISOString().split('T')[0];

export default function ScheduleModal({ isOpen, onClose, defaultService = 'General Advisory' }) {
  const [prevDefault, setPrevDefault] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    mode: 'In-Person Salon (Mumbai BKC)',
    date: TODAY_DATE,
    slot: '11:30 AM – 12:30 PM IST',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync default service when passed without triggering effect warning
  if (prevDefault !== defaultService) {
    setPrevDefault(defaultService);
    setFormData((prev) => ({ ...prev, service: defaultService }));
  }

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('oe_appointments') || '[]');
      localStorage.setItem(
        'oe_appointments',
        JSON.stringify([...existing, { ...formData, submittedAt: new Date().toISOString() }])
      );
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
          title="Close modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-8 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h3 className="text-xl font-black text-[#161C25] tracking-tight">
              Consultation Reserved
            </h3>
            <p className="text-xs sm:text-sm text-[#161C25]/75 max-w-sm leading-relaxed">
              Thank you, <strong className="text-[#161C25]">{formData.name}</strong>. Our Mumbai fiduciary desk has logged your appointment request for <strong className="text-[#FD6702]">{formData.date} ({formData.slot})</strong>.
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF4E8] border border-[#E8D5C2] rounded-full text-xs text-[#161C25] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>AMFI ARN 83312 • Mumbai Financial Center</span>
            </div>
          </div>
        ) : (
          /* Clean, Compact, Zero-Scroller Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            
            {/* Form Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#F0DCB]">
              <div className="w-10 h-10 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                <span className="material-symbols-outlined text-[22px]">calendar_month</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black text-[#161C25] tracking-tight">
                    Book Fiduciary Consultation
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#161C25] text-white text-[10px] font-bold">
                    ARN 83312
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#161C25]/60 mt-0.5">
                  Direct, private consultation with Mumbai wealth & fiduciary advisors.
                </p>
              </div>
            </div>

            {/* Field Row 1: Full Name & Phone Number */}
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
                    placeholder="e.g. Anand Sharma"
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
                    placeholder="+91 98204 33220"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Field Row 2: Email & Advisory Focus */}
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
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Advisory Focus</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    account_balance_wallet
                  </span>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="Mutual Funds (Growth & Wealth Creation)">Mutual Funds (Portfolio Growth)</option>
                    <option value="SIP & Wealth Planning">SIP & Wealth Planning</option>
                    <option value="Portfolio Advisory (HNW Advisory)">Portfolio Advisory (HNW)</option>
                    <option value="Tax Optimization">Tax Optimization</option>
                    <option value="Retirement & Estate Planning">Retirement & Estate Planning</option>
                    <option value="Life & Health Coverage">Life & Health Coverage</option>
                    <option value="Comprehensive 360° Fiduciary Audit">Comprehensive 360° Fiduciary Audit</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Field Row 3: Preferred Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25] flex items-center gap-1">
                  <span>Preferred Date</span>
                  <span className="text-[#FD6702]">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    calendar_today
                  </span>
                  <input
                    required
                    type="date"
                    min={TODAY_DATE}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Preferred Time Slot (IST)</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    schedule
                  </span>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="10:00 AM – 11:00 AM IST">Morning: 10:00 AM – 11:00 AM</option>
                    <option value="11:30 AM – 12:30 PM IST">Noon: 11:30 AM – 12:30 PM</option>
                    <option value="03:00 PM – 04:00 PM IST">Afternoon: 03:00 PM – 04:00 PM</option>
                    <option value="05:30 PM – 06:30 PM IST">Evening: 05:30 PM – 06:30 PM</option>
                    <option value="08:00 PM – 09:00 PM IST">Late Desk: 08:00 PM – 09:00 PM</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Field Row 4: Mode & Specific Query / Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25]">
                  <span>Meeting Mode</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    meeting_room
                  </span>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                  >
                    <option value="In-Person Salon (Mumbai BKC)">In-Person (BKC Mumbai Salon)</option>
                    <option value="Encrypted Virtual Video Session">Encrypted Virtual Video</option>
                    <option value="Confidential Phone Consultation">Confidential Phone Call</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 text-[#161C25]/40 pointer-events-none text-[17px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between">
                  <span>Special Goal / Note</span>
                  <span className="text-[10px] font-normal text-[#161C25]/45">Optional</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2 text-[#161C25]/40 text-[17px]">
                    edit_note
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. HNW advisory, Mutual Fund switch"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-1.5">
              <button
                type="submit"
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.008] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Consultation Booking</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </div>
            
            {/* Trust Assurance Footer */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#161C25]/55 text-center">
              <span className="material-symbols-outlined text-[13px] text-emerald-600">lock</span>
              <span>100% Confidential • Direct fiduciary session in Mumbai • AMFI ARN 83312</span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
