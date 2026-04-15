import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import StatCounters from './StatCounters';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={400}>
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card card-hover-glow"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
          items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Software engineer at <span className="text-white font-medium">Microsoft</span> with internships at 
        <span className="text-white font-medium"> Google</span> and <span className="text-white font-medium">Microsoft</span>. 
        BS in Computer Science from <span className="text-white font-medium">Rose-Hulman Institute of Technology</span> with 
        minors in Mathematics and Data Science. Focused on <span className="text-[#915EFF]">Generative AI</span> and <span className="text-[#915EFF]">Machine Learning</span>.
      </motion.p>

      {/* Animated Stat Counters */}
      <StatCounters />

      <div className="mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")