// Slide 06 — "Ce que Claude fait, et ce qu'il ne fait pas"
// Type : fond blanc, 2 colonnes "Il fait bien" / "Il ne fait pas"

import SlideFrame from './SlideFrame'

export default function Slide06({ direction, slideKey }) {
  return (
    <SlideFrame variant="white" direction={direction} slideKey={slideKey}>
      {/* Header */}
      <div className="slide-header" style={{ paddingBottom: '0.8rem' }}>
        <div>
          <p className="slide-supertitle">L'outil</p>
          <h2 className="slide-h2">Ce que Claude fait,<br />et ce qu'il ne fait pas</h2>
        </div>
      </div>

      <div className="rule" />

      {/* 2 colonnes équilibrées verticalement */}
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
        {/* Colonne Il fait bien */}
        <div
          style={{
            flex: 1,
            borderTop: '2px solid var(--color-ink)',
            paddingTop: '1.5rem',
          }}
        >
          <p
            className="label"
            style={{
              color: 'var(--color-ink)',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Il fait bien
          </p>
          <p className="slide-body" style={{ lineHeight: 1.75 }}>
            Rédiger, structurer, reformuler, résumer un dossier long, proposer des variantes, produire un fichier Word, PowerPoint ou PDF, garder vos consignes dans un projet.
          </p>
        </div>

        {/* Séparateur vertical */}
        <div
          style={{
            width: 1,
            height: '65%',
            background: 'var(--color-rule)',
            opacity: 0.2,
            alignSelf: 'center',
          }}
        />

        {/* Colonne Il ne fait pas */}
        <div
          style={{
            flex: 1,
            borderTop: '2px solid rgba(17,17,16,0.25)',
            paddingTop: '1.5rem',
          }}
        >
          <p
            className="label"
            style={{
              color: 'var(--color-ink-muted)',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Il ne fait pas
          </p>
          <p className="slide-body" style={{ lineHeight: 1.75, color: 'var(--color-ink-muted)' }}>
            Garantir un chiffre ou un fait, connaître vos projets si vous ne les lui donnez pas, générer des photos réalistes, remplacer votre regard éditorial.
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
