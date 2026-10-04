export function renderSlide3() {
  return `
    <div class="slide slide--stone" id="slide-3" data-slide="3">
      <div>
        <div class="slide-category">TOUR DE TABLE · 10 MIN</div>
        <h2 class="slide-title">AVANT DE COMMENCER</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(1rem, 2.5vw, 2.5rem); margin-top: auto; margin-bottom: auto; padding-top: 1rem;">
        
        <!-- Bloc 1 -->
        <div style="border-top: 1.5px solid var(--border-line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <h3 style="font-family: var(--font-heading); font-size: clamp(1.3rem, 1.9vw, 2rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
            Votre support
          </h3>
          <p style="font-size: clamp(1rem, 1.25vw, 1.25rem); line-height: 1.45; color: var(--text-primary);">
            Lequel produisez-vous le plus souvent : dossier de projet, deck, visuel, note ?
          </p>
        </div>

        <!-- Bloc 2 -->
        <div style="border-top: 1.5px solid var(--border-line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <h3 style="font-family: var(--font-heading); font-size: clamp(1.3rem, 1.9vw, 2rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
            Vos outils
          </h3>
          <p style="font-size: clamp(1rem, 1.25vw, 1.25rem); line-height: 1.45; color: var(--text-primary);">
            Lesquels utilisez-vous déjà : ChatGPT, Gamma, Canva, autre ?
          </p>
        </div>

        <!-- Bloc 3 -->
        <div style="border-top: 1.5px solid var(--border-line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <h3 style="font-family: var(--font-heading); font-size: clamp(1.3rem, 1.9vw, 2rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
            Votre temps
          </h3>
          <p style="font-size: clamp(1rem, 1.25vw, 1.25rem); line-height: 1.45; color: var(--text-primary);">
            Qu'est-ce qui vous prend le plus de temps quand vous montez un dossier ?
          </p>
        </div>

      </div>

      <div style="height: 1px;"></div>
    </div>
  `;
}
