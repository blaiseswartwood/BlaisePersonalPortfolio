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
        <div
          className={`section-atmosphere__pattern section-atmosphere__pattern--${variant} ${isActive ? 'section-atmosphere__pattern--active' : ''}`}
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