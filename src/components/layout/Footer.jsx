import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Globe2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#0B0F14',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        color: '#F8FAFC'
      }}
      className="bg-blueprint-grid"
    >
      {/* Top Pre-Footer Callout */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '750px' }}>
              <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>Institutional Capability</div>
              <h2 className="section-title" style={{ marginTop: '0.5rem', color: '#FFFFFF' }}>
                BUILD SOMETHING <br />
                <span className="text-gold">THAT STANDS FOR GENERATIONS.</span>
              </h2>
              <p className="section-subtitle" style={{ marginTop: '1rem', color: '#94A3B8' }}>
                Partner with an engineering and infrastructure group renowned for mathematical precision, geotechnical mastery, and flawless execution.
              </p>
            </div>
            <Link to="/contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '0.95rem' }}>
              Request Project Consultation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container" style={{ padding: '4.5rem var(--container-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Col 1: Identity & Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', border: '1.5px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(179, 142, 93, 0.15)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-gold)' }}>V</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.08em', fontSize: '1.2rem', color: '#FFFFFF' }}>VERTEX</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>
              International Engineering, Structural Design, and Heavy Infrastructure Delivery Group.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <span>LAT: 37°46'29" N</span>
              <span>LON: 122°25'10" W</span>
              <span className="text-gold" style={{ fontWeight: 600 }}>ELEVATION: 18.20m AOD</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Navigation
            </div>
            <Link to="/" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Home</Link>
            <Link to="/about" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>About Group</Link>
            <Link to="/services" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Services</Link>
            <Link to="/projects" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Featured Projects</Link>
            <Link to="/#construction-journey" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Construction Journey</Link>
            <Link to="/careers" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Careers & Culture</Link>
          </div>

          {/* Col 3: Capabilities & Sectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Specializations
            </div>
            <Link to="/industries" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Commercial Towers</Link>
            <Link to="/industries" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Luxury Residential</Link>
            <Link to="/technology" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>BIM 5D & Digital Twin</Link>
            <Link to="/sustainability" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Low-Carbon Concrete</Link>
            <Link to="/safety-quality" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}>Zero-Harm Safety Governance</Link>
          </div>

          {/* Col 4: Newsletter & Direct Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Technical Intelligence
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
              Quarterly structural briefings and engineering innovations directly to your inbox.
            </p>
            {isSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                <CheckCircle2 size={16} /> Subscribed to Technical Journal
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    padding: '0.6rem 0.85rem',
                    fontSize: '0.85rem',
                    borderRadius: '2px',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.75rem' }}>
                  Join
                </button>
              </form>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem', fontSize: '0.8rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} className="text-gold" /> info@vertex-engineering.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} className="text-gold" /> +1 (800) 458-7200
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#64748B'
          }}
        >
          <div>© {new Date().getFullYear()} VERTEX Engineering Group. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>Site Map</span>
            <span>ISO 9001 / ISO 45001 / ISO 14001</span>
          </div>
        </div>
      </div>
    </footer >
  );
}
