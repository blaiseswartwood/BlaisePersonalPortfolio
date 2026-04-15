import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../constants';

const AnimatedCounter = ({ value, decimal = false, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimal, hasAnimated]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const StatCounters = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15 * index, duration: 0.6 }}
          className="relative group text-center p-5 sm:p-6 rounded-2xl bg-tertiary/60 border border-[#915EFF]/10
            hover:border-[#915EFF]/30 transition-all duration-300"
        >
          <div className="flex justify-center mb-3">
            <span className="material-symbols-outlined text-[#915EFF] text-[28px] sm:text-[32px]">
              {stat.icon}
            </span>
          </div>
          <div className="text-white font-black text-[32px] sm:text-[40px] leading-none mb-1">
            <AnimatedCounter value={stat.value} decimal={stat.decimal} suffix={stat.suffix} />
          </div>
          <p className="text-secondary text-[12px] sm:text-[14px] font-medium tracking-wide uppercase">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatCounters;
