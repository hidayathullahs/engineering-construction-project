import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { SUSTAINABILITY_DATA } from '../data/sustainabilityData';
import { Leaf, Recycle, Wind, Droplets, CheckCircle2, Award } from 'lucide-react';

export function SustainabilityPage() {
  const icons = [Leaf, Recycle, Wind, Droplets];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Sustainable Home Construction in Tamil Nadu | Build My Dream"
        description="Bioclimatic residential architecture, passive house cooling, low-carbon materials, and solar energy integration for homes in Ramanathapuram, Tamil Nadu."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/sustainability"
      />

      {/* Hero */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Environmental Roadmap & ESG</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            DECARBONIZING THE <br />
            <span className="text-gold">BUILT ENVIRONMENT.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            {SUSTAINABILITY_DATA.subtitle}
          </p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
            {SUSTAINABILITY_DATA.keyMetrics.map((km, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  {km.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {km.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {km.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars Detailed */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SUSTAINABILITY_DATA.pillars.map((pillar, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={pillar.id}
                  className="hud-border glass-card"
                  style={{
                    padding: '3rem',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)' }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700 }}>PILLAR {pillar.number}</div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>{pillar.title}</h2>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-gold)', background: 'rgba(179, 142, 93, 0.1)', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 700 }}>
                      {pillar.stats}
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                    {pillar.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#0F172A', fontWeight: 500 }}>
                        <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
