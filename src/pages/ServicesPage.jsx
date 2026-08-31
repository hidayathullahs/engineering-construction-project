import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { CheckCircle2, ArrowUpRight, Wrench, Shield, Sparkles } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Turnkey Home Solutions</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            ARCHITECTURAL & <br />
            <span className="text-gold">CONSTRUCTION PRACTICES.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            From bespoke architectural design and seismic structural engineering to custom construction, luxury interiors, and biophilic landscaping—we deliver complete dream homes with single-source accountability.
          </p>
        </div>
      </section>

      {/* Services Full Catalog */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                id={srv.slug}
                className="hud-border glass-card"
                style={{
                  padding: '3rem',
                  borderRadius: '6px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center'
                }}
              >
                {/* Visual */}
                <div className="img-zoom-wrap" style={{ position: 'relative', height: '320px', borderRadius: '6px', overflow: 'hidden' }}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(179, 142, 93, 0.4)',
                      borderLeft: '3px solid var(--accent-gold)',
                      padding: '0.4rem 0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--accent-gold)'
                    }}
                  >
                    PRACTICE {srv.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {srv.subtitle}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A' }}>
                    {srv.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {srv.capabilities.map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: '#0F172A', fontWeight: 500 }}>
                        <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      TIMELINE: {srv.stats.timeline}
                    </span>
                    <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontWeight: 700 }}>
                      Inquire About {srv.title}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
