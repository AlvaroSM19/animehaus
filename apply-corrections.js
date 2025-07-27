const fs = require('fs');
const corrections = require('./corrections.js');

// Leer el archivo actual
let content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Aplicar cada corrección
Object.entries(corrections).forEach(([id, fixes]) => {
  console.log(`Corrigiendo ${id}...`);
  
  // Buscar el personaje específico
  const regex = new RegExp(`(\\{[\\s\\S]*?id: '${id}'[\\s\\S]*?\\})(?=,?\\s*\\{|\\s*\\];)`, 'g');
  
  content = content.replace(regex, (match) => {
    let updated = match;
    
    // Aplicar cada corrección
    Object.entries(fixes).forEach(([property, value]) => {
      const propRegex = new RegExp(`(\\s*${property}: )([^,\\n]+)`, 'g');
      const newValue = typeof value === 'string' ? `'${value}'` : value;
      updated = updated.replace(propRegex, `$1${newValue}`);
    });
    
    return updated;
  });
});

// Escribir el archivo corregido
fs.writeFileSync('src/lib/anime-data-clean.ts', content);

console.log('✅ Correcciones aplicadas exitosamente!');

// Verificar las correcciones
const verifyContent = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Contar estadísticas corregidas
const hakiCount = (verifyContent.match(/haki: true/g) || []).length;
const hakiObsCount = (verifyContent.match(/hakiObservation: true/g) || []).length;
const hakiArmCount = (verifyContent.match(/hakiArmament: true/g) || []).length;
const hakiConCount = (verifyContent.match(/hakiConqueror: true/g) || []).length;
const eastBlueCount = (verifyContent.match(/birthPlace: 'East Blue'/g) || []).length;
const northBlueCount = (verifyContent.match(/birthPlace: 'North Blue'/g) || []).length;
const westBlueCount = (verifyContent.match(/birthPlace: 'West Blue'/g) || []).length;
const southBlueCount = (verifyContent.match(/birthPlace: 'South Blue'/g) || []).length;

console.log('\n📊 Estadísticas corregidas:');
console.log(`- Personajes con Haki: ${hakiCount}`);
console.log(`- Personajes con Haki de Observación: ${hakiObsCount}`);
console.log(`- Personajes con Haki de Armamento: ${hakiArmCount}`);
console.log(`- Personajes con Haki del Rey: ${hakiConCount}`);
console.log(`- East Blue: ${eastBlueCount}`);
console.log(`- North Blue: ${northBlueCount}`);
console.log(`- West Blue: ${westBlueCount}`);
console.log(`- South Blue: ${southBlueCount}`);
