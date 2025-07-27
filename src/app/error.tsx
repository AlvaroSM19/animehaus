'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-400 mb-4">500</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
          <p className="text-gray-300 mb-8">
            An unexpected error occurred. Please try again or go back to the homepage.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:bg-gray-800">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
