import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPage';
import ScheduleModal from './components/ScheduleModal';
import IntakeModal from './components/IntakeModal';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';
import AdminDeskModal from './components/AdminDeskModal';

const VALID_PAGES = ['home', 'about', 'services', 'contact', 'admin', 'insights', 'parag', 'how-we-work', 'disclaimer', 'privacy'];

export default function App() {
  const [activePage, setActivePageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (VALID_PAGES.includes(path)) {
        return path;
      }
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        const cleanPath = hash === 'home' ? '/' : `/${hash}`;
        window.history.replaceState({ page: hash }, '', cleanPath);
        return hash;
      }
    }
    return 'home';
  });

  // Modals state
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleService, setScheduleService] = useState('Mutual Fund Consultation');
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTopic, setLegalTopic] = useState('Privacy Policy');
  const [deskModalOpen, setDeskModalOpen] = useState(false);

  // Sync active page with clean HTML5 URL path (Zero # in URLs)
  const setActivePage = (page) => {
    if (VALID_PAGES.includes(page)) {
      setActivePageState(page);
      const newPath = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== newPath || window.location.hash) {
        window.history.pushState({ page }, '', newPath);
      }
      if (!['insights', 'parag', 'how-we-work'].includes(page)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Support browser Back and Forward navigation without #
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const page = VALID_PAGES.includes(path) ? path : 'home';
      setActivePageState(page);
      if (['insights', 'parag', 'how-we-work'].includes(page)) {
        setTimeout(() => {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Remove any remaining hash if present on mount
  useEffect(() => {
    if (window.location.hash) {
      const hashPage = window.location.hash.replace('#', '').toLowerCase();
      const cleanPath = VALID_PAGES.includes(hashPage) 
        ? (hashPage === 'home' ? '/' : `/${hashPage}`) 
        : window.location.pathname;
      window.history.replaceState({}, '', cleanPath);
    }
  }, []);

  // Smooth scroll to section if loaded via section path
  useEffect(() => {
    if (['insights', 'parag', 'how-we-work'].includes(activePage)) {
      const timer = setTimeout(() => {
        const el = document.getElementById(activePage);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activePage]);

  const handleOpenSchedule = (serviceName = 'Mutual Fund Consultation') => {
    setScheduleService(serviceName);
    setScheduleModalOpen(true);
  };

  const handleOpenIntake = () => {
    setIntakeModalOpen(true);
  };

  const handleOpenLegal = (topic = 'Privacy Policy') => {
    setLegalTopic(topic);
    setLegalModalOpen(true);
  };

  // Lock background scroll when any modal is open
  useEffect(() => {
    const isAnyModalOpen = scheduleModalOpen || intakeModalOpen || legalModalOpen || deskModalOpen;
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scheduleModalOpen, intakeModalOpen, legalModalOpen, deskModalOpen]);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setScheduleModalOpen(false);
        setIntakeModalOpen(false);
        setLegalModalOpen(false);
        setDeskModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Global Header (Hidden on Admin Page) */}
      {activePage !== 'admin' && (
        <Header 
          activePage={activePage} 
          setActivePage={setActivePage}
          onOpenSchedule={handleOpenSchedule}
        />
      )}

      {/* Main Content Area */}
      <main className={`w-full flex-1 bg-surface ${activePage !== 'admin' ? 'pt-16 sm:pt-[70px] min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-70px)]' : 'pt-0 min-h-screen'}`}>
        {(activePage === 'home' || activePage === 'insights' || activePage === 'parag' || activePage === 'how-we-work') && (
          <HomePage 
            setActivePage={setActivePage}
            onOpenSchedule={handleOpenSchedule}
            onOpenIntake={handleOpenIntake}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage}
            onOpenSchedule={handleOpenSchedule}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            onOpenSchedule={handleOpenSchedule}
            onOpenIntake={handleOpenIntake}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            setActivePage={setActivePage}
            onOpenSchedule={handleOpenSchedule}
            onOpenIntake={handleOpenIntake}
          />
        )}

        {activePage === 'disclaimer' && (
          <DisclaimerPage 
            setActivePage={setActivePage}
            onOpenSchedule={handleOpenSchedule}
          />
        )}

        {activePage === 'privacy' && (
          <PrivacyPage 
            setActivePage={setActivePage}
            onOpenSchedule={handleOpenSchedule}
          />
        )}

        {activePage === 'admin' && (
          <AdminPage 
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* Global Footer (Hidden on Admin Page) */}
      {activePage !== 'admin' && (
        <Footer 
          setActivePage={setActivePage}
          onOpenSchedule={handleOpenSchedule}
          onOpenIntake={handleOpenIntake}
          onOpenLegal={handleOpenLegal}
        />
      )}

      {/* Interactive Modals */}
      <ScheduleModal 
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        defaultService={scheduleService}
      />

      <IntakeModal 
        isOpen={intakeModalOpen}
        onClose={() => setIntakeModalOpen(false)}
      />

      <LegalModal 
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        topic={legalTopic}
      />

      <AdminDeskModal 
        isOpen={deskModalOpen}
        onClose={() => setDeskModalOpen(false)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenLegal={handleOpenLegal} />

      {/* Direct WhatsApp Consultation Widget (Public Pages Only) */}
      {activePage !== 'admin' && <WhatsAppWidget />}
    </div>
  );
}
