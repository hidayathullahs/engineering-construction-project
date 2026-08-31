import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { CAREERS_DATA } from '../data/careersData';
import { Briefcase, MapPin, Clock, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (candidateName && candidateEmail) {
      setAppliedSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setSelectedJob(null);
        setAppliedSuccess(false);
        setCandidateName('');
        setCandidateEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Careers & Opportunities in Residential Construction | Build My Dream"
        description="Join our multidisciplinary team of residential architects, civil engineers, project managers, and interior designers at Build My Dream in Tamil Nadu."
        canonicalUrl="https://buildmydream.in/careers"
      />

      {/* Hero */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Engineering Culture & Talent</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            ENGINEER THE <br />
            <span className="text-gold">ICONS OF TOMORROW.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            {CAREERS_DATA.subtitle}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Our Cadre Culture</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>WHAT DEFINES A VERTEX ENGINEER</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {CAREERS_DATA.values.map((val, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Active Openings</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>CURRENT OPPORTUNITIES</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {CAREERS_DATA.openPositions.map((job) => (
              <div
                key={job.id}
                className="hud-border glass-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '2rem'
                }}
              >
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0F172A' }}>
                    {job.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {job.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} className="text-gold" /> {job.location}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {job.experience}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  Apply Now <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(16px)',
            zIndex: 'var(--z-modal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            className="hud-border"
            style={{
              background: '#FFFFFF',
              width: '100%',
              maxWidth: '550px',
              padding: '2.5rem',
              borderRadius: '6px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.25)'
            }}
          >
            <button
              onClick={() => setSelectedJob(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'transparent', border: 'none', color: '#0F172A', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {appliedSuccess ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} className="text-gold" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>
                  Application Dispatched
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  Our Senior Engineering Recruitment Panel will review your dossier within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit}>
                <div className="eyebrow">{selectedJob.department}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                  Apply: {selectedJob.title}
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Marcus Aurelius"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="e.g. marcus@engineering.com"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
                >
                  Submit Confidential Dossier
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
