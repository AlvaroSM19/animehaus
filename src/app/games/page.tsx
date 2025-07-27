import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Clock, Users, Star, ArrowLeft } from 'lucide-react';

const games = [
  {
    id: 'impostor',
    title: 'Anime Impostor',
    description: 'Find the character that doesn\'t belong to the thematic group. Test your One Piece knowledge!',
    difficulty: 'Medium',
    estimatedTime: '5-10 min',
    maxPlayers: '1 player',
    rating: 4.8,
    href: '/games/impostor',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Intuitive circular interface',
      'Immediate feedback',
      'Multiple thematic categories',
      'Scoring system',
      'Based on One Piece'
    ],
    howToPlay: [
      'Observe the 5 characters shown',
      'Identify the common theme',
      'Find the impostor',
      'Earn points for correct answers!'
    ],
    status: 'available'
  },
  {
    id: 'anime-grid',
    title: 'Anime Grid',
    description: 'Complete the 3x3 grid with characters that meet both row and column conditions.',
    difficulty: 'Hard',
    estimatedTime: '15-20 min',
    maxPlayers: '1 player',
    rating: 4.7,
    href: '/games/anime-grid',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Smart character search',
      'Automatic cross-validation',
      'Hint system available',
      '20-minute timer',
      '168 character database'
    ],
    howToPlay: [
      'Read the row and column conditions',
      'Search for characters that meet both',
      'Complete all 9 squares',
      'Use hints if you need help!'
    ],
    status: 'available'
  },
  {
    id: 'higher-lower',
    title: 'Higher or Lower',
    description: 'Guess if the next character\'s bounty is higher or lower. Test your bounty knowledge!',
    difficulty: 'Easy',
    estimatedTime: '3-8 min',
    maxPlayers: '1 player',
    rating: 4.9,
    href: '/games/higher-lower',
    color: 'from-orange-500 to-red-500',
    features: [
      'Bounty comparison',
      'Infinite scoring system',
      'Personal records saved',
      'Smooth animations',
      'All characters with bounties'
    ],
    howToPlay: [
      'See the first character\'s bounty',
      'Decide if the second has higher or lower',
      'Keep guessing right to increase your score!',
      'Ties are considered correct'
    ],
    status: 'available'
  },
  {
    id: 'anime-wordle',
    title: 'Anime Wordle',
    description: 'Guess the anime character with visual and text clues in 6 attempts.',
    difficulty: 'Easy',
    estimatedTime: '3-5 min',
    maxPlayers: '1 player',
    rating: 4.5,
    href: '/games/anime-wordle',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Progressive visual clues',
      'Intuitive color system',
      'Multiple attempts',
      'Immediate feedback',
      'One Piece characters'
    ],
    howToPlay: [
      'Type a character name',
      'Observe the color clues',
      'Use clues to adjust',
      'Guess in 6 attempts or less!'
    ],
    status: 'available'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Hard':
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
      return 'Available';
    case 'coming-soon':
      return 'Coming Soon';
    case 'maintenance':
      return 'Maintenance';
    default:
      return 'Unknown';
  }
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-yellow-400">AnimeHaus - Mini-Games</h1>
          </div>
          
          <div className="flex items-center gap-4 text-white text-sm">
            <div className="bg-slate-700 px-3 py-1 rounded">
              4 Available Games
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our collection of unique mini-games based on One Piece. 
            Test your knowledge in a fun and interactive way.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader className={`bg-gradient-to-r ${game.color} text-white`}>
                <div className="flex items-start justify-between">
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
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                    <div className="text-xs text-gray-400">Duration</div>
                    <div className="text-sm font-medium text-white">{game.estimatedTime}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                    <div className="text-xs text-gray-400">Players</div>
                    <div className="text-sm font-medium text-white">{game.maxPlayers}</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-5 w-5 text-gray-300 mx-auto mb-1" />
                    <div className="text-xs text-gray-400">Rating</div>
                    <div className="text-sm font-medium text-white">{game.rating}/5.0</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {game.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Play */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">How to play:</h4>
                  <ol className="space-y-2">
                    {game.howToPlay.map((step, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
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
                    <Button className="w-full" asChild>
                      <Link href={game.href}>
                        <Play className="mr-2 h-4 w-4" />
                        Play Now
                      </Link>
                    </Button>
                  ) : (
                    <Button className="w-full" disabled>
                      <Clock className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">More Games Coming Soon</h2>
            <p className="text-lg mb-6">
              We're developing more exciting mini-games. Stay tuned for future updates!
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
