import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo/logo.png';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

interface NavbarProps {
  showLoginButton?: boolean;
  showLogoutButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showLoginButton = true, showLogoutButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const boardDropdownRef = useRef<HTMLDivElement>(null);

  // Smoother dropdown timers
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const boardTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset nav when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsBoardDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close any dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node) &&
        boardDropdownRef.current &&
        !boardDropdownRef.current.contains(event.target as Node)
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

  // Dropdown smooth handlers
  const handleAboutEnter = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setIsAboutDropdownOpen(true), 80);
  };
  const handleAboutLeave = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setIsAboutDropdownOpen(false), 180);
  };
  const handleBoardEnter = () => {
    if (boardTimer.current) clearTimeout(boardTimer.current);
    boardTimer.current = setTimeout(() => setIsBoardDropdownOpen(true), 80);
  };
  const handleBoardLeave = () => {
    if (boardTimer.current) clearTimeout(boardTimer.current);
    boardTimer.current = setTimeout(() => setIsBoardDropdownOpen(false), 180);
  };

  const handleLogin = () => {
    navigate('/login_page');
  };

  const handleLogout = () => {
    // Optionally clear auth/token here
    navigate('/login_page');
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrollY > 20 ? "shadow-md bg-opacity-95 backdrop-blur-md" : "bg-opacity-80"}
      `}
      style={{ background: PRIMARY }}
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="JBCCI Logo"
              className="h-16 w-16 rounded-full object-contain border-2 border-white shadow"
              style={{ background: "#fff" }}
            />
           <div>
            <span className="text-xl font-bold tracking-tight block" style={{ color: SECONDARY, letterSpacing: "-1px" }}>
              Japan-Bangladesh 
            </span>
            <span className="text-xl font-bold tracking-tight block" style={{ color: SECONDARY, letterSpacing: "-1px" }}>
             Chamber of Commerce & Industry
            </span>
          </div>
          </div>
          <nav className="hidden md:flex space-x-9 items-center text-lg">
            <Link to="/" className="font-medium transition-colors duration-200" style={{ color: "#fff" }}>HOME</Link>
            <Link to="/membership" className="font-medium transition-colors duration-200 hover:text-yellow-400" style={{ color: "#fff" }}>Membership</Link>
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                className="flex items-center font-medium focus:outline-none transition-colors duration-200 hover:text-yellow-400"
                style={{ color: "#fff" }}
                aria-haspopup="true"
                aria-expanded={isAboutDropdownOpen}
                tabIndex={0}
              >
                About Us
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* About Us Dropdown */}
              <div
                className={`
                  absolute left-0 mt-2 w-64 rounded-xl shadow-2xl border z-50 transition-all duration-300 ease-in-out
                  ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
                `}
                style={{
                  background: "#fff",
                  borderColor: SECONDARY,
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
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-t-lg transition-colors duration-200"
                    tabIndex={-1}
                  >
                    <span>Board of Directors</span>
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isBoardDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`
                      absolute top-0 left-full ml-2 w-72 rounded-xl shadow-2xl border z-50 transition-all duration-300 ease-in-out
                      ${isBoardDropdownOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
                    `}
                    style={{
                      background: "#fff",
                      borderColor: SECONDARY,
                    }}
                    onMouseEnter={handleBoardEnter}
                    onMouseLeave={handleBoardLeave}
                  >
                    <Link
                      to="/board-of-directors/2024-26"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-t-lg transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2024-26)
                    </Link>
                    <Link
                      to="/board-of-directors/2022-24"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2022-24)
                    </Link>
                    <Link
                      to="/board-of-directors/2020-22"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2020-22)
                    </Link>
                    <Link
                      to="/board-of-directors/2018-20"
                      className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-b-lg transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2018-20)
                    </Link>
                  </div>
                </div>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >About Us Home</Link>
                <Link
                  to="/secretariate-of-jbcci"
                  className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >Secretariate of JBCCI</Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-[#e6aa05]/10 rounded-b-lg transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >Gallery</Link>
              </div>
            </div>
            <Link to="/news-&-events" className="font-medium transition-colors duration-200 hover:text-yellow-400" style={{ color: "#fff" }}>News & Events</Link>
            <Link to="/contact-us" className="font-medium transition-colors duration-200 hover:text-yellow-400" style={{ color: "#fff" }}>Contact Us</Link>
            <Link to="/publications" className="font-medium transition-colors duration-200 hover:text-yellow-400" style={{ color: "#fff" }}>Publications</Link>
            {showLoginButton && (
              <button
                className="ml-4 px-6 py-2 font-semibold rounded-full transition-colors duration-200 shadow hover:shadow-lg"
                style={{ background: SECONDARY, color: PRIMARY }}
                onClick={handleLogin}
              >
                Login
              </button>
            )}
            {showLogoutButton && (
              <button
                className="ml-2 px-6 py-2 font-semibold rounded-full transition-colors duration-200 shadow hover:shadow-lg"
                style={{ background: '#e6aa05', color: '#fff' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#e6aa05]/10 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" style={{ color: SECONDARY }} /> : <Menu className="h-6 w-6" style={{ color: SECONDARY }} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ background: PRIMARY }}>
          <div className="px-4 py-2 space-y-1 animate-fadeIn">
            <Link to="/" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/membership" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Membership</Link>
            {/* About Us Dropdown for mobile */}
            <MobileAboutDropdown closeMenu={() => setIsMenuOpen(false)} />
            <Link to="/news-&-events" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>News & Events</Link>
            <Link to="/contact-us" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link to="/publications" className="block px-3 py-2 font-medium" style={{ color: "#fff" }} onClick={() => setIsMenuOpen(false)}>Publications</Link>
            {showLoginButton && (
              <button
                className="block w-full mt-2 px-3 py-2 font-semibold rounded-full transition-colors duration-200 shadow"
                style={{ background: SECONDARY, color: PRIMARY }}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogin();
                }}
              >
                Login
              </button>
            )}
            {showLogoutButton && (
              <button
                className="block w-full mt-2 px-3 py-2 font-semibold rounded-full transition-colors duration-200 shadow"
                style={{ background: '#e53e3e', color: '#fff' }}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
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
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
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
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isBoardOpen ? 'rotate-180' : ''}`} />
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