import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { CheckCircle2, ArrowUpRight, Wrench, Shield } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Institutional Practices</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            ENGINEERING & <br />
            <span className="text-gold">CONSTRUCTION SERVICES.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            End-to-end civil engineering, structural design, self-performing construction, and digital asset lifecycle management delivered with uncompromising rigor.
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
                  borderRadius: '4px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center'
                }}
              >
                {/* Visual */}
                <div className="img-zoom-wrap" style={{ position: 'relative', height: '320px', borderRadius: '4px', overflow: 'hidden' }}>
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
                      background: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(179, 142, 93, 0.4)',
                      borderLeft: '3px solid var(--accent-gold)',
                      padding: '0.4rem 0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    PRACTICE {srv.number}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="eyebrow">Practice {srv.number}</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                    {srv.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {srv.description}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 700 }}>
                      Core Capabilities
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {srv.capabilities.map((cap, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#0F172A', fontWeight: 500 }}>
                          <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                    <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                      Engage Practice
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
