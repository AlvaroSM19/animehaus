'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimeImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackText?: string;
  priority?: boolean;
}

export function AnimeImage({ 
  src, 
  alt, 
  className, 
  width = 240, 
  height = 240, 
  fallbackText,
  priority = false 
}: AnimeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error || !src) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-dashed border-yellow-400 rounded-lg character-image",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">🎌</div>
          <div className="text-sm text-yellow-200 font-medium">
            {fallbackText || alt}
          </div>
        </div>
      </div>
    );
  }

    return (
    <div className={cn("relative overflow-hidden rounded-lg character-image", className)}>
      {loading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 animate-pulse"
          style={{ width, height }}
        >
          <div className="text-yellow-400">
            <svg className="animate-spin h-8 w-8" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-300 character-image",
          loading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
}
