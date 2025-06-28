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
  UserCheck,
  ChevronLeft
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

// Import landing page images
import landingImage1 from './assets/landing_page/1.jpg';
import landingImage2 from './assets/landing_page/2.jpg';
import landingImage3 from './assets/landing_page/3.jpg';
import landingImage4 from './assets/landing_page/4.jpg';
import landingImage5 from './assets/landing_page/5.jpg';
import landingImage6 from './assets/landing_page/6.jpg';
import landingImage7 from './assets/landing_page/7.jpg';
import landingImage8 from './assets/landing_page/8.jpg';
import landingImage9 from './assets/landing_page/9.jpg';
import landingImage10 from './assets/landing_page/10.jpg';
import landingImage11 from './assets/landing_page/11.jpg';
import logo_banner from './assets/landing_page/Logo-2024.png'

// Import people images
import tareqRafiBhuiyan from './assets/people/Tareq_Rafi.jpg';
import anwarShahid from './assets/people/Anwar_Shahid.jpg';
import hiroakiOura from './assets/people/Hiroki_Oura.jpg';
import mariaHowlader from './assets/people/Mariya_Howladar.jpg';
import yujiAndo from './assets/people/Yuji_Ando.jpg';
import kenjiKimura from './assets/people/Kenji_Kimura.jpg';
import jahangirAlamSharker from './assets/people/Jahangir_Alam.jpg';
import manabuSugawara from './assets/people/Manabu_Sugawara.jpg';
import nayeemurRahman from './assets/people/Nayeemur_Rahman.jpg';
import sharifulAlam from './assets/people/Shariful_Alam.jpg';
import mohammedSohel from './assets/people/Mohammed_Sohel.jpg';
import tariqulIslam from './assets/people/Zaman_Tariqul_Islam.jpg';
import islamBabu from './assets/people/Ahmedul_Islam.jpg';
import hiroshiUegaki from './assets/people/Hiroshi_Uegaki.jpg';
import rabiulAlam from './assets/people/Rabiul_Alam.jpg';
import atsushiHirakuri from './assets/people/Atasuchi_Hirakuri.jpg';
import asifChowdhury from './assets/people/Asif_Chowdhury.jpg';
import taheraAhsan from './assets/people/Tahera_Ahsan.jpg';

// THEME COLORS
const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

// Carousel images array
const carouselImages = [
  landingImage1,
  landingImage2,
  landingImage3,
  landingImage4,
  landingImage5,
  landingImage6,
  landingImage7,
  landingImage8,
  landingImage9,
  landingImage10,
  landingImage11
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const boardMembers = [
    { 
      name: "MR. TAREQ RAFI BHUIYAN (JUN)", 
      position: "PRESIDENT", 
      initials: "TB",
      image: tareqRafiBhuiyan
    },
    { 
      name: "MR. MD. ANWAR SHAHID", 
      position: "VICE PRESIDENT", 
      initials: "AS",
      image: anwarShahid
    },
    { 
      name: "MR. HIROAKI OURA", 
      position: "VICE PRESIDENT", 
      initials: "HO",
      image: hiroakiOura
    },
    { 
      name: "MS. MARIA HOWLADER FCA", 
      position: "SECRETARY GENERAL", 
      initials: "MH",
      image: mariaHowlader
    },
    { 
      name: "MR. YUJI ANDO", 
      position: "JOINT SECRETARY GENERAL", 
      initials: "YA",
      image: yujiAndo
    },
    { 
      name: "MR. KENJI KIMURA", 
      position: "TREASURER", 
      initials: "KK",
      image: kenjiKimura
    },
    { 
      name: "MR. MD. JAHANGIR ALAM SHARKER", 
      position: "JOINT TREASURER", 
      initials: "JS",
      image: jahangirAlamSharker
    },
    { 
      name: "MR. MANABU SUGAWARA", 
      position: "DIRECTOR", 
      initials: "MS",
      image: manabuSugawara
    },
    { 
      name: "MR. NAYEEMUR RAHMAN", 
      position: "DIRECTOR", 
      initials: "NR",
      image: nayeemurRahman
    },
    { 
      name: "MR. MD. SHARIFUL ALAM", 
      position: "DIRECTOR", 
      initials: "SA",
      image: sharifulAlam
    },
    { 
      name: "MR. MOHAMMED SOHEL", 
      position: "DIRECTOR", 
      initials: "MS",
      image: mohammedSohel
    },
    { 
      name: "MR. ABU ZAMAN MD. TARIQUL ISLAM", 
      position: "DIRECTOR", 
      initials: "TI",
      image: tariqulIslam
    },
    { 
      name: "MR. AKM AHMEDUL ISLAM BABU", 
      position: "DIRECTOR", 
      initials: "IB",
      image: islamBabu
    },
    { 
      name: "MR. HIROSHI UEGAKI", 
      position: "DIRECTOR", 
      initials: "HU",
      image: hiroshiUegaki
    },
    { 
      name: "MR. RABIUL ALAM", 
      position: "DIRECTOR", 
      initials: "RA",
      image: rabiulAlam
    },
    { 
      name: "MR. ATSUSHI HIRAKURI", 
      position: "DIRECTOR", 
      initials: "AH",
      image: atsushiHirakuri
    },
    { 
      name: "MR. ASIF A. CHOWDHURY", 
      position: "ADVISOR TO THE BOARD", 
      initials: "AC",
      image: asifChowdhury
    },
    { 
      name: "MS. TAHERA AHSAN", 
      position: "EXECUTIVE DIRECTOR", 
      initials: "TA",
      image: taheraAhsan
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'shadow-lg' : 'bg-opacity-95 backdrop-blur-sm'
      }`} style={{background: scrollY > 50 ? PRIMARY : `${PRIMARY}F2`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8" style={{ color: SECONDARY }} />
              <div>
                <span className="text-xl font-bold" style={{ color: SECONDARY }}>JBCCI</span>
                <div className="text-xs hidden sm:block" style={{ color: "#eee" }}>Japan-Bangladesh Chamber</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="font-medium transition-colors" style={{color: "#fff"}}>HOME</Link>
              <Link to="/membership" className="font-medium transition-colors hover:text-yellow-400" style={{color: "#fff"}}>Membership</Link>
              <Link to="/about-us" className="font-medium transition-colors hover:text-yellow-400" style={{color: "#fff"}}>About Us</Link>
              <Link to="/news-&-events" className="font-medium transition-colors hover:text-yellow-400" style={{color: "#fff"}}>News & Events</Link>
              <Link to="/contact-us" className="font-medium transition-colors hover:text-yellow-400" style={{color: "#fff"}}>Contact Us</Link>
              <Link to="/publications" className="font-medium transition-colors hover:text-yellow-400" style={{color: "#fff"}}>Publications</Link>
            </nav>
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[#e6aa05]/10 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" style={{color:SECONDARY}} /> : <Menu className="h-6 w-6" style={{color:SECONDARY}} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" style={{background: PRIMARY}}>
            <div className="px-4 py-2 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>HOME</Link>
              <Link to="/membership" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>MEMBERSHIP</Link>
              <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>ABOUT US</Link>
              <Link to="/news-&-events" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>NEWS & EVENTS</Link>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>CONTACT US</Link>
              <Link to="/publications" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 font-medium" style={{color: "#fff"}}>PUBLICATIONS</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-[#edeafd] via-white to-[#fff8e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2" style={{background: `${SECONDARY}22`, color: SECONDARY, borderRadius: 999}}>
                <Handshake className="h-4 w-4 mr-2" />
                Japan & Bangladesh Business Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{color: PRIMARY}}>
                Japan-Bangladesh
                <span className="block" style={{ color: SECONDARY }}>Chamber of Commerce</span>
                <span className="block text-3xl md:text-4xl" style={{ color: PRIMARY, opacity: 0.7 }}>& Industry</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                日本バングラデシュ商工会議所 - An association dedicated to promoting trade and investment 
                between Japan and Bangladesh for mutual economic prosperity and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership" className="inline-flex items-center px-8 py-4 font-semibold group rounded-lg" style={{background: PRIMARY, color: "#fff"}}>
                  Become a Member
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about-us" className="inline-flex items-center px-8 py-4 border-2 rounded-lg font-semibold" style={{borderColor: SECONDARY, color: SECONDARY}}>
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Hero Image Carousel */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl mb-4">
                {/* Main carousel image */}
                <div className="relative w-full h-full">
                  <img
                    src={carouselImages[currentImageIndex]}
                    alt={`JBCCI Event ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white scale-110' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Thumbnail navigation */}
              <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
                {carouselImages.slice(0, 5).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-yellow-400 scale-110' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Objective Section */}
      <section className="py-20" style={{background: "#f9f8ff"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{color: PRIMARY}}>Japan-Bangladesh Chamber of Commerce & Industry (JBCCI)</h2>
              <p className="text-lg text-gray-700 mb-2">
                日本バングラデシュ商工会議所 an association for Japan & Bangladesh Business Development
              </p>
              <h4 className="mt-8 text-xl font-semibold mb-2" style={{color: SECONDARY}}>Objective</h4>
              <p className="text-gray-700">
                With the valuable expertise of the honorable members from different business fields from both the countries, JBCCI is committed to serve the business community of Japan and Bangladesh at every step of promoting trade and investment for economic prosperity.
              </p>
              <h4 className="mt-8 text-xl font-semibold mb-2" style={{color: PRIMARY}}>Mission & Vision</h4>
              <p className="text-gray-700">
                With the valuable expertise of the honorable members from different business fields from both the countries, JBCCI is committed to serve the business community of Japan and Bangladesh at every step of promoting trade and investment for economic ..
              </p>
              <h4 className="mt-8 text-xl font-semibold mb-2" style={{color: SECONDARY}}>Activities</h4>
              <p className="text-gray-700">
                To Collect and provide business information in Bangladesh and Japan.To promote the two – way trade and investment between Japan and Bangladesh.To explore new areas of investment and encourage the establishment of Japan-Bangladesh joint –.
              </p>
            </div>
            {/* JBCCI Logo */}
            <div className="w-full h-96 rounded-xl flex items-center justify-center bg-white shadow-lg">
              <img
                src={logo_banner}
                alt="JBCCI Logo 2024"
                className="max-w-full max-h-full object-contain p-8"
              />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2" style={{color: PRIMARY}}>Our Plan to develop SME sector of Japan & Bangladesh</h4>
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
            <h2 className="text-3xl font-bold mb-4" style={{color: PRIMARY}}>Activities in the Press</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f6f5fa] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 1
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: PRIMARY}}>Japanese Firms bullish on Bangladesh</h3>
              <p className="text-gray-700 text-base">
                The majority of Japanese companies operating in Bangladesh plan to go for business expansion over the next two years thanks to cheap labour and high profitability, according to a survey conducted by Japan External Trade Organization (Jetro).
              </p>
            </div>
            <div className="bg-[#f6f5fa] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 2
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: SECONDARY}}>Japanese Companies Want to Invest in BD</h3>
              <p className="text-gray-700 text-base">
                70pc Japanese firms in Bangladesh want to expand business.
              </p>
            </div>
            <div className="bg-[#f6f5fa] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400 font-bold">
                Press Img 3
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: PRIMARY}}>ICOSA holds SMEs seminar</h3>
              <p className="text-gray-700 text-base">
                A seminar titled "Role of SMEs in the national economy—the case of Japan and how Bangladesh should go ahead"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="py-20" style={{background: "#fff8e3"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY}}>
              Our People
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated individuals who make JBCCI a thriving community of business professionals.
            </p>
          </div>
          
          {/* Responsive Grid: 2 columns on mobile, more on larger screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow group text-center">
                <div className="relative mb-3">
                  {member.image ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-full h-full rounded-full flex items-center justify-center text-white text-sm sm:text-lg font-bold hidden ${
                          member.position.includes('PRESIDENT') ? 'bg-gradient-to-br' : ''
                        }`}
                        style={{
                          background: member.position.includes('PRESIDENT')
                            ? `linear-gradient(135deg, ${SECONDARY}, ${PRIMARY})`
                            : member.position.includes('VICE PRESIDENT')
                            ? `linear-gradient(135deg, ${SECONDARY}, #ecd86d)`
                            : member.position.includes('SECRETARY')
                            ? `linear-gradient(135deg, ${PRIMARY}, #4b3cff)`
                            : member.position.includes('TREASURER')
                            ? `linear-gradient(135deg, #6adf92, ${SECONDARY})`
                            : member.position.includes('ADVISOR')
                            ? `linear-gradient(135deg, #b15ef9, #8246e6)`
                            : member.position.includes('EXECUTIVE')
                            ? `linear-gradient(135deg, #0fdad8, #48b0a7)`
                            : `linear-gradient(135deg, #a5b4fc, #d8b4fe)`
                        }}
                      >
                        {member.initials}
                      </div>
                    </div>
                  ) : (
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center text-white text-sm sm:text-lg font-bold group-hover:scale-105 transition-transform ${
                      member.position.includes('PRESIDENT') ? 'bg-gradient-to-br' : ''
                    }`}
                      style={{
                        background: member.position.includes('PRESIDENT')
                          ? `linear-gradient(135deg, ${SECONDARY}, ${PRIMARY})`
                          : member.position.includes('VICE PRESIDENT')
                          ? `linear-gradient(135deg, ${SECONDARY}, #ecd86d)`
                          : member.position.includes('SECRETARY')
                          ? `linear-gradient(135deg, ${PRIMARY}, #4b3cff)`
                          : member.position.includes('TREASURER')
                          ? `linear-gradient(135deg, #6adf92, ${SECONDARY})`
                          : member.position.includes('ADVISOR')
                          ? `linear-gradient(135deg, #b15ef9, #8246e6)`
                          : member.position.includes('EXECUTIVE')
                          ? `linear-gradient(135deg, #0fdad8, #48b0a7)`
                          : `linear-gradient(135deg, #a5b4fc, #d8b4fe)`
                      }}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                <p className={`text-xs font-medium`} style={{
                  color:
                    member.position.includes('PRESIDENT') ? SECONDARY :
                    member.position.includes('VICE PRESIDENT') ? "#e6aa05" :
                    member.position.includes('SECRETARY') ? PRIMARY :
                    member.position.includes('TREASURER') ? "#18c06e" :
                    member.position.includes('ADVISOR') ? "#9005e6" :
                    member.position.includes('EXECUTIVE') ? "#0fdad8" :
                    "#222"
                }}>
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section id="board" className="py-20" style={{background:"#f9f8ff"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY}}>
              Board Members 2024-2026
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet our distinguished board members who guide JBCCI's vision and strategic direction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group text-center">
                <div className="relative mb-4">
                  {member.image ? (
                    <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-full h-full rounded-full flex items-center justify-center text-white text-lg font-bold hidden ${
                          member.position.includes('PRESIDENT') ? 'bg-gradient-to-br' : ''
                        }`}
                        style={{
                          background: member.position.includes('PRESIDENT')
                            ? `linear-gradient(135deg, ${SECONDARY}, ${PRIMARY})`
                            : member.position.includes('VICE PRESIDENT')
                            ? `linear-gradient(135deg, ${SECONDARY}, #ecd86d)`
                            : member.position.includes('SECRETARY')
                            ? `linear-gradient(135deg, ${PRIMARY}, #4b3cff)`
                            : member.position.includes('TREASURER')
                            ? `linear-gradient(135deg, #6adf92, ${SECONDARY})`
                            : member.position.includes('ADVISOR')
                            ? `linear-gradient(135deg, #b15ef9, #8246e6)`
                            : member.position.includes('EXECUTIVE')
                            ? `linear-gradient(135deg, #0fdad8, #48b0a7)`
                            : `linear-gradient(135deg, #a5b4fc, #d8b4fe)`
                        }}
                      >
                        {member.initials}
                      </div>
                    </div>
                  ) : (
                    <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white text-lg font-bold ${
                      member.position.includes('PRESIDENT') ? 'bg-gradient-to-br' : ''
                    }`}
                      style={{
                        background: member.position.includes('PRESIDENT')
                          ? `linear-gradient(135deg, ${SECONDARY}, ${PRIMARY})`
                          : member.position.includes('VICE PRESIDENT')
                          ? `linear-gradient(135deg, ${SECONDARY}, #ecd86d)`
                          : member.position.includes('SECRETARY')
                          ? `linear-gradient(135deg, ${PRIMARY}, #4b3cff)`
                          : member.position.includes('TREASURER')
                          ? `linear-gradient(135deg, #6adf92, ${SECONDARY})`
                          : member.position.includes('ADVISOR')
                          ? `linear-gradient(135deg, #b15ef9, #8246e6)`
                          : member.position.includes('EXECUTIVE')
                          ? `linear-gradient(135deg, #0fdad8, #48b0a7)`
                          : `linear-gradient(135deg, #a5b4fc, #d8b4fe)`
                      }}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                <p className={`text-xs font-medium mb-2`} style={{
                  color:
                    member.position.includes('PRESIDENT') ? SECONDARY :
                    member.position.includes('VICE PRESIDENT') ? "#e6aa05" :
                    member.position.includes('SECRETARY') ? PRIMARY :
                    member.position.includes('TREASURER') ? "#18c06e" :
                    member.position.includes('ADVISOR') ? "#9005e6" :
                    member.position.includes('EXECUTIVE') ? "#0fdad8" :
                    "#222"
                }}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY}}>
              Our Members
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              You can become a Member of JBCCI and join our growing community of business professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:SECONDARY + "22"}}>
                <Users className="h-10 w-10" style={{color:SECONDARY}} />
              </div>
              <div className="text-4xl font-bold" style={{color:SECONDARY}}>340</div>
              <div className="text-gray-700 font-medium">TOTAL MEMBERS</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: PRIMARY + "22"}}>
                <Globe className="h-10 w-10" style={{color: PRIMARY}} />
              </div>
              <div className="text-4xl font-bold" style={{color: PRIMARY}}>241</div>
              <div className="text-gray-700 font-medium">BANGLADESHI</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: PRIMARY + "22"}}>
                <Building2 className="h-10 w-10" style={{color: PRIMARY}} />
              </div>
              <div className="text-4xl font-bold" style={{color: PRIMARY}}>75</div>
              <div className="text-gray-700 font-medium">JAPANESE</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: SECONDARY + "22"}}>
                <Handshake className="h-10 w-10" style={{color: SECONDARY}} />
              </div>
              <div className="text-4xl font-bold" style={{color: SECONDARY}}>24</div>
              <div className="text-gray-700 font-medium">JOINT VENTURE & MNC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: PRIMARY}} className="text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-8 w-8" style={{ color: SECONDARY }} />
                <div>
                  <span className="text-xl font-bold" style={{ color: SECONDARY }}>JBCCI</span>
                  <div className="text-sm" style={{ color: "#eee" }}>Japan-Bangladesh Chamber of Commerce and Industry</div>
                </div>
              </div>
              <p className="mb-6 max-w-md" style={{color:"#eee"}}>
                日本バングラデシュ商工会議所 - Promoting trade and investment between Japan and Bangladesh for mutual economic prosperity since our establishment.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <Globe className="h-5 w-5" style={{color: SECONDARY}} />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <Mail className="h-5 w-5" style={{color: SECONDARY}} />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <Phone className="h-5 w-5" style={{color: SECONDARY}} />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{color: SECONDARY}}>Quick Links</h3>
              <ul className="space-y-2" style={{color:"#eee"}}>
                <li><Link to="/about-us" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/membership" className="hover:text-yellow-400 transition-colors">Membership</Link></li>
                <li><Link to="/news-&-events" className="hover:text-yellow-400 transition-colors">News & Events</Link></li>
                <li><Link to="/contact-us" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{color: SECONDARY}}>Resources</h3>
              <ul className="space-y-2" style={{color:"#eee"}}>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Business Directory</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Trade Opportunities</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Investment Guide</a></li>
                <li><Link to="/publications" className="hover:text-yellow-400 transition-colors">Publications</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e6aa05] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
               <p className="text-sm text-center" style={{ color: "#eee" }}>
                  ©Japan Bangladesh Chamber of Commerce || Powered by Techknowgram Limited
               </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8"
          style={{
            background: SECONDARY,
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "9999px",
            boxShadow: "0 10px 20px 0 #0002",
            zIndex: 50
          }}
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