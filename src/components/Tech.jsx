import {motion} from 'framer-motion';

import {styles} from '../styles';
import {BallCanvas} from "./canvas";
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

        <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <motion.div 
              className="w-28 h-28 text-center" 
              key={technology.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", delay: 0.05 * index, duration: 0.5 }}
            >
              <BallCanvas icon={technology.icon} />
              <p className="text-secondary text-[13px] mt-1">{technology.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default SectionWrapper(Tech, "")