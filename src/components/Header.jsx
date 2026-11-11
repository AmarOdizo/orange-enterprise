import React, { useState, useEffect } from 'react';

const LOGO_URL = "/orange-enterprise-logo.png";

export default function Header({ activePage, setActivePage, onOpenSchedule, onOpenDesk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leadCount, setLeadCount] = useState(0);

  // Navigation Items (Middle Nav - Unified & Consistent)
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'business' },
    { id: 'services', label: 'Services', icon: 'account_balance_wallet' },
    { id: 'consultation', label: 'Book Consultation', icon: 'calendar_month', isModal: true },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  // Scroll detection for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
        className={`fixed top-0 left-0 w-full z-50 bg-[#FFF4E8] transition-all duration-200 ${
          scrolled 
            ? 'shadow-sm border-b border-[#E8D5C2]' 
            : 'border-b border-[#F2DECA]'
        }`}
      >
        <div className="h-16 sm:h-[68px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo (Left) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center shrink-0 text-left focus:outline-none cursor-pointer group py-1"
            title="Orange Enterprise - Home"
          >
            <img 
              alt="Orange Enterprise Logo" 
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
              src={LOGO_URL} 
            />
          </button>

          {/* Desktop Navigation (Middle - Home, About, Services, Book Consultation, Contact) */}
          <nav 
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isModal) {
                      onOpenSchedule('Navbar Consultation');
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                  className={`px-3.5 lg:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#FD6702] text-white shadow-xs font-bold' 
                      : 'text-[#161C25]/85 hover:text-[#FD6702] hover:bg-[#FD6702]/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Center & Local Storage on Right */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Phone Link (Laptop & Desktop) */}
            <a 
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#161C25]/85 hover:text-[#FD6702] hover:bg-[#FD6702]/8 font-semibold transition-colors" 
              href="tel:+919820433220"
              title="Call Mumbai Advisory Desk"
            >
              <span className="material-symbols-outlined text-[16px] text-[#FD6702]">
                phone
              </span>
              <span>+91 98204 33220</span>
            </a>

            {/* Local Storage / Advisory Desk Portal Button (Right) */}
            <button
              onClick={() => onOpenDesk && onOpenDesk()}
              title="Open Local Storage Leads Portal (ARN 83312)"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#161C25] hover:bg-black text-white shadow-xs transition-all duration-200 cursor-pointer border border-[#161C25]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#FD6702]">
                storage
              </span>
              <span>Local Storage</span>
              {leadCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-[#FD6702] text-white text-[10px] font-bold">
                  {leadCount}
                </span>
              )}
            </button>

            {/* Mobile Call Icon Button (< sm) */}
            <a
              href="tel:+919820433220"
              className="sm:hidden w-9 h-9 rounded-lg bg-white/90 border border-[#E8D5C2] text-[#FD6702] hover:bg-[#FD6702] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              title="Call Advisor Desk"
              aria-label="Call +91 98204 33220"
            >
              <span className="material-symbols-outlined text-[18px]">phone</span>
            </a>

            {/* Mobile Local Storage Icon Button (< sm) */}
            <button
              onClick={() => onOpenDesk && onOpenDesk()}
              title="Open Local Storage Leads"
              className="sm:hidden relative w-9 h-9 rounded-lg bg-[#161C25] text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#FD6702]">
                storage
              </span>
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-[#FD6702] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {leadCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle (< md) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-white/90 border border-[#E8D5C2] text-[#161C25] hover:text-[#FD6702] hover:border-[#FD6702] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[22px]">
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
                Navigation
              </span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Mumbai Desk Active</span>
              </div>
            </div>

            {/* Navigation Links List */}
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.isModal) {
                        onOpenSchedule('Mobile Menu Consultation');
                        setMobileMenuOpen(false);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
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

              {/* Local Storage Leads Portal */}
              <button
                onClick={() => {
                  if (onOpenDesk) onOpenDesk();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#161C25] hover:bg-black text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
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
                  <span className="material-symbols-outlined text-[16px] text-[#FD6702]">phone</span>
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
