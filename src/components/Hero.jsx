import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { cn } from '../utils/classNames';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content */}
      <div className={cn(
        "absolute inset-0 top-[120px] max-w-7xl mx-auto",
        styles.paddingX,
        "flex flex-row items-start gap-5"
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
            A software engineer at <br className="sm:block hidden" />
            Microsoft focused on <br className="sm:block hidden" />
            generative AI &amp; data science
          </motion.p>
        </div>
      </div>

      {/* 3D Model */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      >
        <button onClick={scrollToAbout} className="group">
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