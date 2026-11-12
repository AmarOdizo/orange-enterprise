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
                  At <strong>Orange Enterprise</strong> (AMFI-registered Mutual Fund Distributor ARN-83312, based in Mumbai), we treat client privacy and data confidentiality with the utmost care.
                </p>
                <h4 className="font-semibold text-on-surface text-xs">1. Data Use</h4>
                <p>
                  Form details (name, email, phone, city, message) are used solely to respond to your enquiries, are not sold or shared with any third party, and can be deleted on request by emailing [parag@domain.in].
                </p>
                <h4 className="font-semibold text-on-surface text-xs">2. Security</h4>
                <p>
                  We store form submissions locally and securely to ensure your personal details are kept confidential.
                </p>
              </>
            )}

            {topic === 'Disclaimer' && (
              <>
                <p>
                  Orange Enterprise is an AMFI-registered Mutual Fund Distributor (ARN-83312). [Orange Enterprise is not registered with SEBI as an Investment Adviser.]
                </p>
                <p>
                  Information on this website is for general awareness only and should not be treated as investment advice or a recommendation to buy or sell any scheme.
                </p>
                <p className="font-semibold text-[#FD6702]">
                  Mutual fund investments are subject to market risks, read all scheme related documents carefully.
                </p>
                <p>
                  Past performance is not indicative of future returns. Investors should consider their own circumstances, and may seek independent professional advice, before investing.
                </p>
              </>
            )}

            {topic === 'Terms of Service' && (
              <>
                <p>
                  Welcome to <strong>Orange Enterprise</strong>. By accessing this platform or reaching out to us, you acknowledge adherence to the following provisions:
                </p>
                <h4 className="font-semibold text-on-surface text-xs">1. Regulatory Capacity</h4>
                <p>
                  Orange Enterprise operates as an AMFI-registered Mutual Fund Distributor holding ARN-83312. Informational content on this website does not constitute investment advice or a recommendation to buy or sell any scheme. Mutual fund investments remain subject to prevailing market risks.
                </p>
              </>
            )}

            {topic === 'Cookie Policy' && (
              <>
                <p>
                  This portal utilizes essential technical session cookies solely to preserve navigational states and form submission validation.
                </p>
                <p>
                  We do not execute invasive cross-site tracking or behavioral data profiling. You may disable cookies in your browser preferences without impeding core access.
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
