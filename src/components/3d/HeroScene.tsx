'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Geometric Wireframe Sphere (Icosahedron) - Subtle & Muted
    const icoGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6e8fc7, // Muted Blue accent
      wireframe: true,
      transparent: true,
      opacity: 0.09 // Very subtle, clean lines
    });
    const icoMesh = new THREE.Mesh(icoGeometry, wireframeMaterial);
    mainGroup.add(icoMesh);

    // 2. Inner Core Sphere - Very low opacity
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x737d8c, // Cool Muted Slate
      wireframe: true,
      transparent: true,
      opacity: 0.11
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Orbiting Particle Field - Subdued & Minimal
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 180 : 380;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const mutedBlue = new THREE.Color(0x6e8fc7);
    const coolGray = new THREE.Color(0xa8b0bd);
    const darkSlate = new THREE.Color(0x737d8c);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.3 + (Math.random() - 0.5) * 1.0;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Restrained palette: muted blue, cool gray, and soft slate
      const mixedColor = i % 3 === 0 ? mutedBlue : i % 3 === 1 ? coolGray : darkSlate;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Soft circular sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(241, 243, 245, 0.9)');
      gradient.addColorStop(0.3, 'rgba(168, 176, 189, 0.5)');
      gradient.addColorStop(1, 'rgba(11, 14, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.05 : 0.06,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.45, // Reduced from 0.85 to subtle 0.45
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Mouse Tracking with Smooth Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetX = ((clientX / width) * 2 - 1) * 0.4;
      targetY = (-(clientY / height) * 2 + 1) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow, quiet, deliberate motion
        mouseX += (targetX - mouseX) * 0.035;
        mouseY += (targetY - mouseY) * 0.035;

        mainGroup.rotation.y = elapsedTime * 0.08 + mouseX * 0.5;
        mainGroup.rotation.x = mouseY * 0.3 + Math.sin(elapsedTime * 0.15) * 0.05;

        icoMesh.rotation.y = -elapsedTime * 0.06;
        icoMesh.rotation.z = Math.cos(elapsedTime * 0.15) * 0.08;

        innerMesh.rotation.x = elapsedTime * 0.12;

        const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const ox = originalPositions[i3];
          const oy = originalPositions[i3 + 1];
          const oz = originalPositions[i3 + 2];

          const wave = Math.sin(elapsedTime * 0.8 + ox + oy) * 0.04;
          posArray[i3] = ox + (ox / 2) * wave;
          posArray[i3 + 1] = oy + (oy / 2) * wave;
          posArray[i3 + 2] = oz + (oz / 2) * wave;
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      icoGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
