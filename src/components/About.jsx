import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { NeuralNetworkCanvas } from './canvas'

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
        I'm a software engineer with an interest in data science, generative AI, and
        machine learning. I have work experience at <span className="text-white font-medium">Microsoft</span>, along with internships at 
        <span className="text-white font-medium"> Google</span> and <span className="text-white font-medium">Microsoft</span>. I am pursing my Masters in Data Science at the <span className="text-white font-medium">University of California, Berkeley</span>.  
        I've earned my Bachelors in Computer Science along with
        minors in Mathematics and Data Science at <span className="text-white font-medium">Rose-Hulman Institute of Technology</span>. 
        My main interests lie in <span className="text-[#915EFF]">Generative AI</span> and <span className="text-[#915EFF]">Machine Learning</span>, but I am capable and willing to expand my skillset.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* 3D Neural Network Visualization */}
      <motion.div
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-16"
      >
        <div className="relative rounded-2xl overflow-hidden border border-[#915EFF]/10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0520]/80 via-transparent to-[#0a0520]/80 pointer-events-none z-10" />
          <Suspense fallback={<div className="w-full h-[300px] sm:h-[400px] flex items-center justify-center"><span className="text-secondary text-sm">Loading neural network...</span></div>}>
            <NeuralNetworkCanvas />
          </Suspense>
          <div className="absolute bottom-4 left-0 right-0 text-center z-10 pointer-events-none">
            <p className="text-secondary/50 text-[11px] tracking-widest uppercase">Neural Network Visualization</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")