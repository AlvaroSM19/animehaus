const fs = require('fs');

// Leer y parsear el archivo de datos
const content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Extraer todos los personajes usando regex
const characterBlocks = content.match(/{\s*id: '[^']+',[\s\S]*?}/g);

if (!characterBlocks) {
  console.log('No se pudieron extraer los personajes');
  process.exit(1);
}

const characters = characterBlocks.map(block => {
  const teamMatch = block.match(/team: '([^']+)'/);
  const roleMatch = block.match(/role: '([^']+)'/);
  const elementMatch = block.match(/element: '([^']+)'/);
  const abilitiesMatch = block.match(/abilities: \[(.*?)\]/);
  const descriptionMatch = block.match(/description: '([^']+)'/);
  
  return {
    team: teamMatch ? teamMatch[1] : '',
    role: roleMatch ? roleMatch[1] : '',
    element: elementMatch ? elementMatch[1] : '',
    abilities: abilitiesMatch ? abilitiesMatch[1].split(',').map(a => a.trim().replace(/'/g, '')) : [],
    description: descriptionMatch ? descriptionMatch[1] : ''
  };
});

console.log(`📊 Extraídos ${characters.length} personajes`);

// Condiciones de la cuadrícula - nuevas condiciones más amplias
const GRID_CONDITIONS = [
  { type: 'team', value: 'Pirates', display: 'Piratas' },
  { type: 'team', value: 'Government', display: 'Gobierno' },
  { type: 'team', value: 'Straw Hat Pirates', display: 'Piratas del Sombrero de Paja' },
  { type: 'team', value: 'Wano', display: 'Personajes de Wano' },
  { type: 'team', value: 'Marines', display: 'Marines' },
  { type: 'role', value: 'main', display: 'Personajes Principales' },
  { type: 'role', value: 'supporting', display: 'Personajes Secundarios' },
  { type: 'element', value: 'Fruit', display: 'Usuarios de Fruta del Diablo' },
  { type: 'element', value: 'Haki', display: 'Usuarios de Haki' },
  { type: 'element', value: 'Sword', display: 'Espadachines' },
  { type: 'element', value: 'Fire', display: 'Usuarios de Fuego' },
  { type: 'element', value: 'Strong', display: 'Luchadores Fuertes' },
];

// Función para verificar condiciones - actualizada
const checkCondition = (character, condition) => {
  switch (condition.type) {
    case 'team':
      const team = character.team.toLowerCase();
      switch (condition.value) {
        case 'Pirates':
          return team.includes('pirates');
        case 'Government':
          return team.includes('marines') || team.includes('world government') || team.includes('cp');
        default:
          return team.includes(condition.value.toLowerCase());
      }
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
        case 'Strong':
          return abilities.includes('strength') || abilities.includes('strong') || description.includes('strong') || 
                 abilities.includes('martial') || abilities.includes('combat') || description.includes('fighter');
        default:
          return element.includes(condition.value.toLowerCase());
      }
    default:
      return false;
  }
};

// Contar personajes que cumplen cada condición
console.log('\n📋 Personajes por condición:');
GRID_CONDITIONS.forEach(condition => {
  const count = characters.filter(char => checkCondition(char, condition)).length;
  console.log(`${condition.display}: ${count} personajes`);
});

// Probar todas las combinaciones posibles
console.log('\n🔍 Verificando combinaciones problemáticas...\n');

let problemCount = 0;
const problems = [];

for (let i = 0; i < GRID_CONDITIONS.length; i++) {
  for (let j = 0; j < GRID_CONDITIONS.length; j++) {
    if (i !== j) { // No combinar una condición consigo misma
      const rowCondition = GRID_CONDITIONS[i];
      const colCondition = GRID_CONDITIONS[j];
      
      const validCharacters = characters.filter(char => 
        checkCondition(char, rowCondition) && checkCondition(char, colCondition)
      );
      
      if (validCharacters.length === 0) {
        console.log(`❌ Sin solución: ${rowCondition.display} + ${colCondition.display}`);
        problems.push({ row: rowCondition, col: colCondition });
        problemCount++;
      }
    }
  }
}

console.log(`\n📊 Resultados:`);
console.log(`Combinaciones problemáticas: ${problemCount}`);
console.log(`Total de combinaciones posibles: ${GRID_CONDITIONS.length * (GRID_CONDITIONS.length - 1)}`);

if (problemCount === 0) {
  console.log('✅ ¡Todas las combinaciones tienen al menos una solución válida!');
} else {
  console.log('⚠️  Hay combinaciones sin solución. Necesitamos ajustar las condiciones.');
}
