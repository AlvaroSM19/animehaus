import React from 'react';

interface StructuredDataProps {
  type: 'WebSite' | 'WebPage' | 'Game' | 'Organization';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Predefined structured data for common pages
export const websiteStructuredData = {
  name: 'AnimeHaus',
  description: 'Ultimate anime quiz hub featuring One Piece games, character databases, and interactive anime trivia.',
  url: 'https://animehaus.vercel.app',
  logo: 'https://animehaus.vercel.app/logo.png',
  sameAs: [
    'https://github.com/AlvaroSM19/animehaus'
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://animehaus.vercel.app/characters?search={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const organizationStructuredData = {
  name: 'AnimeHaus',
  description: 'Creating interactive anime quiz games and character databases for anime fans worldwide.',
  url: 'https://animehaus.vercel.app',
  logo: 'https://animehaus.vercel.app/logo.png',
  foundingDate: '2024',
  sameAs: [
    'https://github.com/AlvaroSM19/animehaus'
  ]
};
