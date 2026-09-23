export function UniFallback() {
  const orbits = Array.from({ length: 12 }, (_, step) => ({
    key: `uni-fallback-orbit-${100 + step * 12}`,
    ry: 110 + step * 12,
    rotate: step * 15 - 20,
    opacity: 0.2 + step * 0.05,
  }));
  const points = [
    { key: "point-uni-1", x: 190, y: 280, r: 8, fill: "url(#uni-sphere)" },
    { key: "point-uni-2", x: 580, y: 220, r: 12, fill: "url(#uni-copper)" },
    { key: "point-uni-3", x: 630, y: 460, r: 9, fill: "url(#uni-sphere)" },
    { key: "point-uni-4", x: 270, y: 590, r: 8, fill: "url(#uni-copper)" },
    { key: "point-uni-5", x: 490, y: 610, r: 10, fill: "url(#uni-sphere)" },
  ];

  return (
    <svg className="size-full opacity-80" viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="uni-sphere">
          <stop stopColor="#8d9d70" />
          <stop offset=".65" stopColor="#556041" />
          <stop offset="1" stopColor="#303823" />
        </radialGradient>
        <radialGradient id="uni-copper">
          <stop stopColor="#faaf68" />
          <stop offset=".7" stopColor="#bd683b" />
          <stop offset="1" stopColor="#71381f" />
        </radialGradient>
        <linearGradient id="uni-orbit">
          <stop stopColor="#626c4d" />
          <stop offset=".5" stopColor="#c5cca8" />
          <stop offset="1" stopColor="#bd683b" />
        </linearGradient>
      </defs>
      <g stroke="url(#uni-orbit)" strokeWidth="1.2">
        {orbits.map((orbit) => (
          <ellipse
            key={orbit.key}
            cx="400"
            cy="400"
            rx={270}
            ry={orbit.ry}
            transform={`rotate(${orbit.rotate} 400 400)`}
            opacity={orbit.opacity}
          />
        ))}
      </g>
      <circle cx="400" cy="400" r="54" fill="url(#uni-sphere)" />
      {points.map((point) => (
        <circle key={point.key} cx={point.x} cy={point.y} r={point.r} fill={point.fill} />
      ))}
    </svg>
  );
}
