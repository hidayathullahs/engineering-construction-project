import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export function HouseConstructionProcessGuide() {
  const stages = [
    { num: '01', title: 'Site Inspection & Soil Bearing Test', desc: 'Analyzing plot topology and determining soil load-bearing capacity for foundation engineering.' },
    { num: '02', title: 'Architectural Blueprint & 3D Modeling', desc: 'Drafting 2D floorplans, Vastu alignments, elevation renderings, and structural load calculations.' },
    { num: '03', title: 'Excavation & Anti-Termite Barrier', desc: 'Precision trenching down to stable soil strata with chemical anti-termite ground treatment.' },
    { num: '04', title: 'Foundation & Plinth Beam Casting', desc: 'Reinforced concrete footings, column starters, and moisture-isolated plinth beams.' },
    { num: '05', title: 'RCC Superstructure Framing', desc: 'Laser-aligned column casting, beam shuttering, and ceiling slab pours with high-strength concrete.' },
    { num: '06', title: 'Brickwork & Thermal Wall Enclosure', desc: 'High-density brick masonry with lintel bands and cross-ventilation window openings.' },
    { num: '07', title: 'Concealed MEP Plumbing & Electrical', desc: 'Chasing walls for ISO copper wiring conduits and hydrostatically tested CPVC plumbing.' },
    { num: '08', title: 'Plastering & Multi-Coat Waterproofing', desc: 'Internal smooth gypsum/cement plaster and elastomeric waterproofing on terrace slabs and wet areas.' },
    { num: '09', title: 'Flooring & Wall Tiling', desc: 'Laying vitrified tiles, Italian marble, anti-skid bathroom tiles, and kitchen counters.' },
    { num: '10', title: 'Modular Woodwork & Interiors', desc: 'Factory-finished modular kitchen cabinets, wardrobes, false ceilings, and ambient lighting.' },
    { num: '11', title: 'Premium Painting & Fixture Fitting', desc: 'Putty coating, primer, luxury emulsion painting, and sanitaryware fixture installation.' },
    { num: '12', title: 'Deep Cleaning, 120-Point QC & Handover', desc: 'Comprehensive quality inspection, client walkthrough, and ceremonial key handover.' }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="House Construction Process From Foundation to Handover | Build My Dream"
        description="Complete step-by-step house construction process explained. From plot soil testing and deep foundation to RCC frame, brickwork, interiors, and key handover."
        canonicalUrl="https://buildmydream.in/guides/house-construction-process-foundation-to-handover"
      />

      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/guides"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <ArrowLeft size={14} /> Back to Guides
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
            GUIDE // CONSTRUCTION PROCESS
          </div>
        </div>
      </div>

      <article className="section-pad">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="eyebrow">Engineering Roadmap</div>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.25rem', color: '#0F172A' }}>
            HOUSE CONSTRUCTION PROCESS: FOUNDATION TO HANDOVER
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748B', marginBottom: '2.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1.25rem' }}>
            <span>By Build My Dream Technical Directorate</span>
            <span>•</span>
            <span>8 Min Read</span>
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Constructing a custom home is an intricate engineering journey. Here is a transparent breakdown of the exact stages your home passes through with <strong>Build My Dream</strong> in Ramanathapuram:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              {stages.map((st, idx) => (
                <div key={idx} className="hud-border glass-card" style={{ padding: '1.5rem 1.75rem', borderRadius: '6px', background: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
                      STAGE {st.num}
                    </span>
                    <span style={{ color: '#64748B' }}>•</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>
                      {st.title}
                    </h2>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(179, 142, 93, 0.08)', border: '1px solid rgba(179, 142, 93, 0.3)', padding: '2rem', borderRadius: '6px', marginTop: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                Experience Our 300-Frame Interactive Time-Lapse
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.25rem' }}>
                Scroll through the step-by-step visual transformation from bare plot to completed luxury home on our homepage.
              </p>
              <Link to="/#construction-journey" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem', fontWeight: 800 }}>
                Explore Visual Journey →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
