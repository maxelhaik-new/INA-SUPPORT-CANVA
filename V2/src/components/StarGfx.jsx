// Asterisk / Star graphique — 8 branches SVG inline
// Reproduit fidèlement l'élément graphique du design cible

export default function StarGfx({ size = 260, strokeWidth = 1.5, className = '' }) {
  const c = size / 2
  const r = size * 0.47

  // 8 branches : angles 0, 45, 90, 135, 180, 225, 270, 315
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]

  const lines = angles.map((angle) => {
    const rad = (angle * Math.PI) / 180
    return {
      x1: c,
      y1: c,
      x2: c + r * Math.cos(rad),
      y2: c + r * Math.sin(rad),
    }
  })

  return (
    <svg
      className={`star-gfx ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="var(--color-ink)"
          strokeWidth={strokeWidth}
          strokeLinecap="square"
        />
      ))}
    </svg>
  )
}
