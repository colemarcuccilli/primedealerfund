"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generateParticleData(count: number) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const spd = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const gold = new THREE.Color().setHSL(0.12 + Math.random() * 0.05, 0.8, 0.5 + Math.random() * 0.3);
    col[i * 3] = gold.r;
    col[i * 3 + 1] = gold.g;
    col[i * 3 + 2] = gold.b;

    spd[i] = 0.1 + Math.random() * 0.3;
  }

  return { positions: pos, colors: col, speeds: spd };
}

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const count = 500;
  const [data] = useState(() => generateParticleData(count));

  useFrame((state) => {
    if (!mesh.current) return;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(time * data.speeds[i] + i) * 0.002;
      positions[i3] += Math.cos(time * data.speeds[i] * 0.5 + i) * 0.001;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[data.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
