import React from 'react';
import { Typography } from "@material-tailwind/react";
import {github} from '../assets';
import {linkedin} from '../assets';

const Footer = () => {
       
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-black-100">
         
            <div className="mt-12 flex w-full flex-col items-center justify-center py-5 md:flex-row md:justify-between max-w-7xl mx-auto">
              <Typography
                variant="small"
                className="mb-4 pl-10 text-center font-normal md:mb-0 text-secondary cursor-pointer flex"
              >
                &copy; {currentYear} 
                {/* <a href="https://drive.google.com/file/d/10Ybj21mwfqhpkoe54ls5oZURLARTfiou/view?usp=sharing" target="_blank"> */}
                  &nbsp;Blaise Swartwood
              </Typography>

              <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                <Typography as="a" href="https://github.com/rhit-swartwba" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                    <img src={github} alt="github" className="h-5 w-5 object-cover rounded-2xl"/>
                </Typography>
                <Typography as="a" href="https://www.linkedin.com/in/blaise-swartwood-80094b24a/" className="opacity-80 transition-opacity hover:opacity-100">
                    <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-cover rounded-2xl"/>
                </Typography>
              </div>
            </div>
        </footer>
      );
}

export default Footer;