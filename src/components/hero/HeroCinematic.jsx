import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function HeroCinematic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#FAFAF9',
        paddingTop: '4.85rem',
        paddingBottom: '2rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className="bg-blueprint-grid"
    >
      {/* Hidden Semantic SEO Layer for Google Search & Screen Readers */}
      <div className="sr-only" aria-hidden="false">
        <h1>BUILD YOUR DREAM HOME FROM VISION TO REALITY</h1>
        <p>
          Build My Dream is the premier residential home construction, architecture, structural engineering, and turnkey building company in Ramanathapuram, Tamil Nadu.
        </p>
        <div itemScope itemType="https://schema.org/GeneralContractor">
          <span itemProp="name">Build My Dream</span>
          <span itemProp="telephone">+91 63857 40155</span>
          <span itemProp="email">hidayathullahbajar@gmail.com</span>
          <span itemProp="addressLocality">Ramanathapuram</span>
          <span itemProp="addressRegion">Tamil Nadu</span>
        </div>
      </div>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1440px',
          padding: '0 1.5rem',
          width: '100%',
          margin: '0 auto'
        }}
      >
        {/* Interactive Master Hero Visual Canvas */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
            border: '1px solid rgba(15, 23, 42, 0.05)',
            backgroundColor: '#FFFFFF',
            transform: `perspective(1200px) rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * -0.4}deg)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Pristine 2x High-Resolution Master Visual */}
          <img
            src="/images/hero-reference-2x.jpg"
            alt="Build My Dream - Luxury Home Construction, Architecture and Turnkey Building in Ramanathapuram"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
              userSelect: 'none'
            }}
            loading="eager"
            fetchPriority="high"
          />

          {/* ==========================================================================
              INTERACTIVE ACCESSIBLE HOTSPOT OVERLAYS (Aligned to Pixel Grid)
              ========================================================================== */}

          {/* 1. Primary CTA: START YOUR DREAM ↗ */}
          <Link
            to="/contact"
            title="Start Your Dream - Schedule a Consultation"
            style={{
              position: 'absolute',
              left: '9.4%',
              top: '59.3%',
              width: '14.2%',
              height: '5.2%',
              borderRadius: '4px',
              cursor: 'pointer',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(179, 142, 93, 0.6)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="sr-only">Start Your Dream</span>
          </Link>

          {/* 2. Secondary CTA: EXPLORE PROJECTS ↗ */}
          <Link
            to="/projects"
            title="Explore Completed Residential Projects"
            style={{
              position: 'absolute',
              left: '25.2%',
              top: '59.3%',
              width: '14.2%',
              height: '5.2%',
              borderRadius: '4px',
              cursor: 'pointer',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(179, 142, 93, 0.08)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(15, 23, 42, 0.15)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="sr-only">Explore Projects</span>
          </Link>

          {/* 3. Top Location Ribbon Hotspots */}
          <Link
            to="/locations/ramanathapuram"
            title="Ramanathapuram Home Construction Services"
            style={{
              position: 'absolute',
              left: '22%',
              top: '1.2%',
              width: '18%',
              height: '3.8%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '4px'
            }}
          >
            <span className="sr-only">Ramanathapuram, Tamil Nadu Construction</span>
          </Link>

          <Link
            to="/services"
            title="Design, Architectural & Structural Engineering Services"
            style={{
              position: 'absolute',
              left: '42%',
              top: '1.2%',
              width: '16%',
              height: '3.8%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '4px'
            }}
          >
            <span className="sr-only">Design, Engineering & Build</span>
          </Link>

          <Link
            to="/services/turnkey-construction"
            title="Turnkey Home Solutions"
            style={{
              position: 'absolute',
              left: '60%',
              top: '1.2%',
              width: '17%',
              height: '3.8%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '4px'
            }}
          >
            <span className="sr-only">Turnkey Home Solutions</span>
          </Link>

          {/* 4. Google Reviews & Social Proof Hotspot */}
          <Link
            to="/about"
            title="Client Reviews & Trust Portfolio"
            style={{
              position: 'absolute',
              left: '28%',
              top: '68%',
              width: '12%',
              height: '6.5%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '6px'
            }}
          >
            <span className="sr-only">4.9/5 Google Reviews</span>
          </Link>

          {/* 5. Bottom 5-Metric Pill Ribbon Hotspots */}
          {/* Metric 1: 100+ Homes Built */}
          <Link
            to="/projects"
            title="View 100+ Completed Homes in Tamil Nadu"
            style={{
              position: 'absolute',
              left: '9%',
              top: '81%',
              width: '15%',
              height: '14%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '12px'
            }}
          >
            <span className="sr-only">100+ Homes Built in Tamil Nadu</span>
          </Link>

          {/* Metric 2: ±1.5 mm Laser Accuracy */}
          <Link
            to="/technology"
            title="Total Station Laser Alignment Technology"
            style={{
              position: 'absolute',
              left: '26%',
              top: '81%',
              width: '15%',
              height: '14%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '12px'
            }}
          >
            <span className="sr-only">±1.5 mm Laser Accuracy Technology</span>
          </Link>

          {/* Metric 3: 100% On-Time Handover */}
          <Link
            to="/process"
            title="Guaranteed Milestone Handover Process"
            style={{
              position: 'absolute',
              left: '43%',
              top: '81%',
              width: '14%',
              height: '14%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '12px'
            }}
          >
            <span className="sr-only">100% On-Time Handover Guarantee</span>
          </Link>

          {/* Metric 4: 25-Year Structural Warranty */}
          <Link
            to="/safety-quality"
            title="25-Year Structural Integrity Warranty"
            style={{
              position: 'absolute',
              left: '59%',
              top: '81%',
              width: '15%',
              height: '14%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '12px'
            }}
          >
            <span className="sr-only">25-Year Structural Warranty</span>
          </Link>

          {/* Metric 5: 0 Compromises */}
          <Link
            to="/about"
            title="Our Commitment to Zero Compromises"
            style={{
              position: 'absolute',
              left: '76%',
              top: '81%',
              width: '15%',
              height: '14%',
              cursor: 'pointer',
              zIndex: 15,
              borderRadius: '12px'
            }}
          >
            <span className="sr-only">0 Compromises on Safety & Quality</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
