import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 03 — Parcours du formateur
 * Cascade : Titre -> Carte 1 -> Carte 2 -> Carte 3
 */
const Slide03_Trainer = () => {
  const points = [
    {
      num: '01',
      title: "L'apprentissage par l'itération",
      desc: "Aucune formule magique : des centaines d'heures d'essais, d'erreurs et de prompts ratés pour identifier ce qui fonctionne réellement sur le terrain.",
    },
    {
      num: '02',
      title: "L'attachement viscéral à la création humaine",
      desc: "Pratique de la photographie argentique et respect absolu de la patte d'auteur : l'IA n'a ni sensibilité, ni intention artistique, ni éthique propre.",
    },
    {
      num: '03',
      title: "L'outil à sa juste place",
      desc: "L'algorithme n'est pas un remplaçant mais un amplificateur d'idées, un assistant pour les tâches répétitives et un sparring partner pour stimuler la créativité.",
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="POSTURE & RETOUR D'EXPÉRIENCE"
        meta="INA CAMPUS"
        titleBold="Un regard d'artisan,"
        titleLight="pas un discours d'ingénieur"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {points.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            style={{
              backgroundColor: '#FAFAF8',
              border: '1px solid var(--c-rule)',
              borderRadius: '16px',
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--c-muted)',
                }}
              >
                {item.num}
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.7rem',
                fontWeight: 700,
                color: 'var(--c-ink)',
                letterSpacing: '-0.015em',
                lineHeight: 1.25,
                borderBottom: '1px solid var(--c-rule)',
                paddingBottom: '0.875rem',
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                fontSize: '1.4rem',
                color: 'var(--c-ink)',
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};

export default Slide03_Trainer;
