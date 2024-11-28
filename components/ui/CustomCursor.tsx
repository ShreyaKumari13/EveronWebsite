'use client'

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorStyle);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="relative">
          {/* Outer ring */}
          <div
            className={`absolute rounded-full transition-all duration-200 border border-[#8E8154] ${
              isPointer ? 'w-8 h-8 opacity-50' : 'w-6 h-6 opacity-30'
            }`}
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Inner dot */}
          <div
            className={`absolute bg-[#8E8154] rounded-full transition-all duration-200 ${
              isPointer ? 'w-1 h-1' : 'w-1.5 h-1.5'
            }`}
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
