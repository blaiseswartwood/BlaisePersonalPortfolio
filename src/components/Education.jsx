import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ReactCardFlip from 'react-card-flip'

import { education } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const EducationCardFront = ({ title, school, icon, onClick }) => {
    return (
        <div className="w-full" onClick={onClick}>
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card card-hover-glow">
                <div className="bg-tertiary rounded-[20px] py-5 px-8 sm:px-12 h-[320px] sm:h-[340px] flex justify-evenly 
                    items-center flex-col hover:brightness-110 transition-all duration-300 cursor-pointer"
                >
                    <img src={icon} alt={title} className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain" />
                    <p className="text-secondary text-center text-[13px] sm:text-[14px]">{school}</p>
                    <h3 className="text-white text-[17px] sm:text-[20px] font-bold text-center">{title}</h3>
                    <p className="text-secondary text-[11px] sm:text-[12px] italic mt-1">Tap to see details</p>
                </div>
            </div>
        </div>
    )
}

const EducationCardBack = ({ date, gpa, points, school, onClick }) => {
    const isBerkeley = school?.includes("Berkeley");
    const accentColor = isBerkeley ? "from-[#003262] to-[#FDB515]" : "from-[#800000] to-[#C0C0C0]";
    const accentText = isBerkeley ? "text-[#FDB515]" : "text-[#C0C0C0]";

    return (
        <div className="w-full" onClick={onClick}>
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] h-[320px] sm:h-[340px] flex flex-col w-full hover:brightness-125 transition cursor-pointer overflow-hidden relative">
                    {/* Accent bar at top */}
                    <div className={`w-full h-[4px] bg-gradient-to-r ${accentColor}`} />
                    
                    <div className="px-5 sm:px-6 pt-4 pb-3 flex flex-col h-full">
                        {/* Header section with date and GPA */}
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-white font-semibold text-[13px] sm:text-[15px]">
                                    <span className="material-symbols-outlined text-[14px] sm:text-[16px] align-middle mr-1">calendar_month</span>
                                    {date}
                                </p>
                            </div>
                            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${accentColor} bg-opacity-20`}>
                                <p className="text-white font-bold text-[12px] sm:text-[13px]">
                                    GPA: {gpa.split('  ')[0]}
                                </p>
                            </div>
                        </div>

                        {/* Minor info if present */}
                        {gpa.includes('Minor') && (
                            <p className={`${accentText} text-[11px] sm:text-[12px] font-medium mb-2`}>
                                <span className="material-symbols-outlined text-[13px] align-middle mr-1">school</span>
                                {gpa.split('  ')[1]}
                            </p>
                        )}

                        {/* Courses section */}
                        <div className="flex-1 overflow-hidden">
                            <p className="text-white font-semibold text-[12px] sm:text-[13px] mb-2 flex items-center">
                                <span className="material-symbols-outlined text-[14px] sm:text-[16px] mr-1">menu_book</span>
                                Relevant Coursework
                            </p>
                            <div className="flex flex-wrap gap-[6px] sm:gap-2">
                                {points.map((point, index) => (
                                    <span
                                        key={`course-${index}`}
                                        className="bg-black-200 text-secondary text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full border border-gray-700"
                                    >
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer hint */}
                        <p className="text-secondary text-[11px] sm:text-[12px] italic text-center mt-2">Tap to flip back</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Education = () => {
    const [flippedCards, setFlippedCards] = useState([]);

    const handleClick = (cardId) => {
        setFlippedCards((prevFlippedCards) => {
            const isFlipped = prevFlippedCards.includes(cardId);
            if (isFlipped) {
                return prevFlippedCards.filter((id) => id !== cardId);
            } else {
                return [...prevFlippedCards, cardId];
            }
        });
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}> Academic Journey </p>
                <h2 className={styles.sectionHeadText}>Education</h2>
                <div className="section-divider" />
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {education.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("left", "spring", 0.4 * index, 1.0)}
                        className="xs:w-[400px] md:w-[520px] w-full"
                    >
                        <ReactCardFlip
                            isFlipped={flippedCards.includes(index)}
                            flipDirection="horizontal"
                            flipSpeedBackToFront={0.5}
                            flipSpeedFrontToBack={0.5}
                        >
                            <EducationCardFront title={card.titlefront} school={card.school} icon={card.iconfront} onClick={() => handleClick(index)} />
                            <EducationCardBack date={card.date} gpa={card.GPA} points={card.points} school={card.school} onClick={() => handleClick(index)} />
                        </ReactCardFlip>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Education, "");