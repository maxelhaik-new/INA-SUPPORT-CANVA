/**
 * motion.js — Variantes d'animation Framer Motion
 * Style : Premium lent, ease-out soyeux ([0.16, 1, 0.3, 1]), cascade avec délai marqué entre les étapes.
 */

export const slideVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.38, // Délai augmenté entre chaque bloc
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
