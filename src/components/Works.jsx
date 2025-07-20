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
  
  const handleImageClick = () => {
    if (source_code_link) {
      window.open(source_code_link, '_blank');
    }
  };

  return (
    <Tilt 
      className="xs:w-[300px] sm:w-[360px] w-full"
      tiltMaxAngleX={isMobile ? 0 : 45}
      tiltMaxAngleY={isMobile ? 0 : 45}
      scale={isMobile ? 1 : 1.02}
      transitionSpeed={isMobile ? 0 : 450}
      gyroscope={!isMobile}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] p-2 sm:p-5"
        >
          <div className="relative w-full h-[200px] sm:h-[230px]">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-2xl darken-85"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
              onClick={handleImageClick}
            >
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={cn("text-[14px]", tag.color)}>
                #{tag.name}
              </p>
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
