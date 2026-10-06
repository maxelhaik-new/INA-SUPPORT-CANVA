SLIDES.push({ html: `
  ${UI.top('Confidentialité')}
  <div class="h1 rise" ${UI.d(1)}>Où vont <em>vos données ?</em></div>
  
  <div class="row grow rise" ${UI.d(2)} style="gap:40px; margin-top:24px">
    
    <div class="col" style="flex:1">
       <h3 style="font-size:16px; font-weight:500; margin-bottom:12px; color:var(--c-muted)">L'environnement ouvert</h3>
       <div class="card line grow">
         <div class="label">Claude · Compte gratuit</div>
         <h3 class="end" style="font-size:24px; line-height:1.3; font-weight:400; margin-top:16px;">Vos échanges et documents peuvent servir à <b>entraîner les modèles</b>.</h3>
       </div>
    </div>

    <div class="col" style="flex:1.2; gap:12px">
       <h3 style="font-size:16px; font-weight:500; margin-bottom:0px; color:var(--c-muted)">Les environnements professionnels</h3>
       
       <div class="card sage grow">
         <div class="label">Copilot · Compte Pro</div>
         <h3 class="end" style="font-size:20px; line-height:1.3; font-weight:400; margin-top:8px;">Vos échanges restent dans l'espace <b>Microsoft</b> de l'organisation.</h3>
       </div>
       
       <div class="card ink grow">
         <div class="label" style="color:var(--c-stone)">Claude · Offre Team</div>
         <h3 class="end" style="font-size:20px; line-height:1.3; font-weight:400; margin-top:8px;">Le contrat <b>interdit toute réutilisation</b> de vos briefs, de vos chiffres et de vos idées.</h3>
       </div>
    </div>
    
  </div>
  <p class="body rise" ${UI.d(3)} style="margin-top:24px">La règle de la séance : <span class="mute">rien de strictement confidentiel dans Claude, même avec un compte Team.</span></p>` });
