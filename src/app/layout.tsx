import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | AnimeHaus - Anime Quiz Hub',
    default: 'AnimeHaus - Ultimate Anime Quiz Hub | One Piece Games & Character Database'
  },
  description: 'AnimeHaus is the ultimate anime quiz hub featuring One Piece character games, anime trivia, Wordle-style puzzles, and comprehensive character databases. Test your anime knowledge with interactive mini-games and challenges.',
  keywords: [
    'animehaus', 'anime quiz', 'one piece quiz', 'anime games', 'anime trivia', 
    'one piece characters', 'anime wordle', 'manga quiz', 'anime knowledge test',
    'one piece games', 'anime hub', 'otaku games', 'anime database', 'character quiz',
    'luffy quiz', 'zoro quiz', 'anime mini games', 'one piece trivia', 'anime challenge'
  ],
  authors: [{ name: 'AnimeHaus', url: 'https://animehaus.vercel.app' }],
  creator: 'AnimeHaus',
  publisher: 'AnimeHaus',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FFB7C5',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AnimeHaus - Ultimate Anime Quiz Hub | One Piece Games',
    description: 'Test your anime knowledge with interactive games, quizzes, and character databases. Features One Piece Wordle, character trivia, and comprehensive anime content.',
    type: 'website',
    locale: 'en_US',
    url: 'https://animehaus.vercel.app',
    siteName: 'AnimeHaus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AnimeHaus - Anime Quiz Hub',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@animehaus',
    creator: '@animehaus',
    title: 'AnimeHaus - Ultimate Anime Quiz Hub',
    description: 'Test your anime knowledge with One Piece games, character quizzes, and interactive anime trivia. Join the ultimate anime gaming experience!',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'games',
  classification: 'Anime Quiz Games',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
