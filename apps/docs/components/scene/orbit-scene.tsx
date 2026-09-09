"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferGeometry, Float32BufferAttribute, Group, MathUtils, Vector3 } from "three";
function Sculpture({ progress }: { progress: React.RefObject<number> }) {
	const group = useRef<Group>(null);
	const orbits = useMemo(
		() =>
			Array.from({ length: 18 }, (_, i) => {
				const points: number[] = [];
				for (let j = 0; j <= 160; j++) {
					const t = (j / 160) * Math.PI * 2;
					const p = new Vector3(Math.cos(t) * 2.65, Math.sin(t) * 2.65, 0);
					p.applyAxisAngle(new Vector3(1, 0, 0), 0.35 + i * 0.125);
					p.applyAxisAngle(new Vector3(0, 1, 0), i * 0.2);
					points.push(p.x, p.y, p.z);
				}
				return new BufferGeometry().setAttribute(
					"position",
					new Float32BufferAttribute(points, 3),
				);
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
			{orbits.map((geometry, i) => (
				<lineLoop key={i} geometry={geometry}>
					<lineBasicMaterial
						color={i % 3 === 0 ? "#71381f" : "#ba784f"}
						transparent
						opacity={i % 3 === 0 ? 0.8 : 0.38}
					/>
				</lineLoop>
			))}
			<mesh>
				<sphereGeometry args={[0.48, 48, 48]} />
				<meshStandardMaterial color="#bd683b" metalness={0.78} roughness={0.28} />
			</mesh>
			{Array.from({ length: 18 }, (_, i) => {
				const t = i * 2.399;
				return (
					<mesh
						key={i}
						position={[Math.cos(t) * 2.5, Math.sin(t) * 2.25, Math.sin(i * 1.7) * 0.9]}
					>
						<sphereGeometry args={[i % 4 === 0 ? 0.09 : 0.038, 12, 12]} />
						<meshStandardMaterial
							color={i % 3 === 0 ? "#f9b879" : "#a55e3a"}
							metalness={0.65}
							roughness={0.3}
						/>
					</mesh>
				);
			})}
		</group>
	);
}
export function OrbitScene({
	progress,
	active,
}: {
	progress: React.RefObject<number>;
	active: boolean;
}) {
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
