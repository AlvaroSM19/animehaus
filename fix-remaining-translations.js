const fs = require('fs');

// Read the file
const filePath = 'src/lib/anime-data-updated.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace remaining Spanish haki types
const hakiReplacements = {
  '"Armamento"': '"Armament"',
  '"Observacion"': '"Observation"',
  '"Conquistador"': '"Conqueror"',
  '"Conqueror"': '"Conqueror"' // Already correct
};

// Replace all haki types
Object.entries(hakiReplacements).forEach(([spanish, english]) => {
  content = content.replace(new RegExp(spanish, 'g'), english);
});

// Replace Spanish devil fruit names
const devilFruitReplacements = {
  'Gomu Gomu no Mi': 'Gum-Gum Fruit',
  'Hana Hana no Mi': 'Flower-Flower Fruit',
  'Hito Hito no Mi': 'Human-Human Fruit',
  'Yomi Yomi no Mi': 'Revive-Revive Fruit',
  'Mera Mera no Mi': 'Flame-Flame Fruit',
  'Yami Yami no Mi': 'Dark-Dark Fruit',
  'Suke Suke no Mi': 'Clear-Clear Fruit',
  'Magu Magu no Mi': 'Magma-Magma Fruit',
  'Doru Doru no Mi': 'Wax-Wax Fruit',
  'Bara Bara no Mi': 'Chop-Chop Fruit',
  'Shari Shari no Mi': 'Wheel-Wheel Fruit',
  'Kilo Kilo no Mi': 'Kilo-Kilo Fruit',
  'Bomu Bomu no Mi': 'Bomb-Bomb Fruit',
  'Mogu Mogu no Mi': 'Mole-Mole Fruit',
  'Ori Ori no Mi': 'Cage-Cage Fruit',
  'Sabi Sabi no Mi': 'Rust-Rust Fruit',
  'Shari Shari no Mi': 'Wheel-Wheel Fruit',
  'Yuki Yuki no Mi': 'Snow-Snow Fruit',
  'Noro Noro no Mi': 'Slow-Slow Fruit',
  'Doa Doa no Mi': 'Door-Door Fruit',
  'Awa Awa no Mi': 'Bubble-Bubble Fruit',
  'Beri Beri no Mi': 'Berry-Berry Fruit',
  'Shari Shari no Mi': 'Wheel-Wheel Fruit',
  'Pika Pika no Mi': 'Glint-Glint Fruit',
  'Hie Hie no Mi': 'Ice-Ice Fruit',
  'Gura Gura no Mi': 'Tremor-Tremor Fruit',
  'Moku Moku no Mi': 'Smoke-Smoke Fruit',
  'Suna Suna no Mi': 'Sand-Sand Fruit',
  'Mane Mane no Mi': 'Clone-Clone Fruit',
  'Ito Ito no Mi': 'String-String Fruit',
  'Buki Buki no Mi': 'Arms-Arms Fruit',
  'Hobi Hobi no Mi': 'Hobby-Hobby Fruit',
  'Sui Sui no Mi': 'Swim-Swim Fruit',
  'Ton Ton no Mi': 'Ton-Ton Fruit',
  'Beta Beta no Mi': 'Stick-Stick Fruit',
  'Bari Bari no Mi': 'Barrier-Barrier Fruit',
  'Nui Nui no Mi': 'Stitch-Stitch Fruit',
  'Giro Giro no Mi': 'Stare-Stare Fruit',
  'Ato Ato no Mi': 'Art-Art Fruit',
  'Jake Jake no Mi': 'Jacket-Jacket Fruit',
  'Pamu Pamu no Mi': 'Pop-Pop Fruit',
  'Guru Guru no Mi': 'Spin-Spin Fruit',
  'Zushi Zushi no Mi': 'Press-Press Fruit',
  'Mato Mato no Mi': 'Mark-Mark Fruit',
  'Fuku Fuku no Mi': 'Garb-Garb Fruit',
  'Bisu Bisu no Mi': 'Biscuit-Biscuit Fruit',
  'Pero Pero no Mi': 'Lick-Lick Fruit',
  'Mira Mira no Mi': 'Mirror-Mirror Fruit',
  'Memo Memo no Mi': 'Memory-Memory Fruit',
  'Mochi Mochi no Mi': 'Mochi-Mochi Fruit',
  'Horu Horu no Mi': 'Hormone-Hormone Fruit',
  'Choki Choki no Mi': 'Snip-Snip Fruit',
  'Shiro Shiro no Mi': 'Castle-Castle Fruit',
  'Kage Kage no Mi': 'Shadow-Shadow Fruit',
  'Horo Horo no Mi': 'Hollow-Hollow Fruit',
  'Nikyu Nikyu no Mi': 'Paw-Paw Fruit',
  'Ope Ope no Mi': 'Op-Op Fruit',
  'Shima Shima no Mi': 'Island-Island Fruit',
  'Gasu Gasu no Mi': 'Gas-Gas Fruit',
  'Yuki Yuki no Mi': 'Snow-Snow Fruit',
  'Sara Sara no Mi': 'Salamander-Salamander Fruit',
  'Mushi Mushi no Mi': 'Bug-Bug Fruit',
  'Zou Zou no Mi': 'Elephant-Elephant Fruit',
  'Inu Inu no Mi': 'Dog-Dog Fruit',
  'Tori Tori no Mi': 'Bird-Bird Fruit',
  'Uma Uma no Mi': 'Horse-Horse Fruit',
  'Neko Neko no Mi': 'Cat-Cat Fruit',
  'Hebi Hebi no Mi': 'Snake-Snake Fruit',
  'Ushi Ushi no Mi': 'Ox-Ox Fruit',
  'Ryu Ryu no Mi': 'Dragon-Dragon Fruit'
};

// Replace devil fruit names
Object.entries(devilFruitReplacements).forEach(([japanese, english]) => {
  content = content.replace(new RegExp(`"${japanese}"`, 'g'), `"${english}"`);
});

// Replace Spanish location names
const locationReplacements = {
  'Gran Linea': 'Grand Line',
  'East Blue': 'East Blue',
  'West Blue': 'West Blue',
  'North Blue': 'North Blue',
  'South Blue': 'South Blue',
  'Alabasta': 'Arabasta',
  'Isla del Cielo': 'Sky Island',
  'Isla Gyojin': 'Fish-Man Island',
  'Dressrosa': 'Dressrosa',
  'Zou': 'Zou',
  'Cake Island': 'Whole Cake Island',
  'Wano': 'Wano Country',
  'Reverse Mountain': 'Reverse Mountain',
  'Little Garden': 'Little Garden',
  'Drum Island': 'Drum Kingdom',
  'Enies Lobby': 'Enies Lobby',
  'Thriller Bark': 'Thriller Bark',
  'Marineford': 'Marineford',
  'Amazon Lily': 'Amazon Lily',
  'Impel Down': 'Impel Down',
  'Sabaody': 'Sabaody Archipelago',
  'Punk Hazard': 'Punk Hazard',
  'Green Bit': 'Green Bit',
  'Mary Geoise': 'Mary Geoise',
  'Raftel': 'Laugh Tale',
  'Water 7': 'Water 7',
  'Long Ring Long Land': 'Long Ring Long Land',
  'Jaya': 'Jaya',
  'Syrup Village': 'Syrup Village',
  'Orange Town': 'Orange Town',
  'Baratie': 'Baratie',
  'Arlong Park': 'Arlong Park',
  'Loguetown': 'Loguetown',
  'Whisky Peak': 'Whisky Peak',
  'Cactus Island': 'Cactus Island',
  'Drum Kingdom': 'Drum Kingdom',
  'Ohara': 'Ohara',
  'Flevance': 'Flevance',
  'Germa Kingdom': 'Germa Kingdom',
  'Baterilla': 'Baterilla',
  'Goa Kingdom': 'Goa Kingdom',
  'Fusha Village': 'Foosha Village',
  'Shimotsuki Village': 'Shimotsuki Village',
  'Cocoyasi Village': 'Cocoyasi Village',
  'Shells Town': 'Shells Town',
  'Conomi Islands': 'Conomi Islands',
  'Gecko Islands': 'Gecko Islands',
  'Organ Islands': 'Organ Islands',
  'Sixis': 'Sixis',
  'Toroa': 'Toroa',
  'Spider Miles': 'Spider Miles',
  'Karate Island': 'Karate Island',
  'Swallow Island': 'Swallow Island',
  'Lulusia Kingdom': 'Lulusia Kingdom',
  'Centurion': 'Centurion',
  'Briss Kingdom': 'Briss Kingdom',
  'Crickitt': 'Cricket',
  'Roshwan Kingdom': 'Roshwan Kingdom',
  'Las Camp': 'Las Camp',
  'Yuba': 'Yuba',
  'Nanohana': 'Nanohana',
  'Alubarna': 'Alubarna',
  'Rainbase': 'Rainbase',
  'Spiders Cafe': 'Spiders Cafe',
  'Tamarisk': 'Tamarisk',
  'Erumalu': 'Erumalu',
  'Katorea': 'Katorea',
  'Ido': 'Ido',
  'Sandora River': 'Sandora River',
  'Sandora Desert': 'Sandora Desert',
  'Saintine': 'Saintine',
  'Poneglyph': 'Poneglyph',
  'Pluton': 'Pluton',
  'Poseidon': 'Poseidon',
  'Uranus': 'Uranus',
  'One Piece': 'One Piece',
  'All Blue': 'All Blue',
  'Rio Poneglyph': 'Rio Poneglyph',
  'Ancient Kingdom': 'Ancient Kingdom',
  'Void Century': 'Void Century'
};

// Replace location names
Object.entries(locationReplacements).forEach(([spanish, english]) => {
  content = content.replace(new RegExp(`"${spanish}"`, 'g'), `"${english}"`);
});

// Write the file back
fs.writeFileSync(filePath, content);

console.log('Database content translation completed!');
console.log('- Haki types translated to English');
console.log('- Devil fruit names translated to English');
console.log('- Location names standardized');
