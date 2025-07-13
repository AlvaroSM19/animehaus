import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnimeQuiz Hub - Mini-juegos y Quizzes de Anime',
  description: 'La plataforma definitiva para mini-juegos y quizzes de anime. Bingo, Grid Trivia, Connections, Pyramid y Top 10. Desafía tu conocimiento anime.',
  keywords: ['anime', 'quiz', 'juegos', 'bingo', 'trivia', 'manga', 'otaku'],
  authors: [{ name: 'AnimeQuiz Hub' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FFB7C5',
  openGraph: {
    title: 'AnimeQuiz Hub - Mini-juegos y Quizzes de Anime',
    description: 'Desafía tu conocimiento anime con nuestros mini-juegos: Bingo, Grid Trivia, Connections, Pyramid y Top 10.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'AnimeQuiz Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeQuiz Hub - Mini-juegos y Quizzes de Anime',
    description: 'La plataforma definitiva para mini-juegos y quizzes de anime.',
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
