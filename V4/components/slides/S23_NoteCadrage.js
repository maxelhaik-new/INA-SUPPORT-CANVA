SLIDES.push({ html: `
  ${UI.top('Rédiger la note')}
  <div class="h2 rise" ${UI.d(1)}>La note de cadrage <em>en deux temps</em></div>
  <p class="lead mute rise" ${UI.d(1.5)} style="margin-bottom:28px">Poser le cadre complet dès le premier message, puis affiner le fond avant d'exporter.</p>
  <div class="grid g2 grow rise" ${UI.d(2)} >
    <div class="col">
      <span class="label">1 · Premier prompt</span>
      ${UI.prompt('Tu es chargé de développement chez 2P2L. À partir du brief LA TEAM, rédige la note d\\'intention éditoriale de la série documentaire pour les diffuseurs et la marque. Structure : intention narrative, portraits des athlètes, rôle du mentor, mécanique narrative en 9 étapes, dispositif de tournage.')}
    </div>
    <div class="col">
      <span class="label">2 · Itération</span>
      ${UI.prompt('Approfondis le paragraphe sur la mécanique narrative, puis génère le fichier Word (.docx) avec page de garde et mise en page aérée.')}
    </div>
  </div>` });
