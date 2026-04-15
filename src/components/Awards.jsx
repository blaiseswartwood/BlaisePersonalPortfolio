import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { awards } from '../constants';
import { textVariant } from '../utils/motion';

const AwardCard = ({ title, event, date, description, icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", delay: 0.15 * index, duration: 0.8 }}
      className="relative group"
    >
      <div className="flex gap-4 sm:gap-6 items-start p-5 sm:p-6 rounded-2xl bg-tertiary/80 border border-[#915EFF]/10 
        hover:border-[#915EFF]/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(145,94,255,0.12)]">
        {/* Icon */}
        <div 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 
            transition-transform duration-300 group-hover:scale-110"
          style={{ 
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
            border: `1px solid ${color}50`,
          }}
        >
          <span className="material-symbols-outlined text-[28px] sm:text-[32px]" style={{ color }}>
            {icon}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-white font-bold text-[16px] sm:text-[18px] leading-tight">{title}</h3>
            <span className="text-[#915EFF] text-[12px] sm:text-[13px] font-medium whitespace-nowrap">{date}</span>
          </div>
          <p className="text-[#915EFF]/80 text-[13px] sm:text-[14px] font-medium mb-2">{event}</p>
          <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Awards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition</p>
        <h2 className={styles.sectionHeadText}>Awards & Achievements</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-12 flex flex-col gap-5 max-w-4xl">
        {awards.map((award, index) => (
          <AwardCard key={index} index={index} {...award} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, "awards");
