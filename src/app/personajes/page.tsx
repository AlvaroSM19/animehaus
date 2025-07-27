'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimeImage } from '@/components/ui/anime-image';
import { ArrowLeft, Search, Filter, Trophy, Users, MapPin, Zap } from 'lucide-react';
import Link from 'next/link';
import { ANIME_CHARACTERS, AnimeCharacter } from '@/lib/anime-data-updated';
import { 
  getCharactersByBounty, 
  getCharactersByOrigin, 
  getCharactersByHakiType, 
  getCharactersByDevilFruit,
  getCharactersWithoutDevilFruit,
  getCharacterStats 
} from '@/lib/anime-data-updated';

export default function CharactersPage() {
  const [filteredCharacters, setFilteredCharacters] = useState<AnimeCharacter[]>(ANIME_CHARACTERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const stats = getCharacterStats();

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All Characters', icon: Users },
    { id: 'main', label: 'Main Characters', icon: Trophy },
    { id: 'high-bounty', label: 'High Bounties (+1B)', icon: Trophy },
    { id: 'devil-fruit', label: 'Devil Fruit Users', icon: Zap },
    { id: 'no-devil-fruit', label: 'No Devil Fruit', icon: Users },
    { id: 'haki-conquerer', label: 'Conqueror Haki', icon: Zap },
    { id: 'east-blue', label: 'Origin: East Blue', icon: MapPin },
    { id: 'grand-line', label: 'Origin: Grand Line', icon: MapPin },
    { id: 'wano', label: 'Origin: Wano', icon: MapPin },
  ];

  // Sort options
  const sortOptions = [
    { id: 'name', label: 'Name A-Z' },
    { id: 'bounty-desc', label: 'Bounty (High to Low)' },
    { id: 'bounty-asc', label: 'Bounty (Low to High)' },
    { id: 'crew', label: 'Crew' },
    { id: 'origin', label: 'Origin' },
  ];

  // Apply filters
  useEffect(() => {
    let filtered = [...ANIME_CHARACTERS];

    // Apply text search
    if (searchQuery) {
      filtered = filtered.filter(char =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.crew.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    switch (selectedFilter) {
      case 'main':
        filtered = filtered.filter(char => char.role === 'main');
        break;
      case 'high-bounty':
        filtered = getCharactersByBounty(1000000000);
        break;
      case 'devil-fruit':
        filtered = getCharactersByDevilFruit();
        break;
      case 'no-devil-fruit':
        filtered = getCharactersWithoutDevilFruit();
        break;
      case 'haki-conquerer':
        filtered = getCharactersByHakiType('Conqueror');
        break;
      case 'east-blue':
        filtered = getCharactersByOrigin('East Blue');
        break;
      case 'grand-line':
        filtered = getCharactersByOrigin('Grand Line');
        break;
      case 'wano':
        filtered = getCharactersByOrigin('Wano');
        break;
    }

    // Apply text search to filtered results if needed
    if (searchQuery && selectedFilter !== 'all') {
      filtered = filtered.filter(char =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.crew.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'bounty-desc':
        filtered.sort((a, b) => (b.bounty || 0) - (a.bounty || 0));
        break;
      case 'bounty-asc':
        filtered.sort((a, b) => (a.bounty || 0) - (b.bounty || 0));
        break;
      case 'crew':
        filtered.sort((a, b) => a.crew.localeCompare(b.crew));
        break;
      case 'origin':
        filtered.sort((a, b) => a.origin.localeCompare(b.origin));
        break;
    }

    setFilteredCharacters(filtered);
  }, [searchQuery, selectedFilter, sortBy]);

  const formatBounty = (bounty: number | null): string => {
    if (!bounty) return 'No bounty';
    if (bounty >= 1000000000) return `${(bounty / 1000000000).toFixed(1)}B ฿`;
    if (bounty >= 1000000) return `${(bounty / 1000000).toFixed(0)}M ฿`;
    if (bounty >= 1000) return `${(bounty / 1000).toFixed(0)}K ฿`;
    return `${bounty} ฿`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button className="text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-yellow-400">AnimeHaus - One Piece Characters</h1>
            </div>
            
            <div className="flex items-center gap-4 text-white text-sm">
              <div className="bg-slate-700 px-3 py-1 rounded">
                Total: {stats.total}
              </div>
              <div className="bg-green-700 px-3 py-1 rounded">
                With Haki: {stats.withHaki}
              </div>
              <div className="bg-purple-700 px-3 py-1 rounded">
                Devil Fruits: {stats.withDevilFruit}
              </div>
              <div className="bg-yellow-700 px-3 py-1 rounded">
                With Bounty: {stats.withBounty}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className={`${showFilters ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'} hover:bg-yellow-400 hover:text-black`}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="text-slate-300 text-sm">
              {filteredCharacters.length} characters
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-600">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {filterOptions.map(option => {
                  const Icon = option.icon;
                  return (
                    <Button
                      key={option.id}
                      onClick={() => setSelectedFilter(option.id)}
                      className={`${selectedFilter === option.id 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                      } text-sm`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {option.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map(character => (
            <Card 
              key={character.id} 
              className="bg-slate-800/50 border-slate-600 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-20 h-20">
                    <AnimeImage
                      src={character.imageUrl || '/images/characters/default.jpg'}
                      alt={character.name}
                      width={80}
                      height={80}
                      className="w-full h-full rounded-full border-2 border-yellow-400"
                      fallbackText={character.name.charAt(0)}
                    />
                  </div>
                </div>
                <CardTitle className="text-yellow-400 text-center text-lg">
                  {character.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {/* Crew */}
                <div className="text-center">
                  <div className="text-xs text-slate-400">Crew</div>
                  <div className="text-sm text-white font-medium">{character.crew}</div>
                </div>

                {/* Bounty */}
                <div className="text-center">
                  <div className="text-xs text-slate-400">Bounty</div>
                  <div className={`text-sm font-bold ${character.bounty ? 'text-green-400' : 'text-slate-500'}`}>
                    {formatBounty(character.bounty)}
                  </div>
                </div>

                {/* Origin */}
                <div className="text-center">
                  <div className="text-xs text-slate-400">Origin</div>
                  <div className="text-sm text-purple-400">{character.origin}</div>
                </div>

                {/* Devil Fruit */}
                {character.devilFruit && (
                  <div className="text-center">
                    <div className="text-xs text-slate-400">Devil Fruit</div>
                    <div className="text-sm text-red-400 font-medium">{character.devilFruit}</div>
                  </div>
                )}

                {/* Haki */}
                {character.hakiTypes.length > 0 && (
                  <div className="text-center">
                    <div className="text-xs text-slate-400">Haki</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {character.hakiTypes.map(haki => (
                        <span 
                          key={haki}
                          className="text-xs bg-blue-600 text-white px-2 py-1 rounded"
                        >
                          {haki}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Role */}
                <div className="text-center">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    character.role === 'main' 
                      ? 'bg-yellow-600 text-black' 
                      : 'bg-slate-600 text-white'
                  }`}>
                    {character.role === 'main' ? 'Main' : 'Supporting'}
                  </span>
                </div>

                {/* Description */}
                <div className="text-xs text-slate-300 text-center line-clamp-2">
                  {character.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">No characters found</div>
            <div className="text-slate-500">Intenta cambiar los filtros o el término de búsqueda</div>
          </div>
        )}
      </div>
    </div>
  );
}
