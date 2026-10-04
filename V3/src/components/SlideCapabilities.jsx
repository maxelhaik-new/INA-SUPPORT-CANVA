import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 06 — Ce que Claude fait, et ce qu'il ne fait pas
 * Cartes avec découpage en puces subtilement séparées par des hairlines.
 * Carte gauche teintée d'un vert sauge doux (#E5ECE6), carte droite contrastée en blanc/gris.
 */
const SlideCapabilities = () => {
  const goodPoints = [
    'Rédiger, structurer, reformuler',
    'Résumer un dossier long, proposer des variantes',
    'Produire un fichier Word, PowerPoint ou PDF',
    'Garder vos consignes dans un projet',
  ];

  const badPoints = [
    'Garantir un chiffre ou un fait',
    'Connaître vos projets si vous ne les lui donnez pas',
    'Générer des photos réalistes',
    'Remplacer votre regard éditorial',
  ];

  return (
    <Slide>
      <SlideHeader
        badge="L'OUTIL"
        titleBold="Ce que Claude fait,"
        titleLight="et ce qu'il ne fait pas"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {/* Carte Gauche — Il fait bien (fond sauge pâle #E5ECE6) */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#E5ECE6',
            borderRadius: '16px',
            padding: '2.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {/* Header carte */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--c-ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '0.35rem',
              }}
            >
              Il fait bien
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'rgba(17, 17, 17, 0.55)',
              }}
            >
              CAPACITÉS
            </span>
          </div>

          {/* Liste des points avec séparateurs subtils */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-around' }}>
            {goodPoints.map((text, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.85rem 0',
                  borderBottom: idx < goodPoints.length - 1 ? '1px solid rgba(17, 17, 17, 0.1)' : 'none',
                }}
              >
                <p
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--c-ink)',
                    lineHeight: 1.4,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carte Droite — Il ne fait pas (fond neutre #FAFAF8 ou transparent avec hairlines) */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {/* Header carte */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--c-ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '0.35rem',
              }}
            >
              Il ne fait pas
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--c-muted)',
              }}
            >
              LIMITES
            </span>
          </div>

          {/* Liste des points avec séparateurs subtils */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-around' }}>
            {badPoints.map((text, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.85rem 0',
                  borderBottom: idx < badPoints.length - 1 ? '1px solid var(--c-rule)' : 'none',
                }}
              >
                <p
                  style={{
                    fontSize: '1.25rem',
                    color: 'rgba(17, 17, 17, 0.78)',
                    lineHeight: 1.4,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SlideCapabilities;
