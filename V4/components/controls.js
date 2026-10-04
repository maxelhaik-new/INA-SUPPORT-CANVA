// Navigation clavier/clic hybride :
// - Flèches Gauche / Droite : Transition complète de slide avec animation cinématique automatique
// - Flèches Haut / Bas (et Espace) : Déroulement pas-à-pas des blocs (et slide suivante aux extrémités)
// - Clic sur prompt : Copie dans le presse-papier

window.initControls = function () {
  const stage = document.getElementById('stage');
  const slides = [...stage.children];
  const bar = document.getElementById('progress');
  let i = Math.min(+location.hash.slice(1) - 1 || 0, slides.length - 1);

  const go = (n, mode = 'auto', targetStep = 0) => {
    i = Math.max(0, Math.min(slides.length - 1, n));

    slides.forEach((s, k) => {
      const active = k === i;
      if (active) {
        if (!s.classList.contains('active')) {
          s.classList.remove('active', 'is-auto', 'is-stepped');
          void s.offsetWidth; // Forcer reflow propre
        }
        s.classList.add('active');

        const maxSteps = window.MOTION?.getMaxStep(i) || 0;
        if (mode === 'auto' || maxSteps === 0) {
          window.MOTION?.playAuto(i);
        } else {
          const step = targetStep === 'last' ? maxSteps : targetStep;
          window.MOTION?.setStep(i, step, false);
        }
      } else {
        s.classList.remove('active', 'is-auto', 'is-stepped');
      }
    });

    bar.style.transform = `scaleX(${(i + 1) / slides.length})`;
    history.replaceState(null, '', '#' + (i + 1));
  };

  const fit = () => {
    const s = Math.min(innerWidth / 1280, innerHeight / 720) * 0.96;
    stage.style.transform = `translate(-50%,-50%) scale(${s})`;
  };
  addEventListener('resize', fit);
  fit();

  addEventListener('keydown', (e) => {
    // 1. Navigation complète de slide en mode automatique
    if (e.key === 'ArrowRight') {
      go(i + 1, 'auto');
      return;
    }
    if (e.key === 'ArrowLeft') {
      go(i - 1, 'auto');
      return;
    }

    // 2. Navigation pas-à-pas des blocs (et slide suivante aux extrémités)
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      const hasNext = window.MOTION?.stepForward(i);
      if (!hasNext) {
        if (i < slides.length - 1) {
          const nextMax = window.MOTION?.getMaxStep(i + 1) || 0;
          go(i + 1, nextMax > 0 ? 'stepped' : 'auto', 0);
        }
      }
      return;
    }

    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      const hasPrev = window.MOTION?.stepBackward(i);
      if (!hasPrev) {
        if (i > 0) {
          const prevMax = window.MOTION?.getMaxStep(i - 1) || 0;
          go(i - 1, prevMax > 0 ? 'stepped' : 'auto', 'last');
        }
      }
      return;
    }

    if (e.key === 'f') {
      document.documentElement.requestFullscreen?.();
    }
  });

  stage.addEventListener('click', (e) => {
    const p = e.target.closest('[data-copy]');
    if (p) {
      navigator.clipboard?.writeText(p.textContent.trim());
      p.classList.add('ok');
      setTimeout(() => p.classList.remove('ok'), 1500);
    }
  });

  // Démarrage initial sur la slide courante
  go(i, 'auto');
};
