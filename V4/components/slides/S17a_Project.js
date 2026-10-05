SLIDES.push({ html: `
  ${UI.top('Claude Projet')}
  <div class="h2 rise" ${UI.d(1)}>Ne plus répéter <em>le même contexte</em></div>
  <div class="grid g3 grow rise" ${UI.d(2)}>
    <div class="card"><span class="label">1 · Créer le projet</span><div class="list end"><div>Menu Projets, puis Nouveau projet.</div><div>Un projet par client ou par événement.</div></div></div>
    <div class="card"><span class="label">2 · Déposer les fichiers</span><div class="list end"><div>Le brief, la charte, un modèle Word vierge.</div><div>Claude les relit à chaque conversation.</div></div></div>
    <div class="card"><span class="label">3 · Écrire les consignes</span>${UI.prompt('Tu travailles pour 2P2L. Respecte toujours la charte et les modèles fournis. Ton sobre, phrases courtes.', 1)}</div>
  </div>` });
