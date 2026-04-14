import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { cn } from '../utils/classNames';
import useMediaQuery from '../hooks/useMediaQuery';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const handleCardClick = () => {
    if (source_code_link) {
      window.open(source_code_link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Tilt 
      className="xs:w-[300px] sm:w-[360px] w-full"
      tiltMaxAngleX={isMobile ? 0 : 15}
      tiltMaxAngleY={isMobile ? 0 : 15}
      scale={isMobile ? 1 : 1.02}
      transitionSpeed={isMobile ? 0 : 400}
      gyroscope={false}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "spring", delay: 0.08 * index, duration: 0.6 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card card-hover-glow cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="bg-tertiary rounded-[20px] p-3 sm:p-5">
          <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden rounded-2xl group">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover darken-85 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition-transform">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-5">
            <h3 className="text-white font-bold text-[18px] sm:text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
          </div>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag.name} className={cn(
                "text-[11px] sm:text-[13px] px-2 py-[2px] rounded-full bg-black-200 border border-gray-700",
                tag.color
              )}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are my independent and course projects, which span across various 
        <br className="sm:block hidden" />
        topics in computer science. Feel free to explore them and my Github in more detail.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
