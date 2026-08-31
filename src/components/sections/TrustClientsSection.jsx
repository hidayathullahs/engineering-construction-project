import React from 'react';

export function TrustClientsSection() {
  const partners = [
    { name: 'National Infrastructure Authority', label: 'Governmental & Civil Partner' },
    { name: 'Apex Capital Properties', label: 'Commercial Real Estate Partner' },
    { name: 'Metropolitan Transit Council', label: 'Public Transportation Partner' },
    { name: 'Foster + Partners Studio', label: 'Architectural Collaborator' },
    { name: 'Zaha Hadid Design Group', label: 'Parametric Engineering Partner' },
    { name: 'Solaria Bio-Tech REIT', label: 'Life Sciences Development' }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Institutional Trust</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>
            TRUSTED BY LEADING DEVELOPERS, INSTITUTIONS & AUTHORITIES
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="hud-border glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                borderRadius: '4px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.35rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: '#0F172A' }}>
                {p.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
