import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { awards } from '../constants';
import { textVariant } from '../utils/motion';

const AwardCard = ({ title, event, date, description, icon, color, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
      className="signal-card signal-card--horizontal group flex items-start gap-4 p-5 sm:gap-6 sm:p-6"
      style={{ '--signal-accent': color }}
    >
      <div className="signal-card__icon h-14 w-14 sm:h-16 sm:w-16">
        <span className="material-symbols-outlined text-[28px] sm:text-[32px]">{icon}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-[16px] font-bold leading-tight text-white sm:text-[18px]">{title}</h3>
          <span className="signal-card__meta whitespace-nowrap text-[11px] font-semibold sm:text-[12px]">{date}</span>
        </div>
        <p className="signal-card__meta mb-2 text-[12px] font-semibold sm:text-[13px]">{event}</p>
        <p className="text-[13px] leading-relaxed text-secondary/80 sm:text-[14px]">{description}</p>
      </div>
    </motion.article>
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

export default SectionWrapper(Awards, "awards", "07");
