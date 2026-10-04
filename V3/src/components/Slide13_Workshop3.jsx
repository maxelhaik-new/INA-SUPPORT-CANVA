import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 13 — Atelier 3 : Déclinaisons Multi-formats dans Canva
 * Livrable A (Affiche / Flyer A5) et Livrable B (Carrousel réseaux sociaux)
 */
const Slide13_Workshop3 = () => {
  return (
    <Slide>
      <SlideHeader
        badge="ATELIER CANVA · 25 MIN"
        meta="INA CAMPUS"
        titleBold="Du texte à la maquette :"
        titleLight="Print, Web et Réseaux"
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
        {/* Livrable A */}
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
              LIVRABLE A · PRINT & WEB
            </span>
            <h2 style={{ fontSize: '1.58rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Affiche événementielle & Flyer A5
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)', margin: 0 }}>
                Ouvrez Canva, créez un format A5 et appliquez la palette de couleurs hexadécimales validée avec Claude.
              </p>
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--c-rule)' }} />

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)', margin: 0 }}>
                Intégrez le titre fort et la promesse éditoriale rédigés par Claude.
              </p>
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--c-rule)' }} />

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)', margin: 0 }}>
                Utilisez l'outil texte vers image ou la bibliothèque d'images pour insérer un fond abstrait élégant.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Livrable B */}
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
              LIVRABLE B · SOCIAL MEDIA
            </span>
            <h2 style={{ fontSize: '1.58rem', fontWeight: 700, color: 'var(--c-ink)' }}>
              Carrousel réseaux sociaux (Instagram / LinkedIn)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.12rem', color: 'var(--c-muted)', flexShrink: 0, marginTop: '2px' }}>
                —
              </span>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.5, color: 'var(--c-ink)', margin: 0 }}>
                Créez un design au format vertical 4:5 (1080 × 1350 px).
              </p>
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--c-rule)' }} />

            <div>
              <p style={{ fontSize: '1.12rem', fontWeight: 600, color: 'var(--c-ink)', marginBottom: '0.65rem' }}>
                Découpez le message en 5 diapositives dynamiques :
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                <div style={{ fontSize: '1.12rem', color: 'var(--c-ink)', lineHeight: 1.4 }}>
                  <em style={{ fontWeight: 600, fontStyle: 'normal', color: 'var(--c-muted)' }}>Slide 1 :</em> L'accroche choc qui arrête le défilement.
                </div>
                <div style={{ fontSize: '1.12rem', color: 'var(--c-ink)', lineHeight: 1.4 }}>
                  <em style={{ fontWeight: 600, fontStyle: 'normal', color: 'var(--c-muted)' }}>Slides 2 à 4 :</em> Les trois temps forts et intervenants emblématiques.
                </div>
                <div style={{ fontSize: '1.12rem', color: 'var(--c-ink)', lineHeight: 1.4 }}>
                  <em style={{ fontWeight: 600, fontStyle: 'normal', color: 'var(--c-muted)' }}>Slide 5 :</em> L'appel à l'action clair (lien d'inscription et dates).
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide13_Workshop3;
