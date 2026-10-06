SLIDES.push({ html: `
  ${UI.top('Relecture des visuels')}
  <div class="h1 rise" ${UI.d(1)}>4 points à vérifier <em>sur chaque image</em></div>
  <div class="grid g4 grow rise" ${UI.d(2)} >
    
    <div class="card" style="position:relative; overflow:hidden; border:none; padding:0; background:#000;">
      <img src="assets/check_texte.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 40%, transparent 70%); z-index:1;"></div>
      <div style="position:relative; z-index:2; display:flex; flex-direction:column; justify-content:flex-end; height:100%; padding:28px 24px;">
        <span class="idx" style="color:rgba(255,255,255,0.6); margin-bottom:8px;">01</span>
        <h3 style="color:#fff; margin:0 0 12px 0;">Le texte</h3>
        <p style="color:rgba(255,255,255,0.85); margin:0; line-height:1.4;">L'IA écrit mal dans les images. Générez sans texte, ajoutez la typographie vous-même.</p>
      </div>
    </div>

    <div class="card" style="position:relative; overflow:hidden; border:none; padding:0; background:#000;">
      <img src="assets/check_mains.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 40%, transparent 70%); z-index:1;"></div>
      <div style="position:relative; z-index:2; display:flex; flex-direction:column; justify-content:flex-end; height:100%; padding:28px 24px;">
        <span class="idx" style="color:rgba(255,255,255,0.6); margin-bottom:8px;">02</span>
        <h3 style="color:#fff; margin:0 0 12px 0;">Mains et visages</h3>
        <p style="color:rgba(255,255,255,0.85); margin:0; line-height:1.4;">Vérifiez attentivement les doigts, les regards et les proportions.</p>
      </div>
    </div>

    <div class="card" style="position:relative; overflow:hidden; border:none; padding:0; background:#000;">
      <img src="assets/check_logos.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 40%, transparent 70%); z-index:1;"></div>
      <div style="position:relative; z-index:2; display:flex; flex-direction:column; justify-content:flex-end; height:100%; padding:28px 24px;">
        <span class="idx" style="color:rgba(255,255,255,0.6); margin-bottom:8px;">03</span>
        <h3 style="color:#fff; margin:0 0 12px 0;">Marques et logos</h3>
        <p style="color:rgba(255,255,255,0.85); margin:0; line-height:1.4;">Inspectez les arrière-plans pour repérer d'éventuels logos involontaires.</p>
      </div>
    </div>

    <div class="card" style="position:relative; overflow:hidden; border:none; padding:0; background:#000;">
      <img src="assets/check_coherence.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 40%, transparent 70%); z-index:1;"></div>
      <div style="position:relative; z-index:2; display:flex; flex-direction:column; justify-content:flex-end; height:100%; padding:28px 24px;">
        <span class="idx" style="color:rgba(255,255,255,0.6); margin-bottom:8px;">04</span>
        <h3 style="color:#fff; margin:0 0 12px 0;">La cohérence</h3>
        <p style="color:rgba(255,255,255,0.85); margin:0; line-height:1.4;">Même lumière, même grain sur toute la série : réutilisez la même description de style.</p>
      </div>
    </div>

  </div>` });
