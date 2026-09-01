import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { ArrowUpRight, BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';

export function GuidesHubPage() {
  const guides = [
    {
      slug: 'house-construction-cost-in-ramanathapuram',
      title: 'House Construction Cost in Ramanathapuram [2026 Guide]',
      excerpt: 'Comprehensive cost breakdown per square foot for residential building, material selections, foundation engineering, and labour contracts in Ramanathapuram.',
      readTime: '6 min read',
      date: 'Aug 2026',
      category: 'Cost & Budgeting'
    },
    {
      slug: 'how-to-choose-a-home-builder-in-ramanathapuram',
      title: 'How to Choose the Right Home Builder in Ramanathapuram',
      excerpt: 'Key criteria to evaluate civil contractors, architectural capabilities, structural warranties, and turnkey accountability before signing your home contract.',
      readTime: '5 min read',
      date: 'Aug 2026',
      category: 'Builder Selection'
    },
    {
      slug: 'house-construction-process-foundation-to-handover',
      title: 'House Construction Process From Foundation to Handover',
      excerpt: 'A detailed 16-stage milestone roadmap explaining soil testing, foundation, RCC framing, brickwork, MEP plumbing, waterproofing, and interior styling.',
      readTime: '8 min read',
      date: 'Aug 2026',
      category: 'Construction Process'
    }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Home Construction Guides & Cost Insights | Build My Dream"
        description="Expert residential construction guides, house construction cost breakdowns, and builder selection advice for homeowners in Ramanathapuram, Tamil Nadu."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/guides"
      />

      {/* Hero Header */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Homeowner Knowledge Base</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            HOME CONSTRUCTION <br />
            <span className="text-gold">GUIDES & INSIGHTS.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Practical engineering insights, budget estimators, and process explanations to help you make informed decisions when building your dream home in Ramanathapuram.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {guides.map((g, idx) => (
              <article
                key={idx}
                className="hud-border glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>{g.category}</span>
                    <span style={{ color: '#64748B' }}>{g.readTime}</span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    <Link to={`/guides/${g.slug}`} style={{ color: '#0F172A', textDecoration: 'none' }}>
                      {g.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {g.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={`/guides/${g.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--accent-gold)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 800
                    }}
                  >
                    Read Complete Guide <ArrowUpRight size={14} />
                  </Link>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>
                    {g.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
