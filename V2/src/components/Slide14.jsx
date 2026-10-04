// Slide 14 — Confidentialité et données : "Où vont vos contenus"
// Type : fond blanc, 3 colonnes de principes + carte d'avertissement en bas

import SlideFrame from './SlideFrame'

const principes = [
  {
    titre: 'Compte gratuit ou individuel',
    texte: 'Vos contenus passent par les serveurs de l\'éditeur. Sur Claude, Canva et Gamma, l\'entraînement sur vos contenus est autorisé tant que vous ne le désactivez pas.',
  },
  {
    titre: 'Offre entreprise',
    texte: 'Claude Team et Enterprise, Canva Teams et Business, Gamma Team et Business : contenus exclus de l\'entraînement, administration centralisée.',
  },
  {
    titre: 'Traitement en local',
    texte: 'Rien ne sort de vos machines, avec des outils moins puissants. Vu au tronc commun.',
  },
]

export default function Slide14({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">Le principe</p>
          <h2 className="slide-h2">Où vont vos contenus</h2>
        </div>
      </div>

      <div className="rule" />

      {/* 3 colonnes + bloc DONC */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.2rem',
          paddingBottom: '2.5rem',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {principes.map((p, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid rgba(17,17,16,0.3)',
                paddingTop: '1rem',
              }}
            >
              <p className="slide-title" style={{ marginBottom: '0.5rem' }}>
                {p.titre}
              </p>
              <p className="slide-body" style={{ color: 'var(--color-ink-muted)' }}>
                {p.texte}
              </p>
            </div>
          ))}
        </div>

        {/* Bloc DONC en carte sombre */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-card)',
            padding: '1.4rem 1.6rem',
            marginTop: '1.2rem',
          }}
        >
          <p className="label" style={{ color: 'rgba(217,216,202,0.5)', marginBottom: '0.4rem' }}>
            Donc
          </p>
          <p className="slide-body" style={{ color: '#D9D8CA', fontWeight: 500 }}>
            Sur des comptes gratuits, on travaille aujourd'hui sur un projet fictif. Aucun document 2P2L ne passe dans les outils.
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
