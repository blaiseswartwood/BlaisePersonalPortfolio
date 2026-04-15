import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { styles } from '../styles';
import { blogPosts } from '../constants';
import { StarsCanvas } from './canvas';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={i} className="bg-[#0a0520] border border-[#915EFF]/15 rounded-xl p-4 sm:p-6 my-4 overflow-x-auto">
              <code className="text-secondary text-[12px] sm:text-[13px] leading-relaxed">{codeContent}</code>
            </pre>
          );
          codeContent = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-white font-bold text-[22px] sm:text-[28px] mt-10 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-white font-bold text-[18px] sm:text-[22px] mt-8 mb-3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('- **')) {
        const match = line.match(/^- \*\*(.+?)\*\*\s*[-—]?\s*(.*)$/);
        if (match) {
          elements.push(
            <li key={i} className="text-secondary text-[14px] sm:text-[16px] leading-relaxed ml-5 mb-2 list-disc">
              <span className="text-white font-semibold">{match[1]}</span>
              {match[2] && <span> — {match[2]}</span>}
            </li>
          );
        }
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="text-secondary text-[14px] sm:text-[16px] leading-relaxed ml-5 mb-2 list-disc">
            {line.slice(2)}
          </li>
        );
      } else if (line.match(/^\d+\.\s\*\*/)) {
        const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*[-—]?\s*(.*)$/);
        if (match) {
          elements.push(
            <li key={i} className="text-secondary text-[14px] sm:text-[16px] leading-relaxed ml-5 mb-2 list-decimal">
              <span className="text-white font-semibold">{match[1]}</span>
              {match[2] && <span> — {match[2]}</span>}
            </li>
          );
        }
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />);
      } else {
        // Render inline bold
        const parts = line.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={i} className="text-secondary text-[14px] sm:text-[16px] leading-relaxed mb-2">
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <span key={j} className="text-white font-semibold">{part.slice(2, -2)}</span>;
              }
              return part;
            })}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <div className={`${styles.padding} max-w-4xl mx-auto pt-28 sm:pt-32 pb-16 min-h-screen relative z-10`}>
        {/* Back link */}
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300 mb-8 group"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform duration-300">
            arrow_back
          </span>
          <span className="text-[14px]">Back to portfolio</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[12px] px-3 py-1 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#915EFF] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-white font-black text-[28px] sm:text-[40px] md:text-[48px] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-secondary text-[13px] sm:text-[14px] mb-8 pb-6 border-b border-gray-800/50">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              {post.readTime}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="blog-content"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-[#915EFF] hover:text-white transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform duration-300">
              arrow_back
            </span>
            <span className="text-[14px] font-medium">Back to all posts</span>
          </Link>
        </div>
      </div>

      <StarsCanvas />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPost;
