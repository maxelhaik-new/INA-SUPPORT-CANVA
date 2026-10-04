import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 09 — Demandez-lui un chiffre
 * Prompts formatés en font-mono italique sans guillemets.
 */
const SlideExercise = () => {
  const steps = [
    {
      num: '01',
      title: 'Posez la question',
      desc: "Combien de séries documentaires de brand content ont été diffusées en France l'an dernier ?",
      isPrompt: true,
    },
    {
      num: '02',
      title: 'Observez la réponse',
      desc: "Donne-t-il un chiffre précis ? Cite-t-il une source, ou reste-t-il prudent ?",
      isPrompt: false,
    },
    {
      num: '03',
      title: 'Demandez la source',
      desc: "D'où vient ce chiffre ? Donne-moi le lien exact.",
      isPrompt: true,
    },
    {
      num: '04',
      title: 'Vérifiez vous-même',
      desc: "Ouvrez la source. Le chiffre y est-il, à l'identique ?",
      isPrompt: false,
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="EXERCICE · 5 MIN"
        titleBold="Demandez-lui"
        titleLight="un chiffre"
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '1.5rem' }}>
        {/* Grille 2×2 des 4 cartes en cascade */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '1.25rem',
          }}
        >
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={{
                backgroundColor: '#FAFAF8',
                border: '1px solid var(--c-rule)',
                borderRadius: '14px',
                padding: '1.35rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.625rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                <h2
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--c-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h2>
              </div>

              <p
                style={{
                  fontSize: item.isPrompt ? '1.05rem' : '1.15rem',
                  fontFamily: item.isPrompt ? 'var(--font-mono)' : 'var(--font-sans)',
                  color: item.isPrompt ? 'var(--c-ink)' : 'var(--c-muted)',
                  lineHeight: 1.5,
                  fontWeight: item.isPrompt ? 500 : 400,
                  fontStyle: item.isPrompt ? 'italic' : 'normal',
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 6. Bandeau Règle en dernier */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'var(--c-dark)',
            borderRadius: '12px',
            padding: '1.125rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#F6F5F2',
              flexShrink: 0,
            }}
          >
            LA RÈGLE
          </span>
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 500,
              color: 'rgba(246,245,242,0.92)',
              lineHeight: 1.4,
              textAlign: 'right',
            }}
          >
            Un chiffre dont vous n'avez pas vu la source ne va pas dans un dossier.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SlideExercise;
