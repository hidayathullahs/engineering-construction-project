import React from 'react';
import { HeroCinematic } from '../components/hero/HeroCinematic';
import { WhoWeAreSection } from '../components/sections/WhoWeAreSection';
import { KeyMetricsSection } from '../components/sections/KeyMetricsSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { ConstructionCanvasScrubber } from '../components/construction/ConstructionCanvasScrubber';
import { ServicesShowcaseSection } from '../components/sections/ServicesShowcaseSection';
import { EngineeringProcessSection } from '../components/sections/EngineeringProcessSection';
import { TechnologyPreviewSection } from '../components/sections/TechnologyPreviewSection';
import { SafetyQualitySection } from '../components/sections/SafetyQualitySection';
import { SustainabilitySection } from '../components/sections/SustainabilitySection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { TrustClientsSection } from '../components/sections/TrustClientsSection';
import { CareersPreviewSection } from '../components/sections/CareersPreviewSection';

export function HomePage() {
  return (
    <main>
      {/* 01: Hero Cinematic Section */}
      <HeroCinematic />

      {/* 02: Who We Are Section */}
      <WhoWeAreSection />

      {/* 03: Key Metrics Section */}
      <KeyMetricsSection />

      {/* 04: Signature 300-Frame Construction Journey Time-Lapse Canvas */}
      <ConstructionCanvasScrubber />

      {/* 05: Featured Projects Showcase */}
      <FeaturedProjectsSection />

      {/* 06: Services Showcase */}
      <ServicesShowcaseSection />

      {/* 07: 7-Stage Engineering Delivery Process */}
      <EngineeringProcessSection />

      {/* 08: Technology & Interactive 3D Structural BIM */}
      <TechnologyPreviewSection />

      {/* 09: Safety & Quality Standards */}
      <SafetyQualitySection />

      {/* 10: Environmental & Sustainability Framework */}
      <SustainabilitySection />

      {/* 11: Cross-Sector Industries */}
      <IndustriesSection />

      {/* 12: Trust & Clients */}
      <TrustClientsSection />

      {/* 13: Careers Culture Preview */}
      <CareersPreviewSection />
    </main>
  );
}
