import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnimeHaus - Your Anime Home',
  description: 'Your anime home. Explore, play and challenge your knowledge with unique mini-games based on One Piece and more anime universes.',
  keywords: ['anime', 'one piece', 'games', 'quiz', 'characters', 'manga', 'otaku'],
  authors: [{ name: 'AnimeHaus' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FFB7C5',
  openGraph: {
    title: 'AnimeHaus - Your Anime Home',
    description: 'Explore, play and challenge your knowledge with unique mini-games based on One Piece.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AnimeHaus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeHaus - Your Anime Home',
    description: 'Your anime home. Explore, play and challenge your knowledge.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
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
