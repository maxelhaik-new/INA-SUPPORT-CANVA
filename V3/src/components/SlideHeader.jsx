import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './motion';

/**
 * SlideHeader — rail supérieur avec animation d'entrée
 */
const SlideHeader = ({
  badge,
  meta = 'INA CAMPUS × GETAI',
  titleBold,
  titleLight,
  dark = false,
}) => {
  const mutedColor = dark ? 'rgba(246,245,242,0.4)' : 'var(--c-muted)';
  const inkColor   = dark ? '#F6F5F2'                 : 'var(--c-ink)';

  return (
    <motion.header
      variants={itemVariants}
      style={{ marginBottom: '1.25rem', flexShrink: 0 }}
    >
      {/* Top rail */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.125rem' }}>
        {badge ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: '1.5rem', height: '1.5rem', borderRadius: '9999px',
              border: `1px solid ${dark ? 'rgba(246,245,242,0.25)' : 'var(--c-rule)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.85rem', color: mutedColor, fontFamily: 'var(--font-mono)', flexShrink: 0,
            }}>↘</span>
            <span style={{
              border: `1px solid ${dark ? 'rgba(246,245,242,0.2)' : 'var(--c-rule)'}`,
              borderRadius: '9999px', padding: '0.225rem 0.75rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', color: mutedColor,
            }}>{badge}</span>
          </div>
        ) : <div />}

        {meta && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', color: mutedColor,
          }}>{meta}</span>
        )}
      </div>

      {/* Duotone title — display scale */}
      {(titleBold || titleLight) && (
        <h1 style={{ fontSize: '3rem', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
          {titleBold && (
            <span style={{ fontWeight: 800, color: inkColor }}>{titleBold}</span>
          )}
          {titleLight && (
            <span style={{ fontWeight: 300, color: mutedColor, marginLeft: '0.55rem' }}>{titleLight}</span>
          )}
        </h1>
      )}
    </motion.header>
  );
};

export default SlideHeader;
