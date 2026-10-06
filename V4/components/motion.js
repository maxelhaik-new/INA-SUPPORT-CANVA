// Moteur d'orchestration cinématique et stepper hybride (2026)
// RÈGLE ABSOLUE :
// - Seuls les blocs réels de "contenu" (cartes, points de liste, prompts, chiffres clés) sont dans le stepper.
// - Les métas (.top), titres, sous-titres (.lead), labels et légendes sont TOUJOURS visibles d'emblée.
// - Zéro pas invisible, zéro texte intérieur masqué dans les cartes.

window.MOTION = {
  slidesData: [],

  init() {
    const stage = document.getElementById('stage');
    if (!stage) return;
    const slides = [...stage.children];

    this.slidesData = slides.map((slide, slideIndex) => {
      // 1. Purge défensive des anciens animation-delay
      slide.querySelectorAll('[style*="animation-delay"]').forEach((el) => {
        el.style.animationDelay = '';
      });

      // 2. Extraction stricte des seuls blocs de contenu
      const steps = this.extractContentSteps(slide, slideIndex);

      // Poser la classe .step-item sur chaque élément de contenu séquencé
      steps.forEach((stepGroup) => {
        stepGroup.forEach((el) => {
          el.classList.add('step-item');
          el.classList.remove('rise');
        });
      });

      // 3. Préparer les timings pour le mode automatique en cascade
      let t = 0.25;
      steps.forEach((stepGroup) => {
        stepGroup.forEach((el) => {
          el.style.setProperty('--delay', `${t.toFixed(2)}s`);
        });
        t += 0.16;
      });

      return {
        el: slide,
        steps: steps,
        currentStep: 0,
        isAuto: true
      };
    });
  },

  // Extraction précise et déterministe des unités réelles de contenu par slide
  // Extraction précise et déterministe des unités réelles de contenu par slide (basée sur le DOM, résiliente aux ajouts)
  extractContentSteps(slide, slideIndex) {
    const steps = [];

    // 1. Chiffres clés en colonnes (.figs > div) — ex: S02, S24
    const figs = slide.querySelectorAll('.figs > div');
    if (figs.length > 0) {
      figs.forEach((d) => steps.push([d]));
      return steps;
    }

    // 2. Barres comparatives (.bars .bar) — ex: S18 Gamma
    const bars = slide.querySelectorAll('.bars .bar');
    if (bars.length > 0) {
      bars.forEach((b) => steps.push([b]));
      return steps;
    }

    // 3. Itérations interactives (.iter) — ex: S13
    const iter = slide.querySelector('.iter');
    if (iter) {
      const items = [...iter.children];
      for (let k = 0; k < items.length; k += 2) {
        steps.push([items[k], items[k + 1]].filter(Boolean));
      }
      return steps;
    }

    // 4. Flux à étapes numérotées (.step) + prompts — ex: S19 GammaFlow
    const stepItems = slide.querySelectorAll('.step');
    if (stepItems.length > 0) {
      stepItems.forEach((s) => steps.push([s]));
      slide.querySelectorAll('.grid.g2 > .prompt').forEach((p) => steps.push([p]));
      return steps;
    }

    // 5. Cas pratique avec prompt copiable et statistiques en bande — ex: S14 CaseStudy
    const casePrompt = slide.querySelector('.prompt');
    const stats = slide.querySelectorAll('.stats > div');
    if (slide.querySelector('.top')?.textContent.includes('Cas pratique') && casePrompt) {
      steps.push([casePrompt]);
      stats.forEach((d) => steps.push([d]));
      return steps;
    }
    if (stats.length > 0) {
      stats.forEach((d) => steps.push([d]));
      return steps;
    }

    // 6. Tour de table (S07) : 3 cartes avec sous-listes séquencées
    if (slide.querySelector('.top')?.textContent.includes('Tour de table')) {
      const cards = slide.querySelectorAll('.grid > .card');
      if (cards.length >= 3) {
        steps.push([cards[0]]);
        cards[0].querySelectorAll('.list > div').forEach((d) => steps.push([d]));
        steps.push([cards[1]]);
        cards[1].querySelectorAll('.list > div').forEach((d) => steps.push([d]));
        steps.push([cards[2]]);
        return steps;
      }
    }

    // 7. Posture / Qui suis je ? (S06a, S06c) : points de la liste
    if (slide.querySelector('.top')?.textContent.includes('Qui suis je') || slide.querySelector('.top')?.textContent.includes('Le formateur') || slide.querySelector('.top')?.textContent.includes('Pratique argentique')) {
      slide.querySelectorAll('.list > div').forEach((d) => steps.push([d]));
      return steps;
    }

    // 10. Clôture / Bilan (S25) : les points de bilan
    if (slide.querySelector('.big')?.textContent.includes('Avant') || slide.querySelector('.pill')?.textContent.includes('Bilan')) {
      slide.querySelectorAll('.list > div').forEach((d) => steps.push([d]));
      return steps;
    }

    // 11. Prompts dans des colonnes sans carte (ex: S23, S24)
    if (slide.querySelectorAll('.grid > .col > .prompt').length > 0) {
      slide.querySelectorAll('.grid > .col').forEach((c) => steps.push([c]));
      return steps;
    }

    // 12. Prompts avec carte Ink de contrôle (ex: S17, S17b, S17c)
    const colPrompts = slide.querySelectorAll('.col > .prompt');
    const inkCard = slide.querySelector('.card.ink');
    if (colPrompts.length > 0 && inkCard && !slide.querySelector('.grid.g3')) {
      colPrompts.forEach((p) => steps.push([p]));
      steps.push([inkCard]);
      return steps;
    }

    // 13. Direction Artistique (S20) : les prompts de cadrage DA
    if (slide.querySelector('.top')?.textContent.includes('Direction artistique')) {
      slide.querySelectorAll('.col > .prompt').forEach((p) => steps.push([p]));
      return steps;
    }

    // 13b. Fiche outil : les lignes de la fiche, une à une
    const ficheRows = slide.querySelectorAll('.fiche-row');
    if (ficheRows.length > 0) {
      ficheRows.forEach((r) => steps.push([r]));
      return steps;
    }

    // 14. Règle générale pour toutes les slides composées de cartes (S03, S04, S08, S09, S11, S12, S17a, S22, S24b)
    const cards = slide.querySelectorAll('.grid > .card, .row.grow > .card, .col > .card');
    if (cards.length > 0) {
      cards.forEach((c) => steps.push([c]));
      return steps;
    }

    return steps;
  },

  playAuto(slideIndex) {
    const data = this.slidesData[slideIndex];
    if (!data) return;
    const slide = data.el;

    slide.classList.remove('is-stepped');
    slide.classList.add('is-auto');
    data.isAuto = true;
    data.currentStep = data.steps.length;

    // En mode auto, tous les steps sont révélés
    data.steps.forEach((stepElements) => {
      stepElements.forEach((el) => {
        el.classList.add('is-revealed');
        el.classList.remove('just-revealed');
      });
    });
  },

  setStep(slideIndex, stepIndex, animate = true) {
    const data = this.slidesData[slideIndex];
    if (!data) return;
    const slide = data.el;

    slide.classList.remove('is-auto');
    slide.classList.add('is-stepped');
    data.isAuto = false;

    const target = Math.max(0, Math.min(data.steps.length, stepIndex));
    data.currentStep = target;

    data.steps.forEach((stepElements, k) => {
      const shouldReveal = k < target;
      stepElements.forEach((el) => {
        if (shouldReveal) {
          const isNewlyEntered = animate && k === target - 1;
          el.classList.add('is-revealed');
          if (isNewlyEntered) {
            el.classList.add('just-revealed');
            setTimeout(() => el.classList.remove('just-revealed'), 1350);
          } else if (!animate) {
            el.classList.remove('just-revealed');
          }
        } else {
          el.classList.remove('is-revealed', 'just-revealed');
        }
      });
    });
  },

  stepForward(slideIndex) {
    const data = this.slidesData[slideIndex];
    if (!data) return false;

    // Si on était en auto et qu'on utilise Bas :
    // Si la slide était au bout, on passe à la suivante
    if (data.isAuto) {
      if (data.currentStep >= data.steps.length) {
        return false;
      }
    }

    if (data.currentStep < data.steps.length) {
      this.setStep(slideIndex, data.currentStep + 1, true);
      return true;
    }
    return false; // Fin de slide atteinte
  },

  stepBackward(slideIndex) {
    const data = this.slidesData[slideIndex];
    if (!data) return false;

    if (data.isAuto) {
      data.currentStep = data.steps.length;
    }

    if (data.currentStep > 0) {
      this.setStep(slideIndex, data.currentStep - 1, false);
      return true;
    }
    return false; // Début de slide atteint
  },

  getMaxStep(slideIndex) {
    const data = this.slidesData[slideIndex];
    return data ? data.steps.length : 0;
  },

  getStep(slideIndex) {
    const data = this.slidesData[slideIndex];
    return data ? data.currentStep : 0;
  }
};

window.initMotion = function () {
  window.MOTION.init();
};
