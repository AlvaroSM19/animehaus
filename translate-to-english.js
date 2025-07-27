const fs = require('fs');
const path = require('path');

// Path to the anime data file
const filePath = path.join(__dirname, 'src', 'lib', 'anime-data-updated.ts');

// Translation mappings
const translations = {
  // Property names (already updated in interface)
  'recompensa:': 'bounty:',
  'origen:': 'origin:',
  'tipo_haki:': 'hakiTypes:',
  'fruta_diablo:': 'devilFruit:',
  
  // Haki types
  '"Conquistador"': '"Conqueror"',
  '"Armadura"': '"Armament"',
  '"Observación"': '"Observation"',
  
  // Locations/Origins
  '"Isla Gyojin"': '"Fish-Man Island"',
  '"East Blue"': '"East Blue"', // already correct
  '"Grand Line"': '"Grand Line"', // already correct
  '"Wano"': '"Wano Country"',
  '"Isla del Cielo"': '"Sky Island"',
  '"Impel Down"': '"Impel Down"', // already correct
  '"Marineford"': '"Marineford"', // already correct
  '"Thriller Bark"': '"Thriller Bark"', // already correct
  '"Alabasta"': '"Alabasta Kingdom"',
  '"Drum"': '"Drum Island"',
  '"Syrup"': '"Syrup Village"',
  '"Loguetown"': '"Loguetown"',
  '"Shells Town"': '"Shells Town"',
  '"Orange Town"': '"Orange Town"',
  '"Baratie"': '"Baratie"',
  '"Cocoyasi"': '"Cocoyasi Village"',
  '"Little Garden"': '"Little Garden"',
  '"Whiskey Peak"': '"Whiskey Peak"',
  '"Water 7"': '"Water 7"',
  '"Enies Lobby"': '"Enies Lobby"',
  '"Florian Triangle"': '"Florian Triangle"',
  '"Sabaody"': '"Sabaody Archipelago"',
  '"Amazon Lily"': '"Amazon Lily"',
  '"Rusukaina"': '"Rusukaina"',
  '"Punk Hazard"': '"Punk Hazard"',
  '"Dressrosa"': '"Dressrosa"',
  '"Zou"': '"Zou"',
  '"Whole Cake Island"': '"Whole Cake Island"',
  '"Reverie"': '"Reverie"',
  '"Laugh Tale"': '"Laugh Tale"',
  '"Foosha"': '"Foosha Village"',
  '"Goa"': '"Goa Kingdom"',
  '"Dawn Island"': '"Dawn Island"',
  '"Shimotsuki"': '"Shimotsuki Village"',
  '"Cocoyashi"': '"Cocoyashi Village"',
  
  // Abilities (in arrays)
  '"Invisibilidad"': '"Invisibility"',
  '"Fuerza aumentada"': '"Enhanced strength"',
  '"Liderazgo de zombis"': '"Zombie leadership"',
  '"Fuego"': '"Fire"',
  '"Combate cuerpo a cuerpo"': '"Hand-to-hand combat"',
  '"Liderazgo"': '"Leadership"',
  '"Magma"': '"Magma"',
  '"Destrucción masiva"': '"Mass destruction"',
  '"Autoridad marina"': '"Marine authority"',
  '"Seducción"': '"Seduction"',
  '"Combate con maza"': '"Mace combat"',
  '"Transformación"': '"Transformation"',
  '"Hielo"': '"Ice"',
  '"Combate de largo alcance"': '"Long-range combat"',
  '"Estrategia"': '"Strategy"',
  '"Música"': '"Music"',
  '"Ondas sonoras"': '"Sound waves"',
  '"Navegación"': '"Navigation"',
  '"Combate con sierra"': '"Saw combat"',
  '"Resistencia"': '"Endurance"',
  '"Tiro de precisión"': '"Precision shooting"',
  '"Medicina"': '"Medicine"',
  '"Rumble Ball"': '"Rumble Ball"',
  '"Formas múltiples"': '"Multiple forms"',
  '"Arqueología"': '"Archaeology"',
  '"Manos múltiples"': '"Multiple hands"',
  '"Lectura de poneglyphs"': '"Poneglyph reading"',
  '"Ingeniería"': '"Engineering"',
  '"Construcción de barcos"': '"Shipbuilding"',
  '"Armas incorporadas"': '"Built-in weapons"',
  '"Espada"': '"Swordsmanship"',
  '"Tres espadas"': '"Three-sword style"',
  '"Fuerza sobrehumana"': '"Superhuman strength"',
  '"Cocina"': '"Cooking"',
  '"Patadas"': '"Kicks"',
  '"Combate aéreo"': '"Aerial combat"',
  '"Navegación submarina"': '"Underwater navigation"',
  '"Karate Gyojin"': '"Fish-Man Karate"',
  '"Control del agua"': '"Water control"',
  '"Esqueleto viviente"': '"Living skeleton"',
  '"Inmortalidad"': '"Immortality"',
  '"Velocidad"': '"Speed"',
  '"Meteorología"': '"Weather control"',
  '"Clima Tact"': '"Clima-Tact"',
  '"Francotirador"': '"Sniper"',
  '"Honda"': '"Slingshot"',
  '"Mentiras creativas"': '"Creative lies"',
  
  // Common Spanish descriptions that need translation
  'con la fruta de la invisibilidad': 'with the invisibility devil fruit',
  'con la fruta del fuego': 'with the fire devil fruit',
  'Almirante de la Marina': 'Marine Admiral',
  'Capitán de los': 'Captain of the',
  'Miembro de los': 'Member of the',
  'Piratas de': 'Pirates',
  'Rey de los Piratas': 'Pirate King',
  'Shichibukai': 'Warlord',
  'Yonko': 'Emperor',
  'Supernova': 'Supernova',
  'Marine': 'Marine',
  'Revolucionario': 'Revolutionary',
  'Celestial': 'Celestial Dragon',
};

try {
  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  console.log('🔄 Starting English translation of anime database...');
  
  let changeCount = 0;
  
  // Apply all translations
  for (const [spanish, english] of Object.entries(translations)) {
    const regex = new RegExp(spanish.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, english);
      changeCount += matches.length;
      console.log(`   ✓ Replaced "${spanish}" with "${english}" (${matches.length} times)`);
    }
  }
  
  // Additional specific replacements for function names
  content = content.replace(/getCharactersByRecompensa/g, 'getCharactersByBounty');
  content = content.replace(/getCharactersByOrigen/g, 'getCharactersByOrigin');
  content = content.replace(/getCharactersByTipoHaki/g, 'getCharactersByHakiType');
  content = content.replace(/getCharactersByFrutaDiablo/g, 'getCharactersByDevilFruit');
  content = content.replace(/getCharactersWithoutFrutaDiablo/g, 'getCharactersWithoutDevilFruit');
  
  // Update function implementations
  content = content.replace(
    /export function getCharactersByBounty\(minBounty: number\): AnimeCharacter\[\] \{[^}]+\}/,
    `export function getCharactersByBounty(minBounty: number): AnimeCharacter[] {
  return ANIME_CHARACTERS.filter(char => char.bounty && char.bounty >= minBounty);
}`
  );
  
  content = content.replace(
    /export function getCharactersByOrigin\(origin: string\): AnimeCharacter\[\] \{[^}]+\}/,
    `export function getCharactersByOrigin(origin: string): AnimeCharacter[] {
  return ANIME_CHARACTERS.filter(char => char.origin === origin);
}`
  );
  
  content = content.replace(
    /export function getCharactersByHakiType\(hakiType: string\): AnimeCharacter\[\] \{[^}]+\}/,
    `export function getCharactersByHakiType(hakiType: string): AnimeCharacter[] {
  return ANIME_CHARACTERS.filter(char => char.hakiTypes.includes(hakiType));
}`
  );
  
  content = content.replace(
    /export function getCharactersByDevilFruit\(\): AnimeCharacter\[\] \{[^}]+\}/,
    `export function getCharactersByDevilFruit(): AnimeCharacter[] {
  return ANIME_CHARACTERS.filter(char => char.devilFruit !== null);
}`
  );
  
  content = content.replace(
    /export function getCharactersWithoutDevilFruit\(\): AnimeCharacter\[\] \{[^}]+\}/,
    `export function getCharactersWithoutDevilFruit(): AnimeCharacter[] {
  return ANIME_CHARACTERS.filter(char => char.devilFruit === null);
}`
  );
  
  // Update stats function
  content = content.replace(
    /withRecompensa: ANIME_CHARACTERS\.filter\(char => char\.recompensa\)\.length/,
    'withBounty: ANIME_CHARACTERS.filter(char => char.bounty).length'
  );
  
  content = content.replace(
    /withFrutaDiablo: ANIME_CHARACTERS\.filter\(char => char\.fruta_diablo\)\.length/,
    'withDevilFruit: ANIME_CHARACTERS.filter(char => char.devilFruit).length'
  );
  
  // Write the file back
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`\\n✅ Translation completed!`);
  console.log(`📊 Total changes made: ${changeCount}`);
  console.log(`🔤 Database is now fully in English`);
  
} catch (error) {
  console.error('❌ Error translating database:', error.message);
  process.exit(1);
}
