import { useState } from 'react'
import { motion } from 'framer-motion'
import ReactCardFlip from 'react-card-flip'

import { education } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const EducationCardFront = ({ title, school, icon, minors, onClick }) => {
    return (
        <div className="w-full" onClick={onClick}>
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card card-hover-glow">
                <div className="bg-tertiary rounded-[20px] py-5 px-8 sm:px-12 min-h-[340px] sm:min-h-[380px] flex justify-evenly 
                    items-center flex-col hover:brightness-110 transition-all duration-300 cursor-pointer"
                >
                    <img src={icon} alt={title} className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain" />
                    <p className="text-secondary text-center text-[13px] sm:text-[14px]">{school}</p>
                    <h3 className="text-white text-[17px] sm:text-[20px] font-bold text-center">{title}</h3>
                    {minors && minors.length > 0 && (
                        <div className="flex gap-2 mt-1">
                            {minors.map((minor) => (
                                <span key={minor} className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-[#915EFF]/15 border border-[#915EFF]/30 text-[#c4a0ff] font-medium">
                                    Minor: {minor}
                                </span>
                            ))}
                        </div>
                    )}
                    <p className="text-secondary text-[11px] sm:text-[12px] italic mt-1">Tap to see details</p>
                </div>
            </div>
        </div>
    )
}

const EducationCardBack = ({ date, gpa, points, school, minors, courseworkLabel, highlights, onClick }) => {
    const isBerkeley = school?.includes("Berkeley");
    const isMililani = school?.includes("Mililani");
    const accentColor = isBerkeley ? "from-[#003262] to-[#FDB515]" : isMililani ? "from-[#4a2c0a] to-[#d4a843]" : "from-[#800000] to-[#C0C0C0]";

    return (
        <div className="w-full" onClick={onClick}>
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] min-h-[340px] sm:min-h-[380px] flex flex-col w-full hover:brightness-125 transition cursor-pointer overflow-hidden relative">
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
                                    GPA: {gpa}
                                </p>
                            </div>
                        </div>

                        {/* Minors as distinct badges */}
                        {minors && minors.length > 0 && (
                            <div className="mb-3 flex items-center gap-2 flex-wrap">
                                <span className="text-secondary text-[11px] sm:text-[12px] font-medium">Minors:</span>
                                {minors.map((minor) => (
                                    <span
                                        key={minor}
                                        className="text-[11px] sm:text-[12px] px-3 py-1 rounded-full font-semibold
                                          bg-[#915EFF]/15 border border-[#915EFF]/30 text-[#c4a0ff]"
                                    >
                                        {minor}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Highlights row (e.g., 14 AP 5s, 36 ACT) */}
                        {highlights && highlights.length > 0 && (
                            <div className="mb-3 flex flex-wrap gap-2">
                                {highlights.map((h) => (
                                    <span
                                        key={h}
                                        className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full font-bold
                                          bg-[#d4a843]/15 border border-[#d4a843]/40 text-[#d4a843]"
                                    >
                                        {h}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Courses section */}
                        <div className="flex-1 overflow-hidden">
                            <p className="text-white font-semibold text-[12px] sm:text-[13px] mb-2 flex items-center">
                                <span className="material-symbols-outlined text-[14px] sm:text-[16px] mr-1">menu_book</span>
                                {courseworkLabel || "Relevant Coursework"}
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
                            <EducationCardFront title={card.titlefront} school={card.school} icon={card.iconfront} minors={card.minors} onClick={() => handleClick(index)} />
                            <EducationCardBack date={card.date} gpa={card.GPA} points={card.points} school={card.school} minors={card.minors} courseworkLabel={card.courseworkLabel} highlights={card.highlights} onClick={() => handleClick(index)} />
                        </ReactCardFlip>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Education, "");