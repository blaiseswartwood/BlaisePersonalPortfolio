import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import HeroSpotlight from './HeroSpotlight';
import MagneticButton from './MagneticButton';
import { cn } from '../utils/classNames';

// Lazy-load the heavy Three.js scene so the headline paints immediately
// instead of waiting on the ~1MB 3D bundle.
const ComputersCanvas = lazy(() => import('./canvas/Computers'));

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Cursor-following glow */}
      <HeroSpotlight />

      {/* Content */}
      <div className={cn(
        "absolute inset-0 top-[120px] max-w-7xl mx-auto",
        styles.paddingX,
        "flex flex-row items-start gap-5 z-10 pointer-events-none"
      )}>
        {/* Vertical Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-5 h-5 rounded-full bg-[#915EFF] pulse-glow" 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-1 sm:h-80 h-40 violet-gradient" 
          />
        </div>

        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm pointer-events-auto"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-white-100 tracking-wide">
              Software Engineer @ Microsoft
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={cn(styles.heroHeadText, "text-white")}
          >
            Hi, I'm <span className="text-shimmer drop-shadow-[0_0_25px_rgba(145,94,255,0.4)]">Blaise Swartwood</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className={cn(styles.heroSubText, "mt-2 text-white-100")}
          >
            Building intelligent products with <br className="sm:block hidden" />
            <span className="text-white font-bold">generative AI</span>, machine learning <br className="sm:block hidden" />
            &amp; data science
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4 pointer-events-auto"
          >
            <MagneticButton href="#projects" className="inline-block bg-gradient-to-r from-[#915EFF] to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(145,94,255,0.4)] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)]">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" className="inline-block bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <ComputersCanvas />
      </Suspense>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pointer-events-none"
      >
        <button onClick={scrollToAbout} className="group pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 group-hover:border-white transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 group-hover:bg-white transition-colors duration-300"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;