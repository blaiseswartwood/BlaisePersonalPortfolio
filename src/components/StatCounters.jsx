import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../constants';

const AnimatedCounter = ({ value, decimal = false, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [value, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const StatCounters = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.12 * index, duration: 0.6 }}
          className="relative group text-center p-4 sm:p-5 rounded-2xl bg-tertiary/60 border border-[#915EFF]/10
            hover:border-[#915EFF]/30 transition-all duration-300"
        >
          <div className="flex justify-center mb-2">
            <span className="material-symbols-outlined text-[#915EFF] text-[24px] sm:text-[28px]">
              {stat.icon}
            </span>
          </div>
          <div className="text-white font-black text-[28px] sm:text-[36px] leading-none mb-1">
            <AnimatedCounter value={stat.value} decimal={stat.decimal} suffix={stat.suffix} />
          </div>
          <p className="text-secondary text-[11px] sm:text-[13px] font-medium tracking-wide uppercase">
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
