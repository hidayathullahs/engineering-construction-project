import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
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
      <SEOHead
        title="Home Construction Projects in Ramanathapuram | Build My Dream"
        description="Explore custom home construction projects and luxury villas built by Build My Dream in Ramanathapuram, Tamil Nadu. View photos, floorplans, and engineering details."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/projects"
      />

      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Portfolio Directory</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            FEATURED <br />
            <span className="text-gold">DREAM HOMES & VILLAS.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Explore our curated portfolio of bespoke residential architecture, contemporary coastal estates, luxury villas, and heritage transformations across Tamil Nadu.
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
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
            <input
              type="text"
              placeholder="Search by title, style or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                borderRadius: '4px',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad">
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#64748B' }}>
              <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>No projects found matching your search.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="hud-border glass-card img-zoom-wrap"
                  style={{
                    borderRadius: '6px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  {/* Hero Image */}
                  <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.75rem', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 700 }}>
                      {proj.categoryLabel}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', marginBottom: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} className="text-gold" /> {proj.location}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {proj.year}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                      {proj.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {proj.overview}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
                        {proj.builtArea}
                      </div>

                      <Link
                        to={`/projects/${proj.slug}`}
                        className="btn-outline-gold"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', textDecoration: 'none', fontWeight: 700 }}
                      >
                        View Project Case Study <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
