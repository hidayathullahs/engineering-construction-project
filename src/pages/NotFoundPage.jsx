import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Home, ArrowLeft, ArrowUpRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Page Not Found | Build My Dream"
        description="The requested page could not be found. Return to the Build My Dream home builders homepage."
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '650px', padding: '3rem 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '4rem', fontWeight: 900, color: 'var(--accent-gold)', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#0F172A', margin: '1rem 0 1rem 0' }}>
          ARCHITECTURAL BLUEPRINT NOT FOUND
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The page or blueprint you are looking for has moved or does not exist. Please navigate back to explore our custom home building projects and services.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary" style={{ padding: '0.95rem 2rem', fontWeight: 800 }}>
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/services" className="btn-secondary" style={{ padding: '0.95rem 1.75rem', background: '#FFFFFF', color: '#0F172A', fontWeight: 700 }}>
            View Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
