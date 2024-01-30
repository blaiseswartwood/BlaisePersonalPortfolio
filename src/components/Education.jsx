import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ReactCardFlip from 'react-card-flip'

import { education } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const EducationCardFront = ({ index, title, school, icon, onClick }) => {
    return (
        <div className="xs:w-[400px] md:w-[550px] w-full " onClick={onClick} >
            <motion.div
                variants={fadeIn("left", "spring", 0.75 * index, 1.50)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
            items-center flex-col hover:brightness-125 transition"
                >
                    <img src={icon} alt={title} className="w-[150px] h-[150px] object-contain" />
                    <p className="text-secondary text-center text-[14px] -mt-5"> {school} </p>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </div>
    )
}

const EducationCardBack = ({ date, gpa, points, onClick }) => {
    return (
        <div className="xs:w-[400px] md:w-[550px] w-full" onClick={onClick} >
            <div
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col w-full hover:brightness-125 transition"
                >
                    <div className="mt-4 mx-5">

                        <p className=" text-secondary text-[14px] "> {date} </p>
                        <p className="mt-1 text-secondary text-[14px] ">GPA: {gpa}</p>
                        <p className="mt-1 text-secondary text-[14px] "> Relevant Courses: </p>
                        <ul className="mt-1 list-disc ml-5 space-y-1">
                            {points.map((point, index) => (
                                <li
                                    key={`experience-point-${index}`}
                                    className="text-secondary text-[14px] pl-1 tracking-wider"
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>

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
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10 cursor-pointer">
                {education.map((card, index) => (
                    <ReactCardFlip
                        key={index}
                        isFlipped={flippedCards.includes(index)}
                        flipDirection="horizontal"
                    >
                        <EducationCardFront index={index} title={card.titlefront} school={card.school} icon={card.iconfront} onClick={() => handleClick(index)} />
                        <EducationCardBack index={index} date={card.date} gpa={card.GPA} points={card.points} onClick={() => handleClick(index)} />
                    </ReactCardFlip>
                ))}
            </div>

        </>
    )
}

export default SectionWrapper(Education, "");