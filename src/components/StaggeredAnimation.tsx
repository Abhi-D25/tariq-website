'use client';
import React, { useEffect, useRef, useState } from 'react';

interface StaggeredAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  staggerDelay?: number;
  threshold?: number;
  className?: string;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  animation = 'fade-in-up',
  staggerDelay = 100,
  threshold = 0.1,
  className = ''
}) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const childrenCount = React.Children.count(children);
          const newVisibleItems: number[] = [];
          
          // Stagger the animations
          for (let i = 0; i < childrenCount; i++) {
            setTimeout(() => {
              newVisibleItems.push(i);
              setVisibleItems([...newVisibleItems]);
            }, i * staggerDelay);
          }
          
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [children, staggerDelay, threshold, hasAnimated]);

  const getAnimationClasses = (index: number) => {
    const baseClasses = 'transition-all duration-700 ease-out';
    const isVisible = visibleItems.includes(index);
    
    if (!isVisible) {
      switch (animation) {
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
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={getAnimationClasses(index)}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredAnimation; 