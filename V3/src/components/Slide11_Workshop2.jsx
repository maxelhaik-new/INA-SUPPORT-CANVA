import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';
import PromptCard from './PromptCard';

/**
 * Slide 11 — Atelier 2 : Générer le Pitch & Export PowerPoint
 * Prompt de préparation Claude + Les 4 étapes de finalisation dans Gamma
 */
const Slide11_Workshop2 = () => {
  const gammaSteps = [
    { num: '1', title: 'Génération', desc: 'Collez le plan Markdown et lancez la génération.' },
    { num: '2', title: 'Direction visuelle', desc: 'Sélectionnez un thème épuré, à fort contraste et adapté au secteur culturel.' },
    { num: '3', title: 'Mise en valeur', desc: "Transformez une liste à puces en grille de colonnes ou en frise chronologique grâce à l'interface intuitive de Gamma." },
    { num: '4', title: 'Exportation', desc: 'Téléchargez le fichier final au format PowerPoint modifiable (.pptx) et en PDF.' },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="ATELIER GAMMA · 20 MIN"
        meta="INA CAMPUS"
        titleBold="Un deck de 8 slides"
        titleLight="prêt à présenter"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.25fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {/* Colonne gauche : Prompt Claude */}
        <PromptCard text={`À partir de notre note de cadrage, prépare le plan complet d'une présentation de 8 slides pour convaincre des partenaires institutionnels. Formate la réponse en Markdown optimisé pour Gamma : un titre H1 par slide, 3 puces concises maximum par slide, et une phrase d'accroche percutante. Pas de texte superflu.`}
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
              ÉTAPE 1 · CLAUDE
            </span>
            <h2 style={{ fontSize: '1.21rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Le prompt de préparation pour Claude
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--c-ink)',
              lineHeight: 1.6,
              margin: 'auto 0',
            }}
          >
            À partir de notre note de cadrage, prépare le plan complet d'une présentation de 8 slides pour convaincre des partenaires institutionnels. Formate la réponse en Markdown optimisé pour Gamma : un titre H1 par slide, 3 puces concises maximum par slide, et une phrase d'accroche percutante. Pas de texte superflu.
          </p>
        </PromptCard>

        {/* Colonne droite : Les étapes Gamma */}
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
              ÉTAPE 2 · GAMMA
            </span>
            <h2 style={{ fontSize: '1.21rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Les étapes de finalisation dans Gamma
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, justifyContent: 'space-between' }}>
            {gammaSteps.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'baseline',
                  padding: '0.48rem 1rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--c-rule)',
                  borderRadius: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--c-muted)',
                    flexShrink: 0,
                  }}
                >
                  {s.num}.
                </span>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.45, color: 'var(--c-ink)', margin: 0 }}>
                  <strong style={{ fontWeight: 700 }}>{s.title}</strong> : {s.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide11_Workshop2;
