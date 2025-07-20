import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-secondary text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 