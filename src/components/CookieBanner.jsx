import React, { useState } from 'react';

export default function CookieBanner({ onOpenLegal }) {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return !localStorage.getItem('oe_cookie_consent');
    } catch {
      return true;
    }
  });

  const handleAccept = () => {
    try {
      localStorage.setItem('oe_cookie_consent', 'true');
    } catch {
      // ignore storage errors
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('oe_cookie_consent', 'essential_only');
    } catch {
      // ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-inverse-surface/95 text-inverse-on-surface backdrop-blur-md border-t border-inverse-on-surface/10 shadow-xl animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-start sm:items-center gap-2">
          <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5 sm:mt-0">
            cookie
          </span>
          <p className="text-xs text-secondary-fixed leading-normal">
            This website uses cookies to ensure you get the best browsing experience. Read our{' '}
            <button
              onClick={() => onOpenLegal('Cookie Policy')}
              className="text-primary-container underline hover:text-white transition-colors cursor-pointer font-semibold"
            >
              Cookie Policy
            </button>{' '}
            for complete transparency.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer"
          >
            Decline non-essential
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-md bg-primary-container text-white hover:bg-primary text-xs font-semibold transition-all shadow-xs cursor-pointer"
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
}
