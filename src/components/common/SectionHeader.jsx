import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';

const SectionHeader = ({ subtitle, title, description, className = '' }) => {
  return (
    <motion.div variants={textVariant()} className={className}>
      <p className={styles.sectionSubText}>{subtitle}</p>
      <h2 className={styles.sectionHeadText}>{title}</h2>
      {description && (
        <motion.p
          variants={textVariant()}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 