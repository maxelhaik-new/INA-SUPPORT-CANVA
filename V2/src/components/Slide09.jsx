// Slide 09 — Exercice : "Demandez-lui un chiffre" — 4 étapes + règle
// Type : fond pierre, liste numérotée + rule card en bas

import SlideFrame from './SlideFrame'

const etapes = [
  {
    num: '01',
    titre: 'Posez la question',
    texte: '« Combien de séries documentaires de brand content ont été diffusées en France l\'an dernier ? »',
  },
  {
    num: '02',
    titre: 'Observez la réponse',
    texte: 'Donne-t-il un chiffre précis ? Cite-t-il une source, ou reste-t-il prudent ?',
  },
  {
    num: '03',
    titre: 'Demandez la source',
    texte: '« D\'où vient ce chiffre ? Donne-moi le lien exact. »',
  },
  {
    num: '04',
    titre: 'Vérifiez vous-même',
    texte: 'Ouvrez la source. Le chiffre y est-il, à l\'identique ?',
  },
]

export default function Slide09({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">Exercice · 5 min</p>
          <h2 className="slide-h2">Demandez-lui<br />un chiffre</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Étapes et Règle équilibrées */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '3.5rem',
            rowGap: '2rem',
          }}
        >
          {etapes.map((e) => (
            <div
              key={e.num}
              style={{
                borderTop: '1px solid rgba(17,17,16,0.25)',
                paddingTop: '1rem',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <span
                className="label"
                style={{
                  minWidth: '2rem',
                  paddingTop: '0.15rem',
                }}
              >
                {e.num}
              </span>
              <div>
                <p
                  className="slide-title"
                  style={{
                    marginBottom: '0.4rem',
                  }}
                >
                  {e.titre}
                </p>
                <p className="slide-body" style={{ color: 'var(--color-ink-muted)', fontStyle: 'italic' }}>
                  {e.texte}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rule card */}
        <div
          className="rule-card"
          style={{
            padding: '1.2rem 1.6rem',
            marginTop: '1.5rem',
          }}
        >
          <p
            className="label"
            style={{
              marginBottom: '0.4rem',
            }}
          >
            La règle
          </p>
          <p
            className="slide-body"
            style={{
              fontWeight: 700,
              color: 'var(--color-ink)',
            }}
          >
            Un chiffre dont vous n'avez pas vu la source ne va pas dans un dossier.
          </p>
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
