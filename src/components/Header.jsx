import React, { useState } from 'react';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        
        {/* Brand Logo & Registration */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-space-md shrink-0 text-left focus:outline-none cursor-pointer"
        >
          <img 
            alt="Orange Enterprise Logo" 
            className="h-8 w-auto object-contain" 
            src={LOGO_URL} 
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none font-bold">
              Orange Enterprise
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-space-xs font-semibold">
              ARN 83312 • Mumbai
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-sm">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
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

        {/* Desktop Quick Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          <button
            onClick={() => onOpenSchedule('Schedule Appointment')}
            className="hidden md:inline-flex items-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] mr-space-xs text-primary">
              calendar_today
            </span>
            Schedule Appointment
          </button>

          <a 
            className="hidden lg:inline-flex items-center font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" 
            href="tel:+919820433220"
          >
            <span className="material-symbols-outlined text-[16px] mr-space-xs text-primary">
              phone
            </span>
            +91 98204 33220
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary transition-all duration-200 cursor-pointer"
          >
            Get in Touch
          </button>

          <div 
            title="Authorized AMFI Distributor ARN 83312"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-default"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-t border-surface-container px-margin-mobile py-4 flex flex-col gap-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-label-md text-label-md transition-colors ${
                activePage === item.id
                  ? 'bg-primary-container text-on-primary font-semibold'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-surface-container flex flex-col gap-2 mt-1">
            <button
              onClick={() => {
                onOpenSchedule('Schedule Appointment');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-primary font-label-sm text-label-sm"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Schedule Appointment
            </button>
            <a
              href="tel:+919820433220"
              className="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-label-sm text-label-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">phone</span>
              +91 98204 33220
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

