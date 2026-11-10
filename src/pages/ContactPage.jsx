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
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Editorial Masthead Section */}
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop pt-space-lg pb-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-none">
            <div className="flex flex-col max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container w-fit mb-space-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold">
                  Direct Advisory Desk • ARN 83312
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-extrabold">
                Get in touch
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                We're here to assist you! Reach out to our advisory team in Mumbai.
              </p>
            </div>

            {/* Quick Status Indicator */}
            <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-sm self-start md:self-auto border border-surface-container">
              <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  Private Client Salon
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Mumbai • Bandra Kurla Complex Access
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Two-Column Advisory Grid */}
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            
            {/* Column 1: Contact, Telemetry, and Operational Salon Data (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              
              {/* Direct Channels Card */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider font-bold">
                    Direct Access Channels
                  </span>
                  <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                    Confidential
                  </span>
                </div>

                <div className="flex flex-col gap-space-md">
                  {/* Phone */}
                  <a 
                    className="group flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" 
                    href="tel:+919820433220"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Telephone Consultation
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors truncate font-bold">
                        +91 98204 33220
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct line to primary portfolio desk
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    className="group flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" 
                    href="mailto:wlthwrks@gmail.com"
                  >
                    <div className="w-10 h-10 rounded-lg bg-inverse-surface text-inverse-on-surface flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Official Inquiries
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors truncate font-bold">
                        wlthwrks@gmail.com
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Encrypted investor desk communication
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-low">
                    <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                        Executive Salon Location
                      </span>
                      <a 
                        className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-bold" 
                        href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        Mumbai, MH India
                      </a>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Maharashtra Financial Center District
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Connect */}
                  <a 
                    className="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-secondary-container transition-colors group cursor-pointer" 
                    href="http://www.linkedin.com/in/pbd09" 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-primary">groups</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Connect on LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary group-hover:translate-x-1 transition-transform font-bold">
                      <span>/in/pbd09</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operational Timings Schedule */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container">
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider font-bold">
                      Advisory Operating Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container text-primary font-label-caps text-label-caps font-bold">
                    IST Timezone
                  </span>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded bg-surface-container-low">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Monday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Tuesday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded bg-surface-container-low">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Wednesday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Thursday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded bg-surface-container-low">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Friday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 10:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Saturday</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">9:00am – 6:00pm</span>
                  </div>
                  <div className="flex items-center justify-between py-space-xs px-space-sm rounded bg-surface-container-high/60">
                    <span className="font-label-md text-label-md text-primary font-bold">Sunday</span>
                    <span className="font-label-md text-label-md text-primary font-bold">9:00am – 12:00pm</span>
                  </div>
                </div>

                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <span>AMFI Licensed Distributor</span>
                  <span className="font-bold text-on-surface">ARN 83312</span>
                </div>
              </div>

              {/* Quick Engagement Action Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <button
                  onClick={() => onOpenSchedule('Contact Page Appointment')}
                  className="text-left flex flex-col p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface hover:bg-black transition-all group shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[24px] text-primary-container mb-space-xs group-hover:translate-x-1 transition-transform">
                    event_available
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold">
                    Schedule appointment
                  </span>
                  <span className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">
                    Reserve dedicated private salon consultation slot.
                  </span>
                </button>

                <button
                  onClick={() => onOpenIntake()}
                  className="text-left flex flex-col p-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all group shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[24px] text-primary mb-space-xs group-hover:translate-x-1 transition-transform">
                    assignment
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Complete intake
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Submit risk profile and current allocation notes.
                  </span>
                </button>
              </div>

            </div>

            {/* Column 2: Client Inquiry Executive Form (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col mt-6 lg:mt-0">
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md relative overflow-hidden border border-surface-container">
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-secondary"></div>

                <div className="flex items-center justify-between pb-space-sm mb-space-lg">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider font-bold">
                      Fiduciary Consultation
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs font-bold">
                      Client Inquiry Form
                    </h2>
                  </div>
                  <div className="hidden sm:flex flex-col text-right">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-semibold">
                      Response Window
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      ≤ 2 Business Hours
                    </span>
                  </div>
                </div>

                {/* Form Validation Notification Box */}
                {hasGlobalError && (
                  <div className="mb-space-md p-space-md rounded-lg bg-error-container text-on-error-container flex items-start gap-space-sm transition-all border border-error/20">
                    <span className="material-symbols-outlined text-[20px] text-error shrink-0 mt-0.5">error</span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold">Sorry, we were not able to submit the form.</span>
                      <span className="font-body-sm text-body-sm">Please review the errors below and try again. Ensure all required fields marked with * are filled.</span>
                    </div>
                  </div>
                )}

                {/* Success Feedback Box */}
                {isSubmitted && (
                  <div className="mb-space-md p-space-md rounded-lg bg-surface-container text-on-surface flex items-start gap-space-sm border border-primary/30">
                    <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">task_alt</span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">Inquiry Successfully Transmitted</span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Thank you for reaching out to Orange Enterprise. A senior fiduciary associate will review your request and connect with you shortly.
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  {/* Name Input */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between font-semibold" htmlFor="input-name">
                      <span>Name <span className="text-primary">*</span></span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Mahindra"
                        className={`w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all ${
                          errors.name ? 'ring-2 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] text-on-surface-variant pointer-events-none">
                        person
                      </span>
                    </div>
                    {errors.name && (
                      <span className="font-body-sm text-body-sm text-error">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between font-semibold" htmlFor="input-email">
                      <span>Email address <span className="text-primary">*</span></span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@enterprise-advisory.com"
                        className={`w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all ${
                          errors.email ? 'ring-2 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] text-on-surface-variant pointer-events-none">
                        mail
                      </span>
                    </div>
                    {errors.email && (
                      <span className="font-body-sm text-body-sm text-error">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between font-semibold" htmlFor="input-phone">
                      <span>Phone number <span className="text-primary">*</span></span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Required</span>
                    </label>
                    <div className="relative">
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98204 00000"
                        className={`w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all ${
                          errors.phone ? 'ring-2 ring-error' : ''
                        }`}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] text-on-surface-variant pointer-events-none">
                        call
                      </span>
                    </div>
                    {errors.phone && (
                      <span className="font-body-sm text-body-sm text-error">{errors.phone}</span>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between font-semibold" htmlFor="input-message">
                      <span>Message</span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Optional</span>
                    </label>
                    <textarea
                      id="input-message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your portfolio goals, institutional distribution inquiries, or advisory timing preferences..."
                      className="w-full p-space-md bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Mandatory Option Tag */}
                  <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded">
                    <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                    <span>Please ensure contact coordinates are accurate for authorized advisor access.</span>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-space-sm pt-space-xs">
                    <div className="flex items-center h-6">
                      <input
                        id="input-consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-5 h-5 rounded accent-primary text-primary focus:ring-primary-container cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-body-md text-body-md text-on-surface cursor-pointer select-none leading-tight" htmlFor="input-consent">
                        I allow this website to store my submission so they can respond to my inquiry. <span className="text-primary font-bold">*</span>
                      </label>
                      {errors.consent && (
                        <span className="font-body-sm text-body-sm text-error mt-0.5">{errors.consent}</span>
                      )}
                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-md">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-space-xl py-space-md bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded-lg shadow-md hover:bg-primary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-space-xs cursor-pointer font-bold disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit</span>
                          <span className="material-symbols-outlined text-[20px]">send</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[18px] text-primary">lock</span>
                      <span>End-to-end encrypted dispatch</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Trust & Regulatory Card Beneath Form */}
              <div className="mt-space-md bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm border border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[24px] text-primary">policy</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Data Privacy & SEBI Code of Conduct
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      We never share private portfolio discussions with third parties.
                    </span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:underline shrink-0 font-bold" href="tel:+919820433220">
                  <span>Urgent Desk: +91 98204 33220</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Office Presentation Section */}
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop pb-space-xl">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-inverse-surface text-inverse-on-surface border border-inverse-on-surface/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
              
              {/* Image Showcase Left */}
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Modern executive wealth management conference room in Mumbai" 
                  src={OFFICE_IMG} 
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-inverse-surface/80 via-transparent to-transparent"></div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-5 p-space-xl flex flex-col justify-center gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high/20 w-fit text-primary-fixed">
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">
                    In-Person Consultations
                  </span>
                </div>
                
                <h3 className="font-headline-lg text-headline-lg text-white font-bold">
                  Private Client Salon in Mumbai
                </h3>
                
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Located at the epicenter of Indian capital markets. Whether you require comprehensive mutual fund architecture, generational succession frameworks, or corporate liquidity positioning, our senior advisors are at your disposal.
                </p>
                
                <div className="flex items-center gap-space-lg pt-space-xs">
                  <div className="flex flex-col">
                    <span className="font-financial-metric-lg text-financial-metric-lg text-primary-container leading-none font-bold">
                      100%
                    </span>
                    <span className="font-label-caps text-label-caps text-inverse-on-surface/60 uppercase mt-1 font-semibold">
                      Fiduciary Alignment
                    </span>
                  </div>
                  <div className="w-px h-10 bg-inverse-on-surface/20"></div>
                  <div className="flex flex-col">
                    <span className="font-financial-metric-lg text-financial-metric-lg text-white leading-none font-bold">
                      83312
                    </span>
                    <span className="font-label-caps text-label-caps text-inverse-on-surface/60 uppercase mt-1 font-semibold">
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

