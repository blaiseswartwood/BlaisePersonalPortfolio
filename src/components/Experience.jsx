import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import { styles } from '../styles';
import { experiences } from '../constants/experience';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const timelineAccents = ['#5eead4', '#7dd3fc', '#fb7185', '#fbbf24', '#a7f3d0'];

const HighlightedText = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-cyan-300">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
};

const ExperienceCard = ({ experience, index }) => {
  const isCurrent = experience.date.includes('Current');
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <div
      className={`career-timeline__item career-timeline__item--${side}`}
      style={{ '--timeline-accent': timelineAccents[index % timelineAccents.length] }}
    >
      <motion.div
        className="career-timeline__date"
        initial={{ opacity: 0, x: side === 'left' ? 18 : -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <span>{String(index + 1).padStart(2, '0')}</span>
        <time>
          {experience.date}
        </time>
      </motion.div>

      <motion.div
        className="career-timeline__node"
        initial={{ opacity: 0, scale: 0.55 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.05 }}
      >
        <span style={{ backgroundColor: experience.iconBg }}>
          <img src={experience.icon} alt="" loading="lazy" />
        </span>
      </motion.div>

      <motion.article
        className="career-timeline__card group"
        initial={{ opacity: 0, x: side === 'left' ? -44 : 44, y: 18 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="career-timeline__company">{experience.company_name}</p>
          {isCurrent && (
            <span className="career-timeline__current">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Current
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-[21px] font-semibold text-white sm:text-[24px]">
          {experience.title}
        </h3>
        {experience.subtitle && (
          <p className="mt-1 text-[12px] font-medium text-secondary/75 sm:text-[13px]">
            {experience.subtitle}
          </p>
        )}

        <ul className="mt-5 grid gap-3">
          {experience.points.map((point, pointIndex) => (
            <li
              key={`${experience.company_name}-${pointIndex}`}
              className="relative pl-4 text-[12px] leading-6 text-white-100/78 sm:text-[13px]"
            >
              <span className="career-timeline__bullet" />
              <HighlightedText text={point} />
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 72%', 'end 58%'],
  });
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
        <div className="section-divider" />
      </motion.div>

      <div ref={timelineRef} className="career-timeline mt-16">
        <div className="career-timeline__rail" aria-hidden="true">
          <motion.span style={{ scaleY: timelineProgress }} />
        </div>
        {experiences.slice().reverse().map((experience, index) => (
          <ExperienceCard
            key={`${experience.company_name}-${experience.date}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Experience, 'work', '02');