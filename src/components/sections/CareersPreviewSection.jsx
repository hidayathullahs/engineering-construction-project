import React from 'react';
import { Link } from 'react-router-dom';
import { CAREERS_DATA } from '../../data/careersData';
import { ArrowUpRight, Briefcase, MapPin, Clock, Sparkles } from 'lucide-react';

export function CareersPreviewSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="eyebrow">Careers & Culture</div>
            <h2 className="section-title" style={{ color: '#0F172A' }}>BUILD YOUR CAREER WITH US.</h2>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              Join a multidisciplinary team of visionary residential architects, structural engineers, and master builders crafting generational homes.
            </p>
          </div>

          <Link to="/careers" className="btn-secondary" style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid rgba(15, 23, 42, 0.15)' }}>
            View Opportunities ({CAREERS_DATA.openPositions.length})
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 3 Featured Jobs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {CAREERS_DATA.openPositions.slice(0, 3).map((job) => (
            <div
              key={job.id}
              className="hud-border glass-card"
              style={{
                padding: '2rem 2.25rem',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.4rem', fontWeight: 700 }}>
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A' }}>
                  {job.title}
                </h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} className="text-gold" /> {job.location}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {job.experience}
                  </span>
                </div>
              </div>

              <Link
                to="/careers"
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.82rem', fontWeight: 700 }}
              >
                Apply for Position <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
