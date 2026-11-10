import React from 'react';

export default function LegalModal({ isOpen, onClose, topic = 'Privacy Policy' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 max-h-[85vh] overflow-y-auto border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] uppercase text-primary font-bold tracking-wider">
            Regulatory & Legal Governance
          </span>
          <h2 className="text-base sm:text-lg font-bold text-on-surface">
            {topic}
          </h2>
          <div className="text-xs text-on-surface-variant flex flex-col gap-2.5 leading-relaxed mt-1">
            {topic === 'Privacy Policy' && (
              <>
                <p>
                  At <strong>Orange Enterprise</strong> (AMFI Registered Mutual Fund Distributor ARN 83312, based in Mumbai), we hold fiduciary trust and client confidentiality as our foundational commitment.
                </p>
                <h4 className="font-semibold text-on-surface text-xs">1. Data Safeguards</h4>
                <p>
                  All personal, contact, and financial portfolio information submitted through our online portals or private advisory salons is strictly utilized for strategic financial evaluation and lawful regulatory compliance under SEBI and AMFI codes.
                </p>
                <h4 className="font-semibold text-on-surface text-xs">2. Non-Disclosure</h4>
                <p>
                  We never monetize, rent, or lease client data to unauthorized third-party commercial syndicates. Data transmission occurs across encrypted SSL/TLS channels.
                </p>
              </>
            )}

            {topic === 'Terms of Service' && (
              <>
                <p>
                  Welcome to <strong>Orange Enterprise</strong>. By accessing this platform or engaging our fiduciary advisory services, you acknowledge adherence to the following provisions:
                </p>
                <h4 className="font-semibold text-on-surface text-xs">1. Regulatory Capacity</h4>
                <p>
                  Orange Enterprise operates as an AMFI registered mutual fund distributor holding ARN 83312. Informational content on this website does not constitute an unconditional guarantee of investment returns. Mutual fund investments remain subject to prevailing market risks.
                </p>
                <h4 className="font-semibold text-on-surface text-xs">2. Fiduciary Duty</h4>
                <p>
                  Advisory recommendations are formulated on bespoke parameters, utilizing verified market research in formal association with Wealth Works.
                </p>
              </>
            )}

            {topic === 'Cookie Policy' && (
              <>
                <p>
                  This portal utilizes essential technical session cookies solely to preserve navigational states, form telemetry validation, and secure authentication tokens.
                </p>
                <p>
                  We do not execute invasive cross-site tracking or behavioral data profiling. You may disable cookies in your browser preferences without impeding core consultative access.
                </p>
              </>
            )}
          </div>

          <div className="mt-3 pt-3 border-t border-surface-container flex justify-between items-center text-[11px] text-on-surface-variant">
            <span>Orange Enterprise (ARN 83312) • Mumbai</span>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-primary-container text-on-primary text-xs rounded-md hover:bg-primary transition-colors cursor-pointer font-semibold"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
