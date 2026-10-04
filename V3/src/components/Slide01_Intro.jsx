import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import { itemVariants } from './motion';

/**
 * Slide 01 — Titre & Introduction
 * Cascade : Top rail -> Titre & Sous-titre -> Rail d'informations inférieur
 */
const Slide01_Intro = () => {
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
            justifyContent: 'center', fontSize: '0.9rem', color: 'var(--c-muted)',
            fontFamily: 'var(--font-mono)',
          }}>↘</span>
          <span style={{
            border: '1px solid var(--c-rule)', borderRadius: '9999px',
            padding: '0.225rem 0.75rem', fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--c-muted)',
          }}>FORMATION OPÉRATIONNELLE · 3H30</span>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--c-faint)',
        }}>INA CAMPUS</span>
      </motion.div>

      {/* ── 2. Centre — titre & sous-titre ── */}
      <motion.div
        variants={itemVariants}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.75rem' }}
      >
        <h1 style={{ fontSize: '4.25rem', lineHeight: 1.05, letterSpacing: '-0.035em' }}>
          <span style={{ fontWeight: 800, color: 'var(--c-ink)', display: 'block' }}>L'IA pour la Communication</span>
          <span style={{ fontWeight: 300, color: 'var(--c-muted)', display: 'block' }}>et la Création</span>
        </h1>
        <p style={{ fontSize: '1.7rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.45, maxWidth: '46rem' }}>
          De l'idée au livrable : structurer, designer et décliner sans artifice
        </p>
      </motion.div>

      {/* ── 3. Bottom rail — 4 colonnes ── */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--c-rule)', paddingTop: '1.5rem', gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Public</span>
          <span style={{ fontSize: '1.2rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.4 }}>
            Pôle Communication, Graphistes et Producteurs (5 participants)
          </span>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          borderLeft: '1px solid var(--c-rule)', paddingLeft: '1.25rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Outils clés</span>
          <span style={{ fontSize: '1.2rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.4 }}>
            Claude (Team), Canva (Magic Studio) et Gamma
          </span>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          borderLeft: '1px solid var(--c-rule)', paddingLeft: '1.25rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Animation</span>
          <span style={{ fontSize: '1.2rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.4 }}>
            Maxime Elhaik
          </span>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          borderLeft: '1px solid var(--c-rule)', paddingLeft: '1.25rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700,
          }}>Format</span>
          <span style={{ fontSize: '1.2rem', color: 'var(--c-ink)', fontWeight: 500, lineHeight: 1.4 }}>
            Workshop interactif, zéro jargon, 100% pratique
          </span>
        </div>
      </motion.div>
    </Slide>
  );
};

export default Slide01_Intro;
