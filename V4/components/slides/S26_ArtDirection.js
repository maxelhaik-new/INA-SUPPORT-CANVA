SLIDES.push({ cls: 'dark', html: `
  ${UI.top('Direction artistique')}
  <div class="row grow" style="gap:48px">
    <div class="col" style="flex:.9;justify-content:space-between">
      <div>
        <div class="h2 rise" ${UI.d(1)}>Décrire le style <em>avant de générer</em></div>
        <p class="lead mute rise" ${UI.d(2)} style="margin-top:16px">Définir précisément l'ambiance et les critères visuels pour guider la génération d'images.</p>
      </div>
    </div>
    <div class="col rise" ${UI.d(2)} style="flex:1.1;justify-content:center;gap:16px">
      <div class="col" style="gap:8px">
        <span class="label">1 · Poser l'ambiance</span>
        ${UI.prompt('Tu es directeur artistique senior chez 2P2L. Pour LA TEAM, décris l\\'ambiance visuelle : quatre couleurs dominantes, type de lumière, style photographique, trois mots d\\'ordre.', 1)}
      </div>
      <div class="col" style="gap:8px">
        <span class="label">2 · Rédiger les descriptions</span>
        ${UI.prompt('À partir de cette ambiance vestiaire/clair-obscur, rédige trois descriptions d\\'images réalistes en français, sans aucun texte dans l\\'image.', 1)}
      </div>
    </div>
  </div>` });
