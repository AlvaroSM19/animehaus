'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimeImage } from '@/components/ui/anime-image';
import { ArrowLeft, RotateCcw, Trophy, Clock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { ANIME_CHARACTERS, AnimeCharacter } from '@/lib/anime-data-updated';

interface GuessResult {
  letter: string;
  status: 'correct' | 'present' | 'absent';
}

interface GameState {
  targetCharacter: AnimeCharacter;
  guesses: string[];
  currentGuess: string;
  gameStatus: 'playing' | 'won' | 'lost';
  showHint: boolean;
}

export default function AnimeWordle() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [score, setScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isGameActive, setIsGameActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameActive && timeLeft > 0 && gameState?.gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState(prev => prev ? { ...prev, gameStatus: 'lost' } : null);
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, timeLeft, gameState?.gameStatus]);

  const initializeGame = () => {
    // Filter characters with names that are good for Wordle (3-12 characters)
    const suitableCharacters = ANIME_CHARACTERS.filter(char => {
      const normalizedName = normalizeString(char.name);
      return normalizedName.length >= 3 && normalizedName.length <= 12;
    });
    
    // Select a random character from suitable ones
    const randomCharacter = suitableCharacters[Math.floor(Math.random() * suitableCharacters.length)];
    
    setGameState({
      targetCharacter: randomCharacter,
      guesses: [],
      currentGuess: '',
      gameStatus: 'playing',
      showHint: false
    });
    setTimeLeft(300);
    setIsGameActive(true);
  };

  const normalizeString = (str: string): string => {
    return str.toLowerCase().replace(/[^a-z]/g, '');
  };

  const getTargetName = (character: AnimeCharacter): string => {
    // Use character name directly
    const name = character.name;
    return normalizeString(name);
  };

  const evaluateGuess = (guess: string, target: string): GuessResult[] => {
    const normalizedGuess = normalizeString(guess);
    const normalizedTarget = target;
    const result: GuessResult[] = [];
    const targetLetters = normalizedTarget.split('');
    const guessLetters = normalizedGuess.split('');

    // First pass: mark correct letters
    for (let i = 0; i < Math.max(guessLetters.length, targetLetters.length); i++) {
      if (i >= guessLetters.length) {
        result.push({ letter: '', status: 'absent' });
      } else if (i >= targetLetters.length) {
        result.push({ letter: guessLetters[i], status: 'absent' });
      } else if (guessLetters[i] === targetLetters[i]) {
        result.push({ letter: guessLetters[i], status: 'correct' });
        targetLetters[i] = '';
        guessLetters[i] = '';
      } else {
        result.push({ letter: guessLetters[i], status: 'absent' });
      }
    }

    // Second pass: mark present letters
    for (let i = 0; i < result.length; i++) {
      if (result[i].status === 'absent' && result[i].letter) {
        const letterIndex = targetLetters.indexOf(result[i].letter);
        if (letterIndex !== -1) {
          result[i].status = 'present';
          targetLetters[letterIndex] = '';
        }
      }
    }

    return result;
  };

  const handleGuessSubmit = () => {
    if (!gameState) return;
    
    const targetName = getTargetName(gameState.targetCharacter);
    
    // Require exact length match
    if (gameState.currentGuess.length !== targetName.length) return;

    const normalizedGuess = normalizeString(gameState.currentGuess);
    
    const newGuesses = [...gameState.guesses, gameState.currentGuess];
    let newGameStatus = gameState.gameStatus;

    if (normalizedGuess === targetName) {
      newGameStatus = 'won';
      setScore(prev => prev + Math.max(100, timeLeft * 2));
      setIsGameActive(false);
    } else if (newGuesses.length >= 6) {
      newGameStatus = 'lost';
      setIsGameActive(false);
    }

    setGameState({
      ...gameState,
      guesses: newGuesses,
      currentGuess: '',
      gameStatus: newGameStatus
    });
  };

  const handleKeyPress = (key: string) => {
    if (!gameState || gameState.gameStatus !== 'playing') return;

    const targetName = getTargetName(gameState.targetCharacter);

    if (key === 'ENTER') {
      handleGuessSubmit();
    } else if (key === 'BACKSPACE') {
      setGameState({
        ...gameState,
        currentGuess: gameState.currentGuess.slice(0, -1)
      });
    } else if (key.match(/^[a-zA-Z]$/) && gameState.currentGuess.length < targetName.length) {
      setGameState({
        ...gameState,
        currentGuess: gameState.currentGuess + key.toUpperCase()
      });
    }
  };

  const toggleHint = () => {
    if (!gameState) return;
    setGameState({
      ...gameState,
      showHint: !gameState.showHint
    });
  };

  const resetGame = () => {
    setScore(0);
    setGamesPlayed(0);
    initializeGame();
  };

  const nextGame = () => {
    setGamesPlayed(prev => prev + 1);
    initializeGame();
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleKeyPress('ENTER');
      } else if (event.key === 'Backspace') {
        handleKeyPress('BACKSPACE');
      } else if (event.key.match(/^[a-zA-Z]$/)) {
        handleKeyPress(event.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  if (!gameState) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const targetName = getTargetName(gameState.targetCharacter);
  const maxLength = Math.min(12, Math.max(6, targetName.length)); // Limit to 12 characters max

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button className="text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">AnimeHaus - Wordle</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="font-bold">{score}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span>Games: {gamesPlayed}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className={`${timeLeft <= 60 ? 'text-red-400 animate-pulse' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Instructions */}
          <Card className="mb-8 bg-black/30 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center text-xl">¡Adivina el Personaje de Anime!</CardTitle>
              <p className="text-gray-300 text-center">
                You have 6 attempts to guess the character's name
              </p>
              <p className="text-gray-400 text-center text-sm">
                Green = Correct letter in correct position | Yellow = Correct letter in wrong position | Gray = Letter not in name
              </p>
            </CardHeader>
          </Card>

          {/* Character Hint */}
          <Card className="mb-6 bg-black/40 border-white/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-400/50">
                    <AnimeImage
                      src={gameState.targetCharacter.imageUrl || '/images/characters/default.jpg'}
                      alt="Character to guess"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      fallbackText="?"
                    />
                  </div>
                  <Button
                    onClick={toggleHint}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {gameState.showHint ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                    {gameState.showHint ? 'Hide Hints' : 'Show Hints'}
                  </Button>
                </div>
                
                {gameState.showHint && (
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Anime:</strong> {gameState.targetCharacter.anime}</p>
                    <p><strong>Role:</strong> {gameState.targetCharacter.role}</p>
                    <p><strong>Bounty:</strong> {gameState.targetCharacter.recompensa ? `${gameState.targetCharacter.recompensa.toLocaleString()} ฿` : 'No bounty'}</p>
                    <p><strong>Tripulación:</strong> {gameState.targetCharacter.crew}</p>
                    <p><strong>Letters:</strong> {targetName.length}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Game Grid */}
          <div className="space-y-2 mb-6">
            {Array.from({ length: 6 }, (_, rowIndex) => {
              const guess = gameState.guesses[rowIndex] || '';
              const isCurrentRow = rowIndex === gameState.guesses.length && gameState.gameStatus === 'playing';
              const displayGuess = isCurrentRow ? gameState.currentGuess : guess;
              
              let guessResult: GuessResult[] = [];
              if (guess && gameState.gameStatus !== 'playing') {
                guessResult = evaluateGuess(guess, targetName);
              } else if (guess) {
                guessResult = evaluateGuess(guess, targetName);
              }

              return (
                <div key={rowIndex} className="flex gap-2 justify-center">
                  {Array.from({ length: maxLength }, (_, colIndex) => {
                    const letter = displayGuess[colIndex] || '';
                    const result = guessResult[colIndex];
                    
                    let bgColor = 'bg-gray-600';
                    if (result) {
                      if (result.status === 'correct') bgColor = 'bg-green-600';
                      else if (result.status === 'present') bgColor = 'bg-yellow-600';
                      else bgColor = 'bg-gray-700';
                    } else if (isCurrentRow && letter) {
                      bgColor = 'bg-gray-500';
                    }

                    return (
                      <div
                        key={colIndex}
                        className={`w-12 h-12 border-2 border-gray-400 flex items-center justify-center text-white font-bold text-lg ${bgColor}`}
                      >
                        {letter}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Virtual Keyboard */}
          <div className="space-y-2">
            {[
              ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
              ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
              ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1 justify-center">
                {row.map((key) => {
                  let keyStatus = '';
                  if (gameState.guesses.length > 0) {
                    for (const guess of gameState.guesses) {
                      const result = evaluateGuess(guess, targetName);
                      const keyResult = result.find(r => r.letter === key.toLowerCase());
                      if (keyResult) {
                        if (keyResult.status === 'correct') keyStatus = 'bg-green-600';
                        else if (keyResult.status === 'present' && keyStatus !== 'bg-green-600') keyStatus = 'bg-yellow-600';
                        else if (keyResult.status === 'absent' && !keyStatus) keyStatus = 'bg-gray-700';
                      }
                    }
                  }

                  return (
                    <Button
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      disabled={gameState.gameStatus !== 'playing'}
                      className={`px-2 py-4 text-white font-bold ${
                        key === 'ENTER' || key === 'BACKSPACE' ? 'px-4' : ''
                      } ${keyStatus || 'bg-gray-600 hover:bg-gray-500'}`}
                    >
                      {key === 'BACKSPACE' ? '⌫' : key}
                    </Button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Game Result */}
          {gameState.gameStatus !== 'playing' && (
            <Card className="mt-8 bg-black/40 border-white/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  {gameState.gameStatus === 'won' ? (
                    <div className="text-green-400">
                      <div className="text-3xl font-bold mb-4">🎉 Congratulations! 🎉</div>
                      <div className="text-xl mb-4">You guessed it in {gameState.guesses.length} attempts!</div>
                      <div className="mb-4">+{Math.max(100, timeLeft * 2)} points</div>
                    </div>
                  ) : (
                    <div className="text-red-400">
                      <div className="text-3xl font-bold mb-4">😔 Game Over</div>
                      <div className="text-xl mb-4">The character was:</div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-400/50">
                        <AnimeImage
                          src={gameState.targetCharacter.imageUrl || '/images/characters/default.jpg'}
                          alt={gameState.targetCharacter.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          fallbackText={gameState.targetCharacter.name.charAt(0)}
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {gameState.targetCharacter.name}
                    </h3>
                    <p className="text-gray-400">
                      From: {gameState.targetCharacter.anime}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button onClick={nextGame} className="bg-purple-600 hover:bg-purple-700 text-white">
                      Next Character
                    </Button>
                    <Button onClick={resetGame} className="border border-white/20 text-white hover:bg-white/10">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset Game
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
