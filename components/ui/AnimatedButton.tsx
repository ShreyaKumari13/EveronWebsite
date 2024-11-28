import React from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'green' | 'submit';
  size?: 'default' | 'large' | 'full';
  showArrow?: boolean;
}

const AnimatedButton = ({
  text,
  variant = 'primary',
  size = 'default',
  showArrow = true,
  className,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "rounded-[10px] flex items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] group shadow-md";
  
  const variants = {
    primary: "bg-[#8E8154] hover:bg-[#A2925F] active:bg-[#72683E] hover:shadow-[0_0_0_3px_rgba(142,129,84,0.2)]",
    green: "bg-[#004400] hover:bg-[#005500] active:bg-[#003300] hover:shadow-[0_0_0_3px_rgba(0,68,0,0.2)]",
    submit: "bg-[#004400] hover:bg-[#003300] active:bg-[#002200] hover:shadow-[0_0_0_3px_rgba(0,68,0,0.2)]"
  };

  const sizes = {
    default: "w-[180px] h-[40px] px-4",
    large: "w-[180px] md:w-[200px] h-[45px] md:h-[50px] px-4",
    full: "w-full py-2 px-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className={`text-[16px] md:text-[20px] font-lato font-normal text-white transform transition-transform duration-300 ${showArrow ? 'group-hover:translate-x-[-4px]' : ''}`}>
        {text}
      </span>
      {showArrow && (
        <div className={`bg-white rounded-full flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-2 ${
          size === 'large' ? 'w-[30px] h-[30px] md:w-[35px] md:h-[35px]' : 'w-[25px] h-[25px] md:w-[30px] md:h-[30px]'
        }`}>
          <svg
            width={size === 'large' ? "16" : "14"}
            height={size === 'large' ? "16" : "14"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-300 group-hover:translate-x-1 ${
              size === 'large' ? 'md:w-5 md:h-5' : ''
            }`}
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke={variant === 'primary' ? '#8E8154' : '#004400'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default AnimatedButton;