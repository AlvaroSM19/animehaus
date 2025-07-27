// One Piece Character Database - Optimized for Games

export interface AnimeCharacter {
  id: string;
  name: string;
  nameEnglish?: string;
  anime: string;
  animeId: string;
  crew: string;
  imageUrl: string;
  description: string;
  
  // Game categories - boolean (yes/no)
  haki: boolean;
  hakiObservation: boolean;
  hakiArmament: boolean;
  hakiConqueror: boolean;
  devilFruit: boolean;
  marine: boolean;
  pirate: boolean;
  
  // Game categories - specific values
  birthPlace: 'East Blue' | 'North Blue' | 'West Blue' | 'South Blue' | 'Grand Line' | 'Unknown';
  bounty: number; // 0 means no bounty
  
  // Display-only fields (for character pages, not games)
  element?: string;
  role?: 'main' | 'supporting';
  abilities?: string[];
}

export const ANIME_CHARACTERS: AnimeCharacter[] = [
  // STRAW HAT PIRATES
  {
    id: 'op-luffy',
    name: 'Monkey D. Luffy',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-luffy.jpg',
    description: 'Captain of the Straw Hat Pirates, future Pirate King',
    
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    devilFruit: true,
    marine: false,
    pirate: true,
    birthPlace: 'East Blue',
    bounty: 3000000000,
    
    element: 'Rubber',
    role: 'main',
    abilities: ['Gomu Gomu no Mi', 'Gear Fifth', 'Conqueror\'s Haki']
  },
  {
    id: 'op-zoro',
    name: 'Roronoa Zoro',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-zoro.jpg',
    description: 'Swordsman of the Straw Hat Pirates, future strongest swordsman',
    
    haki: true,
    hakiObservation: false,
    hakiArmament: true,
    hakiConqueror: true,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'East Blue',
    bounty: 1111000000,
    
    element: 'Sword',
    role: 'main',
    abilities: ['Three Sword Style', 'Enma', 'Advanced Armament Haki']
  },
  {
    id: 'op-sanji',
    name: 'Vinsmoke Sanji',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-sanji.jpg',
    description: 'Cook of the Straw Hat Pirates, All Blue seeker',
    
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'North Blue',
    bounty: 1032000000,
    
    element: 'Fire',
    role: 'main',
    abilities: ['Black Leg Style', 'Diable Jambe', 'Observation Haki']
  },
  {
    id: 'op-nami',
    name: 'Nami',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-nami.jpg',
    description: 'Navigator of the Straw Hat Pirates, weather expert',
    
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'East Blue',
    bounty: 366000000,
    
    element: 'Weather',
    role: 'main',
    abilities: ['Climatact', 'Navigation', 'Weather Manipulation']
  },
  {
    id: 'op-usopp',
    name: 'Usopp',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-usopp.jpg',
    description: 'Sniper of the Straw Hat Pirates, brave warrior of the sea',
    
    haki: true,
    hakiObservation: true,
    hakiArmament: false,
    hakiConqueror: false,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'East Blue',
    bounty: 500000000,
    
    element: 'Plant',
    role: 'main',
    abilities: ['Sniping', 'Kabuto', 'Observation Haki']
  },
  {
    id: 'op-chopper',
    name: 'Tony Tony Chopper',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-chopper.jpg',
    description: 'Doctor of the Straw Hat Pirates, reindeer who ate Human-Human Fruit',
    
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    devilFruit: true,
    marine: false,
    pirate: true,
    birthPlace: 'Grand Line',
    bounty: 1000,
    
    element: 'Medical',
    role: 'main',
    abilities: ['Hito Hito no Mi', 'Medical Knowledge', 'Monster Point']
  },
  {
    id: 'op-robin',
    name: 'Nico Robin',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-robin.jpg',
    description: 'Archaeologist of the Straw Hat Pirates, can read Poneglyphs',
    
    haki: true,
    hakiObservation: false,
    hakiArmament: true,
    hakiConqueror: false,
    devilFruit: true,
    marine: false,
    pirate: true,
    birthPlace: 'West Blue',
    bounty: 930000000,
    
    element: 'Limbs',
    role: 'main',
    abilities: ['Hana Hana no Mi', 'Archaeology', 'Armament Haki']
  },
  {
    id: 'op-franky',
    name: 'Franky',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-franky.jpg',
    description: 'Shipwright of the Straw Hat Pirates, cyborg',
    
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'South Blue',
    bounty: 394000000,
    
    element: 'Cyborg',
    role: 'main',
    abilities: ['Cyborg Technology', 'Shipbuilding', 'Strong Right']
  },
  {
    id: 'op-brook',
    name: 'Brook',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-brook.jpg',
    description: 'Musician of the Straw Hat Pirates, living skeleton',
    
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    devilFruit: true,
    marine: false,
    pirate: true,
    birthPlace: 'West Blue',
    bounty: 383000000,
    
    element: 'Soul',
    role: 'main',
    abilities: ['Yomi Yomi no Mi', 'Music', 'Soul King']
  },
  {
    id: 'op-jinbe',
    name: 'Jinbe',
    anime: 'One Piece',
    animeId: 'onepiece',
    crew: 'Straw Hat Pirates',
    imageUrl: '/images/characters/op-jinbe.jpg',
    description: 'Helmsman of the Straw Hat Pirates, former Warlord',
    
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    devilFruit: false,
    marine: false,
    pirate: true,
    birthPlace: 'Grand Line',
    bounty: 1100000000,
    
    element: 'Water',
    role: 'main',
    abilities: ['Fish-Man Karate', 'Armament Haki', 'Observation Haki']
  }
];

// Utility functions for games
export const getCharactersByCrew = (crew: string): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.crew.toLowerCase().includes(crew.toLowerCase()));
};

export const getCharactersByBirthPlace = (place: string): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.birthPlace === place);
};

export const getCharactersByBountyRange = (min: number, max: number): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.bounty >= min && char.bounty <= max);
};

export const getCharactersWithHaki = (hakiType?: 'observation' | 'armament' | 'conqueror'): AnimeCharacter[] => {
  if (!hakiType) return ANIME_CHARACTERS.filter(char => char.haki);
  
  switch (hakiType) {
    case 'observation': return ANIME_CHARACTERS.filter(char => char.hakiObservation);
    case 'armament': return ANIME_CHARACTERS.filter(char => char.hakiArmament);
    case 'conqueror': return ANIME_CHARACTERS.filter(char => char.hakiConqueror);
    default: return [];
  }
};

export const getCharactersWithDevilFruit = (): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.devilFruit);
};

export const getMarines = (): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.marine);
};

export const getPirates = (): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.pirate);
};
