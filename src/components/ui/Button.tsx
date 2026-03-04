import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = '', variant = 'primary', size = 'md', children, ...props },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium cursor-pointer transition-colors rounded-xl  disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-accent text-black hover:bg-accent-hover',
      secondary:
        'bg-card text-foreground border border-border hover:bg-accent-hover hover:bg-border',
      ghost: 'text-muted hover:text-foreground hover:bg-card',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
