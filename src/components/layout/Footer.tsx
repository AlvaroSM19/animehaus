import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Términos', href: '/terms' },
    { name: 'Privacidad', href: '/privacy' },
  ];

  const games = [
    { name: 'Bingo Anime', href: '/games/bingo' },
    { name: 'Grid Trivia', href: '/games/grid-trivia' },
    { name: 'Connections', href: '/games/connections' },
    { name: 'Pyramid', href: '/games/pyramid' },
    { name: 'Top 10', href: '/games/top-10' },
  ];

  const socialLinks = [
    { name: 'Discord', href: '#', icon: '💬' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎌</span>
              <span className="text-xl font-bold bg-gradient-to-r from-anime-sakura to-anime-gold bg-clip-text text-transparent">
                AnimeQuiz Hub
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              La plataforma definitiva para mini-juegos y quizzes de anime. 
              Desafía tu conocimiento y compite con otros otakus.
            </p>
            <div className="text-xs text-gray-500">
              © {currentYear} AnimeQuiz Hub. Todos los derechos reservados.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mini-Juegos</h3>
            <ul className="space-y-2">
              {games.map((game) => (
                <li key={game.name}>
                  <Link
                    href={game.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span>{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Contacto</h4>
              <p className="text-gray-400 text-xs">
                animequizhub@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-500">
              AnimeQuiz Hub utiliza imágenes de anime y personajes únicamente con fines educativos y de entretenimiento.
              No poseemos derechos sobre las imágenes utilizadas.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Hecho con ❤️ para la comunidad anime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
