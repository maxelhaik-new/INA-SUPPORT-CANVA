SLIDES.push({ html: `
  ${UI.top('Claude Projet · Excel')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Des photos de tickets <em>au tableau rempli</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Dans le projet : modèle Excel de notes de frais vierge</span>
        ${UI.prompt('Voici 6 photos de tickets et factures. Remplis le modèle : date, fournisseur, catégorie, montant HT, TVA, TTC.', 1)}
        ${UI.prompt('Ajoute les totaux par catégorie et signale en rouge les tickets illisibles.', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Avant de valider</span>
      <div class="list end"><div>Utilisez des tickets fictifs ou anonymisés.</div><div>Comparez 2 lignes avec le ticket d'origine.</div><div>Changez un montant et vérifiez que les totaux suivent.</div></div>
    </div>
  </div>` });
