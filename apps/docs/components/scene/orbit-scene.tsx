"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { type RefObject, useMemo, useRef } from "react";
import { BufferGeometry, Float32BufferAttribute, type Group, MathUtils, Vector3 } from "three";

function Sculpture({ progress }: { progress: RefObject<number> }) {
  const group = useRef<Group>(null);
  const orbits = useMemo(
    () =>
      Array.from({ length: 18 }, (_, orbitIndex) => {
        const points: number[] = [];
        for (let j = 0; j <= 160; j++) {
          const t = (j / 160) * Math.PI * 2;
          const p = new Vector3(Math.cos(t) * 2.65, Math.sin(t) * 2.65, 0);
          p.applyAxisAngle(new Vector3(1, 0, 0), 0.35 + orbitIndex * 0.125);
          p.applyAxisAngle(new Vector3(0, 1, 0), orbitIndex * 0.2);
          points.push(p.x, p.y, p.z);
        }
        const geometry = new BufferGeometry().setAttribute(
          "position",
          new Float32BufferAttribute(points, 3),
        );
        return {
          geometry,
          key: geometry.uuid,
          accent: orbitIndex % 3 === 0,
        };
      }),
    [],
  );
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, dotIndex) => {
        const t = dotIndex * 2.399;
        return {
          key: `dot-${t.toFixed(3)}`,
          position: [
            Math.cos(t) * 2.5,
            Math.sin(t) * 2.25,
            Math.sin(dotIndex * 1.7) * 0.9,
          ] as const,
          radius: dotIndex % 4 === 0 ? 0.09 : 0.038,
          color: dotIndex % 3 === 0 ? "#f9b879" : "#a55e3a",
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      0.25 + progress.current * 2.2 + state.pointer.x * 0.16,
      3,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -0.12 + state.pointer.y * 0.1 + progress.current * 0.6,
      3,
      delta,
    );
    group.current.rotation.z = Math.sin(time * 0.12) * 0.045;
    const scale = 1 - progress.current * 0.16;
    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group}>
      {orbits.map((orbit) => (
        <lineLoop key={orbit.key} geometry={orbit.geometry}>
          <lineBasicMaterial
            color={orbit.accent ? "#71381f" : "#ba784f"}
            transparent
            opacity={orbit.accent ? 0.8 : 0.38}
          />
        </lineLoop>
      ))}
      <mesh>
        <sphereGeometry args={[0.48, 48, 48]} />
        <meshStandardMaterial color="#bd683b" metalness={0.78} roughness={0.28} />
      </mesh>
      {dots.map((dot) => (
        <mesh key={dot.key} position={[...dot.position]}>
          <sphereGeometry args={[dot.radius, 12, 12]} />
          <meshStandardMaterial color={dot.color} metalness={0.65} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function OrbitScene({ progress, active }: { progress: RefObject<number>; active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 8.2], fov: 43 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={2.2} />
      <directionalLight position={[-3, 4, 5]} intensity={5} color="#fff0d8" />
      <directionalLight position={[4, -2, 2]} intensity={2} color="#cd7c47" />
      <Sculpture progress={progress} />
    </Canvas>
  );
}
