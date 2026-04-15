import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { skills } from '../constants';
import { textVariant } from '../utils/motion';
import { cn } from '../utils/classNames';

const categories = ["All", "AI / ML", "Cloud / Infra", "Web / Systems"];

const categoryColors = {
  "Languages": "#915EFF",
  "AI / ML": "#00cea8",
  "Cloud / Infra": "#56ccf2",
  "Web / Systems": "#fc6767",
};

const SkillBar = ({ name, level, category, index }) => {
  const color = categoryColors[category] || "#915EFF";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.04 * index, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white text-[13px] sm:text-[14px] font-medium">{name}</span>
        <span className="text-secondary text-[11px] sm:text-[12px]">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-[#1a1040] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.04 * index, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `0 0 12px ${color}60` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Proficiency</p>
        <h2 className={styles.sectionHeadText}>Skills Matrix.</h2>
        <div className="section-divider" />
      </motion.div>

      {/* Category Filters */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 border",
              activeCategory === cat
                ? "bg-[#915EFF]/20 border-[#915EFF]/50 text-white"
                : "bg-transparent border-gray-700 text-secondary hover:border-[#915EFF]/30 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
        {filteredSkills.map((skill, index) => (
          <SkillBar key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillsMatrix, "skills");
