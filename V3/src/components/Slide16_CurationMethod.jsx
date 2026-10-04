import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 16 — Méthode de Veille Durable
 * Les 3 principes pour une veille saine
 */
const Slide16_CurationMethod = () => {
  const principles = [
    {
      num: '01',
      title: 'Ignorer la course aux outils éphémères',
      desc: 'Un nouvel outil sort chaque jour, mais 95% ne sont que des emballages cosmétiques des mêmes modèles.',
    },
    {
      num: '02',
      title: 'Partir du besoin métier réel',
      desc: 'N\'adopter une nouvelle solution que lorsqu\'elle résout un problème précis et chronophage dans votre flux de travail actuel.',
    },
    {
      num: '03',
      title: 'Une routine de 15 minutes par semaine',
      desc: 'Sélectionner deux sources spécialisées fiables et tester uniquement ce qui a une valeur opérationnelle prouvée.',
    },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="AUTONOMIE POST-FORMATION"
        meta="INA CAMPUS"
        titleBold="Rester à jour sans s'épuiser"
        titleLight="face aux nouveautés"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {principles.map((p, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            style={{
              backgroundColor: '#FAFAF8',
              border: '1px solid var(--c-rule)',
              borderRadius: '16px',
              padding: '2rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--c-rule)',
                  paddingBottom: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.56rem',
                    fontWeight: 700,
                    color: 'var(--c-muted)',
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--c-muted)',
                  }}
                >
                  PRINCIPE
                </span>
              </div>

              <h2
                style={{
                  fontSize: '1.82rem',
                  fontWeight: 700,
                  color: 'var(--c-ink)',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                }}
              >
                {p.title}
              </h2>
            </div>

            <p
              style={{
                fontSize: '1.56rem',
                lineHeight: 1.55,
                color: 'var(--c-ink)',
              }}
            >
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};

export default Slide16_CurationMethod;
