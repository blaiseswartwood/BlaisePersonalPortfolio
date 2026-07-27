import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { resumeLinks } from '../constants/data';
import HeroSpotlight from './HeroSpotlight';
import { cn } from '../utils/classNames';

// Lazy-load the heavy Three.js scene so the headline paints immediately
// instead of waiting on the ~1MB 3D bundle.
const ComputersCanvas = lazy(() => import('./canvas/Computers'));

const Hero = () => {
  const [isSceneReady, setIsSceneReady] = useState(false);

  useEffect(() => {
    let idleCallback;
    let timeout;

    const scheduleScene = () => {
      if ('requestIdleCallback' in window) {
        idleCallback = window.requestIdleCallback(
          () => setIsSceneReady(true),
          { timeout: 1800 }
        );
      } else {
        timeout = window.setTimeout(() => setIsSceneReady(true), 600);
      }
    };

    if (document.readyState === 'complete') {
      scheduleScene();
    } else {
      window.addEventListener('load', scheduleScene, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleScene);
      if (idleCallback) window.cancelIdleCallback(idleCallback);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="hero-stage relative mx-auto min-h-[100svh] w-full overflow-hidden">
      <HeroSpotlight />
      <div className="hero-frame" aria-hidden="true" />

      <div className={cn(
        'hero-content pointer-events-none absolute inset-x-0 z-10 mx-auto max-w-7xl',
        styles.paddingX,
      )}>
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hero-kicker mb-5 inline-flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.75)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[12px]">
              Software Engineer / Google
            </span>
          </motion.div>

          <motion.h1
            aria-label="Blaise Swartwood"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={styles.heroHeadText}
          >
            <span className="block text-white">Blaise</span>
            <span className="hero-name-accent block">Swartwood.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className={cn(styles.heroSubText, 'mt-6 max-w-[570px] text-white/80')}
          >
            I build reliable cloud systems and intelligent products at the intersection of
            <span className="font-semibold text-white"> generative AI, machine learning, and infrastructure.</span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="hero-capabilities mt-9 grid max-w-[570px] grid-cols-3"
          >
            {['Agentic AI', 'Cloud systems', 'Applied ML'].map((capability, index) => (
              <li key={capability}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {capability}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
            className="hero-actions pointer-events-auto mt-7 flex flex-wrap gap-3"
          >
            <a href="#work" className="hero-action hero-action--primary">
              Experience
              <span className="material-symbols-outlined" aria-hidden="true">south</span>
            </a>
            <a
              href={resumeLinks.desktop}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-action"
            >
              Resume
              <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
            </a>
          </motion.div>
        </div>
      </div>

      {isSceneReady && (
        <div className="hero-scene-enter absolute inset-0">
          <div className="hero-model">
            <Suspense fallback={null}>
              <ComputersCanvas />
            </Suspense>
          </div>
        </div>
      )}

      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        onClick={scrollToAbout}
        className="hero-scroll-button"
        aria-label="Go to About section"
      >
        <span className="material-symbols-outlined text-[20px]">south</span>
      </motion.button>
    </section>
  );
};

export default Hero;