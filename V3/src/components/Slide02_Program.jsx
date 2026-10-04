import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 02 — Programme de l'après-midi
 * Cascade : SlideHeader -> Table du déroulé
 */
const Slide02_Program = () => {
  const schedule = [
    { time: '14h00', module: 'Parcours, tour de table & cadre éthique', tools: 'Échanges & Débat', deliverable: 'Diagnostic des besoins & Lignes rouges' },
    { time: '14h30', module: 'Prompting moderne & Fichiers exploitables', tools: 'Claude (Team)', deliverable: 'Note de cadrage Word + Budget Excel' },
    { time: '15h15', module: 'Pause déconnexion', tools: null, deliverable: null, pause: true },
    { time: '15h30', module: 'Présentations & Pitchs express', tools: 'Gamma ➔ PowerPoint', deliverable: 'Deck de pitch (8 slides) exporté en .pptx' },
    { time: '16h05', module: 'Du texte à la maquette visuelle', tools: 'Canva (Magic Studio)', deliverable: 'Affiche/Flyer A5 + Carrousel réseaux' },
    { time: '16h50', module: 'Démo live « effet wow » & Clôture', tools: 'Whisper local & Agents', deliverable: 'Boîte à outils & Méthode de veille' },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="LE DÉROULÉ · 14H00 À 17H30"
        meta="INA CAMPUS"
        titleBold="Quatre livrables concrets"
        titleLight="en 3h30"
      />

      <motion.div
        variants={itemVariants}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '2rem',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '12%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '23%' }} />
            <col style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--c-ink)' }}>
              {['Horaire', 'Module', 'Outils mobilisés', 'Livrable opérationnel'].map((h) => (
                <th
                  key={h}
                  style={{
                    paddingBottom: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
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
                padding: '0.9rem 0',
                borderBottom: isLast ? 'none' : '1px solid var(--c-rule)',
                fontSize: '1.12rem',
                fontWeight: item.pause ? 400 : 500,
                fontStyle: item.pause ? 'italic' : 'normal',
                color: item.pause ? 'var(--c-muted)' : 'var(--c-ink)',
                verticalAlign: 'middle',
              };
              return (
                <tr key={idx}>
                  <td style={{ ...tdBase, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.12rem' }}>
                    {item.time}
                  </td>
                  <td style={tdBase}>{item.module}</td>
                  <td style={{ ...tdBase, color: 'var(--c-muted)', fontFamily: 'var(--font-mono)', fontSize: '1.12rem' }}>
                    {item.tools || '—'}
                  </td>
                  <td style={{ ...tdBase, color: item.deliverable ? 'var(--c-ink)' : 'var(--c-faint)', fontWeight: 600 }}>
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

export default Slide02_Program;
