import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, resumeLinks } from '../constants/data';
import { logo, menu, close } from '../assets';
import { cn } from '../utils/classNames';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => {
    setActive(link.title);
    setToggle(false);
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setActive("");
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  };

  const NavLink = ({ link, isMobile = false }) => (
    <li
      key={link.id}
      className={cn(
        "font-medium cursor-pointer relative group",
        active === link.title ? "text-white" : "text-secondary",
        "hover:text-white",
        isMobile ? "text-[16px]" : "text-[18px]"
      )}
      onClick={() => handleNavClick(link)}
    >
      <a href={isHomePage ? `#${link.id}` : `/#${link.id}`}>{link.title}</a>
      {!isMobile && (
        <span className={cn(
          "absolute -bottom-1 left-0 h-[2px] bg-[#915EFF] transition-all duration-300",
          active === link.title ? "w-full" : "w-0 group-hover:w-full"
        )} />
      )}
    </li>
  );

  const ResumeLink = ({ isMobile = false }) => (
    <li className={cn(
      "text-secondary hover:text-white font-medium cursor-pointer relative group",
      isMobile ? "text-[16px]" : "text-[18px]"
    )}>
      <a href={isMobile ? resumeLinks.mobile : resumeLinks.desktop} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      {!isMobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#915EFF] transition-all duration-300 group-hover:w-full" />
      )}
    </li>
  );

  return (
    <nav className={cn(
      styles.paddingX,
      "w-full flex items-center fixed top-0 z-20 transition-all duration-500",
      scrolled ? "py-3 navbar-glass-scrolled" : "py-5 navbar-glass"
    )}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Blaise Swartwood
            <span className="sm:block hidden">&nbsp;| Personal Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => <NavLink key={link.id} link={link} />)}
          <ResumeLink />
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            className="w-[28px] h-[28px] flex items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-full h-full object-contain"
            />
          </button>

          {/* Mobile Menu */}
          <div className={cn(
            "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300 origin-top-right",
            toggle ? "flex scale-100 opacity-100" : "hidden scale-95 opacity-0"
          )}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
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