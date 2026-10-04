import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 14 — Le Contrôle Qualité Visuel
 * Tableau comparatif : Piège fréquent de l'IA | Conséquence | Action humaine obligatoire
 */
const Slide14_QualityCheck = () => {
  const rows = [
    {
      flaw: 'Typographies déformées',
      consequence: 'Lettres illisibles ou inventées sur les images générées.',
      action: 'Ne jamais faire générer le texte dans l\'image : ajouter les titres manuellement dans Canva.',
    },
    {
      flaw: 'Anomalies anatomiques',
      consequence: 'Mains à 6 doigts, regards fuyants, textures de peau cireuses.',
      action: 'Recadrer ou remplacer immédiatement par une photo authentique de banque d\'images.',
    },
    {
      flaw: 'Logos parasites',
      consequence: 'Éléments graphiques ressemblant à des marques protégées.',
      action: 'Gommer l\'élément avec la gomme magique ou choisir une autre génération.',
    },
    {
      flaw: 'Incohérence de gamme',
      consequence: 'Styles visuels hétérogènes entre les différentes slides.',
      action: 'Aligner strictement les filtres et les codes couleur sur l\'ensemble des créations.',
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="L'ŒIL DE L'EXPERT"
        meta="INA CAMPUS"
        titleBold="Ce que le regard humain"
        titleLight="doit impérativement corriger"
      />

      <motion.div
        variants={itemVariants}
        style={{
          flex: 1,
          backgroundColor: '#FAFAF8',
          border: '1px solid var(--c-rule)',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1.5rem',
        }}
      >
        {/* Table Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.5fr 2fr',
            padding: '1rem 1.75rem',
            borderBottom: '1px solid var(--c-rule)',
            backgroundColor: '#F3F3EF',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
            PIÈGE FRÉQUENT DE L'IA
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
            CONSÉQUENCE
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
            ACTION HUMAINE OBLIGATOIRE
          </span>
        </div>

        {/* Table Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          {rows.map((row, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.5fr 2fr',
                padding: '1.1rem 1.75rem',
                borderBottom: idx < rows.length - 1 ? '1px solid var(--c-rule)' : 'none',
                alignItems: 'center',
                backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAF8',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.44rem', color: 'var(--c-ink)' }}>
                {row.flaw}
              </div>
              <div style={{ fontSize: '1.44rem', color: 'var(--c-muted)', lineHeight: 1.45, paddingRight: '1rem' }}>
                {row.consequence}
              </div>
              <div style={{ fontSize: '1.44rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.45 }}>
                {row.action}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
};

export default Slide14_QualityCheck;
