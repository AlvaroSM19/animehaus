import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Play, 
  Users, 
  Trophy, 
  Zap,
  ArrowRight,
  Star,
  GamepadIcon,
  TrendingUp
} from 'lucide-react';

const games = [
  {
    id: 'bingo',
    title: 'Bingo Anime',
    description: 'Completa tu tablero con personajes, objetos y conceptos de tus animes favoritos',
    emoji: '🎲',
    difficulty: 'Fácil',
    players: '1 jugador',
    time: '5-10 min',
    href: '/games/bingo',
    color: 'game-card-bingo',
    features: ['Tableros 4x4 y 5x5', 'Sorteo aleatorio', 'Múltiples animes']
  },
  {
    id: 'grid-trivia',
    title: 'Grid Trivia',
    description: 'Conecta elementos por atributos compartidos en una grilla 3x3',
    emoji: '🎯',
    difficulty: 'Medio',
    players: '1 jugador',
    time: '10-15 min',
    href: '/games/grid-trivia',
    color: 'game-card-grid',
    features: ['Drag & Drop', 'Validación instantánea', 'Múltiples categorías']
  },
  {
    id: 'connections',
    title: 'Connections',
    description: 'Encuentra las conexiones entre 16 elementos relacionados con anime',
    emoji: '🔗',
    difficulty: 'Medio',
    players: '1 jugador',
    time: '8-12 min',
    href: '/games/connections',
    color: 'game-card-connections',
    features: ['4 grupos temáticos', 'Sistema de pistas', 'Temporizador']
  },
  {
    id: 'pyramid',
    title: 'Pyramid Ranking',
    description: 'Ordena personajes según poder, popularidad o criterios específicos',
    emoji: '⛰️',
    difficulty: 'Difícil',
    players: '1 jugador',
    time: '15-20 min',
    href: '/games/pyramid',
    color: 'game-card-pyramid',
    features: ['4 niveles de pirámide', 'Múltiples criterios', 'Feedback en tiempo real']
  },
  {
    id: 'top-10',
    title: 'Top 10 Ranking',
    description: 'Crea tu ranking personal y compáralo con la comunidad',
    emoji: '🏆',
    difficulty: 'Medio',
    players: '1 jugador',
    time: '10-15 min',
    href: '/games/top-10',
    color: 'game-card-top10',
    features: ['Rankings personalizados', 'Comparación con oficiales', 'Justificaciones']
  }
];

const stats = [
  {
    icon: GamepadIcon,
    value: '5',
    label: 'Mini-Juegos',
    description: 'Diferentes tipos de desafíos'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Jugadores',
    description: 'Comunidad activa de otakus'
  },
  {
    icon: Star,
    value: '50+',
    label: 'Animes',
    description: 'Series populares incluidas'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-anime-sakura via-purple-500 to-anime-gold overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="hero-float mb-8">
              <span className="text-6xl sm:text-8xl">🎌</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">AnimeQuiz</span>
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              La plataforma definitiva para mini-juegos y quizzes de anime. 
              Desafía tu conocimiento otaku con 5 tipos de juegos únicos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl" 
                variant="default"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link href="/games">
                  <Play className="mr-2 h-5 w-5" />
                  Jugar Ahora
                </Link>
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <Link href="/about">
                  Explorar Juegos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating anime emojis */}
        <div className="absolute top-20 left-10 text-4xl opacity-20 hero-pulse">🍥</div>
        <div className="absolute top-40 right-16 text-3xl opacity-30 hero-float">⚡</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-25 hero-pulse">🌸</div>
        <div className="absolute bottom-20 right-12 text-4xl opacity-20 hero-float">🎭</div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-anime-gold/20 rounded-full">
                      <Icon className="h-8 w-8 text-anime-gold" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mini-Juegos Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada juego ofrece una experiencia única para poner a prueba tu conocimiento de anime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {games.map((game, index) => (
              <Card key={game.id} className={`game-card overflow-hidden border-0 ${game.color}`}>
                <CardHeader className="text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{game.emoji}</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {game.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl">{game.title}</CardTitle>
                  <CardDescription className="text-white/90">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-white">
                  <div className="space-y-3 mb-6">
                    {game.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Zap className="h-4 w-4 mr-2 text-yellow-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mb-6">
                    <span>{game.players}</span>
                    <span>{game.time}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100" 
                    asChild
                  >
                    <Link href={game.href}>
                      <Play className="mr-2 h-4 w-4" />
                      Jugar Ahora
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Animes Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Animes Destacados
            </h2>
            <p className="text-gray-300 text-lg">
              Contenido de las series más populares y queridas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredAnimes.map((anime, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{anime.emoji}</div>
                <div className="text-sm font-medium">{anime.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-anime-electric to-anime-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para el Desafío?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a miles de otakus que ya están poniendo a prueba su conocimiento de anime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="default"
              className="bg-white text-gray-900 hover:bg-gray-100"
              asChild
            >
              <Link href="/games/bingo">
                <Trophy className="mr-2 h-5 w-5" />
                Comenzar con Bingo
              </Link>
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link href="/games">
                Ver Todos los Juegos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
