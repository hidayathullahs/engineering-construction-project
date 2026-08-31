import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Wind, Thermometer, Radio, Activity, Clock } from 'lucide-react';

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
          filter: 'contrast(120%) grayscale(20%)',
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.04)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />

      {/* Vignette & Contrast Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(250,250,249,0.92) 0%, rgba(250,250,249,0.4) 50%, rgba(250,250,249,0.98) 100%), radial-gradient(circle at center, transparent 30%, rgba(250,250,249,0.85) 100%)'
        }}
      />

      {/* Corner Blueprint Coordinates */}
      <div style={{ position: 'absolute', top: '5.5rem', left: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 600, pointerEvents: 'none' }}>
        + LAT 37°46'29"N
      </div>
      <div style={{ position: 'absolute', top: '5.5rem', right: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 600, pointerEvents: 'none' }}>
        + LONG 122°25'10"W
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
            <span style={{ fontWeight: 700 }}>SITE SENSORS: ONLINE</span>
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
          <span className="text-gold" style={{ fontWeight: 700 }}>AQI 14 (OPTIMAL)</span>
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
          <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700 }}>
            International Engineering & Infrastructure Group
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
          BUILDING WHAT THE <br />
          <span style={{ color: 'var(--accent-gold)' }}>
            FUTURE STANDS ON.
          </span>
        </h1>

        {/* Supporting Statement */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
            color: 'var(--text-secondary)',
            maxWidth: '840px',
            margin: '0 auto 2.75rem auto',
            lineHeight: 1.65,
            fontWeight: 400
          }}
        >
          Turnkey structural engineering, heavy civil infrastructure, and advanced digital construction delivered with mathematical precision and institutional discipline.
        </p>

        {/* CTA Buttons Group */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href="#construction-journey"
            onClick={scrollToScrubber}
            className="btn-primary"
            style={{ padding: '1.2rem 2.5rem', fontSize: '0.9rem' }}
          >
            Explore Construction Time-Lapse
            <ArrowDown size={16} />
          </a>

          <Link
            to="/projects"
            className="btn-secondary"
            style={{ padding: '1.2rem 2.5rem', fontSize: '0.9rem' }}
          >
            View Landmark Portfolio
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Quick Highlights Bar with Crisp White Card */}
        <div
          style={{
            marginTop: '4.5rem',
            padding: '1.75rem 2rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderTop: '2px solid var(--accent-gold)',
            borderRadius: '4px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.75rem',
            textAlign: 'left',
            boxShadow: '0 16px 36px rgba(15, 23, 42, 0.06)'
          }}
        >
          <div style={{ transition: 'transform 0.3s ease' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>GLOBAL DELIVERIES</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>150+ Landmarks</div>
          </div>
          <div style={{ transition: 'transform 0.3s ease' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>STRUCTURAL TOLERANCE</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-gold)' }}>±1.5 mm Laser Precision</div>
          </div>
          <div style={{ transition: 'transform 0.3s ease' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>SAFETY GOVERNANCE</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>100% Zero-Harm</div>
          </div>
          <div style={{ transition: 'transform 0.3s ease' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>DIGITAL BIM TWIN</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-gold)' }}>LOD 500 As-Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}
