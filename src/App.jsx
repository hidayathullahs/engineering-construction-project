import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingContactConcierge } from './components/layout/FloatingContactConcierge';
import { useLenisScroll } from './hooks/useLenisScroll';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { SafetyQualityPage } from './pages/SafetyQualityPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  // Initialize smooth inertial scrolling
  useLenisScroll();

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Architectural Custom Cursor */}
      <CustomCursor />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Router Viewport */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/safety-quality" element={<SafetyQualityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      {/* Direct Contact & Advertising Concierge Float */}
      <FloatingContactConcierge />

      {/* Global Architectural Footer */}
      <Footer />
    </div>
  );
}

export default App;
