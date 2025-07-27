import { ANIME_CHARACTERS, AnimeCharacter } from './anime-data-updated';

export interface GridCondition {
  type: 'crew' | 'origen' | 'haki' | 'fruta' | 'recompensa' | 'role';
  value: string | number;
  display: string;
  operator?: 'gt' | 'lt' | 'eq' | 'includes' | 'has';
}

// Generate conditions that ensure all combinations have at least one character
export const generateValidGridConditions = (): { 
  rowConditions: GridCondition[], 
  colConditions: GridCondition[] 
} => {
  const allConditions: GridCondition[] = [
    // Crew conditions
    { type: 'crew', value: 'Piratas del Sombrero de Paja', display: 'Sombrero de Paja', operator: 'includes' },
    { type: 'crew', value: 'Marina', display: 'Marina', operator: 'includes' },
    { type: 'crew', value: 'Piratas de Kurohige', display: 'Kurohige', operator: 'includes' },
    { type: 'crew', value: 'Piratas de Big Mom', display: 'Big Mom', operator: 'includes' },
    { type: 'crew', value: 'Piratas de Kaido', display: 'Kaido', operator: 'includes' },
    { type: 'crew', value: 'Piratas del Pelirrojo', display: 'Pelirrojo', operator: 'includes' },
    
    // Origin conditions
    { type: 'origen', value: 'East Blue', display: 'East Blue', operator: 'includes' },
    { type: 'origen', value: 'Grand Line', display: 'Grand Line', operator: 'includes' },
    { type: 'origen', value: 'Wano', display: 'Wano', operator: 'includes' },
    { type: 'origen', value: 'Isla Gyojin', display: 'Isla Gyojin', operator: 'includes' },
    { type: 'origen', value: 'Totto Land', display: 'Totto Land', operator: 'includes' },
    
    // Haki conditions
    { type: 'haki', value: 'Armamento', display: 'Haki Armamento', operator: 'has' },
    { type: 'haki', value: 'Observacion', display: 'Haki Observación', operator: 'has' },
    { type: 'haki', value: 'Conquistador', display: 'Haki Conquistador', operator: 'has' },
    
    // Devil Fruit conditions
    { type: 'fruta', value: 'null', display: 'Sin Fruta del Diablo', operator: 'eq' },
    { type: 'fruta', value: 'Logia', display: 'Fruta Logia', operator: 'includes' },
    { type: 'fruta', value: 'Paramecia', display: 'Fruta Paramecia', operator: 'includes' },
    { type: 'fruta', value: 'Zoan', display: 'Fruta Zoan', operator: 'includes' },
    
    // Bounty conditions
    { type: 'recompensa', value: 1000000000, display: 'Recompensa +1B', operator: 'gt' },
    { type: 'recompensa', value: 500000000, display: 'Recompensa +500M', operator: 'gt' },
    { type: 'recompensa', value: 100000000, display: 'Recompensa +100M', operator: 'gt' },
    { type: 'recompensa', value: 'null', display: 'Sin Recompensa', operator: 'eq' },
    
    // Role conditions
    { type: 'role', value: 'main', display: 'Personaje Principal', operator: 'eq' },
    { type: 'role', value: 'supporting', display: 'Personaje Secundario', operator: 'eq' },
  ];

  // Try multiple combinations until we find one that works
  let attempts = 0;
  const maxAttempts = 100;
  
  while (attempts < maxAttempts) {
    const shuffledConditions = [...allConditions].sort(() => Math.random() - 0.5);
    const rowConditions = shuffledConditions.slice(0, 3);
    const colConditions = shuffledConditions.slice(3, 6);
    
    // Validate that all 9 combinations have at least one character
    const isValid = validateGridCombinations(rowConditions, colConditions);
    
    if (isValid) {
      return { rowConditions, colConditions };
    }
    
    attempts++;
  }
  
  // Fallback to guaranteed working conditions
  return getFallbackConditions();
};

export const validateGridCombinations = (
  rowConditions: GridCondition[], 
  colConditions: GridCondition[]
): boolean => {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const rowCondition = rowConditions[row];
      const colCondition = colConditions[col];
      
      const matchingCharacters = ANIME_CHARACTERS.filter((char: AnimeCharacter) => 
        checkCondition(char, rowCondition) && checkCondition(char, colCondition)
      );
      
      if (matchingCharacters.length === 0) {
        return false; // This combination has no valid characters
      }
    }
  }
  return true; // All combinations have at least one character
};

export const checkCondition = (character: AnimeCharacter, condition: GridCondition): boolean => {
  switch (condition.type) {
    case 'crew':
      return character.crew.toLowerCase().includes((condition.value as string).toLowerCase());
      
    case 'origen':
      return character.origen.toLowerCase().includes((condition.value as string).toLowerCase());
      
    case 'haki':
      return character.tipo_haki.some(haki => 
        haki.toLowerCase().includes((condition.value as string).toLowerCase())
      );
      
    case 'fruta':
      if (condition.value === 'null') {
        return character.fruta_diablo === null;
      }
      if (character.fruta_diablo === null) return false;
      return character.fruta_diablo.toLowerCase().includes((condition.value as string).toLowerCase());
      
    case 'recompensa':
      if (condition.value === 'null') {
        return character.recompensa === null;
      }
      if (character.recompensa === null) return false;
      
      const bounty = character.recompensa;
      const targetValue = condition.value as number;
      
      switch (condition.operator) {
        case 'gt': return bounty > targetValue;
        case 'lt': return bounty < targetValue;
        case 'eq': return bounty === targetValue;
        default: return false;
      }
      
    case 'role':
      return character.role === condition.value;
      
    default:
      return false;
  }
};

// Fallback conditions that are guaranteed to work
const getFallbackConditions = (): { rowConditions: GridCondition[], colConditions: GridCondition[] } => {
  return {
    rowConditions: [
      { type: 'role', value: 'main', display: 'Personaje Principal', operator: 'eq' },
      { type: 'recompensa', value: 'null', display: 'Sin Recompensa', operator: 'eq' },
      { type: 'fruta', value: 'null', display: 'Sin Fruta del Diablo', operator: 'eq' }
    ],
    colConditions: [
      { type: 'crew', value: 'Piratas', display: 'Piratas', operator: 'includes' },
      { type: 'haki', value: 'Armamento', display: 'Haki Armamento', operator: 'has' },
      { type: 'origen', value: 'East Blue', display: 'East Blue', operator: 'includes' }
    ]
  };
};

export const getCharactersForCell = (
  rowCondition: GridCondition, 
  colCondition: GridCondition
): AnimeCharacter[] => {
  return ANIME_CHARACTERS.filter((char: AnimeCharacter) => 
    checkCondition(char, rowCondition) && checkCondition(char, colCondition)
  );
};

export const getCellStats = (
  rowCondition: GridCondition, 
  colCondition: GridCondition
): { count: number, examples: string[] } => {
  const characters = getCharactersForCell(rowCondition, colCondition);
  return {
    count: characters.length,
    examples: characters.slice(0, 3).map(char => char.name)
  };
};
