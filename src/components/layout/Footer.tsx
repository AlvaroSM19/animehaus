import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ];

  const games = [
    { name: 'Anime Impostor', href: '/games/impostor' },
    { name: 'Anime Grid', href: '/games/anime-grid' },
    { name: 'Anime Wordle', href: '/games/anime-wordle' },
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
              <span className="text-xl font-bold bg-gradient-to-r from-anime-sakura to-anime-gold bg-clip-text text-transparent">
                AnimeHaus
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your anime home. Explore, play and challenge your knowledge with unique mini-games 
              based on One Piece.
            </p>
            <div className="text-xs text-gray-500">
              © {currentYear} AnimeHaus. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Mini-Games</h3>
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
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
              <h4 className="text-sm font-medium mb-2">Contact</h4>
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
              AnimeHaus uses anime images and characters for educational and entertainment purposes only.
              We do not own rights to the images used.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ for the anime community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
