import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#915EFF] via-[#4fc3f7] to-[#00cea8]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
