import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { ShieldCheck, Award, Users, Compass, Globe2, ArrowUpRight, Sparkles, Home } from 'lucide-react';

export function AboutPage() {
  const leadership = [
    {
      name: 'Elena Rostova, M.Arch, AIA',
      role: 'Design Director & Principal Architect',
      discipline: 'Contemporary Residential Design & Bioclimatic Living',
      bio: 'Over 18 years crafting bespoke luxury villas, cantilevered architectural residences, and light-filled family homes.'
    },
    {
      name: 'Dr. Marcus Vance, Ph.D., PE',
      role: 'Chief Structural & Foundation Engineer',
      discipline: 'Seismic Dynamics & Post-Tensioned Engineering',
      bio: 'Specialist in column-free wide-span residential floorplates, seismic isolation, and subterranean foundation geotechnics.'
    },
    {
      name: 'Julian Montgomery, CEng',
      role: 'Director of Construction & Site Execution',
      discipline: 'Turnkey Execution & Zero-Defect Quality Control',
      bio: 'Directs on-site master craftsmen and chartered site engineers to guarantee sub-millimeter execution and timely handovers.'
    },
    {
      name: 'Aria Chen, MA',
      role: 'Head of Interior Architecture & Smart Home Systems',
      discipline: 'Bespoke Millwork, Italian Marbles & Automation',
      bio: 'Orchestrates luxury tactile interiors, acoustic serenity, custom lighting design, and integrated Lutron automation.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Architectural Studio Inception', desc: 'Founded with a singular mission: to make luxury residential architectural design and construction transparent and joyful.' },
    { year: '2014', title: 'Turnkey Design-Build Integration', desc: 'Unified architecture, structural engineering, and self-performing construction crews under single-source contracts.' },
    { year: '2019', title: 'BIM 5D & Digital Homeowner Portal', desc: 'Introduced 3D digital twin modeling and daily photographic logs, giving homeowners complete live visibility.' },
    { year: '2023', title: 'Passive House & Low-Carbon Excellence', desc: 'Adopted Net-Zero ready passive envelopes, solar integration, and low-clinker architectural concretes.' },
    { year: 'Present', title: '100+ Dream Homes Delivered', desc: 'Recognized as the premier luxury residential design-and-build platform with 100% on-time milestone delivery.' }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="About Build My Dream | Home Construction in Ramanathapuram"
        description="Learn about Build My Dream, premier residential architects and home builders in Ramanathapuram, Tamil Nadu. Discover our philosophy, engineering standards, and leadership."
        canonicalUrl="https://buildmydream-6q5x.onrender.com/about"
      />

      {/* Hero Banner */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)', position: 'relative' }}>
        <div className="container">
          <div className="eyebrow">About Build My Dream</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            PASSION FOR DESIGN. <br />
            <span className="text-gold">PRECISION IN CRAFT.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            <strong>BUILD MY DREAM</strong> is a luxury residential architecture, engineering, and construction platform committed to transforming your dream home vision into an enduring, beautifully crafted reality.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Our Guiding Philosophy</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>THE FOUR FOUNDATIONAL PILLARS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Compass size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Design-Led Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every home is custom sculpted for its inhabitants—optimizing natural light, spatial harmony, biophilic connection, and family comfort.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Engineering Precision
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Rigorous finite element load analysis, post-tensioned wide spans, and seismic Zone IV structural integrity built to last for generations.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Artisanal Craftsmanship
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                From hand-selected Italian stone slabs to custom walnut joinery and concealed linear diffusers, every detail is executed flawlessly.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '4px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                Turnkey Peace of Mind
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Single-source contractual accountability, fixed budgets, guaranteed handover dates, and a 25-year structural warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Studio Leadership</div>
          <h2 className="section-title" style={{ marginBottom: '3rem', color: '#0F172A' }}>ARCHITECTURAL & ENGINEERING DIRECTORS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="hud-border glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(179, 142, 93, 0.12)', border: '1.5px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800 }}>
                  {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1] ? leader.name.split(' ')[1][0] : ''}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
                    {leader.name}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {leader.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem' }}>
                    {leader.discipline}
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Heritage Timeline */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Our Journey</div>
          <h2 className="section-title" style={{ marginBottom: '3.5rem', color: '#0F172A' }}>EVOLUTION OF RESIDENTIAL EXCELLENCE</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="hud-border glass-card"
                style={{
                  padding: '2rem 2.5rem',
                  borderRadius: '4px',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  {m.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
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
