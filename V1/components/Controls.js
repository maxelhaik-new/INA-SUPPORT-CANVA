/**
 * Contrôles de présentation, navigation clavier et indicateur de slide
 */
export function initControls(totalSlides, onSlideChange) {
  let currentSlide = 1;

  // Lecture du hash initial si présent
  const hash = window.location.hash.replace('#', '');
  const parsed = parseInt(hash, 10);
  if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
    currentSlide = parsed;
  }

  function setSlide(newIndex) {
    if (newIndex < 1 || newIndex > totalSlides) return;
    currentSlide = newIndex;
    window.location.hash = `#${currentSlide}`;
    updateDisplay();
    if (typeof onSlideChange === 'function') {
      onSlideChange(currentSlide);
    }
  }

  function updateDisplay() {
    const counterEl = document.getElementById('slide-counter-num');
    if (counterEl) {
      counterEl.textContent = String(currentSlide).padStart(2, '0');
    }

    const currentSpan = document.getElementById('current-slide-span');
    if (currentSpan) {
      currentSpan.textContent = currentSlide;
    }

    // Afficher uniquement la slide active
    document.querySelectorAll('.slide').forEach((el, idx) => {
      if (idx + 1 === currentSlide) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  // Écouteurs de clavier
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      setSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      setSlide(currentSlide - 1);
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullScreen();
    }
  });

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen().catch(err => console.error(err));
    }
  }

  // Écouteurs de hashchange
  window.addEventListener('hashchange', () => {
    const newHash = parseInt(window.location.hash.replace('#', ''), 10);
    if (!isNaN(newHash) && newHash !== currentSlide && newHash >= 1 && newHash <= totalSlides) {
      setSlide(newHash);
    }
  });

  // Liaison boutons HTML
  document.getElementById('btn-prev')?.addEventListener('click', () => setSlide(currentSlide - 1));
  document.getElementById('btn-next')?.addEventListener('click', () => setSlide(currentSlide + 1));
  document.getElementById('btn-fullscreen')?.addEventListener('click', toggleFullScreen);

  // Initialisation
  updateDisplay();

  return {
    getCurrentSlide: () => currentSlide,
    setSlide
  };
}
