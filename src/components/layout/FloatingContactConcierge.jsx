import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X, Sparkles } from 'lucide-react';

export function FloatingContactConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        fontFamily: 'var(--font-mono)'
      }}
    >
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div
          className="hud-border"
          style={{
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(179, 142, 93, 0.4)',
            borderRadius: '8px',
            padding: '1.5rem',
            width: '320px',
            marginBottom: '1rem',
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} className="text-gold" />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Direct Consultation & Ads
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <X size={16} />
            </button>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
            Connect directly with our Lead Director for project inquiries, partnerships, and advertising opportunities:
          </div>

          {/* Quick Action Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {/* Phone Call Link */}
            <a
              href="tel:+916385740155"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(179, 142, 93, 0.3)',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.88rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(179, 142, 93, 0.3)')}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <Phone size={14} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 800 }}>Direct Call</span>
                <span>+91 63857 40155</span>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/916385740155?text=Hello%20Build%20My%20Dream%20team,%20I%20would%20like%20to%20discuss%20a%20project%20/%20advertising%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.88rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#16a34a')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.3)')}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                <MessageCircle size={14} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.65rem', color: '#16a34a', textTransform: 'uppercase', fontWeight: 800 }}>WhatsApp Chat</span>
                <span>+91 63857 40155</span>
              </div>
            </a>

            {/* Email Link */}
            <a
              href="mailto:hidayathullahbajar@gmail.com?subject=Build%20My%20Dream%20-%20Project%20/%20Advertising%20Inquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(179, 142, 93, 0.3)',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.82rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(179, 142, 93, 0.3)')}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <Mail size={14} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 800 }}>Direct Email</span>
                <span style={{ wordBreak: 'break-all' }}>hidayathullahbajar@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct Contact and Advertising Concierge"
        style={{
          background: 'linear-gradient(135deg, var(--accent-gold) 0%, #967243 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '30px',
          padding: '0.75rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(179, 142, 93, 0.4)',
          transition: 'all 0.25s ease',
          fontSize: '0.82rem',
          fontWeight: 800
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={16} />
        <span>Contact: +91 63857 40155</span>
      </button>
    </div>
  );
}
