import React from 'react';

export function AuroraText({ children, className = '', ...props }) {
  return (
    <span
      className={`bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default AuroraText;
