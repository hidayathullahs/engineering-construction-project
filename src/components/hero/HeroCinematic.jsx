import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, Sparkles, MapPin, Building2, Compass } from 'lucide-react';

export function HeroCinematic() {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const datumLineRef = useRef(null);
  const datumCoordRef = useRef(null);
  const topBadgesRef = useRef(null);
  const pillBadgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const cardsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  // Counter display refs
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const stat4Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initial GSAP Choreographed Entrance Sequence
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Immediate display for reduced motion users
        if (stat1Ref.current) stat1Ref.current.innerText = '100+';
        if (stat2Ref.current) stat2Ref.current.innerText = '±1.5 mm';
        if (stat3Ref.current) stat3Ref.current.innerText = '100%';
        if (stat4Ref.current) stat4Ref.current.innerText = '25-Year';
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Background subtle scale breath in
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1.02, opacity: 0.18, duration: 1.8, ease: 'power2.out' },
        0
      );

      // Architectural Datum Laser line sweep
      tl.fromTo(
        datumLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.4, ease: 'expo.inOut' },
        0.1
      );

      // Top Location & Discipline Badges
      tl.fromTo(
        topBadgesRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.2
      );

      // Eyebrow Pill Badge
      tl.fromTo(
        pillBadgeRef.current,
        { opacity: 0, y: 18, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        0.35
      );

      // Kinetic Headline Line 1: BUILD YOUR DREAM HOME
      tl.fromTo(
        line1Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, ease: 'power4.out' },
        0.5
      );

      // Kinetic Headline Line 2: FROM VISION TO REALITY.
      tl.fromTo(
        line2Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, ease: 'power4.out' },
        0.65
      );

      // Subtitle paragraph
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.85
      );

      // Call-to-action buttons
      tl.fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        1.0
      );

      // Floating Datum Coordinates in corner
      tl.fromTo(
        datumCoordRef.current,
        { opacity: 0 },
        { opacity: 0.6, duration: 1.2 },
        1.0
      );

      // Metric Cards Cascade
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          onStart: () => {
            // Animate number counters cleanly
            animateCounters();
          }
        },
        1.15
      );

      // Plumb-line scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.6
      );
    }, heroRef);

    // Number ticker logic
    function animateCounters() {
      // 1. Homes Built: 0 -> 100+
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 100,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat1Ref.current) {
            stat1Ref.current.innerText = `${Math.round(obj1.val)}+`;
          }
        }
      });

      // 2. Laser Accuracy: 0.0 -> ±1.5 mm
      const obj2 = { val: 0.0 };
      gsap.to(obj2, {
        val: 1.5,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat2Ref.current) {
            stat2Ref.current.innerText = `±${obj2.val.toFixed(1)} mm`;
          }
        }
      });

      // 3. On-Time Handover: 0 -> 100%
      const obj3 = { val: 0 };
      gsap.to(obj3, {
        val: 100,
        duration: 1.9,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat3Ref.current) {
            stat3Ref.current.innerText = `${Math.round(obj3.val)}%`;
          }
        }
      });

      // 4. Structural Warranty: 0 -> 25-Year
      const obj4 = { val: 0 };
      gsap.to(obj4, {
        val: 25,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat4Ref.current) {
            stat4Ref.current.innerText = `${Math.round(obj4.val)}-Year`;
          }
        }
      });
    }

    // 2. High-Performance Silky Damped Mouse Parallax (Zero React Re-renders)
    let animationFrameId;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      target.x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      target.y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
    };

    const renderLoop = () => {
      if (!prefersReducedMotion) {
        // Smooth lerp easing (0.06 factor for luxurious heavyweight motion)
        current.x += (target.x - current.x) * 0.06;
        current.y += (target.y - current.y) * 0.06;

        if (bgImageRef.current) {
          bgImageRef.current.style.transform = `translate3d(${current.x * -16}px, ${current.y * -16}px, 0) scale(1.02)`;
        }

        if (datumLineRef.current) {
          datumLineRef.current.style.transform = `translate3d(0, ${current.y * 12}px, 0)`;
        }

        if (datumCoordRef.current) {
          datumCoordRef.current.style.transform = `translate3d(${current.x * 20}px, ${current.y * 20}px, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      ctx.revert();
    };
  }, []);

  const scrollToScrubber = (e) => {
    e.preventDefault();
    const el = document.getElementById('construction-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '94vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        backgroundColor: '#FAFAF9'
      }}
      className="bg-blueprint-grid"
    >
      {/* Active Architectural LiDAR / Laser Scanning Beam */}
      <div className="hero-laser-scanner" />

      {/* Background Architectural Image with Silky Parallax & Ambient Drift */}
      <div
        ref={bgImageRef}
        className="hero-bg-ambient"
        style={{
          position: 'absolute',
          inset: '-30px',
          backgroundImage: 'url(/frames/ezgif-frame-300.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.18,
          filter: 'contrast(108%) grayscale(12%)',
          willChange: 'transform, opacity',
          pointerEvents: 'none'
        }}
      />

      {/* Atmospheric Vignette & Contrast Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(250,250,249,0.92) 0%, rgba(250,250,249,0.48) 50%, rgba(250,250,249,0.98) 100%), radial-gradient(circle at center, transparent 35%, rgba(250,250,249,0.85) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Architectural Horizontal Datum Laser Line */}
      <div
        ref={datumLineRef}
        className="hero-datum-line"
        style={{ top: '38%' }}
      />

      {/* Floating Precision Engineering Datum Coordinates (Desktop Only) */}
      <div
        ref={datumCoordRef}
        className="desktop-only"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: '#94A3B8',
          letterSpacing: '0.12em',
          pointerEvents: 'none',
          zIndex: 5,
          textAlign: 'right',
          willChange: 'transform'
        }}
      >
        <div>LAT 9.3716° N · LON 78.8307° E</div>
        <div style={{ color: 'var(--accent-gold)', marginTop: '2px', fontWeight: 700 }}>
          RAMANATHAPURAM GEODETIC DATUM ±0.00
        </div>
      </div>

      {/* Top Location & Discipline Ribbon */}
      <div
        ref={topBadgesRef}
        style={{
          position: 'absolute',
          top: '5.25rem',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 5
        }}
        className="desktop-only"
      >
        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 600, letterSpacing: '0.08em' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={12} className="text-gold" /> RAMANATHAPURAM · TAMIL NADU
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Compass size={12} className="text-gold" /> DESIGN · ENGINEERING · BUILD
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Building2 size={12} className="text-gold" /> TURNKEY HOME SOLUTIONS
          </span>
        </div>
      </div>

      {/* Main Hero Editorial Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1120px' }}>
        {/* Left Floating Architectural Badge (Desktop Only) */}
        <div
          className="desktop-only hero-floating-pill"
          style={{
            position: 'absolute',
            left: '-3.5rem',
            top: '30%',
            background: 'rgba(255, 255, 255, 0.94)',
            border: '1px solid rgba(179, 142, 93, 0.35)',
            borderRadius: '24px',
            padding: '0.45rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
            pointerEvents: 'none',
            zIndex: 8,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="hero-beacon-dot" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', fontWeight: 700, letterSpacing: '0.06em' }}>
            IS 456:2000 RCC CERTIFIED
          </span>
        </div>

        {/* Right Floating Architectural Badge (Desktop Only) */}
        <div
          className="desktop-only hero-floating-pill"
          style={{
            position: 'absolute',
            right: '-3.5rem',
            top: '40%',
            animationDelay: '-2.2s',
            background: 'rgba(255, 255, 255, 0.94)',
            border: '1px solid rgba(179, 142, 93, 0.35)',
            borderRadius: '24px',
            padding: '0.45rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
            pointerEvents: 'none',
            zIndex: 8,
            backdropFilter: 'blur(10px)'
          }}
        >
          <Sparkles size={12} className="text-gold" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#475569', fontWeight: 700, letterSpacing: '0.06em' }}>
            SINGLE-SOURCE ACCOUNTABILITY
          </span>
        </div>

        {/* Eyebrow Pill Badge */}
        <div
          ref={pillBadgeRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(179, 142, 93, 0.35)',
            padding: '0.5rem 1.3rem',
            borderRadius: '30px',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
            willChange: 'transform, opacity'
          }}
        >
          <div className="hero-beacon-dot" />
          <Sparkles size={14} className="text-gold" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 800 }}>
            BUILD MY DREAM · RAMANATHAPURAM
          </span>
        </div>

        {/* Primary H1 with Clean Kinetic Masked Reveal */}
        <h1
          className="hero-headline"
          style={{
            marginBottom: '1.25rem',
            color: '#0F172A',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em'
          }}
        >
          <span className="hero-line-mask">
            <span ref={line1Ref} className="hero-line-inner">
              BUILD YOUR DREAM HOME
            </span>
          </span>
          <span className="hero-line-mask">
            <span ref={line2Ref} className="hero-line-inner hero-gold-gradient">
              FROM VISION TO REALITY.
            </span>
          </span>
        </h1>

        {/* Supporting Statement */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '840px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.65,
            fontWeight: 400,
            willChange: 'transform, opacity'
          }}
        >
          Build My Dream brings architectural design, structural engineering and professional home construction together to help homeowners create thoughtfully designed homes in <strong style={{ color: '#0F172A', fontWeight: 600 }}>Ramanathapuram</strong> and surrounding service areas.
        </p>

        {/* Call-to-Action Group */}
        <div
          ref={ctaGroupRef}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            willChange: 'transform, opacity'
          }}
        >
          <Link
            to="/contact"
            className="btn-primary btn-primary-sheen"
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              boxShadow: '0 10px 25px rgba(179, 142, 93, 0.35)'
            }}
          >
            Start Your Dream
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/projects"
            className="btn-secondary"
            style={{
              padding: '1.1rem 2.25rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              background: '#FFFFFF',
              color: '#0F172A',
              border: '1px solid rgba(15, 23, 42, 0.15)'
            }}
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Metrics & Guarantees Ribbon with Clean Card Motion & Number Tickers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'left'
          }}
        >
          {/* Stat 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="glass-card hud-border hero-metric-card"
            style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.96)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(179, 142, 93, 0.4)', userSelect: 'none', fontWeight: 700 }}>+</div>
            <div
              ref={stat1Ref}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}
            >
              100+
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              Homes Built
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Custom luxury residences in Tamil Nadu
            </div>
          </div>

          {/* Stat 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="glass-card hud-border hero-metric-card"
            style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.96)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(179, 142, 93, 0.4)', userSelect: 'none', fontWeight: 700 }}>+</div>
            <div
              ref={stat2Ref}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}
            >
              ±1.5 mm
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              Laser Accuracy
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Total Station & digital alignment
            </div>
          </div>

          {/* Stat 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="glass-card hud-border hero-metric-card"
            style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.96)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(179, 142, 93, 0.4)', userSelect: 'none', fontWeight: 700 }}>+</div>
            <div
              ref={stat3Ref}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}
            >
              100%
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              On-Time Handover
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Guaranteed project milestone dates
            </div>
          </div>

          {/* Stat 4 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="glass-card hud-border hero-metric-card"
            style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.96)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(179, 142, 93, 0.4)', userSelect: 'none', fontWeight: 700 }}>+</div>
            <div
              ref={stat4Ref}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}
            >
              25-Year
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              Structural Warranty
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Long-term stability and peace of mind
            </div>
          </div>
        </div>

        {/* Precision Plumb-Line Architectural Scroll Indicator */}
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <a
            ref={scrollIndicatorRef}
            href="#construction-journey"
            onClick={scrollToScrubber}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 700,
              willChange: 'transform, opacity'
            }}
          >
            <span style={{ opacity: 0.85 }}>Explore Construction Journey</span>
            <div className="hero-plumb-pill">
              <div className="hero-plumb-dot" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
