const fs = require('fs');

// Read the file content
const content = fs.readFileSync('./src/lib/anime-data-updated.ts', 'utf8');

// Extract character names using regex
const nameMatches = content.match(/name: "([^"]+)"/g);
if (!nameMatches) {
  console.log('No names found');
  process.exit(1);
}

const names = nameMatches.map(match => match.replace('name: "', '').replace('"', ''));

// Find duplicates
const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
const uniqueDuplicates = [...new Set(duplicates)];

console.log('Total characters:', names.length);
console.log('Duplicated names:', uniqueDuplicates);

// Check for duplicate IDs
const idMatches = content.match(/id: "([^"]+)"/g);
if (idMatches) {
  const ids = idMatches.map(match => match.replace('id: "', '').replace('"', ''));
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const uniqueDuplicateIds = [...new Set(duplicateIds)];
  console.log('Duplicated IDs:', uniqueDuplicateIds);
}
