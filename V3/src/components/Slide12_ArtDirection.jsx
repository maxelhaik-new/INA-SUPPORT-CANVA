import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';
import PromptCard from './PromptCard';

/**
 * Slide 12 — Direction Artistique assistée par Claude
 * Pourquoi définir la DA en amont + Prompt de Direction Artistique
 */
const Slide12_ArtDirection = () => {
  return (
    <Slide>
      <SlideHeader
        badge="CADRAGE GRAPHIQUE"
        meta="INA CAMPUS"
        titleBold="Poser sa charte visuelle"
        titleLight="avant d'ouvrir Canva"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.35fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {/* Colonne gauche : Pourquoi définir la DA en amont */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ borderBottom: '1px solid var(--c-rule)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
                RÈGLE D'OR
              </span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-ink)' }}>
                Pourquoi définir la DA en amont ?
              </h2>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--c-ink)' }}>
              Ouvrir un outil graphique sans consigne précise mène systématiquement à des choix par défaut génériques et incohérents.
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--c-rule)',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
              BÉNÉFICE IMMÉDIAT
            </span>
            <span style={{ fontSize: '1.1rem', color: 'var(--c-ink)', fontWeight: 500 }}>
              Garantir une identité visuelle singulière et cohérente sur l'ensemble des formats.
            </span>
          </div>
        </motion.div>

        {/* Colonne droite : Prompt DA */}
        <PromptCard text={`Tu es directeur artistique spécialisé dans l'identité de marque culturelle. Pour l'événement Rencontres Créatives INA 2027, définis une direction artistique contemporaine et mémorable :
1. Une palette harmonieuse de 4 couleurs avec leurs codes hexadécimaux précis.
2. Un duo de typographies complémentaires disponibles sur Canva (un titre expressif et un corps très lisible).
3. L'ambiance visuelle décrite en 5 adjectifs.
4. Deux prompts détaillés pour générer des photographies de fond immersives sans texte incrusté.`}
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
              PROMPT CLAUDE · DIRECTION ARTISTIQUE
            </span>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Le prompt de Direction Artistique dans Claude
            </h2>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--c-ink)',
              lineHeight: 1.6,
            }}
          >
            <p style={{ margin: '0 0 0.85rem 0' }}>
              Tu es directeur artistique spécialisé dans l'identité de marque culturelle. Pour l'événement Rencontres Créatives INA 2027, définis une direction artistique contemporaine et mémorable :
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '0.5rem' }}>
              <div>1. Une palette harmonieuse de 4 couleurs avec leurs codes hexadécimaux précis.</div>
              <div>2. Un duo de typographies complémentaires disponibles sur Canva (un titre expressif et un corps très lisible).</div>
              <div>3. L'ambiance visuelle décrite en 5 adjectifs.</div>
              <div>4. Deux prompts détaillés pour générer des photographies de fond immersives sans texte incrusté.</div>
            </div>
          </div>
        </PromptCard>
      </div>
    </Slide>
  );
};

export default Slide12_ArtDirection;
