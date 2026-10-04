import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants } from './motion';

const Slide = ({ children, dark = false, className = '', style = {} }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--slide-py) var(--slide-px)',
        backgroundColor: dark ? 'var(--c-dark)' : 'var(--c-bg)',
        color: dark ? '#F6F5F2' : 'var(--c-ink)',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
