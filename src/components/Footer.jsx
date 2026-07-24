import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
       
    const currentYear = new Date().getFullYear();
    return (
        <footer className="site-footer relative w-full">
            <div className="site-footer__trace mx-auto max-w-7xl" />

            <div className="flex w-full flex-col items-center justify-center py-10 md:flex-row md:justify-between max-w-7xl mx-auto px-6 sm:px-16">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <p className="text-sm font-medium tracking-wide text-white/85">
                  &copy; {currentYear}&nbsp;Blaise Swartwood
                </p>
                <p className="mt-1.5 flex items-center justify-center gap-2 text-[11px] text-secondary/55 md:justify-start">
                  <span className="site-footer__status" />
                  Software &middot; AI &middot; Cloud Systems
                </p>
              </div>

              <div className="mb-6 md:mb-0 text-center hidden md:block">
                <p className="text-[9px] uppercase tracking-[0.2em] text-secondary/35">
                  Built with intent
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-wide text-cyan-200/60">
                  React &middot; Three.js &middot; Framer Motion
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