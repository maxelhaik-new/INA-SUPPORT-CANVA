import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const Presentation = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: 'min(1280px, 96vw, calc(93vh * 16 / 9))',
        aspectRatio: '16 / 9',
        backgroundColor: 'var(--c-bg)',
        boxShadow: '0 24px 80px -12px rgba(0,0,0,0.28)',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Slides area */}
      <div style={{ position: 'relative', flex: 1, width: '100%', height: '100%', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {slides.map((SlideComponent, index) =>
            index === currentSlide && <SlideComponent key={index} />
          )}
        </AnimatePresence>
      </div>

      {/* Navigation pill — bas droite, dans la slide */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          right: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          zIndex: 30,
          backgroundColor: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(8px)',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          border: '1px solid var(--c-rule)',
        }}
      >
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          style={{
            width: '1.25rem', height: '1.25rem', borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.65rem', color: 'var(--c-ink)',
            background: 'none', border: 'none', cursor: 'pointer',
            opacity: currentSlide === 0 ? 0.2 : 1,
          }}
        >←</button>

        <span style={{ fontWeight: 600, fontSize: '0.6rem', color: 'var(--c-ink)', padding: '0 0.25rem', letterSpacing: '0.05em' }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          style={{
            width: '1.25rem', height: '1.25rem', borderRadius: '9999px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.65rem', color: 'var(--c-ink)',
            background: 'none', border: 'none', cursor: 'pointer',
            opacity: currentSlide === slides.length - 1 ? 0.2 : 1,
          }}
        >→</button>
      </div>
    </div>
  );
};

export default Presentation;
