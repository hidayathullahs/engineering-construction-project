import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, UploadCloud, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial High-Rise',
    scale: '10,000 m² - 50,000 m²',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email.';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact number is required.';
    if (!formData.location.trim()) errs.location = 'Project site location is required.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide at least 15 characters of project detail.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 1200);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  return (
    <div className="bg-blueprint-grid" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6.5rem' }}>
      {/* Hero Header */}
      <section className="section-pad" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
        <div className="container">
          <div className="eyebrow">Project Procurement & RFP</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            LET’S BUILD <br />
            <span className="text-gold">WHAT’S NEXT.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Initiate a confidential project consultation, request engineering RFP tenders, or discuss turnkey construction delivery with our executive engineering cadre.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
            {/* Left Form */}
            <div className="hud-border glass-card" style={{ padding: 'clamp(1.75rem, 3vw, 3rem)', borderRadius: '4px' }}>
              {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--accent-gold)' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                    Project Enquiry Transmitted
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                    Thank you, <strong style={{ color: '#0F172A' }}>{formData.fullName}</strong>. Our Principal Engineering Group has registered your request. An assigned project director will review your technical parameters and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ fullName: '', email: '', phone: '', company: '', projectType: 'Commercial High-Rise', scale: '10,000 m² - 50,000 m²', location: '', message: '' });
                      setUploadedFileName('');
                    }}
                    className="btn-outline-gold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Project Specification Form</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.75rem', color: '#0F172A' }}>
                    Submit Technical Parameters
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Johnathan Sterling"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                      {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. sterling@capitaldev.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Contact Phone *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Organization / Client</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Sterling Infrastructure REIT"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Project Type</label>
                      <select
                        className="form-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option>Commercial High-Rise</option>
                        <option>Luxury Residential Estate</option>
                        <option>Civil Infrastructure & Bridges</option>
                        <option>Industrial Cleanroom / Manufacturing</option>
                        <option>Transit Hub / Aviation</option>
                        <option>Healthcare & Life Sciences</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Estimated Gross Floor Area</label>
                      <select
                        className="form-select"
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                      >
                        <option>&lt; 10,000 m²</option>
                        <option>10,000 m² - 50,000 m²</option>
                        <option>50,000 m² - 150,000 m²</option>
                        <option>&gt; 150,000 m² (Mega-Structure)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Site Location *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. London Docklands / Bay Area, CA / Singapore Marina"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    {errors.location && <span className="form-error">{errors.location}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Engineering Scope & Requirements *</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      placeholder="Describe architectural vision, structural requirements, timeline constraints, or target sustainability certifications (LEED/BREEAM)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {/* Architectural Blueprint Dropzone */}
                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Attach CAD / BIM Blueprint Files (Optional)</label>
                    <label
                      style={{
                        border: '1.5px dashed rgba(179, 142, 93, 0.4)',
                        background: '#FFFFFF',
                        borderRadius: '4px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <UploadCloud size={24} className="text-gold" />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#0F172A', fontWeight: 600 }}>
                        {uploadedFileName ? `Attached: ${uploadedFileName}` : 'Drag & drop IFC, DWG, RVT, or PDF blueprints'}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Maximum payload 100MB per file transfer
                      </span>
                      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', padding: '1.2rem', fontSize: '0.9rem' }}
                  >
                    {isSubmitting ? 'Transmitting RFP Parameters...' : 'Transmit Project Enquiry'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Information & Headquarters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="hud-border glass-card" style={{ padding: '2.5rem', borderRadius: '4px' }}>
                <div className="eyebrow">Direct Executive Access</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                  Headquarters & Regional Hubs
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>Global Engineering Center</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        100 California Street, Financial District<br />
                        San Francisco, CA 94111, USA
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Mail size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>Institutional Enquiries</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        rfp@vertex-engineering.com<br />
                        executive@vertex-engineering.com
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Phone size={20} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>Direct CAD/BIM Hotline</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        +1 (800) 458-7200 (Toll Free)<br />
                        +1 (415) 890-3320 (Direct International)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Audit Badge */}
              <div className="hud-border glass-card" style={{ padding: '2rem', borderRadius: '4px', borderLeft: '4px solid var(--accent-gold)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', marginBottom: '0.35rem', fontWeight: 700 }}>
                  CONFIDENTIALITY & NDA PROTOCOL
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  All uploaded architectural drawings, geotechnical surveys, and budgetary requirements are governed by strict commercial non-disclosure agreements and institutional encryption standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
