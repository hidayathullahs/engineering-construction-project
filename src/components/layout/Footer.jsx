import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Globe2, Phone, Mail, MapPin, Sparkles, Home, MessageCircle } from 'lucide-react';

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
              <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>Home Builders in Ramanathapuram, Tamil Nadu</div>
              <h2 className="section-title" style={{ marginTop: '0.5rem', color: '#FFFFFF' }}>
                YOUR DREAM HOME <br />
                <span className="text-gold">DESERVES TO BE BUILT.</span>
              </h2>
              <p className="section-subtitle" style={{ marginTop: '1rem', color: '#94A3B8' }}>
                Partner with visionary residential architects, structural engineers, and master craftsmen dedicated to turning your dream home vision into reality in Ramanathapuram.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '1.15rem 2.25rem', fontSize: '0.92rem', fontWeight: 800 }}>
                Start Your Dream
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="tel:+916385740155"
                className="btn-secondary"
                style={{ padding: '1.15rem 2rem', fontSize: '0.92rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
              >
                <Phone size={16} className="text-gold" /> Call: +91 63857 40155
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container" style={{ padding: '4.5rem var(--container-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Col 1: Identity & Direct Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', border: '1.5px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(179, 142, 93, 0.15)', borderRadius: '3px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-gold)', fontSize: '0.95rem' }}>BMD</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '0.04em', fontSize: '1.1rem', color: '#FFFFFF' }}>BUILD MY DREAM</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>From Vision to Reality</div>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Residential construction, architecture, structural engineering, and turnkey dream homes in Ramanathapuram, Tamil Nadu.
            </p>

            {/* Direct Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} className="text-gold" /> Ramanathapuram, Tamil Nadu 623501
              </div>
              <a href="tel:+916385740155" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} /> +91 63857 40155
              </a>
              <a href="mailto:hidayathullahbajar@gmail.com" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px', wordBreak: 'break-all' }}>
                <Mail size={14} className="text-gold" /> hidayathullahbajar@gmail.com
              </a>
            </div>
          </div>

          {/* Col 2: Services & Practices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <Link to="/services/home-construction" style={{ color: '#94A3B8', textDecoration: 'none' }}>House Construction</Link>
              <Link to="/services/architectural-design" style={{ color: '#94A3B8', textDecoration: 'none' }}>Architectural Design</Link>
              <Link to="/services/structural-engineering" style={{ color: '#94A3B8', textDecoration: 'none' }}>Structural Engineering</Link>
              <Link to="/services/interior-design" style={{ color: '#94A3B8', textDecoration: 'none' }}>Interior Design</Link>
              <Link to="/services/turnkey-construction" style={{ color: '#94A3B8', textDecoration: 'none' }}>Turnkey Construction</Link>
              <Link to="/services/renovation" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home Renovation</Link>
            </div>
          </div>

          {/* Col 3: Local & Knowledge Hub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
              Locations & Guides
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <Link to="/locations/ramanathapuram" style={{ color: 'var(--accent-gold)', fontWeight: 700, textDecoration: 'none' }}>Builders in Ramanathapuram</Link>
              <Link to="/guides/house-construction-cost-in-ramanathapuram" style={{ color: '#94A3B8', textDecoration: 'none' }}>Construction Cost Guide</Link>
              <Link to="/guides/how-to-choose-a-home-builder-in-ramanathapuram" style={{ color: '#94A3B8', textDecoration: 'none' }}>Builder Selection Checklist</Link>
              <Link to="/guides/house-construction-process-foundation-to-handover" style={{ color: '#94A3B8', textDecoration: 'none' }}>Construction Process</Link>
              <Link to="/projects" style={{ color: '#94A3B8', textDecoration: 'none' }}>Completed Projects</Link>
              <Link to="/technology" style={{ color: '#94A3B8', textDecoration: 'none' }}>3D BIM Skeleton</Link>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
              Construction Journal
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.5 }}>
              Receive updates on residential building regulations, material cost trends, and contemporary home designs in Tamil Nadu.
            </p>

            {isSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} /> Subscribed to Journal.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFF',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem',
                    width: '100%'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1rem', fontSize: '0.82rem' }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: '#64748B' }}>
          <div>
            © {new Date().getFullYear()} BUILD MY DREAM. All Rights Reserved. Home Builders in Ramanathapuram, Tamil Nadu.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)' }}>
            <a href="tel:+916385740155" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>TEL: +91 63857 40155</a>
            <a href="mailto:hidayathullahbajar@gmail.com" style={{ color: '#94A3B8', textDecoration: 'none' }}>EMAIL: hidayathullahbajar@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
