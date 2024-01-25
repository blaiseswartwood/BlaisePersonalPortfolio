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
          Technologies.
        </h2>
      </motion.div> 

        <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28 text-center" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-secondary"> {technology.name}</p>
            </div>

          ))}
        </div>
      </div>
  )
}

export default SectionWrapper(Tech, "")