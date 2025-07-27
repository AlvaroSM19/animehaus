import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Game utility functions
export function generateId(): string {
  return crypto.randomUUID();
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}

// Score calculation utilities
export function calculateBingoScore(
  completedLines: number,
  timeElapsed: number,
  difficulty: 'easy' | 'medium' | 'hard'
): number {
  const baseScore = completedLines * 100;
  const timeBonus = Math.max(0, 300 - timeElapsed); // Bonus for speed
  const difficultyMultiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.5 : 2;
  
  return Math.round((baseScore + timeBonus) * difficultyMultiplier);
}

export function calculateConnectionsScore(
  correctGroups: number,
  attemptsUsed: number,
  timeElapsed: number
): number {
  const baseScore = correctGroups * 250;
  const attemptPenalty = (attemptsUsed - 4) * 50; // Penalty for extra attempts
  const timeBonus = Math.max(0, 600 - timeElapsed);
  
  return Math.max(0, baseScore - attemptPenalty + timeBonus);
}

// Time formatting utilities
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatTimeElapsed(startTime: Date, endTime: Date = new Date()): string {
  const elapsed = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
  return formatTime(elapsed);
}

// Local storage utilities
export function saveGameProgress(gameType: string, data: any): void {
  try {
    localStorage.setItem(`anime-quiz-${gameType}`, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save game progress:', error);
  }
}

export function loadGameProgress(gameType: string): any | null {
  try {
    const saved = localStorage.getItem(`anime-quiz-${gameType}`);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load game progress:', error);
    return null;
  }
}

export function clearGameProgress(gameType: string): void {
  try {
    localStorage.removeItem(`anime-quiz-${gameType}`);
  } catch (error) {
    console.warn('Failed to clear game progress:', error);
  }
}

// Anime content utilities
export function getAnimeByGenre(animes: any[], genre: string): any[] {
  return animes.filter(anime => 
    anime.genre && anime.genre.includes(genre)
  );
}

export function getCharactersByAnime(characters: any[], animeId: string): any[] {
  return characters.filter(character => character.animeId === animeId);
}

export function getRandomAnimeQuote(): string {
  const quotes = [
    "Believe it! - Naruto",
    "I'm gonna be King of the Pirates! - Luffy",
    "Plus Ultra! - All Might",
    "Dedicate your hearts! - Erwin Smith",
    "Muda muda muda! - Dio",
    "Kamehameha! - Goku",
    "Bankai! - Ichigo",
    "Alchemy is the science of understanding! - Edward Elric"
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUsername(username: string): boolean {
  return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);
}

// Animation utilities
export function getRandomDelay(max: number = 1): number {
  return Math.random() * max;
}

export function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Color utilities for games
export function getColorForDifficulty(difficulty: 'easy' | 'medium' | 'hard'): string {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-100';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'hard':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

export function getColorForGameType(gameType: string): string {
  const colors = {
    bingo: 'from-pink-500 to-rose-500',
    'grid-trivia': 'from-blue-500 to-cyan-500',
    connections: 'from-green-500 to-emerald-500',
    pyramid: 'from-purple-500 to-violet-500',
    'top-10': 'from-orange-500 to-red-500',
  };
  
  return colors[gameType as keyof typeof colors] || 'from-gray-500 to-gray-600';
}
