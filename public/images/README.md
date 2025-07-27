# Guía de Imágenes para Anime Quiz Platform

## Estructura de Carpetas

```
public/
├── images/
│   ├── anime/
│   │   ├── mha.jpg
│   │   ├── onepiece.jpg
│   │   ├── naruto.jpg
│   │   ├── dragonball.jpg
│   │   ├── aot.jpg
│   │   ├── demonslayer.jpg
│   │   ├── jjk.jpg
│   │   └── haikyuu.jpg
│   └── characters/
│       ├── mha-deku.jpg
│       ├── mha-bakugo.jpg
│       ├── mha-todoroki.jpg
│       ├── mha-allmight.jpg
│       ├── mha-uraraka.jpg
│       ├── mha-iida.jpg
│       ├── mha-kirishima.jpg
│       ├── mha-momo.jpg
│       ├── mha-endeavor.jpg
│       ├── op-luffy.jpg
│       ├── op-zoro.jpg
│       ├── op-sanji.jpg
│       ├── op-nami.jpg
│       ├── op-usopp.jpg
│       ├── op-chopper.jpg
│       ├── op-robin.jpg
│       ├── op-ace.jpg
│       ├── naruto-naruto.jpg
│       ├── naruto-sasuke.jpg
│       ├── naruto-sakura.jpg
│       ├── naruto-kakashi.jpg
│       ├── naruto-gaara.jpg
│       ├── naruto-rock-lee.jpg
│       ├── naruto-itachi.jpg
│       ├── db-goku.jpg
│       ├── db-vegeta.jpg
│       ├── db-gohan.jpg
│       ├── db-piccolo.jpg
│       ├── db-trunks.jpg
│       ├── aot-eren.jpg
│       ├── aot-mikasa.jpg
│       ├── aot-levi.jpg
│       ├── aot-armin.jpg
│       ├── aot-jean.jpg
│       ├── aot-sasha.jpg
│       ├── ds-tanjiro.jpg
│       ├── ds-nezuko.jpg
│       ├── ds-zenitsu.jpg
│       ├── ds-inosuke.jpg
│       ├── ds-giyu.jpg
│       ├── ds-rengoku.jpg
│       ├── ds-shinobu.jpg
│       ├── jjk-yuji.jpg
│       ├── jjk-megumi.jpg
│       ├── jjk-nobara.jpg
│       ├── jjk-gojo.jpg
│       ├── jjk-maki.jpg
│       ├── jjk-nanami.jpg
│       ├── jjk-sukuna.jpg
│       ├── hq-hinata.jpg
│       ├── hq-kageyama.jpg
│       ├── hq-tsukishima.jpg
│       ├── hq-yamaguchi.jpg
│       ├── hq-daichi.jpg
│       ├── hq-nishinoya.jpg
│       ├── hq-oikawa.jpg
│       └── default.jpg
```

## Convención de Nombres

### Para Anime (logos/portadas):
- Formato: `{anime-id}.jpg`
- Ejemplo: `mha.jpg`, `onepiece.jpg`, `naruto.jpg`

### Para Personajes:
- Formato: `{anime-id}-{character-name}.jpg`
- Ejemplo: `mha-deku.jpg`, `op-luffy.jpg`, `naruto-naruto.jpg`

## Especificaciones de Imagen

### Imágenes de Anime:
- **Resolución recomendada**: 300x400px (3:4 ratio)
- **Formato**: JPG o PNG
- **Tamaño máximo**: 200KB
- **Contenido**: Logo del anime o imagen representativa

### Imágenes de Personajes:
- **Resolución recomendada**: 200x200px (cuadrado)
- **Formato**: JPG o PNG
- **Tamaño máximo**: 150KB
- **Contenido**: Retrato del personaje, preferiblemente cara/busto

## Dónde Conseguir Imágenes

### Fuentes Recomendadas:
1. **MyAnimeList (MAL)** - https://myanimelist.net/
2. **Anime News Network** - https://animenewsnetwork.com/
3. **Wikia/Fandom** - Páginas específicas de cada anime
4. **Pinterest** - Buscar "[nombre del anime] characters"
5. **Google Images** - Con filtros de tamaño y derechos de uso

### Búsquedas Sugeridas:
- Para anime: "[nombre del anime] logo", "[nombre del anime] poster"
- Para personajes: "[nombre del personaje] anime", "[nombre del personaje] portrait"

## Imagen por Defecto

Si no tienes una imagen específica, el sistema mostrará automáticamente:
1. Un placeholder con la inicial del personaje/anime
2. Un ícono japonés (🎌)
3. Un fondo degradado

## Optimización

Para mejores tiempos de carga:
1. Comprime las imágenes usando herramientas como TinyPNG
2. Usa formatos WebP cuando sea posible
3. Mantén los tamaños de archivo pequeños

## Ejemplo de Implementación

```typescript
// En anime-data.ts
{
  id: 'mha-deku',
  name: 'Izuku Midoriya',
  imageUrl: '/images/characters/mha-deku.jpg', // ← Aquí va la ruta
  // ... otros campos
}
```

## Agregando Nuevos Personajes

Cuando agregues nuevos personajes:
1. Sube la imagen a `/public/images/characters/`
2. Nómbrala siguiendo la convención: `{anime-id}-{character-name}.jpg`
3. Agrega el campo `imageUrl` en el objeto del personaje
4. La aplicación automáticamente usará la imagen

## Troubleshooting

Si las imágenes no se muestran:
1. Verifica que el archivo esté en la carpeta correcta
2. Confirma que el nombre del archivo coincida exactamente
3. Asegúrate de que la extensión sea correcta (.jpg, .png)
4. Revisa que no haya caracteres especiales en el nombre del archivo
