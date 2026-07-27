import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { skillGroups } from '../constants/skills';
import { fadeIn, textVariant } from '../utils/motion';

const groupAccents = ['#5eead4', '#fb7185', '#7dd3fc', '#a7f3d0'];

const SkillsMatrix = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];
  const activeAccent = groupAccents[activeIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical range</p>
        <h2 className={styles.sectionHeadText}>Capabilities</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.7)}
        className="mt-4 max-w-2xl text-[15px] leading-7 text-secondary/80 sm:text-[16px]"
      >
        A practical toolkit for taking intelligent products from model experiments to dependable production systems.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.14, 0.65)}
        className="stack-explorer mt-9"
        style={{ '--stack-accent': activeAccent }}
      >
        <div className="stack-explorer__tabs" role="tablist" aria-label="Technical capability categories">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              role="tab"
              id={`capability-tab-${index}`}
              aria-controls="capability-panel"
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className="stack-explorer__tab"
            >
              {activeIndex === index && (
                <motion.span
                  layoutId="capability-tab-active"
                  className="stack-explorer__tab-active"
                  transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                />
              )}
              <span className="stack-explorer__tab-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="material-symbols-outlined" aria-hidden="true">{group.icon}</span>
              <span>{group.title}</span>
            </button>
          ))}
        </div>

        <div className="stack-explorer__body">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeGroup.title}
              id="capability-panel"
              role="tabpanel"
              aria-labelledby={`capability-tab-${activeIndex}`}
              className="stack-explorer__content"
              initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="stack-explorer__eyebrow">Capability / {String(activeIndex + 1).padStart(2, '0')}</p>
              <h3>{activeGroup.title}</h3>
              <p className="stack-explorer__description">{activeGroup.description}</p>

              <ol className="stack-explorer__skills" aria-label={`${activeGroup.title} skills`}>
                {activeGroup.skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + index * 0.045 }}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{skill}</strong>
                    <i aria-hidden="true" />
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>

          <div className="stack-explorer__visual" aria-hidden="true">
            <div className="stack-orbit stack-orbit--outer" />
            <div className="stack-orbit stack-orbit--middle" />
            <div className="stack-orbit stack-orbit--inner" />
            <div className="stack-explorer__sweep" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeGroup.icon}
                className="stack-explorer__core"
                initial={{ opacity: 0, scale: 0.72, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.78, rotate: 18 }}
                transition={{ type: 'spring', stiffness: 230, damping: 20 }}
              >
                <span className="material-symbols-outlined">{activeGroup.icon}</span>
                <small>{activeGroup.skills.length} tools</small>
              </motion.div>
            </AnimatePresence>
            {activeGroup.skills.slice(0, 4).map((skill, index) => (
              <motion.span
                key={skill}
                className={`stack-explorer__satellite stack-explorer__satellite--${index + 1}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.14 + index * 0.07 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="stack-explorer__status" aria-hidden="true">
          <span><i /> Production-minded</span>
          <span>Stack signal / active</span>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(SkillsMatrix, "skills", "03");
