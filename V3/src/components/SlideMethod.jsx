import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 07 — Un bon prompt, quatre réflexes
 * Prompts et exemples cités formatés en font-mono italique sans guillemets.
 */
const SlideMethod = () => {
  return (
    <Slide>
      <SlideHeader
        badge="LA MÉTHODE"
        titleBold="Un bon prompt,"
        titleLight="quatre réflexes"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
          alignItems: 'stretch',
          paddingBottom: '2rem',
        }}
      >
        {/* 01 - Soyez précis */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--c-muted)',
              }}
            >
              01
            </span>
          </div>

          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--c-ink)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              borderBottom: '1px solid var(--c-rule)',
              paddingBottom: '0.875rem',
            }}
          >
            Soyez précis
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--c-ink)', lineHeight: 1.5, fontWeight: 400 }}>
            Pas <span style={{ fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>un pitch</span>, mais{' '}
            <span style={{ fontFamily: 'var(--font-mono)', fontStyle: 'italic', fontWeight: 500 }}>
              un pitch de 5 lignes pour une série de 4 × 26 min
            </span>.
          </p>
        </motion.div>

        {/* 02 - Donnez le contexte */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--c-muted)',
              }}
            >
              02
            </span>
          </div>

          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--c-ink)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              borderBottom: '1px solid var(--c-rule)',
              paddingBottom: '0.875rem',
            }}
          >
            Donnez le contexte
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--c-ink)', lineHeight: 1.5, fontWeight: 400 }}>
            Pour qui, pour quelle chaîne ou marque, avec quel ton.
          </p>
        </motion.div>

        {/* 03 - Montrez un exemple */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--c-muted)',
              }}
            >
              03
            </span>
          </div>

          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--c-ink)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              borderBottom: '1px solid var(--c-rule)',
              paddingBottom: '0.875rem',
            }}
          >
            Montrez un exemple
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--c-ink)', lineHeight: 1.5, fontWeight: 400 }}>
            Un pitch que vous aimez : Claude imite très bien un format.
          </p>
        </motion.div>

        {/* 04 - Itérez */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '16px',
            padding: '2.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--c-muted)',
              }}
            >
              04
            </span>
          </div>

          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--c-ink)',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              borderBottom: '1px solid var(--c-rule)',
              paddingBottom: '0.875rem',
            }}
          >
            Itérez
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--c-ink)', lineHeight: 1.5, fontWeight: 400 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>Plus court</span>,{' '}
            <span style={{ fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>moins publicitaire</span> : la première version n'est qu'un départ.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SlideMethod;
