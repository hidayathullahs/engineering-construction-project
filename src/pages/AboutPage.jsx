import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, Compass, Globe2, ArrowUpRight } from 'lucide-react';

export function AboutPage() {
  const leadership = [
    {
      name: 'Dr. Marcus Vance, Ph.D., PE',
      role: 'Chief Executive & Principal Structural Engineer',
      discipline: 'Structural Dynamics & Seismic Systems',
      bio: 'Over 28 years directing complex high-rise and deep foundation infrastructure. Former Chairman of the International Concrete Institute.'
    },
    {
      name: 'Elena Rostova, M.Arch, AIA',
      role: 'Design Director & Principal Architect',
      discipline: 'Contemporary Façade & Bioclimatic Envelopes',
      bio: 'Recognized for pioneering cantilevered mass-concrete residential architecture and thermal envelope engineering.'
    },
    {
      name: 'David K. Tanaka, CEng, FICE',
      role: 'Director of Civil & Marine Infrastructure',
      discipline: 'Segmental Bridges & Offshore Foundations',
      bio: 'Spearheaded over 400 kilometers of elevated viaducts, stay cable bridges, and subterranean rail interchanges globally.'
    },
    {
      name: 'Sarah Al-Mansoor, MSc',
      role: 'Head of Digital Delivery & Computational BIM',
      discipline: '5D Parametric Modeling & Digital Twins',
      bio: 'Pioneered automated clash-detection algorithms and real-time IoT strain monitoring for long-span structures.'
    }
  ];

  const milestones = [
    { year: '2001', title: 'Foundation & Civil Groundworks', desc: 'Established with a focus on high-precision deep excavation and contiguous shoring systems.' },
    { year: '2008', title: 'Superstructure & High-Rise Division', desc: 'Expanded into commercial towers, self-climbing hydraulic formwork, and post-tensioned slabs.' },
    { year: '2016', title: 'Digital Twin & Computational BIM', desc: 'Integrated 5D BIM and drone LiDAR photogrammetry across 100% of delivered projects.' },
    { year: '2022', title: 'Low-Carbon Concrete & ESG Leadership', desc: 'Formulated proprietary GGBS low-clinker concrete blends, reducing embodied carbon by 38%.' },
    { year: 'Present', title: 'Global Delivery & Turnkey Mastery', desc: 'Executing complex institutional landmarks across 25+ metropolitan regions worldwide.' }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)', position: 'relative' }}>
        <div className="container">
          <div className="eyebrow">Institutional Profile</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            ENGINEERING DISCIPLINE. <br />
            <span className="text-gold">ARCHITECTURAL MASTERY.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            VERTEX is a premier engineering, architecture, and construction corporation committed to building resilient structures that shape skyline identities and advance civil infrastructure.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Guiding Philosophy</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>OUR CORE PILLARS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="hud-border glass-card" style={{ padding: '2.5rem 2rem', borderRadius: '4px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Mathematical Precision
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every load-bearing calculation, formwork tolerance, and post-tensioned tendon is audited against rigorous physics models with zero margin for deviation.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.5rem 2rem', borderRadius: '4px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Zero-Harm Integrity
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Our institutional culture places human life and safety above all commercial pressures, maintaining top-decile global safety records.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.5rem 2rem', borderRadius: '4px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Generational Longevity
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We engineer buildings and bridges for 100+ year lifespans using corrosion-resistant alloys, self-healing concretes, and durable timber elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Directory */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Executive Governance</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>CHARTERED DIRECTORS & LEADERSHIP</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {leadership.map((leader, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {leader.discipline}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem', color: '#0F172A' }}>
                  {leader.name}
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  {leader.role}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Institutional Evolution</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>OUR MILESTONES</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="hud-border glass-card"
                style={{
                  padding: '2rem 2.25rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)', minWidth: '120px' }}>
                  {m.year}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', color: '#0F172A' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
