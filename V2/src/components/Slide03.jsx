// Slide 03 — Tour de table : "Avant de commencer"
// Type : fond pierre, 3 questions bold en liste

import SlideFrame from './SlideFrame'

const questions = [
  {
    label: 'Votre support',
    question: 'Lequel produisez-vous le plus souvent : dossier de projet, deck, visuel, note ?',
  },
  {
    label: 'Vos outils',
    question: 'Lesquels utilisez-vous déjà : ChatGPT, Gamma, Canva, autre ?',
  },
  {
    label: 'Votre temps',
    question: 'Qu\'est-ce qui vous prend le plus de temps quand vous montez un dossier ?',
  },
]

export default function Slide03({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header">
        <span className="label">Tour de table · 10 min</span>
      </div>

      {/* Titre et questions équilibrés */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <h1 className="slide-h1" style={{ margin: 0 }}>
          Avant de commencer
        </h1>

        {/* Questions en colonnes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
        >
          {questions.map((q, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid var(--color-rule)',
                paddingTop: '1.2rem',
              }}
            >
              <p className="label" style={{ marginBottom: '0.8rem' }}>
                {q.label}
              </p>
              <p className="slide-body" style={{ fontWeight: 500, lineHeight: 1.55 }}>
                {q.question}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <span className="label">INA Campus × GETAI</span>
        <span className="label">6 octobre 2026</span>
      </div>
    </SlideFrame>
  )
}
