import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { researchprojects } from '../constants';
import { github, plus } from '../assets';
import { cn } from '../utils/classNames';
import useMediaQuery from '../hooks/useMediaQuery';

const ResearchCard = ({ title, description, mentor, designation, institution, source_code_link, extra_link, img, tags, date }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="p-[1px] rounded-2xl green-pink-gradient xs:w-[360px] sm:w-5/6 flex justify-center items-center mx-auto shadow-card">
      <div className="bg-black-200 p-4 sm:p-7 rounded-3xl">
        <h3 className="text-white font-bold text-[20px] sm:text-[28px]">{title}</h3>

        <div className="flex-1 flex flex-col mt-2">
          <p className="text-secondary text-[12px] sm:text-[14px]">{date}</p>
          <p className="text-secondary font-medium text-[12px] sm:text-[14px]">
            <span className="blue-text-gradient">Mentor:</span> {mentor}
          </p>
          <p className="text-secondary text-[10px] sm:text-[12px]">{designation}, {institution}</p>
        </div>

        <div className="mt-3 relative w-full h-[150px] sm:h-[200px]">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover rounded-2xl darken-75"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {extra_link && (
              <div
                onClick={() => handleImageClick(extra_link)}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={plus} alt="extra" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => handleImageClick(source_code_link)}
                className="black-gradient w-10 h-10 ml-1 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-1">
          <ul className="mt-3 sm:mt-5 list-disc ml-3 sm:ml-5 space-y-1 sm:space-y-2">
            {description.map((point, index) => (
              <li 
                key={index}
                className="text-secondary text-[12px] sm:text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={cn("text-[12px] sm:text-[14px]", tag.color)}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const CustomPrevArrow = (props) => (
    <div 
      className="custom-prev-arrow cursor-pointer hover:opacity-100" 
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          props.onClick();
        }
      }}
    >
      <span className="material-symbols-outlined">arrow_back_ios</span>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div 
      className="custom-next-arrow cursor-pointer hover:opacity-100" 
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          props.onClick();
        }
      }}
    >
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (index) => (
      <div
        className={cn("custom-dot", activeIndex === index ? 'active' : '')}
        onClick={() => setActiveIndex(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setActiveIndex(index);
          }
        }}
      />
    ),
    afterChange: (index) => {
      setActiveIndex(index);
    },
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[40px]">
      <div className={cn(styles.padding, "bg-tertiary rounded-2xl min-h-[300px]")}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Delving deeper</p>
          <h2 className={styles.sectionHeadText}>Research</h2>
        </motion.div>
      </div>

      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div className={cn(styles.paddingX, "-mt-36 sm:-mt-20 pb-14 gap-7")}>
          <Slider {...settings}>
            {researchprojects.map((researchproject, index) => (
              <ResearchCard key={index} {...researchproject} />
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Research, "");