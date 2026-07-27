import { motion } from 'framer-motion';
import { styles } from '../styles';
import { interests } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const InterestCard = ({ title, description, icon, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.15 * index, 0.6)}
    className="signal-card group flex items-center gap-4 p-5"
    style={{ '--signal-accent': color }}
  >
    <div className="signal-card__icon h-12 w-12">
      <span className="material-symbols-outlined text-[24px]">
        {icon}
      </span>
    </div>
    <div>
      <h4 className="text-white font-semibold text-[16px]">{title}</h4>
      <p className="mt-0.5 text-[13px] text-secondary/78">{description}</p>
    </div>
  </motion.div>
);

const Interests = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond the code</p>
        <h2 className={styles.sectionHeadText}>Life Outside Career</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-2xl leading-[28px]"
      >
        When I&apos;m not engineering software, you can find me in the pool,
        at the gym, or making music. Born and raised in <span className="text-white font-medium">Hawai&apos;i</span>, now based in <span className="text-white font-medium">Sunnyvale, California</span>.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
        {interests.map((interest, index) => (
          <InterestCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Interests, "interests", "08");
