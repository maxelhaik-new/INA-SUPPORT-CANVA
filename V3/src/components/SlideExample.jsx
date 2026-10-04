import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 08 — Le même besoin, deux prompts
 * Prompts formatés en font-mono italique, sans guillemets.
 */
const SlideExample = () => {
  return (
    <Slide>
      <SlideHeader
        badge="EXEMPLE"
        titleBold="Le même besoin,"
        titleLight="deux prompts"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.35fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {/* 2. Carte Gauche — Avant */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.5rem 2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--c-muted)',
              }}
            >
              01 · Avant
            </span>
          </div>

          {/* Prompt en DM Mono sans guillemets */}
          <p
            style={{
              fontSize: '1.65rem',
              color: 'var(--c-ink)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.45,
              fontWeight: 400,
              margin: 'auto 0',
            }}
          >
            Fais-moi un pitch pour mon doc.
          </p>

          {/* Résultat */}
          <div
            style={{
              borderTop: '1px solid var(--c-rule)',
              paddingTop: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--c-muted)',
              fontStyle: 'italic',
            }}
          >
            Résultat : générique, sans ton, à réécrire.
          </div>
        </motion.div>

        {/* 3. Carte Droite — Après (Dark) */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'var(--c-dark)',
            borderRadius: '16px',
            padding: '2.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              paddingBottom: '0.875rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#F6F5F2',
              }}
            >
              02 · Après
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(246,245,242,0.45)',
              }}
            >
              PROMPT SPÉCIFIÉ & ÉDITORIALISÉ
            </span>
          </div>

          {/* Prompt riche en DM Mono sans guillemets */}
          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(246,245,242,0.92)',
              lineHeight: 1.65,
              fontFamily: 'var(--font-mono)',
              fontStyle: 'italic',
              fontWeight: 400,
              margin: 'auto 0',
              padding: '1.25rem 0',
            }}
          >
            Tu es chargé de développement dans une société de production. Rédige le pitch,
            5 lignes maximum, d'une série documentaire de brand content pour [marque], destinée
            à [chaîne]. Ton cinématographique, jamais publicitaire. Voici un pitch que nous aimons :
            [exemple]. Propose deux versions.
          </p>

          <div style={{ height: '0.5rem' }} />
        </motion.div>
      </div>
    </Slide>
  );
};

export default SlideExample;
