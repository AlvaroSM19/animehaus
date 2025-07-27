'use client';

import { useEffect, useRef, useState } from 'react';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Velocidad del scroll horizontal (0.5 = lento, 2 = rápido)
}

export function HorizontalScrollSection({ 
  children, 
  className = '',
  speed = 1
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollTrackRef.current) return;

      const container = containerRef.current;
      const scrollTrack = scrollTrackRef.current;
      
      // Obtener la posición del contenedor relativa al viewport
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Solo animar cuando el contenedor esté en viewport
      if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
        // Calcular el progreso basado en el scroll del contenedor
        const scrollStart = -containerRect.top;
        const scrollRange = container.offsetHeight - windowHeight;
        const progress = Math.min(Math.max(scrollStart / scrollRange, 0), 1);
        
        // Calcular cuánto debe moverse horizontalmente el contenido
        const maxScrollWidth = scrollTrack.scrollWidth - scrollTrack.offsetWidth;
        const horizontalOffset = progress * maxScrollWidth * speed;
        
        // Aplicar la transformación horizontal (movimiento de derecha a izquierda)
        scrollTrack.style.transform = `translateX(-${horizontalOffset}px)`;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Llamada inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        height: '400vh', // Más altura para un scroll más gradual
      }}
    >
      {/* Contenedor sticky que mantiene el contenido visible */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div 
          ref={scrollTrackRef}
          className="flex gap-8 will-change-transform"
          style={{
            width: 'max-content', // Permite que el contenido se extienda horizontalmente
            paddingLeft: '50vw', // Reducido para que empiecen más cerca
            paddingRight: '50vw', // Añadido para balance
          }}
        >
          {children}
        </div>
      </div>
      
      {/* Indicador de progreso mejorado */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center gap-3 text-white text-sm">
            <span className="font-medium">Explore Games</span>
            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-anime-gold to-anime-electric transition-all duration-300 ease-out rounded-full"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-xs opacity-75">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HorizontalScrollItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function HorizontalScrollItem({ 
  children, 
  className = '',
  index = 0 
}: HorizontalScrollItemProps) {
  const [isVisible, setIsVisible] = useState(true); // Cambiar a true por defecto
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex-shrink-0 transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxHorizontalProps {
  children: React.ReactNode;
  className?: string;
  layers?: {
    speed: number;
    content: React.ReactNode;
    className?: string;
  }[];
}

export function ParallaxHorizontal({ 
  children, 
  className = '',
  layers = []
}: ParallaxHorizontalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= 0) {
        const progress = Math.abs(rect.top) / (container.offsetHeight - windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Capas de parallax */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${layer.className || ''}`}
          style={{
            transform: `translateX(-${scrollProgress * 100 * layer.speed}px)`,
            zIndex: -index - 1
          }}
        >
          {layer.content}
        </div>
      ))}
      
      {/* Contenido principal */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
