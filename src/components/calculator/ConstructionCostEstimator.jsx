import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Building,
  Layers,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Compass,
  Zap,
  Leaf
} from 'lucide-react';

const PACKAGES = [
  {
    id: 'standard',
    name: 'Standard Turnkey',
    rate: 1950,
    tagline: 'Reliable, engineering-compliant home construction',
    badge: 'Popular',
    features: [
      'Fe550D TMT Steel (Tata / JSW)',
      'Grade 53 OPC/PPC Cement (UltraTech / Ramco)',
      'First-class country bricks / solid concrete blocks',
      'Teak wood main entrance frame & door',
      '2x2 ft branded vitrified tile flooring',
      'Anti-corrosive concrete for coastal climate',
      'Standard sanitaryware (Parryware / Hindware)',
      '10-Year structural warranty'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Architectural',
    rate: 2350,
    tagline: 'Refined aesthetics & designer architectural finish',
    badge: 'Recommended',
    features: [
      'All Standard Tier structural specifications',
      'UPVC 3-track sliding windows with mosquito mesh',
      'Granite kitchen counters with SS sink',
      'Designer false ceiling in living and master bedroom',
      'Modular electrical wiring (Schneider / Legrand)',
      'Premium bathroom fittings (Kohler / Jaquar)',
      'Weather-proof exterior silicone emulsion paint',
      '15-Year structural warranty + 1-Yr free maintenance'
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Custom Villa',
    rate: 2850,
    tagline: 'Bespoke custom-crafted luxury residences',
    badge: 'Ultra Premium',
    features: [
      'High-grade M25/M30 concrete with seismic design',
      'Double-height architectural ceiling options',
      'Italian marble / large-format glazed vitrified slabs',
      'Bespoke exterior facade cladding & louvers',
      'Concealed conduits for full smart home automation',
      'Imported luxury sanitaryware & shower panels',
      'Terrace waterproofing with heat-reflective tile coating',
      '25-Year comprehensive structural warranty'
    ]
  }
];

const ADDONS = [
  { id: 'solar', name: '5kW On-Grid Solar Rooftop System', cost: 350000, icon: Zap },
  { id: 'interior', name: 'Complete Modular Woodwork & Wardrobes', cost: 450000, icon: Sparkles },
  { id: 'smart', name: 'Smart Home Automation & CCTV Surveillance', cost: 180000, icon: ShieldCheck },
  { id: 'landscape', name: 'Landscaped Garden & Compound Wall Gateway', cost: 250000, icon: Leaf }
];

export function ConstructionCostEstimator() {
  const [area, setArea] = useState(1800);
  const [floors, setFloors] = useState(2); // 1 = Ground, 2 = G+1, 3 = G+2
  const [selectedTier, setSelectedTier] = useState('premium');
  const [selectedAddons, setSelectedAddons] = useState(['interior']);

  const currentPackage = useMemo(() => {
    return PACKAGES.find(p => p.id === selectedTier) || PACKAGES[1];
  }, [selectedTier]);

  // Calculations
  const totalBuiltUpArea = area;
  const baseCost = totalBuiltUpArea * currentPackage.rate;
  const addonsCost = useMemo(() => {
    return selectedAddons.reduce((acc, addonId) => {
      const item = ADDONS.find(a => a.id === addonId);
      return acc + (item ? item.cost : 0);
    }, 0);
  }, [selectedAddons]);

  const totalCost = baseCost + addonsCost;

  // Breakdown percentages
  const civilCost = Math.round(baseCost * 0.52);
  const finishingCost = Math.round(baseCost * 0.23);
  const mepCost = Math.round(baseCost * 0.15);
  const paintCost = Math.round(baseCost * 0.10);

  // Timeline estimation
  const timelineMonths = useMemo(() => {
    if (area <= 1500) return '6 - 8 Months';
    if (area <= 2500) return '8 - 10 Months';
    if (area <= 3500) return '10 - 12 Months';
    return '12 - 14 Months';
  }, [area]);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatLakhs = (val) => {
    const lakhs = val / 100000;
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `₹${lakhs.toFixed(2)} Lakhs`;
  };

  const toggleAddon = (id) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // WhatsApp Pre-filled Lead Generation URL
  const whatsappUrl = useMemo(() => {
    const message = `Hello Build My Dream Team, I estimated my home construction in Ramanathapuram on your website:
- Built-up Area: ${area} sq.ft
- Floors: ${floors === 1 ? 'Ground Floor' : floors === 2 ? 'G+1 Duplex' : 'G+2 Triplex'}
- Package: ${currentPackage.name} (₹${currentPackage.rate}/sq.ft)
- Estimated Cost: ${formatLakhs(totalCost)} (${formatINR(totalCost)})
- Timeline: ${timelineMonths}
I would like to schedule a free site consultation.`;
    return `https://wa.me/916385740155?text=${encodeURIComponent(message)}`;
  }, [area, floors, currentPackage, totalCost, timelineMonths]);

  return (
    <section
      id="cost-estimator"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        padding: '6rem 0',
        borderTop: '1px solid rgba(15, 23, 42, 0.06)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.06)'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(179, 142, 93, 0.1)',
              border: '1px solid rgba(179, 142, 93, 0.35)',
              padding: '0.35rem 1.15rem',
              borderRadius: '30px',
              marginBottom: '1rem'
            }}
          >
            <Calculator size={14} color="#B38E5D" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: '#B38E5D',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              TRANSPARENT PRICING CALCULATOR
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}
          >
            Estimate Your Dream Home in <span className="text-gold">Ramanathapuram</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#64748B',
              lineHeight: 1.6
            }}
          >
            Instant, transparent cost projections based on current verified construction material rates in Tamil Nadu. Zero hidden costs, guaranteed milestone handovers.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Interactive Controls */}
          <div
            style={{
              backgroundColor: '#FAFAF9',
              borderRadius: '20px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              padding: '2.25rem',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)'
            }}
          >
            {/* 1. Built-up Area Slider */}
            <div style={{ marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  Built-up Area (Sq.Ft)
                </label>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#B38E5D',
                    backgroundColor: 'rgba(179, 142, 93, 0.12)',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '6px'
                  }}
                >
                  {area.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={800}
                max={5000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#B38E5D',
                  height: '6px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                <span>800 sq.ft (Compact)</span>
                <span>2,500 sq.ft (Standard Villa)</span>
                <span>5,000 sq.ft (Mansion)</span>
              </div>
            </div>

            {/* 2. Floors Selection */}
            <div style={{ marginBottom: '2.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem'
                }}
              >
                Structure & Elevation
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { num: 1, label: 'Ground Floor' },
                  { num: 2, label: 'G + 1 Duplex' },
                  { num: 3, label: 'G + 2 Triplex' }
                ].map(f => (
                  <button
                    key={f.num}
                    type="button"
                    onClick={() => setFloors(f.num)}
                    style={{
                      padding: '0.85rem 0.5rem',
                      borderRadius: '10px',
                      border: floors === f.num ? '2px solid #B38E5D' : '1px solid rgba(15, 23, 42, 0.12)',
                      backgroundColor: floors === f.num ? '#FFFFFF' : 'transparent',
                      color: floors === f.num ? '#B38E5D' : '#475569',
                      fontWeight: floors === f.num ? 800 : 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: floors === f.num ? '0 4px 12px rgba(179, 142, 93, 0.15)' : 'none'
                    }}
                  >
                    <Building size={16} style={{ margin: '0 auto 4px', display: 'block' }} />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Quality Package Tier Selection */}
            <div style={{ marginBottom: '2.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem'
                }}
              >
                Construction Specification Tier
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {PACKAGES.map(pkg => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedTier(pkg.id)}
                    style={{
                      padding: '1.15rem 1.25rem',
                      borderRadius: '12px',
                      border: selectedTier === pkg.id ? '2px solid #B38E5D' : '1px solid rgba(15, 23, 42, 0.1)',
                      backgroundColor: selectedTier === pkg.id ? '#FFFFFF' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: selectedTier === pkg.id ? '0 6px 18px rgba(179, 142, 93, 0.12)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.98rem', color: '#0F172A' }}>
                          {pkg.name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '12px',
                            backgroundColor: selectedTier === pkg.id ? '#B38E5D' : 'rgba(15, 23, 42, 0.08)',
                            color: selectedTier === pkg.id ? '#FFFFFF' : '#64748B'
                          }}
                        >
                          {pkg.badge}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.05rem', color: '#B38E5D' }}>
                        ₹{pkg.rate}<span style={{ fontSize: '0.72rem', color: '#64748B' }}>/sq.ft</span>
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748B', margin: 0, lineHeight: 1.4 }}>
                      {pkg.tagline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Optional Add-ons */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem'
                }}
              >
                Optional Value Add-ons
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {ADDONS.map(addon => {
                  const Icon = addon.icon;
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: isChecked ? '1px solid #B38E5D' : '1px solid rgba(15, 23, 42, 0.08)',
                        backgroundColor: isChecked ? 'rgba(179, 142, 93, 0.06)' : 'transparent',
                        cursor: 'pointer',
                        fontSize: '0.84rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon size={15} color={isChecked ? '#B38E5D' : '#64748B'} />
                        <span style={{ color: isChecked ? '#0F172A' : '#475569', fontWeight: isChecked ? 600 : 400 }}>
                          {addon.name}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#B38E5D' }}>
                        +{formatLakhs(addon.cost)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Cost Estimation Summary & Conversion */}
          <div
            style={{
              backgroundColor: '#0B132B',
              borderRadius: '20px',
              padding: '2.5rem',
              color: '#FFFFFF',
              boxShadow: '0 25px 60px rgba(11, 19, 43, 0.35)',
              border: '1px solid rgba(179, 142, 93, 0.3)'
            }}
          >
            {/* Top Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: '#B38E5D',
                  textTransform: 'uppercase',
                  fontWeight: 700
                }}
              >
                ESTIMATED PROJECTION
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '12px',
                  color: '#94A3B8'
                }}
              >
                Ramanathapuram Rates
              </span>
            </div>

            {/* Large Total Amount */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1
                }}
              >
                {formatLakhs(totalCost)}
              </div>
              <div style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                Exact Total: {formatINR(totalCost)} · {totalBuiltUpArea} sq.ft @ ₹{currentPackage.rate}/sq.ft
              </div>
            </div>

            {/* Key Metrics Pill Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '2rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Handover Time
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                  {timelineMonths}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Structural Warranty
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#B38E5D', marginTop: '2px' }}>
                  {selectedTier === 'luxury' ? '25 Years' : selectedTier === 'premium' ? '15 Years' : '10 Years'}
                </div>
              </div>
            </div>

            {/* Itemized Budget Allocation Bar */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.65rem' }}>
                Work Breakdown Distribution
              </div>
              {/* Progress Multi-Bar */}
              <div style={{ height: '8px', borderRadius: '4px', display: 'flex', overflow: 'hidden', marginBottom: '0.85rem' }}>
                <div style={{ width: '52%', backgroundColor: '#B38E5D' }} title="Civil Structure: 52%" />
                <div style={{ width: '23%', backgroundColor: '#E2E8F0' }} title="Finishing & Flooring: 23%" />
                <div style={{ width: '15%', backgroundColor: '#38BDF8' }} title="Electrical & Plumbing: 15%" />
                <div style={{ width: '10%', backgroundColor: '#10B981' }} title="Paint & Polish: 10%" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.76rem', color: '#CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#B38E5D' }} />
                  Civil Structure: {formatLakhs(civilCost)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E2E8F0' }} />
                  Finishing: {formatLakhs(finishingCost)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
                  MEP Systems: {formatLakhs(mepCost)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Paint & Coat: {formatLakhs(paintCost)}
                </div>
              </div>
            </div>

            {/* Included Specs Summary */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.65rem' }}>
                Key Inclusions ({currentPackage.name})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {currentPackage.features.slice(0, 4).map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={13} color="#B38E5D" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Converting Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* WhatsApp Lead Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <MessageCircle size={18} />
                WhatsApp This Estimate Now
              </a>

              {/* Free Site Consultation Button */}
              <Link
                to="/contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#B38E5D',
                  color: '#FFFFFF',
                  padding: '0.95rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(179, 142, 93, 0.35)'
                }}
              >
                Book Free On-Site Consultation
                <ArrowRight size={16} />
              </Link>

              {/* Direct Call Helper */}
              <div style={{ textAlign: 'center', marginTop: '0.25rem' }}>
                <a
                  href="tel:+916385740155"
                  style={{
                    color: '#94A3B8',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Phone size={12} color="#B38E5D" /> Or Call Engineering Team Directly: <strong style={{ color: '#FFFFFF' }}>+91 63857 40155</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ConstructionCostEstimator;
