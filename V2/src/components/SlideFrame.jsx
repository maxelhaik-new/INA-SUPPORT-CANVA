// SlideFrame — wrapper commun pour toutes les slides
// Gère le cadre sombre, le fond beige/blanc, et l'animation d'entrée

import { motion } from 'framer-motion'
import GrainOverlay from './GrainOverlay'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 35 },
  opacity: { duration: 0.25 },
}

export default function SlideFrame({ children, variant = 'stone', direction = 1, slideKey }) {
  const bgClass = variant === 'white' ? 'white' : ''

  return (
    <div className="slide-outer">
      <motion.div
        key={slideKey}
        className={`slide-frame ${bgClass}`}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={transition}
      >
        <GrainOverlay />
        {children}
      </motion.div>
    </div>
  )
}
