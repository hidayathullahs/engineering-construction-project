import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, CheckCircle2, Shield, Layers, Award } from 'lucide-react';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Back Link Bar */}
      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/projects"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600 }}
          >
            <ArrowLeft size={14} /> Back to Projects Catalog
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
            PROJECT CASE STUDY // {project.category.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">{project.category} Architecture & Structural Engineering</div>
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
            <span className="text-gold" style={{ fontWeight: 700 }}>SCALE: {project.scale}</span>
          </div>

          {/* Main Hero Image with HUD Border */}
          <div className="hud-border" style={{ borderRadius: '4px', overflow: 'hidden', height: 'clamp(350px, 55vh, 600px)', boxShadow: '0 20px 48px rgba(15, 23, 42, 0.1)' }}>
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
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginTop: '0.25rem' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Structural System */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {/* Left: Overview */}
            <div>
              <div className="eyebrow">Project Overview</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                ARCHITECTURAL & ENGINEERING BRIEF
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.overview}
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '4px', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.35rem', fontWeight: 700 }}>
                  STRUCTURAL CONFIGURATION
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
                  {project.structuralSystem}
                </div>
              </div>
            </div>

            {/* Right: Challenge vs Solution */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  The Engineering Challenge
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {project.challenge}
                </p>
              </div>

              <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  The Vertex Engineering Solution
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Scope Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Scope of Delivery */}
            <div>
              <div className="eyebrow">Turnkey Delivery</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                Scope of Engineering Works
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.scope.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#0F172A', fontWeight: 500 }}>
                    <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Applied */}
            <div>
              <div className="eyebrow">Digital Precision</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                Applied Technologies & Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag" style={{ fontSize: '0.82rem', padding: '0.5rem 1rem', background: '#FFFFFF', borderColor: 'rgba(15, 23, 42, 0.12)', color: '#0F172A', fontWeight: 600 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Photographic & Construction Gallery */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Visual Documentation</div>
          <h2 className="section-title" style={{ marginBottom: '2.5rem', color: '#0F172A' }}>PROJECT CHRONICLE & GALLERY</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {project.gallery.map((img, idx) => (
              <div key={idx} className="hud-border glass-card img-zoom-wrap" style={{ borderRadius: '4px', overflow: 'hidden' }}>
                <img
                  src={img.url}
                  alt={img.caption}
                  style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem', background: '#FFFFFF', borderTop: '1px solid rgba(15, 23, 42, 0.08)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
