import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const boardDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all dropdowns on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsBoardDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdowns if clicked outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
        setIsBoardDropdownOpen(false);
      }
    };
    if (isAboutDropdownOpen || isBoardDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAboutDropdownOpen, isBoardDropdownOpen]);

  // Desktop: Smooth About Us dropdown (with Board sub-dropdown)
  const [aboutTimeout, setAboutTimeout] = useState<NodeJS.Timeout | null>(null);
  const [boardTimeout, setBoardTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleAboutEnter = () => {
    if (aboutTimeout) clearTimeout(aboutTimeout);
    setIsAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    setAboutTimeout(setTimeout(() => setIsAboutDropdownOpen(false), 120));
  };
  const handleBoardEnter = () => {
    if (boardTimeout) clearTimeout(boardTimeout);
    setIsBoardDropdownOpen(true);
  };
  const handleBoardLeave = () => {
    setBoardTimeout(setTimeout(() => setIsBoardDropdownOpen(false), 120));
  };

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
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">HOME</Link>
            <Link to="/membership" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Membership</Link>
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link
                to="/about-us"
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors font-medium focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isAboutDropdownOpen}
                onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
              >
                About Us
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div
                className={`
                  absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white border z-50 transition-all duration-150
                  ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                `}
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
                style={{ pointerEvents: isAboutDropdownOpen ? 'auto' : 'none' }}
              >
                {/* Board of Directors nested dropdown */}
                <div
                  className="relative"
                  ref={boardDropdownRef}
                  onMouseEnter={handleBoardEnter}
                  onMouseLeave={handleBoardLeave}
                >
                  <Link
                    to="/board-of-directors"
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-t-lg transition-colors"
                    onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                  >
                    Board of Directors
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  <div
                    className={`
                      absolute top-0 left-full ml-2 w-72 rounded-lg shadow-lg bg-white border z-50 transition-all duration-150
                      ${isBoardDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                    `}
                    onMouseEnter={handleBoardEnter}
                    onMouseLeave={handleBoardLeave}
                    style={{ pointerEvents: isBoardDropdownOpen ? 'auto' : 'none' }}
                  >
                    <Link
                      to="/board-of-directors/2024-26"
                      className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-t-lg transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2024-26)
                    </Link>
                    <Link
                      to="/board-of-directors/2022-24"
                      className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2022-24)
                    </Link>
                    <Link
                      to="/board-of-directors/2020-22"
                      className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2020-22)
                    </Link>
                    <Link
                      to="/board-of-directors/2018-20"
                      className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-b-lg transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2018-20)
                    </Link>
                  </div>
                </div>
                <Link
                  to="/secretariate-of-jbcci"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Secretariate of JBCCI
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-b-lg transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Gallery
                </Link>
              </div>
            </div>
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
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Membership</Link>
            {/* About Us Dropdown for mobile */}
            <MobileAboutDropdown closeMenu={() => setIsMenuOpen(false)} />
            <Link to="/news-&-events" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>News & Events</Link>
            <Link to="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link to="/publications" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Publications</Link>
          </div>
        </div>
      )}
    </header>
  );
};

// Mobile About Us dropdown (with Board of Directors nested dropdown)
const MobileAboutDropdown: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
        onClick={() => setIsAboutOpen((open) => !open)}
        type="button"
      >
        <span>About Us</span>
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
      </button>
      {isAboutOpen && (
        <div className="ml-4 mt-1 space-y-1">
          <Link
            to="/about-us"
            className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
            onClick={closeMenu}
          >
            About Us Home
          </Link>
          <div className="relative">
            <button
              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
              onClick={() => setIsBoardOpen((open) => !open)}
              type="button"
            >
              <span>Board Of Directors</span>
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isBoardOpen ? 'rotate-180' : ''}`} />
            </button>
            {isBoardOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/board-of-directors"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={closeMenu}
                >Board of Directors Home</Link>
                <Link
                  to="/board-of-directors/2024-26"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={closeMenu}
                >Board of Directors (2024-26)</Link>
                <Link
                  to="/board-of-directors/2022-24"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={closeMenu}
                >Board of Directors (2022-24)</Link>
                <Link
                  to="/board-of-directors/2020-22"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={closeMenu}
                >Board of Directors (2020-22)</Link>
                <Link
                  to="/board-of-directors/2018-20"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                  onClick={closeMenu}
                >Board of Directors (2018-20)</Link>
              </div>
            )}
          </div>
          <Link
            to="/secretariate-of-jbcci"
            className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
            onClick={closeMenu}
          >Secretariate of JBCCI</Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
            onClick={closeMenu}
          >Gallery</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;