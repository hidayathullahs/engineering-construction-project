import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Phone } from 'lucide-react';

export function HowToChooseHomeBuilderRamanathapuram() {
  const evaluationChecklist = [
    'Check Past Completed Projects in Ramanathapuram & Visit Active Sites',
    'Verify Registered Structural Engineering Credentials & DTCP Drawing Experience',
    'Ensure Written Milestone Contracts with Specific Handover Dates',
    'Look for Turnkey Single-Source Accountability (Design + Civil + Interiors)',
    'Confirm Long-Term Structural Warranty (Minimum 20–25 Years)',
    'Review Itemized Material Brands (Cement, Steel, Plumbing, Wiring)'
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="How to Choose the Right Home Builder in Ramanathapuram | Build My Dream"
        description="Crucial checklist and tips for choosing the best residential home builder and building contractors in Ramanathapuram, Tamil Nadu."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/guides/how-to-choose-a-home-builder-in-ramanathapuram"
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
            GUIDE // BUILDER SELECTION
          </div>
        </div>
      </div>

      <article className="section-pad">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="eyebrow">Builder Selection Guide</div>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.25rem', color: '#0F172A' }}>
            HOW TO CHOOSE A HOME BUILDER IN RAMANATHAPURAM
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748B', marginBottom: '2.5rem', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '1.25rem' }}>
            <span>By Build My Dream Engineering Team</span>
            <span>•</span>
            <span>5 Min Read</span>
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Choosing the right building contractor or turnkey construction firm in <strong>Ramanathapuram</strong> determines the longevity, comfort, and architectural beauty of your family home for decades to come.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '1rem' }}>
              6-Point Evaluation Checklist for Homeowners
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {evaluationChecklist.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#0F172A', fontWeight: 600, background: '#FFFFFF', padding: '1rem', borderRadius: '4px', border: '1px solid rgba(15, 23, 42, 0.06)' }}>
                  <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '1rem' }}>
              Why Single-Source Turnkey Beats Fragmented Subcontracting
            </h2>

            <p>
              Hiring separate individual masons, electricians, and carpenters often leads to misaligned schedules, finger-pointing when cracks or leaks appear, and unpredictable budget inflation. A dedicated turnkey firm like <strong>Build My Dream</strong> guarantees unified structural and architectural quality under one contract.
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--accent-gold)', padding: '2rem', borderRadius: '6px', marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                Meet With Our Ramanathapuram Construction Engineers
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.25rem' }}>
                Book an in-person consultation or plot visit in Ramanathapuram to review our architectural portfolios and discuss your custom home vision.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem', fontWeight: 800 }}>
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
