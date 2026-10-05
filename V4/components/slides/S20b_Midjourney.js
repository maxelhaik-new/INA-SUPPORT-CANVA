SLIDES.push({ html: `
  ${UI.top('Livrable 2 · Midjourney')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Des images réalistes <em>pour toute la série</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Prompts en français, issus de la direction artistique</span>
        ${UI.prompt('Plan large d\'un lieu d\'événement contemporain à Paris au crépuscule, professionnels de la création échangeant près de grands écrans de projection, lumière naturelle, photographie 35mm, réaliste, sans texte', 1)}
        ${UI.prompt('Gros plan sur des mains à une table de montage avec une tablette affichant une timeline vidéo, lumière douce venant d\'une fenêtre, faible profondeur de champ, photo documentaire, sans texte', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Les réglages utiles</span>
      <div class="list end"><div>Format d'image : 4:5 pour le carrousel, 16:9 pour Gamma.</div><div>Style brut : pour un rendu photo plus réaliste et naturel.</div><div>Image de référence : pour conserver exactement la même ambiance.</div><div>Bouton Varier léger pour ajuster, puis Agrandir avant l'export.</div></div>
    </div>
  </div>` });
