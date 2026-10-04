export function renderSlide4() {
  const steps = [
    { num: "1", phase: "Le brief", tool: "Claude" },
    { num: "2", phase: "Le pitch", tool: "Claude" },
    { num: "3", phase: "Le dossier", tool: "Word" },
    { num: "4", phase: "Le budget", tool: "Excel" },
    { num: "5", phase: "Les visuels", tool: "Canva" },
    { num: "6", phase: "Le deck", tool: "Gamma ou PowerPoint" },
    { num: "7", phase: "L'envoi", tool: "Contrôle et mail" }
  ];

  const stepsHtml = steps.map(step => `
    <div style="display: flex; flex-direction: column; align-items: flex-start; flex: 1; min-width: 0;">
      <div style="width: 100%; height: 1.5px; background-color: var(--border-line); position: relative; margin-bottom: 0.9rem;">
        <div style="position: absolute; top: -5px; left: 0; width: 12px; height: 12px; border-radius: 50%; background-color: var(--border-line);"></div>
      </div>
      <div style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: var(--weight-bold); color: var(--text-primary); margin-bottom: 0.25rem;">
        ${step.num}
      </div>
      <div style="font-weight: var(--weight-bold); font-size: clamp(0.85rem, 1vw, 1.05rem); color: var(--text-primary); line-height: 1.2;">
        ${step.phase}
      </div>
      <div style="font-family: var(--font-mono); font-size: clamp(0.72rem, 0.85vw, 0.85rem); color: var(--text-muted); margin-top: 0.35rem; line-height: 1.25;">
        ${step.tool}
      </div>
    </div>
  `).join("");

  return `
    <div class="slide slide--white" id="slide-4" data-slide="4">
      <div>
        <div class="slide-category">LE FIL ROUGE</div>
        <h2 class="slide-title">UN PROJET, DU BRIEF À L'ENVOI</h2>
      </div>

      <!-- Ligne de timeline horizontale épurée (Style Recherche) -->
      <div style="display: flex; gap: clamp(0.5rem, 1.2vw, 1.5rem); margin: auto 0; padding: 1rem 0;">
        ${stepsHtml}
      </div>

      <!-- Cartouche sombre pour le projet (Contraste fort, Capture 2) -->
      <div class="card-dark" style="margin-top: auto;">
        <p style="font-size: clamp(0.88rem, 1.1vw, 1.1rem);">
          <strong style="font-family: var(--font-mono); letter-spacing: 0.05em; margin-right: 0.5rem;">LE PROJET</strong>
          Verdalis, marque fictive de vélos électriques, veut une série documentaire de brand content. Vous êtes le pôle développement.
        </p>
      </div>
    </div>
  `;
}
