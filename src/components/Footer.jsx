import React from 'react';
import {github, linkedin} from '../assets';

const Footer = () => {
       
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-black-100">
            {/* Separator */}
            <div className="max-w-7xl mx-auto">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent" />
            </div>

            <div className="flex w-full flex-col items-center justify-center py-6 md:flex-row md:justify-between max-w-7xl mx-auto px-6 sm:px-16">
              <p className="mb-4 text-center font-normal md:mb-0 text-secondary text-sm">
                &copy; {currentYear}&nbsp;Blaise Swartwood
              </p>

              <div className="flex gap-5 sm:justify-center">
                <a href="https://github.com/blaiseswartwood" target="_blank" rel="noopener noreferrer" className="opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110">
                    <img src={github} alt="github" className="h-6 w-6 object-cover rounded-full"/>
                </a>
                <a href="https://www.linkedin.com/in/blaise-swartwood-80094b24a/" target="_blank" rel="noopener noreferrer" className="opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110">
                    <img src={linkedin} alt="LinkedIn" className="h-6 w-6 object-cover rounded-full"/>
                </a>
              </div>
            </div>
        </footer>
      );
}

export default Footer;