import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { textVariant } from '../utils/motion';

// Wrap any phrases listed in `highlights` with a bold, brighter span so the
// quotes are scannable instead of being a flat wall of text.
const renderQuote = (quote, highlights = []) => {
  if (!highlights.length) return quote;
  const escaped = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const set = new Set(highlights);
  return quote.split(regex).map((part, i) =>
    set.has(part)
      ? <strong key={i} className="text-white font-semibold not-italic">{part}</strong>
      : part
  );
};

const TestimonialCard = ({ quote, highlights, name, title, company, index }) => {
  const accents = ['#5eead4', '#7dd3fc', '#fb7185'];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
      className="signal-card flex min-w-[280px] max-w-[420px] flex-1 flex-col p-6 sm:p-8"
      style={{ '--signal-accent': accents[index % accents.length] }}
    >
      <span className="signal-card__quote mb-2 font-serif text-[40px] leading-none sm:text-[48px]">&ldquo;</span>
        
      <p className="flex-1 text-[13px] italic leading-relaxed text-secondary/80 sm:text-[14px]">
        {renderQuote(quote, highlights)}
      </p>

      <div className="mt-6 border-t border-white/[0.07] pt-4">
        <div className="flex items-center gap-3">
          <div className="signal-card__avatar flex h-10 w-10 items-center justify-center rounded-full">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-white">{name}</p>
            <p className="text-[11px] text-secondary/70 sm:text-[12px]">{title}</p>
            <p className="signal-card__meta text-[11px] sm:text-[12px]">{company}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Testimonials = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials", "08");
