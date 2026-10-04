// Slide 01 — Couverture : "Du projet au dossier qui convainc"
// Type : hero avec asterisk, fond pierre, texte bottom-left

import SlideFrame from './SlideFrame'
import StarGfx from './StarGfx'

export default function Slide01({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header">
        <span className="label">INA Campus × GETAI</span>
      </div>

      {/* Asterisk graphique */}
      <StarGfx />

      {/* Contenu bottom-left */}
      <div className="slide-content" style={{ paddingBottom: '3.5rem' }}>
        <p className="slide-supertitle" style={{ marginBottom: '0.6rem' }}>
          Formation 1 · Découverte
        </p>
        <h1 className="slide-h1-hero" style={{ maxWidth: '55%' }}>
          Du projet<br />au dossier<br />qui convainc
        </h1>
        <p
          style={{
            marginTop: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-label)',
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            color: 'var(--color-ink-muted)',
          }}
        >
          Claude, Gamma et Canva · Pôle développement de 2P2L
        </p>
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <span className="label">Module Communication · Mardi 6 octobre 2026 · 14h00–17h30</span>
        <span className="label">Animé par Baptiste · GETAI</span>
      </div>
    </SlideFrame>
  )
}
