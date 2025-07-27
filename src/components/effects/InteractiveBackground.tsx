'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  emoji?: string;
  type: 'circle' | 'star' | 'emoji';
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const animeEmojis = ['🌸', '⚡', '🍥', '🎭', '🗡️', '🐉', '🥷', '🏴‍☠️', '⭐', '💫'];
      
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`, // Purple to blue range
          type: 'circle'
        });
      }

      // Add emoji particles
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 20 + 15,
          opacity: Math.random() * 0.3 + 0.1,
          color: '',
          emoji: animeEmojis[Math.floor(Math.random() * animeEmojis.length)],
          type: 'emoji'
        });
      }

      // Add star particles
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.4 + 0.2,
          color: `hsl(${Math.random() * 60 + 280}, 80%, 70%)`,
          type: 'star'
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Draw star
    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size * 0.5;
      let rot = Math.PI / 2 * 3;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);

      for (let i = 0; i < spikes; i++) {
        x = x + Math.cos(rot) * outerRadius;
        y = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = x + Math.cos(rot) * innerRadius;
        y = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }

      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
          particle.opacity = Math.min(particle.opacity + force * 0.1, 1);
        } else {
          particle.opacity = Math.max(particle.opacity - 0.01, 0.1);
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        if (particle.type === 'circle') {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'emoji') {
          ctx.font = `${particle.size}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.emoji!, particle.x, particle.y);
        } else if (particle.type === 'star') {
          ctx.fillStyle = particle.color;
          drawStar(ctx, particle.x, particle.y, particle.size);
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && particle1.type === 'circle' && particle2.type === 'circle') {
            ctx.save();
            ctx.globalAlpha = (150 - distance) / 150 * 0.2;
            ctx.strokeStyle = 'rgba(147, 51, 234, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

// Animated Background Gradients
export function AnimatedGradients() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/6 right-1/6 w-32 h-32 border border-purple-400/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/6 left-1/6 w-24 h-24 border border-blue-400/20 rotate-12 animate-bounce-slow"></div>
    </div>
  );
}

// CSS for custom animations
export function useBackgroundAnimations() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.1); }
      }

      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0px) rotate(12deg); }
        50% { transform: translateY(-20px) rotate(12deg); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
      }

      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }

      .animate-bounce-slow {
        animation: bounce-slow 4s ease-in-out infinite;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .bg-gradient-radial {
        background-image: radial-gradient(circle, var(--tw-gradient-stops));
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
}
