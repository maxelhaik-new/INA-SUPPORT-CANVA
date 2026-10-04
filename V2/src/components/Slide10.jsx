// Slide 10 — "Ce que Claude vous rend : les artefacts"
// Type : fond blanc, 3 items en liste avec icônes SVG

import SlideFrame from './SlideFrame'

const artefacts = [
  {
    icone: '↓',
    label: 'Ce qui se télécharge',
    texte:
      'Les fichiers produits : Word, PowerPoint, PDF, Excel. Téléchargez-les tout de suite et gardez-les chez vous.',
  },
  {
    icone: '○',
    label: 'Ce qui se conserve',
    texte:
      'La conversation et le projet (consignes et documents) restent dans votre compte, prêts à être rouverts.',
  },
  {
    icone: '↗',
    label: 'Ce qui se partage',
    texte:
      'Un lien vers un artefact publié, que vous envoyez à vos collègues. Vérifiez qui y a accès avant de l\'envoyer.',
  },
]

export default function Slide10({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">À retenir</p>
          <h2 className="slide-h2">Ce que Claude<br />vous rend : les artefacts</h2>
        </div>
      </div>

      <div className="rule" />

      {/* 3 artefacts en colonne équilibrée */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {artefacts.map((a, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,16,0.12)',
              paddingTop: i === 0 ? '0' : '1.2rem',
              paddingBottom: '1.2rem',
            }}
          >
            {/* Icône */}
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                border: '1.5px solid rgba(17,17,16,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                color: 'var(--color-ink)',
                flexShrink: 0,
              }}
            >
              {a.icone}
            </div>

            {/* Texte */}
            <div style={{ flex: 1 }}>
              <p
                className="label"
                style={{
                  color: 'var(--color-ink)',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                }}
              >
                {a.label}
              </p>
              <p className="slide-body" style={{ color: 'var(--color-ink-muted)', lineHeight: 1.65 }}>
                {a.texte}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <span className="label">INA Campus × GETAI</span>
        <span className="label">6 octobre 2026</span>
      </div>
    </SlideFrame>
  )
}
