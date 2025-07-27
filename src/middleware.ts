import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  // Obtener la sesión del usuario
  const session = await auth();
  
  // Rutas que requieren autenticación (puedes expandir esta lista)
  const protectedPaths = [
    '/profile',
    '/dashboard',
    '/admin',
    '/settings'
  ];
  
  // Verificar si la ruta actual requiere autenticación
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  // Si es una ruta protegida y no hay sesión, redirigir al login
  if (isProtectedPath && !session) {
    const signInUrl = new URL('/auth/signin', request.url);
    signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }
  
  // Si el usuario ya está autenticado y trata de acceder al login, redirigir al inicio
  if (session && request.nextUrl.pathname.startsWith('/auth/signin')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

// Configurar qué rutas debe procesar el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
