import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 17 — Clôture & Galerie des Créations
 * Récapitulatif des 4 livrables opérationnels + Clôture & remerciements
 */
const Slide17_Closing = () => {
  const deliverables = [
    {
      format: '.DOCX · WORD COMPLET',
      title: 'La Note de cadrage stratégique',
      tool: 'Claude Cowork',
      color: '#2563EB',
    },
    {
      format: '.XLSX · EXCEL AVEC FORMULES',
      title: 'Le Rétroplanning & Budget',
      tool: 'Claude Cowork',
      color: '#059669',
    },
    {
      format: '.PPTX · POWERPOINT ÉDITABLE',
      title: 'Le Deck de pitch partenaires',
      tool: 'Gamma App',
      color: '#7C3AED',
    },
    {
      format: 'PRINT & SOCIAL · A5 & 4:5',
      title: 'Le Kit visuel de communication',
      tool: 'Canva',
      color: '#D97706',
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="BILAN & ÉCHANGES"
        meta="INA CAMPUS"
        titleBold="Bravo ! Vos 4 livrables"
        titleLight="sont opérationnels"
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: '1.5rem' }}>
        {/* Grille des 4 livrables */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
        >
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={{
                backgroundColor: '#FAFAF8',
                border: '1px solid var(--c-rule)',
                borderRadius: '16px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: item.color,
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.format}
                </span>

                <h2
                  style={{
                    fontSize: '1.68rem',
                    fontWeight: 700,
                    color: 'var(--c-ink)',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h2>
              </div>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--c-rule)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-muted)', textTransform: 'uppercase' }}>
                  OUTIL
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--c-ink)' }}>
                  {item.tool}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer / Clôture */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'var(--c-dark)',
            borderRadius: '14px',
            padding: '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: '1.68rem',
              fontWeight: 500,
              color: 'rgba(246,245,242,0.9)',
            }}
          >
            Vos questions, vos retours et la suite de vos projets
          </span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.44rem',
              fontWeight: 700,
              color: '#F6F5F2',
              letterSpacing: '0.05em',
            }}
          >
            Maxime Elhaik · Merci à tous !
          </span>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide17_Closing;
