import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ArrowUpRight, MapPin, Calendar, Layers } from 'lucide-react';

export function FeaturedProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INFRASTRUCTURE', 'INDUSTRIAL', 'PUBLIC'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="eyebrow">Portfolio of Excellence</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>FEATURED LANDMARKS</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              Explore our landmark residential complexes, high-rise commercial towers, and multi-span infrastructure projects.
            </p>
          </div>

          <Link to="/projects" className="btn-secondary">
            View All Projects ({PROJECTS_DATA.length})
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1rem' }}>
          {categories.map((cat) => (
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.25rem' }}>
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              data-cursor="view"
            >
              <div
                className="hud-border glass-card img-zoom-wrap"
                style={{
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Project Image Container */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(179, 142, 93, 0.4)',
                      borderLeft: '3px solid var(--accent-gold)',
                      padding: '0.35rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    {project.category}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.3rem 0.65rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      borderRadius: '2px'
                    }}
                  >
                    REF: 0{idx + 1}
                  </div>
                </div>

                {/* Project Metadata & Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: '#FFFFFF' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} className="text-gold" /> {project.location}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} /> {project.year}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.75rem', color: '#0F172A' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {project.shortDescription}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      {project.scale}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#0F172A', fontWeight: 700 }}>
                      Case Study <ArrowUpRight size={14} className="text-gold" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
