const fs = require('fs');
const path = require('path');

// Import the anime data
const animeDataPath = path.join(__dirname, 'src', 'lib', 'anime-data-updated.ts');
const imageDir = path.join(__dirname, 'public', 'images', 'characters');

// Function to extract image URLs from the TypeScript file
function extractImageUrls() {
  const content = fs.readFileSync(animeDataPath, 'utf8');
  const matches = content.match(/imageUrl: "\/images\/characters\/[^"]+"/g);
  
  if (!matches) return [];
  
  return matches.map(match => {
    const url = match.match(/"([^"]+)"/)[1];
    return url.replace('/images/characters/', '');
  });
}

// Check which WebP images exist and which are missing
function checkWebPImages() {
  console.log('🔍 Checking WebP image availability...\n');
  
  const expectedImages = extractImageUrls();
  const existingFiles = fs.readdirSync(imageDir).filter(file => file.endsWith('.webp'));
  
  console.log(`📊 Statistics:`);
  console.log(`   Expected WebP images: ${expectedImages.length}`);
  console.log(`   Existing WebP files: ${existingFiles.length}`);
  
  const missingImages = expectedImages.filter(img => !existingFiles.includes(img));
  const unusedImages = existingFiles.filter(img => !expectedImages.includes(img));
  
  if (missingImages.length > 0) {
    console.log(`\n❌ Missing WebP images (${missingImages.length}):`);
    missingImages.forEach(img => console.log(`   - ${img}`));
  } else {
    console.log(`\n✅ All expected WebP images are present!`);
  }
  
  if (unusedImages.length > 0) {
    console.log(`\n📝 Unused WebP images (${unusedImages.length}):`);
    unusedImages.forEach(img => console.log(`   - ${img}`));
  }
  
  console.log(`\n📈 Conversion Progress:`);
  console.log(`   ✅ Database updated: ${expectedImages.length} references point to .webp`);
  console.log(`   🔄 Images to convert: ${missingImages.length} JPG files need conversion`);
  console.log(`   🎯 Completion: ${((existingFiles.length / expectedImages.length) * 100).toFixed(1)}%`);
}

try {
  checkWebPImages();
} catch (error) {
  console.error('❌ Error checking WebP images:', error.message);
}
