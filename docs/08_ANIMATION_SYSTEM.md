# 08. Animation & Motion System

## Motion Principles
- **Restraint**: Motion serves structural understanding and spatial continuity, never gratuitous flashiness.
- **Scroll Scrubbing**: 300 sequential frames interpolated over 500vh pin space for 60fps cinematic fluidity.
- **Micro-Interactions**:
  - Button elevation on hover (`translateY(-2px)` with subtle gold glow).
  - Project card depth transition (`translateY(-6px)` with soft shadow).
  - Interactive stage stepper with animated pulse and live active highlight.
- **Accessibility**: Automatic fallback and animation suppression when `prefers-reduced-motion: reduce` is active.
