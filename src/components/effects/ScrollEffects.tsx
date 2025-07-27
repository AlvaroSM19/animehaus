'use client';

import { useEffect, useRef } from 'react';

interface ScrollEffectsProps {
  children: React.ReactNode;
}

export function ScrollEffects({ children }: ScrollEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Parallax background effect
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Floating particles effect
      const particles = document.querySelectorAll('.floating-particle');
      particles.forEach((particle, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        const yPos = Math.sin(scrollY * 0.01 + index) * 20;
        const xPos = Math.cos(scrollY * 0.008 + index) * 10;
        (particle as HTMLElement).style.transform = `translate(${xPos}px, ${yPos}px)`;
      });

      // Reveal animations
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });

      // Stagger animations
      const staggerElements = document.querySelectorAll('.scroll-stagger');
      staggerElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          setTimeout(() => {
            element.classList.add('stagger-revealed');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}

// Floating Particles Component
export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Anime-themed floating particles */}
      <div className="floating-particle absolute top-1/4 left-1/4 text-4xl opacity-10">🌸</div>
      <div className="floating-particle absolute top-1/3 right-1/4 text-3xl opacity-15">⚡</div>
      <div className="floating-particle absolute top-1/2 left-1/6 text-5xl opacity-8">🍥</div>
      <div className="floating-particle absolute top-2/3 right-1/3 text-4xl opacity-12">🎭</div>
      <div className="floating-particle absolute top-3/4 left-1/3 text-3xl opacity-10">🗡️</div>
      <div className="floating-particle absolute top-1/6 right-1/6 text-4xl opacity-15">🐉</div>
      <div className="floating-particle absolute bottom-1/4 left-1/2 text-3xl opacity-8">🥷</div>
      <div className="floating-particle absolute bottom-1/3 right-1/2 text-5xl opacity-12">🏴‍☠️</div>
    </div>
  );
}

// Parallax Background Component
export function ParallaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-indigo-900/20" data-speed="0.3"></div>
      <div className="parallax-bg absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" data-speed="0.5"></div>
      <div className="parallax-bg absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" data-speed="0.4"></div>
    </div>
  );
}

// Scroll Reveal Hook
export function useScrollReveal() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .scroll-reveal.revealed {
        opacity: 1;
        transform: translateY(0);
      }

      .scroll-stagger {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .scroll-stagger.stagger-revealed {
        opacity: 1;
        transform: translateX(0);
      }

      .floating-particle {
        transition: transform 0.3s ease-out;
      }

      .glassmorphism {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        transition: all 0.3s ease;
      }

      .glassmorphism:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .scroll-parallax {
        transform-style: preserve-3d;
        transition: transform 0.1s ease-out;
      }

      .anime-glow {
        box-shadow: 
          0 0 20px rgba(147, 51, 234, 0.3),
          0 0 40px rgba(147, 51, 234, 0.2),
          0 0 60px rgba(147, 51, 234, 0.1);
        transition: box-shadow 0.3s ease;
      }

      .anime-glow:hover {
        box-shadow: 
          0 0 30px rgba(147, 51, 234, 0.5),
          0 0 60px rgba(147, 51, 234, 0.3),
          0 0 90px rgba(147, 51, 234, 0.2);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
}
