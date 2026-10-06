SLIDES.push({ html: `
  ${UI.top('Longueur des prompts')}
  <div class="row grow" style="gap:56px;align-items:center">
    <div style="flex:1.2">
      <div class="h1 rise" ${UI.d(1)}>Les prompts très longs <em>fonctionnent mal</em></div>
      <p class="lead rise" ${UI.d(2)} >Trop de consignes rigidifient le modèle. <span class="mute">Ses réponses deviennent convenues ou s'éloignent du sujet.</span></p>
    </div>
    <div class="col rise" ${UI.d(3)} style="flex:.8">
      <div class="card line"><span class="label">Avant</span><h3>Trois pages de consignes détaillées</h3></div>
      <div class="card ink"><span class="label" style="color:var(--c-stone)">Aujourd'hui</span><h3>Un prompt court avec un contexte métier précis</h3></div>
    </div>
  </div>` });
