# PROJECT_CONTEXT.md

## Project Identity

- **Name**: VERTEX Engineering & Infrastructure Group
- **Type**: Premium International Engineering, Architecture, and Heavy Construction Digital Experience
- **Primary Design Concept**: *"Engineering Precision Expressed Through Digital Motion"*
- **Centerpiece**: High-speed, 60fps HTML5 Canvas scroll-driven construction time-lapse engine utilizing 300 photorealistic 1280x720 frames (`photo frames/` → `public/frames/`) documenting ground excavation to a completed luxury contemporary building at blue-hour dusk.

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
  - Primary Dark: `#0B0F14`
  - Secondary Dark / Surface: `#141A21`
  - Elevated Surface: `#1B232D`
  - Light Background: `#F3F1EC`
  - White Accent: `#F7F7F2`
  - Architectural Warm Gold: `#C5A880` / `#D4AF37`
  - Grid Linework: `rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.08)`
  - Typography: `Outfit` (Headings) and `Space Grotesk` (Technical HUD & Numbers)

## Multi-Page Hierarchy

1. `/` — **Homepage** (Cinematic Hero, Who We Are, Key Metrics, **Signature 300-Frame Construction Journey Scrubber**, Featured Projects with category filtering, Services list & preview switcher, 7-step Engineering Process pipeline, 3D BIM Technology Preview, Safety & Quality, Sustainability, Industries, Trust/Clients, Careers, and Footer)
2. `/about` — **About Us & Leadership** (Institutional heritage, principles, chartered executive directors, 2001–present corporate milestones)
3. `/services` — **Services** (8 comprehensive practices: Civil, Structural, General Construction, Infrastructure, Project Management, Architectural Design, Industrial Cleanrooms, Asset Lifecycle)
4. `/projects` — **Projects Catalog** (Filterable landmarks catalog with search query filter)
5. `/projects/:slug` — **Project Detail** (Rich editorial case studies with metrics, engineering challenges, solutions, blueprint scope, technologies, and image gallery)
6. `/industries` — **Sectors** (8 industry sectors: Commercial, Residential, Infrastructure, Cleanrooms, Healthcare, Education, Energy, Aviation/Marine)
7. `/technology` — **Technology & BIM** (Interactive 3D structural model viewer, Digital Twin, Drone LiDAR photogrammetry, Non-Linear FEA modeling)
8. `/sustainability` — **Sustainability** (Decarbonization, low-clinker concretes, circular urban mining, passive envelope metrics)
9. `/safety-quality` — **Safety & Quality** (Zero-Harm site governance, sub-millimeter laser QA/QC, accredited laboratory testing)
10. `/careers` — **Careers & Culture** (Cadre values, active job openings, interactive application modal with instant confirmation and confetti)
11. `/contact` — **Contact & RFP** (Validated technical parameters form, project scale estimator, blueprint file upload dropzone simulation, and instant 24-hour executive review guarantee)

## Status & Verified Quality

- **Production Build**: Successfully passes `npm run build` with zero syntax errors.
- **HTTP Endpoints**: All 11 routes and frame static assets return HTTP 200 OK.
- **Responsive Viewports**: Scaled for Mobile (320px–430px), Tablet (768px–1024px), Desktop (1280px–1440px), and Large Displays (1920px+).
- **Reduced Motion**: Full compliance with `prefers-reduced-motion: reduce`.
