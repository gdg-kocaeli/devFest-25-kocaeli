import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`
        w-60 relative rounded-lg bg-[#4285f4] h-12
        flex items-center justify-center px-4 py-3 box-border 
        text-left text-base text-white font-inter font-medium
        hover:bg-[#3367d6] transition-colors
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
