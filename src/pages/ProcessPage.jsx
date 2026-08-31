import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { ConstructionCanvasScrubber } from '../components/construction/ConstructionCanvasScrubber';
import {
  Compass,
  FileCheck2,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Phone,
  Sparkles,
  Home,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export function ProcessPage() {
  const processMilestones = [
    {
      step: '01',
      title: 'Initial Consultation & Lifestyle Discovery',
      phase: 'PLANNING & DISCOVERY',
      desc: 'We begin with an in-depth workshop to understand your family lifestyle, spatial desires, aesthetic aspirations, and budget boundaries for your dream home.',
      deliverable: 'Client Brief Dossier & Feasibility Assessment'
    },
    {
      step: '02',
      title: 'Topographic Drone Survey & Soil Stratum Geotechnics',
      phase: 'SITE INVESTIGATION',
      desc: 'Precision total station and RTK GNSS drone mapping coupled with standard penetration soil boring to evaluate safe bearing capacity (SBC) and water table depths.',
      deliverable: 'Geotechnical Soil Testing Report & Boundary Chart'
    },
    {
      step: '03',
      title: 'Architectural Concept & 3D Spatial Modeling',
      phase: 'ARCHITECTURE',
      desc: 'Sculpting bespoke floorplans optimized for cross-ventilation, natural sun angles, privacy, and Vastu compliance, visualized in photorealistic 3D renders.',
      deliverable: '2D Working Drawings & 3D Exterior/Interior Visuals'
    },
    {
      step: '04',
      title: 'Structural Engineering & Coastal Saline Protection',
      phase: 'ENGINEERING',
      desc: 'Finite element structural simulations (ETABS/STAAD.Pro) designing Fe-550D TMT reinforcement, anti-corrosion concrete covers, and seismic-resistant RCC frames.',
      deliverable: 'Structural Calculation Book & Bar Bending Schedules'
    },
    {
      step: '05',
      title: 'Statutory DTCP Approvals & Municipal Permitting',
      phase: 'SANCTIONING',
      desc: 'Preparation of compliant submission drawings and coordination with local planning bodies (DTCP / Local Panchayats) for transparent permit acquisition.',
      deliverable: 'Approved Building Permit & Plan Sanction'
    },
    {
      step: '06',
      title: 'Subterranean Excavation & Anti-Termite Treatment',
      phase: 'EARTHWORKS',
      desc: 'Deep mechanical excavation according to datum benchmarks, followed by comprehensive chemical barrier anti-termite treatment at trench bottoms.',
      deliverable: 'Trench Level Verification & Anti-Termite Certificate'
    },
    {
      step: '07',
      title: 'Foundation Concreting & Substructure Footings',
      phase: 'FOUNDATION',
      desc: 'Pouring heavy-duty PCC and RCC isolated or raft footings using high-grade M25/M30 concrete with low water-cement ratio for coastal durability.',
      deliverable: 'Cube Compressive Strength Lab Test Reports'
    },
    {
      step: '08',
      title: 'RCC Column Framing, Beams & Slabs',
      phase: 'SUPERSTRUCTURE',
      desc: 'Precision column shuttering, vibrator compaction, and monolithic ceiling slab pours with automated curing protocols to prevent shrinkage micro-cracks.',
      deliverable: '14-Day & 28-Day Curing Verification Sheets'
    },
    {
      step: '09',
      title: 'Block Masonry & Thermal Acoustic Cavity Walls',
      phase: 'WALL ENVELOPE',
      desc: 'Erecting precision AAC blocks or high-density chamber bricks laid with polymer-modified adhesive mortar for superior insulation in tropical heat.',
      deliverable: 'Plumb & Alignment Quality Clearance'
    },
    {
      step: '10',
      title: 'Concealed MEP Infrastructure & Plumbing Pressure Tests',
      phase: 'SERVICES',
      desc: 'Installing flame-retardant FRLS copper wiring, CPVC cold/hot water networks, and acoustic soil-waste drainage pipes tested at 10 bar hydraulic pressure.',
      deliverable: 'Hydrostatic Plumbing Test Certificate'
    },
    {
      step: '11',
      title: 'Engineered Fenestration, Glazing & Facade Elements',
      phase: 'EXTERIOR ENVELOPE',
      desc: 'Fitting heavy-duty insulated UPVC / thermal-break aluminium windows with Low-E toughened glass, weatherproof silicon joints, and exterior louvers.',
      deliverable: 'Acoustic & Water Infiltration Certification'
    },
    {
      step: '12',
      title: 'Interior Architecture, Marbles & Custom Millwork',
      phase: 'INTERIOR FITOUT',
      desc: 'Installing Italian/Indian marble flooring, seamless false ceilings with ambient magnetic track lighting, modular kitchen cabinetry, and bespoke wardrobes.',
      deliverable: 'Finishes Inspection & Surface Tolerance Sign-off'
    },
    {
      step: '13',
      title: 'Biophilic Landscaping, Hardscaping & Water Harvesting',
      phase: 'EXTERNAL WORKS',
      desc: 'Designing native coastal gardens, permeable driveway pavers, perimeter compound wall security lighting, and dedicated rainwater percolation pits.',
      deliverable: 'Landscape Completion & Drainage Flow Test'
    },
    {
      step: '14',
      title: '120-Point Zero-Punch Audit & Ceremonial Handover',
      phase: 'COMPLETION',
      desc: 'Exhaustive 120-point quality checklist covering every fitting, paint sheen, smart home automation, and deep cleaning before delivering keys and warranties.',
      deliverable: '25-Year Structural Warranty & Handover Dossier'
    }
  ];

  const processFaqs = [
    {
      q: 'How long does it take to construct a house from foundation to handover?',
      a: 'A typical 2,500 to 4,500 sq.ft luxury residence takes approximately 9 to 14 months from groundbreaking to final handover, depending on architectural complexity and custom finishes.'
    },
    {
      q: 'Do you manage DTCP building plan approvals?',
      a: 'Yes. As part of our turnkey service, our architectural team prepares all statutory submission drawings, municipal compliance filings, and tracks DTCP sanctions end-to-end.'
    },
    {
      q: 'How are quality standards monitored during construction?',
      a: 'We implement a strict 120-point quality assurance protocol. This includes independent third-party concrete cube strength tests, steel tensile reports, daily digital site logs, and milestone stage sign-offs.'
    },
    {
      q: 'Can we make design modifications during the construction phase?',
      a: 'We encourage locking architectural layouts before foundation work to protect budgets and schedules. However, interior finishes, electrical layouts, and color palettes can be refined during scheduled midpoint milestones.'
    }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Our Home Construction Process | Foundation to Handover | Build My Dream"
        description="Explore the 14-stage disciplined residential construction process by Build My Dream. From architectural planning and soil geotechnics to foundation, structure, and turnkey handover."
        canonicalUrl="https://buildmydream.in/process"
      />

      {/* Breadcrumbs */}
      <div style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--text-muted)' }}>/</span>
          <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Our Construction Process</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Engineering Rigor & Quality Control</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            OUR HOME CONSTRUCTION <br />
            <span className="text-gold">PROCESS.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            A disciplined, transparent 14-milestone engineering pipeline that eliminates uncertainties, ensures structural longevity, and brings your dream home from vision to reality.
          </p>
        </div>
      </section>

      {/* Interactive 300-Frame Time-Lapse Canvas Scrubber Integration */}
      <ConstructionCanvasScrubber />

      {/* Detailed Milestone Roadmap */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Step-by-Step Delivery Roadmap</div>
          <h2 className="section-title" style={{ marginBottom: '1rem', color: '#0F172A' }}>
            THE 14 DISCIPLINARY STAGES OF CONSTRUCTION
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '3.5rem', maxWidth: '820px' }}>
            Each stage features defined engineering specifications, third-party laboratory quality tests, and written milestone sign-offs before the subsequent phase commences.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {processMilestones.map((m) => (
              <div
                key={m.step}
                className="hud-border glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                      PHASE {m.step}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      {m.phase}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {m.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {m.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#64748B', textTransform: 'uppercase' }}>
                    Key Quality Deliverable
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: '2px' }}>
                    {m.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="eyebrow" style={{ textAlign: 'center' }}>Transparency & Timelines</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem', color: '#0F172A' }}>
            FREQUENTLY ASKED QUESTIONS ABOUT OUR PROCESS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {processFaqs.map((faq, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '4px', background: '#FFFFFF' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={18} className="text-gold" style={{ flexShrink: 0 }} />
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: '1.65rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad" style={{ backgroundColor: '#0B0F14', color: '#FFFFFF', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>Ready to Begin?</div>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>
            LET'S PLAN YOUR <span className="text-gold">DREAM HOME JOURNEY.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Schedule an architectural and structural consultation with our engineering cadre in Ramanathapuram.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontWeight: 800 }}>
              Start Your Dream <ArrowUpRight size={18} />
            </Link>
            <a
              href="tel:+916385740155"
              className="btn-secondary"
              style={{ padding: '1.1rem 2rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Phone size={16} className="text-gold" /> Call: +91 63857 40155
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
