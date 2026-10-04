SLIDES.push({ html: `
  ${UI.top('Claude Projet · Word')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Votre modèle Word, <em>rempli par Claude</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Dans le projet : modèle de note 2P2L vierge + brief</span>
        ${UI.prompt('Remplis le modèle de note de cadrage avec le brief des Rencontres Créatives 2027. Garde les titres, les styles et la page de garde du modèle.', 1)}
        ${UI.prompt('Génère le fichier .docx. Signale entre crochets les informations absentes du brief.', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Ce que vous obtenez</span>
      <div class="list end"><div>Un document à votre charte, sans reprise de mise en page.</div><div>Les trous du brief visibles d'un coup d'œil.</div><div>La même structure pour chaque nouvelle note.</div></div>
    </div>
  </div>` });
