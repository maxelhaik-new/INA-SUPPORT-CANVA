import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 09 — Pause déconnexion
 * Respirer et visualiser l'étape franchie avant la phase visuelle (Gamma & Canva)
 */
const Slide09_Break = () => {
  return (
    <Slide dark>
      <SlideHeader
        badge="RESPIRATION · 15 MIN"
        meta="INA CAMPUS"
        titleBold="Pause"
        titleLight="déconnexion"
        dark
      />

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
          paddingBottom: '1.5rem',
        }}
      >
        {/* Étape franchie */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#34D399',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(246,245,242,0.6)',
                }}
              >
                MI-PARCOURS ATTEINT
              </span>
            </div>

            <h2
              style={{
                fontSize: '2.1rem',
                fontWeight: 600,
                color: '#F6F5F2',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
              }}
            >
              Vos deux premiers livrables (.docx et .xlsx) sont prêts sur votre poste.
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <div
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#60A5FA', display: 'block', marginBottom: '0.25rem' }}>
                WORD · .DOCX
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#F6F5F2' }}>
                Note de cadrage
              </span>
            </div>
            <div
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#34D399', display: 'block', marginBottom: '0.25rem' }}>
                EXCEL · .XLSX
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#F6F5F2' }}>
                Budget & Planning
              </span>
            </div>
          </div>
        </motion.div>

        {/* Prochaine étape */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(246,245,242,0.4)',
                }}
              >
                AU RETOUR
              </span>
            </div>

            <p
              style={{
                fontSize: '1.7rem',
                fontWeight: 400,
                color: 'rgba(246,245,242,0.85)',
                lineHeight: 1.45,
              }}
            >
              Prochaine étape : donner vie visuellement à vos idées avec <strong style={{ color: '#F6F5F2', fontWeight: 700 }}>Gamma</strong> et <strong style={{ color: '#F6F5F2', fontWeight: 700 }}>Canva</strong>.
            </p>
          </div>

          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(246,245,242,0.5)', textTransform: 'uppercase' }}>
              Durée de la pause
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#F6F5F2',
                lineHeight: 1,
              }}
            >
              15:00
            </span>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide09_Break;
