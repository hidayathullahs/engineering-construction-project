import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

export function ServicesShowcaseSection() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow">Institutional Practices</div>
          <h2 className="section-title">ENGINEERING & CONSTRUCTION SERVICES</h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Comprehensive turnkey engineering, structural modeling, geotechnical shoring, and general contracting capabilities.
          </p>
        </div>

        {/* Dual Column Layout: Left List + Right Interactive Preview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
          {/* Left Service Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {SERVICES_DATA.map((srv) => {
              const isSelected = activeService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveService(srv)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: isSelected ? 'linear-gradient(135deg, rgba(27, 35, 45, 0.95) 0%, rgba(14, 20, 27, 0.95) 100%)' : 'rgba(11, 15, 20, 0.45)',
                    border: isSelected ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                    borderLeft: isSelected ? '4px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isSelected ? '0 12px 28px rgba(0, 0, 0, 0.4), 0 0 15px rgba(197, 168, 128, 0.1)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(20, 26, 33, 0.85)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(11, 15, 20, 0.45)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isSelected ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 700 }}>
                      {srv.number}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: isSelected ? '#FFF' : 'var(--text-secondary)' }}>
                      {srv.title}
                    </span>
                  </div>
                  <ChevronRight size={18} color={isSelected ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                </div>
              );
            })}
          </div>

          {/* Right Active Service Preview Panel */}
          <div className="hud-border glass-card" style={{ padding: '2.5rem', borderRadius: '4px', position: 'sticky', top: '6rem' }}>
            <div className="img-zoom-wrap" style={{ position: 'relative', height: '240px', overflow: 'hidden', borderRadius: '2px', marginBottom: '1.75rem' }}>
              <img
                src={activeService.image}
                alt={activeService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(11,15,20,0.9)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', border: '1px solid rgba(197, 168, 128, 0.4)' }}>
                PRACTICE {activeService.number}
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#FFF' }}>
              {activeService.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {activeService.description}
            </p>

            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>
                Key Technical Capabilities
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeService.capabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} className="text-gold" style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                TRACK RECORD: <span style={{ color: '#FFF', fontWeight: 600 }}>{activeService.metrics.completed || activeService.metrics.projectsDelivered || 'Institutional Level'}</span>
              </div>
              <Link to="/services" className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem' }}>
                Full Practice Specs
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
