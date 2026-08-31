import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Building2, Phone, Sparkles, Layers, ArrowLeft } from 'lucide-react';

export function HouseConstructionPage() {
  const deliverables = [
    'Complete Sub-Structure & Foundation (Raft / Isolated Footing / Piling)',
    'RCC Superstructure with Certified M25/M30 Mixes & Fe-550D TMT Rebar',
    'Precision Masonry with High-Density Fly-Ash or Wire-Cut Red Bricks',
    'Multi-Coat Waterproofing on Basements, Sump Tanks & Terrace Slabs',
    'Concealed Electrical & Plumbing with ISO-Grade Copper & CPVC Pipes',
    'Premium Plastering & Smooth Putty Finishes Ready for Painting',
    'Anti-Termite Treatment & Comprehensive 25-Year Structural Guarantee'
  ];

  const processSteps = [
    { num: '01', title: 'Site Inspection & Soil Assessment', desc: 'Detailed soil bearing capacity test and topographic laser survey on your Ramanathapuram plot.' },
    { num: '02', title: 'Structural Blueprint & BOQ Formulation', desc: 'Itemized bill of quantities with transparent material grades and milestone pricing.' },
    { num: '03', title: 'Ground Breaking & Deep Foundation', desc: 'Excavation, anti-termite chemical barrier, and reinforced concrete footings.' },
    { num: '04', title: 'Superstructure & Brickwork', desc: 'Laser-leveled RCC columns, beams, roof slabs, and thermal insulation walls.' },
    { num: '05', title: 'MEP & Finishing Integration', desc: 'Concealed conduits, plumbing pressure testing, plastering, and flooring.' },
    { num: '06', title: 'Quality Audit & Key Handover', desc: '120-point quality checklist verification and formal occupancy handover.' }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem', overflowX: 'hidden' }}>
      <SEOHead
        title="House Construction in Ramanathapuram | Build My Dream"
        description="Professional house construction services in Ramanathapuram, Tamil Nadu. High-quality materials, certified structural engineering, and transparent pricing."
        canonicalUrl="https://buildmydream.in/services/home-construction"
      />

      {/* Back Link Bar */}
      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/services"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <ArrowLeft size={14} /> Back to Services Catalog
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
            SERVICE // HOUSE CONSTRUCTION
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Ramanathapuram Residential Construction</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            HOUSE CONSTRUCTION IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Building high-quality, architecturally bespoke family homes and luxury villas with robust structural integrity, premium materials, and on-time handover across Ramanathapuram district.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Get Construction Estimate <ArrowUpRight size={16} />
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

      {/* Scope & Deliverables */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Engineering Scope</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                WHAT IS INCLUDED IN OUR HOME CONSTRUCTION
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                We manage the entire civil and structural engineering execution with dedicated full-time site engineers, strict slump test protocols, and high-tensile materials engineered for Tamil Nadu coastal weather.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#0F172A', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.5rem', borderRadius: '6px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                RAMANATHAPURAM PRICING SPECIFICATION
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>
                Transparent Cost Structure
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Our turnkey residential construction in Ramanathapuram starts from <strong style={{ color: '#0F172A' }}>₹1,850/sq.ft.</strong> with complete material and labour transparency.
              </p>

              <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#64748B' }}>Standard Turnkey Build</span>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>₹1,850 – ₹2,100 / sq.ft.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#64748B' }}>Premium Architectural Build</span>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>₹2,200 – ₹2,600 / sq.ft.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#64748B' }}>Luxury Villa Build</span>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>₹2,800+ / sq.ft.</span>
                </div>
              </div>

              <Link to="/contact" className="btn-primary" style={{ width: '100%', padding: '0.95rem', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 800, marginTop: '2rem' }}>
                Request Custom Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Construction Process */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Milestone Rigor</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2.5rem' }}>
            OUR 6-STEP HOUSE CONSTRUCTION PROCESS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: '5rem 0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Ready to Build in Ramanathapuram?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', margin: '0.75rem 0 1.25rem 0' }}>
            START YOUR HOUSE CONSTRUCTION TODAY
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Connect with our lead civil engineers for site visits in Ramanathapuram, Paramakudi, Kilakarai, and surrounding areas.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem', fontWeight: 800 }}>
            Start Your Dream Home <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
