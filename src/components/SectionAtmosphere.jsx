import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const SectionAtmosphere = ({ variant = 'grid', children }) => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: '220px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`section-atmosphere section-atmosphere--${variant} relative`}>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className={`section-atmosphere__pattern section-atmosphere__pattern--${variant}`}
          initial={false}
          animate={isActive && !prefersReducedMotion
            ? { opacity: [0.27, 0.38, 0.27], y: [-8, 10, -8], x: [0, 4, 0] }
            : { opacity: isActive ? 0.32 : 0, y: 0, x: 0 }}
          transition={isActive && !prefersReducedMotion
            ? { duration: 16, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.45 }}
        />
        {!prefersReducedMotion && (
          <motion.div
            className="section-atmosphere__trace"
            initial={false}
            animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default SectionAtmosphere;