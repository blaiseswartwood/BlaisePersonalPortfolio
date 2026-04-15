import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { blogPosts } from '../constants';
import { textVariant } from '../utils/motion';
import { cn } from '../utils/classNames';

const BlogCard = ({ id, title, date, readTime, tags, excerpt, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", delay: 0.15 * index, duration: 0.7 }}
      className="group"
    >
      <Link to={`/blog/${id}`}>
        <div className="p-6 sm:p-8 rounded-2xl bg-tertiary/80 border border-[#915EFF]/10 
          hover:border-[#915EFF]/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(145,94,255,0.12)]
          cursor-pointer h-full flex flex-col">
          {/* Tags & Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#915EFF] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-[18px] sm:text-[22px] leading-tight mb-3 group-hover:text-[#915EFF] transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed flex-1 mb-4">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
            <div className="flex items-center gap-3 text-secondary text-[11px] sm:text-[12px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                {date}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {readTime}
              </span>
            </div>
            <span className="material-symbols-outlined text-secondary/40 text-[18px] group-hover:text-[#915EFF] group-hover:translate-x-1 transition-all duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Insights & Writeups</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[30px]"
      >
        Deep dives into the projects and problems I've worked on —
        from distributed systems at Azure to generative AI at Google.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} index={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
