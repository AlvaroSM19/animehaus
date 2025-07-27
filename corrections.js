// Correcciones precisas basadas en One Piece canon

const corrections = {
  // STRAW HAT PIRATES
  'op-luffy': {
    haki: true,
    hakiObservation: true,    // Sí tiene, lo usa desde Dressrosa
    hakiArmament: true,       // Sí tiene, Gear 4 lo usa
    hakiConqueror: true,      // Confirmado
    birthPlace: 'East Blue',  // Goa Kingdom
    bounty: 3000000000
  },
  'op-zoro': {
    haki: true,
    hakiObservation: false,   // No confirmado claramente
    hakiArmament: true,       // Sí, post-timeskip
    hakiConqueror: true,      // Confirmado en Wano
    birthPlace: 'East Blue',  // Shimotsuki Village
    bounty: 1111000000
  },
  'op-sanji': {
    haki: true,
    hakiObservation: true,    // Especialista en observación
    hakiArmament: true,       // Sí tiene
    hakiConqueror: false,     // No confirmado
    birthPlace: 'North Blue', // Reino de Germa
    bounty: 1032000000
  },
  'op-nami': {
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    birthPlace: 'East Blue',  // Cocoyasi Village
    bounty: 366000000
  },
  'op-usopp': {
    haki: true,
    hakiObservation: true,    // Despertó en Dressrosa
    hakiArmament: false,
    hakiConqueror: false,
    birthPlace: 'East Blue',  // Syrup Village
    bounty: 500000000
  },
  'op-chopper': {
    haki: false,
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    birthPlace: 'Grand Line', // Drum Island
    bounty: 1000
  },
  'op-robin': {
    haki: true,
    hakiObservation: false,
    hakiArmament: true,       // Confirmado post-timeskip
    hakiConqueror: false,
    birthPlace: 'West Blue',  // Ohara
    bounty: 930000000
  },
  'op-franky': {
    haki: false,              // No confirmado
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    birthPlace: 'South Blue', // Aunque se crió en Water 7
    bounty: 394000000
  },
  'op-brook': {
    haki: false,              // No confirmado claramente
    hakiObservation: false,
    hakiArmament: false,
    hakiConqueror: false,
    birthPlace: 'West Blue',  // Reino de West Blue
    bounty: 383000000
  },
  'op-jinbe': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    birthPlace: 'Grand Line', // Fish-Man Island
    bounty: 1100000000
  },
  
  // EMPERORS & BIG NAMES
  'op-shanks': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'West Blue',
    bounty: 4048900000
  },
  'op-whitebeard': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'Grand Line',
    bounty: 5046000000
  },
  'op-blackbeard': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,     // No confirmado
    birthPlace: 'Grand Line',
    bounty: 3996000000
  },
  'op-kaido': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'Grand Line',
    bounty: 4611100000
  },
  'op-bigmom': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'Grand Line',
    bounty: 4388000000
  },
  
  // MARINES
  'op-akainu': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    bounty: 0,
    marine: true,
    pirate: false
  },
  'op-aokiji': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    bounty: 0,
    marine: true,
    pirate: false
  },
  'op-kizaru': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    bounty: 0,
    marine: true,
    pirate: false
  },
  'op-garp': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,      // Confirmado
    bounty: 0,
    marine: true,
    pirate: false
  },
  'op-sengoku': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,      // Confirmado
    bounty: 0,
    marine: true,
    pirate: false
  },
  
  // SUPERNOVAS
  'op-law': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: false,
    birthPlace: 'North Blue',
    bounty: 3000000000
  },
  'op-kid': {
    haki: true,
    hakiObservation: false,
    hakiArmament: true,
    hakiConqueror: true,      // Confirmado
    birthPlace: 'South Blue',
    bounty: 3000000000
  },
  
  // ROGER PIRATES
  'op-rayleigh': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'Grand Line',
    bounty: 0  // Ya retirado
  },
  'op-roger': {
    haki: true,
    hakiObservation: true,
    hakiArmament: true,
    hakiConqueror: true,
    birthPlace: 'South Blue',
    bounty: 5564800000
  }
};

module.exports = corrections;
