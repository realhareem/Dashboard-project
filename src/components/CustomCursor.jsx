import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#F59E0B] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{ transform: `translate(${dotPosition.x - 6}px, ${dotPosition.y - 6}px)` }}
      />
      <div 
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#F59E0B]/50 rounded-full pointer-events-none z-[9998] transition-transform duration-200 ease-out flex items-center justify-center"
        style={{ 
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          boxShadow: '0 0 15px #F59E0B',
          filter: 'blur(1px)'
        }}
      >
        <div className="w-1 h-1 bg-[#F59E0B] rounded-full opacity-20"></div>
      </div>
    </>
  );
}