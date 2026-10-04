import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 03 — Avant de commencer : trois questions clés
 * Cascade : Titre -> Carte 1 -> Carte 2 -> Carte 3
 */
const SlideBeforeStart = () => {
  const items = [
    {
      num: '01',
      title: 'Votre support',
      desc: 'Lequel produisez-vous le plus souvent : dossier de projet, deck, visuel, note ?',
    },
    {
      num: '02',
      title: 'Vos outils',
      desc: 'Lesquels utilisez-vous déjà : ChatGPT, Gamma, Canva, autre ?',
    },
    {
      num: '03',
      title: 'Votre temps',
      desc: "Qu'est-ce qui vous prend le plus de temps quand vous montez un dossier ?",
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="TOUR DE TABLE · 10 MIN"
        titleBold="Avant de commencer"
        titleLight="trois questions clés"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1.5rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {items.map((item, idx) => (
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
              gap: '1.75rem',
            }}
          >
            {/* Haut de carte */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--c-muted)',
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--c-muted)',
                }}
              >
                QUESTION {idx + 1}
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--c-ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                borderBottom: '1px solid var(--c-rule)',
                paddingBottom: '1rem',
              }}
            >
              {item.title}
            </h2>

            {/* Corps */}
            <p
              style={{
                fontSize: '1.45rem',
                color: 'var(--c-ink)',
                lineHeight: 1.45,
                fontWeight: 500,
                letterSpacing: '-0.015em',
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

export default SlideBeforeStart;
