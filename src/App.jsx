import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingContactConcierge } from './components/layout/FloatingContactConcierge';
import { useLenisScroll } from './hooks/useLenisScroll';

// Main Home Page (Synchronous for instantaneous first contentful paint)
import { HomePage } from './pages/HomePage';

// Code-Split Dynamic Secondary Pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage').then(m => ({ default: m.TechnologyPage })));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage').then(m => ({ default: m.SustainabilityPage })));
const SafetyQualityPage = lazy(() => import('./pages/SafetyQualityPage').then(m => ({ default: m.SafetyQualityPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Local SEO Pages
const RamanathapuramLocationPage = lazy(() => import('./pages/RamanathapuramLocationPage').then(m => ({ default: m.RamanathapuramLocationPage })));

// Dedicated Service Pages
const HouseConstructionPage = lazy(() => import('./pages/services/HouseConstructionPage').then(m => ({ default: m.HouseConstructionPage })));
const ArchitecturalDesignPage = lazy(() => import('./pages/services/ArchitecturalDesignPage').then(m => ({ default: m.ArchitecturalDesignPage })));
const StructuralEngineeringPage = lazy(() => import('./pages/services/StructuralEngineeringPage').then(m => ({ default: m.StructuralEngineeringPage })));
const InteriorDesignPage = lazy(() => import('./pages/services/InteriorDesignPage').then(m => ({ default: m.InteriorDesignPage })));
const TurnkeyConstructionPage = lazy(() => import('./pages/services/TurnkeyConstructionPage').then(m => ({ default: m.TurnkeyConstructionPage })));
const HomeRenovationPage = lazy(() => import('./pages/services/HomeRenovationPage').then(m => ({ default: m.HomeRenovationPage })));

// Educational Guides Hub & Articles
const GuidesHubPage = lazy(() => import('./pages/GuidesHubPage').then(m => ({ default: m.GuidesHubPage })));
const HouseConstructionCostRamanathapuram = lazy(() => import('./pages/guides/HouseConstructionCostRamanathapuram').then(m => ({ default: m.HouseConstructionCostRamanathapuram })));
const HowToChooseHomeBuilderRamanathapuram = lazy(() => import('./pages/guides/HowToChooseHomeBuilderRamanathapuram').then(m => ({ default: m.HowToChooseHomeBuilderRamanathapuram })));
const HouseConstructionProcessGuide = lazy(() => import('./pages/guides/HouseConstructionProcessGuide').then(m => ({ default: m.HouseConstructionProcessGuide })));

// Architectural Branded Fallback Loader
function PageFallbackLoader() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        backgroundColor: '#FAFAF9'
      }}
    >
      <div
        style={{
          width: '38px',
          height: '38px',
          border: '2.5px solid rgba(179, 142, 93, 0.2)',
          borderTopColor: '#B38E5D',
          borderRadius: '50%',
          animation: 'spin 0.75s linear infinite'
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          color: '#B38E5D',
          textTransform: 'uppercase',
          fontWeight: 700
        }}
      >
        BUILD MY DREAM
      </span>
    </div>
  );
}

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

      {/* Router Viewport with Code-Splitting Suspense */}
      <div style={{ flex: 1 }}>
        <Suspense fallback={<PageFallbackLoader />}>
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
            <Route path="/blog" element={<GuidesHubPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/guides/house-construction-cost-in-ramanathapuram" element={<HouseConstructionCostRamanathapuram />} />
            <Route path="/guides/how-to-choose-a-home-builder-in-ramanathapuram" element={<HowToChooseHomeBuilderRamanathapuram />} />
            <Route path="/guides/house-construction-process-foundation-to-handover" element={<HouseConstructionProcessGuide />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      {/* Direct Contact & Advertising Concierge Float */}
      <FloatingContactConcierge />

      {/* Global Architectural Footer */}
      <Footer />
    </div>
  );
}

export default App;
