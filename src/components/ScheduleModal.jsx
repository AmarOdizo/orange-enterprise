import React, { useState } from 'react';

const TODAY_DATE = new Date().toISOString().split('T')[0];

export default function ScheduleModal({ isOpen, onClose, defaultService = 'General Advisory' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    mode: 'In-Person Salon (Mumbai BKC)',
    date: TODAY_DATE,
    slot: '11:00 AM – 12:00 PM IST',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('oe_appointments') || '[]');
      localStorage.setItem('oe_appointments', JSON.stringify([...existing, { ...formData, submittedAt: new Date().toISOString() }]));
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 max-h-[88vh] overflow-y-auto border border-surface-container"
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
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-on-surface">
              Consultation Reserved
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our Mumbai fiduciary desk has logged your appointment request for <strong>{formData.date} ({formData.slot})</strong>.
            </p>
            <div className="mt-1 px-3 py-1 bg-surface-container rounded-md text-xs text-primary font-semibold">
              ARN 83312 • Mumbai Financial Center
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-primary font-bold tracking-wider">
                Private Advisory Salon
              </span>
              <h2 className="text-base sm:text-lg font-bold text-on-surface mt-0.5">
                Book Fiduciary Consultation
              </h2>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Reserve an executive consultation with an AMFI registered principal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Anand Mahindra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98204 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="client@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Advisory Focus</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="Wealth Advisory (Asset Allocation & Growth)">Wealth Advisory (Portfolio Growth)</option>
                  <option value="Insurance Advisory (Estate & Risk Mitigation)">Insurance Advisory (Estate Protection)</option>
                  <option value="Finance & Capital Optimization">Finance (Liquidity & Treasury)</option>
                  <option value="Comprehensive 360° Fiduciary Audit">Comprehensive 360° Fiduciary Audit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Consultation Mode</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                >
                  <option value="In-Person Salon (Mumbai BKC)">In-Person Salon (Mumbai BKC)</option>
                  <option value="Encrypted Virtual Video Session">Encrypted Virtual Video Session</option>
                  <option value="Confidential Phone Consultation">Confidential Phone Consultation</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-on-surface">Preferred Date *</label>
                <input
                  required
                  type="date"
                  min={TODAY_DATE}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-on-surface">Preferred Time Slot (IST)</label>
              <select
                value={formData.slot}
                onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                className="w-full h-9 px-3 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
              >
                <option value="10:00 AM – 11:00 AM IST">Morning: 10:00 AM – 11:00 AM IST</option>
                <option value="11:30 AM – 12:30 PM IST">Noon: 11:30 AM – 12:30 PM IST</option>
                <option value="03:00 PM – 04:00 PM IST">Afternoon: 03:00 PM – 04:00 PM IST</option>
                <option value="05:30 PM – 06:30 PM IST">Evening: 05:30 PM – 06:30 PM IST</option>
                <option value="08:00 PM – 09:00 PM IST">Late Advisory: 08:00 PM – 09:00 PM IST</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-on-surface">Portfolio Brief or Special Instructions (Optional)</label>
              <textarea
                rows="2"
                placeholder="Mention asset horizon, current mutual fund allocations, or family succession goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2.5 rounded-md bg-surface-container-low text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary-container resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-2 px-4 rounded-md bg-primary-container text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Confirm Consultation Booking</span>
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              </button>
            </div>
            
            <p className="text-[11px] text-on-surface-variant text-center">
              🔒 All appointment data is protected under AMFI fiduciary protocols and SEBI client privacy standards.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
