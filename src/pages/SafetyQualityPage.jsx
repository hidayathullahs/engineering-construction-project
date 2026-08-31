import React from 'react';
import { SAFETY_QUALITY_DATA } from '../data/safetyQualityData';
import { ShieldCheck, CheckCircle2, Award, FileCheck2, HardHat } from 'lucide-react';

export function SafetyQualityPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Zero-Harm Discipline</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            SAFETY GOVERNANCE & <br />
            <span className="text-gold">QUALITY ASSURANCE.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            {SAFETY_QUALITY_DATA.subtitle}
          </p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
            {SAFETY_QUALITY_DATA.stats.map((st, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  {st.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {SAFETY_QUALITY_DATA.protocols.map((proto) => (
              <div
                key={proto.id}
                className="hud-border glass-card"
                style={{
                  padding: '3rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
                    PROTOCOL {proto.number}
                  </span>
                  <ShieldCheck size={22} className="text-gold" />
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>
                  {proto.title}
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {proto.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                  {proto.audits.map((audit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#0F172A', fontWeight: 500 }}>
                      <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                      <span>{audit}</span>
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
