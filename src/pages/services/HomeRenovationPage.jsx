import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CheckCircle2, ArrowUpRight, Wrench, Phone, ArrowLeft } from 'lucide-react';

export function HomeRenovationPage() {
  const renovationFeatures = [
    'Complete Structural Audit & Load-Bearing Retrofitting',
    'Vertical Floor Extensions & Additional Bedroom Additions',
    'Modern Façade Redesign with Contemporary Glass & Louver Panels',
    'Full Interior Remodeling (Kitchen, Bathrooms, Living Spaces)',
    'Waterproofing Repair & Terrace Thermal Insulation Upgrades',
    'Electrical Rewiring, Plumbing Overhauls & Modern HVAC Integration'
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Home Renovation in Ramanathapuram | Build My Dream"
        description="Comprehensive home renovation, structural retrofitting, and vertical extensions in Ramanathapuram, Tamil Nadu. Modernize your existing property with turnkey craftsmanship."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/services/renovation"
      />

      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/services"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <ArrowLeft size={14} /> Back to Services Catalog
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
            SERVICE // HOME RENOVATION
          </div>
        </div>
      </div>

      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Transformation & Extensions</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            HOME RENOVATION IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Breathe new life into your existing residence with structural expansions, modern open floorplans, and contemporary architectural façades.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Request Renovation Audit <ArrowUpRight size={16} />
            </Link>
            <a
              href="tel:+916385740155"
              className="btn-secondary"
              style={{ padding: '1rem 2rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Phone size={15} className="text-gold" /> Call: +91 63857 40155
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Renovation Capabilities</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2rem' }}>
            TRANSFORMATION DELIVERABLES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {renovationFeatures.map((feat, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 600 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
