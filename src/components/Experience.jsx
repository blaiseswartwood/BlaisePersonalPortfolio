import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import {textVariant} from '../utils/motion';

const HighlightedText = ({text}) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="text-[#915EFF] font-semibold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

const ExperienceCard = ({experience, index}) => (
  <VerticalTimelineElement 
    contentStyle={{
      background: 'rgba(29, 24, 54, 0.8)', 
      color: '#fff',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(145,94,255,0.1)',
      borderBottom: '3px solid #915EFF',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(145, 94, 255, 0.15)',
      borderBottomWidth: '3px',
      borderBottomColor: '#915EFF',
      animation: `timelineFloat 5s ease-in-out ${index * 0.8}s infinite`,
    }}
    contentArrowStyle={{borderRight: '7px solid rgba(29, 24, 54, 0.8)'}}
    date={experience.date}
    dateClassName="text-secondary font-medium"
    iconStyle={{
      background: experience.iconBg,
      boxShadow: '0 0 0 4px #915EFF, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[20px] sm:text-[24px] font-bold">{experience.title}</h3>
      {experience.subtitle && (
        <p className="text-white/70 text-[13px] sm:text-[15px] font-medium mt-0.5" style={{margin: 0}}>
          {experience.subtitle}
        </p>
      )}
      <p className="text-[#915EFF] text-[14px] sm:text-[16px] font-semibold mt-1" style={{margin: 0}}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, idx) => (
        <li
          key={`experience-point-${idx}`}
          className="text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wide leading-relaxed"
        >  
          <HighlightedText text={point} />
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="rgba(145, 94, 255, 0.4)">
        {experiences.slice().reverse().map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")