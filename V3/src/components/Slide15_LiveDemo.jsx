import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 15 — Démo Live : Whisper & Agents Autonomes
 * 1. Transcription audio locale instantanée (Whisper)
 * 2. Aperçu des flux d'agents (Claude Code & Antigravity)
 */
const Slide15_LiveDemo = () => {
  return (
    <Slide>
      <SlideHeader
        badge="DÉMO LIVE · OUVRIR LES PERSPECTIVES"
        meta="INA CAMPUS"
        titleBold="Ce que l'automatisation"
        titleLight="permet aujourd'hui"
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {/* Volet 1 : Whisper */}
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
                PERSPECTIVE 01 · LOCAL & SOUVERAIN
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--c-ink)' }}>
                1. Transcription audio locale instantanée (Whisper)
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.16rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.16rem', lineHeight: 1.55, color: 'var(--c-ink)', margin: 0 }}>
                Démonstration en direct sur machine locale : transcription fidèle d'un extrait audio de 5 minutes en quelques secondes.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--c-rule)',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem', fontWeight: 700 }}>
              LES ATOUTS MAJEURS
            </span>
            <p style={{ fontSize: '1.16rem', color: 'var(--c-ink)', lineHeight: 1.45, margin: 0 }}>
              Zéro coût, fonctionnement hors ligne sans connexion internet, respect absolu du secret professionnel et de la vie privée.
            </p>
          </div>
        </motion.div>

        {/* Volet 2 : Agents autonomes */}
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
                PERSPECTIVE 02 · AGENTS AUTONOMES
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--c-ink)' }}>
                2. Aperçu des flux d'agents (Claude Code & Antigravity)
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.16rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.16rem', lineHeight: 1.55, color: 'var(--c-ink)', margin: 0 }}>
                Comment des agents d'IA peuvent désormais manipuler des fichiers, orchestrer des données complexes et automatiser la chaîne de publication sans intervention manuelle répétitive.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--c-rule)',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem', fontWeight: 700 }}>
              L'OBJECTIF
            </span>
            <p style={{ fontSize: '1.16rem', color: 'var(--c-ink)', lineHeight: 1.45, margin: 0 }}>
              Comprendre où va la technologie sans se laisser dépasser par elle.
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide15_LiveDemo;
