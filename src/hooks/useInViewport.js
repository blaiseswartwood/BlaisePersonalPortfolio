import { useState, useEffect, useRef } from 'react';

/**
 * Observe an element and report whether it is currently within the viewport.
 * Used to pause expensive WebGL render loops while a canvas is off-screen.
 *
 * @param {string} rootMargin - margin around the root to grow/shrink the trigger area
 * @param {number} threshold  - intersection ratio required to be considered visible
 * @returns {[React.RefObject, boolean]} ref to attach, and the in-view flag
 */
const useInViewport = (rootMargin = '0px', threshold = 0) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView];
};

export default useInViewport;
