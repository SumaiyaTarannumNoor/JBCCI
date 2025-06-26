import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-red-600" />
            <div>
              <span className="text-xl font-bold text-gray-900">JBCCI</span>
              <div className="text-xs text-gray-600 hidden sm:block">Japan-Bangladesh Chamber</div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">HOME</Link>
            <Link to="/membership" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Membership</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About Us</Link>
            <Link to="/news-&-events" className="text-gray-700 hover:text-red-600 transition-colors font-medium">News & Events</Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact Us</Link>
            <Link to="/publications" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Publications</Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">HOME</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">Membership</Link>
            <Link to="/about-us" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">ABOUT US</Link>
            <Link to="/news-&-events" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">News & Events</Link>
            <Link to="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">Contact Us</Link>
            <Link to="/publications" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">Publications</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;