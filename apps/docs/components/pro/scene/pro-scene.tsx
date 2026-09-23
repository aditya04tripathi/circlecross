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

interface ProSceneProps {
  progress: RefObject<number>;
  active: boolean;
}

function SynapseLattice({ progress }: { progress: RefObject<number> }) {
  const group = useRef<Group>(null);
  const linksRef = useRef<LineSegments>(null);

  // Executive relationship rings representing cross-functional teams, industries, and alumni networks
  const rings = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const points: number[] = [];
      const radius = 2.5 + (i % 3) * 0.3;
      for (let j = 0; j <= 128; j++) {
        const t = (j / 128) * Math.PI * 2;
        const p = new Vector3(Math.cos(t) * radius, Math.sin(t) * radius, 0);
        p.applyAxisAngle(new Vector3(0.8, 0.4, 0), 0.35 + i * 0.16);
        p.applyAxisAngle(new Vector3(0, 1, 0), i * 0.28);
        points.push(p.x, p.y, p.z);
      }
      const geometry = new BufferGeometry().setAttribute(
        "position",
        new Float32BufferAttribute(points, 3),
      );
      return {
        geometry,
        key: `pro-ring-${geometry.uuid}`,
        accent: i % 3 === 0,
      };
    });
  }, []);

  // Relationship nodes representing executive mentors, teammates, and industry collaborators
  const nodes = useMemo(() => {
    return Array.from({ length: 24 }, (_, idx) => {
      const u = idx / 24;
      const theta = u * Math.PI * 2 * 3.5;
      const r = 2.2 + (idx % 4) * 0.28;
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * (r * 0.85);
      const z = Math.sin(idx * 1.8) * 1.2;
      return {
        key: `pro-node-${idx}-${theta.toFixed(2)}`,
        pos: [x, y, z] as const,
        radius: idx % 5 === 0 ? 0.09 : 0.048,
        color: idx % 3 === 0 ? "#bd683b" : idx % 2 === 0 ? "#747596" : "#45465d",
      };
    });
  }, []);

  // Dynamic synapse links joining nodes in the professional network
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
        if (distSq < 3.2) {
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
      0.3 + scroll * 2.5 + state.pointer.x * 0.18,
      3,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -0.1 + state.pointer.y * 0.1 + scroll * 0.6,
      3,
      delta,
    );
    group.current.rotation.z = Math.sin(time * 0.12) * 0.035;

    const scale = 1 - scroll * 0.16;
    group.current.scale.setScalar(scale);

    if (linksRef.current) {
      linksRef.current.rotation.y = Math.sin(time * 0.15) * 0.04;
    }
  });

  return (
    <group ref={group}>
      {rings.map((ring) => (
        <lineLoop key={ring.key} geometry={ring.geometry}>
          <lineBasicMaterial
            color={ring.accent ? "#63647c" : "#a86c4e"}
            transparent
            opacity={ring.accent ? 0.75 : 0.35}
          />
        </lineLoop>
      ))}

      {/* Central Professional Core */}
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#4a4b64" metalness={0.82} roughness={0.24} />
      </mesh>

      {/* Network Synapse Links */}
      <lineSegments ref={linksRef} geometry={linkGeometry}>
        <lineBasicMaterial color="#8688ab" transparent opacity={0.38} />
      </lineSegments>

      {/* Relationship Graph Nodes */}
      {nodes.map((n) => (
        <mesh key={n.key} position={[...n.pos]}>
          <sphereGeometry args={[n.radius, 14, 14]} />
          <meshStandardMaterial color={n.color} metalness={0.7} roughness={0.28} />
        </mesh>
      ))}
    </group>
  );
}

export function ProScene({ progress, active }: ProSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.2]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 8.4], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={2.0} />
      <directionalLight position={[-3, 4, 5]} intensity={4.8} color="#edf0ff" />
      <directionalLight position={[4, -2, 2]} intensity={2.4} color="#cd7c47" />
      <SynapseLattice progress={progress} />
    </Canvas>
  );
}
