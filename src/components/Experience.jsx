import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import {textVariant} from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
    contentStyle={{
      background: '#1d1836', 
      color: '#fff',
      boxShadow: '0 3px 12px rgba(0, 0, 0, 0.3)',
      borderBottom: '3px solid #915EFF',
    }}
    contentArrowStyle={{borderRight: '7px solid #1d1836'}}
    date={experience.date}
    dateClassName="text-secondary font-medium"
    iconStyle={{background: experience.iconBg}}
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
      <p className="text-[#915EFF] text-[14px] sm:text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wide leading-relaxed"
        >  
          {point}
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
      <VerticalTimeline lineColor="#915EFF">
        {experiences.slice().reverse().map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")