import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#915EFF] text-white flex items-center justify-center shadow-lg hover:bg-[#7c4dff] transition-colors duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.4)]"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-[20px]">keyboard_arrow_up</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
