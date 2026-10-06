SLIDES.push({ html: `
  ${UI.top('Étape 4 · Créer une série d\\'images')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Des images réalistes <em>pour le kit visuel</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Prompts prêts à générer</span>
        ${UI.prompt('Portrait intimiste en clair-obscur d\\'une nageuse assise au bord d\\'un bassin vide à l\\'aube, regard concentré, gouttes d\\'eau sur la peau, photographie 35mm, sans texte.', 1)}
        ${UI.prompt('Plan moyen dans un vestiaire sombre, un athlète assis laçant ses chaussures, rais de lumière naturelle latérale, style documentaire cinématographique, sans texte.', 1)}
        ${UI.prompt('Même scène, avec une lumière plus chaude et un cadrage plus serré sur les mains. Garde le même style photographique.', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Conseils pour itérer</span>
      <div class="list end"><div>Décrivez uniquement ce qui change.</div><div>Gardez la même description de style pour chaque image.</div><div>Générez-en plusieurs, gardez la meilleure.</div></div>
    </div>
  </div>` });
