import React, { useState } from 'react';
import { Compass, FileText, Cpu, Calendar, Hammer, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function EngineeringProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      code: '01',
      title: 'DISCOVER',
      subtitle: 'Geotechnical & Site Analysis',
      icon: Compass,
      desc: 'Topographical scanning, core sample soil mechanics testing, hydrological survey, and regulatory zoning review.'
    },
    {
      code: '02',
      title: 'DESIGN',
      subtitle: 'Architectural & Bioclimatic Modeling',
      icon: FileText,
      desc: 'Conceptual spatial layout, daylight simulation, CFD natural airflow analysis, and facade materiality selection.'
    },
    {
      code: '03',
      title: 'ENGINEER',
      subtitle: 'Finite Element & Seismic Simulation',
      icon: Cpu,
      desc: 'Non-linear dynamic load calculations, post-tensioned tendon profiling, outrigger truss tuning, and wind tunnel testing.'
    },
    {
      code: '04',
      title: 'PLAN',
      subtitle: '4D BIM Logistics & Cost Matrix',
      icon: Calendar,
      desc: 'Clash resolution across architectural and MEP models, procurement schedule synchronization, and risk mitigation.'
    },
    {
      code: '05',
      title: 'BUILD',
      subtitle: 'Self-Performing Field Execution',
      icon: Hammer,
      desc: 'Deep excavation shoring, monolithic raft foundation pour, self-climbing hydraulic formwork, and crane rigging.'
    },
    {
      code: '06',
      title: 'INSPECT',
      subtitle: 'Millimetric Laser QA & Testing',
      icon: ShieldCheck,
      desc: 'NDT ultrasonic rebar scanning, 28-day concrete cylinder breaks, thermal infrared facade scans, and pressure tests.'
    },
    {
      code: '07',
      title: 'DELIVER',
      subtitle: 'Zero-Punch Commissioning & Handover',
      icon: CheckCircle2,
      desc: 'Digital twin model delivery, BMS automation tuning, occupancy certification, and long-term asset monitoring.'
    }
  ];

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Flawless Execution Pipeline</div>
          <h2 className="section-title" style={{ color: '#0F172A' }}>THE VERTEX ENGINEERING PROCESS</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
            A disciplined 7-stage delivery methodology ensuring millimetric precision from ground survey to final commissioning.
          </p>
        </div>

        {/* Step Progression Timeline Selector */}
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '3rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          {/* Progress Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '5%',
              right: '5%',
              height: '2px',
              backgroundColor: 'rgba(15, 23, 42, 0.1)',
              zIndex: 1
            }}
            className="desktop-only"
          />

          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const isPast = idx < activeStep;
            const Icon = step.icon;

            return (
              <button
                key={step.code}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isCurrent ? 'var(--accent-gold)' : isPast ? 'rgba(179, 142, 93, 0.15)' : '#FFFFFF',
                  border: isCurrent ? '1px solid var(--accent-gold)' : '1px solid rgba(15, 23, 42, 0.12)',
                  borderRadius: '4px',
                  padding: '1rem 0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  minWidth: '130px',
                  flex: 1,
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: isCurrent ? '0 8px 24px rgba(179, 142, 93, 0.3)' : '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ color: isCurrent ? '#FFFFFF' : isPast ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: isCurrent ? '#FFFFFF' : '#0F172A' }}>
                  {step.code} {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed View for Active Step */}
        <div className="hud-border glass-card" style={{ padding: '2.5rem', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow">PHASE {steps[activeStep].code} OF 07</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>
                {steps[activeStep].title} — {steps[activeStep].subtitle}
              </h3>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', background: 'var(--accent-gold-dim)', padding: '0.45rem 1rem', borderRadius: '2px', fontWeight: 700, border: '1px solid rgba(179, 142, 93, 0.3)' }}>
              GATEWAY PASS VERIFICATION REQUIRED
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {steps[activeStep].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
