import React from 'react';
import { twMerge } from 'tailwind-merge';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-[#8E8154] text-white hover:shadow-[0_0_0_3px_rgba(142,129,84,0.2)]",
    secondary: "bg-[#1C1C1C] text-white hover:shadow-[0_0_0_3px_rgba(28,28,28,0.2)]",
    outline: "border-2 border-[#8E8154] text-[#8E8154] hover:bg-[#8E8154] hover:text-white hover:shadow-[0_0_0_3px_rgba(142,129,84,0.2)]"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
