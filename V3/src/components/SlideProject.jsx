import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import SlideHeader from './SlideHeader';
import { itemVariants } from './motion';

/**
 * Slide 04 — Un projet, du brief à l'envoi
 * Cascade : Titre -> Table des étapes -> Carte Verdalis
 */
const SlideProject = () => {
  const steps = [
    { num: '01', phase: 'Le brief', tool: 'Claude' },
    { num: '02', phase: 'Le pitch', tool: 'Claude' },
    { num: '03', phase: 'Le dossier', tool: 'Word' },
    { num: '04', phase: 'Le budget', tool: 'Excel' },
    { num: '05', phase: 'Les visuels', tool: 'Canva' },
    { num: '06', phase: 'Le deck', tool: 'Gamma ou PowerPoint' },
    { num: '07', phase: "L'envoi", tool: 'Contrôle et mail' },
  ];

  return (
    <Slide>
      <SlideHeader
        badge="LE FIL ROUGE"
        titleBold="Un projet,"
        titleLight="du brief à l'envoi"
      />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: '1.5rem',
        }}
      >
        {/* 2. Table 7 étapes */}
        <motion.div variants={itemVariants}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '60%' }} />
              <col style={{ width: '30%' }} />
            </colgroup>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--c-ink)' }}>
                {['#', 'Phase', 'Outil / Livrable'].map((h) => (
                  <th
                    key={h}
                    style={{
                      paddingBottom: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
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
              {steps.map((item, idx) => {
                const isLast = idx === steps.length - 1;
                const tdBase = {
                  padding: '0.8rem 0',
                  borderBottom: isLast ? 'none' : '1px solid var(--c-rule)',
                  fontSize: '1.05rem',
                  color: 'var(--c-ink)',
                  verticalAlign: 'middle',
                };
                return (
                  <tr key={idx}>
                    <td
                      style={{
                        ...tdBase,
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: 'var(--c-muted)',
                        fontSize: '0.95rem',
                      }}
                    >
                      {item.num}
                    </td>
                    <td style={{ ...tdBase, fontWeight: 600 }}>{item.phase}</td>
                    <td
                      style={{
                        ...tdBase,
                        color: 'var(--c-muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.tool}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* 3. Carte Verdalis */}
        <motion.div
          variants={itemVariants}
          style={{
            backgroundColor: '#FAFAF8',
            border: '1px solid var(--c-rule)',
            borderRadius: '12px',
            padding: '1.25rem 2rem',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--c-ink)',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            LE PROJET
          </span>
          <p style={{ fontSize: '1.05rem', color: 'var(--c-ink)', lineHeight: 1.5, fontWeight: 400 }}>
            <strong>Verdalis</strong>, marque fictive de vélos électriques, veut une série documentaire
            de brand content. Vous êtes le pôle développement.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SlideProject;
