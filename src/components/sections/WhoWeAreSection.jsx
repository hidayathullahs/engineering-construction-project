import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Sparkles, Home } from 'lucide-react';

export function WhoWeAreSection() {
  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left Editorial Content */}
          <div>
            <div className="eyebrow">Our Philosophy & Craft</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
              YOUR HOME. <br />
              YOUR VISION. <br />
              <span className="text-gold">OUR CRAFT.</span>
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 500 }}>
              Every home begins with an idea. We help turn that idea into a carefully planned, professionally engineered and beautifully built reality.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              At <strong>BUILD MY DREAM</strong>, we believe building your home should be an inspiring and transparent journey. By uniting visionary residential architects, structural engineers, master craftsmen, and dedicated project managers under one roof, we eliminate stress and deliver timeless architectural living.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Design-First Architecture</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Tailored to your lifestyle & light</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Engineering Precision</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Seismic FEA structural modeling</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Master Craftsmanship</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Artisanal joinery & stone finishes</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Fixed-Cost & Timeline</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Zero hidden surprises or delays</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontWeight: 700 }}>
                Learn Our Story
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary" style={{ padding: '0.85rem 1.75rem', background: '#FFFFFF', color: '#0F172A', border: '1px solid rgba(15, 23, 42, 0.15)' }}>
                Our Capabilities
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Visual Bento Presentation */}
          <div style={{ position: 'relative' }}>
            <div className="img-zoom-wrap" style={{ borderRadius: '8px', overflow: 'hidden', height: '480px', border: '1px solid rgba(15, 23, 42, 0.1)', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)' }}>
              <img
                src="/frames/ezgif-frame-300.jpg"
                alt="Build My Dream Luxury Villa Architecture"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Official Brand Badge Inset */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.65rem 1rem',
                border: '1px solid rgba(179, 142, 93, 0.35)',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <img src="/logo.png" alt="Build My Dream Insignia" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase' }}>Official Brand</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, color: '#0F172A' }}>Build My Dream</div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-1.5rem',
                padding: '1.5rem 2rem',
                borderRadius: '6px',
                maxWidth: '300px',
                border: '1px solid rgba(179, 142, 93, 0.4)',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Sparkles size={20} className="text-gold" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
                  Single-Source Turnkey
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.3 }}>
                From Soil to Keys Handover
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
