import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Clock, Users, Star } from 'lucide-react';

const games = [
  {
    id: 'impostor',
    title: 'Anime Impostor',
    description: 'Encuentra el personaje que no pertenece al grupo temático. ¡Pon a prueba tu conocimiento de One Piece!',
    emoji: '🕵️',
    difficulty: 'Medio',
    estimatedTime: '5-10 min',
    maxPlayers: '1 jugador',
    rating: 4.8,
    href: '/games/impostor',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Interfaz circular intuitiva',
      'Feedback inmediato',
      'Múltiples categorías temáticas',
      'Sistema de puntuación',
      'Basado en One Piece'
    ],
    howToPlay: [
      'Observa los 5 personajes mostrados',
      'Identifica el tema común',
      'Encuentra el impostor',
      '¡Gana puntos por respuestas correctas!'
    ],
    status: 'available'
  },
  {
    id: 'anime-grid',
    title: 'Cuadrícula de Anime',
    description: 'Completa la cuadrícula 3x3 con personajes que cumplan ambas condiciones de fila y columna.',
    emoji: '🎯',
    difficulty: 'Difícil',
    estimatedTime: '15-20 min',
    maxPlayers: '1 jugador',
    rating: 4.7,
    href: '/games/anime-grid',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Búsqueda inteligente de personajes',
      'Validación cruzada automática',
      'Sistema de pistas disponible',
      'Temporizador de 20 minutos',
      'Base de datos de 168 personajes'
    ],
    howToPlay: [
      'Lee las condiciones de filas y columnas',
      'Busca personajes que cumplan ambas',
      'Completa las 9 casillas',
      '¡Usa las pistas si necesitas ayuda!'
    ],
    status: 'available'
  },
  {
    id: 'anime-wordle',
    title: 'Anime Wordle',
    description: 'Adivina el personaje de anime con pistas visuales y de texto en 6 intentos.',
    emoji: '🔤',
    difficulty: 'Fácil',
    estimatedTime: '3-5 min',
    maxPlayers: '1 jugador',
    rating: 4.5,
    href: '/games/anime-wordle',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Pistas visuales progresivas',
      'Sistema de colores intuitivo',
      'Múltiples intentos',
      'Feedback inmediato',
      'Personajes de One Piece'
    ],
    howToPlay: [
      'Escribe el nombre de un personaje',
      'Observa las pistas de colores',
      'Usa las pistas para ajustar',
      '¡Adivina en 6 intentos o menos!'
    ],
    status: 'available'
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
        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <Link href="/">
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                🏠 Inicio
              </Button>
            </Link>
            <Link href="/personajes">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                👥 Personajes
              </Button>
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🎮 AnimeHaus - Mini-Juegos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explora nuestra colección de mini-juegos únicos basados en One Piece. 
            Pon a prueba tu conocimiento de manera divertida e interactiva.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">3 Disponibles</span>
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
