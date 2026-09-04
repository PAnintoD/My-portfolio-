'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import EngineeringCore from './EngineeringCore';
import HeroSceneFallback from './HeroSceneFallback';

export default function EngineeringScene() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[420px] w-full max-w-[620px] sm:h-[500px] lg:h-[620px] flex items-center justify-center select-none"
    >
      <Suspense fallback={<HeroSceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 38 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full pointer-events-none sm:pointer-events-auto"
        >
          {/* Studio Lighting Scheme */}
          <ambientLight intensity={0.5} />
          {/* Key Light */}
          <directionalLight position={[4, 5, 3]} intensity={1.4} color="#F0F3F6" />
          {/* Steel-blue Rim Light */}
          <directionalLight position={[-4, 2, -4]} intensity={2.0} color="#7F9AB8" />
          {/* Gentle Fill Light */}
          <directionalLight position={[0, -4, 2]} intensity={0.35} color="#5A6C82" />

          {/* Procedural 3D Engineering Object */}
          <EngineeringCore />
        </Canvas>
      </Suspense>
    </div>
  );
}
