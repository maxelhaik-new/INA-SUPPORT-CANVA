// Slide 13 — Section break "02 · Sécurité, réglages et propriété"
// Type : fond pierre + burst 16 branches, texte bottom-left

import SlideFrame from './SlideFrame'
import BurstGfx from './BurstGfx'

export default function Slide13({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header">
        <span className="label">INA Campus × GETAI</span>
      </div>

      {/* Burst 16 branches graphique */}
      <BurstGfx
        size={260}
        strokeWidth={1.5}
        className="star-gfx"
      />

      {/* Contenu bottom-left */}
      <div className="slide-content" style={{ paddingBottom: '3.5rem' }}>
        <p
          className="label"
          style={{
            fontSize: 'var(--text-h2)',
            color: 'var(--color-ink)',
            marginBottom: '0.4rem',
            letterSpacing: '0.02em',
          }}
        >
          02
        </p>
        <h1 className="slide-h1-hero" style={{ maxWidth: '65%' }}>
          Sécurité, réglages<br />et propriété
        </h1>
        <p
          className="slide-body"
          style={{
            marginTop: '1.2rem',
            color: 'var(--color-ink-muted)',
            fontStyle: 'italic',
          }}
        >
          Savoir ce qu'on peut confier à un outil, et ce qui reste chez soi.
        </p>
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <span className="label">INA Campus × GETAI</span>
        <span className="label">6 octobre 2026</span>
      </div>
    </SlideFrame>
  )
}
