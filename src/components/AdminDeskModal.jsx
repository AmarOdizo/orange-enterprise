import React, { useState } from 'react';

export default function AdminDeskModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('appointments'); // 'appointments' | 'inquiries' | 'intakes'
  const [, setRefreshKey] = useState(0);

  if (!isOpen) return null;

  let appointments = [];
  let inquiries = [];
  let intakes = [];
  try {
    appointments = JSON.parse(localStorage.getItem('oe_appointments') || '[]');
    inquiries = JSON.parse(localStorage.getItem('oe_inquiries') || '[]');
    intakes = JSON.parse(localStorage.getItem('oe_intakes') || '[]');
  } catch {
    // ignore
  }

  const handleClear = (key, name) => {
    if (window.confirm(`Are you sure you want to clear all ${name} leads? This cannot be undone.`)) {
      localStorage.removeItem(key);
      setRefreshKey(k => k + 1);
    }
  };

  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert("No leads available to export in this category yet.");
      return;
    }
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map(header => {
        const val = row[header] ?? '';
        const escaped = ('' + val).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (isoStr) => {
    if (!isoStr) return 'N/A';
    try {
      return new Date(isoStr).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[90vh] overflow-hidden flex flex-col border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-container">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FD6702]/15 text-[#FD6702] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">dashboard</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-on-surface">
                  Orange Enterprise Portal
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary text-[10px] font-bold">
                  ARN 83312
                </span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Confidential client leads, consultation bookings, and investor intakes.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Navigation Tabs & Actions Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 pb-3">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low border border-surface-container overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'appointments'
                  ? 'bg-primary-container text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">calendar_today</span>
              <span>Consultations</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20 text-white">
                {appointments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'inquiries'
                  ? 'bg-primary-container text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>Inquiries</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20 text-white">
                {inquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('intakes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'intakes'
                  ? 'bg-primary-container text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">assignment</span>
              <span>Investor Intakes</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20 text-white">
                {intakes.length}
              </span>
            </button>
          </div>

          {/* Export & Manage Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            {activeTab === 'appointments' && (
              <>
                <button
                  onClick={() => exportToCSV(appointments, 'orange_enterprise_consultations')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-bold text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">download</span>
                  <span>Export CSV</span>
                </button>
                {appointments.length > 0 && (
                  <button
                    onClick={() => handleClear('oe_appointments', 'consultation')}
                    className="p-1.5 rounded-lg text-error hover:bg-error-container/40 transition-colors cursor-pointer"
                    title="Clear list"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                )}
              </>
            )}

            {activeTab === 'inquiries' && (
              <>
                <button
                  onClick={() => exportToCSV(inquiries, 'orange_enterprise_inquiries')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-bold text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">download</span>
                  <span>Export CSV</span>
                </button>
                {inquiries.length > 0 && (
                  <button
                    onClick={() => handleClear('oe_inquiries', 'inquiry')}
                    className="p-1.5 rounded-lg text-error hover:bg-error-container/40 transition-colors cursor-pointer"
                    title="Clear list"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                )}
              </>
            )}

            {activeTab === 'intakes' && (
              <>
                <button
                  onClick={() => exportToCSV(intakes, 'orange_enterprise_intakes')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-bold text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">download</span>
                  <span>Export CSV</span>
                </button>
                {intakes.length > 0 && (
                  <button
                    onClick={() => handleClear('oe_intakes', 'intake')}
                    className="p-1.5 rounded-lg text-error hover:bg-error-container/40 transition-colors cursor-pointer"
                    title="Clear list"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="flex-1 overflow-y-auto mt-2 pr-1 space-y-3">
          
          {/* TAB 1: CONSULTATIONS */}
          {activeTab === 'appointments' && (
            appointments.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[42px] text-outline-variant">event_busy</span>
                <span className="text-sm font-semibold">No Consultation Bookings Yet</span>
                <p className="text-xs max-w-sm">
                  When visitors use the "Book Consultation" button on your site, their appointment requests will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {appointments.slice().reverse().map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between gap-3 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-on-surface">
                          {item.name || 'Anonymous Client'}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FD6702]/15 text-[#FD6702]">
                          {item.service || 'Mutual Funds'}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 mt-2 text-xs text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-primary">phone</span>
                          <a href={`tel:${item.phone}`} className="hover:underline font-semibold text-on-surface">
                            {item.phone || 'No phone'}
                          </a>
                        </div>
                        {item.email && (
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-primary">mail</span>
                            <a href={`mailto:${item.email}`} className="hover:underline">
                              {item.email}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-primary">event</span>
                          <span className="font-medium text-on-surface">
                            {item.date} • {item.slot}
                          </span>
                        </div>
                        {item.mode && (
                          <div className="text-[11px] text-on-surface-variant">
                            Mode: {item.mode}
                          </div>
                        )}
                        {item.notes && (
                          <div className="mt-1 p-2 rounded bg-surface-container text-[11px] text-on-surface italic">
                            "{item.notes}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-surface-container flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span>Submitted: {formatDate(item.submittedAt)}</span>
                      <a 
                        href={`https://wa.me/${(item.phone || '').replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:underline"
                      >
                        <span className="material-symbols-outlined text-[13px]">chat</span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {/* TAB 2: INQUIRIES */}
          {activeTab === 'inquiries' && (
            inquiries.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[42px] text-outline-variant">inbox</span>
                <span className="text-sm font-semibold">No Form Inquiries Yet</span>
                <p className="text-xs max-w-sm">
                  Submissions from the Contact Page or Home Page inquiry form will be logged here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {inquiries.slice().reverse().map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between gap-3 shadow-2xs">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-on-surface">
                          {item.name || 'Anonymous Client'}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                          {item.source || 'Website Lead'}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 mt-2 text-xs text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-primary">phone</span>
                          <a href={`tel:${item.phone}`} className="hover:underline font-semibold text-on-surface">
                            {item.phone || 'No phone'}
                          </a>
                        </div>
                        {item.email && (
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-primary">mail</span>
                            <a href={`mailto:${item.email}`} className="hover:underline">
                              {item.email}
                            </a>
                          </div>
                        )}
                        {item.message && (
                          <div className="mt-1.5 p-2 rounded bg-surface-container text-xs text-on-surface">
                            "{item.message}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-surface-container flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span>Submitted: {formatDate(item.submittedAt)}</span>
                      <a 
                        href={`https://wa.me/${(item.phone || '').replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:underline"
                      >
                        <span className="material-symbols-outlined text-[13px]">chat</span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {/* TAB 3: INTAKES */}
          {activeTab === 'intakes' && (
            intakes.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[42px] text-outline-variant">assignment_late</span>
                <span className="text-sm font-semibold">No Investor Intakes Yet</span>
                <p className="text-xs max-w-sm">
                  Detailed onboarding questionnaires submitted by high-net-worth clients will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {intakes.slice().reverse().map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-on-surface">
                        {item.name || 'Anonymous Investor'}
                      </span>
                      <span className="text-[10px] text-on-surface-variant">
                        {formatDate(item.submittedAt)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2 rounded bg-surface-container">
                        <span className="text-[10px] text-on-surface-variant block uppercase font-medium">Phone</span>
                        <span className="font-semibold text-on-surface">{item.phone || 'N/A'}</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container">
                        <span className="text-[10px] text-on-surface-variant block uppercase font-medium">Email</span>
                        <span className="font-semibold text-on-surface truncate block">{item.email || 'N/A'}</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container">
                        <span className="text-[10px] text-on-surface-variant block uppercase font-medium">Net Worth Tier</span>
                        <span className="font-semibold text-primary">{item.netWorth || 'N/A'}</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container">
                        <span className="text-[10px] text-on-surface-variant block uppercase font-medium">Risk Profile</span>
                        <span className="font-semibold text-on-surface">{item.riskProfile || 'N/A'}</span>
                      </div>
                    </div>

                    {item.goals && (
                      <div className="p-2 rounded bg-surface-container text-xs text-on-surface">
                        <strong>Investment Mandate & Goals:</strong> {item.goals}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant">
          <span>🔒 Local storage cache • AMFI ARN-83312 client confidentiality</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
}
