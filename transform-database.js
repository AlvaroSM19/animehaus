const fs = require('fs');

// Leer el archivo actual
const content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Función para determinar el lugar de nacimiento basado en el personaje
const getBirthPlace = (name, description, abilities) => {
  const nameL = name.toLowerCase();
  const descL = description.toLowerCase();
  const abilitiesStr = abilities.join(' ').toLowerCase();
  
  // Mapeo básico basado en conocimiento de One Piece
  if (nameL.includes('luffy') || nameL.includes('ace') || nameL.includes('sabo')) return 'East Blue';
  if (nameL.includes('law') || nameL.includes('kidd') || nameL.includes('killer')) return 'North Blue';
  if (nameL.includes('bege') || nameL.includes('capone')) return 'West Blue';
  if (nameL.includes('drake')) return 'North Blue';
  if (nameL.includes('hawkins')) return 'North Blue';
  if (nameL.includes('bonney')) return 'South Blue';
  
  // Por crew/team
  if (descL.includes('east blue') || descL.includes('goa kingdom')) return 'East Blue';
  if (descL.includes('north blue')) return 'North Blue';
  if (descL.includes('west blue')) return 'West Blue';
  if (descL.includes('south blue')) return 'South Blue';
  if (descL.includes('grand line') || descL.includes('new world')) return 'Grand Line';
  
  // Default para most characters
  return 'Grand Line';
};

// Función para determinar recompensa
const getBounty = (name, description, abilities) => {
  const nameL = name.toLowerCase();
  const descL = description.toLowerCase();
  
  // Recompensas conocidas (en millones de berries)
  if (nameL.includes('luffy')) return 3000000000;
  if (nameL.includes('zoro')) return 1111000000;
  if (nameL.includes('sanji')) return 1032000000;
  if (nameL.includes('jinbe')) return 1100000000;
  if (nameL.includes('robin')) return 930000000;
  if (nameL.includes('usopp')) return 500000000;
  if (nameL.includes('franky')) return 394000000;
  if (nameL.includes('brook')) return 383000000;
  if (nameL.includes('nami')) return 366000000;
  if (nameL.includes('chopper')) return 1000;
  
  // Otros personajes importantes
  if (nameL.includes('kaido')) return 4611100000;
  if (nameL.includes('big mom') || nameL.includes('charlotte linlin')) return 4388000000;
  if (nameL.includes('shanks')) return 4048900000;
  if (nameL.includes('blackbeard') || nameL.includes('marshall d. teach')) return 3996000000;
  if (nameL.includes('whitebeard')) return 5046000000;
  if (nameL.includes('gol d. roger')) return 5564800000;
  
  // Law, Kid, etc.
  if (nameL.includes('trafalgar law')) return 3000000000;
  if (nameL.includes('eustass kid')) return 3000000000;
  
  // Marines no tienen recompensa
  if (descL.includes('marine') || descL.includes('navy')) return 0;
  
  // Default para piratas
  if (descL.includes('pirate') || descL.includes('captain')) return 100000000;
  
  return 0;
};

// Función para verificar habilidades haki
const hasHaki = (abilities, description) => {
  const combined = (abilities.join(' ') + ' ' + description).toLowerCase();
  return combined.includes('haki');
};

const hasObservationHaki = (abilities, description) => {
  const combined = (abilities.join(' ') + ' ' + description).toLowerCase();
  return combined.includes('observation') || combined.includes('kenbunshoku');
};

const hasArmamentHaki = (abilities, description) => {
  const combined = (abilities.join(' ') + ' ' + description).toLowerCase();
  return combined.includes('armament') || combined.includes('busoshoku') || combined.includes('advanced armament');
};

const hasConquerorHaki = (abilities, description) => {
  const combined = (abilities.join(' ') + ' ' + description).toLowerCase();
  return combined.includes('conqueror') || combined.includes('haoshoku') || combined.includes('supreme king');
};

const hasDevilFruit = (abilities, description, element) => {
  const combined = (abilities.join(' ') + ' ' + description + ' ' + element).toLowerCase();
  return combined.includes('fruit') || combined.includes('devil') || combined.includes(' mi') || 
         combined.includes('paramecia') || combined.includes('zoan') || combined.includes('logia');
};

// Extraer personajes del archivo
const characterBlocks = content.match(/{\s*id: '[^']+',[\s\S]*?}/g);

if (!characterBlocks) {
  console.log('No se pudieron extraer los personajes');
  process.exit(1);
}

const newCharacters = characterBlocks.map(block => {
  // Extraer campos actuales
  const idMatch = block.match(/id: '([^']+)'/);
  const nameMatch = block.match(/name: '([^']+)'/);
  const nameEnglishMatch = block.match(/nameEnglish: '([^']+)'/);
  const animeMatch = block.match(/anime: '([^']+)'/);
  const animeIdMatch = block.match(/animeId: '([^']+)'/);
  const elementMatch = block.match(/element: '([^']+)'/);
  const teamMatch = block.match(/team: '([^']+)'/);
  const roleMatch = block.match(/role: '([^']+)'/);
  const imageUrlMatch = block.match(/imageUrl: '([^']+)'/);
  const abilitiesMatch = block.match(/abilities: \[(.*?)\]/);
  const descriptionMatch = block.match(/description: '([^']+)'/);
  
  if (!idMatch || !nameMatch) return null;
  
  const id = idMatch[1];
  const name = nameMatch[1];
  const nameEnglish = nameEnglishMatch ? nameEnglishMatch[1] : undefined;
  const anime = animeMatch[1];
  const animeId = animeIdMatch[1];
  const element = elementMatch ? elementMatch[1] : '';
  const team = teamMatch ? teamMatch[1] : '';
  const role = roleMatch ? roleMatch[1] : 'supporting';
  const imageUrl = imageUrlMatch[1];
  const abilities = abilitiesMatch ? 
    abilitiesMatch[1].split(',').map(a => a.trim().replace(/'/g, '').replace(/"/g, '')) : [];
  const description = descriptionMatch ? descriptionMatch[1] : '';
  
  // Determinar nuevas propiedades
  const crew = team;
  const birthPlace = getBirthPlace(name, description, abilities);
  const bounty = getBounty(name, description, abilities);
  
  const haki = hasHaki(abilities, description);
  const hakiObservation = hasObservationHaki(abilities, description);
  const hakiArmament = hasArmamentHaki(abilities, description);
  const hakiConqueror = hasConquerorHaki(abilities, description);
  const devilFruit = hasDevilFruit(abilities, description, element);
  
  const marine = description.toLowerCase().includes('marine') || 
                 description.toLowerCase().includes('navy') ||
                 team.toLowerCase().includes('marines');
  const pirate = description.toLowerCase().includes('pirate') || 
                 team.toLowerCase().includes('pirates');
  
  return {
    id,
    name,
    nameEnglish,
    anime,
    animeId,
    crew,
    imageUrl,
    description,
    haki,
    hakiObservation,
    hakiArmament,
    hakiConqueror,
    devilFruit,
    marine,
    pirate,
    birthPlace,
    bounty,
    element,
    role,
    abilities
  };
}).filter(char => char !== null);

console.log(`Transformados ${newCharacters.length} personajes`);

// Generar nuevo archivo
let newContent = `// One Piece Character Database - Optimized for Games

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
`;

newCharacters.forEach((char, index) => {
  newContent += `  {\n`;
  newContent += `    id: '${char.id}',\n`;
  newContent += `    name: '${char.name}',\n`;
  if (char.nameEnglish) newContent += `    nameEnglish: '${char.nameEnglish}',\n`;
  newContent += `    anime: '${char.anime}',\n`;
  newContent += `    animeId: '${char.animeId}',\n`;
  newContent += `    crew: '${char.crew}',\n`;
  newContent += `    imageUrl: '${char.imageUrl}',\n`;
  newContent += `    description: '${char.description}',\n`;
  newContent += `    \n`;
  newContent += `    // Game properties\n`;
  newContent += `    haki: ${char.haki},\n`;
  newContent += `    hakiObservation: ${char.hakiObservation},\n`;
  newContent += `    hakiArmament: ${char.hakiArmament},\n`;
  newContent += `    hakiConqueror: ${char.hakiConqueror},\n`;
  newContent += `    devilFruit: ${char.devilFruit},\n`;
  newContent += `    marine: ${char.marine},\n`;
  newContent += `    pirate: ${char.pirate},\n`;
  newContent += `    birthPlace: '${char.birthPlace}',\n`;
  newContent += `    bounty: ${char.bounty},\n`;
  newContent += `    \n`;
  newContent += `    // Display properties\n`;
  newContent += `    element: '${char.element}',\n`;
  newContent += `    role: '${char.role}',\n`;
  newContent += `    abilities: [${char.abilities.map(a => `'${a}'`).join(', ')}]\n`;
  newContent += `  }${index < newCharacters.length - 1 ? ',' : ''}\n`;
});

newContent += `];

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
`;

// Escribir el nuevo archivo
fs.writeFileSync('src/lib/anime-data-clean.ts', newContent);

console.log('✅ Base de datos transformada exitosamente!');
console.log('\nEstadísticas:');
console.log(`- Personajes con Haki: ${newCharacters.filter(c => c.haki).length}`);
console.log(`- Personajes con Haki de Observación: ${newCharacters.filter(c => c.hakiObservation).length}`);
console.log(`- Personajes con Haki de Armamento: ${newCharacters.filter(c => c.hakiArmament).length}`);
console.log(`- Personajes con Haki del Rey: ${newCharacters.filter(c => c.hakiConqueror).length}`);
console.log(`- Personajes con Fruta del Diablo: ${newCharacters.filter(c => c.devilFruit).length}`);
console.log(`- Marines: ${newCharacters.filter(c => c.marine).length}`);
console.log(`- Piratas: ${newCharacters.filter(c => c.pirate).length}`);
console.log(`- East Blue: ${newCharacters.filter(c => c.birthPlace === 'East Blue').length}`);
console.log(`- North Blue: ${newCharacters.filter(c => c.birthPlace === 'North Blue').length}`);
console.log(`- West Blue: ${newCharacters.filter(c => c.birthPlace === 'West Blue').length}`);
console.log(`- South Blue: ${newCharacters.filter(c => c.birthPlace === 'South Blue').length}`);
console.log(`- Grand Line: ${newCharacters.filter(c => c.birthPlace === 'Grand Line').length}`);
