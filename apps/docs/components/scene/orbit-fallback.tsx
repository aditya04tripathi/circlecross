export function OrbitFallback() {
  return (
    <svg className="orbit-fallback" viewBox="0 0 800 800" fill="none" aria-hidden="true">
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
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse
            key={i}
            cx="400"
            cy="400"
            rx={260}
            ry={100 + i * 10}
            transform={`rotate(${i * 15} 400 400)`}
            opacity={0.24 + i * 0.045}
          />
        ))}
      </g>
      <circle cx="400" cy="400" r="52" fill="url(#sphere)" />
      {[
        [177, 264],
        [559, 209],
        [647, 450],
        [261, 605],
        [484, 603],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 1 ? 13 : 7} fill="url(#sphere)" />
      ))}
    </svg>
  );
}
