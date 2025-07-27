const fs = require('fs');
const path = require('path');

// Path to the anime data file
const filePath = path.join(__dirname, 'src', 'lib', 'anime-data-updated.ts');

try {
  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Count original .jpg references
  const originalCount = (content.match(/\.jpg"/g) || []).length;
  
  // Replace all .jpg with .webp
  content = content.replace(/\.jpg"/g, '.webp"');
  
  // Count new .webp references
  const newCount = (content.match(/\.webp"/g) || []).length;
  
  // Write the file back
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ Successfully converted ${originalCount} image references from .jpg to .webp`);
  console.log(`📊 Total .webp references now: ${newCount}`);
  
} catch (error) {
  console.error('❌ Error converting image extensions:', error.message);
  process.exit(1);
}
