import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contactInfo } from '../constants/data';
import useForm from '../hooks/useForm';

const Contact = () => {
  const formRef = useRef();
  const { form, loading, handleChange, resetForm, setLoadingState } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);

    emailjs.send(
      {
        from_name: form.name,
        to_name: contactInfo.name,
        from_email: form.email,
        to_email: contactInfo.email,
        message: form.message, 
      },
    ).then(() => {
      setLoadingState(false);
      alert('Thank you. I will get back to you as soon as possible!');
      resetForm();
    }).catch((error) => {
      setLoadingState(false);
      console.log(error);
      alert('Something went wrong');
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-stretch">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 xl:flex-[0.55] relative"
      >
        {/* Card with gradient border */}
        <div className="relative rounded-2xl p-px bg-gradient-to-b from-[#915EFF]/40 via-[#915EFF]/10 to-[#00cea8]/20 overflow-hidden">
          <div className="bg-[#0a0520] rounded-2xl p-8 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(rgba(145,94,255,0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#915EFF]/20 blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#00cea8]/15 blur-[60px]" />
            
            <div className="relative z-10">
              <p className={styles.sectionSubText}> Get in touch </p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
              <div className="section-divider" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-6"
              >
                <label className="flex flex-col group">
                  <span className="text-white/80 font-medium mb-2 text-sm tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#915EFF] text-[16px]">person</span>
                    Your Name
                  </span>
                  <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-[#151030] py-4 px-5 placeholder:text-secondary/50 text-white 
                    rounded-xl outline-none border border-[#915EFF]/10 font-medium transition-all duration-300 
                    focus:border-[#915EFF]/50 focus:shadow-[0_0_20px_rgba(145,94,255,0.15)] focus:bg-[#1a1040]"
                  />
                </label>

                <label className="flex flex-col group">
                  <span className="text-white/80 font-medium mb-2 text-sm tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#915EFF] text-[16px]">mail</span>
                    Your Email
                  </span>
                  <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-[#151030] py-4 px-5 placeholder:text-secondary/50 text-white 
                    rounded-xl outline-none border border-[#915EFF]/10 font-medium transition-all duration-300 
                    focus:border-[#915EFF]/50 focus:shadow-[0_0_20px_rgba(145,94,255,0.15)] focus:bg-[#1a1040]"
                  />
                </label>

                <label className="flex flex-col group">
                  <span className="text-white/80 font-medium mb-2 text-sm tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#915EFF] text-[16px]">chat</span>
                    Your Message
                  </span>
                  <textarea 
                    rows="6"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="bg-[#151030] py-4 px-5 placeholder:text-secondary/50 text-white 
                    rounded-xl outline-none border border-[#915EFF]/10 font-medium transition-all duration-300 
                    focus:border-[#915EFF]/50 focus:shadow-[0_0_20px_rgba(145,94,255,0.15)] focus:bg-[#1a1040] resize-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative group mt-2 py-3.5 px-8 rounded-xl font-semibold text-white overflow-hidden
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {/* Button gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#7c4dff] transition-all duration-300 group-hover:from-[#7c4dff] group-hover:to-[#915EFF]" />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.05) 55%, transparent 60%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s linear infinite',
                    }}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(145,94,255,0.5)]" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-1 xl:flex-[0.45] xl:h-auto md:h-[550px] h-[350px] min-h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
