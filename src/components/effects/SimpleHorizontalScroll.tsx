'use client';

import { useEffect, useRef, useState } from 'react';

interface SimpleHorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleHorizontalScroll({ children, className = '' }: SimpleHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const container = containerRef.current;
      const content = contentRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Verificar si el contenedor está visible
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calcular progreso con más sensibilidad
        const scrollStart = Math.max(0, windowHeight - rect.top);
        const scrollRange = container.offsetHeight + windowHeight;
        const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
        
        // Aumentar significativamente el movimiento
        const contentWidth = content.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxMove = contentWidth - viewportWidth + (viewportWidth * 0.5); // Más movimiento
        
        // Ajustar la posición inicial para que el primer elemento sea más visible
        const initialOffset = viewportWidth * 0.15; // 15% del viewport para centrar mejor
        const moveDistance = (progress * maxMove * 1.2) - initialOffset; // Reducido el multiplicador para mejor control
        
        content.style.transform = `translateX(-${Math.max(0, moveDistance)}px)`;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: '200vh' }} // Reducido significativamente para menos espacio
    >
      {/* Indicadores laterales */}
      <div className="scroll-indicator-left" style={{ opacity: scrollProgress > 0.1 ? 0.8 : 0.3 }} />
      <div className="scroll-indicator-right" style={{ opacity: scrollProgress < 0.9 ? 0.8 : 0.3 }} />
      
      {/* Fondo con partículas */}
      <div className="horizontal-bg-particles" />
      
      <div className="sticky top-0 h-screen overflow-hidden flex items-center py-0">
        <div 
          ref={contentRef}
          className="flex gap-8 transition-transform duration-75 ease-out"
          style={{ 
            width: 'max-content',
            paddingLeft: '60vw', // Aumentado para que el primer juego sea visible
            paddingRight: '60vw' // Aumentado para que el último juego sea visible
          }}
        >
          {children}
        </div>
      </div>
      
      {/* Debug indicator mejorado */}
      <div className="fixed top-4 right-4 z-50 bg-black/70 text-white p-3 rounded-lg border border-white/20">
        <div className="text-xs mb-1">Scroll Horizontal</div>
        <div className="text-xs">Progress: {Math.round(scrollProgress * 100)}%</div>
        <div className="w-24 h-2 bg-white/20 rounded mt-1">
          <div 
            className="h-full bg-anime-gold rounded transition-all duration-200"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="text-xs mt-1 opacity-75">
          {scrollProgress < 0.1 ? '← Continúa scrolleando' : 
           scrollProgress > 0.9 ? 'Final →' : '← Explorando →'}
        </div>
      </div>
      
      {/* Instrucciones iniciales */}
      {scrollProgress < 0.05 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-6 py-3 rounded-full border border-anime-gold/50 animate-pulse">
          <div className="flex items-center gap-2 text-sm">
            <span>🎮</span>
            <span>Scroll hacia abajo para explorar los juegos</span>
            <span>👇</span>
          </div>
        </div>
      )}
    </div>
  );
}
