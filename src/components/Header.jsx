import React, { useState, useEffect } from 'react';

const LOGO_URL = "/orange-enterprise-logo.png";

export default function Header({ activePage, setActivePage, onOpenSchedule, onOpenDesk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  // Main page navigation items
  const navLinks = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'business' },
    { id: 'services', label: 'Services', icon: 'account_balance_wallet' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  // Scroll detection for enhanced glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync lead count from localStorage for the Local Storage badge
  useEffect(() => {
    const calculateLeads = () => {
      try {
        const appts = JSON.parse(localStorage.getItem('oe_appointments') || '[]').length;
        const inqs = JSON.parse(localStorage.getItem('oe_inquiries') || '[]').length;
        const ints = JSON.parse(localStorage.getItem('oe_intakes') || '[]').length;
        setLeadCount(appts + inqs + ints);
      } catch {
        setLeadCount(0);
      }
    };

    calculateLeads();
    window.addEventListener('storage', calculateLeads);
    const interval = setInterval(calculateLeads, 2000);
    return () => {
      window.removeEventListener('storage', calculateLeads);
      clearInterval(interval);
    };
  }, []);

  // Close mobile menu on resize to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FFF4E8]/95 backdrop-blur-md shadow-md border-b border-[#EAD5C1]' 
            : 'bg-[#FFF4E8] border-b border-[#F2DECA]'
        }`}
      >
        <div className="h-16 sm:h-[70px] max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center shrink-0 text-left focus:outline-none cursor-pointer group py-1"
            title="Orange Enterprise - Home"
          >
            <img 
              alt="Orange Enterprise Logo" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
              src={LOGO_URL} 
            />
          </button>

          {/* Desktop Primary Navigation (Middle Floating Pill) */}
          <nav 
            className="hidden md:flex items-center bg-white/75 backdrop-blur-md border border-[#E8D5C2] p-1 rounded-full shadow-2xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#FD6702] text-white shadow-xs font-bold scale-[1.02]' 
                      : 'text-[#161C25]/85 hover:text-[#FD6702] hover:bg-[#FD6702]/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Center & Utilities on Right */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Call Link with Live Desk Indicator (Laptop/Desktop) */}
            <a 
              className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[#161C25]/85 hover:text-[#FD6702] hover:bg-white/70 font-semibold transition-all border border-transparent hover:border-[#E8D5C2]" 
              href="tel:+919820433220"
              title="Call Mumbai Advisory Desk"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="material-symbols-outlined text-[15px] text-[#FD6702]">
                phone
              </span>
              <span>+91 98204 33220</span>
            </a>

            {/* Local Storage / Advisory Desk Portal Button */}
            <button
              onClick={() => onOpenDesk && onOpenDesk()}
              title="Open Local Storage Leads Portal (ARN 83312)"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/85 hover:bg-white text-[#161C25] border border-[#E8D5C2] hover:border-[#FD6702]/60 hover:text-[#FD6702] shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#FD6702] group-hover:scale-110 transition-transform">
                storage
              </span>
              <span>Local Storage</span>
              {leadCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-[#FD6702] text-white text-[10px] font-bold tracking-tight shadow-xs">
                  {leadCount}
                </span>
              )}
            </button>

            {/* High-Impact Primary CTA: Book Consultation */}
            <button
              onClick={() => onOpenSchedule('Book Consultation')}
              className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Book Consultation
            </button>

            {/* Mobile Call Icon Button (< sm) */}
            <a
              href="tel:+919820433220"
              className="sm:hidden w-8 h-8 rounded-full bg-white/90 border border-[#E8D5C2] text-[#FD6702] hover:bg-[#FD6702] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              title="Call Advisor Desk"
              aria-label="Call +91 98204 33220"
            >
              <span className="material-symbols-outlined text-[16px]">phone</span>
            </a>

            {/* Mobile Local Storage Icon Button (< sm) */}
            <button
              onClick={() => onOpenDesk && onOpenDesk()}
              title="Open Local Storage Leads"
              className="sm:hidden relative w-8 h-8 rounded-full bg-white/90 border border-[#E8D5C2] text-[#161C25] hover:border-[#FD6702] hover:text-[#FD6702] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#FD6702]">
                storage
              </span>
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-3.5 h-3.5 px-0.5 bg-[#FD6702] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {leadCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle Button (< md) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/90 border border-[#E8D5C2] text-[#161C25] hover:text-[#FD6702] hover:border-[#FD6702] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Modern Drawer Sheet (< md) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFF4E8] border-t border-[#E8D5C2] px-4 py-4 flex flex-col gap-3 shadow-2xl animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto text-[#161C25]">
            
            {/* Drawer Status Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-[#F2DECA]">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#161C25]/60">
                Menu & Quick Navigation
              </span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Mumbai Desk Active</span>
              </div>
            </div>

            {/* Navigation Links List */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                      isActive
                        ? 'bg-[#FD6702] text-white border-[#FD6702] font-bold shadow-xs'
                        : 'bg-white/80 text-[#161C25] border-[#E8D5C2] hover:bg-[#FD6702]/10 hover:text-[#FD6702] font-semibold'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-white' : 'text-[#FD6702]'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-2 border-t border-[#F2DECA] flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#161C25]/60">
                Client Desk & Portal
              </span>
              
              {/* Consultation CTA Button */}
              <button
                onClick={() => {
                  onOpenSchedule('Mobile Menu Consultation');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#FD6702] to-[#FF7824] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">event_available</span>
                <span>Book Consultation</span>
              </button>

              {/* Local Storage Leads Portal */}
              <button
                onClick={() => {
                  if (onOpenDesk) onOpenDesk();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/90 text-[#161C25] border border-[#E8D5C2] hover:border-[#FD6702] text-xs font-semibold shadow-2xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[16px] text-[#FD6702]">storage</span>
                  <span>Local Storage Leads Portal</span>
                </div>
                {leadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#FD6702] text-white text-[10px] font-bold">
                    {leadCount} Leads
                  </span>
                )}
              </button>

              {/* Direct Phone Call */}
              <a
                href="tel:+919820433220"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/90 text-[#161C25] hover:bg-[#FD6702]/10 border border-[#E8D5C2] text-xs font-semibold transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[16px] text-[#FD6702]">call</span>
                  <span>+91 98204 33220</span>
                </div>
                <span className="text-[10px] text-[#161C25]/60">10 AM – 7 PM IST</span>
              </a>

              {/* Compliance Footer */}
              <div className="pt-2 text-center text-[10px] text-[#161C25]/60 leading-relaxed">
                AMFI Registered Mutual Fund Distributor • ARN 83312 • Mumbai Desk
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}
    </>
  );
}
