import { forwardRef, type HTMLAttributes } from 'react';

type CardVariant = 'default' | 'bordered';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl p-6';

    const variants = {
      default: 'bg-card',
      bordered: 'bg-card border border-border',
    };

    return (
      <div
        {...props}
        className={`${baseStyles} ${variants[variant]} ${className ?? ''}`}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
