import React, { useState, useEffect } from 'react';

const LOGO_URL = "https://lh3.googleusercontent.com/aida/ALJJyrBtkKQ6EShH3sJOhcaBqscWa8D6yEWu5C-HGGZyFSzUa0HcrSs0IbOsolI9c2zBuOjNDWINM0oorVLUfr1QdhoiszLKI74nJ4v16BcvvOuaCieCAc9pJKTxlSlAPh-2Q5UrfCPhlFrQE94U-LYYWq7D4ZLngYYZAYib4l4qNhB0DYWayT4NG67UiXZSfoWmvu548j2gOUl8PXjFURcF_Q6yjkd1M-E9wkjV8CL90TU9LA";

export default function Header({ activePage, setActivePage, onOpenSchedule }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
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
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container">
        <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-2 sm:gap-space-md">
          
          {/* Brand Logo & Registration */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-space-md shrink-0 text-left focus:outline-none cursor-pointer group"
          >
            <img 
              alt="Orange Enterprise Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              src={LOGO_URL} 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base sm:text-headline-sm text-on-surface tracking-tight leading-none font-bold">
                Orange Enterprise
              </span>
              <span className="font-label-caps text-[10px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider mt-1 sm:mt-space-xs font-semibold">
                ARN 83312 • Mumbai
              </span>
            </div>
          </button>

          {/* Desktop & Laptop Navigation (Visible on md, lg, xl, and all desktop/laptop screens) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 lg:px-4 py-1.5 rounded-lg font-label-md text-sm lg:text-label-md transition-all cursor-pointer font-medium ${
                    isActive 
                      ? 'bg-surface-container-high text-on-surface font-semibold shadow-xs' 
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
            {/* Direct Call Link for Laptop & Desktop */}
            <a 
              className="hidden xl:inline-flex items-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" 
              href="tel:+919820433220"
            >
              <span className="material-symbols-outlined text-[16px] mr-space-xs text-primary">
                phone
              </span>
              +91 98204 33220
            </a>

            {/* Schedule Appointment on Desktop/Laptop (lg+) */}
            <button
              onClick={() => onOpenSchedule('Schedule Appointment')}
              className="hidden lg:inline-flex items-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] mr-space-xs text-primary">
                calendar_today
              </span>
              Schedule Appointment
            </button>

            {/* Get in Touch CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-3.5 lg:px-space-md py-2 sm:py-space-sm bg-primary-container text-on-primary font-label-md text-sm lg:text-label-md rounded-lg shadow-sm hover:bg-primary transition-all duration-200 cursor-pointer font-semibold"
            >
              Get in Touch
            </button>

            {/* Mobile Call Icon Button (< sm) */}
            <a
              href="tel:+919820433220"
              className="sm:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              title="Call Advisor Desk"
              aria-label="Call +91 98204 33220"
            >
              <span className="material-symbols-outlined text-[20px]">phone</span>
            </a>

            {/* AMFI Licensed Badge Avatar (Desktop & Tablet) */}
            <div 
              title="Authorized AMFI Distributor ARN 83312"
              className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 cursor-default shadow-xs"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                verified_user
              </span>
            </div>

            {/* Mobile-only Hamburger Toggle (< md / phones only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile-only Drawer Menu (< md) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest border-t border-surface-container px-4 sm:px-margin-mobile py-4 flex flex-col gap-2 shadow-2xl animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant px-2 pt-1 font-bold">
              Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-label-md text-label-md transition-colors flex items-center justify-between cursor-pointer ${
                  activePage === item.id
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            ))}

            <div className="pt-3 border-t border-surface-container flex flex-col gap-2 mt-2">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant px-2 font-bold">
                Direct Actions
              </span>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-container text-white font-label-md text-label-md font-semibold shadow-sm hover:bg-primary transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Get in Touch
              </button>
              <button
                onClick={() => {
                  onOpenSchedule('Mobile Menu Appointment');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-semibold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                Schedule Appointment
              </button>
              <a
                href="tel:+919820433220"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">phone</span>
                +91 98204 33220
              </a>
              <div className="pt-2 text-center text-xs text-on-surface-variant">
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
