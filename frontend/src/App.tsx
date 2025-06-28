import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Building2, 
  Users, 
  Award, 
  BookOpen, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUp,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  Target,
  Zap,
  TrendingUp,
  Handshake,
  FileText,
  UserCheck
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import MembershipPage from './Pages/MembershipPage';
import NewsAndEvents from './Pages/NewsAndEvents';
import ContactUs from './Pages/ContactUs';
import Publications from './Pages/Publications';
import MembershipFormPage from './Pages/MembershipFomrPage';
import BoardOfDirectors from './Pages/BoardOfDirectors';
import SecretariateOfJBCCI from './Pages/SecretariateOfJBCCI';
import Gallery from './Pages/Gallery';
import BoardOfDirectors2024_26 from './Pages/BoardOfDirectorsPages/BoardOfDirectors2024_26';
import BoardOfDirectors2022_24 from './Pages/BoardOfDirectorsPages/BoardOfDirectors2022_24';
import BoardOfDirectors2020_22 from './Pages/BoardOfDirectorsPages/BoardOfDirectors2020_22';
import BoardOfDirectors2018_20 from './Pages/BoardOfDirectorsPages/BoardOfDirectors2018_20';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const boardMembers = [
    { name: "MR. TAREQ RAFI BHUIYAN (JUN)", position: "PRESIDENT", initials: "TB" },
    { name: "MR. MD. ANWAR SHAHID", position: "VICE PRESIDENT", initials: "AS" },
    { name: "MR. HIROAKI OURA", position: "VICE PRESIDENT", initials: "HO" },
    { name: "MS. MARIA HOWLADER FCA", position: "SECRETARY GENERAL", initials: "MH" },
    { name: "MR. YUJI ANDO", position: "JOINT SECRETARY GENERAL", initials: "YA" },
    { name: "MR. KENJI KIMURA", position: "TREASURER", initials: "KK" },
    { name: "MR. MD. JAHANGIR ALAM SHARKER", position: "JOINT TREASURER", initials: "JS" },
    { name: "MR. MANABU SUGAWARA", position: "DIRECTOR", initials: "MS" },
    { name: "MR. NAYEEMUR RAHMAN", position: "DIRECTOR", initials: "NR" },
    { name: "MR. MD. SHARIFUL ALAM", position: "DIRECTOR", initials: "SA" },
    { name: "MR. MOHAMMED SOHEL", position: "DIRECTOR", initials: "MS" },
    { name: "MR. ABU ZAMAN MD. TARIQUL ISLAM", position: "DIRECTOR", initials: "TI" },
    { name: "MR. AKM AHMEDUL ISLAM BABU", position: "DIRECTOR", initials: "IB" },
    { name: "MR. HIROSHI UEGAKI", position: "DIRECTOR", initials: "HU" },
    { name: "MR. RABIUL ALAM", position: "DIRECTOR", initials: "RA" },
    { name: "MR. ATSUSHI HIRAKURI", position: "DIRECTOR", initials: "AH" },
    { name: "MR. ASIF A. CHOWDHURY", position: "ADVISOR TO THE BOARD", initials: "AC" },
    { name: "MS. TAHERA AHSAN", position: "EXECUTIVE DIRECTOR", initials: "TA" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">HOME</Link>
              <Link to="/membership" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Membership</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About Us</Link>
              <Link to="/news-&-events" className="text-gray-700 hover:text-red-600 transition-colors font-medium">News & Events</Link>
              <Link to="/contact-us" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact Us</Link>
              <Link to="/publications" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Publications</Link>
            </nav>
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">HOME</Link>
              <Link to="/membership" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">MEMBERSHIP</Link>
              <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">ABOUT US</Link>
              <Link to="/news-&-events" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">NEWS & EVENTS</Link>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">CONTACT US</Link>
              <Link to="/publications" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">PUBLICATIONS</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                <Handshake className="h-4 w-4 mr-2" />
                Japan & Bangladesh Business Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Japan-Bangladesh
                <span className="text-red-600 block">Chamber of Commerce</span>
                <span className="text-green-600 block text-3xl md:text-4xl">& Industry</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                日本バングラデシュ商工会議所 - An association dedicated to promoting trade and investment 
                between Japan and Bangladesh for mutual economic prosperity and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership" className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold group">
                  Become a Member
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about-us" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Hero Image Placeholder */}
            <div className="relative flex flex-col items-center">
              <div className="w-full h-80 md:h-96 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold mb-4">
                Hero Image
              </div>
              <div className="flex gap-4">
                {[1, 2, 3].map(num => (
                  <div key={num} className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-bold">
                    Img {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Image Gallery Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              "Networking Program",
              "Women's Day",
              "17th AGM",
              "AGM",
              "Seminar",
              "Seminar 2",
              "HSIA Visit",
              "Seminar 3",
              "Event 9",
              "Event 10",
              "Event 11",
              "Event 12",
              "Event 13",
            ].map((desc, i) => (
              <div key={i} className="aspect-square bg-gray-200 flex items-center justify-center rounded-xl text-gray-400 text-xs font-semibold">
                {desc} <br /> Placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Objective Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Japan-Bangladesh Chamber of Commerce & Industry (JBCCI)</h2>
              <p className="text-lg text-gray-600 mb-2">
                日本バングラデシュ商工会議所 an association for Japan & Bangladesh Business Development
              </p>
              <h4 className="mt-8 text-xl font-semibold text-red-700 mb-2">Objective</h4>
              <p className="text-gray-700">
                With the valuable expertise of the honorable members from different business fields from both the countries, JBCCI is committed to serve the business community of Japan and Bangladesh at every step of promoting trade and investment for economic prosperity.
              </p>
              <h4 className="mt-8 text-xl font-semibold text-green-700 mb-2">Mission & Vision</h4>
              <p className="text-gray-700">
                With the valuable expertise of the honorable members from different business fields from both the countries, JBCCI is committed to serve the business community of Japan and Bangladesh at every step of promoting trade and investment for economic ..
              </p>
              <h4 className="mt-8 text-xl font-semibold text-blue-700 mb-2">Activities</h4>
              <p className="text-gray-700">
                To Collect and provide business information in Bangladesh and Japan.To promote the two – way trade and investment between Japan and Bangladesh.To explore new areas of investment and encourage the establishment of Japan-Bangladesh joint –.
              </p>
            </div>
            {/* About Image Placeholder */}
            <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold">
              About Img
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Our Plan to develop SME sector of Japan & Bangladesh</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Increase Japanese Investment in Bangladesh",
                "Develop a friendship relation between both Japan & Bangladesh",
                "Develop Economic Position of Bangladesh"
              ].map((plan, i) => (
                <div key={i} className="bg-white shadow rounded-xl px-6 py-4 text-gray-700 text-base">{plan}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities in the press */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Activities in the Press</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 1
              </div>
              <h3 className="text-lg font-semibold mb-2">Japanese Firms bullish on Bangladesh</h3>
              <p className="text-gray-600 text-base">
                The majority of Japanese companies operating in Bangladesh plan to go for business expansion over the next two years thanks to cheap labour and high profitability, according to a survey conducted by Japan External Trade Organization (Jetro).
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 2
              </div>
              <h3 className="text-lg font-semibold mb-2">Japanese Companies Want to Invest in BD</h3>
              <p className="text-gray-600 text-base">
                70pc Japanese firms in Bangladesh want to expand business.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 3
              </div>
              <h3 className="text-lg font-semibold mb-2">ICOSA holds SMEs seminar</h3>
              <p className="text-gray-600 text-base">
                A seminar titled “Role of SMEs in the national economy—the case of Japan and how Bangladesh should go ahead”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section id="board" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Board Members 2024-2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished board members who guide JBCCI's vision and strategic direction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group text-center">
                <div className="relative mb-4">
                  <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white text-lg font-bold ${
                    member.position.includes('PRESIDENT') ? 'bg-gradient-to-br from-red-500 to-red-600' :
                    member.position.includes('VICE PRESIDENT') ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                    member.position.includes('SECRETARY') ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    member.position.includes('TREASURER') ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    member.position.includes('ADVISOR') ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    member.position.includes('EXECUTIVE') ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
                    'bg-gradient-to-br from-gray-500 to-gray-600'
                  }`}>
                    {member.initials}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                <p className={`text-xs font-medium mb-2 ${
                  member.position.includes('PRESIDENT') ? 'text-red-600' :
                  member.position.includes('VICE PRESIDENT') ? 'text-orange-600' :
                  member.position.includes('SECRETARY') ? 'text-blue-600' :
                  member.position.includes('TREASURER') ? 'text-green-600' :
                  member.position.includes('ADVISOR') ? 'text-purple-600' :
                  member.position.includes('EXECUTIVE') ? 'text-teal-600' :
                  'text-gray-600'
                }`}>
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can become a Member of JBCCI and join our growing community of business professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">340</div>
              <div className="text-gray-600 font-medium">TOTAL MEMBERS</div>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">241</div>
              <div className="text-gray-600 font-medium">BANGLADESHI</div>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">75</div>
              <div className="text-gray-600 font-medium">JAPANESE</div>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Handshake className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24</div>
              <div className="text-gray-600 font-medium">JOINT VENTURE & MNC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-8 w-8 text-red-400" />
                <div>
                  <span className="text-xl font-bold">JBCCI</span>
                  <div className="text-sm text-gray-400">Japan-Bangladesh Chamber of Commerce and Industry</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                日本バングラデシュ商工会議所 - Promoting trade and investment between Japan and Bangladesh for mutual economic prosperity since our establishment.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/membership" className="hover:text-white transition-colors">Membership</Link></li>
                <li><Link to="/news-&-events" className="hover:text-white transition-colors">News & Events</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Business Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
                <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Japan-Bangladesh Chamber of Commerce and Industry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/news-&-events" element={<NewsAndEvents />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/membership-form" element={<MembershipFormPage />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/secretariate-of-jbcci" element={<SecretariateOfJBCCI />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/board-of-directors/2024-26" element={<BoardOfDirectors2024_26 />} />
        <Route path="/board-of-directors/2022-24" element={<BoardOfDirectors2022_24 />} />
        <Route path="/board-of-directors/2020-22" element={<BoardOfDirectors2020_22 />} />
        <Route path="/board-of-directors/2018-20" element={<BoardOfDirectors2018_20 />} />
      </Routes>
    </Router>
  );
}

export default App;