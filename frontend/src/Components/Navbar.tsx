import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo/logo.jpg'

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const boardDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsBoardDropdownOpen(false);
  }, [location.pathname]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? ""
          : "bg-opacity-95 backdrop-blur-sm"
      }`}
      style={{ background: PRIMARY }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="JBCCI Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-white shadow"
              style={{ background: "#fff" }}
            />
            <div>
              <span className="text-xl font-bold" style={{ color: SECONDARY }}>JBCCI</span>
              <div className="text-xs hidden sm:block" style={{ color: "#eee" }}>Japan-Bangladesh Chamber</div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-medium transition-colors" style={{ color: "#fff" }}>HOME</Link>
            <Link to="/membership" className="font-medium transition-colors hover:text-yellow-400" style={{ color: "#fff" }}>Membership</Link>
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link
                to="/about-us"
                className="flex items-center font-medium focus:outline-none transition-colors hover:text-yellow-400"
                style={{ color: "#fff" }}
                aria-haspopup="true"
                aria-expanded={isAboutDropdownOpen}
                onClick={() => {
                  setIsAboutDropdownOpen(false);
                  setIsBoardDropdownOpen(false);
                }}
              >
                About Us
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div
                className={`
                  absolute left-0 mt-2 w-64 rounded-lg shadow-lg border z-50 transition-all duration-150
                  ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                `}
                style={{
                  background: "#fff",
                  borderColor: SECONDARY,
                  pointerEvents: isAboutDropdownOpen ? 'auto' : 'none'
                }}
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
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
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-t-lg transition-colors"
                    onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                  >
                    Board of Directors
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                  <div
                    className={`
                      absolute top-0 left-full ml-2 w-72 rounded-lg shadow-lg border z-50 transition-all duration-150
                      ${isBoardDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                    `}
                    style={{
                      background: "#fff",
                      borderColor: SECONDARY,
                      pointerEvents: isBoardDropdownOpen ? 'auto' : 'none'
                    }}
                    onMouseEnter={handleBoardEnter}
                    onMouseLeave={handleBoardLeave}
                  >
                    <Link
                      to="/board-of-directors/2024-26"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-t-lg transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2024-26)
                    </Link>
                    <Link
                      to="/board-of-directors/2022-24"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2022-24)
                    </Link>
                    <Link
                      to="/board-of-directors/2020-22"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2020-22)
                    </Link>
                    <Link
                      to="/board-of-directors/2018-20"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-b-lg transition-colors"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2018-20)
                    </Link>
                  </div>
                </div>
                <Link
                  to="/secretariate-of-jbcci"
                  className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Secretariate of JBCCI
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-b-lg transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Gallery
                </Link>
              </div>
            </div>
            <Link to="/news-&-events" className="font-medium transition-colors hover:text-yellow-400" style={{ color: "#fff" }}>News & Events</Link>
            <Link to="/contact-us" className="font-medium transition-colors hover:text-yellow-400" style={{ color: "#fff" }}>Contact Us</Link>
            <Link to="/publications" className="font-medium transition-colors hover:text-yellow-400" style={{ color: "#fff" }}>Publications</Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#e6aa05]/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" style={{ color: SECONDARY }} /> : <Menu className="h-6 w-6" style={{ color: SECONDARY }} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ background: PRIMARY }}>
          <div className="px-4 py-2 space-y-1">
            <Link to="/" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/membership" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Membership</Link>
            {/* About Us Dropdown for mobile */}
            <MobileAboutDropdown closeMenu={() => setIsMenuOpen(false)} />
            <Link to="/news-&-events" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>News & Events</Link>
            <Link to="/contact-us" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link to="/publications" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Publications</Link>
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
        className="w-full flex items-center justify-between px-3 py-2 font-medium"
        style={{ color: "#fff" }}
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
            className="block px-3 py-2 font-medium"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            About Us Home
          </Link>
          <div className="relative">
            <button
              className="w-full flex items-center justify-between px-3 py-2 font-medium"
              style={{ color: "#fff" }}
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
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >Board of Directors Home</Link>
                <Link
                  to="/board-of-directors/2024-26"
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >Board of Directors (2024-26)</Link>
                <Link
                  to="/board-of-directors/2022-24"
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >Board of Directors (2022-24)</Link>
                <Link
                  to="/board-of-directors/2020-22"
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >Board of Directors (2020-22)</Link>
                <Link
                  to="/board-of-directors/2018-20"
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >Board of Directors (2018-20)</Link>
              </div>
            )}
          </div>
          <Link
            to="/secretariate-of-jbcci"
            className="block px-3 py-2 font-medium"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >Secretariate of JBCCI</Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 font-medium"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >Gallery</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;