const fs = require('fs');

// Leer el archivo
const content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Extraer todos los teams
const teamMatches = content.match(/team: '([^']+)'/g);
const teams = [...new Set(teamMatches.map(match => match.replace("team: '", "").replace("'", "")))];

console.log('Teams únicos encontrados:');
teams.sort().forEach((team, index) => {
  console.log(`${index + 1}. ${team}`);
});

console.log(`\nTotal de teams: ${teams.length}`);
