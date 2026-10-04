export function renderSlide8() {
  return `
    <div class="slide slide--white" id="slide-8" data-slide="8">
      <div>
        <div class="slide-category">EXEMPLE</div>
        <h2 class="slide-title">LE MÊME BESOIN, DEUX PROMPTS</h2>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.35fr; gap: clamp(1.25rem, 2.5vw, 2.5rem); margin-top: auto; margin-bottom: auto; padding-top: 1rem; align-items: stretch;">
        
        <!-- Bloc Avant -->
        <div style="background-color: var(--bg-slide-stone); border-radius: var(--radius-card); padding: clamp(1.2rem, 1.8vw, 1.8rem); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: var(--weight-bold); letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem;">
              Avant
            </div>
            <div style="font-family: var(--font-heading); font-size: clamp(1.1rem, 1.5vw, 1.5rem); font-weight: var(--weight-bold); line-height: 1.3; color: var(--text-primary); margin-bottom: 1.25rem;">
              « Fais-moi un pitch pour mon doc. »
            </div>
          </div>
          <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1vw, 1rem); color: var(--text-muted); padding-top: 0.75rem; border-top: 1px solid var(--border-subtle);">
            Résultat : générique, sans ton, à réécrire.
          </div>
        </div>

        <!-- Bloc Après (Cartouche Sombre Contrasté, Style Capture 2) -->
        <div class="card-dark" style="display: flex; flex-direction: column; justify-content: space-between; padding: clamp(1.2rem, 1.8vw, 1.8rem);">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: var(--weight-bold); letter-spacing: 0.1em; text-transform: uppercase; color: #A0A0A5; margin-bottom: 0.75rem;">
              Après
            </div>
            <div style="font-size: clamp(0.95rem, 1.2vw, 1.2rem); line-height: 1.5; color: var(--text-light); font-weight: var(--weight-regular);">
              « Tu es chargé de développement dans une société de production. Rédige le pitch, 5 lignes maximum, d'une série documentaire de brand content pour [marque], destinée à [chaîne]. Ton cinématographique, jamais publicitaire. Voici un pitch que nous aimons : [exemple]. Propose deux versions. »
            </div>
          </div>
        </div>

      </div>

      <div style="height: 1px;"></div>
    </div>
  `;
}
