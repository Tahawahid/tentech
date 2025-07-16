import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GetStartedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function GetStartedButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children = 'Get Started',
}: GetStartedButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-105';

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  return (
    <a href="#contact" className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      <Sparkles size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
      {children}
      <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
    </a>
  );
}
