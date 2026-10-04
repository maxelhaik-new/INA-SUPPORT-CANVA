import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';
import PromptCard from './PromptCard';

/**
 * Slide 06 — La méthode du Prompt Concis
 * Cascade : Titre -> Carte 4 piliers -> Carte Itération
 */
const Slide06_PromptMethod = () => {
  const pillars = [
    { num: '1', title: 'Rôle & Contexte', desc: 'Définir qui parle et à qui s\'adresse le message.' },
    { num: '2', title: 'Objectif clair', desc: 'Une tâche unique et précise, formulée avec un verbe d\'action.' },
    { num: '3', title: 'Matière source', desc: 'Le texte brut, le brief ou les données de référence.' },
    { num: '4', title: 'Format & Contraintes', desc: 'Longueur exacte, ton éditorial et structure attendue.' },
  ];

  const iterationPrompts = [
    'Raccourcis de moitié',
    'Adopte un ton plus éditorial et chaleureux',
    'Structure sous forme de 3 points percutants',
  ];

  return (
    <Slide>
      <SlideHeader
        badge="MÉTHODOLOGIE ANTHROPIC 2026"
        meta="INA CAMPUS"
        titleBold="Finis les prompts fleuves"
        titleLight="de trois pages"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {/* Carte 1 — Les 4 piliers */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '1.44rem 2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.875rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--c-muted)',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              STRUCTURE FONDAMENTALE
            </span>
            <h2 style={{ fontSize: '1.47rem', fontWeight: 700, color: 'var(--c-ink)', letterSpacing: '-0.015em' }}>
              La formule des 4 piliers indispensables
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {pillars.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '0.45rem 0',
                  borderBottom: idx < pillars.length - 1 ? '1px solid var(--c-rule)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--c-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.num}.
                </span>
                <p style={{ fontSize: '1.21rem', color: 'var(--c-ink)', lineHeight: 1.45 }}>
                  <strong style={{ fontWeight: 700 }}>{item.title}</strong> : {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carte 2 — Puissance de l'itération */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '1.44rem 2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.875rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--c-muted)',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              DIALOGUE NATUREL
            </span>
            <h2 style={{ fontSize: '1.47rem', fontWeight: 700, color: 'var(--c-ink)', letterSpacing: '-0.015em' }}>
              La puissance de l'itération
            </h2>
          </div>

          <p style={{ fontSize: '1.21rem', color: 'var(--c-muted)', lineHeight: 1.55 }}>
            Il est infiniment plus efficace de lancer une première instruction courte puis d'ajuster en direct :
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {iterationPrompts.map((promptText, idx) => (
              <PromptCard
                key={idx}
                text={promptText}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--c-rule)',
                  borderRadius: '10px',
                  padding: '1rem 3.25rem 1rem 1.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    color: 'var(--c-ink)',
                    lineHeight: 1.45,
                    display: 'block',
                  }}
                >
                  {promptText}
                </span>
              </PromptCard>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide06_PromptMethod;
