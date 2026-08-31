import React, { useState } from 'react';
import { Compass, Users, PenTool, FileCheck, Cpu, Hammer, ShieldCheck, Key, CheckCircle2 } from 'lucide-react';

export function EngineeringProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      code: '01',
      title: 'DISCOVER',
      subtitle: 'Vision & Site Orientation',
      icon: Compass,
      desc: 'We explore your lifestyle, family needs, architectural style preferences, solar orientation, and topographical site contours.'
    },
    {
      code: '02',
      title: 'CONSULT',
      subtitle: 'Architectural Brief & Budgeting',
      icon: Users,
      desc: 'Our lead architects establish clear project parameters, realistic budget tiers, room schedules, and target construction milestones.'
    },
    {
      code: '03',
      title: 'DESIGN',
      subtitle: '3D Spatial CGI & Floor Plans',
      icon: PenTool,
      desc: 'Iterative floor plan optimization, interior-exterior circulation, photorealistic 3D renders, and tactile material boards.'
    },
    {
      code: '04',
      title: 'APPROVE',
      subtitle: 'Client Sign-off & Statutory Permits',
      icon: FileCheck,
      desc: 'Final architectural blueprint approvals, municipal zoning clearances, and transparent fixed-price contract commitments.'
    },
    {
      code: '05',
      title: 'ENGINEER',
      subtitle: 'Seismic Structural & MEP Modeling',
      icon: Cpu,
      desc: 'Finite Element Analysis load calculations, foundation micropiling specs, smart home wiring, and acoustic insulation detailing.'
    },
    {
      code: '06',
      title: 'BUILD',
      subtitle: 'Precision Construction & Craft',
      icon: Hammer,
      desc: 'Substructure excavation, reinforced concrete superstructure, bespoke artisanal millwork, and daily digital photographic logs.'
    },
    {
      code: '07',
      title: 'INSPECT',
      subtitle: 'Sub-Millimeter Quality Assurance',
      icon: ShieldCheck,
      desc: 'Ultrasonic rebar scans, 48-hour continuous flood testing, air tightness checks, and rigorous multi-point snag inspections.'
    },
    {
      code: '08',
      title: 'HANDOVER',
      subtitle: 'Your Dream Home Realized',
      icon: Key,
      desc: 'White-glove deep cleaning, smart home automation orientation, digital BIM model transfer, keys ceremony, and 25-year structural warranty.'
    }
  ];

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow">Our Methodology</div>
          <h2 className="section-title" style={{ color: '#0F172A' }}>FROM VISION TO REALITY — STEP BY STEP</h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            A disciplined 8-stage turnkey workflow guaranteeing transparent communication, architectural beauty, and engineering excellence.
          </p>
        </div>

        {/* 8-Stage Horizontal Pipeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.code}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                  border: isActive ? '2px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.1)',
                  borderRadius: '4px',
                  padding: '1.25rem 0.85rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 8px 24px rgba(179, 142, 93, 0.18)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: isActive ? 'var(--accent-gold)' : '#64748B', fontWeight: 800 }}>
                    {step.code}
                  </span>
                  <Icon size={16} color={isActive ? 'var(--accent-gold)' : '#64748B'} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 800, color: isActive ? '#0F172A' : '#475569', lineHeight: 1.2 }}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector Card */}
        <div
          className="hud-border glass-card"
          style={{
            padding: '2.75rem 3rem',
            borderRadius: '6px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)'
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              STAGE {steps[activeStep].code} OF 08
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>
              {steps[activeStep].title} — {steps[activeStep].subtitle}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginTop: '1rem' }}>
              {steps[activeStep].desc}
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid rgba(179, 142, 93, 0.3)', borderRadius: '4px', padding: '1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Milestone Assurance
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 600 }}>
                <CheckCircle2 size={16} className="text-gold" /> Dedicated Architectural Lead
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 600 }}>
                <CheckCircle2 size={16} className="text-gold" /> Transparent Weekly Progress Reports
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 600 }}>
                <CheckCircle2 size={16} className="text-gold" /> Formal Client Sign-Off Before Next Phase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
