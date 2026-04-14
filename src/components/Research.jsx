import { useState } from 'react';
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
  const handleCardClick = () => {
    if (source_code_link) {
      window.open(source_code_link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleButtonClick = (e, link) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="px-2 sm:px-6 py-2">
      <div 
        className="max-w-[800px] mx-auto cursor-pointer group rounded-2xl border border-[#915EFF]/20 overflow-hidden transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-[0_8px_40px_rgba(145,94,255,0.15)]"
        onClick={handleCardClick}
      >
        {/* Hero image with gradient overlay */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] overflow-hidden">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-contain bg-[#0a0520] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090325] via-[#090325]/60 to-transparent" />
          
          {/* Tags floating on image */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-5 flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span key={tag.name} className="text-[9px] sm:text-[11px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white font-medium">
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action buttons floating top-right */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-5 flex gap-2">
            {extra_link && (
              <div
                onClick={(e) => handleButtonClick(e, extra_link)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex justify-center items-center cursor-pointer hover:bg-[#915EFF]/40 hover:border-[#915EFF]/50 transition-all duration-300"
              >
                <img src={plus} alt="paper" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain" />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={(e) => handleButtonClick(e, source_code_link)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex justify-center items-center cursor-pointer hover:bg-[#915EFF]/40 hover:border-[#915EFF]/50 transition-all duration-300"
              >
                <img src={github} alt="code" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain" />
              </div>
            )}
          </div>

          {/* Title overlaid on image bottom */}
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5">
            <h3 className="text-white font-bold text-[20px] sm:text-[26px] md:text-[30px] leading-tight drop-shadow-lg">{title}</h3>
            <p className="text-white/60 text-[11px] sm:text-[13px] mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_month</span>
              {date}
            </p>
          </div>
        </div>

        {/* Content panel */}
        <div className="bg-[#0c0720] border-t border-[#915EFF]/10 p-4 sm:p-6">
          {/* Mentor row */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/30 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#915EFF] text-[18px] sm:text-[20px]">science</span>
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium text-[13px] sm:text-[15px] truncate">{mentor}</p>
              <p className="text-secondary text-[10px] sm:text-[12px] truncate">{designation}, {institution}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2.5">
            {description.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF] mt-[7px] flex-shrink-0" />
                <p className="text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-4 pt-3 border-t border-gray-800/50 flex items-center justify-between">
            <span className="text-secondary/50 text-[10px] sm:text-[11px]">Click to view project</span>
            <span className="material-symbols-outlined text-secondary/40 text-[16px] group-hover:text-[#915EFF] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
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
    <div className="mt-12">
      <div className={cn(styles.padding, "rounded-2xl min-h-[300px]")}>
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