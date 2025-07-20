import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, resumeLinks } from '../constants/data';
import { logo, menu, close } from '../assets';
import { cn } from '../utils/classNames';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const NavLink = ({ link, isMobile = false }) => (
    <li
      key={link.id}
      className={cn(
        "font-medium cursor-pointer",
        active === link.title ? "text-white" : "text-secondary",
        "hover:text-white",
        isMobile ? "text-[16px]" : "text-[18px]"
      )}
      onClick={() => handleNavClick(link.title)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  );

  const ResumeLink = ({ isMobile = false }) => (
    <li className={cn(
      "text-secondary hover:text-white font-medium cursor-pointer",
      isMobile ? "text-[16px]" : "text-[18px]"
    )}>
      <a href={isMobile ? resumeLinks.mobile : resumeLinks.desktop} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </li>
  );

  return (
    <nav className={cn(styles.paddingX, "w-full flex items-center py-5 fixed top-0 z-20 bg-black-100")}>
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div className={cn(
            "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl",
            toggle ? "flex" : "hidden"
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