import React from 'react';

export default function PrivacyPage({ setActivePage, onOpenSchedule }) {
  return (
    <div className="flex flex-col w-full min-h-[70vh] py-10 sm:py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-on-surface-variant">
          <button 
            onClick={() => setActivePage('home')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-on-surface font-semibold">Privacy Policy</span>
        </div>

        {/* Header Block */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#E8D5C2] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FD6702]"></span>
            <span className="text-[11px] text-[#FD6702] uppercase tracking-wider font-bold">
              CLIENT CONFIDENTIALITY & DATA PROTECTION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-4">
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none text-on-surface-variant flex flex-col gap-4 text-xs sm:text-sm leading-relaxed">
            <p className="p-4 rounded-xl bg-[#FFF8F0] border border-[#E8D5C2] text-[#161C25] font-medium leading-relaxed">
              At Orange Enterprise, we take client confidentiality and privacy seriously. This plain-English policy explains how we handle your information.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit a contact or consultation form on this website, we collect your contact details:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-xs">
              <li><strong>Name</strong> — to address you personally</li>
              <li><strong>Email address</strong> — to send booking confirmations or written replies</li>
              <li><strong>Phone number</strong> — to arrange or confirm consultation calls</li>
              <li><strong>City</strong> — to understand your geographical location</li>
              <li><strong>Topic & Message</strong> — to prepare for our introductory conversation</li>
            </ul>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              2. How Your Information is Used
            </h2>
            <p>
              Your form details (name, email, phone, city, message) are used <strong>only to respond to your enquiries</strong> and coordinate your consultation with Parag Doshi.
            </p>
            <p className="font-semibold text-on-surface">
              We do not sell, rent, trade, or share your contact details with any third parties or marketing agencies.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              3. Data Retention & Deletion Rights
            </h2>
            <p>
              Your personal information is retained only as long as necessary to fulfill your enquiry or service relationship.
            </p>
            <p>
              You have full rights to request that your information be removed or deleted from our records at any time. To request deletion, simply email us at:
            </p>
            <div className="p-3 bg-surface-container rounded-xl flex items-center gap-2 text-xs font-semibold text-on-surface w-fit">
              <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
              <a href="mailto:parag@[domain].in" className="hover:text-primary transition-colors">
                parag@[domain].in
              </a>
            </div>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              4. Cookies & Analytics
            </h2>
            <p>
              This website uses only essential session state to ensure proper navigation and prevent form spam. You can manage or decline non-essential cookies using the cookie notice on our website.
            </p>

            <h2 className="text-sm sm:text-base font-bold text-on-surface mt-2">
              5. Contact Us
            </h2>
            <p>
              For any questions regarding our privacy practices or data handling, you may reach out directly:
            </p>
            <div className="text-xs text-on-surface-variant flex flex-col gap-1">
              <span><strong>Orange Enterprise</strong></span>
              <span>AMFI-registered Mutual Fund Distributor · ARN-83312</span>
              <span>Founder: Parag Doshi, FCA, FCS</span>
              <span>Location: Mumbai, Maharashtra</span>
              <span>Phone: +91 98204 33220</span>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-8 pt-6 border-t border-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-on-surface-variant">
              <span>Need to discuss your privacy or request data deletion?</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenSchedule('Privacy Inquiry')}
                className="px-5 py-2.5 rounded-full bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Talk to Parag
              </button>
              <button
                onClick={() => setActivePage('home')}
                className="px-4 py-2.5 rounded-full bg-white text-[#161C25] hover:bg-[#FFF4E8] border border-[#E8D5C2] text-xs font-semibold transition-all cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

