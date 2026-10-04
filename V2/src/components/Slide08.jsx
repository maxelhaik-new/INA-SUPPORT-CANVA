// Slide 08 — "Le même besoin, deux prompts" — Avant / Après
// Type : fond blanc, 2 blocs contrastés

import SlideFrame from './SlideFrame'

export default function Slide08({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">Exemple</p>
          <h2 className="slide-h2">Le même besoin,<br />deux prompts</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Avant / Après centré avec hauteur et padding confortables */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          flexDirection: 'row',
          gap: '2.5rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Avant */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            alignSelf: 'stretch',
            justifyContent: 'center',
          }}
        >
          <p
            className="label"
            style={{
              marginBottom: '0.2rem',
            }}
          >
            Avant
          </p>
          <div
            style={{
              background: 'rgba(17,17,16,0.06)',
              borderRadius: '8px',
              padding: '1.8rem 1.6rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <p
              className="slide-body"
              style={{
                fontStyle: 'italic',
                color: 'var(--color-ink)',
                lineHeight: 1.6,
              }}
            >
              « Fais-moi un pitch pour mon doc. »
            </p>
            <p
              className="label"
              style={{
                letterSpacing: '0.06em',
                textTransform: 'none',
              }}
            >
              Résultat : générique, sans ton, à réécrire.
            </p>
          </div>
        </div>

        {/* Flèche */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'var(--color-ink-faint)',
            fontSize: '1.5rem',
          }}
        >
          →
        </div>

        {/* Après */}
        <div
          style={{
            flex: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            alignSelf: 'stretch',
            justifyContent: 'center',
          }}
        >
          <p
            className="label"
            style={{
              color: 'var(--color-ink)',
              fontWeight: 600,
              marginBottom: '0.2rem',
            }}
          >
            Après
          </p>
          <div
            style={{
              background: 'var(--color-bg-card)',
              borderRadius: '8px',
              padding: '1.8rem 1.6rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              className="slide-body"
              style={{
                fontStyle: 'italic',
                color: 'rgba(217,216,202,0.9)',
                lineHeight: 1.7,
              }}
            >
              « Tu es chargé de développement dans une société de production. Rédige le pitch, 5 lignes maximum, d'une série documentaire de brand content pour [marque], destinée à [chaîne]. Ton cinématographique, jamais publicitaire. Voici un pitch que nous aimons : [exemple]. Propose deux versions. »
            </p>
          </div>
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
