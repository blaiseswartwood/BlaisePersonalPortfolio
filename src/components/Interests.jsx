import { motion } from 'framer-motion';
import { styles } from '../styles';
import { interests } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const InterestCard = ({ title, description, icon, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.15 * index, 0.6)}
    className="flex items-center gap-4 p-5 rounded-2xl bg-tertiary/50 border border-white/5
      hover:border-[#915EFF]/20 transition-all duration-300 group"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
    >
      <span className="material-symbols-outlined text-[24px]" style={{ color }}>
        {icon}
      </span>
    </div>
    <div>
      <h4 className="text-white font-semibold text-[16px]">{title}</h4>
      <p className="text-secondary text-[13px] mt-0.5">{description}</p>
    </div>
  </motion.div>
);

const Interests = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond the code</p>
        <h2 className={styles.sectionHeadText}>Life Outside Career.</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-2xl leading-[28px]"
      >
        When I'm not engineering software, you can find me in the pool, 
        on a trail, or making music.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
        {interests.map((interest, index) => (
          <InterestCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Interests, "interests");
