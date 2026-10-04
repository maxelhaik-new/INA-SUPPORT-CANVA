import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 10 — Le Flux Direct Claude ➔ Gamma
 * Pourquoi Gamma + Le workflow direct en 4 étapes
 */
const Slide10_DirectWorkflow = () => {
  const steps = [
    { num: '01', text: "Structurer l'argumentaire dans Claude sous forme de plan Markdown hiérarchisé" },
    { num: '02', text: 'Copier le texte balisé produit par Claude' },
    { num: '03', text: 'Ouvrir Gamma ➔ Importer / Coller du texte ➔ Sélectionner Présentation' },
    { num: '04', text: 'Choisir la charte graphique et générer instantanément les slides' },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="LE PONT SANS FRICTION"
        meta="INA CAMPUS"
        titleBold="De Claude à Gamma"
        titleLight="en trois minutes chrono"
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
        {/* Colonne gauche : Pourquoi Gamma */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
              PARADIGME
            </span>
            <h2 style={{ fontSize: '1.58rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Pourquoi Gamma transforme la création de présentations
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)' }}>
                Fin de la corvée de mise en page manuelle sous PowerPoint (alignement de zones de texte, redimensionnement de blocs).
              </p>
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--c-rule)' }} />

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)' }}>
                Mise en scène automatique du contenu sous forme de cartes visuelles interactives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Colonne droite : Le workflow direct */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
              MÉTHODE PAS À PAS
            </span>
            <h2 style={{ fontSize: '1.58rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Le workflow direct (Zéro connecteur fragile)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1, justifyContent: 'space-between' }}>
            {steps.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '0.7rem 1.125rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--c-rule)',
                  borderRadius: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    color: 'var(--c-muted)',
                    flexShrink: 0,
                  }}
                >
                  {s.num}
                </span>
                <p style={{ fontSize: '1.12rem', fontWeight: 500, color: 'var(--c-ink)', lineHeight: 1.45, margin: 0 }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide10_DirectWorkflow;
