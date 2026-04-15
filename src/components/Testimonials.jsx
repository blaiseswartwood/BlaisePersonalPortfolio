import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { textVariant } from '../utils/motion';

const TestimonialCard = ({ quote, name, title, company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", delay: 0.2 * index, duration: 0.8 }}
      className="flex-1 min-w-[280px] max-w-[420px]"
    >
      <div className="h-full p-6 sm:p-8 rounded-2xl bg-tertiary/80 border border-[#915EFF]/10 
        hover:border-[#915EFF]/25 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(145,94,255,0.1)] flex flex-col">
        {/* Quote icon */}
        <span className="text-[#915EFF] text-[40px] sm:text-[48px] leading-none font-serif mb-2">"</span>
        
        {/* Quote text */}
        <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed italic flex-1">
          {quote}
        </p>

        {/* Author */}
        <div className="mt-6 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#915EFF] text-[18px]">person</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[14px]">{name}</p>
              <p className="text-secondary text-[11px] sm:text-[12px]">{title}</p>
              <p className="text-[#915EFF]/70 text-[11px] sm:text-[12px]">{company}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
