export function renderSlide7() {
  const reflexes = [
    {
      num: "1",
      title: "Soyez précis",
      desc: "Pas « un pitch », mais « un pitch de 5 lignes pour une série de 4 × 26 min »."
    },
    {
      num: "2",
      title: "Donnez le contexte",
      desc: "Pour qui, pour quelle chaîne ou marque, avec quel ton."
    },
    {
      num: "3",
      title: "Montrez un exemple",
      desc: "Un pitch que vous aimez : Claude imite très bien un format."
    },
    {
      num: "4",
      title: "Itérez",
      desc: "« Plus court », « moins publicitaire » : la première version n'est qu'un départ."
    }
  ];

  const reflexHtml = reflexes.map(r => `
    <div style="border-top: 1.5px solid var(--border-line); padding-top: 1.25rem; display: flex; flex-direction: column; gap: 0.6rem;">
      <div style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: var(--weight-bold); color: var(--text-primary);">
        ${r.num}
      </div>
      <h3 style="font-family: var(--font-heading); font-size: clamp(1.1rem, 1.4vw, 1.5rem); font-weight: var(--weight-black); letter-spacing: -0.02em;">
        ${r.title}
      </h3>
      <p style="font-size: clamp(0.88rem, 1.05vw, 1.05rem); line-height: 1.45; color: var(--text-primary);">
        ${r.desc}
      </p>
    </div>
  `).join("");

  return `
    <div class="slide slide--stone" id="slide-7" data-slide="7">
      <div>
        <div class="slide-category">LA MÉTHODE</div>
        <h2 class="slide-title">UN BON PROMPT, QUATRE RÉFLEXES</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(1rem, 1.8vw, 2rem); margin-top: auto; margin-bottom: auto; padding-top: 1.5rem;">
        ${reflexHtml}
      </div>

      <div style="height: 1px;"></div>
    </div>
  `;
}
