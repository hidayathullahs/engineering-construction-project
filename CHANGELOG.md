# CHANGELOG.md

All notable changes to the VERTEX Engineering & Construction Digital Platform will be documented in this file.

## [1.0.0] - Initial Production Release

### Added
- **Signature Construction Time-Lapse Canvas Scrubber**:
  - Engineered high-performance 2D Canvas component supporting 300 sequential 1280x720 frames.
  - Multi-tier progressive loader (Tier 1: 60 keyframes for instant scroll feedback; Tier 2: idle background buffering).
  - High-DPI device pixel ratio compensation (`window.devicePixelRatio`) with responsive cover letterboxing.
  - Architectural HUD overlay with live elevation, concrete volume, frame index, and interactive 16-stage timeline stepper.
- **Interactive 3D BIM Structural Model Viewer**:
  - Three.js WebGL structural building model with shear core, columns, and cantilevered slabs.
  - Real-time orbit dragging controls and FEA load stress simulation heatmap toggle.
- **Architectural Design System**:
  - Dark luxury palette (`#0B0F14`, `#141A21`), warm champagne metallic accents (`#C5A880`), blueprint grid linework, and `Outfit` / `Space Grotesk` typography.
  - Smooth inertial scroll physics integration via Lenis.
  - Dynamic magnetic custom cursor with state transitions.
- **Complete 11-Route Hierarchy**:
  - `/` — Homepage with all 13 core sections and interactive features.
  - `/about` — Executive profile, leadership directory, and corporate milestone timeline.
  - `/services` — 8 engineering & construction practices with capabilities and specifications.
  - `/projects` — Filterable portfolio with search and category tabs.
  - `/projects/:slug` — Deep editorial case studies with engineering challenge/solution breakdowns.
  - `/industries` — 8 sector solutions.
  - `/technology` — BIM 5D, Digital Twin, Drone LiDAR, and FEA simulation details.
  - `/sustainability` — Low-carbon concretes, circular urban mining, and ESG benchmarks.
  - `/safety-quality` — Zero-Harm site governance, QA protocols, and laboratory certifications.
  - `/careers` — Engineering culture, open roles, and application modal with confetti feedback.
  - `/contact` — Validated RFP enquiry form with project scale estimator and dropzone file upload simulation.
- **Comprehensive Documentation Suite**:
  - Full set of 14 specifications created in `docs/`.
