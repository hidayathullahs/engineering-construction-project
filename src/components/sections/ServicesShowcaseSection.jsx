import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export function ServicesShowcaseSection() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow">Our Practices & Expertise</div>
          <h2 className="section-title" style={{ color: '#0F172A' }}>RESIDENTIAL ARCHITECTURE & CONSTRUCTION</h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Comprehensive turnkey dream-home solutions: architectural design, structural engineering, custom construction, interiors, and landscaping.
          </p>
        </div>

        {/* Dual Column Layout: Left List + Right Interactive Preview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
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
                    background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                    border: isSelected ? '1px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.1)',
                    borderLeft: isSelected ? '4px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isSelected ? '0 8px 24px rgba(179, 142, 93, 0.15)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
                      {srv.number}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: isSelected ? '#0F172A' : '#475569' }}>
                      {srv.title}
                    </span>
                  </div>
                  <ChevronRight size={18} color={isSelected ? 'var(--accent-gold)' : '#94a3b8'} />
                </div>
              );
            })}
          </div>

          {/* Right Live Preview Panel */}
          <div
            className="hud-border glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '6px',
              position: 'sticky',
              top: '6.5rem',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="eyebrow" style={{ color: 'var(--accent-gold)', marginBottom: 0 }}>
                Practice {activeService.number} // {activeService.stats.metric}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, background: 'rgba(179, 142, 93, 0.12)', padding: '0.3rem 0.65rem', borderRadius: '3px' }}>
                {activeService.stats.timeline}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
              {activeService.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {activeService.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.25rem' }}>
              {activeService.capabilities.map((cap, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 500 }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <Link
              to={`/services#${activeService.slug}`}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.95rem', fontWeight: 700 }}
            >
              Explore Full {activeService.title} Scope
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
