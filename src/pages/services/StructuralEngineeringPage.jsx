import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Phone, Layers, ArrowLeft } from 'lucide-react';

export function StructuralEngineeringPage() {
  const engineeringPillars = [
    'Geotechnical Soil Bearing Capacity & Strata Analysis',
    '3D Non-Linear Finite Element Analysis (FEA) Stress Calculations',
    'Coastal Foundation Design (Raft, Isolated Footings, Under-Reamed Piles)',
    'Anti-Corrosive RCC Framing with Fe-550D High-Yield Rebar',
    'Seismic Resistance Zone II/III Structural Certification',
    'Laser Total Station Alignment & On-Site Quality Assurance QC'
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Structural Engineering for Homes in Ramanathapuram | Build My Dream"
        description="Certified structural engineering and foundation design for residential homes in Ramanathapuram, Tamil Nadu. Seismic design, coastal corrosion protection, and FEA simulation."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/services/structural-engineering"
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
            SERVICE // STRUCTURAL ENGINEERING
          </div>
        </div>
      </div>

      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Structural Integrity & Safety</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            STRUCTURAL ENGINEERING FOR HOMES IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Ensuring your dream home withstands coastal atmospheric conditions, soil settlement, and seismic loads with certified structural calculations and 25-year warranty.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Consult Structural Engineer <ArrowUpRight size={16} />
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
          <div className="eyebrow">Engineering Rigor</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2rem' }}>
            STRUCTURAL CAPABILITIES & DELIVERABLES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {engineeringPillars.map((item, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
