# 🏠 AnimeHaus - Tu Casa del Anime

**AnimeHaus** es la plataforma definitiva para mini-juegos y quizzes basados en anime. Actualmente enfocada en **One Piece** con una base de datos completa de **168 personajes**.

## 🎮 Mini-Juegos Disponibles

### 1. 🕵️ Anime Impostor
Encuentra el personaje que no pertenece al grupo temático. Un juego de deducción que desafía tu conocimiento sobre tripulaciones, habilidades y características de los personajes.

**Características:**
- Interfaz circular intuitiva
- Múltiples categorías temáticas (Tripulaciones, Haki, Frutas del Diablo, etc.)
- Sistema de puntuación
- Feedback inmediato

### 2. 🎯 Cuadrícula de Anime
Completa una cuadrícula 3x3 con personajes que cumplan las condiciones específicas de fila y columna. Inspirado en juegos de cuadrícula deportiva.

**Características:**
- Búsqueda inteligente de personajes
- Validación cruzada automática
- Sistema de pistas integrado
- Garantía de solución en todas las casillas
- Temporizador de 20 minutos

### 3. 🔤 Anime Wordle
Adivina el nombre del personaje de anime en 6 intentos con pistas visuales y de colores.

**Características:**
- Pistas visuales progresivas
- Sistema de colores como Wordle original
- Múltiples intentos
- Feedback inmediato

## 📊 Base de Datos

### Estadísticas Actuales:
- **168 Personajes** de One Piece
- **3 Mini-Juegos** completamente funcionales
- **Datos Detallados**: Recompensas, origen, tipos de Haki, frutas del diablo

### Nuevos Campos de Datos:
- `recompensa`: Recompensa en berries (o null si no tiene)
- `origen`: Lugar de origen del personaje  
- `tipo_haki`: Array de tipos de Haki que puede usar
- `fruta_diablo`: Nombre de la fruta del diablo (o null si no tiene)

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Animaciones**: Framer Motion y CSS personalizado
- **Base de Datos**: JSON estructurado con TypeScript

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone [tu-repositorio]

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Características Técnicas

### Sistema de Validación Inteligente
- Algoritmo que garantiza soluciones válidas en el juego de cuadrícula
- Validación cruzada de condiciones
- Sistema de pistas dinámico

### Efectos Visuales
- Gradientes personalizados
- Animaciones suaves
- Scroll horizontal interactivo
- Efectos de hover y focus

### Responsive Design
- Optimizado para móviles y desktop
- Interfaces adaptativas
- Touch-friendly en dispositivos móviles

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── games/
│   │   ├── impostor/
│   │   ├── anime-grid/
│   │   └── anime-wordle/
│   ├── personajes/
│   └── page.tsx
├── components/
│   ├── effects/
│   ├── layout/
│   └── ui/
├── lib/
│   ├── anime-data-updated.ts
│   └── grid-validation.ts
```

## 🔮 Roadmap Futuro

### Nuevos Animes:
- 🦸 **My Hero Academia**: Personajes, quirks, objetos
- 🥷 **Naruto**: Personajes, jutsus, equipos  
- 🐉 **Dragon Ball**: Personajes, transformaciones
- ⚔️ **Attack on Titan**: Personajes, titanes
- 🗡️ **Demon Slayer**: Personajes, respiraciones

### Nuevos Juegos:
- 🔗 **Connections**: Encuentra conexiones entre elementos
- ⛰️ **Pyramid Ranking**: Ordena personajes por criterios
- 🏆 **Top 10**: Rankings personalizados
- 🎲 **Anime Bingo**: Tableros personalizables

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Especialmente:

- Nuevos personajes y datos
- Mejoras en la UI/UX
- Nuevos mini-juegos
- Optimizaciones de rendimiento

## 📜 Licencia

Este proyecto es de código abierto. Ver `LICENSE` para más detalles.

---

**AnimeHaus** - Tu casa del anime. Explora, juega y desafía tu conocimiento. 🏠✨
