'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function EngineeringCore() {
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
      { text: 'WEB SYSTEMS', pos: [2.1, 0.4, 0] as [number, number, number], tag: '01' },
      { text: 'EMBEDDED & IoT', pos: [-2.0, 0.6, 0.5] as [number, number, number], tag: '02' },
      { text: 'AI VISION', pos: [0.5, 1.9, -0.6] as [number, number, number], tag: '03' },
      { text: 'AUTOMATION', pos: [-0.6, -1.9, 0.6] as [number, number, number], tag: '04' }
    ],
    []
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Constant slow idle rotation
    if (groupRef.current) {
      // Gentle pointer response (clamped to max ~6 degrees = ~0.1 rad)
      const targetX = -state.pointer.y * 0.12;
      const targetY = state.pointer.x * 0.12;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY + time * 0.1,
        0.05
      );
    }

    // Individual orbital ring rotation speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.18;
      const targetScale = hovered ? 1.08 : 1.0;
      ring1Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * 0.14;
      ring2Ref.current.rotation.y = time * 0.12;
      const targetScale = hovered ? 1.08 : 1.0;
      ring2Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -time * 0.15;
      ring3Ref.current.rotation.x = time * 0.1;
      const targetScale = hovered ? 1.08 : 1.0;
      ring3Ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    }

    // Core subtle breathing
    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.2;
      coreRef.current.rotation.x = time * 0.15;
    }

    // Orbiting technical signal pulse
    if (signalRef.current) {
      const angle = time * 1.2;
      signalRef.current.position.x = Math.cos(angle) * 1.8;
      signalRef.current.position.y = Math.sin(angle * 1.3) * 0.8;
      signalRef.current.position.z = Math.sin(angle) * 1.8;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Metallic Core */}
      <mesh ref={coreRef} castShadow={false} receiveShadow={false}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#1e2634"
          metalness={0.85}
          roughness={0.35}
          emissive="#101824"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Wireframe Lattice around Core */}
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial
          color="#7890AA"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Orbital Ring 1 - Equator */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.018, 16, 64]} />
          <meshStandardMaterial
            color="#7890AA"
            metalness={0.8}
            roughness={0.3}
            emissive="#7890AA"
            emissiveIntensity={0.1}
          />
        </mesh>
        {/* Ring 1 Technical Node */}
        <mesh position={[1.8, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#8FA5BD" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Orbital Ring 2 - Tilted */}
      <group ref={ring2Ref} rotation={[0.6, 0.4, 0]}>
        <mesh>
          <torusGeometry args={[1.95, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#5A6C82"
            metalness={0.75}
            roughness={0.4}
          />
        </mesh>
        {/* Ring 2 Technical Node */}
        <mesh position={[0, 1.95, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#75A58E" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Orbital Ring 3 - Polar Axis */}
      <group ref={ring3Ref} rotation={[-0.5, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[2.1, 0.014, 16, 64]} />
          <meshStandardMaterial
            color="#4A586A"
            metalness={0.7}
            roughness={0.45}
          />
        </mesh>
      </group>

      {/* Active Signal Particle */}
      <mesh ref={signalRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#8FA5BD" />
      </mesh>

      {/* Drei HTML Spatial Labels (Visible on Desktop lg+) */}
      {nodeLabels.map((node, i) => (
        <Html
          key={i}
          position={node.pos}
          center
          distanceFactor={7}
          className="pointer-events-none select-none hidden lg:block"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#090C12]/90 px-3 py-1 shadow-xl backdrop-blur-md whitespace-nowrap transition-all duration-300">
            <span className="size-1.5 rounded-full bg-[#7890AA]" />
            <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-[#DCE1E7]">
              {node.text}
            </span>
            <span className="font-mono text-[8px] text-[#707A89]">
              {'// '}{node.tag}
            </span>
          </div>
        </Html>
      ))}
    </group>
  );
}
