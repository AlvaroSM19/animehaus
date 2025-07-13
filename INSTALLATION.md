# Installation Guide - Anime Quiz Hub

## Prerequisites

Before you can run this project, you need to have the following installed on your system:

### 1. Node.js (Required)
Download and install Node.js from [nodejs.org](https://nodejs.org/)
- **Recommended version**: Node.js 18.17 or later
- **Alternative**: Use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions

#### Windows Installation:
1. Go to https://nodejs.org/
2. Download the LTS version (recommended for most users)
3. Run the installer and follow the setup wizard
4. Restart your terminal/PowerShell
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 2. Git (Recommended)
If you haven't already, install Git from [git-scm.com](https://git-scm.com/)

### 3. PostgreSQL (For Database)
Download from [postgresql.org](https://www.postgresql.org/download/) or use a cloud service like:
- [Neon](https://neon.tech/) (Recommended - Free tier available)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your actual values
```

Required environment variables:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/anime_quiz_hub"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Optional
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### 3. Set Up Database
```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Optional: Seed database with sample data
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Prisma Studio
npm run db:generate  # Generate Prisma client

# Type checking
npm run type-check   # Run TypeScript compiler check
```

## Project Structure

```
anime-quiz-hub/
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   │   ├── games/          # Game pages
│   │   │   ├── bingo/      # Bingo game
│   │   │   ├── grid-trivia/
│   │   │   ├── connections/
│   │   │   ├── pyramid/
│   │   │   └── top-10/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/        # Layout components
│   │   └── games/         # Game-specific components
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Helper functions
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static assets
├── .env.example          # Environment variables template
└── package.json          # Dependencies and scripts
```

## Troubleshooting

### Common Issues

**1. "Cannot find module" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Database connection issues**
- Check your DATABASE_URL in .env.local
- Ensure PostgreSQL is running
- Verify database credentials

**3. Port already in use**
```bash
# Use a different port
npm run dev -- -p 3001
```

**4. TypeScript errors**
```bash
# Regenerate types
npm run type-check
npx prisma generate
```

### Performance Tips

1. **Enable SWC compiler** (default in Next.js 13+)
2. **Use proper image optimization** with Next.js Image component
3. **Implement code splitting** for game components
4. **Use React DevTools** for debugging

## Development Workflow

### Phase 1: Base Structure ✅
- [x] Project setup
- [x] Navigation and layout
- [x] Basic routing

### Phase 2: Bingo Game (Current)
- [x] Basic bingo implementation
- [ ] Anime data integration
- [ ] Score system
- [ ] Animations

### Phase 3-6: Additional Games
- [ ] Grid Trivia
- [ ] Connections
- [ ] Pyramid
- [ ] Top 10

### Phase 7: Production Ready
- [ ] Database optimization
- [ ] SEO implementation
- [ ] Analytics integration
- [ ] Deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues:

1. Check this guide first
2. Search existing [GitHub Issues](../../issues)
3. Create a new issue with detailed information
4. Join our [Discord](https://discord.gg/anime-quiz-hub) community

---

**Happy coding! 🎌**
