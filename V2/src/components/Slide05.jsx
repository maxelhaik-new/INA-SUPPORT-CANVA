// Slide 05 — Section break "01 · Prendre en main Claude"
// Type : fond pierre + asterisk, texte bottom-left, style section marker

import SlideFrame from './SlideFrame'
import BurstGfx from './BurstGfx'

export default function Slide05({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header">
        <span className="label">INA Campus × GETAI</span>
      </div>

      {/* Burst 16 branches graphique */}
      <BurstGfx size={260} strokeWidth={1.5} className="star-gfx" />

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
          01
        </p>
        <h1 className="slide-h1-hero" style={{ maxWidth: '60%' }}>
          Prendre en<br />main Claude
        </h1>
        <p
          className="slide-body"
          style={{
            marginTop: '1.2rem',
            color: 'var(--color-ink-muted)',
            fontStyle: 'italic',
          }}
        >
          Ce qu'il fait, ce qu'il ne fait pas, et comment lui parler.
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
