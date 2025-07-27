# 🚀 Variables de Entorno para Vercel - AnimeHaus

## Variables requeridas en Vercel Dashboard

Ve a tu proyecto en Vercel → Settings → Environment Variables y agrega estas variables:

### NextAuth Configuration
```
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=genera-un-secret-seguro-con-openssl-rand-base64-32
```

### Google OAuth
```
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
```

### Facebook OAuth
```
FACEBOOK_CLIENT_ID=tu-facebook-app-id
FACEBOOK_CLIENT_SECRET=tu-facebook-app-secret
```

### Discord OAuth
```
DISCORD_CLIENT_ID=tu-discord-client-id
DISCORD_CLIENT_SECRET=tu-discord-client-secret
```

### Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
NODE_ENV=production
```

## ⚠️ Importante para OAuth Providers

Cuando configures tu dominio de producción, actualiza las URIs de redirección:

### Google Console
- URI de redirección: `https://tu-dominio.vercel.app/api/auth/callback/google`

### Facebook Developers
- URI de redirección: `https://tu-dominio.vercel.app/api/auth/callback/facebook`

### Discord Developer Portal
- URI de redirección: `https://tu-dominio.vercel.app/api/auth/callback/discord`

## 🔧 Comandos útiles

Generar NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

Verificar build local:
```bash
npm run build
npm start
```
