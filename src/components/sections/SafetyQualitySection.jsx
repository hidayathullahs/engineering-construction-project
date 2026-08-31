import React from 'react';
import { Link } from 'react-router-dom';
import { SAFETY_QUALITY_DATA } from '../../data/safetyQualityData';
import { ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function SafetyQualitySection() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left Narrative */}
          <div>
            <div className="eyebrow">Zero-Harm Discipline</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
              BUILT WITH PRECISION. <br />
              <span className="text-gold">DELIVERED WITH DISCIPLINE.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {SAFETY_QUALITY_DATA.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {SAFETY_QUALITY_DATA.protocols.map((proto) => (
                <div key={proto.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 800, marginTop: '2px' }}>
                    {proto.number}
                  </span>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0F172A' }}>
                      {proto.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {proto.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/safety-quality" className="btn-secondary">
              Review Safety Protocols & Certifications
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right Metrics Grid */}
          <div className="hud-border glass-card" style={{ padding: '3rem 2.5rem', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1.25rem' }}>
              <ShieldCheck size={24} className="text-gold" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Quality & Safety Governance</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>ISO 45001:2018 & ISO 9001:2015 AUDITED</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {SAFETY_QUALITY_DATA.stats.map((st, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-gold)', lineHeight: 1 }}>
                    {st.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase' }}>
                    {st.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
