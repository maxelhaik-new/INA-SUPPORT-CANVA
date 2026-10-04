// Slide 07 — "Un bon prompt, quatre réflexes"
// Type : fond pierre, 4 items numérotés avec filet top

import SlideFrame from './SlideFrame'

const reflexes = [
  {
    num: '01',
    titre: 'Soyez précis',
    texte: 'Pas « un pitch », mais « un pitch de 5 lignes pour une série de 4 × 26 min ».',
  },
  {
    num: '02',
    titre: 'Donnez le contexte',
    texte: 'Pour qui, pour quelle chaîne ou marque, avec quel ton.',
  },
  {
    num: '03',
    titre: 'Montrez un exemple',
    texte: 'Un pitch que vous aimez : Claude imite très bien un format.',
  },
  {
    num: '04',
    titre: 'Itérez',
    texte: '« Plus court », « moins publicitaire » : la première version n\'est qu\'un départ.',
  },
]

export default function Slide07({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">La méthode</p>
          <h2 className="slide-h2">Un bon prompt,<br />quatre réflexes</h2>
        </div>
      </div>

      <div className="rule" />

      {/* 4 réflexes en 2×2 grid étalés harmonieusement */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '3.5rem',
            rowGap: '2.5rem',
          }}
        >
          {reflexes.map((r) => (
            <div
              key={r.num}
              style={{
                borderTop: '1px solid rgba(17,17,16,0.3)',
                paddingTop: '1.2rem',
                display: 'flex',
                gap: '1.2rem',
              }}
            >
              {/* Numéro */}
              <span
                className="label"
                style={{
                  paddingTop: '0.15rem',
                  minWidth: '2rem',
                }}
              >
                {r.num}
              </span>
              <div>
                <p
                  className="slide-title"
                  style={{
                    marginBottom: '0.5rem',
                  }}
                >
                  {r.titre}
                </p>
                <p className="slide-body" style={{ color: 'var(--color-ink-muted)' }}>
                  {r.texte}
                </p>
              </div>
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
