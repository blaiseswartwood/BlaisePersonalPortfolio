import {motion} from 'framer-motion';

import {styles} from '../styles';
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants"
import {textVariant} from '../utils/motion';


const Tech = () => {
  return (
  
    <div> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My skills
        </p>
        <h2 className={styles.sectionHeadText}>
          Tech Stack
        </h2>
        <div className="section-divider" />
      </motion.div> 

        <div className="mt-10 flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
          {technologies.map((technology, index) => (
            <motion.div 
              className="w-24 h-24 sm:w-32 sm:h-32 text-center" 
              key={technology.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", delay: 0.05 * index, duration: 0.5 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto glass-card flex items-center justify-center p-4 border border-white/10 hover:border-[#915EFF]/50 transition-all duration-300 group card-hover-glow cursor-default">
                <img 
                  src={technology.icon} 
                  alt={technology.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]"
                />
              </div>
              <p className="text-secondary text-[12px] sm:text-[14px] mt-2 font-medium tracking-wide">{technology.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default SectionWrapper(Tech, "")