'use client';

import { 
  ScrollEffects, 
  FloatingParticles, 
  ParallaxBackground, 
  useScrollReveal 
} from './ScrollEffects';
import { 
  AnimatedSection,
  TypewriterText,
  FloatingCard,
  MagneticButton,
  ScrollProgress,
  CustomCursor,
  useAnimationEffects
} from './AnimationEffects';
import { 
  InteractiveBackground, 
  AnimatedGradients, 
  useBackgroundAnimations 
} from './InteractiveBackground';

interface EffectsProviderProps {
  children: React.ReactNode;
  enableCursor?: boolean;
  enableParticles?: boolean;
  enableBackground?: boolean;
}

export function EffectsProvider({ 
  children, 
  enableCursor = true,
  enableParticles = true,
  enableBackground = true
}: EffectsProviderProps) {
  // Initialize all effects
  useScrollReveal();
  useAnimationEffects();
  useBackgroundAnimations();

  return (
    <div className="relative">
      {/* Progress bar */}
      <ScrollProgress />
      
      {/* Custom cursor */}
      {enableCursor && <CustomCursor />}
      
      {/* Background effects */}
      {enableBackground && (
        <>
          <AnimatedGradients />
          <InteractiveBackground />
          <ParallaxBackground />
        </>
      )}
      
      {/* Floating particles */}
      {enableParticles && <FloatingParticles />}
      
      {/* Content with scroll effects */}
      <ScrollEffects>
        <div className="relative z-10">
          {children}
        </div>
      </ScrollEffects>
    </div>
  );
}

// Enhanced Card Component with multiple effects
export function EnhancedCard({ 
  children, 
  className = '',
  glowing = false,
  floating = false,
  magnetic = false // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  floating?: boolean;
  magnetic?: boolean;
}) {
  let cardClasses = `glassmorphism ${className}`;
  
  if (glowing) cardClasses += ' anime-glow';
  if (floating) cardClasses += ' animate-float';

  const CardWrapper = floating ? FloatingCard : 'div';

  return (
    <CardWrapper className={cardClasses}>
      {children}
    </CardWrapper>
  );
}

// Enhanced Button with effects
export function EnhancedButton({ 
  children, 
  className = '',
  magnetic = false,
  glowing = false,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  glowing?: boolean;
  [key: string]: any;
}) {
  let buttonClasses = className;
  if (glowing) buttonClasses += ' anime-glow';

  const ButtonWrapper = magnetic ? MagneticButton : 'button';

  return (
    <ButtonWrapper className={buttonClasses} {...props}>
      {children}
    </ButtonWrapper>
  );
}

// Section with reveal animations
export function RevealSection({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  stagger = false,
  className = '' 
}: {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInRotate';
  delay?: number;
  stagger?: boolean;
  className?: string;
}) {
  if (stagger && Array.isArray(children)) {
    return (
      <div className={className}>
        {children.map((child, index) => (
          <AnimatedSection 
            key={index}
            animation={animation}
            delay={delay + (index * 100)}
          >
            {child}
          </AnimatedSection>
        ))}
      </div>
    );
  }

  return (
    <AnimatedSection animation={animation} delay={delay} className={className}>
      {children}
    </AnimatedSection>
  );
}

// Hero section with special effects
export function EnhancedHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Additional animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

// Import simple horizontal scroll
export { SimpleHorizontalScroll } from './SimpleHorizontalScroll';

// Import horizontal scroll section
export {
  HorizontalScrollSection,
  HorizontalScrollItem,
  ParallaxHorizontal
} from './HorizontalScrollSection';

// Import games section effects
export {
  GamesSectionEffects,
  StaggeredReveal,
  HorizontalSlide
} from './GamesSectionEffects';

// Import scroll animations
export {
  ScrollHorizontal,
  StaggeredGrid,
  SlideInSection,
  ScrollTriggered,
  ParallaxElement
} from './ScrollAnimations';

// Export all components for easy use
export {
  ScrollEffects,
  AnimatedSection,
  TypewriterText,
  FloatingCard,
  MagneticButton,
  ScrollProgress,
  CustomCursor,
  InteractiveBackground,
  AnimatedGradients
};
