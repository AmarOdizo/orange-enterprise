import React, { useState } from 'react';

export default function ScheduleModal({ isOpen, onClose, defaultService = 'General Advisory' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    mode: 'In-Person Salon (Mumbai BKC)',
    date: '',
    slot: '11:00 AM – 12:00 PM IST',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
              Consultation Reserved
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Thank you, <strong>{formData.name}</strong>. Our Mumbai fiduciary desk has logged your appointment request. You will receive an encrypted invite and calendar sync shortly.
            </p>
            <div className="mt-2 px-4 py-2 bg-surface-container rounded-lg font-label-sm text-primary font-semibold">
              ARN 83312 • Mumbai Financial Center
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps uppercase text-primary font-bold tracking-wider">
                Private Advisory Salon
              </span>
              <h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                Schedule Fiduciary Appointment
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Reserve an executive consultation with an AMFI registered principal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Anand Mahindra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98204 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="client@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Advisory Focus</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <option value="Wealth Advisory (Asset Allocation & Growth)">Wealth Advisory (Portfolio Growth)</option>
                  <option value="Insurance Advisory (Estate & Risk Mitigation)">Insurance Advisory (Estate Protection)</option>
                  <option value="Finance & Capital Optimization">Finance (Liquidity & Treasury)</option>
                  <option value="Comprehensive 360° Fiduciary Audit">Comprehensive 360° Fiduciary Audit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Consultation Mode</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <option value="In-Person Salon (Mumbai BKC)">In-Person Salon (Mumbai BKC)</option>
                  <option value="Encrypted Virtual Video Session">Encrypted Virtual Video Session</option>
                  <option value="Confidential Phone Consultation">Confidential Phone Consultation</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface">Preferred Time Slot (IST)</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <option value="10:00 AM – 11:00 AM IST">Morning: 10:00 AM – 11:00 AM IST</option>
                  <option value="11:30 AM – 12:30 PM IST">Noon: 11:30 AM – 12:30 PM IST</option>
                  <option value="03:00 PM – 04:00 PM IST">Afternoon: 03:00 PM – 04:00 PM IST</option>
                  <option value="05:30 PM – 06:30 PM IST">Evening: 05:30 PM – 06:30 PM IST</option>
                  <option value="08:00 PM – 09:00 PM IST">Late Advisory: 08:00 PM – 09:00 PM IST</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface">Portfolio Brief or Special Instructions (Optional)</label>
              <textarea
                rows="2"
                placeholder="Mention asset horizon, current mutual fund allocations, or family succession goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-6 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Confirm Appointment Booking</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </button>
            </div>
            
            <p className="font-body-sm text-[12px] text-on-surface-variant text-center">
              🔒 All appointment data is protected under AMFI fiduciary protocols and SEBI client privacy standards.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

