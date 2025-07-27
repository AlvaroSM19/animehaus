import type { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'One Piece Characters Database - 164+ Characters',
  description: 'Browse our comprehensive One Piece characters database with 164+ characters. Search by name, crew, bounty, devil fruit powers, and haki abilities. Complete character stats and information.',
  keywords: [
    'one piece characters', 'one piece character database', 'anime character list',
    'luffy crew members', 'straw hat pirates', 'one piece bounties', 'devil fruit users',
    'haki users', 'one piece character search', 'anime character stats', 'one piece wiki',
    'manga characters', 'one piece roster', 'anime database', 'character information'
  ],
  openGraph: {
    title: 'One Piece Characters Database - 164+ Characters | AnimeHaus',
    description: 'Explore our complete One Piece characters database. Search, filter, and discover character information including bounties, devil fruits, haki abilities, and more!',
    url: 'https://animehaus.vercel.app/characters',
    images: [
      {
        url: '/og-characters.jpg',
        width: 1200,
        height: 630,
        alt: 'One Piece Characters Database - AnimeHaus',
      }
    ],
  },
  twitter: {
    title: 'One Piece Characters Database - 164+ Characters',
    description: 'Discover detailed information about One Piece characters, their bounties, devil fruits, and abilities! 🏴‍☠️',
    images: ['/twitter-characters.jpg'],
  },
  alternates: {
    canonical: 'https://animehaus.vercel.app/characters',
  },
};

const charactersStructuredData = {
  name: 'One Piece Characters Database',
  description: 'Comprehensive database of One Piece characters with detailed information about bounties, devil fruits, haki abilities, and character backgrounds.',
  url: 'https://animehaus.vercel.app/characters',
  mainEntity: {
    '@type': 'Dataset',
    name: 'One Piece Characters Database',
    description: 'A comprehensive collection of 164+ One Piece characters with detailed stats and information',
    keywords: 'One Piece, characters, anime, manga, database',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    creator: {
      '@type': 'Organization',
      name: 'AnimeHaus'
    }
  }
};

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <StructuredData type="WebPage" data={charactersStructuredData} />
    </>
  );
}
