import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import { itemVariants } from './motion';

/**
 * Slide 05 — Section divider (dark) 16:9
 * Cascade : Badge & 01 -> Titre section -> Sous-titre descriptif
 */
const SlideSection = () => {
  return (
    <Slide dark style={{ justifyContent: 'space-between', paddingBottom: '3.5rem' }}>
      {/* ── 1. Top : Badge & 01 ── */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(246,245,242,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.625rem',
              color: 'rgba(246,245,242,0.4)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ↘
          </span>
          <span
            style={{
              border: '1px solid rgba(246,245,242,0.18)',
              borderRadius: '9999px',
              padding: '0.225rem 0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(246,245,242,0.4)',
            }}
          >
            SECTION 1
          </span>
        </div>

        {/* Numéro géant — 9.5rem */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9.5rem',
            fontWeight: 300,
            color: '#F6F5F2',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
            userSelect: 'none',
          }}
        >
          01
        </span>
      </motion.div>

      {/* ── Bas : Titre puis sous-titre ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '4rem',
          paddingRight: '6.5rem',
        }}
      >
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: '4.25rem',
            fontWeight: 800,
            color: '#F6F5F2',
            lineHeight: 1.0,
            letterSpacing: '-0.035em',
          }}
        >
          Prendre en main Claude
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            maxWidth: '24rem',
            textAlign: 'right',
            fontSize: '1.25rem',
            color: 'rgba(246,245,242,0.6)',
            lineHeight: 1.6,
            fontWeight: 400,
            flexShrink: 0,
          }}
        >
          Ce qu'il fait, ce qu'il ne fait pas,<br />et comment lui parler.
        </motion.p>
      </div>
    </Slide>
  );
};

export default SlideSection;
