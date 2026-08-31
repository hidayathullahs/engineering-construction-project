import { useState, useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;

export function useFramePreloader() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isTier1Ready, setIsTier1Ready] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  
  // Store preloaded image elements in a ref array so they persist without re-renders
  const imagesRef = useRef([]);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (isStartedRef.current) return;
    isStartedRef.current = true;

    // Initialize array of 300 elements
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Helper to format frame number: 0 -> "ezgif-frame-001.jpg"
    const getFrameUrl = (index) => {
      const frameNum = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${frameNum}.jpg`;
    };

    let completedCount = 0;
    let tier1Count = 0;

    // Tier 1: Load every 5th keyframe first for instantaneous scrub responsiveness
    const tier1Indices = [];
    const tier2Indices = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i % 5 === 0 || i === TOTAL_FRAMES - 1) {
        tier1Indices.push(i);
      } else {
        tier2Indices.push(i);
      }
    }

    const loadSingleImage = (index, onFinish) => {
      const img = new Image();
      img.src = getFrameUrl(index);
      
      const handleLoadOrError = () => {
        images[index] = img;
        completedCount++;
        setLoadedCount(completedCount);
        if (onFinish) onFinish();
      };

      img.onload = handleLoadOrError;
      img.onerror = handleLoadOrError;
    };

    // Load Tier 1 in parallel
    tier1Indices.forEach((index) => {
      loadSingleImage(index, () => {
        tier1Count++;
        if (tier1Count >= Math.min(20, tier1Indices.length)) {
          setIsTier1Ready(true);
        }
        if (tier1Count === tier1Indices.length) {
          setIsTier1Ready(true);
          // Start Tier 2 in background idle chunks
          loadTier2();
        }
      });
    });

    const loadTier2 = () => {
      let cursor = 0;
      const batchSize = 10;

      const loadNextBatch = () => {
        if (cursor >= tier2Indices.length) {
          setIsFullyLoaded(true);
          return;
        }

        const currentBatch = tier2Indices.slice(cursor, cursor + batchSize);
        cursor += batchSize;

        let batchLoaded = 0;
        currentBatch.forEach((index) => {
          loadSingleImage(index, () => {
            batchLoaded++;
            if (batchLoaded === currentBatch.length) {
              if ('requestIdleCallback' in window) {
                window.requestIdleCallback(loadNextBatch);
              } else {
                setTimeout(loadNextBatch, 30);
              }
            }
          });
        });
      };

      loadNextBatch();
    };

    return () => {
      // Cleanup if unmounted
    };
  }, []);

  const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return {
    images: imagesRef.current,
    loadedCount,
    totalFrames: TOTAL_FRAMES,
    progress,
    isTier1Ready,
    isFullyLoaded
  };
}
