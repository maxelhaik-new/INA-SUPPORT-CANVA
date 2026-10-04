import React from 'react';

const PillBadge = ({ label, arrow = '↘', dark = false }) => {
  return (
    <div className="inline-flex items-center gap-1.5 select-none">
      {arrow && (
        <span 
          className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-mono leading-none ${
            dark 
              ? 'border-[var(--color-border-dark)] text-[var(--color-text-inverse)] bg-[var(--color-bg-dark)]' 
              : 'border-[var(--color-border)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)]'
          }`}
        >
          {arrow}
        </span>
      )}
      <span 
        className={`px-3 py-0.5 rounded-full border font-mono text-[10px] tracking-widest uppercase font-semibold leading-relaxed ${
          dark 
            ? 'border-[var(--color-border-dark)] text-[var(--color-text-inverse)] bg-[var(--color-bg-dark)]' 
            : 'border-[var(--color-border)] text-[var(--color-text-primary)] bg-[var(--color-bg-surface)]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default PillBadge;
