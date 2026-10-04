// SlideNav — navigation entre slides : dots + flèches clavier + boutons
// Affiché dans le cadre extérieur sombre (hors slide)

export default function SlideNav({ current, total, onPrev, onNext }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        zIndex: 100,
      }}
    >
      {/* Bouton précédent */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: 28,
          height: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: current === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.5)',
          cursor: current === 0 ? 'default' : 'pointer',
          fontSize: '0.75rem',
          transition: 'color 0.2s, border-color 0.2s',
        }}
        aria-label="Slide précédente"
      >
        ←
      </button>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`nav-dot${i === current ? ' active' : ''}`}
            style={{ cursor: 'pointer' }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bouton suivant */}
      <button
        onClick={onNext}
        disabled={current === total - 1}
        style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: 28,
          height: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: current === total - 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.5)',
          cursor: current === total - 1 ? 'default' : 'pointer',
          fontSize: '0.75rem',
          transition: 'color 0.2s, border-color 0.2s',
        }}
        aria-label="Slide suivante"
      >
        →
      </button>

      {/* Compteur */}
      <span
        className="kbd-hint"
        style={{ marginLeft: '0.5rem' }}
      >
        {current + 1} / {total}
      </span>
    </div>
  )
}
