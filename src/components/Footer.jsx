import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
       
    const currentYear = new Date().getFullYear();
    return (
        <footer className="site-footer relative w-full">
            <div className="site-footer__trace mx-auto max-w-7xl" />

            <div className="site-footer__inner mx-auto w-full max-w-7xl px-6 py-10 sm:px-16">
              <div className="text-center md:text-left">
                <p className="text-sm font-medium tracking-wide text-white/85">
                  &copy; {currentYear}&nbsp;Blaise Swartwood
                </p>
                <p className="mt-1.5 flex items-center justify-center gap-2 text-[11px] text-secondary/55 md:justify-start">
                  <span className="site-footer__status" />
                  Software &middot; AI &middot; Cloud Systems
                </p>
              </div>

              <address className="footer-contact" aria-label="Contact information">
                <a href="mailto:blaise.swartwood@gmail.com" className="footer-contact__item">
                  <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                  <span>
                    <small>Email</small>
                    <strong>blaise.swartwood@gmail.com</strong>
                  </span>
                </a>
                <a href="tel:+18087489720" className="footer-contact__item">
                  <span className="material-symbols-outlined" aria-hidden="true">call</span>
                  <span>
                    <small>Phone</small>
                    <strong>(808) 748-9720</strong>
                  </span>
                </a>
                <div className="footer-contact__item">
                  <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                  <span>
                    <small>Based in</small>
                    <strong>Sunnyvale, USA</strong>
                  </span>
                </div>
              </address>

              <div className="footer-social">
                <a href="https://github.com/blaiseswartwood" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="Blaise on GitHub" title="GitHub">
                    <img src={github} alt="" className="footer-social-icon footer-social-icon--github"/>
                </a>
                <a href="https://www.linkedin.com/in/blaise-swartwood-80094b24a/" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="Blaise on LinkedIn" title="LinkedIn">
                    <img src={linkedin} alt="" className="footer-social-icon"/>
                </a>
              </div>
            </div>
        </footer>
      );
}

export default Footer;