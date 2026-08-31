import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingContactConcierge } from './components/layout/FloatingContactConcierge';
import { useLenisScroll } from './hooks/useLenisScroll';

// Main Pages
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
import { NotFoundPage } from './pages/NotFoundPage';

// Local SEO Pages
import { RamanathapuramLocationPage } from './pages/RamanathapuramLocationPage';

// Dedicated Service Pages
import { HouseConstructionPage } from './pages/services/HouseConstructionPage';
import { ArchitecturalDesignPage } from './pages/services/ArchitecturalDesignPage';
import { StructuralEngineeringPage } from './pages/services/StructuralEngineeringPage';
import { InteriorDesignPage } from './pages/services/InteriorDesignPage';
import { TurnkeyConstructionPage } from './pages/services/TurnkeyConstructionPage';
import { HomeRenovationPage } from './pages/services/HomeRenovationPage';

// Educational Guides Hub & Articles
import { GuidesHubPage } from './pages/GuidesHubPage';
import { HouseConstructionCostRamanathapuram } from './pages/guides/HouseConstructionCostRamanathapuram';
import { HowToChooseHomeBuilderRamanathapuram } from './pages/guides/HowToChooseHomeBuilderRamanathapuram';
import { HouseConstructionProcessGuide } from './pages/guides/HouseConstructionProcessGuide';

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
          {/* Main Pages */}
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

          {/* Local SEO Landing Page */}
          <Route path="/locations/ramanathapuram" element={<RamanathapuramLocationPage />} />

          {/* Dedicated Sub-Service Pages */}
          <Route path="/services/home-construction" element={<HouseConstructionPage />} />
          <Route path="/services/architectural-design" element={<ArchitecturalDesignPage />} />
          <Route path="/services/structural-engineering" element={<StructuralEngineeringPage />} />
          <Route path="/services/interior-design" element={<InteriorDesignPage />} />
          <Route path="/services/turnkey-construction" element={<TurnkeyConstructionPage />} />
          <Route path="/services/renovation" element={<HomeRenovationPage />} />

          {/* Educational Guides Hub & Articles */}
          <Route path="/guides" element={<GuidesHubPage />} />
          <Route path="/guides/house-construction-cost-in-ramanathapuram" element={<HouseConstructionCostRamanathapuram />} />
          <Route path="/guides/how-to-choose-a-home-builder-in-ramanathapuram" element={<HowToChooseHomeBuilderRamanathapuram />} />
          <Route path="/guides/house-construction-process-foundation-to-handover" element={<HouseConstructionProcessGuide />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
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
