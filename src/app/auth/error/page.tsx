'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';

const errorMessages = {
  Configuration: 'Hay un problema con la configuración del servidor.',
  AccessDenied: 'No tienes permisos para acceder.',
  Verification: 'El token de verificación ha expirado o es inválido.',
  Default: 'Ha ocurrido un error durante el inicio de sesión.',
  OAuthSignin: 'Error al conectar con el proveedor de autenticación.',
  OAuthCallback: 'Error en la respuesta del proveedor de autenticación.',
  OAuthCreateAccount: 'No se pudo crear la cuenta con el proveedor de autenticación.',
  EmailCreateAccount: 'No se pudo crear la cuenta con email.',
  Callback: 'Error en el callback de autenticación.',
  OAuthAccountNotLinked: 'Para confirmar tu identidad, inicia sesión con la misma cuenta que usaste originalmente.',
  EmailSignin: 'No se pudo enviar el email de verificación.',
  CredentialsSignin: 'Error en las credenciales. Verifica tus datos.',
  SessionRequired: 'Debes iniciar sesión para acceder a esta página.',
};

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error') as keyof typeof errorMessages;

  const message = errorMessages[error] || errorMessages.Default;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
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

        <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-16 h-16 text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Error de Autenticación
            </CardTitle>
            <CardDescription className="text-gray-300">
              {message}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-gray-400">
              <p className="mb-4">
                No te preocupes, esto suele ser temporal. Puedes intentar:
              </p>
              <ul className="text-left space-y-2">
                <li>🔄 Intentar nuevamente en unos minutos</li>
                <li>🌐 Usar un proveedor de autenticación diferente</li>
                <li>🧹 Limpiar caché y cookies del navegador</li>
                <li>👥 Continuar como invitado</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <Link href="/auth/signin">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Intentar Nuevamente
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                  Continuar como Invitado
                </Button>
              </Link>
            </div>
            
            {error && (
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Código de error: {error}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
