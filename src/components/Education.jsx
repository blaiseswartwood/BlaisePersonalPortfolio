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
                <span className="blue-text-gradient"> Bachelors of Science, Computer Science </span>, Rose-Hulman Institute of Technology 
                2022-2026

                <span className="blue-text-gradient"> Masters in Engineering Management </span>, Rose-Hulman Institute of Technology 
                2022-2026

            </motion.p>
        </>
    )
}

export default SectionWrapper(Education, "");