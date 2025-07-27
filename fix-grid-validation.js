const fs = require('fs');

// Read the file
const filePath = 'src/lib/grid-validation.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace property types
content = content.replace(/type: 'origen'/g, "type: 'origin'");
content = content.replace(/type: 'fruta'/g, "type: 'fruit'");
content = content.replace(/type: 'recompensa'/g, "type: 'bounty'");

// Replace haki types
content = content.replace(/'Armamento'/g, "'Armament'");
content = content.replace(/'Observacion'/g, "'Observation'");
content = content.replace(/'Conquistador'/g, "'Conqueror'");

// Replace display texts
content = content.replace(/display: 'Haki Armamento'/g, "display: 'Armament Haki'");
content = content.replace(/display: 'Haki Observación'/g, "display: 'Observation Haki'");
content = content.replace(/display: 'Haki Conquistador'/g, "display: 'Conqueror Haki'");

content = content.replace(/display: 'Sin Fruta del Diablo'/g, "display: 'No Devil Fruit'");
content = content.replace(/display: 'Fruta Logia'/g, "display: 'Logia Fruit'");
content = content.replace(/display: 'Fruta Paramecia'/g, "display: 'Paramecia Fruit'");
content = content.replace(/display: 'Fruta Zoan'/g, "display: 'Zoan Fruit'");

content = content.replace(/display: 'Recompensa \+1B'/g, "display: 'Bounty +1B'");
content = content.replace(/display: 'Recompensa \+500M'/g, "display: 'Bounty +500M'");
content = content.replace(/display: 'Recompensa \+100M'/g, "display: 'Bounty +100M'");
content = content.replace(/display: 'Sin Recompensa'/g, "display: 'No Bounty'");

content = content.replace(/display: 'Personaje Principal'/g, "display: 'Main Character'");
content = content.replace(/display: 'Personaje Secundario'/g, "display: 'Supporting Character'");

// Replace location names that need translation
content = content.replace(/value: 'Isla Gyojin'/g, "value: 'Fish-Man Island'");
content = content.replace(/display: 'Isla Gyojin'/g, "display: 'Fish-Man Island'");

// Replace property access in validation logic
content = content.replace(/character\.origen/g, 'character.origin');
content = content.replace(/character\.tipo_haki/g, 'character.hakiTypes');
content = content.replace(/character\.fruta_diablo/g, 'character.devilFruit');
content = content.replace(/character\.recompensa/g, 'character.bounty');

// Write the file back
fs.writeFileSync(filePath, content);

console.log('Grid validation file translation completed!');
console.log('- Property types translated');
console.log('- Haki types translated');
console.log('- Display texts translated');
console.log('- Property access updated');
