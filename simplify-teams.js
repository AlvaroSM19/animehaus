const fs = require('fs');

// Mapa de simplificación de teams
const teamMap = {
  // Piratas principales
  'Straw Hat Pirates': 'Straw Hat Pirates',
  'Red Hair Pirates': 'Red Hair Pirates', 
  'Whitebeard Pirates': 'Whitebeard Pirates',
  'Blackbeard Pirates': 'Blackbeard Pirates',
  'Beast Pirates': 'Beast Pirates',
  'Big Mom Pirates': 'Big Mom Pirates',
  'Heart Pirates': 'Heart Pirates',
  'Kid Pirates': 'Kid Pirates',
  'Bonney Pirates': 'Other Pirates',
  'Hawkins Pirates': 'Other Pirates',
  'Alvida Pirates': 'Other Pirates',
  'Arlong Pirates': 'Other Pirates',
  'Black Cat Pirates': 'Other Pirates',
  'Bellamy Pirates': 'Other Pirates',
  'Beautiful Pirates': 'Other Pirates',
  'Caribou Pirates': 'Other Pirates',
  'Donquixote Pirates': 'Other Pirates',
  'Fallen Monk Pirates': 'Other Pirates',
  'Fire Tank Pirates': 'Other Pirates',
  'Giant Warrior Pirates': 'Other Pirates',
  'New Fish-Man Pirates': 'Other Pirates',
  'On Air Pirates': 'Other Pirates',
  'Rolling Pirates': 'Other Pirates',
  'Sun Pirates': 'Other Pirates',
  'Thriller Bark Pirates': 'Other Pirates',
  'Roger Pirates': 'Roger Pirates',
  'Former Roger Pirates': 'Roger Pirates',
  
  // Gobierno y Marines
  'Marines': 'Marines',
  'Former Marines': 'Marines',
  'NEO Marines': 'Marines',
  'SWORD': 'Marines',
  'CP0': 'World Government',
  'CP9': 'World Government',
  'World Government': 'World Government',
  'Five Elders': 'World Government',
  'Holy Knights': 'World Government',
  'Celestial Dragons': 'World Government',
  'Impel Down': 'World Government',
  
  // Revolucionarios
  'Revolutionary Army': 'Revolutionary Army',
  
  // Lugares y grupos civiles
  'Wano': 'Wano',
  'Nine Red Scabbards': 'Wano',
  'Kurozumi Family': 'Wano',
  'Shimotsuki Village': 'Wano',
  
  'Dressrosa': 'Dressrosa',
  'Tontatta Tribe': 'Dressrosa',
  
  'Alabasta Kingdom': 'Alabasta',
  'Alabasta Rebels': 'Alabasta',
  
  'Drum Kingdom': 'Drum Kingdom',
  'Former Drum Kingdom': 'Drum Kingdom',
  
  'Skypiea': 'Skypiea',
  'Shandian Warriors': 'Skypiea',
  
  'Ryugu Kingdom': 'Fish-Man Island',
  
  'Zou': 'Zou',
  'Zou Island': 'Zou',
  
  // Otros grupos
  'Cross Guild': 'Other Pirates',
  'Former Baroque Works': 'Other Pirates',
  'Former MADS': 'Scientists',
  'Galley-La Company': 'Civilians',
  'Happo Navy': 'Other Pirates',
  'Baratie': 'Civilians',
  'Cocoyasi Village': 'Civilians',
  'Dadan Family': 'Civilians',
  'Fushia Village': 'Civilians',
  'Island of Rare Animals': 'Civilians',
  'Orange Town': 'Civilians',
  'Syrup Village': 'Civilians',
  'Twin Cape': 'Civilians',
  'World Economy News': 'Civilians',
  'Former Arlong Pirates': 'Other Pirates'
};

// Leer el archivo
let content = fs.readFileSync('src/lib/anime-data-clean.ts', 'utf8');

// Reemplazar cada team con su versión simplificada
for (const [oldTeam, newTeam] of Object.entries(teamMap)) {
  const regex = new RegExp(`team: '${oldTeam.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g');
  content = content.replace(regex, `team: '${newTeam}'`);
}

// Escribir el archivo actualizado
fs.writeFileSync('src/lib/anime-data-clean.ts', content);

console.log('Teams simplificados exitosamente!');
