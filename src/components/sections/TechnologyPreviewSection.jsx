import React from 'react';
import { Link } from 'react-router-dom';
import { StructuralModelViewer } from '../3d/StructuralModelViewer';
import { TECHNOLOGY_DATA } from '../../data/technologyData';
import { ArrowUpRight, Cpu, Layers, Activity, Eye } from 'lucide-react';

export function TechnologyPreviewSection() {
  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="eyebrow">Digital Craft & Computational Engineering</div>
            <h2 className="section-title">ADVANCED TECHNOLOGY & BIM 5D</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              We merge architectural physical construction with real-time computational modeling, finite-element simulation, and autonomous drone geomatics.
            </p>
          </div>

          <Link to="/technology" className="btn-secondary">
            Explore All Technologies
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 3D Interactive Model Viewer (PERMANENT IMMUTABLE BIM 5D SKELETON) */}
        <div style={{ marginBottom: '3.5rem' }}>
          <StructuralModelViewer />
        </div>

        {/* 4 Tech Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {TECHNOLOGY_DATA.map((tech) => (
            <div
              key={tech.id}
              className="hud-border glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="tech-tag" style={{ color: 'var(--accent-gold)', borderColor: 'rgba(197, 168, 128, 0.3)', fontWeight: 600 }}>{tech.code}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{tech.category}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                  {tech.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {tech.tagline}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
                {tech.stats.slice(0, 2).map((st, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{st.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--accent-gold)', fontWeight: 700 }}>{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
