'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Trophy,
  Clock,
  Target
} from 'lucide-react';
import { getRandomCharacters, CHARACTER_DATA } from '@/lib/anime-data';
import { generateId } from '@/lib/utils';

interface BingoCell {
  id: string;
  content: {
    name: string;
    anime: string;
    imageUrl?: string;
  };
  isMarked: boolean;
  position: { row: number; col: number };
}

interface BingoState {
  board: BingoCell[][];
  currentCall: string | null;
  calledItems: string[];
  isGameActive: boolean;
  gameStartTime: Date | null;
  completedLines: number;
  isCompleted: boolean;
  score: number;
}

const BOARD_SIZE = 5;
const BINGO_CALLS = [
  // Characters
  'Izuku Midoriya', 'Katsuki Bakugo', 'Shoto Todoroki', 'All Might',
  'Monkey D. Luffy', 'Roronoa Zoro', 'Sanji', 'Nami',
  'Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi',
  'Son Goku', 'Vegeta', 'Gohan', 'Piccolo',
  'Eren Yeager', 'Mikasa Ackerman', 'Levi Ackerman', 'Armin',
  
  // Anime Concepts
  'Quirk', 'Devil Fruit', 'Chakra', 'Ki Energy', 'Titan Power',
  'Rasengan', 'Kamehameha', 'Bankai', 'Domain Expansion', 'Alchemy',
  'Dragon Ball', 'One For All', 'Sharingan', 'Gear Fourth', 'Thunder Breathing',
  
  // Locations
  'Hidden Leaf Village', 'Grand Line', 'U.A. High School', 'Capsule Corp',
  'Wall Maria', 'Soul Society', 'Fairy Tail Guild', 'Hunter Association',
  
  // Items/Objects
  'Death Note', 'Dragon Radar', 'Pokeball', 'Duel Monsters Card',
  'Philosopher\'s Stone', 'Stand Arrow', 'Sacred Gear', 'Magic Wand',
];

export default function BingoGame() {
  const [gameState, setGameState] = useState<BingoState>({
    board: [],
    currentCall: null,
    calledItems: [],
    isGameActive: false,
    gameStartTime: null,
    completedLines: 0,
    isCompleted: false,
    score: 0
  });

  const [autoCall, setAutoCall] = useState(false);
  const [callInterval, setCallInterval] = useState<NodeJS.Timeout | null>(null);

  // Initialize board
  useEffect(() => {
    initializeBoard();
  }, []);

  // Auto-call interval
  useEffect(() => {
    if (autoCall && gameState.isGameActive) {
      const interval = setInterval(() => {
        callNextItem();
      }, 3000);
      setCallInterval(interval);
      return () => clearInterval(interval);
    } else if (callInterval) {
      clearInterval(callInterval);
      setCallInterval(null);
    }
  }, [autoCall, gameState.isGameActive]);

  const initializeBoard = () => {
    const board: BingoCell[][] = [];
    const shuffledCalls = [...BINGO_CALLS].sort(() => Math.random() - 0.5);
    
    for (let row = 0; row < BOARD_SIZE; row++) {
      const boardRow: BingoCell[] = [];
      for (let col = 0; col < BOARD_SIZE; col++) {
        const index = row * BOARD_SIZE + col;
        
        // Center cell is free space
        if (row === 2 && col === 2) {
          boardRow.push({
            id: generateId(),
            content: { name: 'FREE SPACE', anime: '🎌' },
            isMarked: true,
            position: { row, col }
          });
        } else {
          const callIndex = index >= 12 ? index - 1 : index; // Adjust for free space
          boardRow.push({
            id: generateId(),
            content: { 
              name: shuffledCalls[callIndex] || `Item ${index}`, 
              anime: 'Various' 
            },
            isMarked: false,
            position: { row, col }
          });
        }
      }
      board.push(boardRow);
    }

    setGameState(prev => ({
      ...prev,
      board,
      currentCall: null,
      calledItems: [],
      isGameActive: false,
      gameStartTime: null,
      completedLines: 0,
      isCompleted: false,
      score: 0
    }));
  };

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      isGameActive: true,
      gameStartTime: new Date()
    }));
  };

  const pauseGame = () => {
    setGameState(prev => ({
      ...prev,
      isGameActive: false
    }));
    setAutoCall(false);
  };

  const resetGame = () => {
    setAutoCall(false);
    initializeBoard();
  };

  const callNextItem = () => {
    const availableItems = BINGO_CALLS.filter(item => 
      !gameState.calledItems.includes(item)
    );
    
    if (availableItems.length === 0) return;
    
    const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
    
    setGameState(prev => ({
      ...prev,
      currentCall: randomItem,
      calledItems: [...prev.calledItems, randomItem]
    }));
  };

  const markCell = (cellId: string) => {
    if (!gameState.isGameActive) return;

    setGameState(prev => {
      const newBoard = prev.board.map(row =>
        row.map(cell => {
          if (cell.id === cellId && prev.calledItems.includes(cell.content.name)) {
            return { ...cell, isMarked: true };
          }
          return cell;
        })
      );

      const completedLines = checkForLines(newBoard);
      const isCompleted = checkForBingo(newBoard);
      const score = calculateScore(completedLines, prev.gameStartTime);

      return {
        ...prev,
        board: newBoard,
        completedLines,
        isCompleted,
        score,
        isGameActive: !isCompleted
      };
    });
  };

  const checkForLines = (board: BingoCell[][]): number => {
    let lines = 0;
    
    // Check rows
    for (let row = 0; row < BOARD_SIZE; row++) {
      if (board[row].every(cell => cell.isMarked)) {
        lines++;
      }
    }
    
    // Check columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board.every(row => row[col].isMarked)) {
        lines++;
      }
    }
    
    // Check diagonals
    if (board.every((row, index) => row[index].isMarked)) {
      lines++;
    }
    if (board.every((row, index) => row[BOARD_SIZE - 1 - index].isMarked)) {
      lines++;
    }
    
    return lines;
  };

  const checkForBingo = (board: BingoCell[][]): boolean => {
    return board.every(row => row.every(cell => cell.isMarked));
  };

  const calculateScore = (lines: number, startTime: Date | null): number => {
    if (!startTime) return 0;
    
    const timeElapsed = Math.floor((Date.now() - startTime.getTime()) / 1000);
    const baseScore = lines * 100;
    const timeBonus = Math.max(0, 300 - timeElapsed);
    
    return baseScore + timeBonus;
  };

  const getElapsedTime = (): string => {
    if (!gameState.gameStartTime) return '0:00';
    
    const elapsed = Math.floor((Date.now() - gameState.gameStartTime.getTime()) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎲 Bingo Anime
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¡Marca los elementos de tu tablero conforme son llamados y consigue líneas o bingo completo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Game Board */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Tu Tablero de Bingo</CardTitle>
                {gameState.currentCall && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-anime-sakura to-anime-gold rounded-lg text-white">
                    <div className="text-sm opacity-90">Llamada actual:</div>
                    <div className="text-xl font-bold">{gameState.currentCall}</div>
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                {/* BINGO Header */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                    <div 
                      key={letter} 
                      className="aspect-square flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-xl rounded-lg"
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                {/* Bingo Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {gameState.board.flat().map((cell) => (
                    <button
                      key={cell.id}
                      onClick={() => markCell(cell.id)}
                      disabled={!gameState.isGameActive || !gameState.calledItems.includes(cell.content.name)}
                      className={`
                        aspect-square p-2 rounded-lg border-2 transition-all duration-300 text-xs font-medium
                        ${cell.isMarked 
                          ? 'bg-gradient-to-br from-green-400 to-green-600 text-white border-green-600 shadow-lg' 
                          : gameState.calledItems.includes(cell.content.name)
                            ? 'bg-yellow-100 border-yellow-400 text-yellow-800 hover:bg-yellow-200 cursor-pointer animate-pulse'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }
                        ${cell.content.name === 'FREE SPACE' ? 'bg-gradient-to-br from-purple-400 to-pink-400 text-white' : ''}
                      `}
                    >
                      <div className="text-center leading-tight">
                        {cell.content.name === 'FREE SPACE' ? (
                          <div>
                            <div className="text-lg">🎌</div>
                            <div className="text-xs">FREE</div>
                          </div>
                        ) : (
                          <div>
                            <div className="truncate">{cell.content.name}</div>
                            {cell.content.anime !== 'Various' && (
                              <div className="text-xs opacity-75 truncate">{cell.content.anime}</div>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Victory Message */}
                {gameState.isCompleted && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">¡BINGO!</h3>
                    <p className="text-lg">¡Felicitaciones! Has completado tu tablero</p>
                    <p className="text-sm mt-2">Puntuación final: {gameState.score} puntos</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Game Controls */}
          <div className="space-y-6">
            {/* Game Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    Tiempo
                  </span>
                  <span className="font-mono">{getElapsedTime()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <Target className="h-4 w-4 mr-2" />
                    Líneas
                  </span>
                  <span className="font-bold">{gameState.completedLines}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <Trophy className="h-4 w-4 mr-2" />
                    Puntos
                  </span>
                  <span className="font-bold">{gameState.score}</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  Llamadas: {gameState.calledItems.length}
                </div>
              </CardContent>
            </Card>

            {/* Game Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Controles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {!gameState.isGameActive ? (
                  <Button 
                    onClick={startGame} 
                    className="w-full"
                    disabled={gameState.isCompleted}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {gameState.gameStartTime ? 'Continuar' : 'Iniciar Juego'}
                  </Button>
                ) : (
                  <Button onClick={pauseGame} variant="outline" className="w-full">
                    <Pause className="h-4 w-4 mr-2" />
                    Pausar
                  </Button>
                )}
                
                <Button onClick={callNextItem} className="w-full" disabled={!gameState.isGameActive}>
                  Llamar Siguiente
                </Button>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autoCall"
                    checked={autoCall}
                    onChange={(e) => setAutoCall(e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="autoCall" className="text-sm">
                    Llamada automática
                  </label>
                </div>
                
                <Button onClick={resetGame} variant="outline" className="w-full">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Nuevo Juego
                </Button>
              </CardContent>
            </Card>

            {/* Recent Calls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Últimas Llamadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {gameState.calledItems.slice(-10).reverse().map((item, index) => (
                    <div 
                      key={index}
                      className={`p-2 rounded text-sm ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                  
                  {gameState.calledItems.length === 0 && (
                    <p className="text-gray-500 text-center py-4">
                      No hay llamadas aún
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
