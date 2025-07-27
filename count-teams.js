const fs = require('fs');

// Leer el archivo
const content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Extraer todos los teams
const teamMatches = content.match(/team: '([^']+)'/g);
const teams = [...new Set(teamMatches.map(match => match.replace("team: '", "").replace("'", "")))];

console.log('Teams únicos después de simplificación:');
teams.sort().forEach((team, index) => {
  console.log(`${index + 1}. ${team}`);
});

// Contar cuántos personajes hay por team
const teamCounts = {};
teamMatches.forEach(match => {
  const team = match.replace("team: '", "").replace("'", "");
  teamCounts[team] = (teamCounts[team] || 0) + 1;
});

console.log('\nConteo de personajes por team:');
Object.entries(teamCounts).sort((a, b) => b[1] - a[1]).forEach(([team, count]) => {
  console.log(`${team}: ${count} personajes`);
});

console.log(`\nTotal de teams: ${teams.length}`);
