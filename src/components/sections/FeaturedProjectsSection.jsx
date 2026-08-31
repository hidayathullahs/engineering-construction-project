import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../data/projectsData';
import { ArrowUpRight, MapPin, Calendar, Layers, Sparkles } from 'lucide-react';

export function FeaturedProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="eyebrow">Portfolio Showcase</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>BUILT WITH PURPOSE.</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              Explore our signature residential villas, luxury dream homes, and contemporary architectural estates.
            </p>
          </div>

          <Link to="/projects" className="btn-secondary" style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid rgba(15, 23, 42, 0.15)' }}>
            View All Projects ({PROJECTS_DATA.length})
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1rem' }}>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--accent-gold)' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#475569',
                border: activeCategory === cat ? '1px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.12)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '0.55rem 1.25rem',
                borderRadius: '3px',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(179, 142, 93, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="hud-border glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '6px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.35s ease'
              }}
            >
              {/* Image Container with Zoom Effect */}
              <div className="img-zoom-wrap" style={{ height: '260px', position: 'relative' }}>
                <img
                  src={project.cardImage}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Reference ID Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '2px',
                    fontWeight: 700
                  }}
                >
                  {project.ref}
                </div>

                {/* Category Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    background: '#FFFFFF',
                    color: 'var(--accent-gold)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '2px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} className="text-gold" /> {project.location}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} className="text-gold" /> {project.year}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.overview}
                </p>

                {/* Bottom Footer Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {project.builtArea}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                    Case Study <ArrowUpRight size={14} className="text-gold" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
