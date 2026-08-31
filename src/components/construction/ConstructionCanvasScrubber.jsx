import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useFramePreloader } from '../../hooks/useFramePreloader';
import { CONSTRUCTION_STAGES } from '../../data/constructionStages';
import { ChevronRight, ChevronLeft, Sparkles, ShieldCheck, Activity, Compass } from 'lucide-react';
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

    ctx.fillStyle = '#0B0F14';
    ctx.fillRect(0, 0, width, height);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    // Subtle CAD corner markers
    ctx.strokeStyle = 'rgba(179, 142, 93, 0.4)';
    ctx.lineWidth = 1;
    const mLen = 14;
    
    // Top-left
    ctx.beginPath();
    ctx.moveTo(16, 16 + mLen);
    ctx.lineTo(16, 16);
    ctx.lineTo(16 + mLen, 16);
    ctx.stroke();

    // Top-right
    ctx.beginPath();
    ctx.moveTo(width - 16 - mLen, 16);
    ctx.lineTo(width - 16, 16);
    ctx.lineTo(width - 16, 16 + mLen);
    ctx.stroke();

    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(16, height - 16 - mLen);
    ctx.lineTo(16, height - 16);
    ctx.lineTo(16 + mLen, height - 16);
    ctx.stroke();

    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(width - 16 - mLen, height - 16);
    ctx.lineTo(width - 16, height - 16);
    ctx.lineTo(width - 16, height - 16 - mLen);
    ctx.stroke();

    ctx.restore();
  }, [images, totalFrames]);

  // Smooth animation momentum loop
  useEffect(() => {
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;

      const diff = targetFrameRef.current - displayedFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        displayedFrameRef.current += diff * 0.35;
        const currentInt = Math.round(displayedFrameRef.current);
        const clampedInt = Math.max(0, Math.min(totalFrames - 1, currentInt));
        
        setCurrentFrameIndex(clampedInt);
        renderCanvas(clampedInt);

        // Find active stage
        const matchingStage = CONSTRUCTION_STAGES.find(
          (s) => clampedInt >= s.startFrame && clampedInt <= s.endFrame
        ) || CONSTRUCTION_STAGES[0];

        setActiveStage(matchingStage);
        setScrubProgress(Math.round((clampedInt / (totalFrames - 1)) * 100));
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderCanvas, totalFrames]);

  // Initial draw once ready
  useEffect(() => {
    if (isTier1Ready) {
      renderCanvas(0);
    }
  }, [isTier1Ready, renderCanvas]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      renderCanvas(currentFrameIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrameIndex, renderCanvas]);

  // Scroll listener for pinned container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;
      
      if (scrollHeight <= 0) return;

      const scrolled = -rect.top;
      const progressRatio = Math.max(0, Math.min(1, scrolled / scrollHeight));

      const targetFrame = Math.round(progressRatio * (totalFrames - 1));
      targetFrameRef.current = targetFrame;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // Manual Jump to specific stage
  const jumpToStage = (stage) => {
    targetFrameRef.current = stage.startFrame;
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
      ref={containerRef}
      className="scrubber-section"
      style={{
        height: '450vh',
        position: 'relative',
        backgroundColor: '#FAFAF9'
      }}
    >
      <div className="scrubber-sticky-viewport">
        <div className="scrubber-canvas-container">
          <canvas
            ref={canvasRef}
            className="scrubber-canvas"
            style={{ width: '100%', height: '100%', display: 'block' }}
          />

          {/* Loading Indicator Overlay */}
          {!isTier1Ready && (
            <div className="scrubber-loading-overlay">
              <div className="hud-border glass-card" style={{ padding: '2rem 3rem', textAlign: 'center', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', fontWeight: 800 }}>
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
                <div className="eyebrow" style={{ color: 'var(--accent-gold)', marginBottom: '0.2rem', fontSize: '0.75rem', fontWeight: 800 }}>
                  SIGNATURE EXPERIENCE // BUILD YOUR DREAM
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(0.95rem, 1.3vw, 1.25rem)', letterSpacing: '0.04em', color: '#0F172A', textTransform: 'uppercase' }}>
                  YOUR DREAM HOME, BUILT STEP BY STEP
                </div>
              </div>

              {/* Horizontal Telemetry Strip */}
              <div className="hud-telemetry-strip">
                <div className="hud-telemetry-item">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block', boxShadow: '0 0 6px #16a34a' }} />
                  <span style={{ color: '#16a34a', fontWeight: 700 }}>LIVE 60FPS</span>
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
                  <span>01 DREAM CONCEPT</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>PROGRESS: {scrubProgress}%</span>
                  <span>16 YOUR DREAM HOME</span>
                </div>
                <div className="hud-scrub-track">
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
  );
}
