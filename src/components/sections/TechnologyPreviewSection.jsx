import React from 'react';
import { Link } from 'react-router-dom';
import { StructuralModelViewer } from '../3d/StructuralModelViewer';
import { TECHNOLOGY_DATA } from '../../data/technologyData';
import { ArrowUpRight, Cpu, Layers, Activity, Eye, Sparkles } from 'lucide-react';

export function TechnologyPreviewSection() {
  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="eyebrow">Digital Precision & Engineering</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>BIM 5D & 3D COMPUTATIONAL SKELETON</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              We eliminate construction uncertainty through 5D parametric BIM, interactive 3D structural simulations, and sub-millimeter laser geomatics.
            </p>
          </div>

          <Link to="/technology" className="btn-secondary" style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid rgba(15, 23, 42, 0.15)' }}>
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
                  <span className="tech-tag" style={{ color: 'var(--accent-gold)', borderColor: 'rgba(179, 142, 93, 0.3)', fontWeight: 800 }}>{tech.code}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>{tech.category}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                  {tech.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {tech.tagline}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  ACCURACY: {tech.accuracy}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#0F172A', fontWeight: 700 }}>
                  {tech.benchmark}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
