import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('visible');
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left': return 'scroll-reveal-left';
      case 'right': return 'scroll-reveal-right';
      default: return 'scroll-reveal';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getDirectionClass()} ${className}`}
    >
      {children}
    </div>
  );
}