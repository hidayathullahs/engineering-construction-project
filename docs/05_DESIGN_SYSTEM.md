# 05_DESIGN_SYSTEM.md — BUILD MY DREAM Design Tokens

## Architectural White Luxury Palette
```css
:root {
  /* Surface Tokens */
  --bg-primary: #FAFAF9;              /* Warm Architectural White */
  --bg-surface: #FFFFFF;              /* Pure White */
  --bg-surface-elevated: #F4F4F5;     /* Subtle Off-White */
  --bg-surface-translucent: rgba(255, 255, 255, 0.94);

  /* Typography Tokens */
  --text-primary: #0F172A;            /* Deep Obsidian Black */
  --text-secondary: #475569;          /* Architectural Slate */
  --text-muted: #8E9CAE;              /* Cool Gray */

  /* Metallic Accent Tokens */
  --accent-gold: #B38E5D;             /* Architectural Champagne Gold */
  --accent-gold-hover: #967243;
  --accent-gold-glow: rgba(179, 142, 93, 0.25);

  /* Linework & CAD Grids */
  --border-subtle: rgba(15, 23, 42, 0.08);
  --border-gold: rgba(179, 142, 93, 0.4);

  /* Typography Fonts */
  --font-display: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

## Component Aesthetics
- `.glass-card`: White frosted container (`background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(20px); border: 1px solid rgba(15, 23, 42, 0.08); box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);`)
- `.btn-primary`: Champagne gold CTA with arrow icon and subtle scale hover.
- `.btn-secondary`: Crisp white button with obsidian border and text.
