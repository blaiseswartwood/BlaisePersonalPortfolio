import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../../styles';
import { fadeIn } from '../../utils/motion';

const Card = ({ 
  index, 
  title, 
  description, 
  tags, 
  image, 
  source_code_link, 
  extra_link,
  className = "",
  children 
}) => {
  return (
    <Tilt className={`xs:w-[300px] sm:w-[360px] w-full ${className}`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] p-2 sm:p-5"
        >
          {image && (
            <div className="relative w-full h-[200px] sm:h-[230px]">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl darken-85" />
              {source_code_link && (
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <svg className="w-1/2 h-1/2 object-contain" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{title}</h3>
            {typeof description === 'string' ? (
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            ) : (
              <div className="mt-2 text-secondary text-[14px]">
                {description.map((desc, idx) => (
                  <p key={idx} className="mb-1">{desc}</p>
                ))}
              </div>
            )}
          </div>

          {children}

          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Card; 