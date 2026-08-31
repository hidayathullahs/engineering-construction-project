import React from 'react';
import { PenTool, Cpu, Layers, FileCheck, HardHat, Sparkles, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export function TrustClientsSection() {
  const principles = [
    {
      icon: PenTool,
      title: 'DESIGN-FIRST ARCHITECTURE',
      desc: 'Bespoke contemporary residential floorplans and facades optimized for sunlight, ventilation, and family flow.'
    },
    {
      icon: Cpu,
      title: 'ENGINEERING PRECISION',
      desc: 'Seismic FEA modeling, deep foundation analysis, and sub-millimeter laser Total Station calibration.'
    },
    {
      icon: Layers,
      title: 'PREMIUM QUALITY MATERIALS',
      desc: 'FSC-certified hardwoods, low-VOC finishes, Italian porcelain, and laboratory-tested C45/55 concrete.'
    },
    {
      icon: FileCheck,
      title: 'TRANSPARENT PROCESS',
      desc: 'Clear milestone schedules, itemized Bill of Quantities (BOQ), and zero hidden fees or mid-project cost escalations.'
    },
    {
      icon: HardHat,
      title: 'DEDICATED ON-SITE SUPERVISION',
      desc: 'Full-time chartered site engineers supervising every foundation pour, rebar tie, and finishing detail.'
    },
    {
      icon: Sparkles,
      title: 'MASTER ARTISANAL CRAFT',
      desc: 'Flawless flush baseboards, shadow gaps, book-matched stone, and bespoke custom architectural millwork.'
    },
    {
      icon: ShieldCheck,
      title: 'ZERO-HARM SAFETY DISCIPLINE',
      desc: 'Rigorous safety governance, perimeter environmental dust controls, and certified worker protection.'
    },
    {
      icon: Clock,
      title: 'GUARANTEED TURNKEY DELIVERY',
      desc: 'Contractually committed handover dates backed by our comprehensive 25-year structural warranty.'
    }
  ];

  return (
    <section id="why-us" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '5.5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>The Build My Dream Advantage</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#0F172A' }}>
            WHY BUILD YOUR DREAM WITH US
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0 auto' }}>
            We combine world-class architectural design, rigorous structural engineering, and master craftsmanship into a seamless, stress-free homeowner experience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="hud-border glass-card"
                style={{
                  padding: '2.25rem 2rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                  <Icon size={22} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#0F172A', marginTop: '0.25rem' }}>
                  {p.title}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {p.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
