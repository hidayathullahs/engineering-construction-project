# 10. Accessibility (A11y) Specification

## Standards Compliance
- **WCAG 2.1 Level AA**: Verified high contrast across all dark surfaces and text tokens (`#F7F7F2` on `#0B0F14` exceeds 14:1 contrast ratio).
- **Keyboard Navigation**: All interactive elements (Navbar links, stage buttons, project cards, modals, form inputs) are fully accessible via `Tab` and `Enter` with visible outline states.
- **Screen Reader Support**: ARIA labels on icon buttons and navigation triggers.
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`, disabling parallax and continuous canvas transforms.
