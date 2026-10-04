import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 05 — Sécurité & Droits de la création
 * Cascade : Titre -> Carte Confidentialité -> Carte Droit d'auteur
 */
const Slide05_SecurityLegal = () => {
  return (
    <Slide>
      <SlideHeader
        badge="CADRE LÉGAL & PROFESSIONNEL"
        meta="INA CAMPUS"
        titleBold="Données protégées"
        titleLight="et droits de la création"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {/* Carte 1 — Confidentialité */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '1.15rem 2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.25rem',
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
              ESPACE ENTREPRISE
            </span>
            <h2 style={{ fontSize: '1.37rem', fontWeight: 700, color: 'var(--c-ink)', letterSpacing: '-0.015em' }}>
              Confidentialité & Comptes Claude Team
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '1.125rem' }}>
              <strong style={{ fontSize: '1.13rem', color: 'var(--c-ink)', display: 'block', marginBottom: '0.35rem' }}>
                Étanchéité des données
              </strong>
              <p style={{ fontSize: '1.13rem', color: 'var(--c-muted)', lineHeight: 1.55 }}>
                Sur un espace Claude Team, aucun contenu, document interne ou brief n'est utilisé pour entraîner les modèles.
              </p>
            </div>

            <div>
              <strong style={{ fontSize: '1.13rem', color: 'var(--c-ink)', display: 'block', marginBottom: '0.35rem' }}>
                Règle pratique
              </strong>
              <p style={{ fontSize: '1.13rem', color: 'var(--c-muted)', lineHeight: 1.55 }}>
                Vos projets restent strictement confidentiels et hébergés dans votre environnement sécurisé.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carte 2 — Droit d'auteur & Propriété intellectuelle */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '1.15rem 2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.25rem',
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
              PROPRIÉTÉ INTELLECTUELLE
            </span>
            <h2 style={{ fontSize: '1.37rem', fontWeight: 700, color: 'var(--c-ink)', letterSpacing: '-0.015em' }}>
              Droit d'auteur & Propriété intellectuelle
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.875rem' }}>
              <strong style={{ fontSize: '1.13rem', color: 'var(--c-ink)', display: 'block', marginBottom: '0.25rem' }}>
                Statut juridique de l'IA
              </strong>
              <p style={{ fontSize: '1.1rem', color: 'var(--c-muted)', lineHeight: 1.5 }}>
                En droit européen et français, une œuvre générée par une IA sans intervention humaine substantielle n'est pas protégée par le droit d'auteur.
              </p>
            </div>

            <div>
              <strong style={{ fontSize: '1.13rem', color: 'var(--c-ink)', display: 'block', marginBottom: '0.5rem' }}>
                Les 3 règles d'or avant diffusion
              </strong>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ fontSize: '1.1rem', color: 'var(--c-ink)', lineHeight: 1.45 }}>
                  <strong>Marques tierces</strong> : Purger systématiquement les logos ou marques involontairement reproduits.
                </li>
                <li style={{ fontSize: '1.1rem', color: 'var(--c-ink)', lineHeight: 1.45 }}>
                  <strong>Droit à l'image</strong> : Ne jamais diffuser un visage reconnaissable sans consentement formel.
                </li>
                <li style={{ fontSize: '1.1rem', color: 'var(--c-ink)', lineHeight: 1.45 }}>
                  <strong>Chiffres & Faits</strong> : Ne jamais intégrer une statistique produite par un LLM sans avoir vérifié sa source primaire.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide05_SecurityLegal;
