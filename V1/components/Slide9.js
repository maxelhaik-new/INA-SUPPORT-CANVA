export function renderSlide9() {
  const steps = [
    {
      num: "1",
      title: "Posez la question",
      desc: "« Combien de séries documentaires de brand content ont été diffusées en France l'an dernier ? »"
    },
    {
      num: "2",
      title: "Observez la réponse",
      desc: "Donne-t-il un chiffre précis ? Cite-t-il une source, ou reste-t-il prudent ?"
    },
    {
      num: "3",
      title: "Demandez la source",
      desc: "« D'où vient ce chiffre ? Donne-moi le lien exact. »"
    },
    {
      num: "4",
      title: "Vérifiez vous-même",
      desc: "Ouvrez la source. Le chiffre y est-il, à l'identique ?"
    }
  ];

  const stepsHtml = steps.map(s => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: var(--weight-bold); color: var(--text-primary); border-bottom: 1.5px solid var(--border-line); padding-bottom: 0.35rem;">
        ${s.num}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: clamp(0.95rem, 1.2vw, 1.25rem); font-weight: var(--weight-black); margin-top: 0.25rem;">
        ${s.title}
      </h3>
      <p style="font-size: clamp(0.82rem, 0.95vw, 0.95rem); line-height: 1.4; color: var(--text-primary);">
        ${s.desc}
      </p>
    </div>
  `).join("");

  return `
    <div class="slide slide--stone" id="slide-9" data-slide="9">
      <div>
        <div class="slide-category">EXERCICE · 5 MIN</div>
        <h2 class="slide-title">DEMANDEZ-LUI UN CHIFFRE</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(1rem, 1.8vw, 2rem); margin: auto 0; padding: 1rem 0;">
        ${stepsHtml}
      </div>

      <!-- Bandeau Règle -->
      <div style="border: 1.5px solid var(--border-line); border-radius: var(--radius-card); padding: clamp(0.9rem, 1.3vw, 1.3rem); background-color: rgba(255, 255, 255, 0.5);">
        <p style="font-size: clamp(0.9rem, 1.1vw, 1.15rem); color: var(--text-primary);">
          <strong style="font-family: var(--font-mono); letter-spacing: 0.05em; margin-right: 0.5rem;">LA RÈGLE</strong>
          Un chiffre dont vous n'avez pas vu la source ne va pas dans un dossier.
        </p>
      </div>
    </div>
  `;
}
