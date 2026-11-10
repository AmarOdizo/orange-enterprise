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

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Global Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenSchedule={handleOpenSchedule}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1 bg-surface min-h-[calc(100vh-80px)]">
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

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenLegal={handleOpenLegal} />
    </div>
  );
}
