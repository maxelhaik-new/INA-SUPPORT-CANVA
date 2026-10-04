SLIDES.push({ html: `
  ${UI.top('Livrable 1 · Word')}
  <div class="h2 rise" ${UI.d(1)}>La note de cadrage <em>en 3 messages</em></div>
  <div class="grid g3 grow rise" ${UI.d(2)} >
    <div class="col"><span class="label">1 · Le contexte</span>${UI.prompt('Tu es directeur de la communication chez 2P2L. À partir du brief des Rencontres Créatives 2027, rédige une note de cadrage stratégique.', 1)}</div>
    <div class="col"><span class="label">2 · Le plan</span>${UI.prompt('Structure : contexte et vision, 3 objectifs, publics cibles, concept éditorial, facteurs clés de succès.', 1)}</div>
    <div class="col"><span class="label">3 · Le fichier</span>${UI.prompt('Génère un fichier Word (.docx) avec page de garde, titres hiérarchisés, mise en page aérée.', 1)}</div>
  </div>` });
