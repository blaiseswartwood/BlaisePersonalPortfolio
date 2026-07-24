import { useRef, useEffect } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * A soft radial glow that follows the cursor across the hero.
 * Updates are written straight to the DOM via CSS variables on each animation
 * frame, so there are no React re-renders and only a single composited layer.
 * Disabled for reduced-motion users and coarse (touch) pointers.
 */
const HeroSpotlight = () => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    const apply = () => {
      raf = 0;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2] hidden md:block transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(560px circle at var(--x, 50%) var(--y, 33%), rgba(94,234,212,0.12), rgba(125,211,252,0.06) 42%, transparent 68%)',
      }}
    />
  );
};

export default HeroSpotlight;
