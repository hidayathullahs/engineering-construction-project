import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import {
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Compass,
  Layers,
  Phone,
  Mail,
  Home,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export function RamanathapuramLocationPage() {
  const localServices = [
    {
      title: 'House Construction in Ramanathapuram',
      desc: 'Complete residential building solutions with M25/M30 grade concrete, anti-corrosion TMT steel, and precision site supervision tailored for Ramanathapuram soil.',
      link: '/services/home-construction'
    },
    {
      title: 'Architectural Design for Homes',
      desc: 'Bespoke contemporary, traditional Chettinad-fusion, and modern villa floorplans designed for maximum natural cross-ventilation and daylight.',
      link: '/services/architectural-design'
    },
    {
      title: 'Structural Engineering & Foundations',
      desc: 'Soil-specific structural calculations, raft/pile foundations for coastal and alluvial strata, and seismic-resistant RCC frame designs.',
      link: '/services/structural-engineering'
    },
    {
      title: 'Home Interior Design & Finishes',
      desc: 'Modular kitchens, custom woodwork, Italian marble/vitrified flooring, false ceilings, and ambient architectural lighting.',
      link: '/services/interior-design'
    },
    {
      title: 'Turnkey Home Construction',
      desc: 'End-to-end single-source delivery from architectural blueprints and municipality approvals to foundation, interiors, and key handover.',
      link: '/services/turnkey-construction'
    },
    {
      title: 'Home Renovation & Extensions',
      desc: 'Transforming existing residential properties with modern vertical expansions, structural retrofitting, and contemporary façade redesigns.',
      link: '/services/renovation'
    }
  ];

  const serviceAreas = [
    { name: 'Ramanathapuram Town (HQ)', desc: 'Kenikarai, Pattinamkattan, Bharati Nagar, Collectorate Area' },
    { name: 'Kilakarai', desc: 'Coastal luxury villas, contemporary waterfront residences' },
    { name: 'Rameswaram', desc: 'Pilgrim residences, modern coastal homes, guesthouses' },
    { name: 'Paramakudi', desc: 'Custom family homes, modern multi-storey residences' },
    { name: 'Mandapam', desc: 'Marine-resistant homes, coastal residential estates' },
    { name: 'Mudukulathur & Kamuthi', desc: 'Spacious rural farmhouses, modern suburban villas' },
    { name: 'Devipattinam & Thondi', desc: 'Coastal bungalows, gated private family plots' }
  ];

  const localFaqs = [
    {
      q: 'How much does it cost to build a house in Ramanathapuram?',
      a: 'Residential house construction costs in Ramanathapuram typically range from ₹1,850 to ₹2,600 per sq.ft. for standard to premium turnkey construction, and ₹2,800+ per sq.ft. for luxury architectural villas. Costs depend on foundation depth, architectural complexity, and interior finish grades.'
    },
    {
      q: 'Why is coastal engineering expertise important in Ramanathapuram?',
      a: 'Due to coastal saline atmospheric exposure and specific sandy or clay soil conditions in parts of Ramanathapuram district, buildings require specialized anti-corrosive epoxy-coated TMT bars, sulfate-resistant cement mixes, and precise cover blocks to prevent long-term concrete spalling.'
    },
    {
      q: 'How long does it take to construct a turnkey home in Ramanathapuram?',
      a: 'A typical 2,000 to 3,500 sq.ft. custom home in Ramanathapuram takes approximately 6 to 9 months from site excavation to final interior handover, backed by our contractual milestone timeline guarantee.'
    },
    {
      q: 'Do you help with local building plan approvals and municipality permits?',
      a: 'Yes. As part of our turnkey service in Ramanathapuram, we prepare DTCP and local municipality compliant architectural and structural drawings and coordinate the approval process.'
    },
    {
      q: 'Can you construct on an existing architectural plan I already have?',
      a: 'Absolutely. We review your existing drawings, perform a structural engineering audit, and provide a transparent, itemized turnkey civil construction estimate.'
    }
  ];

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      <SEOHead
        title="Home Builders in Ramanathapuram | Build My Dream"
        description="Looking for trusted home builders in Ramanathapuram, Tamil Nadu? Build My Dream provides premium house construction, architectural design, structural engineering, and turnkey home building."
        canonicalUrl="https://buildmydream.in/locations/ramanathapuram"
      />

      {/* Hero Header */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">
            <MapPin size={14} className="text-gold" /> Ramanathapuram, Tamil Nadu, India
          </div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            HOME BUILDERS IN <br />
            <span className="text-gold">RAMANATHAPURAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Designing and constructing beautiful, climate-responsive, and structurally resilient dream homes across Ramanathapuram district with single-source turnkey accountability.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.25rem', fontWeight: 800 }}>
              Start Your Dream in Ramanathapuram <ArrowUpRight size={16} />
            </Link>
            <a
              href="tel:+916385740155"
              className="btn-secondary"
              style={{ padding: '1rem 2rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Phone size={15} className="text-gold" /> Call: +91 63857 40155
            </a>
          </div>
        </div>
      </section>

      {/* Local Engineering & Trust Value */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Built for Ramanathapuram Climate & Soils</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            WHY HOMEOWNERS IN RAMANATHAPURAM CHOOSE BUILD MY DREAM
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem', maxWidth: '850px' }}>
            Constructing a home in Ramanathapuram requires deep engineering familiarity with coastal breezes, high summer temperatures, and localized sub-soil strata.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '6px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                Saline & Coastal Protection
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We incorporate anti-corrosive Fe-550D TMT reinforcement, premium grade concrete mixes with low water-cement ratios, and weather-shield coatings to guard against coastal salinity.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '6px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                Bioclimatic Passive Cooling
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Floorplans engineered with strategic window orientations, courtyards, and double-glazed thermal breaks that reduce indoor heat during peak Tamil Nadu summer months.
              </p>
            </div>

            <div className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '6px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                <Layers size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                Transparent Turnkey Pricing
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Clear, itemized bill of quantities (BOQ) with zero hidden escalations. You know exactly what materials, brands, and milestones are included before work commences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Ramanathapuram */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Comprehensive Solutions</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2.5rem' }}>
            RESIDENTIAL CONSTRUCTION SERVICES IN RAMANATHAPURAM
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {localServices.map((svc, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '2.25rem', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {svc.desc}
                  </p>
                </div>
                <Link to={svc.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800 }}>
                  Explore Service Details <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(15, 23, 42, 0.08)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Local Coverage</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            AREAS WE SERVE ACROSS RAMANATHAPURAM DISTRICT
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem', maxWidth: '850px' }}>
            Our construction crews, project managers, and architects manage active home building sites across all key residential zones in the district:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.5rem', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <MapPin size={16} className="text-gold" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                    {area.name}
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="eyebrow">Home Builder FAQs</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '2.5rem' }}>
            FREQUENTLY ASKED QUESTIONS ABOUT HOME CONSTRUCTION IN RAMANATHAPURAM
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {localFaqs.map((faq, idx) => (
              <div key={idx} className="hud-border glass-card" style={{ padding: '1.75rem', borderRadius: '6px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <HelpCircle size={18} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, paddingLeft: '1.65rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: '5.5rem 0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Direct Local Consultation</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', margin: '0.75rem 0 1.25rem 0' }}>
            BUILD YOUR DREAM HOME IN RAMANATHAPURAM
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Speak directly with our Lead Director to schedule a plot visit, discuss your floorplan requirements, and receive a transparent project quotation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem', fontWeight: 800 }}>
              Request Project Estimate <ArrowUpRight size={18} />
            </Link>
            <a
              href="tel:+916385740155"
              className="btn-secondary"
              style={{ padding: '1.1rem 2.25rem', background: '#FFFFFF', color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Phone size={16} className="text-gold" /> Call +91 63857 40155
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
