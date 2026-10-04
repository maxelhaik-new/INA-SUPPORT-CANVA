// Slide 02 — Programme de l'après-midi (tableau horaire)
// Type : fond blanc, titre top-left, grand tableau

import SlideFrame from './SlideFrame'

const programme = [
  { heure: '14h00', sequence: 'Ouverture et tour de table', livrable: '—' },
  { heure: '14h10', sequence: 'Prendre en main Claude', livrable: 'Premiers prompts' },
  { heure: '14h35', sequence: 'Sécurité, réglages, connecteurs', livrable: 'Trois comptes réglés et reliés' },
  { heure: '14h55', sequence: 'Analyser un vrai dossier', livrable: 'Les cinq points de contrôle' },
  { heure: '15h10', sequence: 'Fil rouge 1 et 2 : le brief, le pitch', livrable: 'Synthèse du brief, pitch' },
  { heure: '15h30', sequence: 'Fil rouge 3 : le dossier', livrable: 'Fichier Word' },
  { heure: '15h50', sequence: 'Pause', livrable: '—' },
  { heure: '16h00', sequence: 'Fil rouge 4 : budget et planning', livrable: 'Fichier Excel' },
  { heure: '16h20', sequence: 'Fil rouge 5 : les visuels', livrable: 'Affiche et miniature Canva' },
  { heure: '16h45', sequence: 'Fil rouge 6 : le deck', livrable: 'Deck Gamma ou PowerPoint' },
  { heure: '17h05', sequence: 'Fil rouge 7 : contrôle et envoi', livrable: 'Dossier relu, mail d\'envoi' },
  { heure: '17h20', sequence: 'Coûts, lundi, clôture', livrable: '—' },
]

export default function Slide02({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '1rem' }}>
        <div>
          <p className="slide-supertitle">L'après-midi</p>
          <h2 className="slide-h2">Le programme</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Tableau */}
      <div
        className="slide-content top"
        style={{ paddingTop: '0', overflowY: 'auto', paddingBottom: '0' }}
      >
        <table className="slide-table">
          <thead>
            <tr>
              <th style={{ width: '12%' }}>Horaire</th>
              <th style={{ width: '52%' }}>Séquence</th>
              <th>Livrable</th>
            </tr>
          </thead>
          <tbody>
            {programme.map((row, i) => (
              <tr key={i} style={row.sequence === 'Pause' ? { opacity: 0.45 } : {}}>
                <td style={{ fontWeight: 600 }}>{row.heure}</td>
                <td style={{ color: 'var(--color-ink)' }}>{row.sequence}</td>
                <td className="label" style={{ color: 'var(--color-ink-muted)' }}>
                  {row.livrable}
                </td>
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
