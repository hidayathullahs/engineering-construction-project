import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Compass, Sparkles, Building2, Phone } from 'lucide-react';

export function ServicesPage() {
  const serviceSubroutes = [
    { title: 'House Construction', path: '/services/home-construction', label: 'Civil & Substructure' },
    { title: 'Architectural Design', path: '/services/architectural-design', label: '2D/3D Floorplans' },
    { title: 'Structural Engineering', path: '/services/structural-engineering', label: 'Foundation & FEA' },
    { title: 'Interior Design', path: '/services/interior-design', label: 'Modular & Finishes' },
    { title: 'Turnkey Construction', path: '/services/turnkey-construction', label: 'End-to-End Delivery' },
    { title: 'Home Renovation', path: '/services/renovation', label: 'Extensions & Retrofit' }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Home Construction Services in Ramanathapuram | Build My Dream"
        description="Comprehensive residential home building, architectural design, structural engineering, and turnkey construction services in Ramanathapuram, Tamil Nadu."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/services"
      />

      {/* Hero Header */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Turnkey Residential Practices</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            HOME CONSTRUCTION SERVICES IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            From initial plot soil investigation and architectural blueprints to structural engineering, turnkey construction, and interior styling—we deliver seamless single-source excellence.
          </p>

          {/* Quick Sub-Service Jump Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
            {serviceSubroutes.map((sub, idx) => (
              <Link
                key={idx}
                to={sub.path}
                className="hud-border"
                style={{
                  padding: '0.65rem 1.2rem',
                  borderRadius: '30px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                }}
              >
                <span>{sub.title}</span>
                <ArrowUpRight size={13} className="text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Comprehensive Practices Catalog */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {SERVICES_DATA.map((svc) => (
              <div
                key={svc.id}
                className="hud-border glass-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="tech-tag" style={{ color: 'var(--accent-gold)', borderColor: 'rgba(179, 142, 93, 0.3)', fontWeight: 800 }}>
                      PRACTICE 0{svc.id}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      {svc.category}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {svc.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    {svc.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: '#0F172A', fontWeight: 600 }}>
                        <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-gold)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 800
                    }}
                  >
                    Request Consultation <ArrowUpRight size={14} />
                  </Link>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>
                    TAMIL NADU SPEC
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Tailored Construction Proposals</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', margin: '0.75rem 0 1.25rem 0' }}>
            LET'S DISCUSS YOUR HOUSE PLAN
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Connect with our residential engineering team for detailed feasibility reports, cost estimators, and site visits in Ramanathapuram.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem', fontWeight: 800 }}>
              Start Your Dream Home <ArrowUpRight size={18} />
            </Link>
            <a
              href="tel:+916385740155"
              className="btn-secondary"
              style={{ padding: '1.1rem 2.25rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Phone size={16} className="text-gold" /> Call +91 63857 40155
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
