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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-5 bg-inverse-surface/95 text-inverse-on-surface backdrop-blur-md border-t border-inverse-on-surface/10 shadow-2xl animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
          <span className="material-symbols-outlined text-primary-container text-[22px] sm:text-[24px] shrink-0 mt-0.5 sm:mt-0">
            cookie
          </span>
          <p className="font-body-sm text-xs sm:text-body-sm text-secondary-fixed leading-normal">
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

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end sm:self-center">
          <button
            onClick={() => onOpenLegal('Cookie Policy')}
            className="px-3 py-1.5 rounded-lg text-secondary-fixed hover:text-white font-label-sm text-label-sm transition-colors cursor-pointer"
          >
            Preferences
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-lg bg-primary-container text-white hover:bg-primary font-label-md text-label-md font-semibold transition-all shadow-sm cursor-pointer"
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
}
