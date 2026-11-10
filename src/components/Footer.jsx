import React from 'react';

const LOGO_URL = "https://lh3.googleusercontent.com/aida/ALJJyrBtkKQ6EShH3sJOhcaBqscWa8D6yEWu5C-HGGZyFSzUa0HcrSs0IbOsolI9c2zBuOjNDWINM0oorVLUfr1QdhoiszLKI74nJ4v16BcvvOuaCieCAc9pJKTxlSlAPh-2Q5UrfCPhlFrQE94U-LYYWq7D4ZLngYYZAYib4l4qNhB0DYWayT4NG67UiXZSfoWmvu548j2gOUl8PXjFURcF_Q6yjkd1M-E9wkjV8CL90TU9LA";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActivePage, onOpenSchedule, onOpenIntake, onOpenLegal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-10 sm:mt-space-xl border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop py-8 sm:py-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-gutter-lg">
          
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="Orange Enterprise Logo" 
                className="h-7 w-auto object-contain" 
                src={LOGO_URL} 
              />
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Orange Enterprise
              </span>
            </div>
            
            <div className="inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container font-label-caps text-label-caps text-primary w-fit font-bold tracking-wider">
              ARN 83312 • AMFI REGISTERED MUTUAL FUND DISTRIBUTOR
            </div>
            
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-sm leading-relaxed">
              Wealth management redefined. Tailored strategies for financial growth, bespoke fiduciary solutions, and institutional wealth preservation.
            </p>
            
            <div className="flex items-center gap-space-sm mt-space-sm flex-wrap">
              <a 
                className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary hover:underline font-semibold" 
                href="http://www.linkedin.com/in/pbd09" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
                LinkedIn: pbd09
              </a>
              <span className="text-outline-variant">•</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Wealth Works Association
              </span>
            </div>
          </div>

          {/* Column 2: Institutional Advisory Links */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider font-bold">
              Institutional Advisory
            </span>
            <nav className="flex flex-col gap-space-xs">
              <button 
                onClick={() => handleNav('home')} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Wealth Services
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Contact Salon
              </button>
              <button 
                onClick={() => onOpenSchedule('General Advisory Appointment')} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Schedule Appointment
              </button>
              <button 
                onClick={() => onOpenIntake()} 
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Complete Intake
              </button>
            </nav>
          </div>

          {/* Column 3: Advisory Desk & Salon Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider font-bold">
              Advisory Desk & Salon
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">location_on</span>
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">phone</span>
                <a className="hover:text-on-surface transition-colors font-medium" href="tel:+919820433220">
                  +91 98204 33220
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                <a className="hover:text-on-surface transition-colors font-medium" href="mailto:wlthwrks@gmail.com">
                  wlthwrks@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-space-xs mt-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">schedule</span>
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">Monday – Friday: 9:00am – 10:00pm</span>
                  <span>Saturday: 9:00am – 6:00pm</span>
                  <span>Sunday: 9:00am – 12:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure & Risk Notice Box */}
        <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md bg-surface-container p-space-md rounded-xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              Regulatory Disclosure & Risk Notice
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl leading-relaxed">
              Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Registration ARN 83312 is issued by AMFI. Fiduciary performance data is indicative and historical yields do not guarantee future returns. Orange Enterprise adheres to client confidentiality and SEBI guidelines.
            </p>
          </div>
          <div className="flex items-center gap-space-md shrink-0 font-label-sm text-label-sm text-on-surface-variant flex-wrap">
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
        <div className="mt-space-md text-center font-body-sm text-body-sm text-on-surface-variant">
          © {CURRENT_YEAR} Orange Enterprise (ARN 83312). All rights reserved. In association with Wealth Works.
        </div>
      </div>
    </footer>
  );
}

