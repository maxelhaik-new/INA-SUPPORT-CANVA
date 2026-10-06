SLIDES.push({ html: `
  ${UI.top('Présenter')}
  <div class="h2 rise" ${UI.d(1)}>De la note <em>à la présentation</em></div>
  <p class="lead mute rise" ${UI.d(1.5)} style="margin-bottom:24px">Nous utilisons la fonctionnalité Claude Slide pour concevoir et affiner le support en direct.</p>
  <div class="grid g2 grow rise" ${UI.d(2)} >
    <div class="col"><span class="label">1 · Premier prompt</span>${UI.prompt('À partir de la note de cadrage LA TEAM, génère avec Claude Slide un pitch de 8 slides pour convaincre un diffuseur et la marque. Structure sobre et lisible, ton audacieux et contemporain, 3 points clés par slide.')}</div>
    <div class="col"><span class="label">2 · Itération</span>${UI.prompt('Reformule la slide 3 pour valoriser concrètement la mécanique narrative, allège le texte et ajoute des notes d\\'orateur.')}</div>
  </div>
  <p class="body rise" ${UI.d(3)} style="margin-top:18px">Dans PowerPoint, Copilot sait aussi créer une présentation depuis un document Word. <span class="mute">À essayer à votre poste.</span></p>` });
