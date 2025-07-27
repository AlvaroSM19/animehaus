'use client';

import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

const providerStyles = {
  google: {
    bg: 'bg-white hover:bg-gray-50 text-gray-900',
    icon: '🌐'
  },
  facebook: {
    bg: 'bg-blue-600 hover:bg-blue-700 text-white',
    icon: '📘'
  },
  discord: {
    bg: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    icon: '🎮'
  }
};

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  const handleSignIn = (providerId: string) => {
    signIn(providerId, { callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/">
            <Button className="text-white hover:bg-white/10 border border-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a AnimeHaus
            </Button>
          </Link>
        </div>

        <Card className="bg-black/40 border-white/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🏠</div>
            <CardTitle className="text-2xl font-bold text-white">
              Bienvenido a AnimeHaus
            </CardTitle>
            <CardDescription className="text-gray-300">
              Inicia sesión para guardar tu progreso, puntuaciones y competir con amigos
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {providers ? (
              Object.values(providers).map((provider) => {
                const style = providerStyles[provider.id as keyof typeof providerStyles] || {
                  bg: 'bg-gray-600 hover:bg-gray-700 text-white',
                  icon: '🔐'
                };
                
                return (
                  <Button
                    key={provider.id}
                    onClick={() => handleSignIn(provider.id)}
                    className={`w-full py-3 text-lg font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${style.bg}`}
                  >
                    <span className="mr-3 text-xl">{style.icon}</span>
                    Continuar con {provider.name}
                  </Button>
                );
              })
            ) : (
              <div className="text-center text-gray-400">
                Cargando opciones de inicio de sesión...
              </div>
            )}
            
            <div className="text-center text-sm text-gray-400 mt-6">
              Al iniciar sesión, podrás:
              <ul className="mt-2 space-y-1 text-left">
                <li>🏆 Guardar tus puntuaciones máximas</li>
                <li>📊 Ver estadísticas detalladas</li>
                <li>⭐ Marcar personajes favoritos</li>
                <li>👥 Competir con otros jugadores</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
                Prefer to play without an account? Continue as guest
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
