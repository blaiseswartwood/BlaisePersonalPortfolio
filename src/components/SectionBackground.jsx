import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const variants = {
  // Aurora with animated floating orbs
  aurora: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.88, 1], [0, 1, 1, 0]);
    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
    return (
      <>
        {/* Subtle dot pattern */}
        <motion.div className="absolute inset-0" style={{ opacity }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 via-transparent to-[#00cea8]/16" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(145,94,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>
        {/* Animated floating particles */}
        <motion.div className="absolute inset-0" style={{ opacity }}>
          <div className="bg-particles" />
        </motion.div>
        {/* Animated orb 1 — large purple */}
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full bg-orb-drift-1"
          style={{
            opacity,
            x: x1,
            top: '-12%', right: '-8%',
            background: 'radial-gradient(circle, rgba(145,94,255,0.5) 0%, transparent 60%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Animated orb 2 — mid purple */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-orb-drift-2"
          style={{
            opacity,
            x: x2,
            top: '30%', left: '5%',
            background: 'radial-gradient(circle, rgba(145,94,255,0.35) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Animated orb 3 — teal accent */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-orb-drift-3"
          style={{
            opacity,
            bottom: '-5%', left: '0%',
            background: 'radial-gradient(circle, rgba(0,206,168,0.35) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Top edge accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent"
          style={{ opacity }}
        />
      </>
    );
  },

  // Grid pattern with floating orbs and accent line
  grid: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.03, 0.88, 1], [0, 1, 1, 0]);
    const lineWidth = useTransform(scrollYProgress, [0.02, 0.4], ['0%', '100%']);
    const orbX1 = useTransform(scrollYProgress, [0, 1], ['-5%', '10%']);
    const orbX2 = useTransform(scrollYProgress, [0, 1], ['5%', '-8%']);
    const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
    return (
      <>
        <motion.div className="absolute inset-0" style={{ opacity }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(145,94,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(145,94,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-orb-drift-1"
          style={{
            opacity,
            x: orbX1,
            y: orbY,
            top: '5%', left: '-8%',
            background: 'radial-gradient(circle, rgba(145,94,255,0.35) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-orb-drift-3"
          style={{
            opacity,
            x: orbX2,
            bottom: '10%', right: '-5%',
            background: 'radial-gradient(circle, rgba(0,206,168,0.25) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8]"
          style={{ width: lineWidth, opacity }}
        />
      </>
    );
  },

  // Radial pulse from center
  pulse: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.3]);
    return (
      <>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            opacity,
            scale,
            background: 'radial-gradient(circle, rgba(145,94,255,0.35) 0%, rgba(0,206,168,0.12) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div className="absolute inset-0" style={{ opacity }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(145,94,255,0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '35px 35px',
            }}
          />
        </motion.div>
      </>
    );
  },

  // Diagonal lines pattern with movement
  lines: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ['0px', '-60px']);
    return (
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
        <motion.div
          className="absolute inset-[-20px]"
          style={{
            y,
            backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(145,94,255,0.1) 50px, rgba(145,94,255,0.1) 51px)',
          }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full top-[30%] right-[-5%]"
          style={{
            background: 'radial-gradient(circle, rgba(145,94,255,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00cea8]/20 to-transparent" />
      </motion.div>
    );
  },

  // Dot matrix
  dots: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ['0px', '-20px']);
    return (
      <motion.div className="absolute inset-0" style={{ opacity }}>
        <motion.div
          className="absolute inset-0"
          style={{
            y,
            backgroundImage: 'radial-gradient(rgba(145,94,255,0.3) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute w-[500px] h-[500px] rounded-full top-[-10%] left-[-10%]"
          style={{
            background: 'radial-gradient(circle, rgba(0,206,168,0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00cea8]/30 to-transparent" />
      </motion.div>
    );
  },

  // Mesh gradient with animated floating shapes
  mesh: ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0, 1, 1, 0]);
    const x1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
    return (
      <>
        <motion.div className="absolute inset-0" style={{ opacity }}>
          {/* Diagonal line pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(145,94,255,0.07) 60px, rgba(145,94,255,0.07) 61px)',
            }}
          />
        </motion.div>
        {/* Floating particles */}
        <motion.div className="absolute inset-0" style={{ opacity }}>
          <div className="bg-particles" />
        </motion.div>
        {/* Animated orb — purple left */}
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full bg-orb-drift-1"
          style={{
            opacity, x: x1,
            top: '5%', left: '-10%',
            background: 'radial-gradient(circle, rgba(145,94,255,0.45) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Animated orb — teal right */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-orb-drift-3"
          style={{
            opacity, x: x2,
            bottom: '0%', right: '-10%',
            background: 'radial-gradient(circle, rgba(0,206,168,0.35) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Center accent orb */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-orb-drift-2"
          style={{
            opacity,
            top: '40%', left: '35%',
            background: 'radial-gradient(circle, rgba(145,94,255,0.2) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Edge accents */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#915EFF]/25 to-transparent"
          style={{ opacity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00cea8]/25 to-transparent"
          style={{ opacity }}
        />
      </>
    );
  },
};

const SectionBackground = ({ variant = 'aurora', children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const BgComponent = variants[variant];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <BgComponent scrollYProgress={scrollYProgress} />
      </div>
      <div className="relative z-[1]">
        {children}
      </div>}
    </div>
  );
};

export default SectionBackground;
