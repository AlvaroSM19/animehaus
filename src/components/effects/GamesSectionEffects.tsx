'use client';

import { useEffect, useRef, useState } from 'react';

interface GamesSectionEffectsProps {
  children: React.ReactNode;
  className?: string;
}

export function GamesSectionEffects({ children, className = '' }: GamesSectionEffectsProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        
        setScrollY(scrollProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Background parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 pointer-events-none"
        style={{
          transform: `translateX(${scrollY * 50}px) scale(${1 + scrollY * 0.1})`,
          opacity: scrollY * 0.5,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-anime-gold rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              transform: `translateY(${Math.sin(scrollY * Math.PI + i) * 20}px)`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {children}
    </div>
  );
}

interface StaggeredRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function StaggeredReveal({ children, delay = 100, className = '' }: StaggeredRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <div
            key={index}
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * delay}ms`,
            }}
          >
            {child}
          </div>
        )) :
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {children}
        </div>
      }
    </div>
  );
}

interface HorizontalSlideProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  distance?: number;
  className?: string;
}

export function HorizontalSlide({ 
  children, 
  direction = 'left',
  distance = 150,
  className = '' 
}: HorizontalSlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const initialTransform = direction === 'left' ? 
    `translateX(-${distance}px)` : 
    `translateX(${distance}px)`;

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : initialTransform,
      }}
    >
      {children}
    </div>
  );
}
