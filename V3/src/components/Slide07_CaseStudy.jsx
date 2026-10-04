import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 07 — Le Cas d'Étude Fil Rouge
 * Cascade : Titre -> Carte Brief
 */
const Slide07_CaseStudy = () => {
  return (
    <Slide>
      <SlideHeader
        badge="CAS PRATIQUE COMMUNICATION"
        meta="INA CAMPUS"
        titleBold="Lancement des"
        titleLight="« Rencontres Créatives INA 2027 »"
      />

      <motion.div
        variants={itemVariants}
        style={{
          flex: 1,
          backgroundColor: '#FAFAF8',
          border: '1px solid var(--c-rule)',
          borderRadius: '16px',
          padding: '1.28rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--c-rule)', paddingBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--c-muted)',
            }}
          >
            LE BRIEF REÇU DE LA DIRECTION
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--c-faint)',
            }}
          >
            FIL ROUGE DE LA FORMATION
          </span>
        </div>

        <p
          style={{
            fontSize: '1.37rem',
            color: 'var(--c-ink)',
            lineHeight: 1.6,
            fontWeight: 400,
            letterSpacing: '-0.015em',
            margin: 'auto 0',
            padding: '1rem 0',
          }}
        >
          Bonjour à l'équipe. L'INA lance à l'automne 2027 les Rencontres Créatives de l'Audiovisuel et des Nouveaux Médias. L'objectif est de rassembler 400 professionnels, créateurs indépendants et étudiants autour des mutations de l'image et du récit numérique. Nous avons besoin pour vendredi d'une note de cadrage pour notre direction, d'une estimation prévisionnelle de budget et de planning, d'une présentation de 8 slides pour nos partenaires culturels, et d'une première piste de visuels pour nos réseaux sociaux. Le ton doit être audacieux, contemporain et fédérateur, sans tomber dans le jargon institutionnel austère.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', borderTop: '1px solid var(--c-rule)', paddingTop: '1.25rem' }}>
          {[
            { label: 'Livrable 1', text: 'Note de cadrage Word (.docx)' },
            { label: 'Livrable 2', text: 'Budget & Planning Excel (.xlsx)' },
            { label: 'Livrable 3', text: 'Deck de pitch Gamma (8 slides)' },
            { label: 'Livrable 4', text: 'Affiche & Carrousel Canva' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--c-muted)', fontWeight: 700 }}>
                {item.label}
              </span>
              <span style={{ fontSize: '1.1rem', color: 'var(--c-ink)', fontWeight: 600 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
};

export default Slide07_CaseStudy;
