SLIDES.push({ html: `
  ${UI.top('Étape 1 · Comprendre le brief')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Lire le brief <em>avec Copilot</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Prompts à tester</span>
        ${UI.prompt('Résume ce mail en 5 lignes. Liste les livrables demandés, les délais et les informations manquantes.', 1)}
        ${UI.prompt('Rédige une réponse courte à l\'expéditeur pour confirmer ce que nous allons livrer et poser les deux questions utiles.', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Points de contrôle</span>
      <div class="list end"><div>Les 4 livrables sont-ils tous listés ?</div><div>Le résumé ajoute-t-il une information absente du mail ?</div><div>Copilot ne répond pas ? Relancez ou reformulez.</div></div>
    </div>
  </div>` });
