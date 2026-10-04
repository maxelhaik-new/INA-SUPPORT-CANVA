export function renderSlide10() {
  const artifacts = [
    {
      title: "Ce qui se télécharge",
      desc: "Les fichiers produits : Word, PowerPoint, PDF, Excel. Téléchargez-les tout de suite et gardez-les chez vous."
    },
    {
      title: "Ce qui se conserve",
      desc: "La conversation et le projet (consignes et documents) restent dans votre compte, prêts à être rouverts."
    },
    {
      title: "Ce qui se partage",
      desc: "Un lien vers un artefact publié, que vous envoyez à vos collègues. Vérifiez qui y a accès avant de l'envoyer."
    }
  ];

  const rowsHtml = artifacts.map(a => `
    <div style="display: grid; grid-template-columns: 1.1fr 1.9fr; align-items: center; padding: clamp(1rem, 1.8vw, 1.8rem) 0; border-bottom: 1.5px solid var(--border-line); gap: 2rem;">
      <h3 style="font-family: var(--font-heading); font-size: clamp(1.2rem, 1.8vw, 1.9rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
        ${a.title}
      </h3>
      <p style="font-size: clamp(0.95rem, 1.25vw, 1.25rem); line-height: 1.45; color: var(--text-primary); font-weight: var(--weight-regular);">
        ${a.desc}
      </p>
    </div>
  `).join("");

  return `
    <div class="slide slide--white" id="slide-10" data-slide="10">
      <div>
        <div class="slide-category">À RETENIR</div>
        <h2 class="slide-title">CE QUE CLAUDE VOUS REND : LES ARTEFACTS</h2>
      </div>

      <!-- Structure 3 rangées horizontales avec filets noirs (Exact Capture 5) -->
      <div style="margin-top: auto; margin-bottom: auto; border-top: 1.5px solid var(--border-line);">
        ${rowsHtml}
      </div>

      <div style="height: 1px;"></div>
    </div>
  `;
}
