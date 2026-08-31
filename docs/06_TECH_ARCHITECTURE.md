# 06. Technical Architecture

## Architecture Overview
- **Build Engine**: Vite 6 with React 19 SPA framework.
- **2D Canvas Frame Pipeline**:
  - Double-buffered canvas context with high-DPI scaling (`window.devicePixelRatio`).
  - Progressive two-tier image preloader: Tier 1 loads 60 keyframes in parallel for instantaneous responsiveness; Tier 2 buffers remaining 240 frames in background idle callbacks.
- **Scroll Physics & Animation**:
  - Lenis smooth inertial scrolling integrated with GSAP ScrollTrigger updates.
- **3D WebGL Engine**:
  - Three.js scene with custom geometry, ambient/directional lighting, wireframe edge segments, and stress simulation color switching.
