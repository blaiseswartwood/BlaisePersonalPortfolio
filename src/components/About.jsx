import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import StatCounters from './StatCounters';
import { microsoft, googlelogo } from '../assets';

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

const CompanyCard = ({ name, role, logo, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.2 * index, 0.6)}
    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-tertiary/70 border border-white/5
      hover:border-[#915EFF]/25 transition-all duration-300 flex-1 min-w-[260px]"
  >
    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 p-2">
      <img src={logo} alt={name} className="w-10 h-10 object-contain" />
    </div>
    <div>
      <h4 className="text-white font-bold text-[18px]">{name}</h4>
      <p className="text-secondary text-[13px]">{role}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
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

      {/* Company Highlights */}
      <div className="mt-10 flex flex-wrap gap-5 max-w-3xl">
        <CompanyCard name="Microsoft" role="Software Engineer — Azure Front Door" logo={microsoft} index={0} />
        <CompanyCard name="Google" role="Software Engineer Intern — Google Cloud" logo={googlelogo} index={1} />
      </div>

      {/* Animated Stat Counters */}
      <StatCounters />

      {/* Focus Areas */}
      <motion.div variants={textVariant()} className="mt-16">
        <p className={styles.sectionSubText}>What I specialize in</p>
        <h3 className="text-white font-bold text-[24px] sm:text-[30px]">Focus Areas</h3>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")