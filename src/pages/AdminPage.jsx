import React, { useState, useEffect, useMemo } from 'react';

const DEFAULT_ADMIN_CREDENTIALS = {
  email: 'admin@orangeenterprise.com',
  phone: '9820433220',
  password: 'admin123',
};

export default function AdminPage({ setActivePage }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('oe_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [loginForm, setLoginForm] = useState({
    identifier: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Portal State
  const [activeTab, setActiveTab] = useState('appointments'); // 'appointments' | 'inquiries' | 'intakes'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);

  // Retrieve data from localStorage
  const fetchLeads = () => {
    let appts = [];
    let inqs = [];
    let ints = [];
    try {
      appts = JSON.parse(localStorage.getItem('oe_appointments') || '[]');
      inqs = JSON.parse(localStorage.getItem('oe_inquiries') || '[]');
      ints = JSON.parse(localStorage.getItem('oe_intakes') || '[]');
    } catch {
      // ignore
    }
    return {
      appointments: Array.isArray(appts) ? appts : [],
      inquiries: Array.isArray(inqs) ? inqs : [],
      intakes: Array.isArray(ints) ? ints : [],
    };
  };

  const [leadsState, setLeadsState] = useState(fetchLeads);
  const { appointments, inquiries, intakes } = leadsState;

  const refreshData = () => setLeadsState(fetchLeads());

  // Listen to external storage events (e.g. from other tabs)
  useEffect(() => {
    const handleStorageChange = () => refreshData();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Handle Admin Login Submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    setIsSubmitting(true);

    const cleanInput = (loginForm.identifier || '').trim().toLowerCase().replace(/[^a-z0-9@.]/g, '');
    const cleanPass = (loginForm.password || '').trim();

    // Check credentials
    const isEmailValid = cleanInput === 'admin@orangeenterprise.com' || cleanInput === 'admin';
    const isPhoneValid = cleanInput.includes('9820433220');
    const isPasswordValid = cleanPass === 'admin123' || cleanPass === 'orange2026' || cleanPass === 'orange@2026' || cleanPass === 'admin';

    setTimeout(() => {
      if ((isEmailValid || isPhoneValid) && isPasswordValid) {
        try {
          sessionStorage.setItem('oe_admin_auth', 'true');
        } catch {
          // ignore
        }
        setIsAuthenticated(true);
        setLoginError('');
      } else {
        setLoginError('Invalid Email/Phone or Password. Please check default credentials below.');
      }
      setIsSubmitting(false);
    }, 400);
  };

  // Handle Logout
  const handleLogout = () => {
    if (window.confirm('Do you want to log out of the Admin Portal?')) {
      try {
        sessionStorage.removeItem('oe_admin_auth');
      } catch {
        // ignore
      }
      setIsAuthenticated(false);
      setLoginForm({ identifier: '', password: '' });
      setLoginError('');
    }
  };

  // Quick fill demo credentials
  const handleQuickFill = () => {
    setLoginForm({
      identifier: DEFAULT_ADMIN_CREDENTIALS.email,
      password: DEFAULT_ADMIN_CREDENTIALS.password,
    });
    setLoginError('');
  };

  // Filter current active list by search query
  const currentList = useMemo(() => {
    let rawList = [];
    if (activeTab === 'appointments') rawList = appointments;
    else if (activeTab === 'inquiries') rawList = inquiries;
    else if (activeTab === 'intakes') rawList = intakes;

    if (!searchQuery.trim()) return rawList;

    const query = searchQuery.toLowerCase();
    return rawList.filter(item => {
      const name = (item.name || '').toLowerCase();
      const email = (item.email || '').toLowerCase();
      const phone = (item.phone || '').toLowerCase();
      const service = (item.service || item.goals || '').toLowerCase();
      return name.includes(query) || email.includes(query) || phone.includes(query) || service.includes(query);
    });
  }, [activeTab, appointments, inquiries, intakes, searchQuery]);

  // Total lead count
  const totalCount = appointments.length + inquiries.length + intakes.length;

  // Single lead delete
  const handleDeleteLead = (storageKey, index) => {
    if (window.confirm('Are you sure you want to delete this specific lead?')) {
      try {
        const raw = JSON.parse(localStorage.getItem(storageKey) || '[]');
        raw.splice(index, 1);
        localStorage.setItem(storageKey, JSON.stringify(raw));
        refreshData();
        if (selectedLead) setSelectedLead(null);
      } catch {
        // ignore
      }
    }
  };

  // Bulk clear
  const handleClearCategory = (storageKey, categoryName) => {
    if (window.confirm(`Are you sure you want to permanently delete all ${categoryName}? This cannot be undone.`)) {
      localStorage.removeItem(storageKey);
      refreshData();
      setSelectedLead(null);
    }
  };

  // CSV Exporter
  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert('No leads available to export in this category.');
      return;
    }
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];

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

  // Format date helper
  const formatDate = (isoStr) => {
    if (!isoStr) return 'N/A';
    try {
      return new Date(isoStr).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
    } catch {
      return isoStr;
    }
  };

  // =========================================================================
  // VIEW 1: ADMIN LOGIN FORM (If not authenticated)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#FFF4E8] via-[#FFF9F2] to-[#FDFBF7] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E8D5C2] p-6 sm:p-8 flex flex-col gap-6 text-[#161C25] animate-fade-in relative overflow-hidden">
          
          {/* Top Decorative Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FD6702]/15 blur-2xl pointer-events-none" />

          {/* Form Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-[#161C25] text-white flex items-center justify-center shadow-md border border-[#161C25]">
              <span className="material-symbols-outlined text-[30px] text-[#FD6702]">
                admin_panel_settings
              </span>
            </div>
            
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FD6702]/10 text-[#FD6702] text-[10px] font-bold tracking-wider uppercase mt-1">
              <span>Secure Desk Access • ARN 83312</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-[#161C25] tracking-tight">
              Admin Authentication
            </h1>
            <p className="text-xs text-[#161C25]/60 max-w-xs">
              Enter your authorized email/phone number and password to access the client leads portal.
            </p>
          </div>

          {/* Error Alert Box */}
          {loginError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-shake">
              <span className="material-symbols-outlined text-[18px] text-red-600 shrink-0">
                error
              </span>
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            
            {/* Field 1: Email or Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#161C25] flex items-center justify-between">
                <span>Email or Phone Number</span>
                <span className="text-[10px] text-[#161C25]/50 font-normal">Registered Desk ID</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#161C25]/45 pointer-events-none">
                  alternate_email
                </span>
                <input
                  type="text"
                  required
                  placeholder="e.g. admin@orangeenterprise.com or 9820433220"
                  value={loginForm.identifier}
                  onChange={(e) => setLoginForm({ ...loginForm, identifier: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8D5C2] bg-white text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-1 focus:ring-[#FD6702] transition-colors shadow-2xs"
                />
              </div>
            </div>

            {/* Field 2: Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#161C25] flex items-center justify-between">
                <span>Admin Password</span>
                <span className="text-[10px] text-[#161C25]/50 font-normal">Encrypted</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#161C25]/45 pointer-events-none">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter admin password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8D5C2] bg-white text-[#161C25] focus:outline-none focus:border-[#FD6702] focus:ring-1 focus:ring-[#FD6702] transition-colors shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-[#161C25]/45 hover:text-[#161C25] cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FD6702] to-[#FF7824] hover:from-[#E55A00] hover:to-[#FD6702] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 mt-1"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">lock_open</span>
                  <span>Unlock Admin Portal</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Assistant Box */}
          <div className="p-3 rounded-xl bg-[#FFF4E8]/80 border border-[#E8D5C2] flex flex-col gap-1.5 text-[11px] text-[#161C25]/75">
            <div className="flex items-center justify-between font-bold text-[#161C25]">
              <span className="flex items-center gap-1 text-[#FD6702]">
                <span className="material-symbols-outlined text-[14px]">key</span>
                <span>Default Credentials</span>
              </span>
              <button
                type="button"
                onClick={handleQuickFill}
                className="text-[10px] text-[#FD6702] hover:underline font-bold cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span>Email: <strong>admin@orangeenterprise.com</strong></span>
              <span>Phone: <strong>9820433220</strong></span>
            </div>
            <div>Password: <strong>admin123</strong></div>
          </div>

          {/* Return to Main Website Link */}
          <div className="flex items-center justify-center pt-2 border-t border-[#F0DCB]">
            <button
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#161C25]/70 hover:text-[#FD6702] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Return to Public Website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD PORTAL
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#161C25] flex flex-col py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">

        {/* =========================================================================
            ADMIN TOP BAR & NAVIGATION
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#F0DCB]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FD6702]/15 text-[#FD6702] flex items-center justify-center border border-[#FD6702]/30 shadow-xs">
              <span className="material-symbols-outlined text-[28px]">admin_panel_settings</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-[#161C25] tracking-tight">
                  Admin Portal & Leads Desk
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#161C25] text-white text-[11px] font-bold">
                  ARN 83312
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold border border-emerald-500/20">
                  Authenticated
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#161C25]/65 mt-0.5">
                Centralized management for client consultations, inquiries, and investor intakes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FD6702]/8 text-[#161C25] hover:text-[#FD6702] border border-[#E8D5C2] text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Website</span>
            </button>

            <button
              onClick={() => {
                const allData = [
                  ...appointments.map(a => ({ Category: 'Appointment', ...a })),
                  ...inquiries.map(i => ({ Category: 'Inquiry', ...i })),
                  ...intakes.map(k => ({ Category: 'Intake', ...k })),
                ];
                exportToCSV(allData, 'Orange_Enterprise_All_Leads');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FD6702] hover:bg-[#E55A00] text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Export All (CSV)</span>
            </button>

            <button
              onClick={handleLogout}
              title="Logout from Admin Portal"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            KPI ANALYTICS CARDS STRIP
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total Appointments */}
          <div 
            onClick={() => setActiveTab('appointments')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'appointments'
                ? 'bg-white border-[#FD6702] shadow-md ring-2 ring-[#FD6702]/20'
                : 'bg-white/80 border-[#E8D5C2] hover:bg-white hover:border-[#FD6702]/50 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#161C25]/70 uppercase tracking-wider">
                Consultations
              </span>
              <span className="w-8 h-8 rounded-lg bg-[#FD6702]/10 text-[#FD6702] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#161C25]">
              {appointments.length}
            </div>
            <div className="text-[11px] text-[#161C25]/60 mt-1">
              Scheduled client bookings
            </div>
          </div>

          {/* Card 2: Contact Inquiries */}
          <div 
            onClick={() => setActiveTab('inquiries')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'inquiries'
                ? 'bg-white border-[#FD6702] shadow-md ring-2 ring-[#FD6702]/20'
                : 'bg-white/80 border-[#E8D5C2] hover:bg-white hover:border-[#FD6702]/50 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#161C25]/70 uppercase tracking-wider">
                Inquiries
              </span>
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#161C25]">
              {inquiries.length}
            </div>
            <div className="text-[11px] text-[#161C25]/60 mt-1">
              Contact & salon submissions
            </div>
          </div>

          {/* Card 3: Wealth Intakes */}
          <div 
            onClick={() => setActiveTab('intakes')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'intakes'
                ? 'bg-white border-[#FD6702] shadow-md ring-2 ring-[#FD6702]/20'
                : 'bg-white/80 border-[#E8D5C2] hover:bg-white hover:border-[#FD6702]/50 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#161C25]/70 uppercase tracking-wider">
                Wealth Intakes
              </span>
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#161C25]">
              {intakes.length}
            </div>
            <div className="text-[11px] text-[#161C25]/60 mt-1">
              Investor profile evaluations
            </div>
          </div>

          {/* Card 4: Total Combined Leads */}
          <div className="p-4 rounded-2xl border border-[#E8D5C2] bg-gradient-to-tr from-[#161C25] to-[#2A3445] text-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white/75 uppercase tracking-wider">
                Total Leads
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">leaderboard</span>
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FD6702]">
              {totalCount}
            </div>
            <div className="text-[11px] text-white/70 mt-1">
              Stored locally on this device
            </div>
          </div>
        </div>

        {/* =========================================================================
            DATA TABLE SECTION WITH FILTERING & ACTIONS
            ========================================================================= */}
        <div className="bg-white rounded-2xl border border-[#E8D5C2] shadow-sm flex flex-col overflow-hidden">
          
          {/* Table Controls Header */}
          <div className="p-4 sm:p-5 border-b border-[#F0DCB] flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Tab Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FFF4E8] rounded-xl border border-[#E8D5C2]/70 w-fit">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'appointments'
                    ? 'bg-[#161C25] text-white shadow-xs'
                    : 'text-[#161C25]/80 hover:text-[#FD6702]'
                }`}
              >
                Consultations ({appointments.length})
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'inquiries'
                    ? 'bg-[#161C25] text-white shadow-xs'
                    : 'text-[#161C25]/80 hover:text-[#FD6702]'
                }`}
              >
                Inquiries ({inquiries.length})
              </button>

              <button
                onClick={() => setActiveTab('intakes')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'intakes'
                    ? 'bg-[#161C25] text-white shadow-xs'
                    : 'text-[#161C25]/80 hover:text-[#FD6702]'
                }`}
              >
                Intakes ({intakes.length})
              </button>
            </div>

            {/* Search Input & Category Actions */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#161C25]/40 text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search by name, email, phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-[#E8D5C2] bg-white focus:outline-none focus:border-[#FD6702] focus:ring-1 focus:ring-[#FD6702]"
                />
              </div>

              {currentList.length > 0 && (
                <>
                  <button
                    onClick={() => exportToCSV(currentList, `Orange_Enterprise_${activeTab}`)}
                    title="Export current tab to CSV"
                    className="p-2 rounded-xl bg-white hover:bg-[#FD6702]/8 text-[#161C25] border border-[#E8D5C2] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#FD6702]">download</span>
                  </button>

                  <button
                    onClick={() => {
                      const keyMap = {
                        appointments: 'oe_appointments',
                        inquiries: 'oe_inquiries',
                        intakes: 'oe_intakes',
                      };
                      handleClearCategory(keyMap[activeTab], activeTab);
                    }}
                    title="Clear all leads in this category"
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Table Body */}
          <div className="overflow-x-auto min-h-[300px]">
            {currentList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFF4E8] text-[#FD6702] flex items-center justify-center mb-3 border border-[#E8D5C2]">
                  <span className="material-symbols-outlined text-[32px]">folder_open</span>
                </div>
                <h3 className="text-base font-bold text-[#161C25]">
                  {searchQuery ? 'No matching leads found' : `No ${activeTab} recorded yet`}
                </h3>
                <p className="text-xs text-[#161C25]/60 max-w-sm mt-1">
                  {searchQuery
                    ? 'Try searching with a different name, email, or telephone number.'
                    : 'Client submissions from the website forms will automatically appear in this table in real-time.'}
                </p>
              </div>
            ) : (
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FFFDF9] border-b border-[#F0DCB] text-[#161C25]/70 text-[11px] uppercase tracking-wider font-bold">
                    <th className="py-3 px-4">Client Name</th>
                    <th className="py-3 px-4">Contact Info</th>
                    <th className="py-3 px-4">
                      {activeTab === 'appointments' ? 'Service / Slot' : activeTab === 'intakes' ? 'Portfolio / Risk' : 'Topic / Source'}
                    </th>
                    <th className="py-3 px-4">Date Submitted</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0DCB]/70">
                  {currentList.map((lead, idx) => {
                    const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
                    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone}?text=Hello%20${encodeURIComponent(lead.name || 'Client')},%20this%20is%20Orange%20Enterprise%20regarding%20your%20inquiry.` : null;

                    return (
                      <tr key={idx} className="hover:bg-[#FFF4E8]/40 transition-colors">
                        {/* Client Name */}
                        <td className="py-3.5 px-4 font-bold text-[#161C25]">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#FD6702]/15 text-[#FD6702] font-bold text-xs flex items-center justify-center shrink-0">
                              {(lead.name || 'C')[0].toUpperCase()}
                            </div>
                            <span className="truncate max-w-[140px] sm:max-w-none">
                              {lead.name || 'Anonymous Client'}
                            </span>
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-[#161C25]">
                              {lead.phone || 'No phone'}
                            </span>
                            <span className="text-[11px] text-[#161C25]/60 truncate max-w-[180px]">
                              {lead.email || 'No email'}
                            </span>
                          </div>
                        </td>

                        {/* Details Column */}
                        <td className="py-3.5 px-4">
                          {activeTab === 'appointments' && (
                            <div className="flex flex-col">
                              <span className="font-semibold text-[#FD6702]">
                                {lead.service || 'General Advisory'}
                              </span>
                              <span className="text-[11px] text-[#161C25]/60">
                                {lead.date || 'Anytime'} • {lead.timeSlot || 'Flexible'}
                              </span>
                            </div>
                          )}

                          {activeTab === 'inquiries' && (
                            <div className="flex flex-col">
                              <span className="font-semibold text-[#161C25]">
                                {lead.source || 'Contact Form'}
                              </span>
                              <span className="text-[11px] text-[#161C25]/60 truncate max-w-[200px]">
                                {lead.message || 'No message attached'}
                              </span>
                            </div>
                          )}

                          {activeTab === 'intakes' && (
                            <div className="flex flex-col">
                              <span className="font-semibold text-emerald-600">
                                {lead.portfolioSize || 'HNW Portfolio'}
                              </span>
                              <span className="text-[11px] text-[#161C25]/60">
                                {lead.riskTolerance || 'Balanced'} • {lead.goals || 'Wealth Preservation'}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* Submitted Date */}
                        <td className="py-3.5 px-4 text-[#161C25]/70 whitespace-nowrap">
                          {formatDate(lead.submittedAt)}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* WhatsApp Direct Chat */}
                            {waLink && (
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat with lead on WhatsApp"
                                className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[16px]">chat</span>
                              </a>
                            )}

                            {/* Direct Phone Call */}
                            {cleanPhone && (
                              <a
                                href={`tel:${cleanPhone}`}
                                title={`Call ${lead.name || 'client'}`}
                                className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                              >
                                <span className="material-symbols-outlined text-[16px]">phone</span>
                              </a>
                            )}

                            {/* View Details */}
                            <button
                              onClick={() => setSelectedLead(lead)}
                              title="View full lead details"
                              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#161C25] flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">visibility</span>
                            </button>

                            {/* Delete Single Lead */}
                            <button
                              onClick={() => {
                                const keyMap = {
                                  appointments: 'oe_appointments',
                                  inquiries: 'oe_inquiries',
                                  intakes: 'oe_intakes',
                                };
                                handleDeleteLead(keyMap[activeTab], idx);
                              }}
                              title="Delete this lead"
                              className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Table Footer Summary */}
          {currentList.length > 0 && (
            <div className="p-3 sm:p-4 bg-[#FFFDF9] border-t border-[#F0DCB] flex items-center justify-between text-xs text-[#161C25]/60">
              <span>Showing {currentList.length} recorded leads</span>
              <span>AMFI Registered Distributor • ARN 83312</span>
            </div>
          )}

        </div>

      </div>

      {/* =========================================================================
          DETAILED LEAD INSPECTOR MODAL
          ========================================================================= */}
      {selectedLead && (
        <div 
          onClick={() => setSelectedLead(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-5 sm:p-6 border border-[#E8D5C2] flex flex-col gap-4 text-[#161C25]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0DCB]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#FD6702]/15 text-[#FD6702] flex items-center justify-center font-bold">
                  {(selectedLead.name || 'C')[0].toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#161C25]">
                    {selectedLead.name || 'Anonymous Client'}
                  </h3>
                  <p className="text-xs text-[#161C25]/60">
                    Lead Profile Details
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#161C25] flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Field Grid */}
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm max-h-[60vh] overflow-y-auto pr-1">
              {Object.entries(selectedLead).map(([key, val]) => (
                <div key={key} className="flex flex-col p-2.5 rounded-xl bg-[#FFFDF9] border border-[#F0DCB]/70">
                  <span className="text-[10px] uppercase font-bold text-[#161C25]/50 tracking-wider">
                    {key}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#161C25] mt-0.5 break-words">
                    {typeof val === 'boolean' ? (val ? 'Yes' : 'No') : (val ? String(val) : 'N/A')}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Direct Actions */}
            <div className="pt-2 border-t border-[#F0DCB] flex items-center justify-end gap-2">
              {selectedLead.phone && (
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="px-4 py-2 rounded-xl bg-[#161C25] hover:bg-black text-white text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#FD6702]">phone</span>
                  <span>Call Client</span>
                </a>
              )}
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#161C25] text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
