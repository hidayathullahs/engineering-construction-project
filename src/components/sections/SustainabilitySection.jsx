import React from 'react';
import { Link } from 'react-router-dom';
import { SUSTAINABILITY_DATA } from '../../data/sustainabilityData';
import { ArrowUpRight, Leaf, Recycle, Wind, Droplets } from 'lucide-react';

export function SustainabilitySection() {
  const icons = [Leaf, Recycle, Wind, Droplets];

  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="eyebrow">Environmental Stewardship</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>SUSTAINABLE ENGINEERING & ESG</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              {SUSTAINABILITY_DATA.subtitle}
            </p>
          </div>

          <Link to="/sustainability" className="btn-secondary">
            View Decarbonization Roadmap
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {SUSTAINABILITY_DATA.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.id}
                className="hud-border glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '42px', height: '42px', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)' }}>
                      <Icon size={22} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                      {pillar.number}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  {pillar.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Sustainability Metrics Banner */}
        <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {SUSTAINABILITY_DATA.keyMetrics.map((km, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)', lineHeight: 1, marginBottom: '0.35rem' }}>
                {km.value}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase' }}>
                {km.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {km.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
