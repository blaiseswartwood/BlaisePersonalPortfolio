import React from 'react';

const MobileLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-4">
      <div className="relative">
        {/* Mobile-optimized spinner */}
        <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading text */}
        <div className="mt-3 text-center">
          <p className="text-secondary text-sm font-medium">{message}</p>
        </div>
        
        {/* Touch indicator for mobile */}
        <div className="mt-2 text-center">
          <p className="text-secondary text-xs opacity-75">
            Tap to interact
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileLoader; 