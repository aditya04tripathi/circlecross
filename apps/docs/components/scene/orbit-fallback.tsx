export function OrbitFallback() {
  const orbits = Array.from({ length: 12 }, (_, step) => ({
    key: `orbit-${100 + step * 10}`,
    ry: 100 + step * 10,
    rotate: step * 15,
    opacity: 0.24 + step * 0.045,
  }));
  const points = [
    { key: "point-177-264", x: 177, y: 264, r: 7 },
    { key: "point-559-209", x: 559, y: 209, r: 13 },
    { key: "point-647-450", x: 647, y: 450, r: 7 },
    { key: "point-261-605", x: 261, y: 605, r: 7 },
    { key: "point-484-603", x: 484, y: 603, r: 7 },
  ];

  return (
    <svg className="size-full opacity-75" viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="sphere">
          <stop stopColor="#faaf68" />
          <stop offset=".65" stopColor="#bc542b" />
          <stop offset="1" stopColor="#6b2d16" />
        </radialGradient>
        <linearGradient id="orbit">
          <stop stopColor="#7a3f27" />
          <stop offset=".45" stopColor="#e9b381" />
          <stop offset="1" stopColor="#a4532e" />
        </linearGradient>
      </defs>
      <g stroke="url(#orbit)">
        {orbits.map((orbit) => (
          <ellipse
            key={orbit.key}
            cx="400"
            cy="400"
            rx={260}
            ry={orbit.ry}
            transform={`rotate(${orbit.rotate} 400 400)`}
            opacity={orbit.opacity}
          />
        ))}
      </g>
      <circle cx="400" cy="400" r="52" fill="url(#sphere)" />
      {points.map((point) => (
        <circle key={point.key} cx={point.x} cy={point.y} r={point.r} fill="url(#sphere)" />
      ))}
    </svg>
  );
}
