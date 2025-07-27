const { ANIME_CHARACTERS } = require('./src/lib/anime-data-clean.ts');

// Condiciones de la cuadrícula (copiadas del juego)
const GRID_CONDITIONS = [
  // Team conditions - main teams with good representation
  { type: 'team', value: 'Straw Hat Pirates', display: 'Straw Hat Pirates' },
  { type: 'team', value: 'Marines', display: 'Marines' },
  { type: 'team', value: 'Other Pirates', display: 'Other Pirates' },
  { type: 'team', value: 'World Government', display: 'World Government' },
  { type: 'team', value: 'Wano', display: 'Wano Characters' },
  { type: 'team', value: 'Big Mom Pirates', display: 'Big Mom Pirates' },
  { type: 'team', value: 'Beast Pirates', display: 'Beast Pirates' },
  { type: 'team', value: 'Blackbeard Pirates', display: 'Blackbeard Pirates' },
  { type: 'team', value: 'Red Hair Pirates', display: 'Red Hair Pirates' },
  { type: 'team', value: 'Whitebeard Pirates', display: 'Whitebeard Pirates' },
  
  // Role conditions
  { type: 'role', value: 'main', display: 'Main Characters' },
  { type: 'role', value: 'supporting', display: 'Supporting Characters' },
  
  // Element conditions - common elements with many characters
  { type: 'element', value: 'Fire', display: 'Fire Users' },
  { type: 'element', value: 'Sword', display: 'Sword Users' },
  { type: 'element', value: 'Haki', display: 'Haki Users' },
  { type: 'element', value: 'Fruit', display: 'Devil Fruit Users' },
];

// Función para verificar condiciones (copiada del juego)
const checkCondition = (character, condition) => {
  switch (condition.type) {
    case 'team':
      return character.team.toLowerCase().includes(condition.value.toLowerCase());
    case 'role':
      return character.role === condition.value;
    case 'element':
      const element = character.element.toLowerCase();
      const abilities = character.abilities.join(' ').toLowerCase();
      const description = character.description.toLowerCase();
      
      switch (condition.value) {
        case 'Fire':
          return element.includes('fire') || abilities.includes('fire') || description.includes('fire');
        case 'Sword':
          return element.includes('sword') || abilities.includes('sword') || description.includes('sword');
        case 'Haki':
          return abilities.includes('haki') || description.includes('haki');
        case 'Fruit':
          return abilities.includes('fruit') || description.includes('fruit') || description.includes('devil fruit');
        default:
          return element.includes(condition.value.toLowerCase());
      }
    default:
      return false;
  }
};

// Crear una cuadrícula 3x3 de condiciones
const createGrid = () => {
  const shuffled = [...GRID_CONDITIONS].sort(() => Math.random() - 0.5);
  return {
    rows: shuffled.slice(0, 3),
    cols: shuffled.slice(3, 6)
  };
};

// Verificar si una combinación de fila y columna tiene solución
const hasValidCharacter = (rowCondition, colCondition) => {
  return ANIME_CHARACTERS.some(character => 
    checkCondition(character, rowCondition) && checkCondition(character, colCondition)
  );
};

// Verificar múltiples cuadrículas
const testGrids = (numTests = 100) => {
  let problemGrids = 0;
  let totalProblems = 0;
  
  for (let test = 0; test < numTests; test++) {
    const grid = createGrid();
    let hasProblems = false;
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const rowCondition = grid.rows[row];
        const colCondition = grid.cols[col];
        
        if (!hasValidCharacter(rowCondition, colCondition)) {
          console.log(`❌ Sin solución: ${rowCondition.display} + ${colCondition.display}`);
          hasProblems = true;
          totalProblems++;
        }
      }
    }
    
    if (hasProblems) {
      problemGrids++;
    }
  }
  
  console.log(`\n📊 Resultados de ${numTests} pruebas:`);
  console.log(`Cuadrículas con problemas: ${problemGrids}/${numTests} (${(problemGrids/numTests*100).toFixed(1)}%)`);
  console.log(`Total de combinaciones problemáticas: ${totalProblems}`);
  
  if (problemGrids === 0) {
    console.log('✅ ¡Todas las cuadrículas generadas tienen soluciones válidas!');
  }
};

// Ejecutar pruebas
console.log('🔍 Verificando compatibilidad de condiciones...\n');
testGrids(100);
