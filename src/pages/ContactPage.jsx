import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, UploadCloud, ArrowUpRight, Sparkles, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    homeType: 'Custom Modern Villa',
    budget: '₹50L–₹1Cr',
    expectedStart: '1–3 Months',
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
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.city.trim()) errs.city = 'City / Location is required.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please share at least 15 characters about your dream home vision.';
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
      }, 1000);
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
          <div className="eyebrow">Start Your Journey</div>
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
            LET’S BUILD <br />
            <span className="text-gold">YOUR DREAM.</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '850px' }}>
            Tell us what you're imagining. Our architects and structural engineers will craft a tailor-made design concept and transparent feasibility roadmap for your home.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
            {/* Left Form */}
            <div className="hud-border glass-card" style={{ padding: 'clamp(1.75rem, 3vw, 3rem)', borderRadius: '6px' }}>
              {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(179, 142, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--accent-gold)' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>
                    Dream Home Brief Received!
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                    Thank you, <strong style={{ color: '#0F172A' }}>{formData.fullName}</strong>. Our Principal Architectural Group has registered your request. An assigned project director will review your vision and connect within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ fullName: '', email: '', phone: '', city: '', homeType: 'Custom Modern Villa', budget: '₹50L–₹1Cr', expectedStart: '1–3 Months', message: '' });
                      setUploadedFileName('');
                    }}
                    className="btn-outline-gold"
                    style={{ padding: '0.85rem 1.75rem', fontWeight: 700 }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Dream Home Specification</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 900, marginBottom: '1.75rem', color: '#0F172A' }}>
                    Tell Us What You're Imagining
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Marcus Aurelius"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                      {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. marcus@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">City / Location *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Bangalore / Mumbai / Hyderabad"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                      {errors.city && <span className="form-error">{errors.city}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Home Type</label>
                      <select
                        className="form-select"
                        value={formData.homeType}
                        onChange={(e) => setFormData({ ...formData, homeType: e.target.value })}
                      >
                        <option>Custom Modern Villa</option>
                        <option>Luxury Contemporary Residence</option>
                        <option>Hillside / Coastal Estate</option>
                        <option>Complete Luxury Renovation</option>
                        <option>Multi-Generation Family Home</option>
                        <option>Turnkey Architectural Build</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Budget</label>
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option>Below ₹25L</option>
                        <option>₹25L–₹50L</option>
                        <option>₹50L–₹1Cr</option>
                        <option>₹1Cr+</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Expected Start Timeline</label>
                    <select
                      className="form-select"
                      value={formData.expectedStart}
                      onChange={(e) => setFormData({ ...formData, expectedStart: e.target.value })}
                    >
                      <option>Immediate (Within 1 Month)</option>
                      <option>1–3 Months</option>
                      <option>3–6 Months</option>
                      <option>Planning Stage (6+ Months)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Vision, Requirements & Notes *</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      placeholder="Describe your plot size, number of bedrooms, architectural style preferences (modern, minimalist, Mediterranean, tropical), key amenities (pool, home theater, garden court), and any special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {/* Optional File / CAD Attachment Dropzone */}
                  <div className="form-group">
                    <label className="form-label">Plot Layout / Reference CAD / Photos (Optional)</label>
                    <label
                      style={{
                        border: '2px dashed rgba(179, 142, 93, 0.35)',
                        borderRadius: '4px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        background: 'rgba(255, 255, 255, 0.5)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <UploadCloud size={24} className="text-gold" />
                      <div style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 600 }}>
                        {uploadedFileName ? uploadedFileName : 'Click or drop site layout, floorplan sketches or photos'}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                        PDF, DWG, DXF, PNG, JPG (Max 50MB)
                      </div>
                      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', padding: '1.1rem', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, marginTop: '1rem' }}
                  >
                    {isSubmitting ? 'Transmitting Brief...' : 'Start My Dream →'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Information & Direct Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div className="eyebrow">Studio Consultation</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                  Direct Architectural Channels
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Prefer an immediate discussion? Speak directly with our lead residential architect or schedule a private studio consultation.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="hud-border glass-card" style={{ padding: '1.5rem', borderRadius: '4px', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>Direct Studio Inquiries</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>studio@buildmydream.com</div>
                  </div>
                </div>

                <div className="hud-border glass-card" style={{ padding: '1.5rem', borderRadius: '4px', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>Executive Concierge</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>+1 (800) 555-DREAM</div>
                  </div>
                </div>

                <div className="hud-border glass-card" style={{ padding: '1.5rem', borderRadius: '4px', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: 'rgba(179, 142, 93, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>Architectural Design Studio</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>500 Grand Architectural Way, CA</div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div style={{ background: '#FFFFFF', border: '1px solid rgba(179, 142, 93, 0.3)', borderRadius: '6px', padding: '1.75rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                  Our Homeowner Commitments
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} className="text-gold" /> Guaranteed 24-Hour Executive Consultation Response
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} className="text-gold" /> Fixed-Price Turnkey Contracts with Zero Hidden Escalations
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} className="text-gold" /> Comprehensive 25-Year Structural Integrity Warranty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
