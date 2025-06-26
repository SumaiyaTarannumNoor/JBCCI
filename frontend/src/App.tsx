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
              <Link 
                to="/"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                HOME
              </Link>
              <button 
                onClick={() => scrollToSection('membership')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                MEMBERSHIP
              </button>
              <Link 
                to="/about-us"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                ABOUT US
              </Link>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                NEWS & EVENTS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                CONTACT
              </button>
              <button 
                onClick={() => scrollToSection('publications')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                PUBLICATIONS
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                HOME
              </Link>
              <button
                onClick={() => { scrollToSection('membership'); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                MEMBERSHIP
              </button>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                ABOUT US
              </Link>
              <button
                onClick={() => { scrollToSection('news'); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                NEWS & EVENTS
              </button>
              <button
                onClick={() => { scrollToSection('contact'); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                CONTACT
              </button>
              <button
                onClick={() => { scrollToSection('publications'); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                PUBLICATIONS
              </button>
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
                <button 
                  onClick={() => scrollToSection('membership')}
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold group"
                >
                  Become a Member
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-green-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">340</div>
                    <div className="text-sm text-gray-600">Total Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">241</div>
                    <div className="text-sm text-gray-600">Bangladeshi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">75</div>
                    <div className="text-sm text-gray-600">Japanese</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">24</div>
                    <div className="text-sm text-gray-600">Joint Ventures & MNCs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (anchor only) */}
      <span id="about"></span>

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

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
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

          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join JBCCI Today</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of our vibrant community and unlock opportunities for business growth, networking, and collaboration between Japan and Bangladesh.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
              Apply for Membership
              <UserCheck className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              News & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest activities, events, and press coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  Japanese Firms Bullish on Bangladesh
                </h3>
                <p className="text-gray-600 mb-4">
                  The majority of Japanese companies operating in Bangladesh plan to go for business expansion over the next two years thanks to cheap labour and high profitability, according to a survey conducted by Japan External Trade Organization (Jetro).
                </p>
                <button className="text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Japanese Companies Want to Invest in BD
                </h3>
                <p className="text-gray-600 mb-4">
                  70pc Japanese firms in Bangladesh want to expand business, showing strong confidence in the country's economic potential and business environment.
                </p>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  ICOSA Holds SMEs Seminar
                </h3>
                <p className="text-gray-600 mb-4">
                  A seminar titled "Role of SMEs in the national economy—the case of Japan and how Bangladesh should go ahead" highlighting the importance of small and medium enterprises.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Calendar className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Networking Program</h4>
              <p className="text-sm text-gray-600">Regular networking events for members</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">International Women's Day</h4>
              <p className="text-sm text-gray-600">Celebrating women in business</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">17th AGM</h4>
              <p className="text-sm text-gray-600">Annual General Meeting</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Business Seminars</h4>
              <p className="text-sm text-gray-600">Educational business seminars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest reports, newsletters, and business publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Report 2024</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive overview of JBCCI's activities and achievements throughout the year.
              </p>
              <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Directory</h3>
              <p className="text-gray-600 mb-4">
                Complete directory of JBCCI members and their business information.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                View Online
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade Bulletin</h3>
              <p className="text-gray-600 mb-4">
                Monthly bulletin featuring trade opportunities and market insights.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with JBCCI for membership inquiries, business opportunities, or general information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+880-2-9882308</p>
                  <p className="text-gray-600">+880-2-9882309</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@jbcci.org</p>
                  <p className="text-gray-600">secretary@jbcci.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">JBCCI Secretariat</p>
                  <p className="text-gray-600">Dhaka Chamber Building (4th Floor)</p>
                  <p className="text-gray-600">65-66 Motijheel C/A, Dhaka-1000</p>
                  <p className="text-gray-600">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Membership Application</option>
                    <option>Business Partnership</option>
                    <option>Event Information</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
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
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><button onClick={() => scrollToSection('membership')} className="hover:text-white transition-colors">Membership</button></li>
                <li><button onClick={() => scrollToSection('board')} className="hover:text-white transition-colors">Board Members</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Business Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
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
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;