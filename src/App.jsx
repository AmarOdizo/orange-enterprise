import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScheduleModal from './components/ScheduleModal';
import IntakeModal from './components/IntakeModal';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';
import AdminDeskModal from './components/AdminDeskModal';

const VALID_PAGES = ['home', 'about', 'services', 'contact'];

export default function App() {
  const [activePage, setActivePageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  // Modals state
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleService, setScheduleService] = useState('General Advisory');
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTopic, setLegalTopic] = useState('Privacy Policy');
  const [deskModalOpen, setDeskModalOpen] = useState(false);

  // Sync active page with URL hash for browser history & bookmarking
  const setActivePage = (page) => {
    if (VALID_PAGES.includes(page)) {
      setActivePageState(page);
      if (window.location.hash !== `#${page}`) {
        window.location.hash = page;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash) && hash !== activePage) {
        setActivePageState(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  const handleOpenSchedule = (serviceName = 'General Advisory') => {
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
      {/* Global Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenSchedule={handleOpenSchedule}
        onOpenDesk={() => setDeskModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 sm:pt-[70px] flex-1 bg-surface min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-70px)]">
        {activePage === 'home' && (
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
            onOpenSchedule={handleOpenSchedule}
            onOpenIntake={handleOpenIntake}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setActivePage={setActivePage}
        onOpenSchedule={handleOpenSchedule}
        onOpenIntake={handleOpenIntake}
        onOpenLegal={handleOpenLegal}
      />

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

      {/* Direct WhatsApp Consultation Widget */}
      <WhatsAppWidget />
    </div>
  );
}
