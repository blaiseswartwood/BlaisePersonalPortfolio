import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { researchprojects } from '../constants';

const researchAccents = ['#5eead4', '#7dd3fc', '#fb7185'];

const ResearchCard = ({ project, index }) => (
  <article
    className="research-card snap-start"
    data-research-card={index}
    style={{
      '--research-accent': researchAccents[index % researchAccents.length],
      '--research-image': `url("${project.img}")`,
    }}
  >
    <div className="research-card__media">
      <div className="research-card__media-grid" aria-hidden="true" />
      <div className="research-card__tags">
        {project.tags.map((tag) => (
          <span key={tag.name}>
            {tag.name}
          </span>
        ))}
      </div>

      <figure className="research-card__figure">
        <img
          src={project.img}
          alt={`${project.title} research artifact`}
          className="research-card__image"
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <figcaption>
          <span>Research artifact</span>
          <span>{String(index + 1).padStart(2, '0')} / {String(researchprojects.length).padStart(2, '0')}</span>
        </figcaption>
      </figure>
    </div>

    <div className="research-card__content flex flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-[10px] tracking-[0.2em] text-cyan-300/55">
          {String(index + 1).padStart(2, '0')}
        </span>
        <time className="text-[10px] font-medium uppercase tracking-[0.12em] text-secondary/50">
          {project.date}
        </time>
      </div>

      <h3 className="mt-5 font-display text-[24px] font-semibold leading-tight text-white sm:text-[30px]">
        {project.title}
      </h3>

      <div className="mt-4 flex items-center gap-3 border-y border-white/[0.07] py-3.5">
        <span className="material-symbols-outlined text-[19px] text-cyan-300/70">science</span>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold text-white/85 sm:text-[13px]">{project.mentor}</p>
          <p className="truncate text-[10px] text-secondary/60 sm:text-[11px]">
            {project.designation}, {project.institution}
          </p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2.5">
        {project.description.map((point) => (
          <li key={point} className="relative pl-4 text-[12px] leading-5 text-secondary/80 sm:text-[13px] sm:leading-6">
            <span className="research-card__bullet" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.extra_link && (
          <a
            href={project.extra_link}
            target="_blank"
            rel="noopener noreferrer"
            className="research-link"
          >
            <span className="material-symbols-outlined text-[17px]">article</span>
            Paper
          </a>
        )}
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="research-link"
          >
            <span className="material-symbols-outlined text-[17px]">code</span>
            Source
          </a>
        )}
      </div>
    </div>
  </article>
);

const ResearchGallery = () => {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeCard = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (activeCard) {
          setActiveIndex(Number(activeCard.target.dataset.researchCard));
        }
      },
      { root: gallery, threshold: [0.55, 0.75] }
    );

    gallery.querySelectorAll('[data-research-card]').forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    const gallery = galleryRef.current;
    const card = gallery?.querySelector(`[data-research-card="${index}"]`);
    if (!gallery || !card) return;

    gallery.scrollTo({
      left: card.offsetLeft - gallery.offsetLeft,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Delving deeper</p>
        <h2 className={styles.sectionHeadText}>Research</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div variants={fadeIn('up', 'spring', 0.18, 0.75)} className="mt-12">
        <div
          ref={galleryRef}
          className="research-gallery flex snap-x snap-mandatory gap-5 overflow-x-auto"
          aria-label="Research projects"
        >
          {researchprojects.map((project, index) => (
            <ResearchCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="group" aria-label="Choose research project">
            {researchprojects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${project.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`research-dot ${activeIndex === index ? 'research-dot--active' : ''}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 font-display text-[10px] tracking-[0.16em] text-secondary/45">
              {String(activeIndex + 1).padStart(2, '0')} / {String(researchprojects.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => goTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="research-control"
              aria-label="Previous research project"
            >
              <span className="material-symbols-outlined text-[19px]">west</span>
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(researchprojects.length - 1, activeIndex + 1))}
              disabled={activeIndex === researchprojects.length - 1}
              className="research-control"
              aria-label="Next research project"
            >
              <span className="material-symbols-outlined text-[19px]">east</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ResearchGallery, '', '06');