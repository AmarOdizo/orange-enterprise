import React, { useState, useEffect } from 'react';

const LOGO_URL = "/orange-enterprise-logo.png";

export default function Header({ activePage, setActivePage, onOpenSchedule, onOpenDesk }) {
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
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFF4E8] shadow-xs border-b border-[#F2DECA] text-[#161C25]">
        <div className="h-14 sm:h-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center shrink-0 text-left focus:outline-none cursor-pointer group"
          >
            <img 
              alt="Orange Enterprise Logo" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              src={LOGO_URL} 
            />
          </button>

          {/* Desktop & Laptop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all cursor-pointer font-semibold ${
                    isActive 
                      ? 'bg-[#FD6702] text-white shadow-xs' 
                      : 'text-[#161C25]/80 hover:text-[#FD6702] hover:bg-[#FD6702]/8'
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
              className="hidden xl:inline-flex items-center text-xs text-[#161C25]/85 hover:text-[#FD6702] font-semibold transition-colors" 
              href="tel:+919820433220"
            >
              <span className="material-symbols-outlined text-[16px] mr-1 text-[#FD6702]">
                phone
              </span>
              +91 98204 33220
            </a>

            {/* Book Consultation Button on Desktop/Laptop (lg+) */}
            <button
              onClick={() => onOpenSchedule('Book Consultation')}
              className="hidden lg:inline-flex items-center justify-center px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold border border-[#FD6702] text-[#FD6702] bg-[#FD6702]/8 hover:bg-[#FD6702] hover:text-white transition-all duration-200 shadow-xs cursor-pointer"
            >
              Book Consultation
            </button>

            {/* Contact CTA Button on Right Side */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                activePage === 'contact'
                  ? 'bg-[#161C25] text-white shadow-xs'
                  : 'bg-[#FD6702] text-white hover:bg-[#E55A00] hover:shadow-xs'
              }`}
            >
              Contact
            </button>

            {/* Mobile Call Icon Button (< sm) */}
            <a
              href="tel:+919820433220"
              className="sm:hidden w-8 h-8 rounded-md bg-[#FD6702]/10 text-[#FD6702] hover:bg-[#FD6702]/20 flex items-center justify-center transition-colors"
              title="Call Advisor Desk"
              aria-label="Call +91 98204 33220"
            >
              <span className="material-symbols-outlined text-[18px]">phone</span>
            </a>

            {/* AMFI Licensed Badge Avatar - Click to open Advisory Desk Portal */}
            <button 
              onClick={() => onOpenDesk && onOpenDesk()}
              title="Advisory Desk Portal (ARN 83312)"
              className="hidden lg:flex w-7 h-7 rounded-full bg-[#FD6702]/10 hover:bg-[#FD6702]/25 border border-[#FD6702]/25 text-[#FD6702] items-center justify-center shrink-0 cursor-pointer shadow-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[#FD6702] text-[15px]">
                verified_user
              </span>
            </button>

            {/* Mobile-only Hamburger Toggle (< md) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#161C25] hover:bg-[#FD6702]/10 rounded-md transition-colors cursor-pointer"
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
          <div className="md:hidden bg-[#FFF4E8] border-t border-[#F2DECA] px-4 py-3 flex flex-col gap-1.5 shadow-2xl animate-fade-in max-h-[calc(100vh-56px)] overflow-y-auto text-[#161C25]">
            <span className="text-[10px] uppercase text-[#161C25]/60 px-2 pt-1 font-bold tracking-wider">
              Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#FD6702] text-white font-bold shadow-xs'
                    : 'text-[#161C25] hover:bg-[#FD6702]/10 font-medium'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </button>
            ))}

            <div className="pt-2.5 border-t border-[#F2DECA] flex flex-col gap-1.5 mt-1.5">
              <span className="text-[10px] uppercase text-[#161C25]/60 px-2 font-bold tracking-wider">
                Direct Actions
              </span>
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-xs font-bold shadow-xs transition-all cursor-pointer ${
                  activePage === 'contact'
                    ? 'bg-[#161C25] text-white'
                    : 'bg-[#FD6702] text-white hover:bg-[#E55A00]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                Contact
              </button>
              <button
                onClick={() => {
                  onOpenSchedule('Mobile Menu Consultation');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center px-3 py-2.5 rounded-md bg-[#FD6702]/10 hover:bg-[#FD6702] hover:text-white text-[#FD6702] border border-[#FD6702]/30 text-xs font-bold transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
              <a
                href="tel:+919820433220"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-[#FD6702]/10 text-[#161C25] hover:bg-[#FD6702]/20 border border-[#FD6702]/20 text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#FD6702]">phone</span>
                +91 98204 33220
              </a>
              <div className="pt-1 text-center text-[11px] text-[#161C25]/70">
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
