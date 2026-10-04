// Assemblage : injecte les slides enregistrées par chaque composant
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('stage').innerHTML = SLIDES.map((s, k) =>
    `<section class="slide ${s.cls || ''}">${s.html.replace('{{n}}', String(k + 1).padStart(2, '0'))}</section>`).join('');
  initMotion();
  initControls();
});
