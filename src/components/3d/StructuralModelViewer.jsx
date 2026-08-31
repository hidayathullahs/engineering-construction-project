import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Layers, Activity } from 'lucide-react';

export function StructuralModelViewer() {
  const mountRef = useRef(null);
  const [activeLayer, setActiveLayer] = useState('all'); // 'all', 'columns', 'slabs', 'core'
  const [isStressMode, setIsStressMode] = useState(false);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const elementsGroupRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0e1318);

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(24, 18, 28);
    camera.lookAt(0, 4, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    rendererRef.current = renderer;
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Architectural Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc5a880, 1.2);
    dirLight1.position.set(20, 40, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x4a90e2, 0.4);
    dirLight2.position.set(-20, -10, -20);
    scene.add(dirLight2);

    // Blueprint Ground Grid
    const gridHelper = new THREE.GridHelper(32, 32, 0xc5a880, 0x1f2937);
    gridHelper.position.y = -0.05;
    scene.add(gridHelper);

    // Group for building structural model
    const elementsGroup = new THREE.Group();
    elementsGroupRef.current = elementsGroup;
    scene.add(elementsGroup);

    // Generate 4-Story Structural Building Frame
    const floors = 4;
    const buildingWidth = 14;
    const buildingDepth = 10;
    const floorHeight = 3.5;

    // Materials
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x242c35,
      roughness: 0.4,
      metalness: 0.2
    });

    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x1a2129,
      roughness: 0.3,
      metalness: 0.3
    });

    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x2e3844,
      roughness: 0.5,
      transparent: true,
      opacity: 0.85
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      metalness: 0.8,
      roughness: 0.2
    });

    // Central Shear Core
    const coreGeo = new THREE.BoxGeometry(4, floors * floorHeight, 3.5);
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, (floors * floorHeight) / 2, 0);
    coreMesh.userData = { type: 'core' };
    elementsGroup.add(coreMesh);

    // Wireframe edge lines for Core
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreLine = new THREE.LineSegments(coreEdges, new THREE.LineBasicMaterial({ color: 0xc5a880 }));
    coreLine.position.copy(coreMesh.position);
    elementsGroup.add(coreLine);

    // Slabs & Cantilevered Balconies
    for (let f = 0; f <= floors; f++) {
      const isBalcony = f > 0 && f < floors;
      const w = isBalcony ? buildingWidth + 2.5 : buildingWidth;
      const d = isBalcony ? buildingDepth + 2 : buildingDepth;

      const slabGeo = new THREE.BoxGeometry(w, 0.35, d);
      const slabMesh = new THREE.Mesh(slabGeo, f === floors ? goldAccentMat : slabMat);
      slabMesh.position.set(0, f * floorHeight, 0);
      slabMesh.userData = { type: 'slabs' };
      elementsGroup.add(slabMesh);

      // Slab wireframe edges
      const slabEdges = new THREE.EdgesGeometry(slabGeo);
      const slabLine = new THREE.LineSegments(slabEdges, new THREE.LineBasicMaterial({ color: 0x475569 }));
      slabLine.position.copy(slabMesh.position);
      elementsGroup.add(slabLine);
    }

    // Structural Columns Grid
    const colSpacingX = 4.5;
    const colSpacingZ = 3.5;
    const colGeo = new THREE.BoxGeometry(0.55, floors * floorHeight, 0.55);

    for (let x = -colSpacingX; x <= colSpacingX; x += colSpacingX) {
      for (let z = -colSpacingZ; z <= colSpacingZ; z += colSpacingZ) {
        // Skip columns inside the core
        if (Math.abs(x) < 1 && Math.abs(z) < 1) continue;

        const colMesh = new THREE.Mesh(colGeo, concreteMat);
        colMesh.position.set(x, (floors * floorHeight) / 2, z);
        colMesh.userData = { type: 'columns' };
        elementsGroup.add(colMesh);

        const colEdges = new THREE.EdgesGeometry(colGeo);
        const colLine = new THREE.LineSegments(colEdges, new THREE.LineBasicMaterial({ color: 0x334155 }));
        colLine.position.copy(colMesh.position);
        elementsGroup.add(colLine);
      }
    }

    // Interactive Mouse Dragging Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      elementsGroup.rotation.y += deltaX * 0.008;
      camera.position.y = Math.max(5, Math.min(35, camera.position.y + deltaY * 0.08));
      camera.lookAt(0, 6, 0);

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      elementsGroup.rotation.y += deltaX * 0.008;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        elementsGroup.rotation.y += 0.0025; // Gentle continuous architectural rotation
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (mount && dom) mount.removeChild(dom);
      renderer.dispose();
    };
  }, []);

  // Update visibility based on active layer
  useEffect(() => {
    const group = elementsGroupRef.current;
    if (!group) return;

    group.children.forEach((child) => {
      if (child.userData && child.userData.type) {
        if (activeLayer === 'all') {
          child.visible = true;
        } else {
          child.visible = child.userData.type === activeLayer;
        }
      }
    });
  }, [activeLayer]);

  // Toggle Stress Heatmap Shader Simulation
  const toggleStressMode = () => {
    setIsStressMode(!isStressMode);
    const group = elementsGroupRef.current;
    if (!group) return;

    group.children.forEach((child) => {
      if (child.isMesh && child.material) {
        if (!isStressMode) {
          // Switch to stress simulation colors
          if (child.userData.type === 'core') {
            child.material.color.setHex(0xef4444); // Red: High shear stress
          } else if (child.userData.type === 'columns') {
            child.material.color.setHex(0xf59e0b); // Orange: Axial load
          } else {
            child.material.color.setHex(0x3b82f6); // Blue: Low bending moment
          }
        } else {
          // Revert to architectural materials
          if (child.userData.type === 'core') child.material.color.setHex(0x2e3844);
          else if (child.userData.type === 'columns') child.material.color.setHex(0x242c35);
          else child.material.color.setHex(0x1a2129);
        }
      }
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '520px', backgroundColor: '#0B0F14', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }} className="hud-border" data-cursor="drag">
      {/* 3D Canvas Mounting Container */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />

      {/* Top HUD Controls Overlay */}
      <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', right: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'none' }}>
        <div style={{ background: 'rgba(20, 26, 33, 0.85)', backdropFilter: 'blur(10px)', padding: '0.5rem 0.85rem', borderRadius: '2px', border: '1px solid var(--border-subtle)', pointerEvents: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={14} /> BIM 5D COMPUTATIONAL SKELETON
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            DRAG TO ROTATE 3D PERSPECTIVE
          </div>
        </div>

        {/* Stress Simulation Button */}
        <button
          onClick={toggleStressMode}
          className="btn-outline-gold"
          style={{
            pointerEvents: 'auto',
            background: isStressMode ? 'var(--accent-gold)' : 'rgba(20, 26, 33, 0.85)',
            color: isStressMode ? '#0B0F14' : 'var(--accent-gold)'
          }}
        >
          {isStressMode ? 'Stress Mode: ACTIVE' : 'Simulate FEA Load Stress'}
        </button>
      </div>

      {/* Bottom Layer Filter Overlay */}
      <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', display: 'flex', gap: '0.5rem', pointerEvents: 'auto' }}>
        {['all', 'core', 'columns', 'slabs'].map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer)}
            style={{
              background: activeLayer === layer ? 'var(--accent-gold)' : 'rgba(20, 26, 33, 0.85)',
              color: activeLayer === layer ? '#0B0F14' : 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.2s ease'
            }}
          >
            {layer}
          </button>
        ))}
      </div>
    </div>
  );
}
