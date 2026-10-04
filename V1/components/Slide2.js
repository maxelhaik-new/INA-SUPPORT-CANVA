export function renderSlide2() {
  const scheduleData = [
    { time: "14h00", title: "Ouverture et tour de table", deliverable: "" },
    { time: "14h10", title: "Prendre en main Claude", deliverable: "Premiers prompts" },
    { time: "14h35", title: "Sécurité, réglages, connecteurs", deliverable: "Trois comptes réglés et reliés" },
    { time: "14h55", title: "Analyser un vrai dossier", deliverable: "Les cinq points de contrôle" },
    { time: "15h10", title: "Fil rouge 1 et 2 : le brief, le pitch", deliverable: "Synthèse du brief, pitch" },
    { time: "15h30", title: "Fil rouge 3 : le dossier", deliverable: "Fichier Word" },
    { time: "15h50", title: "Pause", deliverable: "" },
    { time: "16h00", title: "Fil rouge 4 : budget et planning", deliverable: "Fichier Excel" },
    { time: "16h20", title: "Fil rouge 5 : les visuels", deliverable: "Affiche et miniature Canva" },
    { time: "16h45", title: "Fil rouge 6 : le deck", deliverable: "Deck Gamma ou PowerPoint" },
    { time: "17h05", title: "Fil rouge 7 : contrôle et envoi", deliverable: "Dossier relu, mail d'envoi" },
    { time: "17h20", title: "Coûts, lundi, clôture", deliverable: "" }
  ];

  const rowsHtml = scheduleData.map(item => `
    <div style="display: grid; grid-template-columns: 80px 1.4fr 1.2fr; align-items: center; padding: 0.38rem 0; border-bottom: 1px solid var(--border-subtle); font-size: clamp(0.75rem, 0.9vw, 0.9rem);">
      <div style="font-family: var(--font-mono); font-weight: var(--weight-bold); color: var(--text-primary);">${item.time}</div>
      <div style="font-weight: var(--weight-semibold); color: var(--text-primary);">${item.title}</div>
      <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.82rem;">${item.deliverable || "—"}</div>
    </div>
  `).join("");

  return `
    <div class="slide slide--white" id="slide-2" data-slide="2">
      <div>
        <div class="slide-category">L'APRÈS-MIDI</div>
        <h2 class="slide-title">LE PROGRAMME</h2>
      </div>

      <div style="margin-top: 0.75rem; flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <div style="display: grid; grid-template-columns: 80px 1.4fr 1.2fr; padding-bottom: 0.4rem; border-bottom: 1.5px solid var(--border-line); font-family: var(--font-mono); font-size: 0.75rem; font-weight: var(--weight-bold); letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted);">
          <div>Horaire</div>
          <div>Séquence</div>
          <div>Livrable</div>
        </div>
        <div style="display: flex; flex-direction: column;">
          ${rowsHtml}
        </div>
      </div>
    </div>
  `;
}
