import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Award } from 'lucide-react';

export function WhoWeAreSection() {
  return (
    <section className="section-pad bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left Editorial Content */}
          <div>
            <div className="eyebrow">Institutional Heritage</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
              WE ENGINEER. <br />
              WE BUILD. <br />
              <span className="text-gold">WE DELIVER.</span>
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              For over two decades, VERTEX has operated at the nexus of high-complexity structural engineering and visionary architectural construction. We convert ambitious blueprints into enduring civic landmarks, high-rise commercial centers, and luxury residential estates.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Our multi-disciplinary methodology integrates continuous digital twin modeling, self-performing heavy equipment crews, and post-tensioned structural innovations to eliminate risk and achieve flawless aesthetic execution.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>BIM 5D Parametric Design</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zero-clash prefabrication</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>Self-Performing Crews</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct institutional quality control</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>Zero-Harm Governance</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ISO 45001 & 9001 certified</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>Low-Carbon Materials</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LEED Platinum standards</div>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary">
              Discover Our Leadership & Legacy
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right Image Composition with HUD Blueprint Labels */}
          <div style={{ position: 'relative' }}>
            <div className="hud-border img-zoom-wrap" style={{ overflow: 'hidden', borderRadius: '4px', background: '#FFFFFF', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)' }}>
              <img
                src="/frames/ezgif-frame-240.jpg"
                alt="Architectural Project Façade Execution"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              
              {/* Technical Overlay Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, transparent 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 600 }}>STRUCTURAL CASING // SPEC. 04</div>
                  <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 700 }}>Cantilevered Façade & Louver Framing</div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600 }}>TOLERANCE: ±1.2mm</div>
              </div>
            </div>

            {/* Small Floating Blueprint Card */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(179, 142, 93, 0.4)',
                borderTop: '2px solid var(--accent-gold)',
                padding: '1rem 1.25rem',
                borderRadius: '4px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.12)'
              }}
              className="desktop-only"
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)', marginBottom: '0.2rem', fontWeight: 700 }}>
                FOUNDATION TO CROWN
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                100% In-House Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
