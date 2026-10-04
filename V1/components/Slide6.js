export function renderSlide6() {
  return `
    <div class="slide slide--white" id="slide-6" data-slide="6">
      <div>
        <div class="slide-category">L'OUTIL</div>
        <h2 class="slide-title">CE QUE CLAUDE FAIT, ET CE QU'IL NE FAIT PAS</h2>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.5rem, 3vw, 3rem); margin-top: auto; margin-bottom: auto; padding-top: 1rem;">
        
        <!-- Colonne 1 : Il fait bien -->
        <div style="border-top: 2px solid var(--border-line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="font-family: var(--font-heading); font-size: clamp(1.3rem, 1.8vw, 1.9rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
            Il fait bien
          </h3>
          <p style="font-size: clamp(1.05rem, 1.35vw, 1.35rem); line-height: 1.5; color: var(--text-primary); font-weight: var(--weight-medium);">
            Rédiger, structurer, reformuler, résumer un dossier long, proposer des variantes, produire un fichier Word, PowerPoint ou PDF, garder vos consignes dans un projet.
          </p>
        </div>

        <!-- Colonne 2 : Il ne fait pas -->
        <div style="border-top: 2px solid var(--border-line); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="font-family: var(--font-heading); font-size: clamp(1.3rem, 1.8vw, 1.9rem); font-weight: var(--weight-black); letter-spacing: -0.02em; text-transform: uppercase;">
            Il ne fait pas
          </h3>
          <p style="font-size: clamp(1.05rem, 1.35vw, 1.35rem); line-height: 1.5; color: var(--text-primary); font-weight: var(--weight-medium);">
            Garantir un chiffre ou un fait, connaître vos projets si vous ne les lui donnez pas, générer des photos réalistes, remplacer votre regard éditorial.
          </p>
        </div>

      </div>

      <div style="height: 1px;"></div>
    </div>
  `;
}
