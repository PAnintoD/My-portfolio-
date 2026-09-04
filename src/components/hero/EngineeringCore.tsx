'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'motion/react';
import { usePointerType } from '../../hooks/usePointerType';

export default function EngineeringCore() {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const signalRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  // Nodes configuration on orbital rings
  const nodeLabels = useMemo(
    () => [
      { text: 'WEB SYSTEMS', pos: [1.35, 0.35, 0] as [number, number, number], tag: '01' },
      { text: 'EMBEDDED & IoT', pos: [-1.25, 0.45, 0.4] as [number, number, number], tag: '02' },
      { text: 'AI VISION', pos: [0.35, 1.35, -0.4] as [number, number, number], tag: '03' },
      { text: 'AUTOMATION', pos: [-0.35, -1.35, 0.4] as [number, number, number], tag: '04' }
    ],
    []
  );

  // 8 technical nodes distributed around rings
  const nodes = useMemo(
    () => [
      { pos: [1.8, 0, 0] as [number, number, number], active: true },
      { pos: [-1.8, 0, 0] as [number, number, number], active: false },
      { pos: [0, 1.95, 0] as [number, number, number], active: true },
      { pos: [0, -1.95, 0] as [number, number, number], active: false },
      { pos: [1.45, 1.45, 0.3] as [number, number, number], active: true },
      { pos: [-1.45, -1.45, -0.3] as [number, number, number], active: false },
      { pos: [-1.4, 1.4, 0.4] as [number, number, number], active: true },
      { pos: [1.4, -1.4, -0.4] as [number, number, number], active: false },
    ],
    []
  );

  useFrame((state) => {
    if (shouldReduceMotion) return;
    const time = state.clock.getElapsedTime();

    // Idle rotation & gentle pointer tilt
    if (groupRef.current) {
      let targetX = 0;
      let targetY = 0;
      if (isFine) {
        // Pointer tilt clamped to max ~5 degrees (~0.087 rad)
        targetX = -state.pointer.y * 0.087;
        targetY = state.pointer.x * 0.087;
      }

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY + time * 0.09,
        0.05
      );
    }

    // Individual orbital ring rotation speeds & subtle hover expansion (max 3%)
    const targetScale = hovered ? 1.03 : 1.0;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.16;
      ring1Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.06);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * 0.13;
      ring2Ref.current.rotation.y = time * 0.11;
      ring2Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.06);
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -time * 0.14;
      ring3Ref.current.rotation.x = time * 0.09;
      ring3Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.06);
    }

    // Core subtle breathing
    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.18;
      coreRef.current.rotation.x = time * 0.12;
    }

    // Orbiting technical signal pulse
    if (signalRef.current) {
      const angle = time * 1.1;
      signalRef.current.position.x = Math.cos(angle) * 1.8;
      signalRef.current.position.y = Math.sin(angle * 1.25) * 0.75;
      signalRef.current.position.z = Math.sin(angle) * 1.8;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => isFine && setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Faceted Metallic Core */}
      <mesh ref={coreRef} castShadow={false} receiveShadow={false}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshPhysicalMaterial
          color="#161e2a"
          metalness={0.8}
          roughness={0.3}
          clearcoat={0.25}
          clearcoatRoughness={0.4}
          emissive="#0d141e"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Wireframe Shell around Core */}
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial
          color="#7F9AB8"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Orbital Ring 1 - Equator */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.016, 16, 64]} />
          <meshStandardMaterial
            color="#A6B9CC"
            metalness={0.8}
            roughness={0.3}
            emissive="#7F9AB8"
            emissiveIntensity={0.08}
          />
        </mesh>
      </group>

      {/* Orbital Ring 2 - Tilted */}
      <group ref={ring2Ref} rotation={[0.6, 0.4, 0]}>
        <mesh>
          <torusGeometry args={[1.95, 0.014, 16, 64]} />
          <meshStandardMaterial
            color="#7F9AB8"
            metalness={0.75}
            roughness={0.35}
            emissive="#5A6C82"
            emissiveIntensity={0.08}
          />
        </mesh>
      </group>

      {/* Orbital Ring 3 - Polar Axis */}
      <group ref={ring3Ref} rotation={[-0.5, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[2.1, 0.013, 16, 64]} />
          <meshStandardMaterial
            color="#4A586A"
            metalness={0.7}
            roughness={0.45}
          />
        </mesh>
      </group>

      {/* Eight Technical Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[node.active ? 0.055 : 0.04, 16, 16]} />
          <meshStandardMaterial
            color={node.active ? '#7F9AB8' : '#3E4957'}
            metalness={0.8}
            roughness={0.3}
            emissive={node.active ? '#7F9AB8' : '#000000'}
            emissiveIntensity={node.active ? 0.15 : 0}
          />
        </mesh>
      ))}

      {/* Active Signal Particle */}
      <mesh ref={signalRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#A6B9CC" />
      </mesh>

      {/* Drei HTML Spatial Labels */}
      {nodeLabels.map((node, i) => (
        <Html
          key={i}
          position={node.pos}
          center
          distanceFactor={7}
          className="pointer-events-none select-none hidden lg:block"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/[0.10] bg-[#080A0F]/90 px-3 py-1 shadow-xl backdrop-blur-md whitespace-nowrap transition-all duration-300">
            <span className="size-1.5 rounded-full bg-[#7F9AB8]" />
            <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-[#F0F3F6]">
              {node.text}
            </span>
            <span className="font-mono text-[8px] text-[#697586]">
              {'// '}{node.tag}
            </span>
          </div>
        </Html>
      ))}
    </group>
  );
}
