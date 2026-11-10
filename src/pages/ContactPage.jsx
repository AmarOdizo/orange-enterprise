import React, { useState } from 'react';

const OFFICE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAty7-pgvdhi7Vptux7Gb-tUjtRrBIapT2UmJwXWgZrsr9Oaw0qTfy_hL-etkJfjzMLip59pQil55uGaC5L5y73WHmxgkVflkuW6g5NZ4peta-KUENws1XFPdXjQWlxFnPcFiTllzdkl-FUoEw5TyEepI1iZYO5HksttOw-gKyV20eqCIdAhdnl3n7d2IlKjIiVgIIQpoa5wQmYZumSmeB__7peGDWNlzBqHFnGgmJW";

export default function ContactPage({ onOpenSchedule, onOpenIntake }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
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
      localStorage.setItem('oe_inquiries', JSON.stringify([...existing, { ...formData, source: 'Contact Page Inquiry', submittedAt: new Date().toISOString() }]));
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
        message: '',
        consent: false
      });
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        {/* Subtle Ambient Glow Elements */}
        <div className="absolute -top-32 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-96 -left-20 w-72 h-72 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Editorial Masthead Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 pb-5 sm:pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-none">
            <div className="flex flex-col max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container w-fit mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                <span className="text-[10px] sm:text-xs text-primary tracking-widest uppercase font-bold">
                  Direct Advisory Desk • ARN 83312
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-extrabold">
                Get in touch
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                We're here to assist you! Reach out to our advisory team in Mumbai.
              </p>
            </div>

            {/* Quick Status Indicator */}
            <div className="flex items-center gap-2.5 bg-surface-container-low px-3 py-2 rounded-xl shadow-xs self-start md:self-auto border border-surface-container">
              <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface font-semibold">
                  Private Client Salon
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  Mumbai • Bandra Kurla Complex Access
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Two-Column Advisory Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
            
            {/* Column 1: Contact, Telemetry, and Operational Salon Data (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              
              {/* Direct Channels Card */}
              <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-5 shadow-xs border border-surface-container hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-surface-container">
                  <span className="text-[10px] uppercase text-on-surface-variant tracking-wider font-bold">
                    Direct Access Channels
                  </span>
                  <span className="text-[10px] text-primary uppercase font-bold">
                    Confidential
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {/* Phone */}
                  <a 
                    className="group flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" 
                    href="tel:+919820433220"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                        Telephone Consultation
                      </span>
                      <span className="text-xs sm:text-sm text-on-surface tracking-tight group-hover:text-primary transition-colors truncate font-bold">
                        +91 98204 33220
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Direct line to primary portfolio desk
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    className="group flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" 
                    href="mailto:wlthwrks@gmail.com"
                  >
                    <div className="w-8 h-8 rounded-lg bg-inverse-surface text-inverse-on-surface flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                        Official Inquiries
                      </span>
                      <span className="text-xs sm:text-sm text-on-surface tracking-tight group-hover:text-primary transition-colors truncate font-bold">
                        wlthwrks@gmail.com
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Encrypted investor desk communication
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-low">
                    <div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-on-surface-variant uppercase font-semibold">
                        Executive Salon Location
                      </span>
                      <a 
                        className="text-xs sm:text-sm text-on-surface hover:text-primary transition-colors font-bold" 
                        href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        Mumbai, MH India
                      </a>
                      <span className="text-[11px] text-on-surface-variant">
                        Maharashtra Financial Center District
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <a 
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container hover:bg-secondary-container transition-colors group cursor-pointer" 
                    href="http://www.linkedin.com/in/pbd09" 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
                      <span className="text-xs text-on-surface font-semibold">Connect on LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary group-hover:translate-x-1 transition-transform font-bold">
                      <span>/in/pbd09</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operational Timings Schedule */}
              <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-5 shadow-xs border border-surface-container">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-surface-container">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                    <span className="text-[10px] uppercase text-on-surface-variant tracking-wider font-bold">
                      Advisory Operating Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-primary text-[10px] font-bold">
                    IST
                  </span>
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
                    <span className="text-on-surface font-semibold">Monday</span>
                    <span className="text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded">
                    <span className="text-on-surface font-semibold">Tuesday</span>
                    <span className="text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
                    <span className="text-on-surface font-semibold">Wednesday</span>
                    <span className="text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded">
                    <span className="text-on-surface font-semibold">Thursday</span>
                    <span className="text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
                    <span className="text-on-surface font-semibold">Friday</span>
                    <span className="text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded">
                    <span className="text-on-surface font-semibold">Saturday</span>
                    <span className="text-on-surface font-bold">9:00am – 6:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-high/60">
                    <span className="text-primary font-bold">Sunday</span>
                    <span className="text-primary font-bold">9:00am – 12:00pm</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-surface-container flex items-center justify-between text-on-surface-variant text-xs">
                  <span>AMFI Licensed Distributor</span>
                  <span className="font-bold text-on-surface">ARN 83312</span>
                </div>
              </div>

              {/* Quick Engagement Action Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => onOpenSchedule('Contact Page Appointment')}
                  className="text-left flex flex-col p-3.5 rounded-xl bg-inverse-surface text-inverse-on-surface hover:bg-black transition-all group shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary-container mb-1 group-hover:translate-x-1 transition-transform">
                    event_available
                  </span>
                  <span className="text-xs sm:text-sm font-bold">
                    Book Consultation
                  </span>
                  <span className="text-[11px] text-inverse-on-surface/70 mt-1 leading-snug">
                    Reserve dedicated private salon consultation slot.
                  </span>
                </button>

                <button
                  onClick={() => onOpenIntake()}
                  className="text-left flex flex-col p-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all group shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary mb-1 group-hover:translate-x-1 transition-transform">
                    assignment
                  </span>
                  <span className="text-xs sm:text-sm text-on-surface font-bold">
                    Complete intake
                  </span>
                  <span className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                    Submit risk profile and current allocation notes.
                  </span>
                </button>
              </div>

            </div>

            {/* Column 2: Client Inquiry Executive Form (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col mt-4 lg:mt-0 w-full">
              <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-5 lg:p-6 shadow-xs relative overflow-hidden border border-surface-container">
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-secondary"></div>

                <div className="flex items-center justify-between pb-2 mb-4">
                  <div>
                    <span className="text-[10px] uppercase text-primary tracking-wider font-bold">
                      Fiduciary Consultation
                    </span>
                    <h2 className="text-lg sm:text-xl text-on-surface tracking-tight mt-0.5 font-bold">
                      Client Inquiry Form
                    </h2>
                  </div>
                  <div className="hidden sm:flex flex-col text-right">
                    <span className="text-[10px] uppercase text-on-surface-variant font-semibold">
                      Response Window
                    </span>
                    <span className="text-xs text-on-surface font-bold">
                      ≤ 2 Business Hours
                    </span>
                  </div>
                </div>

                {/* Form Validation Notification Box */}
                {hasGlobalError && (
                  <div className="mb-3 p-3 rounded-lg bg-error-container text-on-error-container flex items-start gap-2 transition-all border border-error/20 text-xs">
                    <span className="material-symbols-outlined text-[18px] text-error shrink-0 mt-0.5">error</span>
                    <div className="flex flex-col">
                      <span className="font-bold">Sorry, we were not able to submit the form.</span>
                      <span>Please review the errors below and try again. Ensure all required fields marked with * are filled.</span>
                    </div>
                  </div>
                )}

                {/* Success Feedback Box */}
                {isSubmitted && (
                  <div className="mb-3 p-3 rounded-lg bg-surface-container text-on-surface flex items-start gap-2 border border-primary/30 text-xs">
                    <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">task_alt</span>
                    <div className="flex flex-col">
                      <span className="text-sm text-primary font-bold">Inquiry Successfully Transmitted</span>
                      <span className="text-on-surface-variant mt-0.5">
                        Thank you for reaching out to Orange Enterprise. A senior fiduciary associate will review your request and connect with you shortly.
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface flex items-center justify-between font-semibold" htmlFor="input-name">
                      <span>Name <span className="text-primary">*</span></span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Mahindra"
                        className={`w-full h-9 sm:h-10 px-3 bg-surface-container-low rounded-md text-on-surface text-xs sm:text-sm placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all ${
                          errors.name ? 'ring-1 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-on-surface-variant pointer-events-none">
                        person
                      </span>
                    </div>
                    {errors.name && (
                      <span className="text-[11px] text-error">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface flex items-center justify-between font-semibold" htmlFor="input-email">
                      <span>Email address <span className="text-primary">*</span></span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@enterprise-advisory.com"
                        className={`w-full h-9 sm:h-10 px-3 bg-surface-container-low rounded-md text-on-surface text-xs sm:text-sm placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all ${
                          errors.email ? 'ring-1 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-on-surface-variant pointer-events-none">
                        mail
                      </span>
                    </div>
                    {errors.email && (
                      <span className="text-[11px] text-error">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface flex items-center justify-between font-semibold" htmlFor="input-phone">
                      <span>Phone number <span className="text-primary">*</span></span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98204 00000"
                        className={`w-full h-9 sm:h-10 px-3 bg-surface-container-low rounded-md text-on-surface text-xs sm:text-sm placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all ${
                          errors.phone ? 'ring-1 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-on-surface-variant pointer-events-none">
                        call
                      </span>
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-error">{errors.phone}</span>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface flex items-center justify-between font-semibold" htmlFor="input-message">
                      <span>Message</span>
                      <span className="text-[10px] text-on-surface-variant uppercase">Optional</span>
                    </label>
                    <textarea
                      id="input-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your portfolio goals, institutional distribution inquiries, or advisory timing preferences..."
                      className="w-full p-2.5 bg-surface-container-low rounded-md text-on-surface text-xs sm:text-sm placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Mandatory Option Tag */}
                  <div className="text-on-surface-variant text-[11px] flex items-center gap-1.5 bg-surface-container px-2.5 py-1.5 rounded">
                    <span className="material-symbols-outlined text-[15px] text-primary">info</span>
                    <span>Please ensure contact coordinates are accurate for authorized advisor access.</span>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <div className="flex items-center h-5">
                      <input
                        id="input-consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-4 h-4 rounded accent-primary text-primary focus:ring-primary-container cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs text-on-surface cursor-pointer select-none leading-snug" htmlFor="input-consent">
                        I allow this website to store my submission so they can respond to my inquiry. <span className="text-primary font-bold">*</span>
                      </label>
                      {errors.consent && (
                        <span className="text-[11px] text-error mt-0.5">{errors.consent}</span>
                      )}
                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-5 py-2 bg-primary-container text-on-primary text-xs sm:text-sm rounded-md shadow-xs hover:bg-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer font-bold disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit</span>
                          <span className="material-symbols-outlined text-[16px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-on-surface-variant text-xs">
                      <span className="material-symbols-outlined text-[15px] text-primary">lock</span>
                      <span>End-to-end encrypted dispatch</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Trust & Regulatory Card Beneath Form */}
              <div className="mt-3 bg-surface-container-low rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-xs border border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">policy</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface font-semibold">
                      Data Privacy & SEBI Code of Conduct
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      We never share private portfolio discussions with third parties.
                    </span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-1 text-xs text-primary hover:underline shrink-0 font-bold" href="tel:+919820433220">
                  <span>Urgent Desk: +91 98204 33220</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Office Presentation Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-inverse-surface text-inverse-on-surface border border-inverse-on-surface/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
              
              {/* Image Showcase Left */}
              <div className="lg:col-span-7 relative h-52 lg:h-auto overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Modern executive wealth management conference room in Mumbai" 
                  src={OFFICE_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-inverse-surface/80 via-transparent to-transparent"></div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-5 p-5 sm:p-6 lg:p-8 flex flex-col justify-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high/20 w-fit text-primary-fixed">
                  <span className="material-symbols-outlined text-[14px]">domain</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    In-Person Consultations
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl text-white font-bold">
                  Private Client Salon in Mumbai
                </h3>
                
                <p className="text-xs sm:text-sm text-inverse-on-surface/80 leading-relaxed">
                  Located at the epicenter of Indian capital markets. Whether you require comprehensive mutual fund architecture, generational succession frameworks, or corporate liquidity positioning, our senior advisors are at your disposal.
                </p>
                
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-primary-container leading-none font-bold">
                      100%
                    </span>
                    <span className="text-[10px] text-inverse-on-surface/60 uppercase mt-0.5 font-semibold">
                      Fiduciary Alignment
                    </span>
                  </div>
                  <div className="w-px h-8 bg-inverse-on-surface/20"></div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl text-white leading-none font-bold">
                      83312
                    </span>
                    <span className="text-[10px] text-inverse-on-surface/60 uppercase mt-0.5 font-semibold">
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


