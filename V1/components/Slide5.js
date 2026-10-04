import { renderStarburst } from './Starburst.js';

export function renderSlide5() {
  return `
    <div class="slide slide--stone" id="slide-5" data-slide="5">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 100%;">
        
        <div style="display: flex; flex-direction: column; justify-content: flex-end; max-width: 60%; padding-bottom: 1rem;">
          <div style="font-family: var(--font-heading); font-size: clamp(4.5rem, 8vw, 8rem); font-weight: var(--weight-black); line-height: 0.85; letter-spacing: -0.05em; color: var(--text-primary); margin-bottom: 1rem;">
            01
          </div>
          <h2 class="slide-title" style="font-size: clamp(2.2rem, 3.8vw, 4rem); line-height: 0.96; margin-bottom: 1.25rem;">
            PRENDRE EN MAIN CLAUDE
          </h2>
          <p style="font-size: clamp(1rem, 1.35vw, 1.4rem); color: var(--text-muted); line-height: 1.4; font-weight: var(--weight-medium); max-width: 550px;">
            Ce qu'il fait, ce qu'il ne fait pas, et comment lui parler.
          </p>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding-right: clamp(1rem, 3vw, 4rem);">
          ${renderStarburst(320, 2, 'var(--text-primary)')}
        </div>

      </div>
    </div>
  `;
}
