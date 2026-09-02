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
    camera.position.z = 7;

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

    // 1. Core Geometric Wireframe Sphere (Icosahedron)
    const icoGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeometry, wireframeMaterial);
    mainGroup.add(icoMesh);

    // 2. Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Orbiting Particle Cloud
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 400 : 900;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x00f5d4);
    const purple = new THREE.Color(0x8b5cf6);
    const blue = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles across a sphere shell
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + (Math.random() - 0.5) * 1.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Interpolate colors between cyan, purple and blue
      const mixedColor = i % 3 === 0 ? cyan : i % 3 === 1 ? purple : blue;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular sprite texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.07 : 0.08,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Mouse Tracking with Smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetX = ((clientX / width) * 2 - 1) * 0.7;
      targetY = (-(clientY / height) * 2 + 1) * 0.7;
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
        // Smooth lerp mouse tracking
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        mainGroup.rotation.y = elapsedTime * 0.15 + mouseX * 0.8;
        mainGroup.rotation.x = mouseY * 0.5 + Math.sin(elapsedTime * 0.2) * 0.1;

        icoMesh.rotation.y = -elapsedTime * 0.12;
        icoMesh.rotation.z = Math.cos(elapsedTime * 0.2) * 0.15;

        innerMesh.rotation.x = elapsedTime * 0.25;
        innerMesh.rotation.z = -elapsedTime * 0.18;

        // Subtle particle wave oscillation
        const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const ox = originalPositions[i3];
          const oy = originalPositions[i3 + 1];
          const oz = originalPositions[i3 + 2];

          const wave = Math.sin(elapsedTime * 1.5 + ox * 2 + oy * 2) * 0.08;
          posArray[i3] = ox + (ox / 2) * wave;
          posArray[i3 + 1] = oy + (oy / 2) * wave;
          posArray[i3 + 2] = oz + (oz / 2) * wave;
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
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
