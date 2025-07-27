import type { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Anime Wordle - One Piece Character Guessing Game',
  description: 'Play Anime Wordle, the ultimate One Piece character guessing game! Test your knowledge with our Wordle-style game featuring 164+ One Piece characters. Can you guess the character name?',
  keywords: [
    'anime wordle', 'one piece wordle', 'anime character guessing game', 'one piece quiz',
    'anime puzzle game', 'character name game', 'luffy wordle', 'zoro wordle', 'anime brain teaser',
    'one piece character quiz', 'anime word game', 'otaku puzzle', 'anime knowledge test'
  ],
  openGraph: {
    title: 'Anime Wordle - One Piece Character Guessing Game | AnimeHaus',
    description: 'Test your One Piece knowledge with our Wordle-style character guessing game. Features 164+ characters, hints, and daily challenges!',
    url: 'https://animehaus.vercel.app/games/anime-wordle',
    images: [
      {
        url: '/og-anime-wordle.jpg',
        width: 1200,
        height: 630,
        alt: 'Anime Wordle - One Piece Character Guessing Game',
      }
    ],
  },
  twitter: {
    title: 'Anime Wordle - Guess the One Piece Character!',
    description: 'Challenge yourself with our Wordle-style One Piece character guessing game. How many can you get right? 🏴‍☠️',
    images: ['/twitter-anime-wordle.jpg'],
  },
  alternates: {
    canonical: 'https://animehaus.vercel.app/games/anime-wordle',
  },
};

const gameStructuredData = {
  name: 'Anime Wordle - One Piece Character Guessing Game',
  description: 'A Wordle-style guessing game featuring One Piece characters. Test your anime knowledge by guessing character names with limited attempts.',
  url: 'https://animehaus.vercel.app/games/anime-wordle',
  genre: 'Puzzle Game',
  gamePlatform: 'Web Browser',
  operatingSystem: 'Any',
  applicationCategory: 'Game',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1'
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
};

export default function AnimeWordleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <StructuredData type="Game" data={gameStructuredData} />
    </>
  );
}
