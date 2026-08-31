import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function IndustriesPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Sector Capabilities</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            CROSS-INDUSTRY <br />
            <span className="text-gold">ENGINEERING SOLUTIONS.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            From super-tall commercial towers and ultra-luxury residences to coastal transit viaducts and pharmaceutical cleanrooms, we deliver specialized sector engineering.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div
                key={ind.id}
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
                <div className="img-zoom-wrap" style={{ height: '300px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src={ind.image} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div>
                  <div className="eyebrow">Sector 0{idx + 1}</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#0F172A' }}>
                    {ind.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {ind.description}
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '2rem', fontWeight: 700 }}>
                    BENCHMARK: {ind.keyStats}
                  </div>
                  <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                    Consult with Sector Lead
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
