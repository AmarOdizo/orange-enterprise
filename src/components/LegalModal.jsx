import React from 'react';

export default function LegalModal({ isOpen, onClose, topic = 'Privacy Policy' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8 max-h-[90vh] overflow-y-auto border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-label-caps uppercase text-primary font-bold tracking-wider">
            Regulatory & Legal Governance
          </span>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
            {topic}
          </h2>
          <div className="text-body-sm text-body-sm text-on-surface-variant flex flex-col gap-3 leading-relaxed mt-2">
            {topic === 'Privacy Policy' && (
              <>
                <p>
                  At <strong>Orange Enterprise</strong> (AMFI Registered Mutual Fund Distributor ARN 83312, based in Mumbai), we hold fiduciary trust and client confidentiality as our foundational commitment.
                </p>
                <h4 className="font-headline-sm text-on-surface font-semibold text-sm">1. Data Safeguards</h4>
                <p>
                  All personal, contact, and financial portfolio information submitted through our online portals or private advisory salons is strictly utilized for strategic financial evaluation and lawful regulatory compliance under SEBI and AMFI codes.
                </p>
                <h4 className="font-headline-sm text-on-surface font-semibold text-sm">2. Non-Disclosure</h4>
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
                <h4 className="font-headline-sm text-on-surface font-semibold text-sm">1. Regulatory Capacity</h4>
                <p>
                  Orange Enterprise operates as an AMFI registered mutual fund distributor holding ARN 83312. Informational content on this website does not constitute an unconditional guarantee of investment returns. Mutual fund investments remain subject to prevailing market risks.
                </p>
                <h4 className="font-headline-sm text-on-surface font-semibold text-sm">2. Fiduciary Duty</h4>
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

          <div className="mt-4 pt-4 border-t border-surface-container flex justify-between items-center text-xs text-on-surface-variant">
            <span>Orange Enterprise (ARN 83312) • Mumbai</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-container text-on-primary font-label-sm rounded-lg hover:bg-primary transition-colors cursor-pointer"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

