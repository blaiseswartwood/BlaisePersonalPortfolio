import React from 'react';
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
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-[#915EFF]" />
        </div>

        {/* Text Content */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915EFF]">Blaise Swartwood</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            A generative AI and <br className="sm:block hidden" />
            data science focused <br className="sm:block hidden" />
            software engineer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* 3D Model */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <button onClick={scrollToAbout} className="group">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 group-hover:bg-white transition-colors"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;