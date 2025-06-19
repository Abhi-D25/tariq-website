'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'fade-in-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-in-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'slide-in-left':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slide-in-right':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 