// Slide 04 — Le fil rouge : tableau des 7 étapes + callout projet
// Type : fond blanc, tableau + bloc projet

import SlideFrame from './SlideFrame'

const etapes = [
  { num: '01', phase: 'Le brief', outil: 'Claude' },
  { num: '02', phase: 'Le pitch', outil: 'Claude' },
  { num: '03', phase: 'Le dossier', outil: 'Word' },
  { num: '04', phase: 'Le budget', outil: 'Excel' },
  { num: '05', phase: 'Les visuels', outil: 'Canva' },
  { num: '06', phase: 'Le deck', outil: 'Gamma ou PowerPoint' },
  { num: '07', phase: 'L\'envoi', outil: 'Contrôle et mail' },
]

export default function Slide04({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">Le fil rouge</p>
          <h2 className="slide-h2">Un projet, du brief à l'envoi</h2>
        </div>
      </div>

      <div className="rule" />

      {/* Layout 2 colonnes équilibré */}
      <div
        className="slide-content"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          flexDirection: 'row',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Tableau étapes */}
        <div style={{ flex: 1.2 }}>
          <table className="slide-table">
            <thead>
              <tr>
                <th style={{ width: '12%' }}>#</th>
                <th style={{ width: '48%' }}>Phase</th>
                <th>Outil / Livrable</th>
              </tr>
            </thead>
            <tbody>
              {etapes.map((e, i) => (
                <tr key={i}>
                  <td
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                    }}
                  >
                    {e.num}
                  </td>
                  <td style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{e.phase}</td>
                  <td className="label" style={{ color: 'var(--color-ink-muted)' }}>
                    {e.outil}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bloc Projet */}
        <div
          style={{
            flex: 0.8,
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-card)',
            padding: '2rem 1.8rem',
            color: 'var(--color-bg-slide)',
          }}
        >
          <p
            className="label"
            style={{
              color: 'rgba(217,216,202,0.5)',
              marginBottom: '0.8rem',
            }}
          >
            Le projet
          </p>
          <p
            className="slide-body"
            style={{
              color: 'rgba(217,216,202,0.9)',
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: '#D9D8CA' }}>Verdalis</strong>, marque fictive de vélos électriques, veut une série documentaire de brand content. Vous êtes le pôle développement.
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
