import React, { useState, useEffect } from 'react';

const LOGO_URL = "/orange-enterprise-white-logo.png";

export default function Header({ activePage, setActivePage, onOpenSchedule }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

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
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F47732] shadow-md border-b border-[#E06522] text-white">
        <div className="h-14 sm:h-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Registration */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 shrink-0 text-left focus:outline-none cursor-pointer group"
          >
            <img 
              alt="Orange Enterprise Logo" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xs" 
              src={LOGO_URL} 
            />
            <div className="hidden sm:flex flex-col border-l border-white/30 pl-2.5">
              <span className="text-[10px] text-white font-bold tracking-wider leading-tight uppercase">
                ARN 83312
              </span>
              <span className="text-[9px] text-white/85 uppercase tracking-widest font-semibold">
                Mumbai Desk
              </span>
            </div>
          </button>

          {/* Desktop & Laptop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1 rounded-md text-xs sm:text-sm transition-all cursor-pointer font-medium ${
                    isActive 
                      ? 'bg-white text-[#F47732] font-bold shadow-xs' 
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & Mobile Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct Call Link for Laptop & Desktop */}
            <a 
              className="hidden xl:inline-flex items-center text-xs text-white/90 hover:text-white font-medium transition-colors" 
              href="tel:+919820433220"
            >
              <span className="material-symbols-outlined text-[15px] mr-1 text-white">
                phone
              </span>
              +91 98204 33220
            </a>

            {/* Schedule Appointment on Desktop/Laptop (lg+) */}
            <button
              onClick={() => onOpenSchedule('Schedule Appointment')}
              className="hidden lg:inline-flex items-center text-xs text-white/90 hover:text-white font-medium transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px] mr-1 text-white">
                calendar_today
              </span>
              Schedule Appointment
            </button>

            {/* Contact CTA Button on Right Side */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                activePage === 'contact'
                  ? 'bg-[#101D32] text-white shadow-sm ring-2 ring-white/60 font-bold'
                  : 'bg-white text-[#F47732] hover:bg-white/95 hover:shadow-sm font-bold'
              }`}
            >
              Contact
            </button>

            {/* Mobile Call Icon Button (< sm) */}
            <a
              href="tel:+919820433220"
              className="sm:hidden w-8 h-8 rounded-md bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
              title="Call Advisor Desk"
              aria-label="Call +91 98204 33220"
            >
              <span className="material-symbols-outlined text-[18px]">phone</span>
            </a>

            {/* AMFI Licensed Badge Avatar (Desktop & Tablet) */}
            <div 
              title="Authorized AMFI Distributor ARN 83312"
              className="hidden lg:flex w-7 h-7 rounded-full bg-white/20 border border-white/30 text-white items-center justify-center shrink-0 cursor-default shadow-xs"
            >
              <span className="material-symbols-outlined text-white text-[15px]">
                verified_user
              </span>
            </div>

            {/* Mobile-only Hamburger Toggle (< md) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white hover:bg-white/20 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile-only Drawer Menu (< md) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F47732] border-t border-white/20 px-4 py-3 flex flex-col gap-1.5 shadow-2xl animate-fade-in max-h-[calc(100vh-56px)] overflow-y-auto text-white">
            <span className="text-[10px] uppercase text-white/80 px-2 pt-1 font-bold tracking-wider">
              Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between cursor-pointer ${
                  activePage === item.id
                    ? 'bg-white text-[#F47732] font-bold shadow-xs'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </button>
            ))}

            <div className="pt-2.5 border-t border-white/20 flex flex-col gap-1.5 mt-1.5">
              <span className="text-[10px] uppercase text-white/80 px-2 font-bold tracking-wider">
                Direct Actions
              </span>
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                  activePage === 'contact'
                    ? 'bg-[#101D32] text-white ring-2 ring-white/60 font-bold'
                    : 'bg-white text-[#F47732] hover:bg-white/95 font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                Contact
              </button>
              <button
                onClick={() => {
                  onOpenSchedule('Mobile Menu Appointment');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-white/15 text-white hover:bg-white/25 border border-white/20 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-white">calendar_today</span>
                Schedule Appointment
              </button>
              <a
                href="tel:+919820433220"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-white/15 text-white hover:bg-white/25 border border-white/20 text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-white">phone</span>
                +91 98204 33220
              </a>
              <div className="pt-1 text-center text-[11px] text-white/80">
                AMFI Registered Distributor • ARN 83312 • Mumbai
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
