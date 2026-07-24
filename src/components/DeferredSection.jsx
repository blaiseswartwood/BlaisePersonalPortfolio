import { useEffect, useRef, useState } from 'react';

const DeferredSection = ({
  id,
  children,
  minHeight = '70vh',
  rootMargin = '400px 0px',
}) => {
  const sectionRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isReady) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsReady(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsReady(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isReady, rootMargin]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className="portfolio-section relative"
      style={{ minHeight }}
    >
      {isReady ? children : null}
    </div>
  );
};

export default DeferredSection;