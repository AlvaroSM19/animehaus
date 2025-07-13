import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Clock, Users, Star } from 'lucide-react';

const games = [
  {
    id: 'bingo',
    title: 'Bingo Anime',
    description: 'Completa tu tablero con personajes, objetos y conceptos de tus animes favoritos. ¡El clásico juego de bingo pero con temática anime!',
    emoji: '🎲',
    difficulty: 'Fácil',
    estimatedTime: '5-10 min',
    maxPlayers: '1 jugador',
    rating: 4.8,
    href: '/games/bingo',
    color: 'from-pink-500 to-rose-500',
    features: [
      'Tableros personalizables 4x4 y 5x5',
      'Más de 200 elementos de anime',
      'Sorteo aleatorio con animaciones',
      'Validación automática de líneas',
      'Múltiples series de anime populares'
    ],
    howToPlay: [
      'Selecciona el tamaño de tu tablero',
      'Espera el sorteo de elementos',
      'Marca las casillas que coincidan',
      '¡Consigue línea o bingo completo!'
    ],
    status: 'available'
  },
  {
    id: 'grid-trivia',
    title: 'Grid Trivia Anime',
    description: 'Conecta elementos arrastrándolos a una grilla 3x3 basándote en atributos compartidos. ¡Pon a prueba tu conocimiento de relaciones anime!',
    emoji: '🎯',
    difficulty: 'Medio',
    estimatedTime: '10-15 min',
    maxPlayers: '1 jugador',
    rating: 4.6,
    href: '/games/grid-trivia',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Sistema de drag & drop intuitivo',
      'Validación instantánea de respuestas',
      'Múltiples categorías por serie',
      'Pistas dinámicas disponibles',
      'Feedback visual inmediato'
    ],
    howToPlay: [
      'Observa la grilla 3x3 con criterios',
      'Arrastra personajes a las casillas correctas',
      'Busca atributos compartidos',
      'Completa toda la grilla para ganar'
    ],
    status: 'coming-soon'
  },
  {
    id: 'connections',
    title: 'Connections Anime',
    description: 'Encuentra las conexiones ocultas entre 16 elementos de anime. Agrupa elementos por temas, series o características en común.',
    emoji: '🔗',
    difficulty: 'Medio',
    estimatedTime: '8-12 min',
    maxPlayers: '1 jugador',
    rating: 4.7,
    href: '/games/connections',
    color: 'from-green-500 to-emerald-500',
    features: [
      '16 elementos únicos por partida',
      '4 grupos temáticos ocultos',
      'Sistema de pistas progresivas',
      'Temporizador opcional',
      'Puntuación basada en velocidad'
    ],
    howToPlay: [
      'Examina los 16 elementos mostrados',
      'Selecciona 4 elementos relacionados',
      'Confirma tu grupo y recibe feedback',
      'Encuentra los 4 grupos para completar'
    ],
    status: 'coming-soon'
  },
  {
    id: 'pyramid',
    title: 'Pyramid Ranking',
    description: 'Ordena personajes de anime en una pirámide de 4 niveles según poder, popularidad o criterios específicos. ¡Demuestra tu expertise!',
    emoji: '⛰️',
    difficulty: 'Difícil',
    estimatedTime: '15-20 min',
    maxPlayers: '1 jugador',
    rating: 4.5,
    href: '/games/pyramid',
    color: 'from-purple-500 to-violet-500',
    features: [
      'Pirámide de 4 niveles (1-3-5-1)',
      'Múltiples criterios de ordenamiento',
      'Feedback en tiempo real',
      'Sistema de desbloqueo progresivo',
      'Comparación con rankings oficiales'
    ],
    howToPlay: [
      'Elige un criterio de ordenamiento',
      'Arrastra personajes a cada nivel',
      'Nivel superior = mayor atributo',
      'Completa toda la pirámide correctamente'
    ],
    status: 'coming-soon'
  },
  {
    id: 'top-10',
    title: 'Top 10 Ranking',
    description: 'Crea tu ranking personal de anime, personajes o elementos y compáralo con rankings oficiales y de la comunidad.',
    emoji: '🏆',
    difficulty: 'Medio',
    estimatedTime: '10-15 min',
    maxPlayers: '1 jugador',
    rating: 4.9,
    href: '/games/top-10',
    color: 'from-orange-500 to-red-500',
    features: [
      'Rankings personalizables',
      'Más de 30 elementos por categoría',
      'Justificaciones opcionales',
      'Comparación automática',
      'Sistema de puntuación inteligente'
    ],
    howToPlay: [
      'Selecciona una categoría',
      'Ordena elementos del 1 al 10',
      'Añade justificaciones (opcional)',
      'Compara con el ranking oficial'
    ],
    status: 'coming-soon'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-green-100 text-green-800';
    case 'Medio':
      return 'bg-yellow-100 text-yellow-800';
    case 'Difícil':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800';
    case 'coming-soon':
      return 'bg-blue-100 text-blue-800';
    case 'maintenance':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'available':
      return 'Disponible';
    case 'coming-soon':
      return 'Próximamente';
    case 'maintenance':
      return 'Mantenimiento';
    default:
      return 'Desconocido';
  }
};

export default function GamesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🎮 Mini-Juegos de Anime
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explora nuestra colección de mini-juegos únicos diseñados para poner a prueba 
            tu conocimiento de anime de manera divertida e interactiva.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">1 Disponible</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">4 Próximamente</span>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`bg-gradient-to-r ${game.color} text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{game.emoji}</span>
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{game.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                          {game.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(game.status)}`}>
                          {getStatusText(game.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-yellow-300">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardDescription className="text-gray-600 mb-6 text-base">
                  {game.description}
                </CardDescription>

                {/* Game Info */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Duración</div>
                    <div className="text-sm font-medium">{game.estimatedTime}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Jugadores</div>
                    <div className="text-sm font-medium">{game.maxPlayers}</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Puntuación</div>
                    <div className="text-sm font-medium">{game.rating}/5.0</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {game.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Play */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Cómo jugar:</h4>
                  <ol className="space-y-2">
                    {game.howToPlay.map((step, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  {game.status === 'available' ? (
                    <Button className="flex-1" asChild>
                      <Link href={game.href}>
                        <Play className="mr-2 h-4 w-4" />
                        Jugar Ahora
                      </Link>
                    </Button>
                  ) : (
                    <Button className="flex-1" disabled>
                      <Clock className="mr-2 h-4 w-4" />
                      Próximamente
                    </Button>
                  )}
                  
                  <Button variant="outline" asChild>
                    <Link href={`${game.href}/tutorial`}>
                      Tutorial
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">🚀 Más Juegos en Camino</h2>
            <p className="text-lg mb-6">
              Estamos desarrollando más mini-juegos emocionantes. ¡Mantente atento para futuras actualizaciones!
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Notificarme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
