// Slide 12 — Outils et formats : "Trois outils, cinq formats"
// Type : fond pierre, 3 cartes d'outils avec contours architecturaux 1px + callout en bas

import SlideFrame from './SlideFrame'
import ToolCard from './ToolCard'

const outils = [
  {
    nom: 'Claude',
    role: 'Le fond : écrire, structurer, relire. Il produit aussi les fichiers Word, Excel et PowerPoint.',
  },
  {
    nom: 'Gamma',
    role: 'Le deck présentable, généré depuis Claude par le connecteur.',
  },
  {
    nom: 'Canva',
    role: 'Les visuels : affiche, miniature, déclinaisons, générés depuis Claude.',
  },
]

export default function Slide12({ direction, slideKey }) {
  return (
    <SlideFrame variant="stone" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">Les outils de l'après-midi</p>
          <h2 className="slide-h2">Trois outils, cinq formats</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Contenu : 3 blocs outils + bloc encadré manipulation */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.2rem',
          paddingBottom: '2.5rem',
          justifyContent: 'space-between',
        }}
      >
        {/* 3 cartes d'outils */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {outils.map((o, i) => (
            <ToolCard key={i} nom={o.nom} role={o.role} />
          ))}
        </div>

        {/* Bloc En manipulation */}
        <div
          className="rule-card"
          style={{
            padding: '1.2rem 1.6rem',
            marginTop: '1rem',
          }}
        >
          <p className="label" style={{ marginBottom: '0.4rem' }}>
            En manipulation
          </p>
          <p className="slide-body" style={{ fontWeight: 500 }}>
            Versions gratuites. Claude envoie vers Gamma et Canva par les connecteurs. Si un connecteur bloque : copier-coller, et on continue.
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
