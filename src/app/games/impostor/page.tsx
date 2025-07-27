'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimeImage } from '@/components/ui/anime-image';
import { ArrowLeft, RotateCcw, Trophy, Clock, Target } from 'lucide-react';
import Link from 'next/link';
import { ANIME_CHARACTERS, AnimeCharacter } from '@/lib/anime-data-updated';

interface ImpostorGame {
  theme: string;
  characters: AnimeCharacter[];
  impostorIndex: number;
  explanation: string;
}

const IMPOSTOR_THEMES = [
  {
    name: 'Straw Hat Pirates',
    description: 'Crew members of the Straw Hat Pirates',
    getGameData: () => {
      const strawHats = ANIME_CHARACTERS.filter(char => char.crew.includes('Sombrero de Paja'));
      const correctChars = strawHats.slice(0, 4);
      const nonStrawHats = ANIME_CHARACTERS.filter(char => !char.crew.includes('Sombrero de Paja'));
      const impostorChar = nonStrawHats[Math.floor(Math.random() * nonStrawHats.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => !char.crew.includes('Sombrero de Paja'));
      
      return {
        theme: 'Straw Hat Pirates',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} is not a Straw Hat Pirate - they are part of ${impostorChar.crew}`
      };
    }
  },
  {
    name: 'Marines',
    description: 'Marine officers and personnel',
    getGameData: () => {
      const marines = ANIME_CHARACTERS.filter(char => char.crew.includes('Marina'));
      const correctChars = marines.slice(0, 4);
      const nonMarines = ANIME_CHARACTERS.filter(char => !char.crew.includes('Marina'));
      const impostorChar = nonMarines[Math.floor(Math.random() * nonMarines.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => !char.crew.includes('Marina'));
      
      return {
        theme: 'Marines',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} is not a Marine - they are part of ${impostorChar.crew}`
      };
    }
  },
  {
    name: 'Main Characters',
    description: 'Main characters vs supporting characters',
    getGameData: () => {
      const protagonists = ANIME_CHARACTERS.filter(char => char.role === 'main');
      const supporting = ANIME_CHARACTERS.filter(char => char.role === 'supporting');
      
      const correctChars = protagonists.slice(0, 4);
      const impostorChar = supporting[Math.floor(Math.random() * supporting.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => char.role === 'supporting');
      
      return {
        theme: 'Main Characters',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} is a supporting character, not a main character`
      };
    }
  },
  {
    name: 'High Bounty',
    description: 'Characters with bounties over 1 billion berries',
    getGameData: () => {
      const highBountyChars = ANIME_CHARACTERS.filter(char => char.recompensa && char.recompensa >= 1000000000);
      const lowBountyChars = ANIME_CHARACTERS.filter(char => !char.recompensa || char.recompensa < 500000000);
      
      const correctChars = highBountyChars.slice(0, 4);
      const impostorChar = lowBountyChars[Math.floor(Math.random() * lowBountyChars.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => !char.recompensa || char.recompensa < 500000000);
      
      return {
        theme: 'High Bounty Characters (1B+)',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} doesn't have a bounty over 1 billion berries`
      };
    }
  },
  {
    name: 'Devil Fruit Users',
    description: 'Characters with Devil Fruit powers',
    getGameData: () => {
      const fruitUsers = ANIME_CHARACTERS.filter(char => char.fruta_diablo && char.fruta_diablo !== null);
      const nonFruitUsers = ANIME_CHARACTERS.filter(char => !char.fruta_diablo || char.fruta_diablo === null);
      
      const correctChars = fruitUsers.slice(0, 4);
      const impostorChar = nonFruitUsers[Math.floor(Math.random() * nonFruitUsers.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => !char.fruta_diablo || char.fruta_diablo === null);
      
      return {
        theme: 'Devil Fruit Users',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} doesn't have Devil Fruit powers`
      };
    }
  },
  {
    name: 'Haki Users',
    description: 'Characters who can use Haki',
    getGameData: () => {
      const hakiUsers = ANIME_CHARACTERS.filter(char => char.tipo_haki.length > 0);
      const nonHakiUsers = ANIME_CHARACTERS.filter(char => char.tipo_haki.length === 0);
      
      const correctChars = hakiUsers.slice(0, 4);
      const impostorChar = nonHakiUsers[Math.floor(Math.random() * nonHakiUsers.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => char.tipo_haki.length === 0);
      
      return {
        theme: 'Haki Users',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} cannot use Haki`
      };
    }
  },
  {
    name: 'East Blue Origins',
    description: 'Characters from East Blue',
    getGameData: () => {
      const eastBlueChars = ANIME_CHARACTERS.filter(char => char.origen.includes('East Blue'));
      const nonEastBlueChars = ANIME_CHARACTERS.filter(char => !char.origen.includes('East Blue'));
      
      const correctChars = eastBlueChars.slice(0, 4);
      const impostorChar = nonEastBlueChars[Math.floor(Math.random() * nonEastBlueChars.length)];
      
      const allChars = [...correctChars, impostorChar];
      const shuffled = allChars.sort(() => Math.random() - 0.5);
      const impostorIndex = shuffled.findIndex(char => !char.origen.includes('East Blue'));
      
      return {
        theme: 'East Blue Origins',
        characters: shuffled,
        impostorIndex,
        explanation: `${impostorChar.name} is not from East Blue - they are from ${impostorChar.origen}`
      };
    }
  }
];

export default function ImpostorGame() {
  const [currentGame, setCurrentGame] = useState<ImpostorGame | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'wrong'>('playing');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(800);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameActive && timeLeft > 0 && gameState === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('wrong');
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, timeLeft, gameState]);

  const startNewGame = () => {
    const randomTheme = IMPOSTOR_THEMES[Math.floor(Math.random() * IMPOSTOR_THEMES.length)];
    const gameData = randomTheme.getGameData();
    setCurrentGame(gameData);
    setSelectedIndex(null);
    setGameState('playing');
    setTimeLeft(30);
    setIsGameActive(true);
  };

  const handleCharacterClick = (index: number) => {
    if (gameState !== 'playing') return;
    
    setSelectedIndex(index);
    setIsGameActive(false);
    
    if (index === currentGame?.impostorIndex) {
      setGameState('correct');
      setScore(prev => prev + 100);
    } else {
      setGameState('wrong');
    }
  };

  const nextRound = () => {
    setRound(prev => prev + 1);
    startNewGame();
  };

  const resetGame = () => {
    setScore(0);
    setRound(1);
    startNewGame();
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const isMobile = windowWidth < 768;
  const imageSize = isMobile ? 100 : 160;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/games">
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-purple-800/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Games
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-400 mb-2">AnimeHaus - Impostor</h1>
            <p className="text-purple-200">¡Encuentra el personaje que no pertenece al grupo!</p>
          </div>
          
          <Button 
            onClick={resetGame}
            variant="ghost" 
            className="text-yellow-400 hover:text-yellow-300 hover:bg-purple-800/50"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="bg-purple-800/50 border-yellow-400/50">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Score</span>
              </div>
              <div className="text-2xl font-bold text-white">{score}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800/50 border-yellow-400/50">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Round</span>
              </div>
              <div className="text-2xl font-bold text-white">{round}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800/50 border-yellow-400/50">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Time</span>
              </div>
              <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Game Area */}
        {!currentGame ? (
          <Card className="bg-purple-800/50 border-yellow-400 text-center p-8">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-2xl mb-4">Ready to Play?</CardTitle>
              <p className="text-purple-200 mb-6">
                Find the impostor among the One Piece characters! Look for the one that doesn't belong in the group.
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={startNewGame}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold px-8 py-3"
              >
                Start Game
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Theme Description */}
            <Card className="bg-purple-800/50 border-yellow-400/50">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-center text-xl">
                  Find the impostor among: {currentGame.theme}
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Characters Grid */}
            <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-5'} justify-items-center`}>
              {currentGame.characters.map((character, index) => (
                <Card 
                  key={`${character.id}-${index}`}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 bg-purple-800/50 border-2 ${
                    selectedIndex === index
                      ? index === currentGame.impostorIndex
                        ? 'border-green-400 bg-green-800/30'
                        : 'border-red-400 bg-red-800/30'
                      : 'border-yellow-400/50 hover:border-yellow-400'
                  } ${gameState !== 'playing' ? 'pointer-events-none' : ''}`}
                  onClick={() => handleCharacterClick(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center space-y-3">
                      <AnimeImage
                        src={character.imageUrl}
                        alt={character.name}
                        width={imageSize}
                        height={imageSize}
                        className="character-image"
                      />
                      <div className="text-center">
                        <h3 className="font-semibold text-white text-sm line-clamp-1">
                          {character.name}
                        </h3>
                        <p className="text-xs text-purple-200 line-clamp-1">
                          {character.anime}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Result */}
            {gameState !== 'playing' && (
              <Card className={`${gameState === 'correct' ? 'bg-green-800/50 border-green-400' : 'bg-red-800/50 border-red-400'} text-center p-6`}>
                <CardContent>
                  <h2 className={`text-2xl font-bold mb-4 ${gameState === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                    {gameState === 'correct' ? '🎉 Correct!' : '❌ Wrong!'}
                  </h2>
                  <p className="text-white mb-6">
                    {currentGame.explanation}
                  </p>
                  <Button 
                    onClick={nextRound}
                    className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold px-6 py-2"
                  >
                    Next Round
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
