// Slide 11 — Lexique : "Six mots pour l'après-midi"
// Type : fond blanc, tableau de 6 termes avec hauteurs équilibrées

import SlideFrame from './SlideFrame'

const lexique = [
  { terme: 'Prompt', def: 'L\'instruction que vous donnez à l\'outil.' },
  { terme: 'Projet', def: 'Un espace Claude qui garde vos consignes et vos documents.' },
  { terme: 'Artefact', def: 'Ce que Claude produit : fichier, document, présentation.' },
  { terme: 'Connecteur', def: 'Le lien qui permet à Claude d\'agir dans un autre outil.' },
  { terme: 'Quota et crédits', def: 'La quantité d\'usage autorisée par période ou par compte.' },
  { terme: 'Hallucination', def: 'Une information fausse présentée avec assurance.' },
]

export default function Slide11({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">À retenir</p>
          <h2 className="slide-h2">Six mots pour l'après-midi</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Tableau du lexique */}
      <div
        className="slide-content top"
        style={{ paddingTop: '1.2rem', paddingBottom: '2rem' }}
      >
        <table className="slide-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Terme</th>
              <th>Définition</th>
            </tr>
          </thead>
          <tbody>
            {lexique.map((item, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, color: 'var(--color-ink)' }}>{item.terme}</td>
                <td style={{ color: 'var(--color-ink)' }}>{item.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="slide-footer">
        <span className="label">INA Campus × GETAI</span>
        <span className="label">6 octobre 2026</span>
      </div>
    </SlideFrame>
  )
}
