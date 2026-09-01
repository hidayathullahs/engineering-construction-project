import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, CheckCircle2, Shield, Layers, Award, Sparkles, Home } from 'lucide-react';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS_DATA.find((p) => p.slug === slug) || (slug === 'example-project' ? PROJECTS_DATA[0] : null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title={`${project.title} | Build My Dream Projects`}
        description={`${project.title} - ${project.categoryLabel} residential construction and architectural design in ${project.location}. ${project.overview.slice(0, 140)}...`}
        canonicalUrl={`https://buildmydream-6q5x.onrender.com/projects/${project.slug}`}
      />

      {/* Back Link Bar */}
      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/projects"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <ArrowLeft size={14} /> Back to Projects Catalog
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
            {project.ref} // {project.categoryLabel.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">{project.categoryLabel} Architecture & Construction</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#0F172A' }}>
            {project.title}
          </h1>

          {/* Quick Meta Row */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} className="text-gold" /> {project.location}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} className="text-gold" /> Completed {project.year}
            </span>
            <span>•</span>
            <span className="text-gold" style={{ fontWeight: 800 }}>BUILT AREA: {project.builtArea}</span>
          </div>

          {/* Main Hero Image */}
          <div className="hud-border" style={{ borderRadius: '6px', overflow: 'hidden', height: 'clamp(350px, 55vh, 600px)', boxShadow: '0 20px 48px rgba(15, 23, 42, 0.1)' }}>
            <img
              src={project.heroImage}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {project.metrics.map((m, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', marginTop: '0.25rem' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Design Vision */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {/* Left: Overview */}
            <div>
              <div className="eyebrow">Design Vision</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', color: '#0F172A' }}>
                ARCHITECTURAL & ENGINEERING BRIEF
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.overview}
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '4px', border: '1px solid rgba(179, 142, 93, 0.3)', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.35rem', fontWeight: 800 }}>
                  DESIGN CONCEPT & ELEVATION
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
                  {project.vision}
                </div>
              </div>
            </div>

            {/* Right: Challenges vs Solutions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#dc2626', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  The Architectural Challenge
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.challenges.map((c, idx) => (
                    <div key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      • {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  The Build My Dream Solution
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.solutions.map((s, idx) => (
                    <div key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      • {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Palette Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Materiality & Craft</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', color: '#0F172A' }}>
            Curated Material Specifications
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {project.materials.map((mat, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.25rem 1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#0F172A', fontWeight: 600 }}>{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Visual Documentation</div>
          <h2 className="section-title" style={{ marginBottom: '2.5rem', color: '#0F172A' }}>PROJECT GALLERY</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {project.gallery.map((imgUrl, idx) => (
              <div key={idx} className="hud-border glass-card img-zoom-wrap" style={{ borderRadius: '4px', overflow: 'hidden', height: '260px' }}>
                <img
                  src={imgUrl}
                  alt={`${project.title} gallery view ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: '5rem 0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Custom Dream Home Opportunity</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', margin: '0.75rem 0 1.25rem 0' }}>
            BUILD SOMETHING LIKE THIS.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Let our architects and engineers transform your plot into a contemporary masterpiece tailored to your family.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem', fontWeight: 800 }}>
            Start Your Dream Home <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
