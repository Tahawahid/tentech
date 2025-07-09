import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 hover:transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-3 text-base gap-2'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {Icon && iconPosition === 'left' && <Icon size={size === 'lg' ? 18 : size === 'md' ? 16 : 14} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'lg' ? 18 : size === 'md' ? 16 : 14} />}
    </button>
  );
}
