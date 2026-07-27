import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { cn } from '../utils/classNames';

const projectCategories = ["All", "AI / ML", "Systems", "Web", "Data"];
const initialProjectCount = 6;
const projectAccents = {
  "AI / ML": "#5eead4",
  Systems: "#7dd3fc",
  Web: "#fb7185",
  Data: "#fbbf24",
};

const ProjectCard = forwardRef(function ProjectCard(
  { name, description, tags, image, source_code_link, category, index },
  ref,
) {
  return (
    <motion.a
      ref={ref}
      layout="position"
      href={source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}, open project`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="project-card group flex w-full cursor-pointer flex-col"
      style={{ '--project-accent': projectAccents[category] || '#7dd3fc' }}
    >
      <div className="project-card__media" style={{ '--project-image': `url("${image}")` }}>
        <div className="project-card__media-grid" aria-hidden="true" />
        <div className="project-card__image-frame">
          <img
            src={image}
            alt={`${name} project preview`}
            className="project-card__image"
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="project-card__media-meta">
          <span>{category}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <span className="project-card__link-icon material-symbols-outlined">north_east</span>
      </div>

      <div className="project-card__content">
        <h3 className="font-display text-[18px] font-semibold text-white sm:text-[21px]">{name}</h3>
        <p className="project-card__description mt-2 text-[13px] leading-relaxed text-secondary/80 sm:text-[14px]">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <span key={tag.name} className="project-card__tag">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
});

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialProjectCount);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are my independent and course projects, which span across various 
        <br className="sm:block hidden" />
        topics in computer science. Open any project to explore the implementation on GitHub.
      </motion.p>

      {/* Filter Tabs */}
      <div className="filter-tabs mt-8 flex w-fit max-w-full flex-wrap gap-1 p-1" role="group" aria-label="Filter projects">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            aria-pressed={activeFilter === cat}
            className={cn(
              'rounded-md border border-transparent px-3 py-2 text-[11px] font-medium transition-all duration-300 sm:text-[12px]',
              activeFilter === cat
                ? 'bg-white/[0.08] text-white'
                : 'text-secondary/70 hover:bg-white/[0.035] hover:text-white'
            )}
          >
            {cat}
            <span className="ml-1.5 text-[10px] sm:text-[11px] text-secondary/60">
              ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`project-${project.name}`}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length > initialProjectCount && (
        <div className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-6">
          <button
            type="button"
            className="project-reveal"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show fewer projects' : `View all ${filteredProjects.length} projects`}</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {showAll ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          <span className="text-[11px] text-secondary/45" aria-live="polite">
            Showing {visibleProjects.length} of {filteredProjects.length}
          </span>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects", "05");
