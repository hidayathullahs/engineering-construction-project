import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { StructuralModelViewer } from '../components/3d/StructuralModelViewer';
import { TECHNOLOGY_DATA } from '../data/technologyData';
import { Cpu, Layers, Activity, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function TechnologyPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Structural BIM & Engineering Technology | Build My Dream"
        description="Explore our 5D parametric BIM, interactive 3D structural simulations, and sub-millimeter laser geomatics for precision home building in Ramanathapuram."
        canonicalUrl="https://buildmydream.in/technology"
      />

      {/* Hero */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Digital Precision & Computational Physics</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            BIM 5D, DIGITAL TWINS & <br />
            <span className="text-gold">COMPUTATIONAL SIMULATION.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            We eliminate construction uncertainty through sub-millimeter LiDAR point clouds, 5D parametric BIM, non-linear seismic FEA modeling, and live IoT structural telemetry.
          </p>
        </div>
      </section>

      {/* Interactive 3D BIM Viewer Section (100% PRESERVED IMMUTABLE) */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Interactive Digital Model</div>
          <h2 className="section-title" style={{ marginBottom: '1rem', color: '#0F172A' }}>BIM 5D SKELETAL SIMULATOR</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Interact directly with our parametric structural framework below. Toggle layers or activate FEA stress simulations to visualize load dissipation.
          </p>
          <StructuralModelViewer />
        </div>
      </section>

      {/* Deep Dive Pillars */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {TECHNOLOGY_DATA.map((tech) => (
              <div
                key={tech.id}
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
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span className="tech-tag" style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', borderColor: 'rgba(179, 142, 93, 0.4)', fontWeight: 700 }}>{tech.code}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{tech.category}</span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#0F172A' }}>
                    {tech.title}
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {tech.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {tech.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#0F172A', fontWeight: 500 }}>
                        <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Card */}
                <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '4px', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    Performance Telemetry
                  </div>
                  {tech.stats.map((st, i) => (
                    <div key={i} style={{ borderBottom: i < tech.stats.length - 1 ? '1px solid rgba(15, 23, 42, 0.08)' : 'none', paddingBottom: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                        {st.value}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '0.2rem', fontWeight: 600 }}>
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
