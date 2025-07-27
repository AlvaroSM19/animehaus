'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimeImage } from '@/components/ui/anime-image';
import { ArrowLeft, RotateCcw, Trophy, Clock, Search, Check, X, Info } from 'lucide-react';
import Link from 'next/link';
import { ANIME_CHARACTERS, AnimeCharacter } from '@/lib/anime-data-updated';
import { 
  generateValidGridConditions, 
  checkCondition, 
  getCellStats,
  GridCondition 
} from '@/lib/grid-validation';

interface GridCell {
  row: number;
  col: number;
  character: AnimeCharacter | null;
  isCorrect: boolean | null;
}

export default function AnimeGridGame() {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [rowConditions, setRowConditions] = useState<GridCondition[]>([]);
  const [colConditions, setColConditions] = useState<GridCondition[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<AnimeCharacter[]>([]);
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
  const [score, setScore] = useState(0);
  const [completedCells, setCompletedCells] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [gameStarted, setGameStarted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Initialize grid
  useEffect(() => {
    initializeGame();
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timeLeft]);

  // Search effect
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = ANIME_CHARACTERS.filter(char =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 10);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const initializeGame = () => {
    // Create 3x3 grid
    const newGrid: GridCell[][] = [];
    for (let row = 0; row < 3; row++) {
      newGrid[row] = [];
      for (let col = 0; col < 3; col++) {
        newGrid[row][col] = {
          row,
          col,
          character: null,
          isCorrect: null
        };
      }
    }
    setGrid(newGrid);

    // Generate valid conditions that ensure all cells have solutions
    const { rowConditions: newRowConditions, colConditions: newColConditions } = generateValidGridConditions();
    setRowConditions(newRowConditions);
    setColConditions(newColConditions);
    
    setScore(0);
    setCompletedCells(0);
    setTimeLeft(1200);
    setGameStarted(true);
  };

  const validateCharacter = (character: AnimeCharacter, row: number, col: number): boolean => {
    const rowCondition = rowConditions[row];
    const colCondition = colConditions[col];
    
    return checkCondition(character, rowCondition) && checkCondition(character, colCondition);
  };

  // Función para verificar si un personaje ya está siendo usado en el grid
  const isCharacterAlreadyUsed = (character: AnimeCharacter): boolean => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col].character && grid[row][col].character?.id === character.id) {
          return true;
        }
      }
    }
    return false;
  };

  const handleCellClick = (row: number, col: number) => {
    // No permitir editar celdas que ya son correctas
    if (grid[row][col].isCorrect === true) {
      return;
    }
    
    setSelectedCell({ row, col });
    setShowSearch(true);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleCharacterSelect = (character: AnimeCharacter) => {
    if (!selectedCell) return;

    // Verificar si el personaje ya está siendo usado
    if (isCharacterAlreadyUsed(character)) {
      return; // No permitir seleccionar personajes duplicados
    }

    const { row, col } = selectedCell;
    const isValid = validateCharacter(character, row, col);
    
    const newGrid = [...grid];
    newGrid[row][col] = {
      ...newGrid[row][col],
      character,
      isCorrect: isValid
    };
    
    setGrid(newGrid);
    
    if (isValid) {
      setScore(prev => prev + 100);
      setCompletedCells(prev => prev + 1);
    } else {
      setScore(prev => Math.max(0, prev - 25));
    }
    
    setShowSearch(false);
    setSelectedCell(null);
    setSearchQuery('');
    setSearchResults([]);
  };

  const resetGame = () => {
    initializeGame();
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCellColor = (cell: GridCell): string => {
    if (!cell.character) return 'bg-slate-700 border-slate-500 hover:border-yellow-400';
    if (cell.isCorrect === true) return 'bg-green-800 border-green-400 cursor-not-allowed';
    if (cell.isCorrect === false) return 'bg-red-800 border-red-400';
    return 'bg-slate-700 border-slate-500';
  };

  const isGameComplete = completedCells === 9;
  const progressPercentage = (completedCells / 9) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
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
              <h1 className="text-2xl font-bold text-yellow-400">AnimeHaus - Cuadrícula de Personajes</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>{score}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-20 bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm">{completedCells}/9</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className={`${timeLeft <= 300 ? 'text-red-400 animate-pulse' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Button
                onClick={() => setShowHints(!showHints)}
                className={`${showHints ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'} hover:bg-yellow-400 hover:text-black`}
              >
                <Info className="w-4 h-4 mr-2" />
                Pistas
              </Button>
              <Button
                onClick={resetGame}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Nuevo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Instructions */}
          <Card className="mb-8 bg-slate-800/90 border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-center text-xl">
                ¡Completa la Cuadrícula!
              </CardTitle>
              <p className="text-slate-200 text-center">
                Haz clic en cada celda y busca un personaje que cumpla las condiciones de fila y columna
              </p>
              <p className="text-slate-300 text-center text-sm">
                Respuestas correctas: +100 puntos | Respuestas incorrectas: -25 puntos
              </p>
            </CardHeader>
          </Card>

          {/* Grid */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {/* Empty top-left corner */}
              <div></div>
              
              {/* Column headers */}
              {colConditions.map((condition, idx) => (
                <div key={idx} className="bg-yellow-600 text-slate-900 p-3 rounded-lg text-center font-bold text-sm">
                  {condition.display}
                </div>
              ))}
              
              {/* Grid rows */}
              {grid.map((row, rowIdx) => (
                <div key={rowIdx} className="contents">
                  {/* Row header */}
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center font-bold text-sm">
                    {rowConditions[rowIdx]?.display}
                  </div>
                  
                  {/* Grid cells */}
                  {row.map((cell, colIdx) => (
                    <button
                      key={`${rowIdx}-${colIdx}`}
                      onClick={() => handleCellClick(rowIdx, colIdx)}
                      className={`aspect-square border-2 rounded-lg p-2 transition-all hover:scale-105 ${getCellColor(cell)}`}
                    >
                      {cell.character ? (
                        <div className="h-full flex flex-col items-center justify-center">
                          {/* Character Image */}
                          <div className="w-12 h-12 mb-2">
                            <AnimeImage
                              src={cell.character.imageUrl || '/images/characters/default.jpg'}
                              alt={cell.character.name}
                              width={48}
                              height={48}
                              className="w-full h-full rounded-full"
                              fallbackText={cell.character.name.charAt(0)}
                            />
                          </div>
                          
                          {/* Character Name */}
                          <div className="text-xs font-bold text-center mb-1 line-clamp-1">
                            {cell.character.name}
                          </div>
                          
                          {/* Anime Title */}
                          <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                            {cell.character.anime}
                          </div>
                          
                          {/* Validation Icon */}
                          {cell.isCorrect !== null && (
                            <div className="mt-1">
                              {cell.isCorrect ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <X className="w-4 h-4 text-red-600" />
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Hints Section */}
          {showHints && (
            <div className="mt-8">
              <Card className="bg-slate-800/50 border-yellow-400">
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Estadísticas de las Celdas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    <div></div>
                    {colConditions.map((colCondition, colIdx) => (
                      <div key={colIdx} className="text-center">
                        <div className="bg-yellow-600 text-black p-2 rounded text-sm font-bold">
                          {colCondition.display}
                        </div>
                      </div>
                    ))}
                    
                    {rowConditions.map((rowCondition, rowIdx) => (
                      <div key={rowIdx} className="contents">
                        <div className="bg-purple-600 text-white p-2 rounded text-sm font-bold">
                          {rowCondition.display}
                        </div>
                        {colConditions.map((colCondition, colIdx) => {
                          const stats = getCellStats(rowCondition, colCondition);
                          return (
                            <div key={colIdx} className="bg-slate-700 p-3 rounded text-center">
                              <div className="text-green-400 font-bold text-lg">{stats.count}</div>
                              <div className="text-xs text-slate-300">personajes</div>
                              {stats.examples.length > 0 && (
                                <div className="text-xs text-slate-400 mt-1">
                                  Ej: {stats.examples.join(', ')}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Search Modal */}
          {showSearch && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md bg-slate-800 border-yellow-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-100">
                    <Search className="w-5 h-5 text-yellow-400" />
                    Buscar Personaje
                  </CardTitle>
                  <p className="text-sm text-slate-300">
                    Debe coincidir: <strong className="text-yellow-400">{rowConditions[selectedCell?.row || 0]?.display}</strong> Y <strong className="text-yellow-400">{colConditions[selectedCell?.col || 0]?.display}</strong>
                  </p>
                </CardHeader>
                <CardContent>
                  <input
                    type="text"
                    placeholder="Escribe el nombre del personaje..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-purple-400 bg-slate-700 text-slate-100 placeholder-slate-400 rounded-lg mb-4 focus:outline-none focus:border-yellow-400"
                    autoFocus
                  />
                  
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {searchResults
                      .filter(character => !isCharacterAlreadyUsed(character))
                      .map((character) => (
                      <button
                        key={character.id}
                        onClick={() => handleCharacterSelect(character)}
                        className="w-full p-3 text-left border border-slate-600 bg-slate-700 hover:bg-slate-600 hover:border-yellow-400 rounded-lg transition-all duration-200 flex items-center gap-3"
                      >
                        {/* Character Image */}
                        <div className="w-12 h-12 flex-shrink-0">
                          <AnimeImage
                            src={character.imageUrl || '/images/characters/default.jpg'}
                            alt={character.name}
                            width={48}
                            height={48}
                            className="w-full h-full rounded-full character-image-small"
                            fallbackText={character.name.charAt(0)}
                          />
                        </div>
                        
                        {/* Character Info */}
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-100 truncate">{character.name}</div>
                          <div className="text-sm text-slate-300 truncate">
                            {character.crew}
                          </div>
                        </div>
                      </button>
                    ))}
                    {searchQuery.length >= 2 && searchResults.filter(character => !isCharacterAlreadyUsed(character)).length === 0 && (
                      <div className="text-center text-gray-500 py-4">
                        {searchResults.length > 0 ? 'All matching characters are already used' : 'No characters found'}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={() => {
                        setShowSearch(false);
                        setSelectedCell(null);
                      }}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Game Complete */}
          {isGameComplete && (
            <Card className="mb-6 bg-black/20 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Congratulations!</h2>
                  <p className="text-white/80 mb-4">You completed the grid with a score of {score} points!</p>
                  <Button onClick={resetGame} className="bg-green-600 hover:bg-green-700">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Play Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Reset Button */}
          {!isGameComplete && (
            <div className="text-center">
              <Button onClick={resetGame} className="border-white/20 text-white hover:bg-white/10 border">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Game
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
