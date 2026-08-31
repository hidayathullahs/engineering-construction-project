# 07. Component Architecture

## Tree Structure
- `src/components/layout/`
  - `Navbar.jsx` (Sticky header, desktop menu, mobile fullscreen drawer)
  - `Footer.jsx` (Four-column directory, newsletter, coordinates)
  - `CustomCursor.jsx` (Custom cursor tracker with VIEW/EXPLORE/DRAG states)
  - `ScrollToTop.jsx` (Route transition scroll reset)
- `src/components/construction/`
  - `ConstructionCanvasScrubber.jsx` (300-frame time-lapse canvas & telemetry HUD)
- `src/components/3d/`
  - `StructuralModelViewer.jsx` (Three.js WebGL BIM skeletal inspector)
- `src/components/hero/`
  - `HeroCinematic.jsx` (Architectural hero with live telemetry and smooth scroll anchor)
- `src/components/sections/`
  - `WhoWeAreSection.jsx`, `KeyMetricsSection.jsx`, `FeaturedProjectsSection.jsx`, `ServicesShowcaseSection.jsx`, `EngineeringProcessSection.jsx`, `TechnologyPreviewSection.jsx`, `SafetyQualitySection.jsx`, `SustainabilitySection.jsx`, `IndustriesSection.jsx`, `TrustClientsSection.jsx`, `CareersPreviewSection.jsx`.
