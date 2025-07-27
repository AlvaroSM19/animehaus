import Link from 'next/link';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Play, 
  Users, 
  Trophy, 
  ArrowRight,
  Star,
  GamepadIcon,
  TrendingUp
} from 'lucide-react';
import { 
  EffectsProvider,
  EnhancedCard,
  EnhancedButton,
  RevealSection,
  EnhancedHero,
  TypewriterText,
  AnimatedSection,
  SimpleHorizontalScroll
} from '@/components/effects';

const games = [
  {
    id: 'impostor',
    title: 'Anime Impostor',
    description: 'Encuentra el personaje que no pertenece al grupo temático',
    emoji: '🕵️',
    difficulty: 'Medio',
    players: '1 jugador',
    time: '5-10 min',
    href: '/games/impostor',
    color: 'game-card-impostor',
    features: ['Interfaz circular', 'Feedback inmediato', 'Múltiples categorías']
  },
  {
    id: 'anime-grid',
    title: 'Cuadrícula de Anime',
    description: 'Completa la cuadrícula con personajes que cumplan ambas condiciones',
    emoji: '🎯',
    difficulty: 'Difícil',
    players: '1 jugador',
    time: '15-20 min',
    href: '/games/anime-grid',
    color: 'game-card-grid',
    features: ['Búsqueda inteligente', 'Validación cruzada', 'Múltiples categorías']
  },
  {
    id: 'anime-wordle',
    title: 'Anime Wordle',
    description: 'Adivina el personaje de anime con pistas visuales',
    emoji: '🔤',
    difficulty: 'Fácil',
    players: '1 jugador',
    time: '3-5 min',
    href: '/games/anime-wordle',
    color: 'game-card-wordle',
    features: ['Pistas visuales', 'Sistema de colores', 'Múltiples intentos']
  }
];

const stats = [
  {
    icon: GamepadIcon,
    value: '3',
    label: 'Mini-Juegos',
    description: 'Diferentes tipos de desafíos'
  },
  {
    icon: Users,
    value: '168',
    label: 'Personajes',
    description: 'Personajes de One Piece incluidos'
  },
  {
    icon: Star,
    value: '1',
    label: 'Anime',
    description: 'One Piece completamente cubierto'
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Satisfacción',
    description: 'Calificación de usuarios'
  }
];

const featuredAnimes = [
  { name: 'My Hero Academia', emoji: '🦸' },
  { name: 'One Piece', emoji: '🏴‍☠️' },
  { name: 'Naruto', emoji: '🥷' },
  { name: 'Dragon Ball', emoji: '🐉' },
  { name: 'Attack on Titan', emoji: '⚔️' },
  { name: 'Demon Slayer', emoji: '🗡️' },
];

export default function HomePage() {
  return (
    <EffectsProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <EnhancedHero>
          <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <div className="text-center">
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="mb-6">
                  <span className="text-5xl sm:text-6xl animate-bounce-slow">🎌</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={400}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterText text="Anime" speed={150} startDelay={600} />
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    <TypewriterText text="Haus" speed={150} startDelay={1800} />
                  </span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={800}>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                  Tu casa del anime. Explora, juega y desafía tu conocimiento con mini-juegos únicos 
                  basados en One Piece y más universos anime por venir.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <EnhancedButton 
                    magnetic={true}
                    glowing={true}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                  >
                    <Link href="/games" className="flex items-center">
                      <Play className="mr-2 h-5 w-5" />
                      Jugar Ahora
                    </Link>
                  </EnhancedButton>
                  
                  <EnhancedButton 
                    magnetic={true}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                  >
                    <Link href="/personajes" className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Ver Personajes
                    </Link>
                  </EnhancedButton>
                  
                  <EnhancedButton 
                    magnetic={true}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg transition-all duration-300"
                  >
                    <Link href="/about" className="flex items-center">
                      Explorar Juegos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </EnhancedButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </EnhancedHero>

        {/* Stats Section */}
        <section className="py-8 bg-gray-50/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <RevealSection animation="fadeInUp" stagger={true}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <EnhancedCard 
                      key={index} 
                      className="text-center p-6" 
                      floating={true}
                      glowing={index % 2 === 0}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-anime-gold/20 rounded-full">
                          <Icon className="h-8 w-8 text-anime-gold" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                      <div className="text-sm text-gray-400">{stat.description}</div>
                    </EnhancedCard>
                  );
                })}
              </div>
            </RevealSection>
          </div>
        </section>        {/* Games Introduction */}
        <section className="py-2 bg-gray-900/50 seamless-section">
          <div className="container mx-auto px-4 text-center">
            <RevealSection animation="fadeInUp">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 compact-title">
                <TypewriterText text="Mini-Juegos Disponibles" speed={80} />
              </h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto mb-2 compact-text">
                Cada juego ofrece una experiencia única para poner a prueba tu conocimiento de anime
              </p>
              <div className="flex items-center justify-center gap-2 text-anime-gold animate-bounce">
                <ArrowRight className="h-4 w-4 rotate-90" />
                <span className="text-sm font-medium">Scroll para explorar horizontalmente</span>
                <ArrowRight className="h-4 w-4 rotate-90" />
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Games Section - Simple Horizontal Scroll */}
        <SimpleHorizontalScroll className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 games-section-seamless compact-horizontal-scroll">
          {games.map((game, index) => (
            <div 
              key={game.id} 
              className={`w-80 h-96 mx-6 flex-shrink-0 large-game-card ${
                index === 0 ? 'first-game-card' : ''
              } ${
                index === games.length - 1 ? 'last-game-card' : ''
              }`}
            >
              <Link href={game.href} className="block h-full">
                <EnhancedCard 
                  className={`h-full ${game.color} p-0 overflow-hidden horizontal-game-card-enhanced transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                  floating={true}
                  glowing={index % 3 === 0}
                >
                  <CardHeader className="text-white relative p-6">
                    <div className="absolute top-4 right-4 text-4xl animate-bounce-slow">
                      {game.emoji}
                    </div>
                    <div className="pt-14">
                      <CardTitle className="text-2xl mb-3 text-white">{game.title}</CardTitle>
                      <CardDescription className="text-gray-200 text-base leading-relaxed">
                        {game.description}
                      </CardDescription>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {game.difficulty}
                      </span>
                      <span className="text-gray-300">{game.time}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="text-white space-y-4 flex-1 flex flex-col justify-between card-content p-6">
                    <div>
                      <div className="flex items-center text-sm text-gray-300 mb-4">
                        <Users className="mr-2 h-4 w-4" />
                        {game.players}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Características:</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          {game.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="mr-2 h-3 w-3 text-anime-gold flex-shrink-0" />
                              <span className="leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 mt-4 py-3 rounded-md flex items-center justify-center text-base font-medium transition-all duration-200">
                      <Play className="mr-2 h-4 w-4" />
                      Jugar Ahora
                    </div>
                  </CardContent>
                </EnhancedCard>
              </Link>
            </div>
          ))}
        </SimpleHorizontalScroll>

        {/* Featured Animes Section */}
        <section className="py-8 bg-gray-900/50 backdrop-blur-sm text-white">
          <div className="container mx-auto px-4">
            <RevealSection animation="fadeInUp" className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                <TypewriterText text="Animes Destacados" speed={120} />
              </h2>
              <p className="text-gray-300 text-base">
                Contenido de las series más populares y queridas
              </p>
            </RevealSection>
            
            <RevealSection animation="scaleIn" stagger={true}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {featuredAnimes.map((anime, index) => (
                  <EnhancedCard
                    key={index} 
                    className="text-center p-4 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    floating={true}
                  >
                    <div className="text-3xl mb-2 animate-float">{anime.emoji}</div>
                    <div className="text-xs font-medium">{anime.name}</div>
                  </EnhancedCard>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-anime-electric to-anime-nature relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <RevealSection animation="fadeInUp">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                <TypewriterText text="¿Listo para el Desafío?" speed={100} />
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Únete a miles de otakus que ya están poniendo a prueba su conocimiento de anime
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <EnhancedButton 
                  magnetic={true}
                  glowing={true}
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 text-base rounded-lg transition-all duration-300"
                >
                  <Link href="/games/bingo" className="flex items-center">
                    <Trophy className="mr-2 h-4 w-4" />
                    Comenzar con Bingo
                  </Link>
                </EnhancedButton>
                
                <EnhancedButton 
                  magnetic={true}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base rounded-lg transition-all duration-300"
                >
                  <Link href="/games" className="flex items-center">
                    Ver Todos los Juegos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </EnhancedButton>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </EffectsProvider>
  );
}
