import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { navLinks, resumeLinks } from '../constants/data';
import logo from '../assets/logo.svg';
import { cn } from '../utils/classNames';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (!current) return;
        const link = navLinks.find((item) => item.id === current.target.id);
        if (link) setActive(link.title);
      },
      { rootMargin: '-18% 0px -72% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toggle) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setToggle(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [toggle]);

  const handleNavClick = (link) => {
    setActive(link.title);
    setToggle(false);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    setActive("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLink = ({ link, isMobile = false }) => (
    <li className="relative">
      <a
        href={`#${link.id}`}
        aria-current={active === link.title ? 'location' : undefined}
        onClick={() => handleNavClick(link)}
        className={cn(
          'group relative flex items-center font-medium transition-colors duration-300',
          active === link.title ? 'text-white' : 'text-secondary/80 hover:text-white',
          isMobile ? 'w-full text-[15px]' : 'text-[13px]'
        )}
      >
        {link.title}
      </a>
      {!isMobile && (
        <span className={cn(
          'absolute bottom-0 left-0 h-px bg-cyan-300 transition-all duration-300',
          active === link.title ? 'w-full' : 'w-0 group-hover:w-full'
        )} />
      )}
    </li>
  );

  const ResumeLink = ({ isMobile = false }) => (
    <li>
      <a
        href={isMobile ? resumeLinks.mobile : resumeLinks.desktop}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group flex items-center gap-1.5 font-medium text-white transition-colors duration-300 hover:text-cyan-200',
          isMobile ? 'w-full text-[15px]' : 'nav-resume-link text-[12px]'
        )}
      >
        Resume
        <span className="material-symbols-outlined text-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          north_east
        </span>
      </a>
    </li>
  );

  return (
    <nav className={cn(
      styles.paddingX,
      'site-nav fixed top-0 z-20 flex w-full items-center transition-all duration-500',
      scrolled ? 'py-2.5 navbar-glass-scrolled' : 'py-4 navbar-glass'
    )}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" onClick={handleLogoClick} aria-label="Blaise Swartwood, home">
          <img src={logo} alt="" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />
          <p className="cursor-pointer whitespace-nowrap font-display text-[15px] font-semibold text-white sm:text-[16px]">
            Blaise Swartwood
            <span className="site-nav__role hidden xl:inline">Software / AI</span>
          </p>
        </a>

        <ul className="hidden list-none flex-row items-center gap-6 md:flex lg:gap-8">
          {navLinks.map(link => <NavLink key={link.id} link={link} />)}
          <ResumeLink />
        </ul>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            className="nav-icon-button flex h-11 w-11 cursor-pointer items-center justify-center border-none bg-transparent text-white"
            onClick={() => setToggle(!toggle)}
          >
            <span className="material-symbols-outlined text-[24px]">{toggle ? 'close' : 'menu'}</span>
          </button>

          <div id="mobile-navigation" className={cn(
            'mobile-nav-panel absolute right-4 top-[68px] z-10 min-w-[220px] origin-top-right p-5 transition-all duration-300',
            toggle ? 'visible scale-100 opacity-100' : 'pointer-events-none invisible scale-95 opacity-0'
          )}>
            <ul className="flex list-none flex-col items-stretch gap-1">
              {navLinks.map(link => <NavLink key={link.id} link={link} isMobile />)}
              <ResumeLink isMobile />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;