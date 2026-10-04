import { renderSlide1 } from './components/Slide1.js';
import { renderSlide2 } from './components/Slide2.js';
import { renderSlide3 } from './components/Slide3.js';
import { renderSlide4 } from './components/Slide4.js';
import { renderSlide5 } from './components/Slide5.js';
import { renderSlide6 } from './components/Slide6.js';
import { renderSlide7 } from './components/Slide7.js';
import { renderSlide8 } from './components/Slide8.js';
import { renderSlide9 } from './components/Slide9.js';
import { renderSlide10 } from './components/Slide10.js';
import { initControls } from './components/Controls.js';

function bootstrapPresentation() {
  const container = document.getElementById('slides-container');
  if (!container) return;

  // Assemblage modulaire des composants de slides
  const slidesHtml = [
    renderSlide1(),
    renderSlide2(),
    renderSlide3(),
    renderSlide4(),
    renderSlide5(),
    renderSlide6(),
    renderSlide7(),
    renderSlide8(),
    renderSlide9(),
    renderSlide10()
  ].join('\n');

  container.innerHTML = slidesHtml;

  // Initialisation des contrôles et du clavier
  initControls(10);
}

document.addEventListener('DOMContentLoaded', bootstrapPresentation);
