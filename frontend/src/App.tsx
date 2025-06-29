import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowUp,
  CheckCircle,
  Globe,
  Target,
  Zap,
  TrendingUp,
  Handshake,
  Users,
  Building2,
  ChevronLeft
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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
import LoginPage from './Pages/LoginPage';
import MemberProfile from './Pages/MemberProfile';

import landing_Image4 from './assets/landing_page/4.jpg';
import landing_Image8 from './assets/landing_page/8.jpg';
import landing_Image11 from './assets/landing_page/11.jpg';

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
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
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
                <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src={landing_Image4} alt="Press 1" className="object-cover w-full h-32" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: PRIMARY}}>Japanese Firms bullish on Bangladesh</h3>
                <p className="text-gray-700 text-base">
                  The majority of Japanese companies operating in Bangladesh plan to go for business expansion over the next two years thanks to cheap labour and high profitability, according to a survey conducted by Japan External Trade Organization (Jetro).
                </p>
              </div>
              <div className="bg-[#f6f5fa] rounded-xl shadow-md p-6 flex flex-col items-center">
                <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src={landing_Image8} alt="Press 2" className="object-cover w-full h-32" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: SECONDARY}}>Japanese Companies Want to Invest in BD</h3>
                <p className="text-gray-700 text-base">
                  70pc Japanese firms in Bangladesh want to expand business.
                </p>
              </div>
              <div className="bg-[#f6f5fa] rounded-xl shadow-md p-6 flex flex-col items-center">
                <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src={landing_Image11} alt="Press 3" className="object-cover w-full h-32" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: PRIMARY}}>ICOSA holds SMEs seminar</h3>
                <p className="text-gray-700 text-base">
                  A seminar titled "Role of SMEs in the national economy—the case of Japan and how Bangladesh should go ahead"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section id="board" className="py-20" style={{ background: "#f9f8ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
                Board Members 2024-2026
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Meet our distinguished board members who guide JBCCI's vision and strategic direction.
              </p>
            </div>
            {/* grid-cols-2 for all small screens and devices */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      <Footer />
    </>
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
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/member_profile" element={<MemberProfile />} />
      </Routes>
    </Router>
  );
}

export default App;