import { motion } from 'framer-motion';
import { styles } from '../styles';
import { volunteering } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const VolunteerCard = ({ role, organization, date, description, icon, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.15 * index, 0.6)}
    className="relative p-6 rounded-2xl bg-tertiary/50 border border-white/5
      hover:border-[#915EFF]/20 transition-all duration-300 group"
  >
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <span className="material-symbols-outlined text-[24px]" style={{ color }}>
          {icon}
        </span>
      </div>
      <div className="min-w-0">
        <h4 className="text-white font-semibold text-[16px] sm:text-[17px]">{role}</h4>
        <p className="text-[#915EFF] text-[13px] sm:text-[14px] font-medium mt-0.5">{organization}</p>
        <p className="text-secondary/60 text-[11px] sm:text-[12px] mt-0.5">{date}</p>
        <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed mt-3">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Volunteering = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giving back</p>
        <h2 className={styles.sectionHeadText}>Leadership & Volunteering</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {volunteering.map((item, index) => (
          <VolunteerCard key={item.role} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Volunteering, "volunteering");
