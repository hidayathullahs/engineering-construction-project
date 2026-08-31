import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Building2, ShieldCheck, Compass } from 'lucide-react';

export function HeroCinematic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  const scrollToScrubber = (e) => {
    e.preventDefault();
    const el = document.getElementById('construction-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '94vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        backgroundColor: '#FAFAF9'
      }}
      className="bg-blueprint-grid"
    >
      {/* Background Architectural Image with Interactive Parallax */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          backgroundImage: 'url(/frames/ezgif-frame-300.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.16,
          filter: 'contrast(110%) grayscale(10%)',
          transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px) scale(1.03)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />

      {/* Vignette & Contrast Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(250,250,249,0.92) 0%, rgba(250,250,249,0.5) 50%, rgba(250,250,249,0.98) 100%), radial-gradient(circle at center, transparent 30%, rgba(250,250,249,0.85) 100%)'
        }}
      />

      {/* Genuine Business Context Badges (Top Bar) */}
      <div
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
        {/* Eyebrow Pill Badge */}
        <div
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
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)'
          }}
        >
          <Sparkles size={14} className="text-gold" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 800 }}>
            BUILD MY DREAM · RAMANATHAPURAM
          </span>
        </div>

        {/* Single Primary H1 for Local Search Dominance */}
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
          BUILD YOUR DREAM HOME <br />
          <span style={{ color: 'var(--accent-gold)' }}>
            FROM VISION TO REALITY.
          </span>
        </h1>

        {/* Supporting Statement */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.65,
            fontWeight: 400
          }}
        >
          Design, engineering and construction solutions for homeowners looking to build thoughtfully designed, high-quality homes in <strong style={{ color: '#0F172A', fontWeight: 600 }}>Ramanathapuram</strong> and surrounding service areas.
        </p>

        {/* Call-to-Action Group */}
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <Link
            to="/contact"
            className="btn-primary"
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

        {/* Metrics & Guarantees Ribbon */}
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
          <div className="glass-card hud-border" style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.95)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A' }}>
              100+
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              Homes Built
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Custom luxury residences in Tamil Nadu
            </div>
          </div>

          <div className="glass-card hud-border" style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.95)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A' }}>
              ±1.5 mm
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              Laser Accuracy
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Total Station & digital alignment
            </div>
          </div>

          <div className="glass-card hud-border" style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.95)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A' }}>
              100%
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.2rem' }}>
              On-Time Handover
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>
              Guaranteed project milestone dates
            </div>
          </div>

          <div className="glass-card hud-border" style={{ padding: '1.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.95)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A' }}>
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
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#construction-journey"
        onClick={scrollToScrubber}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700,
          zIndex: 10
        }}
      >
        <span>Explore Construction Journey</span>
        <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid rgba(179, 142, 93, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', animation: 'bounce 2s infinite' }}>
          <ArrowDown size={12} />
        </div>
      </a>
    </section>
  );
}
