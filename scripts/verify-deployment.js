#!/usr/bin/env node

// Script de verificación pre-despliegue para AnimeHaus
const fs = require('fs');
const path = require('path');

console.log('🚀 Verificando proyecto AnimeHaus para despliegue...\n');

const checks = [];

// 1. Verificar archivos esenciales
const essentialFiles = [
  'package.json',
  'next.config.js',
  'vercel.json',
  'src/app/layout.tsx',
  'src/lib/auth.ts',
  'src/app/api/auth/[...nextauth]/route.ts',
  'src/app/auth/signin/page.tsx',
  'src/app/auth/error/page.tsx'
];

essentialFiles.forEach(file => {
  if (fs.existsSync(file)) {
    checks.push({ name: `✅ ${file}`, status: 'ok' });
  } else {
    checks.push({ name: `❌ ${file}`, status: 'error' });
  }
});

// 2. Verificar dependencias críticas
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const criticalDeps = [
  'next',
  'next-auth',
  'react',
  'react-dom',
  '@radix-ui/react-slot'
];

criticalDeps.forEach(dep => {
  if (packageJson.dependencies[dep] || packageJson.devDependencies?.[dep]) {
    checks.push({ name: `✅ Dependencia: ${dep}`, status: 'ok' });
  } else {
    checks.push({ name: `❌ Dependencia faltante: ${dep}`, status: 'error' });
  }
});

// 3. Verificar variables de entorno críticas
const envVars = [
  'NEXTAUTH_SECRET'
];

envVars.forEach(envVar => {
  if (process.env[envVar]) {
    checks.push({ name: `✅ Variable de entorno: ${envVar}`, status: 'ok' });
  } else {
    checks.push({ name: `⚠️ Variable de entorno: ${envVar} (configurar en Vercel)`, status: 'warning' });
  }
});

// 4. Verificar estructura de carpetas
const requiredDirs = [
  'src/app',
  'src/components',
  'src/lib',
  'src/app/auth',
  'src/app/api/auth',
  'src/app/games'
];

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    checks.push({ name: `✅ Directorio: ${dir}`, status: 'ok' });
  } else {
    checks.push({ name: `❌ Directorio faltante: ${dir}`, status: 'error' });
  }
});

// Mostrar resultados
console.log('📋 Resultados de verificación:\n');
checks.forEach(check => {
  console.log(check.name);
});

const errors = checks.filter(c => c.status === 'error').length;
const warnings = checks.filter(c => c.status === 'warning').length;
const success = checks.filter(c => c.status === 'ok').length;

console.log(`\n📊 Resumen:`);
console.log(`✅ Correcto: ${success}`);
console.log(`⚠️ Advertencias: ${warnings}`);
console.log(`❌ Errores: ${errors}`);

if (errors === 0) {
  console.log('\n🎉 ¡Proyecto listo para desplegar en Vercel!');
  console.log('\n📝 Próximos pasos:');
  console.log('1. Ejecuta: npm run build (para verificar que compila)');
  console.log('2. Conecta tu repositorio a Vercel');
  console.log('3. Configura las variables de entorno en Vercel Dashboard');
  console.log('4. Configura las OAuth apps con tu dominio de producción');
  console.log('5. ¡Despliega!');
} else {
  console.log('\n❌ Se encontraron errores que deben corregirse antes del despliegue.');
  process.exit(1);
}

if (warnings > 0) {
  console.log('\n⚠️ Recuerda configurar las variables de entorno en Vercel Dashboard.');
}
