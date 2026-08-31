# PROJECT_CONTEXT.md

## Project Identity

- **Name**: BUILD MY DREAM
- **Brand Tagline**: *"From Vision to Reality."*
- **Supporting Statements**: *"Your dream home. Engineered to last."* / *"Designed for you. Built to last."* / *"We don't just build houses. We build your dream."*
- **Type**: Premium Residential Architecture, Structural Engineering, and Turnkey Dream-Home Construction Platform
- **Core Promise**: *"We help people transform their dream home vision into a professionally designed, engineered and constructed reality."*
- **Signature Experience**: **"YOUR DREAM HOME, BUILT STEP BY STEP"** — High-speed, 60fps HTML5 Canvas scroll-driven construction time-lapse engine utilizing 300 photorealistic 1280x720 frames (`public/frames/`) documenting ground excavation to a completed luxury contemporary villa at dusk.

## Core Stack & Tooling

- **Framework**: React 19 + Vite 6
- **Routing**: React Router DOM v7 (11 core multi-page routes)
- **Animation & Scrolling**:
  - HTML5 2D Canvas Engine with double-buffering and multi-tier progressive preloading
  - GSAP 3 & ScrollTrigger for timeline synchronization
  - Lenis for smooth inertial scroll physics
- **3D Visualization (PERMANENT IMMUTABLE CORE FEATURE)**:
  - Three.js WebGL interactive 5D BIM skeletal model viewer (`StructuralModelViewer.jsx`) with real-time orbit controls, layer filtering (ALL, CORE, COLUMNS, SLABS), and FEA stress simulation heatmap toggle.
  - **CRITICAL DIRECTIVE**: Under no circumstances should this 3D BIM Computational Skeleton Viewer be removed, replaced, or disabled. It is a permanent signature feature on both the Homepage and `/technology`.
- **Design Tokens**:
  - Background Primary: `#FAFAF9` (Warm Architectural White)
  - Background Surface: `#FFFFFF` (Crisp White)
  - Background Translucent: `rgba(255, 255, 255, 0.94)`
  - Obsidian Dark: `#0F172A`
  - Slate Secondary: `#475569`
  - Architectural Champagne Gold: `#B38E5D` / `#C5A880`
  - Grid Linework: `rgba(15, 23, 42, 0.04)` to `rgba(15, 23, 42, 0.08)`
  - Typography: `Outfit` (Headings) and `Space Grotesk` (Technical HUD & Numbers)

## Multi-Page Hierarchy

1. `/` — **Homepage** (Hero Cinematic with Parallax & Environmental Sensor HUD, Who We Are Philosophy, Key Metrics, **Signature 300-Frame Dream Home Journey Scrubber**, Featured Projects with category filter, Services list & preview switcher, 8-step Dream-Home Process pipeline, 3D BIM Technology Preview, Safety & Quality Standards, Sustainability Roadmap, Why Build My Dream Trust Section, Careers Preview, and Footer)
2. `/about` — **About Our Studio** (Philosophy, 4 Foundational Pillars, Architectural & Engineering Leadership Cadre, Milestones Timeline)
3. `/services` — **Architectural & Construction Practices** (8 comprehensive practices: Architectural Design, Structural Engineering, Custom Home Construction, Interior Architecture, Luxury Renovation, Project Management, Landscape Architecture, Turnkey Home Solutions)
4. `/projects` — **Projects Catalog** (Filterable residential portfolio: All, Modern Homes, Luxury Homes, Villas, Contemporary, Renovation)
5. `/projects/:slug` — **Project Detail** (Rich editorial case studies with metrics, architectural vision, engineering challenges, solutions, materials palette, and gallery)
6. `/industries` — **Sectors** (Residential, Coastal Villas, High-End Renovations, Urban Manors)
7. `/technology` — **Technology & BIM** (Interactive 3D structural model viewer, Digital Twin, Drone LiDAR photogrammetry, Non-Linear FEA modeling)
8. `/sustainability` — **Sustainability & ESG** (Bioclimatic design, low-carbon concretes, passive envelope metrics, solar integration)
9. `/safety-quality` — **Quality Assurance & Safety** (Zero-Harm site governance, sub-millimeter laser QA/QC, accredited laboratory testing)
10. `/careers` — **Careers & Culture** (Cadre values, active job openings, interactive application modal with instant confirmation and confetti)
11. `/contact` — **Project Estimator & RFP** (Validated dream home specification form with accessible budget selector, scale estimator, plot layout/CAD dropzone, and 24-hour executive consultation guarantee)

## Status & Verified Quality

- **Production Build**: Successfully passes `npm run build` with zero syntax errors.
- **HTTP Endpoints**: All 11 routes and frame static assets return HTTP 200 OK.
- **Responsive Viewports**: Scaled for Mobile (320px–430px), Tablet (768px–1024px), Desktop (1280px–1440px), and Large Displays (1920px+).
- **Reduced Motion**: Full compliance with `prefers-reduced-motion: reduce`.
