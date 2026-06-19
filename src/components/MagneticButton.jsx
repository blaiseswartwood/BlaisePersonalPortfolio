import { useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * Anchor button that subtly drifts toward the cursor (magnetic effect).
 * Transform is written straight to the DOM (no re-renders) and a short
 * transition gives it an elastic feel. Disabled for reduced-motion users.
 */
const MagneticButton = ({ children, className, strength = 0.35, ...props }) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </a>
  );
};

export default MagneticButton;
