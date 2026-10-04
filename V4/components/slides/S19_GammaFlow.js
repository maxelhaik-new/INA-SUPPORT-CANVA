SLIDES.push({ html: `
  ${UI.top('Livrable 3 · PowerPoint')}
  <div class="h2 rise" ${UI.d(1)}>De Claude à Gamma <em>en 4 étapes</em></div>
  <div class="grid g4 rise" ${UI.d(2)} >
    <div class="step"><span class="idx">1</span><p>Claude rédige le plan balisé.</p></div>
    <div class="step"><span class="idx">2</span><p>Copiez le texte.</p></div>
    <div class="step"><span class="idx">3</span><p>Dans Gamma, choisissez Coller du texte, format 16:9.</p></div>
    <div class="step"><span class="idx">4</span><p>Appliquez la charte, puis exportez en .pptx.</p></div>
  </div>
  <div class="grid g2 grow rise" ${UI.d(3)} style="margin-top:28px">
    ${UI.prompt('À partir de la note de cadrage, prépare le plan d\'un pitch de 8 slides pour partenaires et mécènes.', 1)}
    ${UI.prompt('Markdown pur : un titre # par slide, un sous-titre d\'une ligne, 3 puces de 15 mots maximum. Aucun commentaire.', 1)}
  </div>` });
