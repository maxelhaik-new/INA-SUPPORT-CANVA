// App.jsx — Point d'entrée : assemble les slides, gère la navigation

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import SlideNav from './components/SlideNav'
import Slide01 from './components/Slide01'
import Slide02 from './components/Slide02'
import Slide03 from './components/Slide03'
import Slide04 from './components/Slide04'
import Slide05 from './components/Slide05'
import Slide06 from './components/Slide06'
import Slide07 from './components/Slide07'
import Slide08 from './components/Slide08'
import Slide09 from './components/Slide09'
import Slide10 from './components/Slide10'
import Slide11 from './components/Slide11'
import Slide12 from './components/Slide12'
import Slide13 from './components/Slide13'
import Slide14 from './components/Slide14'

const SLIDES = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < SLIDES.length - 1) {
      setDirection(1)
      setCurrent((c) => c + 1)
    }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1)
      setCurrent((c) => c - 1)
    }
  }, [current])

  // Navigation clavier
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const CurrentSlide = SLIDES[current]

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'var(--color-bg-outer)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <CurrentSlide
          key={current}
          direction={direction}
          slideKey={current}
        />
      </AnimatePresence>

      <SlideNav
        current={current}
        total={SLIDES.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  )
}
