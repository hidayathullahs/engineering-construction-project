import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import { ArrowUpRight } from 'lucide-react';

export function IndustriesSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="eyebrow">Cross-Sector Mastery</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>INDUSTRIES & SECTORS WE SHAPE</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              Tailored structural, civil, and EPC construction solutions across high-density urban developments, transport infrastructure, and industrial campuses.
            </p>
          </div>

          <Link to="/industries" className="btn-secondary">
            View All Sectors
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 8 Sector Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="hud-border glass-card img-zoom-wrap"
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={ind.image}
                  alt={ind.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent 60%)' }} />
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: '#FFFFFF' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0F172A' }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {ind.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  {ind.keyStats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
