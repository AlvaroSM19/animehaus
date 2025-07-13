// Base types for the anime quiz platform
export interface Anime {
  id: string;
  title: string;
  titleEnglish?: string;
  studio: string;
  year: number;
  genre: string[];
  status: 'ongoing' | 'completed' | 'upcoming';
  episodes?: number;
  rating?: number;
  imageUrl?: string;
  description?: string;
}

export interface Character {
  id: string;
  name: string;
  nameEnglish?: string;
  anime: Anime;
  animeId: string;
  power?: number;
  element?: string;
  team?: string;
  role: 'protagonist' | 'antagonist' | 'supporting' | 'other';
  imageUrl?: string;
  abilities?: string[];
  description?: string;
}

export interface GameSession {
  id: string;
  gameType: GameType;
  score: number;
  duration: number; // in seconds
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  createdAt: Date;
  userId?: string;
}

export type GameType = 'bingo' | 'grid-trivia' | 'connections' | 'pyramid' | 'top-10';

// Bingo specific types
export interface BingoCard {
  id: string;
  size: 4 | 5;
  cells: BingoCell[][];
  completedLines: number;
  isCompleted: boolean;
}

export interface BingoCell {
  id: string;
  content: Character | Anime | BingoItem;
  isMarked: boolean;
  position: { row: number; col: number };
}

export interface BingoItem {
  id: string;
  type: 'character' | 'anime' | 'ability' | 'item' | 'location';
  name: string;
  imageUrl?: string;
  category: string;
  animeSource: string;
}

// Grid Trivia types
export interface GridTrivia {
  id: string;
  size: 3;
  cells: GridCell[][];
  isCompleted: boolean;
  correctAnswers: number;
}

export interface GridCell {
  id: string;
  position: { row: number; col: number };
  expectedAnswers: Character[];
  currentAnswer?: Character;
  isCorrect: boolean;
  criteria: string[];
}

// Connections types
export interface ConnectionsGame {
  id: string;
  items: ConnectionItem[];
  groups: ConnectionGroup[];
  selectedItems: string[];
  foundGroups: ConnectionGroup[];
  attemptsLeft: number;
  isCompleted: boolean;
}

export interface ConnectionItem {
  id: string;
  name: string;
  groupId: string;
  imageUrl?: string;
  description?: string;
}

export interface ConnectionGroup {
  id: string;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4; // 1 = easiest, 4 = hardest
  items: ConnectionItem[];
  color: string;
}

// Pyramid types
export interface PyramidGame {
  id: string;
  levels: PyramidLevel[];
  criteria: string;
  isCompleted: boolean;
  score: number;
}

export interface PyramidLevel {
  id: string;
  level: 1 | 2 | 3 | 4;
  maxItems: number;
  items: Character[];
  isLocked: boolean;
}

// Top 10 types
export interface Top10Game {
  id: string;
  category: string;
  availableItems: (Character | Anime)[];
  userRanking: RankingItem[];
  officialRanking: RankingItem[];
  score: number;
  isCompleted: boolean;
}

export interface RankingItem {
  id: string;
  item: Character | Anime;
  position: number;
  justification?: string;
}

// UI State types
export interface GameState {
  isLoading: boolean;
  error?: string;
  currentGame?: GameSession;
}

export interface User {
  id: string;
  username: string;
  email: string;
  stats: UserStats;
  preferences: UserPreferences;
}

export interface UserStats {
  totalGamesPlayed: number;
  totalScore: number;
  favoriteGame: GameType;
  achievements: Achievement[];
  streaks: Record<GameType, number>;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  soundEnabled: boolean;
  animationsEnabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  favoriteAnimes: string[];
}
