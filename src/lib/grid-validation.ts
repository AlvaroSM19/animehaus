import { ANIME_CHARACTERS, AnimeCharacter } from './anime-data-updated';

export interface GridCondition {
  type: 'crew' | 'origin' | 'haki' | 'fruit' | 'bounty' | 'role';
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
    // Crew conditions - Using actual crew names from database
    { type: 'crew', value: 'Piratesl Sombrero de Paja', display: 'Straw Hat', operator: 'includes' },
    { type: 'crew', value: 'Marina', display: 'Marine', operator: 'includes' },
    { type: 'crew', value: 'Pirates Kurohige', display: 'Blackbeard', operator: 'includes' },
    { type: 'crew', value: 'Pirates Big Mom', display: 'Big Mom', operator: 'includes' },
    { type: 'crew', value: 'Pirates Barbablanca', display: 'Whitebeard', operator: 'includes' },
    { type: 'crew', value: 'Piratesl Pelirrojo', display: 'Red Hair', operator: 'includes' },
    { type: 'crew', value: 'Pirates Heart', display: 'Heart Pirates', operator: 'includes' },
    { type: 'crew', value: 'Revolutionary Army', display: 'Revolutionary', operator: 'includes' },
    { type: 'crew', value: 'CP-9', display: 'CP-9', operator: 'includes' },
    { type: 'crew', value: 'Pirates Roger', display: 'Roger Pirates', operator: 'includes' },
    
    // Origin conditions
    { type: 'origin', value: 'East Blue', display: 'East Blue', operator: 'includes' },
    { type: 'origin', value: 'Grand Line', display: 'Grand Line', operator: 'includes' },
    { type: 'origin', value: 'Wano', display: 'Wano', operator: 'includes' },
    { type: 'origin', value: 'Fish-Man Island', display: 'Fish-Man Island', operator: 'includes' },
    { type: 'origin', value: 'Totto Land', display: 'Totto Land', operator: 'includes' },
    { type: 'origin', value: 'Dressrosa', display: 'Dressrosa', operator: 'includes' },
    { type: 'origin', value: 'Alabasta', display: 'Alabasta', operator: 'includes' },
    { type: 'origin', value: 'Water 7', display: 'Water 7', operator: 'includes' },
    
    // Haki conditions
    { type: 'haki', value: 'Armament', display: 'Armament Haki', operator: 'has' },
    { type: 'haki', value: 'Observation', display: 'Observation Haki', operator: 'has' },
    { type: 'haki', value: 'Conqueror', display: 'Conqueror Haki', operator: 'has' },
    
    // Devil Fruit conditions
    { type: 'fruit', value: 'null', display: 'No Devil Fruit', operator: 'eq' },
    { type: 'fruit', value: 'Logia', display: 'Logia Fruit', operator: 'includes' },
    { type: 'fruit', value: 'Paramecia', display: 'Paramecia Fruit', operator: 'includes' },
    { type: 'fruit', value: 'Zoan', display: 'Zoan Fruit', operator: 'includes' },
    
    // Bounty conditions - more conservative to avoid impossible combinations
    { type: 'bounty', value: 1000000000, display: 'Bounty +1B', operator: 'gt' },
    { type: 'bounty', value: 500000000, display: 'Bounty +500M', operator: 'gt' },
    { type: 'bounty', value: 100000000, display: 'Bounty +100M', operator: 'gt' },
    { type: 'bounty', value: 50000000, display: 'Bounty +50M', operator: 'gt' },
    
    // Role conditions
    { type: 'role', value: 'main', display: 'Main Character', operator: 'eq' },
    { type: 'role', value: 'supporting', display: 'Supporting Character', operator: 'eq' },
  ];

  // Known problematic combinations to avoid
  const problematicCombinations = [
    // No Bounty + Straw Hat (all Straw Hats have bounties)
    { row: { type: 'bounty', value: 'null' }, col: { type: 'crew', value: 'Piratesl Sombrero de Paja' } },
    { row: { type: 'crew', value: 'Piratesl Sombrero de Paja' }, col: { type: 'bounty', value: 'null' } },
    // Add more known problematic combinations here
  ];

  // Try multiple combinations until we find one that works
  let attempts = 0;
  const maxAttempts = 200;
  
  while (attempts < maxAttempts) {
    const shuffledConditions = [...allConditions].sort(() => Math.random() - 0.5);
    const rowConditions = shuffledConditions.slice(0, 3);
    const colConditions = shuffledConditions.slice(3, 6);
    
    // Check for known problematic combinations first
    const hasProblematicCombo = problematicCombinations.some(combo => {
      return (
        (rowConditions.some(r => r.type === combo.row.type && r.value === combo.row.value) &&
         colConditions.some(c => c.type === combo.col.type && c.value === combo.col.value)) ||
        (rowConditions.some(r => r.type === combo.col.type && r.value === combo.col.value) &&
         colConditions.some(c => c.type === combo.row.type && c.value === combo.row.value))
      );
    });
    
    if (hasProblematicCombo) {
      attempts++;
      continue;
    }
    
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
      
    case 'origin':
      return character.origin.toLowerCase().includes((condition.value as string).toLowerCase());
      
    case 'haki':
      return character.hakiTypes.some(haki => 
        haki.toLowerCase().includes((condition.value as string).toLowerCase())
      );
      
    case 'fruit':
      if (condition.value === 'null') {
        return character.devilFruit === null;
      }
      if (character.devilFruit === null) return false;
      return character.devilFruit.toLowerCase().includes((condition.value as string).toLowerCase());
      
    case 'bounty':
      if (condition.value === 'null') {
        return character.bounty === null;
      }
      if (character.bounty === null) return false;
      
      const bounty = character.bounty;
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
      { type: 'role', value: 'main', display: 'Main Character', operator: 'eq' },
      { type: 'bounty', value: 'null', display: 'No Bounty', operator: 'eq' },
      { type: 'fruit', value: 'null', display: 'No Devil Fruit', operator: 'eq' }
    ],
    colConditions: [
      { type: 'crew', value: 'Marina', display: 'Marine', operator: 'includes' },
      { type: 'haki', value: 'Armament', display: 'Armament Haki', operator: 'has' },
      { type: 'origin', value: 'East Blue', display: 'East Blue', operator: 'includes' }
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
