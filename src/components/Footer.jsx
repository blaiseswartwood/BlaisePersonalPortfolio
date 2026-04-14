import {github, linkedin} from '../assets';

const Footer = () => {
       
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-[#050816]">
            {/* Separator */}
            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-[#915EFF]/40 to-transparent" />
            </div>

            <div className="flex w-full flex-col items-center justify-center py-10 md:flex-row md:justify-between max-w-7xl mx-auto px-6 sm:px-16">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <p className="text-white/80 text-sm font-medium tracking-wide">
                  &copy; {currentYear}&nbsp;Blaise Swartwood
                </p>
                <p className="text-secondary/50 text-xs mt-1.5 flex items-center gap-1.5 justify-center md:justify-start">
                  <span className="material-symbols-outlined text-[12px] text-[#915EFF]/60">auto_awesome</span>
                  AI &middot; ML &middot; Data Science
                </p>
                <p className="text-secondary/30 text-[10px] mt-1">
                  React &middot; Three.js &middot; Framer Motion
                </p>
              </div>

              {/* Center — AI tagline */}
              <div className="mb-6 md:mb-0 text-center hidden md:block">
                <p className="text-secondary/40 text-[11px] tracking-widest uppercase">
                  Exploring the frontier of
                </p>
                <p className="text-[#915EFF]/60 text-xs font-medium mt-0.5 tracking-wide">
                  Generative AI &amp; Intelligent Systems
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <a href="https://github.com/blaiseswartwood" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <img src={github} alt="github" className="h-5 w-5 object-cover rounded-full"/>
                </a>
                <a href="https://www.linkedin.com/in/blaise-swartwood-80094b24a/" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                    <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-cover rounded-full"/>
                </a>
              </div>
            </div>
        </footer>
      );
}

export default Footer;