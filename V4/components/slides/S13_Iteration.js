SLIDES.push({ html: `
  ${UI.top('Améliorer la réponse')}
  <div class="h1 rise" ${UI.d(1)}>Le premier résultat <em>se retravaille</em></div>
  <p class="lead rise" ${UI.d(2)}>Corrigez un point à la fois, par messages courts.</p>
  <div class="iter grow rise" ${UI.d(3)}>
    <span class="label">Longueur</span>${UI.prompt('Raccourcis le texte de moitié en conservant les 3 arguments clés.')}
    <span class="label">Ton</span>${UI.prompt('Le ton est trop corporate : adopte un style plus éditorial, proche d\'un magazine culturel.')}
    <span class="label">Angle</span>${UI.prompt('Reformule le paragraphe 2 pour mettre en avant l\'impact auprès des 18-25 ans.')}
  </div>` });
