import { renderStarburst } from './Starburst.js';

export function renderSlide1() {
  return `
    <div class="slide slide--stone" id="slide-1" data-slide="1">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; height: 100%;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; max-width: 65%;">
          <div>
            <div class="slide-category">INA CAMPUS × GETAI · FORMATION 1 DÉCOUVERTE</div>
            <h1 class="slide-title" style="margin-top: 1.5rem; font-size: clamp(2.4rem, 4.2vw, 4.4rem); line-height: 0.98;">
              DU PROJET<br>AU DOSSIER<br>QUI CONVAINC
            </h1>
            <div class="slide-subtitle" style="margin-top: 1.5rem; font-weight: var(--weight-medium); color: var(--text-primary);">
              Claude, Gamma et Canva pour le pôle développement de 2P2L
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.5rem; padding-top: 2rem; border-top: 1px solid var(--border-line);">
            <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.1vw, 1.1rem); font-weight: var(--weight-medium);">
              Module Communication · Mardi 6 octobre 2026 · 14h00 à 17h30
            </div>
            <div style="font-family: var(--font-mono); font-size: clamp(0.85rem, 1.1vw, 1.1rem); color: var(--text-muted);">
              Animé par Baptiste · GETAI
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding-right: clamp(1rem, 3vw, 4rem);">
          ${renderStarburst(280, 2, 'var(--text-primary)')}
        </div>
      </div>
    </div>
  `;
}
