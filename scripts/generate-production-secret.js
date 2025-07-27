#!/usr/bin/env node

// Script para generar NEXTAUTH_SECRET para producción
const crypto = require('crypto');

console.log('🔑 Generando NEXTAUTH_SECRET para producción...\n');

const secret = crypto.randomBytes(32).toString('base64');

console.log('✅ NEXTAUTH_SECRET generado:');
console.log('─'.repeat(50));
console.log(secret);
console.log('─'.repeat(50));

console.log('\n📋 Instrucciones:');
console.log('1. Copia el secret de arriba');
console.log('2. Ve a Vercel Dashboard → Settings → Environment Variables');
console.log('3. Agrega: NEXTAUTH_SECRET = [el secret copiado]');
console.log('4. Marca "Production" environment');
console.log('5. Save y redeploya');

console.log('\n⚠️  Importante:');
console.log('- Nunca compartas este secret públicamente');
console.log('- Usa un secret diferente para desarrollo y producción');
console.log('- Guarda este secret de forma segura');

console.log('\n🚀 Tu AnimeHaus está listo para producción!');
