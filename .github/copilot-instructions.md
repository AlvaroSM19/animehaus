<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Anime Quiz Hub - Copilot Instructions

## Project Context
This is an anime-themed quiz and mini-games platform built with Next.js 14, TypeScript, and Tailwind CSS. The project is inspired by futbol-11.com but focuses entirely on anime content.

## Architecture Guidelines
- Use Next.js 14 App Router for all routing
- Implement TypeScript with strict type checking
- Follow Tailwind CSS utility-first approach
- Use shadcn/ui components as the primary UI library
- Implement Framer Motion for smooth animations
- Use Prisma for database operations
- Follow atomic design principles for components

## Coding Standards
- Use TypeScript interfaces for all data structures
- Implement proper error handling with try-catch blocks
- Use async/await for asynchronous operations
- Follow React best practices (hooks, state management)
- Implement responsive design for all components
- Use semantic HTML elements
- Follow accessibility guidelines (ARIA labels, keyboard navigation)

## Component Structure
- Place reusable components in `src/components/ui/`
- Game-specific components in `src/components/games/`
- Layout components in `src/components/layout/`
- Use compound component patterns for complex UI elements
- Implement proper prop validation with TypeScript

## State Management
- Use React's built-in state (useState, useReducer) for local state
- Implement Context API for global state when needed
- Use custom hooks for complex state logic
- Implement proper state initialization and cleanup

## Performance Optimization
- Use Next.js Image component for all images
- Implement lazy loading for game components
- Use React.memo for expensive components
- Implement proper code splitting
- Optimize bundle size with dynamic imports

## Game Implementation Guidelines
- Each mini-game should be a separate route under `/games/`
- Implement proper game state management
- Add sound effects and visual feedback
- Include timer functionality where applicable
- Implement proper score calculation and storage
- Add social sharing capabilities

## Anime Content Guidelines
- Use popular anime series for game content
- Implement proper character and series data structures
- Include anime metadata (studio, year, genre)
- Respect copyright guidelines (fair use for educational/quiz purposes)
- Include proper attribution where necessary

## API Design
- Use Next.js API routes for backend functionality
- Implement proper authentication middleware
- Use Prisma for database queries
- Implement proper error responses
- Add rate limiting for API endpoints

## Testing Considerations
- Write unit tests for utility functions
- Test game logic thoroughly
- Implement integration tests for API routes
- Test responsive design across devices
- Validate accessibility features

## Deployment
- Configure for Vercel deployment
- Set up proper environment variables
- Implement proper SEO meta tags
- Configure analytics and monitoring
- Set up proper error tracking
