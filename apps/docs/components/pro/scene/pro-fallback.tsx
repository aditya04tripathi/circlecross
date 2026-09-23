export function ProFallback() {
  const orbits = Array.from({ length: 12 }, (_, step) => ({
    key: `pro-fallback-orbit-${100 + step * 12}`,
    ry: 110 + step * 12,
    rotate: step * 15 - 15,
    opacity: 0.22 + step * 0.05,
  }));
  const points = [
    { key: "point-pro-1", x: 210, y: 270, r: 8, fill: "url(#pro-sphere)" },
    { key: "point-pro-2", x: 570, y: 230, r: 12, fill: "url(#pro-copper)" },
    { key: "point-pro-3", x: 620, y: 470, r: 9, fill: "url(#pro-sphere)" },
    { key: "point-pro-4", x: 280, y: 580, r: 8, fill: "url(#pro-copper)" },
    { key: "point-pro-5", x: 480, y: 620, r: 10, fill: "url(#pro-sphere)" },
  ];

  return (
    <svg className="size-full opacity-80" viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pro-sphere">
          <stop stopColor="#8789ad" />
          <stop offset=".65" stopColor="#4a4b64" />
          <stop offset="1" stopColor="#252636" />
        </radialGradient>
        <radialGradient id="pro-copper">
          <stop stopColor="#faaf68" />
          <stop offset=".7" stopColor="#bd683b" />
          <stop offset="1" stopColor="#71381f" />
        </radialGradient>
        <linearGradient id="pro-orbit">
          <stop stopColor="#63647c" />
          <stop offset=".5" stopColor="#b4b7d9" />
          <stop offset="1" stopColor="#bd683b" />
        </linearGradient>
      </defs>
      <g stroke="url(#pro-orbit)" strokeWidth="1.2">
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
      <rect
        x="362"
        y="362"
        width="76"
        height="76"
        transform="rotate(45 400 400)"
        fill="url(#pro-sphere)"
        rx="6"
      />
      {points.map((point) => (
        <circle key={point.key} cx={point.x} cy={point.y} r={point.r} fill={point.fill} />
      ))}
    </svg>
  );
}
