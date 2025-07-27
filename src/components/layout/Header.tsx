'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  Gamepad2, 
  Trophy,
  Settings,
  User,
  Users
} from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Juegos', href: '/games', icon: Gamepad2 },
  { name: 'Personajes', href: '/characters', icon: Users },
  { name: 'Rankings', href: '/rankings', icon: Trophy },
];

const games = [
  { name: 'Anime Impostor', href: '/games/impostor', emoji: '🕵️' },
  { name: 'Cuadrícula Anime', href: '/games/anime-grid', emoji: '🎯' },
  { name: 'Anime Wordle', href: '/games/anime-wordle', emoji: '🔤' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGamesMenuOpen, setIsGamesMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-anime-sakura to-anime-gold bg-clip-text text-transparent">
                � AnimeHaus
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Games Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsGamesMenuOpen(!isGamesMenuOpen)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>Mini-Juegos</span>
                </button>
                
                {isGamesMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {games.map((game) => (
                        <Link
                          key={game.name}
                          href={game.href}
                          onClick={() => setIsGamesMenuOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          <span className="mr-3">{game.emoji}</span>
                          {game.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="anime" size="sm">
              Jugar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="border-t pt-4 mt-4">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">Mini-Juegos</div>
                {games.map((game) => (
                  <Link
                    key={game.name}
                    href={game.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 block px-6 py-2 rounded-md text-sm"
                  >
                    <span>{game.emoji}</span>
                    <span>{game.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </Button>
                <Button variant="anime" className="w-full">
                  Jugar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
