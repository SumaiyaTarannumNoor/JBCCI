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
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const boardDropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null);

  // Smoother dropdown timers
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const boardTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const newsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    setIsNewsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close any dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node) &&
        boardDropdownRef.current &&
        !boardDropdownRef.current.contains(event.target as Node) &&
        newsDropdownRef.current &&
        !newsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
        setIsBoardDropdownOpen(false);
        setIsNewsDropdownOpen(false);
      }
    };
    if (isAboutDropdownOpen || isBoardDropdownOpen || isNewsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAboutDropdownOpen, isBoardDropdownOpen, isNewsDropdownOpen]);

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
  const handleNewsEnter = () => {
    if (newsTimer.current) clearTimeout(newsTimer.current);
    newsTimer.current = setTimeout(() => setIsNewsDropdownOpen(true), 80);
  };
  const handleNewsLeave = () => {
    if (newsTimer.current) clearTimeout(newsTimer.current);
    newsTimer.current = setTimeout(() => setIsNewsDropdownOpen(false), 180);
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
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrollY > 20 ? "shadow-lg bg-opacity-98 backdrop-blur-sm" : "bg-opacity-95"}
      `}
      style={{ background: PRIMARY }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="JBCCI Logo"
              className="h-12 w-12 rounded-full object-contain border-2 border-white shadow-sm"
              style={{ background: "#fff" }}
            />
            <div>
              <span
                className="font-semibold tracking-tight block leading-tight"
                style={{ color: SECONDARY, letterSpacing: "-0.5px", fontSize: "12px" }}
              >
                Japan-Bangladesh
              </span>
              <span
                className="font-semibold tracking-tight block leading-tight"
                style={{ color: SECONDARY, letterSpacing: "-0.5px", fontSize: "12px" }}
              >
                Chamber of Commerce
              </span>
              <span
                className="font-semibold tracking-tight block leading-tight"
                style={{ color: SECONDARY, letterSpacing: "-0.5px", fontSize: "12px" }}
              >
                and Industry
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors duration-200 hover:text-yellow-300" 
              style={{ color: "#fff" }}
            >
              HOME
            </Link>
            <Link 
              to="/membership" 
              className="text-sm font-medium transition-colors duration-200 hover:text-yellow-300" 
              style={{ color: "#fff" }}
            >
              Membership
            </Link>
            
            {/* About Us Dropdown */}
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                className="flex items-center text-sm font-medium focus:outline-none transition-colors duration-200 hover:text-yellow-300"
                style={{ color: "#fff" }}
                aria-haspopup="true"
                aria-expanded={isAboutDropdownOpen}
                tabIndex={0}
              >
                About Us
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* About Us Dropdown Menu */}
              <div
                className={`
                  absolute left-0 mt-2 w-56 rounded-lg shadow-xl border z-50 transition-all duration-200 ease-in-out
                  ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}
                `}
                style={{
                  background: "#fff",
                  borderColor: "#e2e8f0",
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
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-t-lg transition-colors duration-200"
                    tabIndex={-1}
                  >
                    <span>Board of Directors</span>
                    <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${isBoardDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Nested Board Dropdown */}
                  <div
                    className={`
                      absolute top-0 left-full ml-1 w-60 rounded-lg shadow-xl border z-50 transition-all duration-200 ease-in-out
                      ${isBoardDropdownOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}
                    `}
                    style={{
                      background: "#fff",
                      borderColor: "#e2e8f0",
                    }}
                    onMouseEnter={handleBoardEnter}
                    onMouseLeave={handleBoardLeave}
                  >
                    <Link
                      to="/board-of-directors/2024-26"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-t-lg transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2024-26)
                    </Link>
                    <Link
                      to="/board-of-directors/2022-24"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2022-24)
                    </Link>
                    <Link
                      to="/board-of-directors/2020-22"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2020-22)
                    </Link>
                    <Link
                      to="/board-of-directors/2018-20"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-200"
                      onClick={() => { setIsAboutDropdownOpen(false); setIsBoardDropdownOpen(false); }}
                    >
                      Board of Directors (2018-20)
                    </Link>
                  </div>
                </div>
                
                <Link
                  to="/about-us"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  About Us Home
                </Link>
                <Link
                  to="/secretariate-of-jbcci"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Secretariate of JBCCI
                </Link>
                <Link
                  to="/gallery"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Gallery
                </Link>
              </div>
            </div>

            {/* News & Events Dropdown */}
            <div
              className="relative"
              ref={newsDropdownRef}
              onMouseEnter={handleNewsEnter}
              onMouseLeave={handleNewsLeave}
            >
              <button
                className="flex items-center text-sm font-medium focus:outline-none transition-colors duration-200 hover:text-yellow-300"
                style={{ color: "#fff" }}
                aria-haspopup="true"
                aria-expanded={isNewsDropdownOpen}
                tabIndex={0}
              >
                News & Events
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${isNewsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`
                  absolute left-0 mt-2 w-72 rounded-lg shadow-xl border z-50 transition-all duration-200 ease-in-out
                  ${isNewsDropdownOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}
                `}
                style={{
                  background: "#fff",
                  borderColor: "#e2e8f0",
                }}
                onMouseEnter={handleNewsEnter}
                onMouseLeave={handleNewsLeave}
              >
                <Link
                  to="/news-&-events"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-t-lg transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  News & Events Home
                </Link>
                <Link
                  to="/network-gathering-program"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  Networking Gathering Program
                </Link>
                <Link
                  to="/business-excellence-award"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  Business Excellence Award
                </Link>
                <Link
                  to="/conference-and-seminar"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  Conference & Seminar
                </Link>
                <Link
                  to="/factory-project-visit-program"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  Factory Project Visit Program
                </Link>
                <Link
                  to="/courtesy-call-and-meeting"
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-200"
                  onClick={() => setIsNewsDropdownOpen(false)}
                >
                  Courtesy Call & Meeting Gallery
                </Link>
              </div>
            </div>

            <Link 
              to="/contact-us" 
              className="text-sm font-medium transition-colors duration-200 hover:text-yellow-300" 
              style={{ color: "#fff" }}
            >
              Contact Us
            </Link>
            <Link 
              to="/publications" 
              className="text-sm font-medium transition-colors duration-200 hover:text-yellow-300" 
              style={{ color: "#fff" }}
            >
              Publications
            </Link>

            {/* Login/Logout Buttons */}
            {showLoginButton && (
              <button
                className="ml-2 px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                style={{ background: SECONDARY, color: PRIMARY }}
                onClick={handleLogin}
              >
                Login
              </button>
            )}
            {showLogoutButton && (
              <button
                className="ml-2 px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                style={{ background: '#e53e3e', color: '#fff' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? 
              <X className="h-5 w-5" style={{ color: SECONDARY }} /> : 
              <Menu className="h-5 w-5" style={{ color: SECONDARY }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: PRIMARY }}>
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200" 
              style={{ color: "#fff" }} 
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/membership" 
              className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200" 
              style={{ color: "#fff" }} 
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            
            {/* Mobile About Us Dropdown */}
            <MobileAboutDropdown closeMenu={() => setIsMenuOpen(false)} />

            {/* Mobile News & Events Dropdown */}
            <MobileNewsDropdown closeMenu={() => setIsMenuOpen(false)} />

            <Link 
              to="/contact-us" 
              className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200" 
              style={{ color: "#fff" }} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/publications" 
              className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200" 
              style={{ color: "#fff" }} 
              onClick={() => setIsMenuOpen(false)}
            >
              Publications
            </Link>

            {/* Mobile Login/Logout Buttons */}
            {showLoginButton && (
              <button
                className="block w-full mt-3 px-3 py-2 text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
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
                className="block w-full mt-3 px-3 py-2 text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
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

// Mobile About Us dropdown component
const MobileAboutDropdown: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
        style={{ color: "#fff" }}
        onClick={() => setIsAboutOpen((open) => !open)}
        type="button"
      >
        <span>About Us</span>
        <ChevronDown className={`w-3 h-3 ml-2 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isAboutOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-3">
          <Link
            to="/about-us"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            About Us Home
          </Link>
          
          {/* Mobile Board Directors Dropdown */}
          <div className="relative">
            <button
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
              style={{ color: "#fff" }}
              onClick={() => setIsBoardOpen((open) => !open)}
              type="button"
            >
              <span>Board Of Directors</span>
              <ChevronDown className={`w-3 h-3 ml-2 transition-transform duration-200 ${isBoardOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isBoardOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-3">
                <Link
                  to="/board-of-directors"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >
                  Board of Directors Home
                </Link>
                <Link
                  to="/board-of-directors/2024-26"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >
                  Board of Directors (2024-26)
                </Link>
                <Link
                  to="/board-of-directors/2022-24"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >
                  Board of Directors (2022-24)
                </Link>
                <Link
                  to="/board-of-directors/2020-22"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >
                  Board of Directors (2020-22)
                </Link>
                <Link
                  to="/board-of-directors/2018-20"
                  className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
                  style={{ color: "#fff" }}
                  onClick={closeMenu}
                >
                  Board of Directors (2018-20)
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/secretariate-of-jbcci"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Secretariate of JBCCI
          </Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Gallery
          </Link>
        </div>
      )}
    </div>
  );
};

// Mobile News & Events dropdown component
const MobileNewsDropdown: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
        style={{ color: "#fff" }}
        onClick={() => setIsNewsOpen((open) => !open)}
        type="button"
      >
        <span>News & Events</span>
        <ChevronDown className={`w-3 h-3 ml-2 transition-transform duration-200 ${isNewsOpen ? 'rotate-180' : ''}`} />
      </button>
      {isNewsOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-3">
          <Link
            to="/news-&-events"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            News & Events Home
          </Link>
          <Link
            to="/network-gathering-program"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Networking Gathering Program
          </Link>
          <Link
            to="/business-excellence-award"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Business Excellence Award
          </Link>
          <Link
            to="/conference-and-seminar"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Conference & Seminar
          </Link>
          <Link
            to="/factory-project-visit-program"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Factory Project Visit Program
          </Link>
          <Link
            to="/courtesy-call-and-meeting"
            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            style={{ color: "#fff" }}
            onClick={closeMenu}
          >
            Courtesy Call & Meeting Gallery
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;