// ToolCard — Composant visuel d'illustration des outils (C)
// Encadrement architectural 1px avec mini header de fenêtre UI

export default function ToolCard({ nom, role }) {
  return (
    <div
      style={{
        border: '1px solid rgba(17,17,16,0.35)',
        borderRadius: 'var(--radius-card)',
        background: 'rgba(255,255,255,0.65)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Barre supérieure de fenêtre UI */}
      <div
        style={{
          height: '2.2rem',
          background: 'rgba(17,17,16,0.06)',
          borderBottom: '1px solid rgba(17,17,16,0.18)',
          padding: '0 0.9rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(17,17,16,0.35)' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(17,17,16,0.35)' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(17,17,16,0.35)' }} />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          INTERFACE · {nom}
        </span>
      </div>

      {/* Corps de la carte */}
      <div
        style={{
          padding: '1.2rem 1.1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: '6px',
              background: 'var(--color-ink)',
              color: 'var(--color-bg-slide)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              fontFamily: 'var(--font-mono)',
              flexShrink: 0,
            }}
          >
            {nom[0]}
          </div>
          <h3 className="slide-title" style={{ fontSize: '1.15rem', margin: 0, fontWeight: 700 }}>
            {nom}
          </h3>
        </div>
        <p className="slide-body-sm" style={{ color: 'var(--color-ink-muted)', lineHeight: 1.55 }}>
          {role}
        </p>
      </div>
    </div>
  )
}
