import React, { useState } from 'react';

const OFFICE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAty7-pgvdhi7Vptux7Gb-tUjtRrBIapT2UmJwXWgZrsr9Oaw0qTfy_hL-etkJfjzMLip59pQil55uGaC5L5y73WHmxgkVflkuW6g5NZ4peta-KUENws1XFPdXjQWlxFnPcFiTllzdkl-FUoEw5TyEepI1iZYO5HksttOw-gKyV20eqCIdAhdnl3n7d2IlKjIiVgIIQpoa5wQmYZumSmeB__7peGDWNlzBqHFnGgmJW";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    topic: 'Mutual fund investments',
    message: '',
    consent: true,
    website: '' // honeypot
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
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a reachable contact number.';
    }
    if (!formData.consent) {
      errs.consent = 'Consent is required to submit your enquiry.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) {
      // Spam detected via honeypot
      setIsSubmitted(true);
      return;
    }
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
        city: '',
        topic: 'Mutual fund investments',
        message: '',
        consent: true,
        website: ''
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
                  MUMBAI DESK • AMFI ARN-83312
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#161C25] tracking-tight font-extrabold">
                Speak directly with Parag
              </h1>
              <p className="text-xs sm:text-sm text-[#161C25]/70 mt-1.5 leading-relaxed">
                Mutual fund investments and practical financial guidance for families, business owners, and senior professionals, handled personally by Parag Doshi, FCA, FCS.
              </p>
            </div>

            {/* Quick Status Indicator */}
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-xs self-start md:self-auto border border-[#E8D5C2]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[19px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#161C25] font-bold">
                  Direct Access to Parag
                </span>
                <span className="text-[11px] text-[#161C25]/60">
                  Mumbai Desk Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Two-Column Contact Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Column 1: Contact Coordinates, Schedule & Actions (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">

              {/* Direct Channels Card */}
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E8D5C2]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0DCB]">
                  <span className="text-[11px] uppercase text-[#161C25]/60 tracking-wider font-bold">
                    Direct Channels
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#161C25] text-white font-bold">
                    Direct Access
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
                        Phone
                      </span>
                      <span className="text-xs sm:text-sm text-[#161C25] group-hover:text-[#FD6702] transition-colors truncate font-bold">
                        +91 98204 33220
                      </span>
                      <span className="text-[11px] text-[#161C25]/60">
                        Direct line to Parag Doshi
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF9] hover:bg-[#FFF4E8] border border-[#F0DCB]/70 transition-colors"
                    href="mailto:parag@[domain].in"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#161C25]/5 text-[#161C25] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[19px]">alternate_email</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-[#161C25]/60 uppercase font-bold tracking-wider">
                        Email
                      </span>
                      <span className="text-xs sm:text-sm text-[#161C25] group-hover:text-[#FD6702] transition-colors truncate font-bold">
                        parag@[domain].in
                      </span>
                      <span className="text-[11px] text-[#161C25]/60">
                        Direct email to Parag
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
                        Office
                      </span>
                      <a
                        className="text-xs sm:text-sm text-[#161C25] hover:text-[#FD6702] transition-colors font-bold"
                        href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Mumbai, Maharashtra
                      </a>
                      <span className="text-[11px] text-[#161C25]/60">
                        Available for meetings in Mumbai
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <a
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FFF4E8] hover:bg-[#F2DECA] border border-[#E8D5C2] transition-colors group cursor-pointer"
                    href="https://linkedin.com/in/pbd09"
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
                      Office Hours
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
                  <span>AMFI-registered Mutual Fund Distributor</span>
                  <span className="font-bold text-[#161C25]">ARN-83312</span>
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
                          Book a 30-minute introductory call
                        </h2>
                        <span className="px-2 py-0.5 rounded-full bg-[#161C25] text-white text-[10px] font-bold">
                          ARN-83312
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#161C25]/60 mt-0.5">
                        Reach Parag Doshi directly to discuss your mutual fund investments.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col text-right">
                    <span className="text-[10px] uppercase text-[#161C25]/50 font-bold tracking-wider">
                      Response Window
                    </span>
                    <span className="text-xs text-[#FD6702] font-bold">
                      Prompt Callback
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
                  <div className="mb-4 p-4 rounded-xl bg-emerald-50 text-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-emerald-200 text-xs sm:text-sm animate-fade-in">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[22px] text-emerald-600 shrink-0 mt-0.5">task_alt</span>
                      <div className="flex flex-col">
                        <span className="font-bold text-emerald-900 text-sm sm:text-base">Inquiry Successfully Sent</span>
                        <span className="text-emerald-700 mt-0.5 leading-relaxed">
                          Thank you. Parag will get back to you within one working day.
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/919820433220?text=Hello%20Parag%2C%20I%20found%20your%20website%20and%20would%20like%20to%20talk."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow-xs shrink-0 w-fit"
                    >
                      <span>Also send on WhatsApp</span>
                      <span className="material-symbols-outlined text-[15px]">send</span>
                    </a>
                  </div>
                )}

                {/* Clean, Tactile Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

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

                  {/* Row 2: Email Address & City */}
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
                          placeholder="name@example.com"
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
                      <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-city">
                        <span>City</span>
                        <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Location</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                          location_city
                        </span>
                        <input
                          id="input-city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Mumbai"
                          className="w-full pl-11 pr-3.5 h-10 rounded-xl border border-[#E8D5C2] bg-white text-xs sm:text-sm text-[#161C25] placeholder:text-[#161C25]/35 focus:outline-none focus:border-[#FD6702] focus:ring-2 focus:ring-[#FD6702]/20 transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: "I'm interested in" Dropdown */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-topic">
                      <span>I'm interested in</span>
                      <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Topic</span>
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
                        <option value="Mutual fund investments">Mutual fund investments</option>
                        <option value="Investing for retirement or goals">Investing for retirement or goals</option>
                        <option value="Portfolio review">Portfolio review</option>
                        <option value="Business finance consulting">Business finance consulting</option>
                        <option value="Something else">Something else</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#161C25]/45 text-[18px] leading-none select-none flex items-center justify-center">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#161C25] flex items-center justify-between" htmlFor="input-message">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#FD6702] leading-none">edit_note</span>
                        <span>Investment goals or questions</span>
                      </span>
                      <span className="text-[10px] text-[#161C25]/45 uppercase font-medium">Optional</span>
                    </label>
                    <textarea
                      id="input-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, question for Parag, or preferred meeting times..."
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
                        I agree that Orange Enterprise may store my details to respond to my enquiry, as described in the <a href="#privacy" className="underline hover:text-[#FD6702] font-semibold">Privacy Policy</a>. <span className="text-[#FD6702] font-bold">*</span>
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
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Request a call</span>
                          <span className="material-symbols-outlined text-[17px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-[#161C25]/55 text-xs">
                      <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                      <span>AMFI ARN-83312 • Zero Spam</span>
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
                      AMFI Code of Conduct & Client Privacy
                    </span>
                    <span className="text-[11px] text-[#161C25]/60">
                      We never share private portfolio discussions or contact details with third parties.
                    </span>
                  </div>
                </div>
                <a 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF4E8] text-xs text-[#FD6702] hover:bg-[#F2DECA] font-bold transition-colors shrink-0 border border-[#E8D5C2]" 
                  href="tel:+919820433220"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>Call Parag: +91 98204 33220</span>
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
                  alt="Modern meeting space in Mumbai" 
                  src={OFFICE_IMG} 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161C25]/90 via-[#161C25]/30 to-transparent"></div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center gap-3.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 w-fit text-[#FD6702] border border-white/10">
                  <span className="material-symbols-outlined text-[14px]">domain</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    In-Person Meetings
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl text-white font-black tracking-tight">
                  In-Person Meetings in Mumbai
                </h3>
                
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Located in Mumbai. Whether you are looking to start disciplined SIPs, review existing mutual fund holdings, or plan for major life milestones, Parag Doshi handles every discussion personally.
                </p>
                
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-[#FD6702] leading-none font-black">
                      25+
                    </span>
                    <span className="text-[10px] text-white/60 uppercase mt-1 font-semibold">
                      Years Experience
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-white leading-none font-black">
                      ARN-83312
                    </span>
                    <span className="text-[10px] text-white/60 uppercase mt-1 font-semibold">
                      AMFI-registered MFD
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
