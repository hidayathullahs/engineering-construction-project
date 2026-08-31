import React from 'react';

export function KeyMetricsSection() {
  const metrics = [
    {
      num: '25+',
      label: 'YEARS EXPERIENCE',
      detail: 'Pioneering heavy civil engineering and contemporary luxury architecture.'
    },
    {
      num: '150+',
      label: 'COMPLETED PROJECTS',
      detail: 'Towers, viaducts, cleanrooms, transit hubs, and private luxury estates.'
    },
    {
      num: '40+',
      label: 'CHARTERED ENGINEERS',
      detail: 'Licensed structural, geotechnical, and computational BIM professionals.'
    },
    {
      num: '100%',
      label: 'ZERO-HARM RECORD',
      detail: 'Rigorous daily safety governance across all heavy excavation and rigging sites.'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                borderLeft: '2px solid var(--accent-gold)',
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
                  fontWeight: 800,
                  color: 'var(--text-primary)',
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
                  fontWeight: 600
                }}
              >
                {m.label}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
