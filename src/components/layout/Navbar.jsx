import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Compass, Shield, Award } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Construction Journey', path: '/#construction-journey' },
    { name: 'Industries', path: '/industries' },
    { name: 'Technology', path: '/technology' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Safety & QA', path: '/safety-quality' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-nav)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(15, 23, 42, 0.05)',
          boxShadow: isScrolled ? '0 8px 30px rgba(15, 23, 42, 0.06)' : 'none',
          padding: isScrolled ? '0.85rem 0' : '1.25rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                border: '1.5px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(179, 142, 93, 0.1)',
                position: 'relative',
                borderRadius: '2px'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--accent-gold)' }}>
                V
              </span>
              <div style={{ position: 'absolute', top: -3, right: -3, width: 6, height: 6, backgroundColor: 'var(--accent-gold)' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1, color: '#0F172A' }}>
                VERTEX
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#64748B', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px', fontWeight: 600 }}>
                Engineering & Infrastructure
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav-links"
          >
            {navLinks.slice(0, 7).map((link) => {
              const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.hash === link.path.substring(1));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--accent-gold)' : '#475569',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    padding: '0.25rem 0'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = isActive ? 'var(--accent-gold)' : '#475569')}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/contact"
              className="btn-primary desktop-cta"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.78rem' }}
            >
              Start a Project
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(15, 23, 42, 0.15)',
                color: '#0F172A',
                padding: '0.5rem',
                cursor: 'pointer',
                borderRadius: '2px'
              }}
              className="mobile-toggle-btn"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 95,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6rem 2rem 3rem 2rem',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Navigation Matrix</div>
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: location.pathname === link.path ? 'var(--accent-gold)' : '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                paddingBottom: '0.75rem'
              }}
            >
              <span>{link.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                0{idx + 1}
              </span>
            </Link>
          ))}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-medium)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem' }}
          >
            Initiate Project Enquiry
            <ArrowUpRight size={16} />
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <span>ISO 9001 & 45001 CERTIFIED</span>
            <span className="text-gold">GLOBAL DELIVERY</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav-links { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
