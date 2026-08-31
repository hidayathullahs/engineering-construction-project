import React from 'react';

export function KeyMetricsSection() {
  const metrics = [
    {
      num: '100+',
      label: 'HOMES BUILT',
      detail: 'Custom luxury residences, villas, and modern family estates.'
    },
    {
      num: '15+',
      label: 'YEARS EXPERIENCE',
      detail: 'Pioneering residential architecture, structural engineering & turnkey construction.'
    },
    {
      num: '50+',
      label: 'DESIGN PROJECTS',
      detail: 'Bespoke contemporary floorplans, 3D CGI visualizations & bioclimatic masterplans.'
    },
    {
      num: '98%',
      label: 'CLIENT SATISFACTION',
      detail: 'Single-source accountability, transparent milestone tracking & on-time handovers.'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  fontWeight: 800
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5
                }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
