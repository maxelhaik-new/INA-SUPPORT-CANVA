// GrainOverlay — Calque de micro-grain minéral SVG procédural
// Rendu effectif et visible de la texture papier tactile

export default function GrainOverlay({ opacity = 0.07 }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: opacity,
        mixBlendMode: 'multiply',
        overflow: 'hidden',
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-noise-filter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise-filter)" fill="#000000" />
      </svg>
    </div>
  )
}
