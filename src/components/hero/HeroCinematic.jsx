import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {
  ArrowUpRight,
  MapPin,
  Compass,
  Building2,
  Home,
  Target,
  CalendarCheck,
  ShieldCheck,
  Diamond,
  Users,
  Clock,
  Leaf
} from 'lucide-react';

export function HeroCinematic() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const bottomBarRef = useRef(null);
  const villaCardRef = useRef(null);

  // Kinetic typography line refs
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const socialProofRef = useRef(null);
  const floatingPillRef = useRef(null);

  // Counter numbers
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const stat4Ref = useRef(null);
  const stat5Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (stat1Ref.current) stat1Ref.current.innerText = '100+';
        if (stat2Ref.current) stat2Ref.current.innerText = '±1.5 mm';
        if (stat3Ref.current) stat3Ref.current.innerText = '100%';
        if (stat4Ref.current) stat4Ref.current.innerText = '25-Year';
        if (stat5Ref.current) stat5Ref.current.innerText = '0';
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Kinetic Headline Line reveals (4 lines)
      tl.fromTo(
        line1Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.95, ease: 'power4.out' },
        0.1
      );
      tl.fromTo(
        line2Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.95, ease: 'power4.out' },
        0.2
      );
      tl.fromTo(
        line3Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.95, ease: 'power4.out' },
        0.3
      );
      tl.fromTo(
        line4Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.95, ease: 'power4.out' },
        0.4
      );

      // Subtitle paragraph
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.55
      );

      // CTA Buttons
      tl.fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        0.7
      );

      // Social proof reviews
      tl.fromTo(
        socialProofRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.85
      );

      // Right Villa Card reveal
      tl.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
        0.3
      );

      // Floating Dark Glass Vertical Pill
      tl.fromTo(
        floatingPillRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' },
        0.8
      );

      // Bottom 5-Metric Pill Container
      tl.fromTo(
        bottomBarRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          onStart: () => animateCounters()
        },
        0.9
      );
    }, heroRef);

    // Number ticker animations
    function animateCounters() {
      // 1. Homes Built: 0 -> 100+
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 100,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat1Ref.current) stat1Ref.current.innerText = `${Math.round(obj1.val)}+`;
        }
      });

      // 2. Laser Accuracy: 0.0 -> ±1.5 mm
      const obj2 = { val: 0.0 };
      gsap.to(obj2, {
        val: 1.5,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat2Ref.current) stat2Ref.current.innerText = `±${obj2.val.toFixed(1)} mm`;
        }
      });

      // 3. On-Time Handover: 0 -> 100%
      const obj3 = { val: 0 };
      gsap.to(obj3, {
        val: 100,
        duration: 1.9,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat3Ref.current) stat3Ref.current.innerText = `${Math.round(obj3.val)}%`;
        }
      });

      // 4. Structural Warranty: 0 -> 25-Year
      const obj4 = { val: 0 };
      gsap.to(obj4, {
        val: 25,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (stat4Ref.current) stat4Ref.current.innerText = `${Math.round(obj4.val)}-Year`;
        }
      });

      // 5. Zero Compromises: 0
      if (stat5Ref.current) stat5Ref.current.innerText = '0';
    }

    // High performance smooth mouse parallax
    let animId;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      target.x = (e.clientX / innerWidth - 0.5) * 2;
      target.y = (e.clientY / innerHeight - 0.5) * 2;
    };

    const renderLoop = () => {
      if (!prefersReducedMotion) {
        current.x += (target.x - current.x) * 0.05;
        current.y += (target.y - current.y) * 0.05;

        if (villaCardRef.current) {
          villaCardRef.current.style.transform = `perspective(1000px) rotateY(${current.x * 2.5}deg) rotateX(${current.y * -2.5}deg) translate3d(${current.x * -8}px, ${current.y * -6}px, 0)`;
        }
        if (floatingPillRef.current) {
          floatingPillRef.current.style.transform = `translateY(-50%) translate3d(${current.x * 12}px, ${current.y * 12}px, 0)`;
        }
      }
      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '92vh',
        width: '100%',
        paddingTop: '6.8rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        backgroundColor: '#FAFAF9'
      }}
      className="bg-blueprint-grid"
    >
      {/* Background Architectural Blueprint Sketch (Left Watermark) */}
      <svg
        style={{
          position: 'absolute',
          left: '0',
          top: '6%',
          width: '320px',
          height: '520px',
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 1
        }}
        viewBox="0 0 320 520"
        fill="none"
        stroke="#0F172A"
        strokeWidth="1.2"
      >
        <rect x="20" y="20" width="280" height="480" strokeDasharray="4 4" />
        <rect x="40" y="40" width="240" height="440" />
        <line x1="40" y1="180" x2="280" y2="180" />
        <line x1="40" y1="320" x2="280" y2="320" />
        <line x1="160" y1="40" x2="160" y2="320" />
        <line x1="200" y1="320" x2="200" y2="480" />
        <path d="M 160 180 A 30 30 0 0 1 190 210" strokeDasharray="2 2" />
        <path d="M 40 320 A 30 30 0 0 1 70 350" strokeDasharray="2 2" />
        <line x1="10" y1="40" x2="10" y2="480" />
        <line x1="5" y1="40" x2="15" y2="40" />
        <line x1="5" y1="480" x2="15" y2="480" />
        <text x="12" y="260" fontSize="10" fontFamily="monospace" fill="#0F172A" transform="rotate(-90 12 260)">14.80 m</text>
        <line x1="40" y1="505" x2="280" y2="505" />
        <line x1="40" y1="500" x2="40" y2="510" />
        <line x1="280" y1="500" x2="280" y2="510" />
        <text x="160" y="502" fontSize="10" fontFamily="monospace" fill="#0F172A" textAnchor="middle">8.60 m</text>
      </svg>

      {/* Decorative Gold Wavy Contour Curves (Bottom Left) */}
      <svg
        style={{
          position: 'absolute',
          left: '-40px',
          bottom: '20px',
          width: '420px',
          height: '240px',
          opacity: 0.28,
          pointerEvents: 'none',
          zIndex: 1
        }}
        viewBox="0 0 420 240"
        fill="none"
        stroke="#B38E5D"
        strokeWidth="1.2"
      >
        <path d="M 0 160 Q 120 100 280 180 T 420 220" />
        <path d="M 0 185 Q 140 125 300 205 T 420 245" />
        <path d="M 0 210 Q 160 150 320 230 T 420 270" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Genuine Business Context Top Ribbon */}
        <div
          className="desktop-only"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#64748B',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBottom: '1.5rem'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} className="text-gold" /> RAMANATHAPURAM, TAMIL NADU
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={13} className="text-gold" /> DESIGN · ENGINEERING · BUILD
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Building2 size={13} className="text-gold" /> TURNKEY HOME SOLUTIONS
          </span>
        </div>

        {/* Main 2-Column Split Hero Layout */}
        <div className="hero-v2-grid">
          {/* Left Column: Editorial & Conversion */}
          <div ref={leftColRef} style={{ textAlign: 'left' }}>
            {/* Eyebrow Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(179, 142, 93, 0.45)',
                padding: '0.35rem 1.15rem',
                borderRadius: '30px',
                marginBottom: '0.85rem',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  fontWeight: 800
                }}
              >
                PREMIUM CONSTRUCTION SOLUTIONS
              </span>
            </div>

            {/* Primary H1 with 4 Kinetic Masked Lines */}
            <h1
              className="hero-headline"
              style={{
                fontSize: 'clamp(2.1rem, 3.4vw, 3.45rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '0.9rem',
                color: '#0F172A'
              }}
            >
              <span className="hero-line-mask">
                <span ref={line1Ref} className="hero-line-inner" style={{ color: '#0F172A' }}>
                  BUILD YOUR
                </span>
              </span>
              <span className="hero-line-mask">
                <span ref={line2Ref} className="hero-line-inner hero-gold-gradient" style={{ color: 'var(--accent-gold)' }}>
                  DREAM HOME
                </span>
              </span>
              <span className="hero-line-mask">
                <span ref={line3Ref} className="hero-line-inner" style={{ color: '#0F172A' }}>
                  FROM VISION
                </span>
              </span>
              <span className="hero-line-mask">
                <span ref={line4Ref} className="hero-line-inner hero-gold-gradient" style={{ color: 'var(--accent-gold)' }}>
                  TO REALITY.
                </span>
              </span>
            </h1>

            {/* Supporting Statement */}
            <p
              ref={subtitleRef}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                fontWeight: 400,
                maxWidth: '520px',
                marginBottom: '1.65rem'
              }}
            >
              Architectural design, structural engineering and professional home construction — thoughtfully crafted to turn your dreams into reality in <strong style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Ramanathapuram</strong> and beyond.
            </p>

            {/* Call-to-Action Group */}
            <div
              ref={ctaGroupRef}
              style={{
                display: 'flex',
                gap: '1.15rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1.85rem'
              }}
            >
              <Link
                to="/contact"
                className="btn-primary btn-primary-sheen"
                style={{
                  padding: '1.05rem 2.25rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '6px',
                  boxShadow: '0 10px 25px rgba(179, 142, 93, 0.35)'
                }}
              >
                START YOUR DREAM
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="btn-secondary"
                style={{
                  padding: '1.05rem 2rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid rgba(15, 23, 42, 0.15)',
                  borderRadius: '6px'
                }}
              >
                EXPLORE PROJECTS
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Trust & Social Proof Bar */}
            <div
              ref={socialProofRef}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                paddingTop: '0.5rem'
              }}
            >
              {/* 3 Happy Clients Avatars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <img
                  src="/images/avatars-group.png"
                  alt="Build My Dream Happy Homeowners"
                  style={{ height: '40px', objectFit: 'contain', borderRadius: '20px' }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', color: '#0F172A', lineHeight: 1.1 }}>
                    200+
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    Happy Clients Across Ramanathapuram
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(15, 23, 42, 0.12)' }} className="desktop-only" />

              {/* Google Reviews */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', color: '#0F172A', lineHeight: 1.1 }}>
                    4.9/5
                  </span>
                  <div style={{ display: 'flex', color: '#F59E0B', fontSize: '0.85rem' }}>
                    ★★★★★
                  </div>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                  Google Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Architectural Villa Showcase */}
          <div ref={rightColRef} style={{ position: 'relative' }}>
            <div ref={villaCardRef} className="hero-villa-card">
              <img
                src="/images/hero-villa-luxury.jpg"
                alt="Contemporary Luxury Villa Architecture in Ramanathapuram"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '430px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Subtle Ambient Vignette Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.3) 0%, transparent 40%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Floating Dark Glass Vertical Feature Badge */}
              <div
                ref={floatingPillRef}
                className="desktop-only"
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.82)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '1.15rem 0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  zIndex: 10,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
                  minWidth: '85px'
                }}
              >
                {/* Feature 1: Quality Assured */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                  <ShieldCheck size={18} color="#B38E5D" />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.15 }}>
                    QUALITY<br />ASSURED
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />

                {/* Feature 2: Expert Team */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                  <Users size={18} color="#B38E5D" />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.15 }}>
                    EXPERT<br />TEAM
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />

                {/* Feature 3: On-Time Delivery */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                  <Clock size={18} color="#B38E5D" />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.15 }}>
                    ON-TIME<br />DELIVERY
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />

                {/* Feature 4: Sustainable Building */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                  <Leaf size={18} color="#B38E5D" />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.15 }}>
                    SUSTAINABLE<br />BUILDING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating 5-Metric Pill Ribbon */}
        <div ref={bottomBarRef} className="hero-metrics-pill" style={{ marginTop: '2.25rem' }}>
          {/* Metric 1: Homes Built */}
          <div className="hero-metric-item">
            <div className="hero-icon-badge-dark">
              <Home size={22} />
            </div>
            <div>
              <div ref={stat1Ref} style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1 }}>
                100+
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                HOMES BUILT
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Custom luxury residences in Tamil Nadu
              </div>
            </div>
          </div>

          {/* Metric 2: Laser Accuracy */}
          <div className="hero-metric-item">
            <div className="hero-icon-badge-gold">
              <Target size={22} />
            </div>
            <div>
              <div ref={stat2Ref} style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1 }}>
                ±1.5 mm
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                LASER ACCURACY
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Total Station & digital alignment for precision
              </div>
            </div>
          </div>

          {/* Metric 3: On-Time Handover */}
          <div className="hero-metric-item">
            <div className="hero-icon-badge-dark">
              <CalendarCheck size={22} />
            </div>
            <div>
              <div ref={stat3Ref} style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1 }}>
                100%
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                ON-TIME HANDOVER
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Guaranteed project milestone dates
              </div>
            </div>
          </div>

          {/* Metric 4: Structural Warranty */}
          <div className="hero-metric-item">
            <div className="hero-icon-badge-gold">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div ref={stat4Ref} style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1 }}>
                25-Year
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                STRUCTURAL WARRANTY
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Long-term stability and peace of mind
              </div>
            </div>
          </div>

          {/* Metric 5: Zero Compromises */}
          <div className="hero-metric-item">
            <div className="hero-icon-badge-dark">
              <Diamond size={22} />
            </div>
            <div>
              <div ref={stat5Ref} style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1 }}>
                0
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                COMPROMISES
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
                On safety, quality and transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
