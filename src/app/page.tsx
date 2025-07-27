import Link from 'next/link';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Play, 
  Users, 
  Trophy, 
  ArrowRight,
  Star,
  GamepadIcon,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';

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
    color: 'from-red-600 to-pink-600',
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
    color: 'from-blue-600 to-purple-600',
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
    color: 'from-green-600 to-teal-600',
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl sm:text-7xl lg:text-8xl">�</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Anime
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Haus
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu casa del anime. Explora, juega y desafía tu conocimiento con mini-juegos únicos 
              basados en One Piece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/games"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Jugar Ahora
              </Link>
              
              <Link 
                href="/personajes"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Ver Personajes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-yellow-500/20 rounded-full">
                      <Icon className="h-8 w-8 text-yellow-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Mini-Juegos Disponibles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada juego ofrece una experiencia única para poner a prueba tu conocimiento de anime
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {games.map((game) => (
              <Link key={game.id} href={game.href} className="block group">
                <div className={`h-full bg-gradient-to-br ${game.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-white/20`}>
                  <CardHeader className="text-white relative p-0 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{game.emoji}</div>
                      <div className="text-right">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm mb-2">
                          {game.difficulty}
                        </div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="mr-1 h-4 w-4" />
                          {game.time}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3 text-white">{game.title}</CardTitle>
                    <CardDescription className="text-gray-100 text-base leading-relaxed">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-white p-0">
                    <div className="flex items-center text-sm text-gray-200 mb-4">
                      <Users className="mr-2 h-4 w-4" />
                      {game.players}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm flex items-center">
                        <Target className="mr-2 h-4 w-4" />
                        Características:
                      </h4>
                      <ul className="text-sm text-gray-100 space-y-2">
                        {game.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star className="mr-2 h-3 w-3 text-yellow-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 bg-white text-black hover:bg-gray-100 py-3 rounded-lg flex items-center justify-center text-base font-medium transition-all duration-200 group-hover:scale-105">
                      <Play className="mr-2 h-4 w-4" />
                      Jugar Ahora
                    </div>
                  </CardContent>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para el Desafío?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Únete a miles de otakus que ya están poniendo a prueba su conocimiento de anime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/games/impostor"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Comenzar con Impostor
            </Link>
            
            <Link 
              href="/games"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Ver Todos los Juegos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
