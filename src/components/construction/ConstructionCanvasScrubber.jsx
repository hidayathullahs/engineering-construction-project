import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useFramePreloader } from '../../hooks/useFramePreloader';
import { CONSTRUCTION_STAGES } from '../../data/constructionStages';
import { ChevronRight, ChevronLeft, Sparkles, ShieldCheck, Compass, CheckCircle2, Layers } from 'lucide-react';
import '../../styles/canvas.css';

export function ConstructionCanvasScrubber() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const stepperRef = useRef(null);
  const { images, progress, isTier1Ready, isFullyLoaded, totalFrames } = useFramePreloader();
  
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(CONSTRUCTION_STAGES[0]);
  const [scrubProgress, setScrubProgress] = useState(0);
  const targetFrameRef = useRef(0);
  const displayedFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // High-DPI, crisp canvas render
  const renderCanvas = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 35; offset++) {
        const prev = images[Math.max(0, frameIndex - offset)];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = images[Math.min(totalFrames - 1, frameIndex + offset)];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = 1280 / 720;
    const canvasRatio = width / height;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = width;
      drawH = width / imgRatio;
      drawX = 0;
      drawY = (height - drawH) / 2;
    } else {
      drawH = height;
      drawW = height * imgRatio;
      drawX = (width - drawW) / 2;
      drawY = 0;
    }

    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, width, height);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    ctx.restore();
  }, [images, totalFrames]);

  // Momentum loop for silky 60fps scrubbing
  useEffect(() => {
    const loop = () => {
      const diff = targetFrameRef.current - displayedFrameRef.current;
      if (Math.abs(diff) > 0.04) {
        displayedFrameRef.current += diff * 0.18;
        const frameToRender = Math.min(totalFrames - 1, Math.max(0, Math.round(displayedFrameRef.current)));
        setCurrentFrameIndex(frameToRender);
        renderCanvas(frameToRender);

        const currentStage = CONSTRUCTION_STAGES.find(
          (s) => frameToRender >= (s.startFrame ?? s.frameStart ?? 0) && frameToRender <= (s.endFrame ?? s.frameEnd ?? 299)
        ) || CONSTRUCTION_STAGES[0];

        setActiveStage((prev) => (prev.id !== currentStage.id ? currentStage : prev));
        setScrubProgress(Math.round((frameToRender / (totalFrames - 1)) * 100));
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderCanvas, totalFrames]);

  // Auto-scroll the active stage button inside the right-hand stepper list (container only)
  useEffect(() => {
    if (stepperRef.current) {
      const activeEl = stepperRef.current.querySelector('.timeline-step-btn.active');
      if (activeEl) {
        const stepper = stepperRef.current;
        const activeOffsetTop = activeEl.offsetTop;
        const targetScroll = activeOffsetTop - stepper.clientHeight / 2 + activeEl.clientHeight / 2;
        stepper.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }
  }, [activeStage]);

  // Scroll listener mapped to 0..299 frames
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDist = container.offsetHeight - window.innerHeight;

      if (scrollableDist <= 0) return;

      const scrolledY = -rect.top;
      const progressRatio = Math.max(0, Math.min(1, scrolledY / scrollableDist));

      targetFrameRef.current = progressRatio * (totalFrames - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // Jump to specific milestone smoothly
  const jumpToStage = (stage) => {
    const start = stage.startFrame ?? stage.frameStart ?? 0;
    targetFrameRef.current = start;
    const container = containerRef.current;
    if (container) {
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const scrollableDist = container.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (start / (totalFrames - 1)) * scrollableDist;

      if (window.__lenis) {
        window.__lenis.scrollTo(targetScroll, { duration: 1.0 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  const handlePrevStage = () => {
    const currentIndex = CONSTRUCTION_STAGES.findIndex((s) => s.id === activeStage.id);
    if (currentIndex > 0) {
      jumpToStage(CONSTRUCTION_STAGES[currentIndex - 1]);
    }
  };

  const handleNextStage = () => {
    const currentIndex = CONSTRUCTION_STAGES.findIndex((s) => s.id === activeStage.id);
    if (currentIndex < CONSTRUCTION_STAGES.length - 1) {
      jumpToStage(CONSTRUCTION_STAGES[currentIndex + 1]);
    }
  };

  return (
    <>
      <section
        id="construction-journey"
        ref={containerRef}
        className="scrubber-section"
        style={{
          height: '450vh',
          position: 'relative',
          backgroundColor: '#0F172A',
          borderTop: '1px solid rgba(15, 23, 42, 0.08)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
        }}
      >
        {/* Sticky Viewport Container */}
        <div className="scrubber-sticky-viewport">
          <div className="canvas-wrapper">
            {/* HTML5 2D Canvas */}
            <canvas ref={canvasRef} className="construction-canvas" />

            {/* Preloader Overlay if buffering */}
            {!isTier1Ready && (
              <div className="canvas-loader-overlay">
                <div style={{ textAlign: 'center', color: '#0F172A' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontWeight: 800 }}>
                    BUFFERING 300-FRAME TIME-LAPSE // {progress}%
                  </div>
                  <div style={{ width: '220px', height: '3px', backgroundColor: 'rgba(15, 23, 42, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent-gold)', transition: 'width 0.1s' }} />
                  </div>
                </div>
              </div>
            )}

            {/* High-Contrast Luxury Glass HUD Overlay */}
            <div className="canvas-hud-overlay">
              {/* Top Bar HUD */}
              <div className="hud-top-bar">
                <div className="hud-brand-tag">
                  <div className="hud-pulse-dot" />
                  <span style={{ fontWeight: 800 }}>SIGNATURE EXPERIENCE // BUILD YOUR DREAM</span>
                </div>

                <div className="hud-telemetry">
                  <span>60 FPS</span>
                  <span>FRAME {String(currentFrameIndex + 1).padStart(3, '0')}/300</span>
                  <span>ELEV {activeStage.elevation || '±0.00m'}</span>
                </div>
              </div>

              {/* Center Title Badge */}
              <div className="hud-center-badge">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', fontWeight: 800 }}>
                  YOUR DREAM HOME, BUILT STEP BY STEP
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#0F172A' }}>
                  {activeStage.name}
                </div>
              </div>

              {/* Right Vertical Timeline Navigation Dock */}
              <div ref={stepperRef} className="hud-timeline-stepper desktop-only">
                <div className="hud-timeline-header">
                  <span>STAGES</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>16</span>
                </div>
                {CONSTRUCTION_STAGES.map((st) => {
                  const isActive = st.id === activeStage.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => jumpToStage(st)}
                      className={`timeline-step-btn ${isActive ? 'active' : ''}`}
                      title={st.title}
                    >
                      <span className="timeline-step-label">
                        {st.name}
                      </span>
                      <span className="timeline-step-dot" />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Bar: Stage Card & Scrub Controller */}
              <div className="hud-bottom-bar">
                {/* Active Stage Editorial Card */}
                <div className="hud-stage-card">
                  <div className="hud-stage-number">
                    <span>STAGE 0{activeStage.stageNumber} OF 16</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{activeStage.phase}</span>
                  </div>
                  <h3 className="hud-stage-title">{activeStage.title}</h3>
                  <p className="hud-stage-desc">{activeStage.description}</p>

                  {/* Technical Engineering Specifications */}
                  <div className="hud-stage-specs">
                    {activeStage.specs && activeStage.specs.map((sp, idx) => (
                      <div key={idx} className="hud-spec-item">
                        <span className="hud-spec-label">{sp.label}</span>
                        <span className="hud-spec-value">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Stage Controls */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button
                        onClick={handlePrevStage}
                        className="btn-outline-gold"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.74rem', fontWeight: 700 }}
                        title="Previous Stage"
                      >
                        <ChevronLeft size={13} /> Prev
                      </button>
                      <button
                        onClick={handleNextStage}
                        className="btn-outline-gold"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.74rem', fontWeight: 700 }}
                        title="Next Stage"
                      >
                        Next <ChevronRight size={13} />
                      </button>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#475569', fontWeight: 600 }}>
                      SCROLL DOWN TO ADVANCE ↓
                    </div>
                  </div>
                </div>

                {/* Bottom Scrub Track */}
                <div className="hud-scrub-bar-wrap">
                  <div className="hud-scrub-labels">
                    <span>01 SITE PREPARATION</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>PROGRESS: {scrubProgress}%</span>
                    <span>16 COMPLETION</span>
                  </div>
                  <div
                    className="hud-scrub-track"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      const targetFrame = Math.round(ratio * (totalFrames - 1));
                      targetFrameRef.current = targetFrame;
                      const container = containerRef.current;
                      if (container) {
                        const containerTop = container.getBoundingClientRect().top + window.scrollY;
                        const scrollableDist = container.offsetHeight - window.innerHeight;
                        const targetScroll = containerTop + ratio * scrollableDist;
                        if (window.__lenis) {
                          window.__lenis.scrollTo(targetScroll, { duration: 0.8 });
                        } else {
                          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                        }
                      }
                    }}
                    title="Click to jump progress"
                  >
                    <div
                      className="hud-scrub-fill"
                      style={{ width: `${scrubProgress}%` }}
                    />
                    <div
                      className="hud-scrub-handle"
                      style={{ left: `${scrubProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crawlable Semantic HTML for Search Engines & Accessibility */}
      <section
        className="section-pad"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
        }}
        aria-label="Comprehensive 16-Stage House Construction Process"
      >
        <div className="container">
          <div className="eyebrow">Engineering Rigor & Quality Control</div>
          <h2 className="section-title" style={{ color: '#0F172A', marginBottom: '1rem' }}>
            HOUSE CONSTRUCTION PROCESS: FROM FOUNDATION TO HANDOVER
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem', maxWidth: '850px' }}>
            Every home built by Build My Dream follows a disciplined, 16-milestone engineering pipeline designed for structural longevity, thermal comfort, and flawless finishes in Ramanathapuram.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {CONSTRUCTION_STAGES.map((stage) => (
              <article
                key={stage.id}
                className="hud-border glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 800 }}>
                      MILESTONE 0{stage.stageNumber} // 16
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      {stage.phase}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                    {stage.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {stage.description}
                  </p>
                </div>

                {stage.specs && (
                  <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {stage.specs.map((sp, idx) => (
                      <div key={idx}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#64748B', textTransform: 'uppercase' }}>
                          {sp.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
                          {sp.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
