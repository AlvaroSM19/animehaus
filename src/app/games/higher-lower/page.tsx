'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, TrendingDown, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { ANIME_CHARACTERS } from '@/lib/anime-data-updated';

interface Character {
  nombre: string;
  serie: string;
  imagen: string;
  bounty: number;
}

interface GameState {
  leftCharacter: Character;
  rightCharacter: Character;
  score: number;
  highScore: number;
  gameOver: boolean;
  showResult: boolean;
  isCorrect: boolean;
  isAnimating: boolean;
  initialized: boolean;
}

// Filter characters with valid bounties and convert to number
const charactersWithBounty = ANIME_CHARACTERS.filter(char => {
  return char.bounty !== null && char.bounty > 0;
}).map(char => ({
  nombre: char.name,
  serie: char.anime,
  imagen: char.imageUrl,
  bounty: char.bounty as number
}));

const getRandomCharacter = (excludeIds: string[] = []): Character => {
  const available = charactersWithBounty.filter(char => 
    !excludeIds.includes(char.nombre)
  );
  return available[Math.floor(Math.random() * available.length)];
};

const formatBounty = (bounty: number): string => {
  return bounty.toLocaleString('en-US') + ' ₿';
};

export default function HigherLowerPage() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const leftChar = getRandomCharacter();
    return {
      leftCharacter: leftChar,
      rightCharacter: getRandomCharacter([leftChar.nombre]),
      score: 0,
      highScore: 0,
      gameOver: false,
      showResult: false,
      isCorrect: false,
      isAnimating: false,
      initialized: false
    };
  });

  // Load high score on start
  useEffect(() => {
    const savedHighScore = localStorage.getItem('higherLowerHighScore');
    if (savedHighScore) {
      setGameState(prev => ({ ...prev, highScore: parseInt(savedHighScore), initialized: true }));
    } else {
      setGameState(prev => ({ ...prev, initialized: true }));
    }
  }, []);

  const makeGuess = (guess: 'higher' | 'lower') => {
    if (gameState.isAnimating || gameState.gameOver || !gameState.initialized) return;

    const leftBounty = gameState.leftCharacter.bounty;
    const rightBounty = gameState.rightCharacter.bounty;
    
    let isCorrect = false;
    if (guess === 'higher' && rightBounty >= leftBounty) isCorrect = true;
    if (guess === 'lower' && rightBounty <= leftBounty) isCorrect = true;

    // Mostrar resultado inmediatamente
    setGameState(prev => ({ 
      ...prev, 
      showResult: true, 
      isCorrect,
      isAnimating: true 
    }));

    setTimeout(() => {
      if (isCorrect) {
        // Acierto: mover personaje derecho a izquierdo y traer uno nuevo
        const newScore = gameState.score + 1;
        const newHighScore = Math.max(newScore, gameState.highScore);
        
        // Guardar high score
        localStorage.setItem('higherLowerHighScore', newHighScore.toString());
        
        const newRightCharacter = getRandomCharacter([gameState.rightCharacter.nombre]);
        
        setGameState(prev => ({
          ...prev,
          leftCharacter: prev.rightCharacter, // El de la derecha pasa a la izquierda
          rightCharacter: newRightCharacter,   // Nuevo personaje a la derecha
          score: newScore,
          highScore: newHighScore,
          showResult: false,
          isAnimating: false
        }));
      } else {
        // Error: game over
        setGameState(prev => ({
          ...prev,
          gameOver: true,
          showResult: false,
          isAnimating: false
        }));
      }
    }, 1500);
  };

  const resetGame = () => {
    const leftChar = getRandomCharacter();
    const rightChar = getRandomCharacter([leftChar.nombre]);
    
    setGameState(prev => ({
      ...prev,
      leftCharacter: leftChar,
      rightCharacter: rightChar,
      score: 0,
      gameOver: false,
      showResult: false,
      isCorrect: false,
      isAnimating: false
    }));
  };

  if (!gameState.initialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/games" className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Games</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-lg">{gameState.score}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">{gameState.highScore}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Higher or Lower</h1>
          <p className="text-orange-100">Who has the higher bounty?</p>
        </div>

        {!gameState.gameOver ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
            {/* Personaje Izquierdo */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/20 overflow-hidden">
              <div className="p-6">
                <div className="text-center">
                  <img 
                    src={gameState.leftCharacter.imagen} 
                    alt={gameState.leftCharacter.nombre}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-400 mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {gameState.leftCharacter.nombre}
                  </h3>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-200 mb-4">
                    {gameState.leftCharacter.serie}
                  </Badge>
                  
                  {/* Show bounty ALWAYS for left character */}
                  <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                    <p className="text-yellow-200 text-sm">Bounty:</p>
                    <p className="text-yellow-100 font-bold text-lg">
                      {formatBounty(gameState.leftCharacter.bounty)}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* VS y Controles en el centro */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-4xl font-bold text-white opacity-50">VS</div>
              
              {!gameState.isAnimating && (
                <div className="flex flex-col gap-3 w-full">
                  <Button
                    onClick={() => makeGuess('higher')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2 w-full"
                  >
                    <TrendingUp className="w-5 h-5" />
                    HIGHER
                  </Button>
                  <Button
                    onClick={() => makeGuess('lower')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2 w-full"
                  >
                    <TrendingDown className="w-5 h-5" />
                    LOWER
                  </Button>
                </div>
              )}

              {/* Resultado */}
              {gameState.showResult && (
                <div className={`text-center p-4 rounded-lg w-full ${
                  gameState.isCorrect ? 'bg-green-600/30 border-green-400' : 'bg-red-600/30 border-red-400'
                } border backdrop-blur-sm`}>
                  <div className={`text-xl font-bold ${
                    gameState.isCorrect ? 'text-green-100' : 'text-red-100'
                  }`}>
                    {gameState.isCorrect ? 'CORRECT!' : 'WRONG!'}
                  </div>
                  <div className="text-white mt-2">
                    {formatBounty(gameState.rightCharacter.bounty)}
                  </div>
                </div>
              )}
            </div>

            {/* Personaje Derecho */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/20 overflow-hidden">
              <div className="p-6">
                <div className="text-center">
                  <img 
                    src={gameState.rightCharacter.imagen} 
                    alt={gameState.rightCharacter.nombre}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-400 mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {gameState.rightCharacter.nombre}
                  </h3>
                  <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 mb-4">
                    {gameState.rightCharacter.serie}
                  </Badge>
                  
                  <div className="mt-4 p-3 bg-gray-500/20 rounded-lg border border-gray-400/30">
                    <p className="text-gray-200 text-sm">Bounty:</p>
                    <p className="text-gray-100 font-bold text-xl">Hidden</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          /* Game Over Screen */
          <div className="text-center max-w-md mx-auto">
            <Card className="bg-black/40 backdrop-blur-sm border-white/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-orange-200">Final Score:</p>
                  <p className="text-4xl font-bold text-yellow-400">{gameState.score}</p>
                </div>
                {gameState.score === gameState.highScore && gameState.score > 0 && (
                  <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                    <p className="text-yellow-200 font-semibold">New Record! 🏆</p>
                  </div>
                )}
                <div>
                  <p className="text-orange-200">Best Score:</p>
                  <p className="text-2xl font-bold text-yellow-400">{gameState.highScore}</p>
                </div>
              </div>
              <Button
                onClick={resetGame}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold w-full"
              >
                Play Again
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
