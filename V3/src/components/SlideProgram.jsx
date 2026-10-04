import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 02 — Le programme (16:9)
 * Cascade : Titre -> Table du programme
 */
const SlideProgram = () => {
  const schedule = [
    { time: '14h00', seq: 'Ouverture et tour de table', deliverable: null },
    { time: '14h10', seq: 'Prendre en main Claude', deliverable: 'Premiers prompts' },
    { time: '14h35', seq: 'Sécurité, réglages, connecteurs', deliverable: 'Trois comptes réglés et reliés' },
    { time: '14h55', seq: 'Analyser un vrai dossier', deliverable: 'Les cinq points de contrôle' },
    { time: '15h10', seq: 'Fil rouge 1 et 2 : le brief, le pitch', deliverable: 'Synthèse du brief, pitch' },
    { time: '15h30', seq: 'Fil rouge 3 : le dossier', deliverable: 'Fichier Word' },
    { time: '15h50', seq: 'Pause', deliverable: null, pause: true },
    { time: '16h00', seq: 'Fil rouge 4 : budget et planning', deliverable: 'Fichier Excel' },
    { time: '16h20', seq: 'Fil rouge 5 : les visuels', deliverable: 'Affiche et miniature Canva' },
    { time: '16h45', seq: 'Fil rouge 6 : le deck', deliverable: 'Deck Gamma ou PowerPoint' },
    { time: '17h05', seq: 'Fil rouge 7 : contrôle et envoi', deliverable: "Dossier relu, mail d'envoi" },
    { time: '17h20', seq: 'Coûts, lundi, clôture', deliverable: null },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="L'APRÈS-MIDI"
        titleBold="Le programme"
        titleLight="déroulé horaire & livrables"
      />

      <motion.div
        variants={itemVariants}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingBottom: '2.5rem',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '14%' }} />
            <col style={{ width: '56%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--c-ink)' }}>
              {['Horaire', 'Séquence', 'Livrable'].map((h) => (
                <th
                  key={h}
                  style={{
                    paddingBottom: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--c-muted)',
                    fontWeight: 700,
                    textAlign: 'left',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => {
              const isLast = idx === schedule.length - 1;
              const tdBase = {
                padding: '0.38rem 0',
                borderBottom: isLast ? 'none' : '1px solid var(--c-rule)',
                fontSize: '0.85rem',
                fontWeight: item.pause ? 400 : 500,
                fontStyle: item.pause ? 'italic' : 'normal',
                color: item.pause ? 'var(--c-muted)' : 'var(--c-ink)',
                verticalAlign: 'middle',
              };
              return (
                <tr key={idx}>
                  <td style={{ ...tdBase, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.825rem' }}>
                    {item.time}
                  </td>
                  <td style={tdBase}>{item.seq}</td>
                  <td style={{ ...tdBase, color: item.deliverable ? 'var(--c-ink)' : 'var(--c-faint)' }}>
                    {item.deliverable || '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </Slide>
  );
};

export default SlideProgram;
