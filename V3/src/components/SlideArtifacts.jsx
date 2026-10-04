import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 10 — Ce que Claude vous rend : les artefacts
 * Cascade : Titre -> Carte 1 -> Carte 2 -> Carte 3
 */
const SlideArtifacts = () => {
  const items = [
    {
      num: '01',
      title: 'Ce qui se télécharge',
      desc: 'Les fichiers produits : Word, PowerPoint, PDF, Excel. Téléchargez-les tout de suite et gardez-les chez vous.',
    },
    {
      num: '02',
      title: 'Ce qui se conserve',
      desc: 'La conversation et le projet (consignes et documents) restent dans votre compte, prêts à être rouverts.',
    },
    {
      num: '03',
      title: 'Ce qui se partage',
      desc: "Un lien vers un artefact publié, que vous envoyez à vos collègues. Vérifiez qui y a accès avant de l'envoyer.",
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="À RETENIR"
        titleBold="Ce que Claude vous rend :"
        titleLight="les artefacts"
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
                fontSize: '1.35rem',
                color: 'var(--c-ink)',
                lineHeight: 1.5,
                fontWeight: 400,
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

export default SlideArtifacts;
