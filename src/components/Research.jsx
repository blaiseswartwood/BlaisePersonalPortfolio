import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { researchprojects } from '../constants';
import React, { useState } from "react";

// const ResearchCard = ({ title, index, description, mentor, designation, institution, source_code_link }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <h3 className="text-white font-bold text-[24px]">{title}</h3>

//     <div className="flex-1 flex flex-col">
//       <p className="text-white font-medium text-[16px]">
//         <span className="blue-text-gradient">Mentor </span> {mentor}
//       </p>
//       <p className="mt-1 text-secondary text-[12px]"> {designation} of {institution} </p>
//     </div>

//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{description}</p>
//     </div>
//   </motion.div>
// )

const ResearchCard = ({ item, width }) => {
  return (
    <div className="mt-5 carousel-item flex flex-col" style={{ width: width }}>
      <h3 className="carousel-item-text text-white font-bold text-[32px]">{item.title}</h3>
      <div className="flex-1 flex flex-col">
        <p className="mt-2 carousel-item-text tracking-wider text-[18px]">{item.description}</p>
        <p className="carousel-item-text text-white font-medium text-[16px]">
          <span className="blue-text-gradient">Mentor </span> {item.mentor}
        </p>
        <p className="carousel-item-text text-secondary text-[12px]"> {item.designation} of {item.institution} </p>
      </div>
    </div>
  );
};

const Research = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= researchprojects.length) {
      newIndex = researchprojects.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="mt-12 bg-black-100 rounded-[40px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Delving deeper</p>
          <h2 className={styles.sectionHeadText}> Research </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <div className="carousel w-full bg-black-200 rounded-[40px]">
            <div
              className="inner round"
              style={{
                transform: `translate(-${activeIndex * 100}%)`
              }}
            >
              {researchprojects.map((item) => {
                return <ResearchCard item={item} width={"100%"} />;
              })}
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "spring", 1, 0.75)}>
          <div className="carousel-buttons justify-center text-center">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
            </button>
            <div className="indicators">
              {researchprojects.map((item, index) => {
                return (
                  <button
                    className="indicator-buttons"
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined ${index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                        }`}
                    >
                      radio_button_checked
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <span className="material-icons-outlined">arrow_forward_ios</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


export default SectionWrapper(Research, "");