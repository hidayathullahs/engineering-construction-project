import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Calendar, Phone } from 'lucide-react';

export function HouseConstructionCostRamanathapuram() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="House Construction Cost in Ramanathapuram [2026 Guide] | Build My Dream"
        description="Detailed guide to house construction cost per sqft in Ramanathapuram, Tamil Nadu. Learn about material grades, labour rates, foundation costs, and turnkey pricing."
        canonicalUrl="https://buildmydream.in/guides/house-construction-cost-in-ramanathapuram"
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
            GUIDE // COST & ESTIMATION
          </div>
        </div>
      </div>

      <article className="section-pad">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="eyebrow">Residential Cost Estimator 2026</div>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.25rem', color: '#0F172A' }}>
            HOUSE CONSTRUCTION COST IN RAMANATHAPURAM
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748B', marginBottom: '2.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1.25rem' }}>
            <span>By Build My Dream Editorial Team</span>
            <span>•</span>
            <span>Updated: August 2026</span>
            <span>•</span>
            <span>6 Min Read</span>
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Planning to build a home in <strong>Ramanathapuram, Tamil Nadu</strong>? Understanding the accurate cost breakdown per square foot is essential for establishing a realistic budget without sudden mid-construction financial escalations.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '1rem' }}>
              Average Cost Per Square Foot in Ramanathapuram (2026)
            </h2>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid rgba(15, 23, 42, 0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(15, 23, 42, 0.06)', paddingBottom: '0.5rem' }}>
                  <strong>Standard Residential Construction</strong>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>₹1,850 – ₹2,100 / sq.ft.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(15, 23, 42, 0.06)', paddingBottom: '0.5rem' }}>
                  <strong>Premium Architectural Build</strong>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>₹2,200 – ₹2,600 / sq.ft.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Luxury Custom Villa Build</strong>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>₹2,800 – ₹3,500+ / sq.ft.</span>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '1rem' }}>
              Key Factors Influencing Cost in Ramanathapuram
            </h2>

            <p>
              1. <strong>Soil Strata & Foundation Depth</strong>: Near coastal pockets like Kilakarai or Mandapam, sandy soils may require deeper column footings or raft foundations compared to hard gravel inland.
            </p>
            <p>
              2. <strong>Anti-Corrosive Steel & Cement Grades</strong>: High salinity in coastal breezes necessitates Fe-550D grade epoxy-treated TMT rebars and minimum M25 grade concrete mixes to prevent reinforcement rusting.
            </p>
            <p>
              3. <strong>Turnkey vs Labour Contracts</strong>: Turnkey contracts lock in all material and labour pricing upfront with written milestone dates, protecting homeowners from material inflation.
            </p>

            <div style={{ background: 'rgba(179, 142, 93, 0.08)', border: '1px solid rgba(179, 142, 93, 0.3)', padding: '2rem', borderRadius: '6px', marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                Need an Itemized Bill of Quantities (BOQ)?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.25rem' }}>
                Share your plot dimensions and floorplan requirements to receive a comprehensive, itemized quotation from our lead engineers in Ramanathapuram.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem', fontWeight: 800 }}>
                Request Detailed Cost Estimate →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
