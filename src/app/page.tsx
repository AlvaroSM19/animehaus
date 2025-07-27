import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Users, Gamepad2, Crown, Brain, TrendingUp, Award } from 'lucide-react';
import type { Metadata } from 'next';
import StructuredData, { websiteStructuredData, organizationStructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Home',
  description: 'AnimeHaus is the ultimate destination for anime quiz games. Play One Piece Wordle, test your character knowledge, and challenge yourself with interactive anime mini-games featuring 164+ One Piece characters.',
  keywords: [
    'animehaus home', 'anime quiz games', 'one piece wordle', 'anime character quiz',
    'one piece games online', 'anime trivia hub', 'luffy games', 'anime knowledge test',
    'one piece character database', 'anime mini games free', 'otaku quiz games'
  ],
  openGraph: {
    title: 'AnimeHaus - Ultimate Anime Quiz Hub | One Piece Games',
    description: 'Play interactive One Piece games, test your anime knowledge, and explore 164+ character database. Features Wordle-style games, trivia, and character quizzes.',
    url: 'https://animehaus.vercel.app',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'AnimeHaus - Anime Quiz Games Homepage',
      }
    ],
  },
  alternates: {
    canonical: 'https://animehaus.vercel.app',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-8xl md:text-9xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AnimeHaus
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Test your One Piece knowledge with our collection of interactive mini-games
          </p>
        </div>
      </section>

      {/* Main Games Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-400/40 hover:border-purple-300/60 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 p-8 backdrop-blur-sm">
              <CardHeader className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 shadow-lg">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-purple-200 transition-colors text-3xl mb-4">
                  Anime Impostor
                </CardTitle>
                <CardDescription className="text-gray-200 text-lg leading-relaxed">
                  Find the character that doesn't belong to the thematic group. Test your knowledge of character relationships, crews, and anime classifications!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-500/30 rounded-lg p-3 border border-purple-400/30">
                    <div className="text-orange-300 font-bold text-lg">Medium</div>
                    <div className="text-gray-300 text-sm">Difficulty</div>
                  </div>
                  <div className="bg-purple-500/30 rounded-lg p-3 border border-purple-400/30">
                    <div className="text-purple-300 font-bold text-lg">Quick</div>
                    <div className="text-gray-300 text-sm">5-10 min</div>
                  </div>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 py-6 text-lg border border-purple-400/20">
                  <Link href="/games/impostor">
                    <Play className="mr-3 h-6 w-6" />
                    Play Impostor
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-yellow-400/40 hover:border-yellow-300/60 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40 p-8 backdrop-blur-sm">
              <CardHeader className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-yellow-200 transition-colors text-3xl mb-4">
                  Anime Grid
                </CardTitle>
                <CardDescription className="text-gray-200 text-lg leading-relaxed">
                  Complete the 3x3 grid with characters that meet both row and column conditions. Strategy and deep One Piece knowledge required!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-yellow-500/30 rounded-lg p-3 border border-yellow-400/30">
                    <div className="text-red-300 font-bold text-lg">Hard</div>
                    <div className="text-gray-300 text-sm">Difficulty</div>
                  </div>
                  <div className="bg-yellow-500/30 rounded-lg p-3 border border-yellow-400/30">
                    <div className="text-yellow-300 font-bold text-lg">Strategic</div>
                    <div className="text-gray-300 text-sm">10-20 min</div>
                  </div>
                </div>
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 py-6 text-lg border border-yellow-400/20">
                  <Link href="/games/anime-grid">
                    <Play className="mr-3 h-6 w-6" />
                    Play Grid
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/80 to-orange-900/80 border-red-400/40 hover:border-red-300/60 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 p-8 backdrop-blur-sm">
              <CardHeader className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-red-200 transition-colors text-3xl mb-4">
                  Higher or Lower
                </CardTitle>
                <CardDescription className="text-gray-200 text-lg leading-relaxed">
                  Compare One Piece character bounties and guess which is higher or lower. Perfect for beginners and bounty experts alike!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-red-500/30 rounded-lg p-3 border border-red-400/30">
                    <div className="text-yellow-300 font-bold text-lg">Easy</div>
                    <div className="text-gray-300 text-sm">Difficulty</div>
                  </div>
                  <div className="bg-red-500/30 rounded-lg p-3 border border-red-400/30">
                    <div className="text-red-300 font-bold text-lg">Fast</div>
                    <div className="text-gray-300 text-sm">3-5 min</div>
                  </div>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/25 transition-all duration-300 py-6 text-lg border border-red-400/20">
                  <Link href="/games/higher-lower">
                    <Play className="mr-3 h-6 w-6" />
                    Play Bounties
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-green-400/40 hover:border-green-300/60 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 p-8 backdrop-blur-sm">
              <CardHeader className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-green-200 transition-colors text-3xl mb-4">
                  Anime Wordle
                </CardTitle>
                <CardDescription className="text-gray-200 text-lg leading-relaxed">
                  Guess the One Piece character name in 6 tries with helpful clues. Use your knowledge of character names and spelling!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/30 rounded-lg p-3 border border-green-400/30">
                    <div className="text-orange-300 font-bold text-lg">Medium</div>
                    <div className="text-gray-300 text-sm">Difficulty</div>
                  </div>
                  <div className="bg-green-500/30 rounded-lg p-3 border border-green-400/30">
                    <div className="text-green-300 font-bold text-lg">Puzzle</div>
                    <div className="text-gray-300 text-sm">5-15 min</div>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/25 transition-all duration-300 py-6 text-lg border border-green-400/20">
                  <Link href="/games/anime-wordle">
                    <Play className="mr-3 h-6 w-6" />
                    Play Wordle
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-600/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Choose AnimeHaus for Anime Quizzes?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-purple-400">AnimeHaus</strong> is the ultimate destination for anime quiz enthusiasts. Our platform features a comprehensive collection of <strong>One Piece games</strong> and interactive quizzes designed to test your anime knowledge.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>164+ One Piece Characters:</strong> Complete database with bounties, devil fruits, and haki abilities</li>
                  <li><strong>Anime Wordle:</strong> Guess character names in our Wordle-style puzzle game</li>
                  <li><strong>Interactive Games:</strong> Multiple game modes including Impostor and Who Am I</li>
                  <li><strong>Regular Updates:</strong> New characters and features added regularly</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Master Your One Piece Knowledge
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Test your knowledge of the <strong>Straw Hat Pirates</strong>, <strong>Devil Fruit users</strong>, and <strong>Haki masters</strong> with our expertly crafted anime quizzes. Whether you're a casual fan or a dedicated otaku, our games offer the perfect challenge.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">164+</div>
                    <div className="text-sm">Characters</div>
                  </div>
                  <div className="text-center p-4 bg-blue-600/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm">Game Modes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Choose any game above and start your One Piece challenge now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Link href="/games">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  View All Games
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <Link href="/characters">
                  <Users className="mr-2 h-5 w-5" />
                  Browse Characters
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Structured Data */}
      <StructuredData type="WebSite" data={websiteStructuredData} />
      <StructuredData type="Organization" data={organizationStructuredData} />
    </div>
  );
}