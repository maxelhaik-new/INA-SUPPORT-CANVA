SLIDES.push({ html: `
  ${UI.top('Qui suis je ?')}
  <div class="row grow" style="gap:48px;align-items:stretch">
    <div class="col" style="flex:0.95;justify-content:space-between">
      <div class="h2 rise" ${UI.d(1)}>Mon rapport <em>à l'IA</em></div>
      <div class="list rise end" ${UI.d(2)}>
        <div>J'apprends surtout en essayant et en corrigeant mes erreurs.</div>
        <div>Je pratique la photo argentique et je tiens au travail d'auteur.</div>
        <div>J'utilise l'IA comme assistant de production et pour relancer mes idées.</div>
      </div>
    </div>
    <div class="filmstrip rise" ${UI.d(2)} style="flex:1.25">
      <div class="filmstrip-sprockets"></div>
      <div class="filmstrip-frames">
        <div class="filmstrip-frame"><img src="assets/photos/photo-01.png" alt=""></div>
        <div class="filmstrip-frame"><img src="assets/photos/photo-06.png" alt=""></div>
        <div class="filmstrip-frame"><img src="assets/photos/photo-07.png" alt=""></div>
      </div>
      <div class="filmstrip-sprockets"></div>
    </div>
  </div>` });
