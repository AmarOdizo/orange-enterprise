import React, { useState } from 'react';

const OFFICE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAty7-pgvdhi7Vptux7Gb-tUjtRrBIapT2UmJwXWgZrsr9Oaw0qTfy_hL-etkJfjzMLip59pQil55uGaC5L5y73WHmxgkVflkuW6g5NZ4peta-KUENws1XFPdXjQWlxFnPcFiTllzdkl-FUoEw5TyEepI1iZYO5HksttOw-gKyV20eqCIdAhdnl3n7d2IlKjIiVgIIQpoa5wQmYZumSmeB__7peGDWNlzBqHFnGgmJW";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Wealth & Portfolio Advisory',
    message: '',
    consent: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasGlobalError, setHasGlobalError] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid corporate or personal email.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a reachable contact number.';
    }
    if (!formData.consent) {
      errs.consent = 'Consent is required to process client submissions under regulatory protocols.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setHasGlobalError(true);
      return;
    }

    setErrors({});
    setHasGlobalError(false);
    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem('oe_inquiries') || '[]');
      localStorage.setItem(
        'oe_inquiries',
        JSON.stringify([
          ...existing,
          {
            ...formData,
            subject: formData.topic,
            source: 'Contact Page Inquiry',
            submittedAt: new Date().toISOString()
          }
        ])
      );
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'Wealth & Portfolio Advisory',
        message: '',
        consent: true
      });
    }, 700);
  };

  return (
    <div className="flex flex-col w-full text-[#161C25]">
      <div className="relative w-full overflow-hidden">
        {/* Subtle Ambient Glow Elements */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#FD6702]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-96 -left-20 w-80 h-80 bg-[#FD6702]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Editorial Masthead Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#E8D5C2] w-fit mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FD6702] animate-pulse"></span>
                <span className="text-[11px] text-[#FD6702] tracking-wider uppercase font-bold">
                  Direct Advisory Desk • AMFI ARN 83312
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#161C25] tracking-tight font-extrabold">
                Get in Touch with Our Fiduciary Team
              </h1>
              <p className="text-xs sm:text-sm text-[#161C25]/70 mt-1.5 leading-relaxed">
                Connect directly with certified wealth advisors in Mumbai. Private client salons, strategic portfolio reviews, and corporate treasury coordination.
              </p>
            </div>

            {/* Quick Status Indicator */}
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-xs self-start md:self-auto border border-[#E8D5C2]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[19px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#161C25] font-bold">
                  Private Client Salon Active
                </span>
                <span className="text-[11px] text-[#161C25]/60">
                  Mumbai BKC Financial Center
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Two-Column Advisory Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Column 1: Contact Coordinates, Schedule & Actions (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">

              {/* Direct Channels Card */}
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E8D5C2]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0DCB]">
                  <span className="text-[11px] uppercase text-[#161C25]/60 tracking-wider font-bold">
                    Direct Access Channels
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#161C25] text-white font-bold">
                    Confidential
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {/* Phone */}
                  <a
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9] hover:bg-[#FFF4E8] border border-[#F0DCB]/70 transition-colors"
                    href="tel:+919820433220"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[19px]">phone_in_talk</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-[#161C25]/60 uppercase font-bold tracking-wider">
                        Telephone Advisory Desk
                      </span>
                      <span className="text-xs sm:text-sm text-[#161C25] group-hover:text-[#FD6702] transition-colors truncate font-bold">
                        +91 98204 33220
                      </span>
                      <span className="text-[11px] text-[#161C25]/60">
                        Direct line to primary portfolio desk
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9] hover:bg-[#FFF4E8] border border-[#F0DCB]/70 transition-colors"
                    href="mailto:wlthwrks@gmail.com"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#161C25]/5 text-[#161C25] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[19px]">alternate_email</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-[#161C25]/60 uppercase font-bold tracking-wider">
                        Official Communications
                      </span>
                      <span className="text-xs sm:text-sm text-[#161C25] group-hover:text-[#FD6702] transition-colors truncate font-bold">
                        wlthwrks@gmail.com
                      </span>
                      <span className="text-[11px] text-[#161C25]/60">
                        Encrypted investor desk email
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9] border border-[#F0DCB]/70">
                    <div className="w-9 h-9 rounded-xl bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[19px]">location_on</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-[#161C25]/60 uppercase font-bold tracking-wider">
                        Executive Salon Location
                      </span>
                      <a
                        className="text-xs sm:text-sm text-[#161C25] hover:text-[#FD6702] transition-colors font-bold"
                        href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Mumbai, MH India
                      </a>
                      <span className="text-[11px] text-[#161C25]/60">
                        Maharashtra Financial Center District
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <a
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FFF4E8] hover:bg-[#F2DECA] border border-[#E8D5C2] transition-colors group cursor-pointer"
                    href="http://www.linkedin.com/in/pbd09"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#FD6702]">groups</span>
                      <span className="text-xs text-[#161C25] font-bold">Connect on LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#FD6702] group-hover:translate-x-1 transition-transform font-bold">
                      <span>/in/pbd09</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operational Timings Schedule */}
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E8D5C2]">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F0DCB]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-[#FD6702]">schedule</span>
                    <span className="text-[11px] uppercase text-[#161C25]/60 tracking-wider font-bold">
                      Advisory Operating Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#161C25] text-white text-[10px] font-bold">
                    IST
                  </span>
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#FFFDF9]">
                    <span className="text-[#161C25] font-semibold">Monday – Friday</span>
                    <span className="text-[#161C25] font-bold">9:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg">
                    <span className="text-[#161C25] font-semibold">Saturday</span>
                    <span className="text-[#161C25] font-bold">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#FFF4E8] border border-[#E8D5C2]/60">
                    <span className="text-[#FD6702] font-bold">Sunday Special Desk</span>
                    <span className="text-[#FD6702] font-bold">9:00 AM – 12:00 PM</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#F0DCB] flex items-center justify-between text-[#161C25]/60 text-xs">
                  <span>AMFI Registered Distributor</span>
                  <span className="font-bold text-[#161C25]">ARN 83312</span>
                </div>
              </div>



            </div>

            {/* Column 2: Client Inquiry Clean Form (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden border border-[#E8D5C2]">

                {/* Decorative Ambient Corner Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#FD6702]/10 rounded-bl-full pointer-events-none" />

                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#F0DCB]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FD6702]/10 text-[#FD6702] border border-[#FD6702]/20 flex items-center justify-center shrink-0 shadow-2xs">
                      <span className="material-symbols-outlined text-[22px]">mail</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-black text-[#161C25] tracking-tight">
                          Direct Client Inquiry
                        </h2>
                        <span className="px-2 py-0.5 rounded-full bg-[#161C25] text-white text-[10px] font-bold">
                          ARN 83312
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#161C25]/60 mt-0.5">
                        Submit your confidential inquiry directly to our Mumbai advisory desk.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col text-right">
                    <span className="text-[10px] uppercase text-[#161C25]/50 font-bold tracking-wider">
                      Response Window
                    </span>
                    <span className="text-xs text-[#FD6702] font-bold">
                      ≤ 2 Business Hours
                    </span>
                  </div>
                </div>

                {/* Global Error Banner */}
                {hasGlobalError && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 flex items-start gap-2.5 border border-red-200 text-xs">
                    <span className="material-symbols-outlined text-[18px] text-red-600 shrink-0 mt-0.5">error</span>
                    <div className="flex flex-col">
                      <span className="font-bold">Please complete the required fields.</span>
                      <span>Review the highlighted inputs below and ensure consent is checked.</span>
                    </div>
                  </div>
                )}

                {/* Success Banner */}
                {isSubmitted && (
                  <div className="mb-4 p-4 rounded-xl bg-emerald-50 text-emerald-800 flex items-start gap-3 border border-emerald-200 text-xs sm:text-sm animate-fade-in">
                    <span className="material-symbols-outlined text-[22px] text-emerald-600 shrink-0 mt-0.5">task_alt</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-emerald-900 text-sm sm:text-base">Inquiry Successfully Transmitted</span>
                      <span className="text-emerald-700 mt-0.5 leading-relaxed">
                        Thank you for reaching out to Orange Enterprise. Your request has been routed to an authorized fiduciary advisor. We will connect with you within 2 business hours.
                      </span>
                    </div>
                  </div>
                )}

                {/* Clean, Tactile Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">

                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-name">
                        <span className="flex items-center gap-1">
                          Full Name <span className="text-[#FD6702]">*</span>
                        </span>
                        <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Required</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          person
                        </span>
                        <input
                          id="input-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Mahindra"
                          className={`w-full pl-11 pr-3.5 h-10 rounded-xl border bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                            errors.name 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-400/20' 
                              : 'border-[#E8D5C2] focus:border-[#FD6702] focus:ring-[#FD6702]/20'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[10px] text-red-600 font-semibold">{errors.name}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-phone">
                        <span className="flex items-center gap-1">
                          Phone Number <span className="text-[#FD6702]">*</span>
                        </span>
                        <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Required</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          phone
                        </span>
                        <input
                          id="input-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98204 33220"
                          className={`w-full pl-11 pr-3.5 h-10 rounded-xl border bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                            errors.phone 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-400/20' 
                              : 'border-[#E8D5C2] focus:border-[#FD6702] focus:ring-[#FD6702]/20'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[10px] text-red-600 font-semibold">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address & Advisory Topic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-email">
                        <span className="flex items-center gap-1">
                          Email Address <span className="text-[#FD6702]">*</span>
                        </span>
                        <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Required</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          mail
                        </span>
                        <input
                          id="input-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@enterprise-advisory.com"
                          className={`w-full pl-11 pr-3.5 h-10 rounded-xl border bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                            errors.email 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-400/20' 
                              : 'border-[#E8D5C2] focus:border-[#FD6702] focus:ring-[#FD6702]/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[10px] text-red-600 font-semibold">{errors.email}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-topic">
                        <span>Inquiry Focus Area</span>
                        <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Category</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          account_balance_wallet
                        </span>
                        <select
                          id="input-topic"
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full pl-11 pr-9 h-10 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs appearance-none cursor-pointer truncate"
                        >
                          <option value="Wealth & Portfolio Advisory">Wealth & Portfolio Advisory</option>
                          <option value="Mutual Funds & SIP Restructuring">Mutual Funds & SIP Restructuring</option>
                          <option value="HNW & Family Office Planning">HNW & Family Office Planning</option>
                          <option value="Tax Optimization & Estate Planning">Tax Optimization & Estate Planning</option>
                          <option value="Corporate Treasury & Liquidity">Corporate Treasury & Liquidity</option>
                          <option value="General Fiduciary Inquiry">General Fiduciary Inquiry</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-message">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#FD6702] leading-none">edit_note</span>
                        <span>Portfolio Requirement or Notes</span>
                      </span>
                      <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Optional</span>
                    </label>
                    <textarea
                      id="input-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline current portfolio size, asset goals, question for the desk, or advisory timing preferences..."
                      className="w-full p-3 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        id="input-consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-4 h-4 rounded border-[#E8D5C2] text-[#FD6702] focus:ring-[#FD6702] cursor-pointer accent-[#FD6702]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[11px] text-[#161C25]/80 cursor-pointer select-none leading-snug" htmlFor="input-consent">
                        I authorize Orange Enterprise to process my submission for confidential wealth consultation under AMFI ARN 83312 and fiduciary guidelines. <span className="text-[#FD6702] font-bold">*</span>
                      </label>
                      {errors.consent && (
                        <span className="text-[10px] text-red-600 font-semibold mt-0.5">{errors.consent}</span>
                      )}
                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Advisory Inquiry</span>
                          <span className="material-symbols-outlined text-[17px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-[#161C25]/55 text-xs">
                      <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                      <span>256-bit Encrypted • Zero Spam</span>
                    </div>
                  </div>

                </form>
              </div>

              {/* Trust & Regulatory Card Beneath Form */}
              <div className="mt-4 bg-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs border border-[#E8D5C2]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">policy</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#161C25] font-bold">
                      Data Privacy & SEBI Code of Conduct
                    </span>
                    <span className="text-[11px] text-[#161C25]/60">
                      We never share private portfolio discussions with third parties.
                    </span>
                  </div>
                </div>
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF4E8] text-xs text-[#FD6702] hover:bg-[#F2DECA] font-bold transition-colors shrink-0 border border-[#E8D5C2]" 
                  href="tel:+919820433220"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>Urgent Desk: +91 98204 33220</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Office Presentation Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-[#161C25] text-white border border-[#E8D5C2]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
              
              {/* Image Showcase Left */}
              <div className="lg:col-span-7 relative h-56 lg:h-auto overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Modern executive wealth management conference room in Mumbai" 
                  src={OFFICE_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161C25]/90 via-[#161C25]/30 to-transparent"></div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center gap-3.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 w-fit text-[#FD6702] border border-white/10">
                  <span className="material-symbols-outlined text-[14px]">domain</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    In-Person Consultations
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl text-white font-black tracking-tight">
                  Private Client Salon in Mumbai
                </h3>
                
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Located at the epicenter of Indian capital markets. Whether you require comprehensive mutual fund architecture, generational succession frameworks, or corporate liquidity positioning, our senior advisors are at your disposal.
                </p>
                
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-[#FD6702] leading-none font-black">
                      100%
                    </span>
                    <span className="text-[10px] text-white/60 uppercase mt-1 font-semibold">
                      Fiduciary Alignment
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-white leading-none font-black">
                      83312
                    </span>
                    <span className="text-[10px] text-white/60 uppercase mt-1 font-semibold">
                      AMFI Registered ARN
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
