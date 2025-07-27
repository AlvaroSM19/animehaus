const fs = require('fs');

// Leer el archivo
const content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Eliminar todas las líneas que contienen 'power:'
const cleanedContent = content
  .split('\n')
  .filter(line => !line.trim().includes('power:'))
  .join('\n');

// Escribir el archivo limpio
fs.writeFileSync('src/lib/anime-data-clean.ts', cleanedContent);

console.log('Archivo limpiado: se eliminaron todas las líneas con power:');
