import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#services" className="text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#blog" className="text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#contact" className="text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">Login</button>
            <button className="px-3 lg:px-4 py-2 text-sm lg:text-base bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">Sign Up</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
              </div>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400" onClick={toggleMenu}>Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400" onClick={toggleMenu}>About Us</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-cyan-400" onClick={toggleMenu}>Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400" onClick={toggleMenu}>Contact</a>
              <div className="flex space-x-4 px-3 pt-4">
                <button className="flex-1 px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">Login</button>
                <button className="flex-1 px-4 py-2 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
