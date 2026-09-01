import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Phone, ArrowLeft } from 'lucide-react';

export function TurnkeyConstructionPage() {
  const turnkeyBenefits = [
    'Single Contract & Single Point of Accountability from Blueprint to Key Handover',
    'Fixed Price Guarantee with Zero Unplanned Cost Escalations',
    'Dedicated Full-Time Project Manager & Daily Digital Site Reports',
    'Architectural Blueprints, Structural Design & DTCP Municipality Sanctions',
    'Complete Civil Works, MEP Plumbing & Electrical, Flooring & Painting',
    'Finished Luxury Modular Kitchens, Wardrobes & Landscape Integration'
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Turnkey Home Construction in Ramanathapuram | Build My Dream"
        description="Complete turnkey home building solutions in Ramanathapuram, Tamil Nadu. Single-source accountability, guaranteed timeline, fixed pricing, and 25-year structural warranty."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/services/turnkey-construction"
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
            SERVICE // TURNKEY CONSTRUCTION
          </div>
        </div>
      </div>

      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">End-to-End Homebuilding Peace of Mind</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            TURNKEY HOME CONSTRUCTION IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            From initial plot soil testing to handing over your keys with completed interiors—we manage every single detail under one transparent, milestone-driven contract.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Request Turnkey Proposal <ArrowUpRight size={16} />
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
          <div className="eyebrow">Turnkey Benefits</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2rem' }}>
            WHY CHOOSE TURNKEY CONSTRUCTION WITH BUILD MY DREAM
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {turnkeyBenefits.map((b, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.75rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 600 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
