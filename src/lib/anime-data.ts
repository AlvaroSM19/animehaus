// Simplified Anime Database - Only One Piece Characters with Images

export interface AnimeCharacter {
  id: string;
  name: string;
  nameEnglish?: string;
  anime: string;
  animeId: string;
  power: number;
  element: string;
  team: string;
  role: 'main' | 'supporting';
  imageUrl: string;
  abilities: string[];
  description: string;
}

// Only One Piece Characters with confirmed images
export const ANIME_CHARACTERS: AnimeCharacter[] = [
  // Straw Hat Pirates - Main Crew
  {
    id: 'op-luffy',
    name: 'Monkey D. Luffy',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 95,
    element: 'Rubber',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-luffy.jpg',
    abilities: ['Gomu Gomu no Mi', 'Gear Fifth', 'Conqueror\'s Haki'],
    description: 'Captain of the Straw Hat Pirates, future Pirate King'
  },
  {
    id: 'op-zoro',
    name: 'Roronoa Zoro',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 92,
    element: 'Sword',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-zoro.jpg',
    abilities: ['Three Sword Style', 'Enma', 'Advanced Armament Haki'],
    description: 'Swordsman of the Straw Hat Pirates, future strongest swordsman'
  },
  {
    id: 'op-sanji',
    name: 'Vinsmoke Sanji',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 89,
    element: 'Fire',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-sanji.jpg',
    abilities: ['Black Leg Style', 'Diable Jambe', 'Observation Haki'],
    description: 'Cook of the Straw Hat Pirates, All Blue seeker'
  },
  {
    id: 'op-nami',
    name: 'Nami',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 67,
    element: 'Weather',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-nami.jpg',
    abilities: ['Clima-Tact', 'Weather Manipulation', 'Navigation'],
    description: 'Navigator of the Straw Hat Pirates, dreams of mapping the world'
  },
  {
    id: 'op-usopp',
    name: 'Usopp',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 64,
    element: 'Sniper',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-usopp.jpg',
    abilities: ['Slingshot Mastery', 'Pop Greens', 'Observation Haki'],
    description: 'Sniper of the Straw Hat Pirates, brave warrior of the sea'
  },
  {
    id: 'op-chopper',
    name: 'Tony Tony Chopper',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 68,
    element: 'Reindeer',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-chopper.jpg',
    abilities: ['Human-Human Fruit', 'Monster Point', 'Medical Knowledge'],
    description: 'Doctor of the Straw Hat Pirates, wants to cure all diseases'
  },
  {
    id: 'op-robin',
    name: 'Nico Robin',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 78,
    element: 'Flower',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-robin.jpg',
    abilities: ['Flower-Flower Fruit', 'Demonio Fleur', 'Archaeology'],
    description: 'Archaeologist of the Straw Hat Pirates, seeks the True History'
  },
  {
    id: 'op-franky',
    name: 'Franky',
    nameEnglish: 'Cutty Flam',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 82,
    element: 'Cyborg',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-franky.jpg',
    abilities: ['Cyborg Body', 'Radical Beam', 'Franky Shogun'],
    description: 'Shipwright of the Straw Hat Pirates, a cyborg'
  },
  {
    id: 'op-brook',
    name: 'Brook',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 78,
    element: 'Soul',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-brook.jpg',
    abilities: ['Revive-Revive Fruit', 'Soul King', 'Music'],
    description: 'Musician of the Straw Hat Pirates, a living skeleton'
  },
  {
    id: 'op-jinbei',
    name: 'Jinbei',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 89,
    element: 'Water',
    team: 'Straw Hat Pirates',
    role: 'main',
    imageUrl: '/images/characters/op-jinbei.jpg',
    abilities: ['Fish-Man Karate', 'Water Control', 'Haki'],
    description: 'Helmsman of the Straw Hat Pirates, former Warlord'
  },

  // Four Emperors
  {
    id: 'op-shanks',
    name: 'Red-Haired Shanks',
    nameEnglish: 'Shanks',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 98,
    element: 'Haki',
    team: 'Red Hair Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-shanks.jpg',
    abilities: ['Conqueror\'s Haki', 'Advanced Armament Haki', 'Swordsmanship'],
    description: 'One of the Four Emperors, Luffy\'s inspiration'
  },
  {
    id: 'op-whitebeard',
    name: 'Edward Newgate',
    nameEnglish: 'Whitebeard',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 99,
    element: 'Quake',
    team: 'Whitebeard Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-whitebeard.jpg',
    abilities: ['Tremor-Tremor Fruit', 'Conqueror\'s Haki', 'World\'s Strongest Man'],
    description: 'Former strongest man in the world, Ace\'s captain'
  },
  {
    id: 'op-blackbeard',
    name: 'Marshall D. Teach',
    nameEnglish: 'Blackbeard',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Darkness',
    team: 'Blackbeard Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-blackbeard.jpg',
    abilities: ['Dark-Dark Fruit', 'Tremor-Tremor Fruit', 'Multiple Devil Fruits'],
    description: 'One of the Four Emperors, dual Devil Fruit user'
  },
  {
    id: 'op-kaido',
    name: 'Kaido',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 98,
    element: 'Dragon',
    team: 'Beast Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-kaido.jpg',
    abilities: ['Fish-Fish Fruit Model: Azure Dragon', 'Conqueror\'s Haki', 'Strongest Creature'],
    description: 'Former Emperor, known as the strongest creature in the world'
  },
  {
    id: 'op-bigmom',
    name: 'Charlotte Linlin',
    nameEnglish: 'Big Mom',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 97,
    element: 'Soul',
    team: 'Big Mom Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-bigmom.jpg',
    abilities: ['Soul-Soul Fruit', 'Conqueror\'s Haki', 'Homies'],
    description: 'Former Emperor, can manipulate souls and create homies'
  },

  // Marine Admirals & High-Ranking Officers
  {
    id: 'op-akainu',
    name: 'Sakazuki',
    nameEnglish: 'Akainu',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Magma',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-akainu.jpg',
    abilities: ['Magma-Magma Fruit', 'Absolute Justice', 'Fleet Admiral'],
    description: 'Fleet Admiral of the Marines, killed Ace'
  },
  {
    id: 'op-aokiji',
    name: 'Kuzan',
    nameEnglish: 'Aokiji',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 95,
    element: 'Ice',
    team: 'Former Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-aokiji.jpg',
    abilities: ['Ice-Ice Fruit', 'Lazy Justice', 'Former Admiral'],
    description: 'Former Marine Admiral, now a member of Blackbeard Pirates'
  },
  {
    id: 'op-kizaru',
    name: 'Borsalino',
    nameEnglish: 'Kizaru',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 95,
    element: 'Light',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-kizaru.jpg',
    abilities: ['Light-Light Fruit', 'Light Speed', 'Admiral'],
    description: 'Marine Admiral with light-based powers'
  },
  {
    id: 'op-fujitora',
    name: 'Issho',
    nameEnglish: 'Fujitora',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 94,
    element: 'Gravity',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-fujitora.jpg',
    abilities: ['Gravity-Gravity Fruit', 'Blind Justice', 'Admiral'],
    description: 'Marine Admiral with gravity powers'
  },
  {
    id: 'op-ryokugyu',
    name: 'Aramaki',
    nameEnglish: 'Ryokugyu',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 93,
    element: 'Forest',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-ryokugyu.jpg',
    abilities: ['Woods-Woods Fruit', 'Forest Control', 'Admiral'],
    description: 'Marine Admiral with forest powers'
  },
  {
    id: 'op-sengoku',
    name: 'Sengoku',
    nameEnglish: 'The Buddha',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 95,
    element: 'Buddha',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-sengoku.jpg',
    abilities: ['Human-Human Fruit Model: Buddha', 'Strategic Mind', 'Former Fleet Admiral'],
    description: 'Former Fleet Admiral of the Marines'
  },
  {
    id: 'op-garp',
    name: 'Monkey D. Garp',
    nameEnglish: 'Garp the Fist',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Fist',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-garp.jpg',
    abilities: ['Legendary Strength', 'Armament Haki', 'Love Fist'],
    description: 'Legendary Marine Vice Admiral, Luffy\'s grandfather'
  },
  {
    id: 'op-smoker',
    name: 'Smoker',
    nameEnglish: 'White Hunter',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 78,
    element: 'Smoke',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-smoker.jpg',
    abilities: ['Smoke-Smoke Fruit', 'Seastone Weapon', 'White Chase'],
    description: 'Marine Vice Admiral with smoke powers'
  },
  {
    id: 'op-tashigi',
    name: 'Tashigi',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 65,
    element: 'Sword',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-tashigi.jpg',
    abilities: ['Swordsmanship', 'Justice', 'Shigure'],
    description: 'Marine Captain and swords collector'
  },
  {
    id: 'op-koby',
    name: 'Koby',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 72,
    element: 'Growth',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-koby.jpg',
    abilities: ['Rokushiki', 'Observation Haki', 'Rapid Growth'],
    description: 'Marine Captain, Luffy\'s first friend'
  },
  {
    id: 'op-helmeppo',
    name: 'Helmeppo',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 68,
    element: 'Sword',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-helmeppo.jpg',
    abilities: ['Swordsmanship', 'Rokushiki', 'Marine Training'],
    description: 'Marine Lieutenant Commander, Koby\'s partner'
  },

  // Legendary Pirates & Roger Crew
  {
    id: 'op-rayleigh',
    name: 'Silvers Rayleigh',
    nameEnglish: 'Dark King Rayleigh',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 94,
    element: 'Haki',
    team: 'Former Roger Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-rayleigh.jpg',
    abilities: ['All Three Haki Types', 'Swordsmanship', 'Roger\'s Right Hand'],
    description: 'Former First Mate of the Pirate King, Luffy\'s teacher'
  },
  {
    id: 'op-roger',
    name: 'Gol D. Roger',
    nameEnglish: 'Pirate King',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 100,
    element: 'Supreme',
    team: 'Roger Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-roger.jpg',
    abilities: ['Voice of All Things', 'Supreme Haki', 'One Piece'],
    description: 'The Pirate King, found the One Piece'
  },
  {
    id: 'op-gaban',
    name: 'Scopper Gaban',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 91,
    element: 'Axes',
    team: 'Former Roger Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-gaban.jpg',
    abilities: ['Dual Axes', 'Roger Pirate Training', 'Combat Expert'],
    description: 'Former member of Roger Pirates, skilled axe fighter'
  },
  {
    id: 'op-oden',
    name: 'Kozuki Oden',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 93,
    element: 'Sword',
    team: 'Former Roger Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-oden.jpg',
    abilities: ['Oden Two-Sword Style', 'Advanced Armament Haki', 'Enma & Ame no Habakiri'],
    description: 'Former Daimyo of Kuri, member of Roger Pirates'
  },
  {
    id: 'op-toki',
    name: 'Kozuki Toki',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 70,
    element: 'Time',
    team: 'Wano',
    role: 'supporting',
    imageUrl: '/images/characters/op-toki.jpg',
    abilities: ['Time-Time Fruit', 'Time Travel', 'Prophecy'],
    description: 'Oden\'s wife, time traveler with prophecy powers'
  },

  // Whitebeard Pirates
  {
    id: 'op-ace',
    name: 'Portgas D. Ace',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 88,
    element: 'Fire',
    team: 'Whitebeard Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-ace.jpg',
    abilities: ['Flame-Flame Fruit', 'Conqueror\'s Haki', 'Fire Fist'],
    description: 'Luffy\'s sworn brother, former 2nd Division Commander'
  },
  {
    id: 'op-marco',
    name: 'Marco the Phoenix',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 89,
    element: 'Phoenix',
    team: 'Whitebeard Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-marco.jpg',
    abilities: ['Phoenix Fruit', 'Blue Flames', '1st Division Commander'],
    description: 'Former 1st Division Commander of Whitebeard Pirates'
  },
  {
    id: 'op-izo',
    name: 'Izo',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 82,
    element: 'Gun',
    team: 'Whitebeard Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-izo.jpg',
    abilities: ['Dual Pistols', 'Marksmanship', '16th Division Commander'],
    description: 'Former 16th Division Commander, Wano samurai'
  },

  // Film Characters & Others
  {
    id: 'op-uta',
    name: 'Uta',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 85,
    element: 'Song',
    team: 'Red Hair Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-uta.jpg',
    abilities: ['Sing-Sing Fruit', 'Dream World', 'Music Power'],
    description: 'Shanks\' adopted daughter, world-famous singer'
  },
  {
    id: 'op-zephyr',
    name: 'Zephyr',
    nameEnglish: 'Z',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 92,
    element: 'Crusher',
    team: 'NEO Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-zephyr.jpg',
    abilities: ['Battle Smasher', 'Marine Training', 'Haki Master'],
    description: 'Former Marine Admiral, NEO Marines leader'
  },

  // World Government & Celestial Dragons
  {
    id: 'op-imu',
    name: 'Imu',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 100,
    element: 'Shadow',
    team: 'World Government',
    role: 'supporting',
    imageUrl: '/images/characters/op-imu.jpg',
    abilities: ['World Control', 'Ancient Power', 'Mystery'],
    description: 'Secret ruler of the World Government'
  },
  {
    id: 'op-saturn',
    name: 'Jaygarcia Saturn',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 97,
    element: 'Elder',
    team: 'Five Elders',
    role: 'supporting',
    imageUrl: '/images/characters/op-saturn.jpg',
    abilities: ['Elder Power', 'Government Authority', 'Ancient Knowledge'],
    description: 'Member of Five Elders'
  },
  {
    id: 'op-garling',
    name: 'Figarland Garling',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 95,
    element: 'Supreme',
    team: 'Holy Knights',
    role: 'supporting',
    imageUrl: '/images/characters/op-garling.jpg',
    abilities: ['Supreme Commander', 'Holy Knight Powers', 'God Valley'],
    description: 'Supreme Commander of Holy Knights'
  },
  {
    id: 'op-charlos',
    name: 'Saint Charlos',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 15,
    element: 'Privilege',
    team: 'Celestial Dragons',
    role: 'supporting',
    imageUrl: '/images/characters/op-charlos.jpg',
    abilities: ['World Noble Privilege', 'Slave Ownership', 'Arrogance'],
    description: 'Celestial Dragon, symbol of corruption'
  },
  {
    id: 'op-topman',
    name: 'Topman Warcury',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Elder',
    team: 'Five Elders',
    role: 'supporting',
    imageUrl: '/images/characters/op-topman.jpg',
    abilities: ['Elder Authority', 'Government Power', 'Ancient Wisdom'],
    description: 'Member of Five Elders'
  },
  {
    id: 'op-nusjuro',
    name: 'Ethanbaron V. Nusjuro',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 97,
    element: 'Elder',
    team: 'Five Elders',
    role: 'supporting',
    imageUrl: '/images/characters/op-nusjuro.jpg',
    abilities: ['Sword Mastery', 'Elder Power', 'Government Authority'],
    description: 'Swordsman of Five Elders'
  },
  {
    id: 'op-marcusmars',
    name: 'Marcus Mars',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Elder',
    team: 'Five Elders',
    role: 'supporting',
    imageUrl: '/images/characters/op-marcusmars.jpg',
    abilities: ['Elder Authority', 'Bird Transformation', 'Government Power'],
    description: 'Member of Five Elders'
  },
  {
    id: 'op-jupeter',
    name: 'Shepard Ju Peter',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 96,
    element: 'Elder',
    team: 'Five Elders',
    role: 'supporting',
    imageUrl: '/images/characters/op-jupeter.jpg',
    abilities: ['Elder Power', 'Government Control', 'Ancient Authority'],
    description: 'Member of Five Elders'
  },

  // Additional Characters
  {
    id: 'op-caesar',
    name: 'Caesar Clown',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 78,
    element: 'Gas',
    team: 'Former MADS',
    role: 'supporting',
    imageUrl: '/images/characters/op-caesar.jpg',
    abilities: ['Gas-Gas Fruit', 'Scientific Genius', 'Poison Gas'],
    description: 'Mad scientist, gas logia user'
  },
  {
    id: 'op-vergo',
    name: 'Vergo',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 83,
    element: 'Bamboo',
    team: 'Donquixote Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-vergo.jpg',
    abilities: ['Full-Body Armament Haki', 'Bamboo Stick', 'Undercover'],
    description: 'Donquixote executive, former Marine'
  },
  {
    id: 'op-monet',
    name: 'Monet',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 71,
    element: 'Snow',
    team: 'Donquixote Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-monet.jpg',
    abilities: ['Snow-Snow Fruit', 'Harpy Form', 'Loyalty'],
    description: 'Donquixote executive, snow logia'
  },
  {
    id: 'op-buffalo',
    name: 'Buffalo',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 65,
    element: 'Spin',
    team: 'Donquixote Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-buffalo.jpg',
    abilities: ['Spin-Spin Fruit', 'Helicopter Flight', 'Partnership'],
    description: 'Donquixote executive, rotation powers'
  },
  {
    id: 'op-caribou',
    name: 'Caribou',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 69,
    element: 'Swamp',
    team: 'Caribou Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-caribou.jpg',
    abilities: ['Swamp-Swamp Fruit', 'Storage', 'Sneak Attacks'],
    description: 'Supernova pirate, swamp logia'
  },
  {
    id: 'op-morgans',
    name: 'Big News Morgans',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 58,
    element: 'News',
    team: 'World Economy News',
    role: 'supporting',
    imageUrl: '/images/characters/op-morgans.jpg',
    abilities: ['News Control', 'Albatross Form', 'Information Network'],
    description: 'President of World Economy News'
  },

  // Giant Characters
  {
    id: 'op-dorry',
    name: 'Dorry',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 82,
    element: 'Giant',
    team: 'Giant Warrior Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-dorry.jpg',
    abilities: ['Giant Strength', 'Warrior Honor', 'Ancient Weapons'],
    description: 'Blue Ogre, Giant Warrior Pirate'
  },
  {
    id: 'op-brogy',
    name: 'Brogy',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 82,
    element: 'Giant',
    team: 'Giant Warrior Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-brogy.jpg',
    abilities: ['Giant Strength', 'Warrior Honor', 'Ancient Weapons'],
    description: 'Red Ogre, Giant Warrior Pirate'
  },

  // Revolutionary Army
  {
    id: 'op-dadan',
    name: 'Curly Dadan',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 48,
    element: 'Bandit',
    team: 'Dadan Family',
    role: 'supporting',
    imageUrl: '/images/characters/op-dadan.jpg',
    abilities: ['Bandit Skills', 'Motherly Care', 'Mountain Survival'],
    description: 'Mountain bandit, raised Luffy and Ace'
  },

  // Misc Important Characters
  {
    id: 'op-laboon',
    name: 'Laboon',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 75,
    element: 'Whale',
    team: 'Twin Cape',
    role: 'supporting',
    imageUrl: '/images/characters/op-laboon.jpg',
    abilities: ['Whale Strength', 'Loyalty', 'Musical Memory'],
    description: 'Island whale waiting for Brook\'s crew'
  },
  {
    id: 'op-merry',
    name: 'Going Merry',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 35,
    element: 'Ship',
    team: 'Straw Hat Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-merry.jpg',
    abilities: ['Ship Spirit', 'Klabautermann', 'Loyalty'],
    description: 'First ship of Straw Hat Pirates'
  },
  {
    id: 'op-sunny',
    name: 'Thousand Sunny',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 65,
    element: 'Ship',
    team: 'Straw Hat Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-sunny.jpg',
    abilities: ['Coup de Burst', 'Various Weapons', 'Advanced Systems'],
    description: 'Current ship of Straw Hat Pirates'
  },
  {
    id: 'op-shushu',
    name: 'Shushu',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 20,
    element: 'Dog',
    team: 'Orange Town',
    role: 'supporting',
    imageUrl: '/images/characters/op-shushu.jpg',
    abilities: ['Loyalty', 'Guard Dog', 'Determination'],
    description: 'Loyal dog guarding pet food store'
  },
  {
    id: 'op-hattor',
    name: 'Hattori',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 25,
    element: 'Pigeon',
    team: 'CP9',
    role: 'supporting',
    imageUrl: '/images/characters/op-hattor.jpg',
    abilities: ['Flying', 'Message Delivery', 'Lucci\'s Partner'],
    description: 'Lucci\'s pigeon companion'
  },
  {
    id: 'op-zunesha',
    name: 'Zunesha',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 98,
    element: 'Elephant',
    team: 'Zou Island',
    role: 'supporting',
    imageUrl: '/images/characters/op-zunesha.jpg',
    abilities: ['Massive Size', 'Island Carrier', 'Ancient Punishment'],
    description: 'Giant elephant carrying Zou island'
  },
  {
    id: 'op-lola',
    name: 'Lola',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 62,
    element: 'Warthog',
    team: 'Rolling Pirates',
    role: 'supporting',
    imageUrl: '/images/characters/op-lola.jpg',
    abilities: ['Warthog Strength', 'Proposal Power', 'Leadership'],
    description: 'Captain of Rolling Pirates, Big Mom\'s daughter'
  },
  {
    id: 'op-momonga',
    name: 'Momonga',
    anime: 'One Piece',
    animeId: 'onepiece',
    power: 76,
    element: 'Marine',
    team: 'Marines',
    role: 'supporting',
    imageUrl: '/images/characters/op-momonga.jpg',
    abilities: ['Swordsmanship', 'Marine Training', 'Vice Admiral'],
    description: 'Marine Vice Admiral, spider tattoo'
  }
];

// Helper functions
export const getCharacterByName = (name: string): AnimeCharacter | undefined => {
  return ANIME_CHARACTERS.find(char => 
    char.name.toLowerCase().includes(name.toLowerCase()) ||
    char.nameEnglish?.toLowerCase().includes(name.toLowerCase())
  );
};

export const getCharactersByAnime = (animeId: string): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.animeId === animeId);
};

export const getRandomCharacter = (): AnimeCharacter => {
  const randomIndex = Math.floor(Math.random() * ANIME_CHARACTERS.length);
  return ANIME_CHARACTERS[randomIndex];
};

export const getCharactersByTeam = (team: string): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => 
    char.team.toLowerCase().includes(team.toLowerCase())
  );
};

export const getCharactersByRole = (role: 'main' | 'supporting'): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.role === role);
};

export const getCharactersByPowerRange = (min: number, max: number): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter(char => char.power >= min && char.power <= max);
};
