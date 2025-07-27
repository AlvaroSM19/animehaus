'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInRotate';
  delay?: number;
  className?: string;
}

export function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = isVisible ? 'animate-in' : 'animate-out';
    return `${baseClass} ${animation}`;
  };

  return (
    <div 
      ref={sectionRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

// Typewriter Effect Component
export function TypewriterText({ 
  text, 
  speed = 100, 
  className = '',
  startDelay = 0 
}: {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, started]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Floating Cards Effect
export function FloatingCard({ 
  children, 
  intensity = 10,
  className = '' 
}: {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * intensity;
      const rotateY = -(x / rect.width) * intensity;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [intensity]);

  return (
    <div 
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

// Magnetic Button Effect
export function MagneticButton({ 
  children, 
  className = '',
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const moveX = x * force * 0.3;
        const moveY = y * force * 0.3;

        buttonRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (!buttonRef.current) return;
      buttonRef.current.style.transform = 'translate(0px, 0px)';
    };

    const button = buttonRef.current;
    if (button) {
      document.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (button) {
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <button 
      ref={buttonRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Scroll Progress Indicator
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Custom Cursor Effect
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
        width: '20px',
        height: '20px',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(147, 51, 234, 0.3))',
        borderRadius: '50%',
        filter: 'blur(1px)'
      }}
    />
  );
}

// Initialize all animations
export function useAnimationEffects() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes slideInRotate {
        from {
          opacity: 0;
          transform: translateY(50px) rotate(-5deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotate(0deg);
        }
      }

      .animate-out {
        opacity: 0;
      }

      .animate-in.fadeInUp {
        animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .animate-in.fadeInLeft {
        animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .animate-in.fadeInRight {
        animation: fadeInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .animate-in.scaleIn {
        animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .animate-in.slideInRotate {
        animation: slideInRotate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      /* Hide default cursor on interactive elements when custom cursor is active */
      .custom-cursor-active button,
      .custom-cursor-active a,
      .custom-cursor-active [role="button"] {
        cursor: none;
      }
    `;
    document.head.appendChild(style);

    // Add class to body for custom cursor
    document.body.classList.add('custom-cursor-active');

    return () => {
      document.head.removeChild(style);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);
}
