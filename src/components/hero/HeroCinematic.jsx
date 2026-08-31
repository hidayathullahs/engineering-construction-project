import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Wind, Thermometer, Sparkles, Home, Clock, ShieldCheck } from 'lucide-react';

export function HeroCinematic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [liveTime, setLiveTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
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
          opacity: 0.18,
          filter: 'contrast(115%) grayscale(15%)',
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.04)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />

      {/* Vignette & Contrast Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(250,250,249,0.92) 0%, rgba(250,250,249,0.45) 50%, rgba(250,250,249,0.98) 100%), radial-gradient(circle at center, transparent 30%, rgba(250,250,249,0.85) 100%)'
        }}
      />

      {/* Corner Blueprint Coordinates */}
      <div style={{ position: 'absolute', top: '5.5rem', left: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 700, pointerEvents: 'none' }}>
        + ARCHITECTURAL RESIDENCE // 01
      </div>
      <div style={{ position: 'absolute', top: '5.5rem', right: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 700, pointerEvents: 'none' }}>
        + DREAM HOME SPECIFICATION
      </div>

      {/* Floating Top-Right Live Environmental HUD Widget */}
      <div
        style={{
          position: 'absolute',
          top: '6.25rem',
          right: 'clamp(1rem, 3.5vw, 3rem)',
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(179, 142, 93, 0.35)',
          borderTop: '2px solid var(--accent-gold)',
          borderRadius: '4px',
          padding: '0.75rem 1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
          zIndex: 15
        }}
        className="desktop-only"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', color: '#16a34a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block', boxShadow: '0 0 6px #16a34a' }} />
            <span style={{ fontWeight: 700 }}>STUDIO & SITES: ACTIVE</span>
          </div>
          <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={11} className="text-gold" /> {liveTime} UTC
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '0.35rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Thermometer size={12} className="text-gold" /> 21°C
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Wind size={12} className="text-gold" /> 8 kts W
          </span>
          <span className="text-gold" style={{ fontWeight: 700 }}>TURNKEY READY</span>
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
            padding: '0.55rem 1.4rem',
            borderRadius: '30px',
            marginBottom: '1.75rem',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)'
          }}
        >
          <Sparkles size={14} className="text-gold" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 800 }}>
            BUILD MY DREAM • FROM VISION TO REALITY
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
          FROM VISION <br />
          <span style={{ color: 'var(--accent-gold)' }}>
            TO REALITY.
          </span>
        </h1>

        {/* Supporting Statement */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
            color: 'var(--text-secondary)',
            maxWidth: '860px',
            margin: '0 auto 2.75rem auto',
            lineHeight: 1.65,
            fontWeight: 400
          }}
        >
          Designing and building beautiful, thoughtful homes with engineering precision, master craftsmanship, and single-source turnkey accountability.
        </p>

        {/* CTA Buttons Group */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: '1.2rem 2.5rem', fontSize: '0.92rem', fontWeight: 700 }}
          >
            Start Your Dream
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/projects"
            className="btn-secondary"
            style={{ padding: '1.2rem 2.25rem', fontSize: '0.92rem', background: '#FFFFFF', color: '#0F172A', border: '1px solid rgba(15, 23, 42, 0.15)' }}
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Bottom Metrics Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            marginTop: '4.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(15, 23, 42, 0.08)'
          }}
        >
          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '4px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              100+
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0F172A', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>
              Homes Built
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Custom luxury residences
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '4px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              ±1.5 mm
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0F172A', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>
              Laser Accuracy
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Total Station & LiDAR calibrated
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '4px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              100%
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0F172A', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>
              On-Time Handover
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Guaranteed completion dates
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '4px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              25-Year
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0F172A', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>
              Structural Warranty
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Long-term peace of mind
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
