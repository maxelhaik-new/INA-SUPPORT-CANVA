SLIDES.push({ html: `
  ${UI.top('Tour de table')}
  <div class="h1 rise" ${UI.d(1)}>Parlons d'abord <em>de votre quotidien</em></div>
  <div class="grid g3 grow rise" ${UI.d(2)} >
    <div class="card">
      <span class="idx">Vos formats</span>
      <h3 class="end">Avec quels formats travaillez-vous le plus souvent ?</h3>
    </div>
    <div class="card sage">
      <span class="idx">Votre temps</span>
      <h3 class="end" style="display:flex;flex-direction:column;gap:16px">
        <span>Quelles sont vos tâches les plus répétitives ?</span>
        <span class="mute" style="font-size:0.9em">Qu'est-ce qui vous prend le plus de temps ?</span>
      </h3>
    </div>
    <div class="card ink">
      <span class="idx" style="color:var(--c-stone)">Vos limites</span>
      <h3 class="end">Quelles sont vos réticences et ce que vous refusez de confier à l'IA ?</h3>
    </div>
  </div>` });
