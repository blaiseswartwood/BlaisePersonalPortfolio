import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../constants/about';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const AnimatedCounter = ({ value, decimal = false, suffix = "" }) => {
  const hasAnimated = useRef(false);
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let animationFrame;
    const renderValue = (current) => {
      const formatted = decimal ? current.toFixed(1) : Math.floor(current);
      element.textContent = `${formatted}${suffix}`;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        if (prefersReducedMotion) {
          renderValue(value);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          renderValue(value * eased);
          if (progress < 1) animationFrame = requestAnimationFrame(tick);
        };

        animationFrame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [decimal, prefersReducedMotion, suffix, value]);

  return (
    <span ref={ref}>{decimal ? '0.0' : '0'}{suffix}</span>
  );
};

const StatCounters = () => {
  return (
    <div className="mt-14 grid max-w-5xl grid-cols-2 border-y border-white/[0.08] md:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.12 * index, duration: 0.6 }}
          className="group relative border-r border-white/[0.07] p-4 text-left transition-colors duration-300 hover:bg-white/[0.025] sm:p-5"
        >
          <div className="mb-4 flex justify-start">
            <span className="material-symbols-outlined text-[20px] text-cyan-300/70 sm:text-[22px]">
              {stat.icon}
            </span>
          </div>
          <div className="mb-2 font-display text-[28px] font-semibold leading-none text-white sm:text-[34px]">
            <AnimatedCounter value={stat.value} decimal={stat.decimal} suffix={stat.suffix} />
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-secondary/65 sm:text-[10px]">
            {stat.label}
          </p>
          {stat.highlights && (
            <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
              {stat.highlights.map((name) => (
                <span key={name} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#915EFF] font-medium">
                  {name}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StatCounters;
