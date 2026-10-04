import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 04 — Tour de table
 * Cascade : Titre -> Carte 1 -> Carte 2 -> Carte 3
 */
const Slide04_RoundTable = () => {
  const questions = [
    {
      num: '01',
      title: 'Vos missions récurrentes',
      desc: 'Quels supports produisez-vous le plus souvent (dossiers, campagnes, visuels, présentations, kits de presse) ?',
    },
    {
      num: '02',
      title: 'Vos frictions actuelles',
      desc: 'Quelle étape du processus vous prend un temps disproportionné ou bride votre créativité ?',
    },
    {
      num: '03',
      title: 'Vos lignes rouges',
      desc: 'Qu\'est-ce que vous refusez formellement de confier ou de déléguer à une intelligence artificielle ?',
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="ÉCHANGE OUVERT · 10 MIN"
        meta="INA CAMPUS"
        titleBold="Vos réalités,"
        titleLight="vos blocages et vos lignes rouges"
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
        {questions.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            style={{
              backgroundColor: '#FAFAF8',
              border: '1px solid var(--c-rule)',
              borderRadius: '16px',
              padding: '2.0rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.12rem',
                  fontWeight: 700,
                  color: 'var(--c-muted)',
                }}
              >
                {item.num}
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.58rem',
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

            <p
              style={{
                fontSize: '1.58rem',
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

export default Slide04_RoundTable;
