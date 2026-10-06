SLIDES.push({ html: `
  ${UI.top('Livrable 2 · Excel')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Le rétroplanning <em>et le budget</em></div>
      <div class="col rise" ${UI.d(2)} >
        ${UI.prompt('Génère un classeur Excel. Onglet 1 : rétroplanning de communication sur 6 mois.', 1)}
        ${UI.prompt('Onglet 2 : budget ventilé par postes, avec formules automatiques par ligne et total général.', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Avant de valider</span>
      <div class="list end"><div>Téléchargez le fichier tout de suite.</div><div>Dans Excel, changez un tarif et vérifiez que les totaux suivent.</div><div>Dans Word, relisez la pagination et repérez les répétitions.</div></div>
    </div>
  </div>` });
