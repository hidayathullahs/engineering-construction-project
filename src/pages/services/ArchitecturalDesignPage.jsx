import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CheckCircle2, ArrowUpRight, Compass, Phone, Sparkles, Layers, ArrowLeft } from 'lucide-react';

export function ArchitecturalDesignPage() {
  const architecturalFeatures = [
    'Custom 2D Floorplans & Functional Space Optimization',
    'Photorealistic 3D CGI Exterior & Interior Visualizations',
    'Bioclimatic Analysis for Coastal Ramanathapuram Ventilation',
    'Vastu-Compliant Master Planning & Room Layouts',
    'DTCP & Local Municipality Approval Sanction Drawings',
    'Landscape Architecture, Courtyard, and Terrace Design'
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Architectural Design for Homes in Ramanathapuram | Build My Dream"
        description="Bespoke residential architectural design in Ramanathapuram, Tamil Nadu. Modern villa floorplans, 3D CGI rendering, Vastu compliance, and bioclimatic cooling."
        canonicalUrl="https://buildmydream.in/services/architectural-design"
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
            SERVICE // ARCHITECTURAL DESIGN
          </div>
        </div>
      </div>

      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Residential Architecture & Planning</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            ARCHITECTURAL DESIGN FOR HOMES IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Transforming your plot into an aesthetically stunning, light-filled, and climate-responsive living environment tailored to your family's lifestyle.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Consult an Architect <ArrowUpRight size={16} />
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
          <div className="eyebrow">Design Deliverables</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2rem' }}>
            WHAT OUR ARCHITECTURAL SERVICE INCLUDES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {architecturalFeatures.map((feat, idx) => (
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
