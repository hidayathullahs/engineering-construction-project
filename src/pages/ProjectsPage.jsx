import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/projectsData';
import { ArrowUpRight, MapPin, Calendar, Search } from 'lucide-react';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PROJECTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.overview && p.overview.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Portfolio Directory</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            FEATURED <br />
            <span className="text-gold">DREAM HOMES & VILLAS.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Explore our curated portfolio of bespoke residential architecture, contemporary hillside estates, luxury waterfront villas, and heritage transformations.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1.75rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'var(--accent-gold)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                  border: selectedCategory === cat ? '1px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.12)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  boxShadow: selectedCategory === cat ? '0 4px 12px rgba(179, 142, 93, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-gold)' }} />
            <input
              type="text"
              placeholder="Search homes, location, style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: '#FFFFFF',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                borderRadius: '3px',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                color: '#0F172A',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {filtered.map((project) => (
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
                  color: 'inherit'
                }}
              >
                <div className="img-zoom-wrap" style={{ height: '260px', position: 'relative' }}>
                  <img src={project.cardImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(10px)', color: '#FFFFFF', padding: '0.3rem 0.65rem', borderRadius: '2px', fontWeight: 700 }}>
                    {project.ref}
                  </div>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', background: '#FFFFFF', color: 'var(--accent-gold)', padding: '0.35rem 0.75rem', borderRadius: '2px', fontWeight: 800, textTransform: 'uppercase', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    {project.categoryLabel}
                  </div>
                </div>

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
    </div>
  );
}
