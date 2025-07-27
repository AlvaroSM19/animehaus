# 🏠 AnimeHaus - Deployment Guide

## 🚀 Tu AnimeHaus está listo para subir!

### Framework usado:
- **Next.js 14** con TypeScript
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- 168 personajes de One Piece
- 3 juegos: Impostor, Grid y Wordle

---

## 📤 Opciones para subir (GRATIS):

### 🥇 **Opción 1: Vercel (Recomendado)**
1. Ve a [vercel.com](https://vercel.com)
2. Crea cuenta gratis (con GitHub/Google)
3. Conecta tu GitHub
4. Sube este proyecto a GitHub
5. En Vercel: "New Project" → Importa desde GitHub
6. ¡Automáticamente detecta Next.js y deploya!

**URL final:** `https://tu-animehaus.vercel.app`

### 🥈 **Opción 2: Netlify**
1. Ve a [netlify.com](https://netlify.com)
2. Crea cuenta gratis
3. Arrastra la carpeta `out` (después de `npm run build`)
4. ¡Listo!

### 🥉 **Opción 3: GitHub Pages**
1. Sube a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main
4. ¡Automático!

---

## 🔧 Comandos importantes:

### Para desarrollo local:
\`\`\`bash
npm run dev
\`\`\`

### Para compilar:
\`\`\`bash
npm run build
\`\`\`

### Para ver la versión de producción:
\`\`\`bash
npm start
\`\`\`

---

## 🎮 Características de AnimeHaus:

✅ **3 Juegos funcionales:**
- 🕵️ **Impostor**: Encuentra el personaje falso
- 🎯 **Grid**: Rellena la cuadrícula 3x3 con condiciones
- 📝 **Wordle**: Adivina el personaje de One Piece

✅ **Base de datos optimizada:**
- 168 personajes de One Piece
- Nombres simplificados (Luffy, Ace, Akainu...)
- Sin duplicados ni archivos basura

✅ **Responsive design** para móviles y desktop

✅ **Efectos visuales** y animaciones

---

## 👥 Compartir con tus amigos:

Una vez subido, solo envía el link:
- **Vercel**: `https://animehaus-[tu-usuario].vercel.app`
- **Netlify**: `https://[random-name].netlify.app`

¡Tus amigos podrán jugar desde cualquier dispositivo! 🎉

---

## 🛠️ Si necesitas ayuda:

1. **Error de build**: Ejecuta `npm run build` localmente primero
2. **Problema de Git**: Asegúrate de hacer commit de todos los cambios
3. **Vercel no detecta**: Verifica que `package.json` esté en la raíz

¡Tu AnimeHaus está optimizado y listo para el mundo! 🌍
