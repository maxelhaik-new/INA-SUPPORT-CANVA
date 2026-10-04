import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import { itemVariants } from './motion';

/**
 * Slide 01 — Cover
 * Cascade : Top rail -> Titre & sous-titre -> Rail bas
 */
const SlideCover = () => {
  return (
    <Slide style={{ justifyContent: 'space-between' }}>
      {/* ── 1. Top rail ── */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '1.5rem', height: '1.5rem', borderRadius: '9999px',
            border: '1px solid var(--c-rule)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '0.625rem', color: 'var(--c-muted)',
            fontFamily: 'var(--font-mono)',
          }}>↘</span>
          <span style={{
            border: '1px solid var(--c-rule)', borderRadius: '9999px',
            padding: '0.225rem 0.75rem', fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--c-muted)',
          }}>FORMATION 1 DÉCOUVERTE</span>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.575rem', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--c-faint)',
        }}>INA CAMPUS × GETAI</span>
      </motion.div>

      {/* ── 2. Centre — titre & sous-titre ── */}
      <motion.div
        variants={itemVariants}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.75rem' }}
      >
        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.0, letterSpacing: '-0.035em' }}>
          <span style={{ fontWeight: 800, color: 'var(--c-ink)', display: 'block' }}>Du projet</span>
          <span style={{ fontWeight: 300, color: 'var(--c-muted)', display: 'block' }}>au dossier qui convainc</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.5, maxWidth: '42rem' }}>
          Claude, Gamma et Canva pour le pôle développement de 2P2L
        </p>
      </motion.div>

      {/* ── 3. Bottom rail ── */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid var(--c-rule)', paddingTop: '1.5rem', gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Module</span>
          <span style={{ fontSize: '0.95rem', color: 'var(--c-ink)', fontWeight: 500 }}>
            Module Communication · Mardi 6 octobre 2026 · 14h00 à 17h30
          </span>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          borderLeft: '1px solid var(--c-rule)', paddingLeft: '1.5rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Animation</span>
          <span style={{ fontSize: '0.95rem', color: 'var(--c-ink)', fontWeight: 500 }}>
            Animé par Baptiste · GETAI
          </span>
        </div>
      </motion.div>
    </Slide>
  );
};

export default SlideCover;
