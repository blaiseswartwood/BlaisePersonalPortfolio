import React from 'react'
import {motion} from 'framer-motion'

import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc'

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}> Academic Journey </p>
                <h2 className={styles.sectionHeadText}>Education</h2>
            </motion.div>

            <motion.p 
                variants={fadeIn("","",0.1,1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm a computer science major at Rose-Hulman Institute of Technology.
                I am also earning my Masters in Engineering Management during my 4 years of undergrad so that I 
                both execute and lead a project successfully. My main interests lie in Machine Learning/AI, but I 
                am flexible and willing to expand my skillset.
            </motion.p>
        </>
    )
}

export default SectionWrapper(Education, "");