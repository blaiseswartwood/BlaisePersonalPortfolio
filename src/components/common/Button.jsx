import React from 'react';
import { cn } from '../../utils/classNames';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#915EFF] text-white hover:bg-[#7c4dff] focus:ring-[#915EFF]",
    secondary: "bg-secondary text-white hover:bg-gray-600 focus:ring-secondary",
    outline: "border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white focus:ring-[#915EFF]",
    ghost: "text-secondary hover:text-white hover:bg-black-100 focus:ring-secondary"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabledClasses,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 