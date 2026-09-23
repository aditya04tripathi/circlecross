"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { type RefObject, useMemo, useRef } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  type Group,
  type LineSegments,
  MathUtils,
  Vector3,
} from "three";

interface UniSceneProps {
  progress: RefObject<number>;
  active: boolean;
}

function CampusConstellation({ progress }: { progress: RefObject<number> }) {
  const group = useRef<Group>(null);
  const linksRef = useRef<LineSegments>(null);

  // Orbital rings representing university faculties, libraries, and student clubs
  const orbits = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => {
      const points: number[] = [];
      const radius = 2.4 + (i % 4) * 0.25;
      for (let j = 0; j <= 128; j++) {
        const t = (j / 128) * Math.PI * 2;
        const p = new Vector3(Math.cos(t) * radius, Math.sin(t) * radius, 0);
        p.applyAxisAngle(new Vector3(1, 0.2, 0), 0.4 + i * 0.14);
        p.applyAxisAngle(new Vector3(0, 1, 0), i * 0.24);
        points.push(p.x, p.y, p.z);
      }
      const geometry = new BufferGeometry().setAttribute(
        "position",
        new Float32BufferAttribute(points, 3),
      );
      return {
        geometry,
        key: `uni-orbit-${geometry.uuid}`,
        accent: i % 2 === 0,
      };
    });
  }, []);

  // Relationship nodes along orbits representing campus encounters
  const nodes = useMemo(() => {
    return Array.from({ length: 22 }, (_, idx) => {
      const theta = idx * 2.15;
      const r = 2.3 + (idx % 3) * 0.35;
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * (r * 0.88);
      const z = Math.sin(idx * 1.5) * 1.1;
      return {
        key: `uni-node-${idx}-${theta.toFixed(2)}`,
        pos: [x, y, z] as const,
        radius: idx % 4 === 0 ? 0.085 : 0.045,
        color: idx % 3 === 0 ? "#bd683b" : idx % 2 === 0 ? "#747f5b" : "#4e573a",
      };
    });
  }, []);

  // Interconnecting links between proximate student nodes
  const linkGeometry = useMemo(() => {
    const coords: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      if (!nodeA) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeB = nodes[j];
        if (!nodeB) continue;
        const dx = nodeA.pos[0] - nodeB.pos[0];
        const dy = nodeA.pos[1] - nodeB.pos[1];
        const dz = nodeA.pos[2] - nodeB.pos[2];
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < 2.8) {
          coords.push(
            nodeA.pos[0],
            nodeA.pos[1],
            nodeA.pos[2],
            nodeB.pos[0],
            nodeB.pos[1],
            nodeB.pos[2],
          );
        }
      }
    }
    const geom = new BufferGeometry();
    geom.setAttribute("position", new Float32BufferAttribute(coords, 3));
    return geom;
  }, [nodes]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const scroll = progress.current;

    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      0.35 + scroll * 2.3 + state.pointer.x * 0.16,
      3,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -0.12 + state.pointer.y * 0.1 + scroll * 0.65,
      3,
      delta,
    );
    group.current.rotation.z = Math.sin(time * 0.14) * 0.04;

    const scale = 1 - scroll * 0.18;
    group.current.scale.setScalar(scale);

    if (linksRef.current) {
      linksRef.current.rotation.z = Math.cos(time * 0.2) * 0.03;
    }
  });

  return (
    <group ref={group} position={[0.85, -0.05, 0]}>
      {orbits.map((orbit) => (
        <lineLoop key={orbit.key} geometry={orbit.geometry}>
          <lineBasicMaterial
            color={orbit.accent ? "#626c4d" : "#a66846"}
            transparent
            opacity={orbit.accent ? 0.42 : 0.18}
          />
        </lineLoop>
      ))}

      {/* Diminished Central Campus Core */}
      <mesh>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial
          color="#556041"
          metalness={0.4}
          roughness={0.45}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Dynamic Proximity Synapses */}
      <lineSegments ref={linksRef} geometry={linkGeometry}>
        <lineBasicMaterial color="#8a966f" transparent opacity={0.22} />
      </lineSegments>

      {/* Diminished Encounter Nodes */}
      {nodes.map((n) => (
        <mesh key={n.key} position={[...n.pos]}>
          <sphereGeometry args={[n.radius * 0.75, 12, 12]} />
          <meshStandardMaterial
            color={n.color}
            metalness={0.45}
            roughness={0.35}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

export function UniScene({ progress, active }: UniSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.2]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0.4, 0, 8.8], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[-3, 4, 5]} intensity={3.5} color="#f5faea" />
      <directionalLight position={[4, -2, 2]} intensity={1.8} color="#cd7c47" />
      <CampusConstellation progress={progress} />
    </Canvas>
  );
}
