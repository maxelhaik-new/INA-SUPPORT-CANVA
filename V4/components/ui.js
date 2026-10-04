// Helpers UI partagés — chaque slide s'enregistre dans window.SLIDES (compatible file://)
window.SLIDES = [];
window.UI = {
  top: (label, fill) => `<div class="top rise"><div class="arrow">↘</div><div class="pill ${fill ? 'fill' : ''}">${label}</div><div class="num">ina campus · {{n}}</div></div>`,
  prompt: (text, sm) => `<div class="prompt ${sm ? 'sm' : ''}" data-copy>${text}</div>`,
  ph: (label, style = '') => `<div class="ph" style="${style}"><span>▢ ${label}</span></div>`,
  d: () => '',
  section: (num, title, sub) => ({
    cls: 'dark slide-section',
    html: `
      <div class="ring" style="width:620px;height:620px;right:-160px;bottom:-260px"></div>
      <div class="ring" style="width:380px;height:380px;right:-40px;bottom:-140px"></div>
      <div class="top"><div class="pill fill">Partie ${num}</div><div class="num">ina campus · {{n}}</div></div>
      <div class="giant" style="top:40px;right:64px">${num}</div>
      <div class="end">
        <div class="big" style="max-width:780px">${title}</div>
        <p class="lead mute" style="margin-top:28px;max-width:560px;font-size:22px">${sub}</p>
      </div>`
  })
};
