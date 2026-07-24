import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { education } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const EducationCard = ({ item, index, isExpanded, onToggle }) => {
  const isHighSchool = item.school.includes('Mililani');
  const accent = isHighSchool ? '#d4a843' : '#915eff';
  const detailsId = `education-details-${index}`;

  return (
    <motion.article
      variants={fadeIn('up', 'spring', 0.12 * index, 0.7)}
      className="education-card flex flex-col"
      style={{ '--education-accent': accent }}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5 sm:h-20 sm:w-20">
            <img
              src={item.iconfront}
              alt=""
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/55 sm:text-[11px]">
              {item.date}
            </p>
            <p className="mt-1 text-[13px] font-semibold text-cyan-200/80 sm:text-[14px]">
              {item.school}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <span className="font-display text-[22px] font-semibold text-white sm:text-[26px]">{item.GPA}</span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-secondary/50">GPA</span>
        </div>
      </div>

      <h3 className="mt-7 max-w-[420px] font-display text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
        {item.titlefront}
      </h3>

      <div className="mt-5 flex min-h-[28px] flex-wrap gap-2">
        {item.minors?.map((minor) => (
          <span key={minor} className="rounded-full border border-[#915EFF]/20 bg-[#915EFF]/[0.06] px-2.5 py-1 text-[10px] font-medium text-[#c6afff]">
            Minor: {minor}
          </span>
        ))}
        {item.highlights?.map((highlight) => (
          <span key={highlight} className="rounded-full border border-[#d4a843]/25 bg-[#d4a843]/[0.06] px-2.5 py-1 text-[10px] font-medium text-[#e1c36f]">
            {highlight}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/50">
          {item.courseworkLabel || 'Relevant coursework'}
        </span>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          aria-label={`${isExpanded ? 'Hide' : 'Show'} coursework for ${item.school}`}
          title={`${isExpanded ? 'Hide' : 'Show'} coursework`}
          className="education-card__toggle"
        >
          <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={detailsId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 pt-5">
              {item.points.map((course) => (
                <span key={course} className="rounded-full border border-white/[0.07] bg-black-200/60 px-2.5 py-1 text-[10px] leading-tight text-secondary/75 sm:text-[11px]">
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const EducationLedger = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards((current) => (
      current.includes(index)
        ? current.filter((itemIndex) => itemIndex !== index)
        : [...current, index]
    ));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <EducationCard
            key={item.school}
            item={item}
            index={index}
            isExpanded={expandedCards.includes(index)}
            onToggle={() => toggleCard(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(EducationLedger, '', '04');