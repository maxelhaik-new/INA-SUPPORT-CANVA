SLIDES.push({ cls: 'dark', html: `
  ${UI.top('Midjourney · Direction artistique')}
  <div class="row grow" style="gap:48px">
    <div class="col" style="flex:.9">
      <div class="h2 rise" ${UI.d(1)}>Définir le style <em>avant de générer</em></div>
      <p class="lead mute rise" ${UI.d(2)}>Claude fixe la palette et l'ambiance. Les mêmes choix servent ensuite dans Midjourney, Gamma et Canva.</p>
      <div class="row rise end" ${UI.d(3)} style="gap:12px">
        <div class="circle c-stone" style="width:76px;height:76px;font-size:var(--text-num);font-family:var(--font-mono);font-weight:600">#B4B8B1</div>
        <div class="circle c-sage" style="width:76px;height:76px;font-size:var(--text-num);font-family:var(--font-mono);font-weight:600">#DCE5DE</div>
        <div class="circle c-white" style="width:76px;height:76px;font-size:var(--text-num);font-family:var(--font-mono);font-weight:600">#FFFFFF</div>
        <div class="circle" style="width:76px;height:76px;font-size:var(--text-num);font-family:var(--font-mono);font-weight:600;border:1px solid var(--c-line-dark)">#161414</div>
      </div>
    </div>
    <div class="col rise" ${UI.d(2)} style="flex:1.1;justify-content:center">
      ${UI.prompt('Tu es directeur artistique senior chez 2P2L. Définis la DA du kit des Rencontres Créatives 2027.', 1)}
      ${UI.prompt('Une palette de 4 couleurs avec codes hexadécimaux, et un duo de typographies natives Canva.', 1)}
      ${UI.prompt('Trois mots d\'ordre graphiques, puis trois prompts Midjourney en anglais pour des photos réalistes sans texte.', 1)}
    </div>
  </div>` });
