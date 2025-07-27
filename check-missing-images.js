const fs = require('fs');
const path = require('path');

// Leer el archivo de la base de datos
const dbContent = fs.readFileSync('./src/lib/anime-data-updated.ts', 'utf8');

// Extraer todos los personajes
const characterBlocks = dbContent.match(/{\s*id:\s*"[^"]+",[\s\S]*?}/g);

if (!characterBlocks) {
  console.log('❌ No se pudieron extraer los personajes de la base de datos');
  process.exit(1);
}

// Extraer información de cada personaje
const characters = characterBlocks.map(block => {
  const idMatch = block.match(/id:\s*"([^"]+)"/);
  const nameMatch = block.match(/name:\s*"([^"]+)"/);
  const imageUrlMatch = block.match(/imageUrl:\s*"([^"]+)"/);
  
  if (!idMatch || !nameMatch || !imageUrlMatch) {
    return null;
  }
  
  return {
    id: idMatch[1],
    name: nameMatch[1],
    imageUrl: imageUrlMatch[1]
  };
}).filter(char => char !== null);

console.log(`📊 Total de personajes en la base de datos: ${characters.length}`);

// Obtener lista de imágenes disponibles
const imagesDir = './public/images/characters';
let availableImages = [];

try {
  availableImages = fs.readdirSync(imagesDir)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp'))
    .map(file => `/images/characters/${file}`);
  
  console.log(`🖼️  Total de imágenes disponibles: ${availableImages.length}`);
} catch (error) {
  console.log('❌ Error leyendo directorio de imágenes:', error.message);
  process.exit(1);
}

// Encontrar personajes sin imagen
const missingImages = characters.filter(char => {
  return !availableImages.includes(char.imageUrl);
});

console.log(`\n❌ Personajes SIN imagen (${missingImages.length}):`);
console.log('='.repeat(50));

if (missingImages.length > 0) {
  missingImages.forEach((char, index) => {
    console.log(`${index + 1}. ${char.name} (${char.id})`);
    console.log(`   Imagen esperada: ${char.imageUrl}`);
    console.log('');
  });
} else {
  console.log('✅ ¡Todos los personajes tienen imagen!');
}

// Encontrar imágenes sin personaje asociado
const usedImages = characters.map(char => char.imageUrl);
const unusedImages = availableImages.filter(img => !usedImages.includes(img));

console.log(`\n🗑️  Imágenes NO utilizadas (${unusedImages.length}):`);
console.log('='.repeat(50));

if (unusedImages.length > 0) {
  unusedImages.forEach((img, index) => {
    console.log(`${index + 1}. ${img}`);
  });
} else {
  console.log('✅ Todas las imágenes están siendo utilizadas');
}

// Verificar duplicados
const imageUrls = characters.map(char => char.imageUrl);
const duplicateImages = imageUrls.filter((img, index) => imageUrls.indexOf(img) !== index);
const uniqueDuplicates = [...new Set(duplicateImages)];

if (uniqueDuplicates.length > 0) {
  console.log(`\n⚠️  Imágenes DUPLICADAS (${uniqueDuplicates.length}):`);
  console.log('='.repeat(50));
  uniqueDuplicates.forEach((img, index) => {
    const duplicateChars = characters.filter(char => char.imageUrl === img);
    console.log(`${index + 1}. ${img}`);
    console.log(`   Usado por: ${duplicateChars.map(c => c.name).join(', ')}`);
    console.log('');
  });
}

// Resumen final
console.log(`\n📋 RESUMEN:`);
console.log('='.repeat(50));
console.log(`• Personajes en DB: ${characters.length}`);
console.log(`• Imágenes disponibles: ${availableImages.length}`);
console.log(`• Personajes sin imagen: ${missingImages.length}`);
console.log(`• Imágenes no utilizadas: ${unusedImages.length}`);
console.log(`• Imágenes duplicadas: ${uniqueDuplicates.length}`);

if (missingImages.length > 0) {
  console.log(`\n🔧 ACCIÓN REQUERIDA:`);
  console.log(`• Agregar ${missingImages.length} imágenes faltantes`);
  console.log(`• O eliminar personajes sin imagen de la base de datos`);
}

// Generar lista de imágenes faltantes para crear
if (missingImages.length > 0) {
  const missingImagesList = missingImages.map(char => {
    const fileName = char.imageUrl.split('/').pop();
    return fileName;
  });
  
  console.log(`\n📝 LISTA DE IMÁGENES A CREAR:`);
  console.log('='.repeat(50));
  missingImagesList.forEach((img, index) => {
    console.log(`${index + 1}. ${img}`);
  });
}
