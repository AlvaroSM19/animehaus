import { Anime, Character } from '@/types';

// Popular anime series data
export const ANIME_DATA: Anime[] = [
  {
    id: 'mha',
    title: 'Boku no Hero Academia',
    titleEnglish: 'My Hero Academia',
    studio: 'Bones',
    year: 2016,
    genre: ['Action', 'Superhero', 'School'],
    status: 'ongoing',
    episodes: 150,
    rating: 8.7,
    description: 'A world where people with superpowers called "Quirks" are the norm.'
  },
  {
    id: 'onepiece',
    title: 'One Piece',
    studio: 'Toei Animation',
    year: 1999,
    genre: ['Action', 'Adventure', 'Comedy'],
    status: 'ongoing',
    episodes: 1000,
    rating: 9.0,
    description: 'The adventures of Monkey D. Luffy and his pirate crew.'
  },
  {
    id: 'naruto',
    title: 'Naruto',
    studio: 'Pierrot',
    year: 2002,
    genre: ['Action', 'Adventure', 'Martial Arts'],
    status: 'completed',
    episodes: 720,
    rating: 8.8,
    description: 'A young ninja who seeks recognition and dreams of becoming the Hokage.'
  },
  {
    id: 'dragonball',
    title: 'Dragon Ball Z',
    studio: 'Toei Animation',
    year: 1989,
    genre: ['Action', 'Adventure', 'Martial Arts'],
    status: 'completed',
    episodes: 291,
    rating: 8.9,
    description: 'The adventures of Goku and his friends defending Earth.'
  },
  {
    id: 'aot',
    title: 'Shingeki no Kyojin',
    titleEnglish: 'Attack on Titan',
    studio: 'Mappa',
    year: 2013,
    genre: ['Action', 'Drama', 'Horror'],
    status: 'completed',
    episodes: 87,
    rating: 9.2,
    description: 'Humanity fights for survival against giant humanoid Titans.'
  },
  {
    id: 'demonslayer',
    title: 'Kimetsu no Yaiba',
    titleEnglish: 'Demon Slayer',
    studio: 'Ufotable',
    year: 2019,
    genre: ['Action', 'Supernatural', 'Historical'],
    status: 'ongoing',
    episodes: 44,
    rating: 8.9,
    description: 'A young boy becomes a demon slayer to save his sister.'
  },
  {
    id: 'jjk',
    title: 'Jujutsu Kaisen',
    studio: 'Mappa',
    year: 2020,
    genre: ['Action', 'Supernatural', 'School'],
    status: 'ongoing',
    episodes: 24,
    rating: 8.8,
    description: 'Students fight cursed spirits with jujutsu sorcery.'
  },
  {
    id: 'haikyuu',
    title: 'Haikyuu!!',
    studio: 'Production I.G',
    year: 2014,
    genre: ['Sports', 'School', 'Comedy'],
    status: 'completed',
    episodes: 85,
    rating: 8.9,
    description: 'High school volleyball team striving for nationals.'
  }
];

// Character data for each anime
export const CHARACTER_DATA: Character[] = [
  // My Hero Academia Characters
  {
    id: 'mha-deku',
    name: 'Izuku Midoriya',
    nameEnglish: 'Deku',
    anime: ANIME_DATA[0],
    animeId: 'mha',
    power: 85,
    element: 'One For All',
    team: 'Class 1-A',
    role: 'protagonist',
    abilities: ['One For All', 'Detroit Smash', 'Full Cowling'],
    description: 'Quirkless boy who inherited One For All'
  },
  {
    id: 'mha-bakugo',
    name: 'Katsuki Bakugo',
    anime: ANIME_DATA[0],
    animeId: 'mha',
    power: 90,
    element: 'Explosion',
    team: 'Class 1-A',
    role: 'supporting',
    abilities: ['Explosion', 'Howitzer Impact', 'AP Shot'],
    description: 'Explosive personality with explosion quirk'
  },
  {
    id: 'mha-todoroki',
    name: 'Shoto Todoroki',
    anime: ANIME_DATA[0],
    animeId: 'mha',
    power: 88,
    element: 'Half-Cold Half-Hot',
    team: 'Class 1-A',
    role: 'supporting',
    abilities: ['Ice Attacks', 'Fire Attacks', 'Heaven-Piercing Ice Wall'],
    description: 'Son of Endeavor with dual quirk'
  },
  {
    id: 'mha-allmight',
    name: 'Toshinori Yagi',
    nameEnglish: 'All Might',
    anime: ANIME_DATA[0],
    animeId: 'mha',
    power: 100,
    element: 'One For All',
    team: 'Pro Heroes',
    role: 'supporting',
    abilities: ['One For All', 'United States of Smash', 'Detroit Smash'],
    description: 'Former Symbol of Peace'
  },

  // One Piece Characters
  {
    id: 'op-luffy',
    name: 'Monkey D. Luffy',
    anime: ANIME_DATA[1],
    animeId: 'onepiece',
    power: 95,
    element: 'Rubber',
    team: 'Straw Hat Pirates',
    role: 'protagonist',
    abilities: ['Gum-Gum Fruit', 'Gear Second', 'Gear Third', 'Gear Fourth'],
    description: 'Captain of Straw Hat Pirates'
  },
  {
    id: 'op-zoro',
    name: 'Roronoa Zoro',
    anime: ANIME_DATA[1],
    animeId: 'onepiece',
    power: 92,
    element: 'Swords',
    team: 'Straw Hat Pirates',
    role: 'supporting',
    abilities: ['Three Sword Style', 'Ashura', 'Dragon Twister'],
    description: 'Swordsman of the Straw Hats'
  },
  {
    id: 'op-sanji',
    name: 'Vinsmoke Sanji',
    anime: ANIME_DATA[1],
    animeId: 'onepiece',
    power: 88,
    element: 'Fire',
    team: 'Straw Hat Pirates',
    role: 'supporting',
    abilities: ['Black Leg Style', 'Diable Jambe', 'Raid Suit'],
    description: 'Cook of the Straw Hats'
  },

  // Naruto Characters
  {
    id: 'naruto-naruto',
    name: 'Naruto Uzumaki',
    anime: ANIME_DATA[2],
    animeId: 'naruto',
    power: 95,
    element: 'Wind',
    team: 'Team 7',
    role: 'protagonist',
    abilities: ['Rasengan', 'Shadow Clone', 'Nine-Tails Chakra'],
    description: 'Jinchuriki of the Nine-Tailed Fox'
  },
  {
    id: 'naruto-sasuke',
    name: 'Sasuke Uchiha',
    anime: ANIME_DATA[2],
    animeId: 'naruto',
    power: 94,
    element: 'Lightning',
    team: 'Team 7',
    role: 'supporting',
    abilities: ['Sharingan', 'Chidori', 'Susanoo'],
    description: 'Last member of the Uchiha clan'
  },
  {
    id: 'naruto-sakura',
    name: 'Sakura Haruno',
    anime: ANIME_DATA[2],
    animeId: 'naruto',
    power: 82,
    element: 'Medical',
    team: 'Team 7',
    role: 'supporting',
    abilities: ['Medical Ninjutsu', 'Chakra Enhanced Strength', 'Summoning'],
    description: 'Medical ninja and teammate'
  },

  // Dragon Ball Characters
  {
    id: 'db-goku',
    name: 'Son Goku',
    anime: ANIME_DATA[3],
    animeId: 'dragonball',
    power: 100,
    element: 'Ki',
    team: 'Z Fighters',
    role: 'protagonist',
    abilities: ['Kamehameha', 'Super Saiyan', 'Ultra Instinct'],
    description: 'Saiyan warrior protecting Earth'
  },
  {
    id: 'db-vegeta',
    name: 'Vegeta',
    anime: ANIME_DATA[3],
    animeId: 'dragonball',
    power: 98,
    element: 'Ki',
    team: 'Z Fighters',
    role: 'supporting',
    abilities: ['Final Flash', 'Big Bang Attack', 'Super Saiyan'],
    description: 'Prince of all Saiyans'
  },

  // Attack on Titan Characters
  {
    id: 'aot-eren',
    name: 'Eren Yeager',
    anime: ANIME_DATA[4],
    animeId: 'aot',
    power: 90,
    element: 'Titan',
    team: 'Survey Corps',
    role: 'protagonist',
    abilities: ['Attack Titan', 'Founding Titan', 'War Hammer Titan'],
    description: 'Holder of multiple Titan powers'
  },
  {
    id: 'aot-mikasa',
    name: 'Mikasa Ackerman',
    anime: ANIME_DATA[4],
    animeId: 'aot',
    power: 88,
    element: 'Combat',
    team: 'Survey Corps',
    role: 'supporting',
    abilities: ['Ackerman Power', 'ODM Gear Mastery', 'Combat Skills'],
    description: 'Elite soldier and Eren\'s protector'
  },
  {
    id: 'aot-levi',
    name: 'Levi Ackerman',
    anime: ANIME_DATA[4],
    animeId: 'aot',
    power: 95,
    element: 'Combat',
    team: 'Survey Corps',
    role: 'supporting',
    abilities: ['Ackerman Power', 'ODM Gear Mastery', 'Superhuman Strength'],
    description: 'Humanity\'s strongest soldier'
  }
];

// Bingo items for different categories
export const BINGO_ITEMS = {
  weapons: [
    { name: 'Zanpakuto', anime: 'Bleach', category: 'weapon' },
    { name: 'Dragon Slayer', anime: 'Berserk', category: 'weapon' },
    { name: 'Murasame', anime: 'Akame ga Kill', category: 'weapon' },
    { name: 'Tessaiga', anime: 'Inuyasha', category: 'weapon' },
  ],
  abilities: [
    { name: 'Kamehameha', anime: 'Dragon Ball', category: 'ability' },
    { name: 'Rasengan', anime: 'Naruto', category: 'ability' },
    { name: 'Getsuga Tensho', anime: 'Bleach', category: 'ability' },
    { name: 'Serious Punch', anime: 'One Punch Man', category: 'ability' },
  ],
  locations: [
    { name: 'Hidden Leaf Village', anime: 'Naruto', category: 'location' },
    { name: 'Shiganshina District', anime: 'Attack on Titan', category: 'location' },
    { name: 'U.A. High School', anime: 'My Hero Academia', category: 'location' },
    { name: 'Grand Line', anime: 'One Piece', category: 'location' },
  ]
};

// Helper functions
export function getAnimeById(id: string): Anime | undefined {
  return ANIME_DATA.find(anime => anime.id === id);
}

export function getCharactersByAnime(animeId: string): Character[] {
  return CHARACTER_DATA.filter(char => char.animeId === animeId);
}

export function getRandomCharacters(count: number): Character[] {
  const shuffled = [...CHARACTER_DATA].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRandomAnimes(count: number): Anime[] {
  const shuffled = [...ANIME_DATA].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getCharactersByPowerRange(min: number, max: number): Character[] {
  return CHARACTER_DATA.filter(char => 
    char.power && char.power >= min && char.power <= max
  );
}

export function getAnimesByGenre(genre: string): Anime[] {
  return ANIME_DATA.filter(anime => 
    anime.genre.includes(genre)
  );
}

export function searchCharacters(query: string): Character[] {
  const lowercaseQuery = query.toLowerCase();
  return CHARACTER_DATA.filter(char =>
    char.name.toLowerCase().includes(lowercaseQuery) ||
    char.nameEnglish?.toLowerCase().includes(lowercaseQuery) ||
    char.abilities?.some(ability => ability.toLowerCase().includes(lowercaseQuery))
  );
}

export function searchAnimes(query: string): Anime[] {
  const lowercaseQuery = query.toLowerCase();
  return ANIME_DATA.filter(anime =>
    anime.title.toLowerCase().includes(lowercaseQuery) ||
    anime.titleEnglish?.toLowerCase().includes(lowercaseQuery) ||
    anime.studio.toLowerCase().includes(lowercaseQuery)
  );
}
