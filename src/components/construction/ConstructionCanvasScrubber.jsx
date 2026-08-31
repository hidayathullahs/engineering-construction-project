import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useFramePreloader } from '../../hooks/useFramePreloader';
import { CONSTRUCTION_STAGES } from '../../data/constructionStages';
import { ChevronRight, ChevronLeft, Layers, ShieldCheck, Activity, Compass } from 'lucide-react';
import '../../styles/canvas.css';

export function ConstructionCanvasScrubber() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
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
      for (let offset = 1; offset < 25; offset++) {
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

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(drawW), Math.round(drawH));

    ctx.restore();
  }, [images, totalFrames]);

  // Smooth lerp frame loop for cinematic fluidity
  useEffect(() => {
    const loop = () => {
      const target = targetFrameRef.current;
      const current = displayedFrameRef.current;

      const diff = target - current;
      if (Math.abs(diff) > 0.05) {
        // Smooth interpolation step
        displayedFrameRef.current += diff * 0.35;
        const roundedFrame = Math.min(totalFrames - 1, Math.max(0, Math.round(displayedFrameRef.current)));
        setCurrentFrameIndex(roundedFrame);

        const stage = CONSTRUCTION_STAGES.find(
          (s) => roundedFrame >= s.startFrame && roundedFrame <= s.endFrame
        ) || CONSTRUCTION_STAGES[CONSTRUCTION_STAGES.length - 1];
        setActiveStage(stage);

        renderCanvas(roundedFrame);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderCanvas, totalFrames]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrolled = Math.max(0, Math.min(scrollHeight, -rect.top));
      const rawProgress = scrolled / scrollHeight;
      setScrubProgress(rawProgress);

      const target = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(rawProgress * (totalFrames - 1)))
      );
      targetFrameRef.current = target;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // Re-render on resize or initial load
  useEffect(() => {
    renderCanvas(currentFrameIndex);
    const handleResize = () => renderCanvas(currentFrameIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrameIndex, isTier1Ready, isFullyLoaded, renderCanvas]);

  // Jump to specific construction stage smoothly
  const jumpToStage = (stage) => {
    const container = containerRef.current;
    if (!container) return;

    const midFrame = Math.floor((stage.startFrame + stage.endFrame) / 2);
    const targetProgress = midFrame / (totalFrames - 1);

    const containerTop = container.offsetTop;
    const scrollHeight = container.clientHeight - window.innerHeight;
    const targetScrollY = containerTop + (targetProgress * scrollHeight);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  const handleNextStage = () => {
    const currentIndex = CONSTRUCTION_STAGES.findIndex((s) => s.id === activeStage.id);
    if (currentIndex < CONSTRUCTION_STAGES.length - 1) {
      jumpToStage(CONSTRUCTION_STAGES[currentIndex + 1]);
    }
  };

  const handlePrevStage = () => {
    const currentIndex = CONSTRUCTION_STAGES.findIndex((s) => s.id === activeStage.id);
    if (currentIndex > 0) {
      jumpToStage(CONSTRUCTION_STAGES[currentIndex - 1]);
    }
  };

  return (
    <section
      id="construction-journey"
      className="construction-journey-section"
      ref={containerRef}
      data-cursor="drag"
    >
      <div className="scrubber-pin-container">
        <div className="scrubber-sticky-viewport">
          {/* Main Scrubber Canvas */}
          <canvas ref={canvasRef} className="scrubber-canvas" />

          {/* Crisp Filter Layer */}
          <div className="scrubber-crisp-layer" />

          {/* Vignette Overlay */}
          <div className="scrubber-vignette" />

          {/* Preloader Overlay while initial keyframes load */}
          {!isTier1Ready && (
            <div className="scrubber-preloader">
              <div className="preloader-spinner" />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
                  INITIALIZING ARCHITECTURAL SCENE...
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Buffering 300 Photorealistic Construction Frames ({progress}%)
                </div>
              </div>
            </div>
          )}

          {/* HUD Interactive Layer */}
          <div className="hud-layer">
            {/* Top Bar: Section Title + Horizontal Telemetry Ribbon */}
            <div className="hud-top-bar">
              <div className="hud-top-left-title">
                <div className="eyebrow" style={{ color: 'var(--accent-gold)', marginBottom: '0.2rem', fontSize: '0.75rem' }}>
                  Signature Time-Lapse Scrubber
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(0.95rem, 1.3vw, 1.25rem)', letterSpacing: '0.04em', color: '#0F172A', textTransform: 'uppercase' }}>
                  From Ground Excavation To Luxury Completion
                </div>
              </div>

              {/* Horizontal Telemetry Strip */}
              <div className="hud-telemetry-strip">
                <div className="hud-telemetry-item">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>LIVE 60FPS</span>
                </div>
                <div className="hud-telemetry-divider" />
                <div className="hud-telemetry-item">
                  <span>FRAME:</span>
                  <span className="hud-telemetry-val">{String(currentFrameIndex + 1).padStart(3, '0')} / 300</span>
                </div>
                <div className="hud-telemetry-divider" />
                <div className="hud-telemetry-item">
                  <span>ELEVATION:</span>
                  <span className="hud-telemetry-val">{activeStage.elevation}</span>
                </div>
                <div className="hud-telemetry-divider" />
                <div className="hud-telemetry-item">
                  <span>CONCRETE:</span>
                  <span className="hud-telemetry-val">{activeStage.concreteVolume}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Milestone Stepper Dock */}
            <div className="hud-timeline-stepper">
              <div className="hud-timeline-header">
                <span>STAGES</span>
                <span style={{ color: 'var(--text-muted)' }}>16</span>
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
                      {st.stepNumber} {st.title.split(' ')[0]}
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
                  <span>STAGE {activeStage.stepNumber} OF 16</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span>{activeStage.safetyStatus}</span>
                </div>
                <h3 className="hud-stage-title">{activeStage.title}</h3>
                <p className="hud-stage-desc">{activeStage.description}</p>

                {/* Technical Engineering Specifications */}
                <div className="hud-stage-specs">
                  {Object.entries(activeStage.engineeringSpecs).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="hud-spec-item">
                      <span className="hud-spec-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="hud-spec-value">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Stage Controls */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button
                      onClick={handlePrevStage}
                      className="btn-outline-gold"
                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem' }}
                      title="Previous Stage"
                    >
                      <ChevronLeft size={13} /> Prev
                    </button>
                    <button
                      onClick={handleNextStage}
                      className="btn-outline-gold"
                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem' }}
                      title="Next Stage"
                    >
                      Next <ChevronRight size={13} />
                    </button>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                    SCROLL DOWN TO ADVANCE ↓
                  </div>
                </div>
              </div>

              {/* Bottom Scrub Track */}
              <div className="hud-scrub-bar-wrap">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  <span>01 SITE PREP</span>
                  <span className="text-gold" style={{ fontWeight: 600 }}>PROGRESS: {Math.round(scrubProgress * 100)}%</span>
                  <span>16 COMPLETION</span>
                </div>
                <div
                  className="hud-scrub-track"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const pct = Math.max(0, Math.min(1, clickX / rect.width));
                    const container = containerRef.current;
                    if (container) {
                      const targetScroll = container.offsetTop + (pct * (container.clientHeight - window.innerHeight));
                      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="hud-scrub-fill" style={{ width: `${scrubProgress * 100}%` }}>
                    <div className="hud-scrub-indicator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
