SLIDES.push({ html: `
  ${UI.top('Livrable 2 · Midjourney')}
  <div class="row grow" style="gap:40px">
    <div class="col" style="flex:1.25">
      <div class="h2 rise" ${UI.d(1)}>Des images réalistes <em>pour toute la série</em></div>
      <div class="col rise" ${UI.d(2)}>
        <span class="label">Prompts en anglais, issus de la direction artistique</span>
        ${UI.prompt('Wide shot of a contemporary festival venue in Paris at dusk, creative professionals talking near large projection screens, natural light, 35mm photography, realistic, no text --ar 4:5 --style raw', 1)}
        ${UI.prompt('Close-up of hands on an editing desk with a tablet showing a video timeline, soft window light, shallow depth of field, documentary photography, no text --ar 4:5 --style raw', 1)}
      </div>
    </div>
    <div class="card ink rise" ${UI.d(3)} style="flex:.75">
      <span class="label" style="color:var(--c-stone)">Les réglages utiles</span>
      <div class="list end"><div>--ar 4:5 pour le carrousel, 16:9 pour Gamma.</div><div>--style raw pour un rendu photo plus naturel.</div><div>--sref avec votre meilleure image pour garder le même style.</div><div>Vary (Subtle) pour corriger, puis Upscale avant export.</div></div>
    </div>
  </div>` });
