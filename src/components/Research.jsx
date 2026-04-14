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
  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="px-2 sm:px-4">
      <div className="p-[1px] rounded-2xl green-pink-gradient max-w-[750px] mx-auto shadow-card">
        <div className="bg-black-200 p-5 sm:p-7 rounded-3xl">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-white font-bold text-[18px] sm:text-[24px] md:text-[28px] leading-tight">{title}</h3>
              <p className="text-secondary text-[11px] sm:text-[13px] mt-1">
                <span className="material-symbols-outlined text-[13px] align-middle mr-1">calendar_month</span>
                {date}
              </p>
            </div>
            {/* Action buttons */}
            <div className="flex gap-2 ml-3 flex-shrink-0">
              {extra_link && (
                <div
                  onClick={() => handleImageClick(extra_link)}
                  className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img src={plus} alt="extra" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
              {source_code_link && (
                <div
                  onClick={() => handleImageClick(source_code_link)}
                  className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
            </div>
          </div>

          {/* Mentor info */}
          <div className="mt-3 py-2 px-3 bg-tertiary rounded-lg">
            <p className="text-white font-medium text-[12px] sm:text-[14px]">
              <span className="blue-text-gradient font-semibold">Mentor:</span> {mentor}
            </p>
            <p className="text-secondary text-[10px] sm:text-[12px]">{designation}, {institution}</p>
          </div>

          {/* Image */}
          <div className="mt-4 relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-2xl">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover darken-75"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <ul className="space-y-2 sm:space-y-3">
              {description.map((point, index) => (
                <li 
                  key={index}
                  className="text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed flex items-start"
                >
                  <span className="text-[#915EFF] mr-2 mt-[2px] flex-shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag.name} className={cn(
                "text-[10px] sm:text-[12px] md:text-[13px] px-2 py-[2px] rounded-full bg-tertiary border border-gray-700",
                tag.color
              )}>
                {tag.name}
              </span>
            ))}
          </div>
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
    speed: 600,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (index) => (
      <div
        className={cn("custom-dot", activeIndex === index ? 'active' : '')}
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
          <div className="section-divider" />
        </motion.div>
      </div>

      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div className={cn(styles.paddingX, "-mt-28 sm:-mt-20 pb-20")}>
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