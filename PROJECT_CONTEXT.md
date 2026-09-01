# PROJECT_CONTEXT.md

## Project Identity

- **Name**: BUILD MY DREAM
- **Brand Tagline**: *"From Vision to Reality."*
- **Primary Market**: Ramanathapuram, Tamil Nadu, India
- **Primary Business**: Residential home builders, house construction, architectural design, structural engineering, interior architecture, and turnkey home construction.
- **Core Promise**: *"We help homeowners transform their dream home vision into a professionally designed, engineered and constructed reality in Ramanathapuram and surrounding regions."*
- **Direct Contacts**:
  - Phone: `+91 63857 40155`
  - Email: `hidayathullahbajar@gmail.com`
  - Address: Ramanathapuram, Tamil Nadu 623501, India

## Technical Stack & Tooling

- **Framework**: React 19 + Vite 6
- **Routing & SPA Fallback**:
  - React Router DOM v7 (`BrowserRouter`)
  - Render Static Site rewrite configuration (`render.yaml` with `routes: [{type: rewrite, source: /*, destination: /index.html}]`)
  - `public/_redirects` (`/* /index.html 200`) and root `_redirects` for multi-platform SPA static server rewrites
- **Animation & Canvas Engine**:
  - HTML5 2D Canvas Engine with double-buffering for the 300-frame time-lapse scrubber
  - Full crawlable semantic HTML markup (`<article>` cards for all 16 milestones) alongside canvas animation
  - GSAP 3 & ScrollTrigger for timeline triggers
  - Lenis for smooth inertial momentum scrolling
- **3D Graphics (PERMANENT IMMUTABLE CORE FEATURE)**:
  - Three.js WebGL interactive 5D BIM skeletal model viewer (`StructuralModelViewer.jsx`) with real-time orbit controls, layer filtering (`ALL`, `CORE`, `COLUMNS`, `SLABS`), and FEA stress simulation heatmap toggle.
- **SEO & Structured Data Engine**:
  - Dynamic `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph, and Twitter Cards
  - Google Search Console Verification Meta Tag: `<meta name="google-site-verification" content="LeaKYTnSO-NuUtsXkhD5-rKkeBfkG23Fkim8H1qI3GY" />` configured permanently in `<head>` of `index.html`
  - Schema.org JSON-LD structured data (`LocalBusiness`, `GeneralContractor`, `BreadcrumbList`, `Service`, `FAQPage`)
  - `public/sitemap.xml` and `public/robots.txt`

## Multi-Page Route Hierarchy

1. `/` — **Homepage** (Single H1: `BUILD YOUR DREAM HOME FROM VISION TO REALITY.`, UI cleanup without sci-fi sensor widgets, signature 300-frame construction scrubber with crawlable semantic markup, 8-stage process, 3D BIM skeleton, and local Ramanathapuram trust proof)
2. `/about` — **About Our Studio** (Philosophy, 4 Foundational Pillars, Leadership Cadre, Heritage Milestones)
3. `/services` — **Services Catalog** (Master directory linking to all dedicated sub-services)
4. `/services/home-construction` — **House Construction** (Substructure, foundation, RCC frame, masonry, and pricing in Ramanathapuram)
5. `/services/architectural-design` — **Architectural Design** (2D/3D floorplans, Vastu compliance, and bioclimatic ventilation)
6. `/services/structural-engineering` — **Structural Engineering** (Soil testing, FEA stress modeling, and coastal corrosion resistance)
7. `/services/interior-design` — **Interior Design** (Modular kitchens, wardrobes, Italian marble, and ambient lighting)
8. `/services/turnkey-construction` — **Turnkey Construction** (Single-source contracts, fixed pricing, and 25-year structural warranty)
9. `/services/renovation` — **Home Renovation** (Structural retrofitting, vertical extensions, and façade upgrades)
10. `/locations/ramanathapuram` — **Home Builders in Ramanathapuram** (Local SEO hub with soil characteristics, coastal weather resistance, service zones, and local FAQs)
11. `/guides` — **Construction Guides & Insights Hub**
12. `/blog` — **Blog & Educational Insights** (Alias to `/guides`)
13. `/process` — **Construction Process Roadmap** (Alias to `/guides/house-construction-process-foundation-to-handover`)
14. `/guides/house-construction-cost-in-ramanathapuram` — **Cost Guide 2026** (Cost per sqft, materials, and BOQ formulation)
15. `/guides/how-to-choose-a-home-builder-in-ramanathapuram` — **Builder Selection Checklist**
16. `/guides/house-construction-process-foundation-to-handover` — **16-Stage Construction Roadmap**
17. `/projects` — **Projects Catalog** (Filterable residential portfolio in Tamil Nadu)
18. `/projects/:slug` — **Project Case Studies** (Supports custom and sample project slugs like `/projects/example-project`)
19. `/technology` — **Technology & BIM** (3D structural skeleton, Digital Twins, and LiDAR geomatics)
20. `/sustainability` — **Sustainability & ESG** (Passive cooling, solar integration, and low-carbon concrete)
21. `/safety-quality` — **Quality & Safety Standards** (120-point QC protocols and zero-harm governance)
22. `/careers` — **Careers & Cadre Culture**
23. `/contact` — **Project Estimator & Contact** (Validated specification form with budget brackets, plot CAD dropzone, and direct call/email)
24. `*` — **404 Page** (Clean blueprint not found with quick navigation links)
