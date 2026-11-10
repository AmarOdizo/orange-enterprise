import React from 'react';

const LOGO_URL = "/orange-enterprise-white-logo.png";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActivePage, onOpenSchedule, onOpenIntake, onOpenLegal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-8 sm:mt-10 border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#F47732] px-2.5 py-1.5 rounded-lg shadow-xs flex items-center justify-center">
                <img 
                  alt="Orange Enterprise Logo" 
                  className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-xs" 
                  src={LOGO_URL} 
                />
              </div>
            </div>
            
            <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-[10px] text-primary w-fit font-bold tracking-wider">
              ARN 83312 • AMFI REGISTERED MUTUAL FUND DISTRIBUTOR
            </div>
            
            <p className="text-xs text-on-surface-variant mt-1 max-w-sm leading-relaxed">
              Wealth management redefined. Tailored strategies for financial growth, bespoke fiduciary solutions, and institutional wealth preservation.
            </p>
            
            <div className="flex items-center gap-2 mt-2 flex-wrap text-xs">
              <a 
                className="inline-flex items-center gap-1 text-primary hover:underline font-semibold" 
                href="http://www.linkedin.com/in/pbd09" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[14px]">link</span>
                LinkedIn: pbd09
              </a>
              <span className="text-outline-variant">•</span>
              <span className="text-on-surface-variant font-medium">
                Wealth Works Association
              </span>
            </div>
          </div>

          {/* Column 2: Institutional Advisory Links */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-xs uppercase text-on-surface tracking-wider font-bold">
              Institutional Advisory
            </span>
            <nav className="flex flex-col gap-1 text-xs">
              <button 
                onClick={() => handleNav('home')} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                Wealth Services
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                Contact Salon
              </button>
              <button 
                onClick={() => onOpenSchedule('General Advisory Appointment')} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                Schedule Appointment
              </button>
              <button 
                onClick={() => onOpenIntake()} 
                className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer py-0.5"
              >
                Complete Intake
              </button>
            </nav>
          </div>

          {/* Column 3: Advisory Desk & Salon Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-xs uppercase text-on-surface tracking-wider font-bold">
              Advisory Desk & Salon
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-on-surface-variant">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-primary mt-0.5">location_on</span>
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-primary">phone</span>
                <a className="hover:text-on-surface transition-colors font-medium text-on-surface" href="tel:+919820433220">
                  +91 98204 33220
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-primary">mail</span>
                <a className="hover:text-on-surface transition-colors font-medium text-on-surface" href="mailto:wlthwrks@gmail.com">
                  wlthwrks@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-1.5 mt-1">
                <span className="material-symbols-outlined text-[15px] text-primary mt-0.5">schedule</span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-on-surface">Monday – Friday: 9:00am – 10:00pm</span>
                  <span>Saturday: 9:00am – 6:00pm</span>
                  <span>Sunday: 9:00am – 12:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure & Risk Notice Box */}
        <div className="mt-6 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-surface-container p-3 sm:p-4 rounded-xl">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-on-surface font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-primary">verified</span>
              Regulatory Disclosure & Risk Notice
            </span>
            <p className="text-[11px] sm:text-xs text-on-surface-variant max-w-4xl leading-relaxed">
              Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Registration ARN 83312 is issued by AMFI. Fiduciary performance data is indicative and historical yields do not guarantee future returns. Orange Enterprise adheres to client confidentiality and SEBI guidelines.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 text-xs text-on-surface-variant flex-wrap">
            <button 
              onClick={() => onOpenLegal('Privacy Policy')} 
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Terms of Service')} 
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('Cookie Policy')} 
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-[11px] sm:text-xs text-on-surface-variant">
          © {CURRENT_YEAR} Orange Enterprise (ARN 83312). All rights reserved. In association with Wealth Works.
        </div>
      </div>
    </footer>
  );
}


