import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, Home, Phone, Mail } from 'lucide-react';

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
    { name: 'Dream Journey', path: '/#construction-journey' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Technology', path: '/technology' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Quality & Safety', path: '/safety-quality' },
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
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
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
                width: '40px',
                height: '40px',
                border: '1.5px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(179, 142, 93, 0.12)',
                position: 'relative',
                borderRadius: '3px'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--accent-gold)' }}>
                BMD
              </span>
              <div style={{ position: 'absolute', top: -3, right: -3, width: 6, height: 6, backgroundColor: 'var(--accent-gold)' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.18rem', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1, color: '#0F172A' }}>
                BUILD MY DREAM
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '3px', fontWeight: 700 }}>
                From Vision to Reality
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
            {navLinks.slice(0, 6).map((link) => {
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

          {/* Desktop Direct Phone & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href="tel:+916385740155"
              className="desktop-cta"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#0F172A',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '0.55rem 0.85rem',
                borderRadius: '3px',
                background: 'rgba(179, 142, 93, 0.1)',
                border: '1px solid rgba(179, 142, 93, 0.3)'
              }}
            >
              <Phone size={13} className="text-gold" />
              <span>+91 63857 40155</span>
            </a>

            <Link
              to="/contact"
              className="btn-primary desktop-cta"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem', fontWeight: 800 }}
            >
              Start Your Dream
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
          padding: '5.5rem 2rem 2.5rem 2rem',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          overflowY: 'auto'
        }}
        className="mobile-menu-drawer"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="eyebrow" style={{ marginBottom: '0.25rem' }}>Navigation // Build My Dream</div>
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#0F172A',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(15, 23, 42, 0.06)'
              }}
            >
              <span>{link.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                0{idx + 1}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Direct Contact Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem' }}>
          <a
            href="tel:+916385740155"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem',
              borderRadius: '4px',
              background: 'rgba(179, 142, 93, 0.12)',
              border: '1px solid var(--accent-gold)',
              color: '#0F172A',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 800,
              textDecoration: 'none'
            }}
          >
            <Phone size={16} className="text-gold" /> Call: +91 63857 40155
          </a>

          <a
            href="mailto:hidayathullahbajar@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              borderRadius: '4px',
              background: '#FFFFFF',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              color: '#475569',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              wordBreak: 'break-all'
            }}
          >
            <Mail size={14} className="text-gold" /> hidayathullahbajar@gmail.com
          </a>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: '100%', padding: '0.95rem', justifyContent: 'center', fontSize: '0.95rem', fontWeight: 800 }}
          >
            Start Your Dream <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
