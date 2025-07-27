'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollHorizontalProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  distance?: number;
  className?: string;
  delay?: number;
}

export function ScrollHorizontal({ 
  children, 
  direction = 'left', 
  distance = 100,
  className = '',
  delay = 0 
}: ScrollHorizontalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  const initialTransform = direction === 'left' ? `translateX(-${distance}px)` : `translateX(${distance}px)`;
  const finalTransform = 'translateX(0px)';

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? finalTransform : initialTransform,
      }}
    >
      {children}
    </div>
  );
}

interface StaggeredGridProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredGrid({ children, staggerDelay = 200, className = '' }: StaggeredGridProps) {
  return (
    <div className={className}>
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <ScrollHorizontal 
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            distance={150}
            delay={index * staggerDelay}
          >
            {child}
          </ScrollHorizontal>
        )) :
        <ScrollHorizontal direction="left" distance={150}>
          {children}
        </ScrollHorizontal>
      }
    </div>
  );
}

interface SlideInSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  duration?: number;
  className?: string;
}

export function SlideInSection({ 
  children, 
  direction = 'left',
  distance = 200,
  duration = 800,
  className = '' 
}: SlideInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return `translateX(-${distance}px)`;
        case 'right': return `translateX(${distance}px)`;
        case 'up': return `translateY(-${distance}px)`;
        case 'down': return `translateY(${distance}px)`;
        default: return `translateX(-${distance}px)`;
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {children}
    </div>
  );
}

interface ScrollTriggeredProps {
  children: React.ReactNode;
  triggerOnce?: boolean;
  className?: string;
  animationType?: 'slide' | 'zoom' | 'rotate' | 'flip';
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function ScrollTriggered({
  children,
  triggerOnce = true,
  className = '',
  animationType = 'slide',
  direction = 'left'
}: ScrollTriggeredProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          setHasTriggered(true);
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnce, hasTriggered]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'slide':
          return direction === 'left' ? 'translate-x-[-200px]' : 
                 direction === 'right' ? 'translate-x-[200px]' :
                 direction === 'up' ? 'translate-y-[-200px]' : 'translate-y-[200px]';
        case 'zoom':
          return 'scale-0';
        case 'rotate':
          return 'rotate-180 scale-0';
        case 'flip':
          return 'rotateY-180';
        default:
          return 'translate-x-[-200px]';
      }
    }
    return 'translate-x-0 translate-y-0 scale-100 rotate-0';
  };

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out opacity-0 ${isVisible ? 'opacity-100' : ''} ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = '' 
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      if (direction === 'vertical') {
        elementRef.current.style.transform = `translateY(${rate}px)`;
      } else {
        elementRef.current.style.transform = `translateX(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
