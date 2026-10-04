import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './motion';

/**
 * PromptCard — carte cliquable : un clic copie `text` dans le presse-papier.
 * Icône discrète en haut à droite (copie -> coche 1,5 s). Aucun texte, aucune modale.
 */
const CopyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="12" height="12" rx="2.5" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const PromptCard = ({ text, style = {}, children }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      variants={itemVariants}
      onClick={copy}
      whileTap={{ scale: 0.995 }}
      style={{ position: 'relative', cursor: 'pointer', ...style }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: copied ? 'var(--c-ink)' : 'var(--c-faint)',
          transition: 'color 0.3s',
          display: 'flex',
        }}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
      {children}
    </motion.div>
  );
};

export default PromptCard;
