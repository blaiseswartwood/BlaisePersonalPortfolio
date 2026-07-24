import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants/about';
import microsoft from '../assets/company/microsoft.png';
import googlelogo from '../assets/company/google.webp';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import StatCounters from './StatCounters';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.article
      variants={fadeIn('up', 'spring', 0.08 * index, 0.65)}
      className="group relative flex min-h-[155px] flex-col justify-between border border-white/[0.07] p-5 transition-colors duration-300 hover:bg-white/[0.025]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] p-2.5">
          <img src={icon} alt="" className="h-full w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <span className="font-display text-[10px] tracking-[0.18em] text-cyan-300/45">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="max-w-[150px] font-display text-[16px] font-semibold leading-snug text-white sm:text-[18px]">
        {title}
      </h3>
    </motion.article>
  )
}

const CompanyCard = ({ name, role, logo, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.2 * index, 0.6)}
    className="glass-card flex min-w-[260px] flex-1 items-center gap-4 p-4 transition-all duration-300 sm:p-5"
  >
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] p-2">
      <img src={logo} alt={name} className="w-10 h-10 object-contain" />
    </div>
    <div>
      <h4 className="text-white font-bold text-[18px]">{name}</h4>
      <p className="text-secondary text-[13px]">{role}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Software engineer at <span className="text-white font-medium">Microsoft</span> with internships at 
        <span className="text-white font-medium"> Google</span> and <span className="text-white font-medium">Microsoft</span>. 
        BS in Computer Science from <span className="text-white font-medium">Rose-Hulman Institute of Technology</span> with 
        minors in Mathematics and Data Science. Focused on <span className="text-[#915EFF]">Generative AI</span> and <span className="text-[#915EFF]">Machine Learning</span>.
      </motion.p>

      {/* Company Highlights */}
      <div className="mt-10 flex flex-wrap gap-5 max-w-3xl">
        <CompanyCard name="Microsoft" role="Software Engineer — Azure Front Door" logo={microsoft} index={0} />
        <CompanyCard name="Google" role="Software Engineer Intern — Google Cloud" logo={googlelogo} index={1} />
      </div>

      {/* Animated Stat Counters */}
      <StatCounters />

      {/* Focus Areas */}
      <motion.div variants={textVariant()} className="mt-14">
        <p className={styles.sectionSubText}>What I specialize in</p>
        <h3 className="text-white font-bold text-[24px] sm:text-[30px]">Focus Areas</h3>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about", "01")