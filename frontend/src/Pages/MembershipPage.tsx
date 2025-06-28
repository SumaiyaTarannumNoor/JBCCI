import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import landing page images for carousel
import landingImage1 from '../assets/landing_page/1.jpg';
import landingImage2 from '../assets/landing_page/2.jpg';
import landingImage3 from '../assets/landing_page/3.jpg';
import landingImage4 from '../assets/landing_page/4.jpg';
import landingImage5 from '../assets/landing_page/5.jpg';
import landingImage6 from '../assets/landing_page/6.jpg';
import landingImage7 from '../assets/landing_page/7.jpg';
import landingImage8 from '../assets/landing_page/8.jpg';
import landingImage9 from '../assets/landing_page/9.jpg';
import landingImage10 from '../assets/landing_page/10.jpg';
import landingImage11 from '../assets/landing_page/11.jpg';

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

const directors = [
  { name: "Mr. Tareq Rafi Bhuiyan (Jun)", position: "President" },
  { name: "Mr. Md. Anwar Shahid", position: "Vice President" },
  { name: "Mr. Hiroaki Oura", position: "Vice President" },
  { name: "Ms. Maria Howlader FCA", position: "Secretary General" },
  { name: "Mr. Yuji Ando", position: "Joint Secretary General" },
  { name: "Mr. Kenji Kimura", position: "Treasurer" },
  { name: "Mr. Md. Jahangir Alam Sharker", position: "Joint Treasurer" },
  { name: "Mr. Manabu Sugawara", position: "Director" },
  { name: "Mr. Mohammed Sohel", position: "Director" },
  { name: "Mr. Md. Shariful Alam", position: "Director" },
  { name: "Mr. Nayeemur Rahman", position: "Director" },
  { name: "Mr. Abu Zaman Md. Tariqul Islam", position: "Director" },
  { name: "Mr. AKM Ahmedul Islam BABU", position: "Director" },
  { name: "Mr. Hiroshi Uegaki", position: "Director" },
  { name: "Mr. Rabiul Alam", position: "Director" },
  { name: "Mr. Atsushi Hirakuri", position: "Director" },
  { name: "Mr. Asif A. Chowdhury", position: "Advisor to the Board" },
  { name: "Ms. Tahera Ahsan", position: "Executive Director" }
];

const MembershipPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen" style={{ background: "#fff" }}>
        {/* Hero Section with Background Carousel */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Carousel */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`JBCCI Background ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Japan Bangladesh Chamber of Commerce and Industry
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md" style={{ color: SECONDARY }}>
              An Association to develop business between Bangladesh and Japan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership-form"
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                style={{ background: SECONDARY, color: "#000" }}
              >
                Become Our Member Today
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center px-8 py-4 border-2 border-white rounded-lg font-semibold text-lg text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Who we are, What we do, Why we do it */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl p-6 shadow" style={{ background: PRIMARY + "11" }}>
              <h2 className="font-bold text-xl mb-2" style={{ color: PRIMARY }}>Who we are</h2>
              <p className="text-gray-700 text-base">
                JBCCI was formed when we were feeling the extreme need of starting a new trade regime with stronger mutual presence in each other's market. A well-timed address by H.E. Mr. Matsushiro Horiguchi, Hon'ble Ambassador of Japan in Bangladesh at the National Press Club in Dhaka expressed deep sense of commitment of Japan for peace, prosperity and development of our country as a nation-state. It was possible to form JBCCI with the direct support and co-operation of JETRO (Japan External Trade Organization), which is operating for trade and investment promotion in Bangladesh as Japan Government's agency for the last 35 years. The leadership of former Presidents Mr. Matiur Rahman and Mr. Hideo Ueno has enriched JBCCI stepping forward from its inception.
              </p>
            </div>
            <div className="rounded-xl p-6 shadow" style={{ background: SECONDARY + "11" }}>
              <h2 className="font-bold text-xl mb-2" style={{ color: SECONDARY }}>What we do</h2>
              <p className="text-gray-700 text-base">
                To follow up the reports of the "Bangladesh-Japan Joint Committee for Commercial and Economic Cooperation" and to help in early implementation of its recommendations. To cooperate with appropriate organizations for promoting cultural exchange and friendship between Japan and Bangladesh. To collect market/economic information of Bangladesh and provide it to the Japanese people when required. To maintain liaison with the MEDIA and encourage wide coverage of JBCCI activities. To look into the difficulties/obstacles members are facing with import/export, duty structures, transportation, dumping / antidumping, IPR or other trade related issues.
              </p>
            </div>
            <div className="rounded-xl p-6 shadow" style={{ background: PRIMARY + "11" }}>
              <h2 className="font-bold text-xl mb-2" style={{ color: PRIMARY }}>Why we do it</h2>
              <p className="text-gray-700 text-base">
                Japan and Bangladesh are two friendly countries and this relationship has contributed in socio economic development, culture, education, infrastructure, know how transfer, trade, business migration, human resource exchange with skills development, capacity building and in many areas.
              </p>
            </div>
          </div>

          {/* Become a Member Today - Welcome Section */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
              <h1 className="text-4xl font-bold mb-4" style={{ color: SECONDARY }}>Become Our Member Today!</h1>
              <p className="text-lg text-gray-700 mb-6">
                Join the Japan-Bangladesh Chamber of Commerce and Industry (JBCCI) and unlock exclusive opportunities for networking, business growth, and international collaboration. Be a part of our vibrant community!
              </p>
              <Link
                to="/membership-form"
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg shadow"
                style={{ background: PRIMARY, color: "#fff" }}
              >
                Become Our Member Today
              </Link>
            </div>
          </div>

          {/* Office Placeholder Images with Carousel Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-4" style={{ color: PRIMARY }}>Check out our activities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {carouselImages.slice(0, 5).map((image, i) => (
                <div key={i} className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={image}
                    alt={`JBCCI Activity ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Directors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: SECONDARY }}>Our Directors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {directors.map((director, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-3 flex items-center justify-center text-3xl text-gray-400 font-bold">
                    <span>Img</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{director.name}</h3>
                    <p className="text-sm text-gray-600">{director.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-4" style={{ color: PRIMARY }}>Objectives of JBCCI</h2>
            <ul className="max-w-xl mx-auto list-disc list-inside text-gray-700 space-y-2">
              <li>To collect and provide business information in Bangladesh and Japan.</li>
              <li>To promote the two-way trade and investment between Japan and Bangladesh.</li>
              <li>To explore new areas of investment and encourage the establishment of Japan-Bangladesh joint ventures in Japan and Bangladesh.</li>
              <li>To identify areas of difficulties in investment and important trade barriers and take steps to overcome those.</li>
              <li>To arrange training programs / workshops / seminars for Human Resource Development and others in both Bangladesh and Japan.</li>
            </ul>
          </div>

          {/* Activities and Merits */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: PRIMARY }}>Our Activities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Trade Fair: JBCCI members will get the opportunity to participate in Trade Fairs organized by JBCCI (in Bangladesh and in Japan) at a discounted rate.</li>
                <li>Seminars/Workshops: JBCCI members will get the priority to join the Seminars/Workshops organized by JBCCI at special rate along with other facilities.</li>
                <li>Investment Benefits: For interested companies who are looking for joint Venture with Japanese Company, JBCCI will provide all possible relevant information on potential Japanese investors. For companies who are interested to invest in Japan, JBCCI will provide information about Japanese Investment Climate and Investment Procedure.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: SECONDARY }}>Merits of JBCCI Membership</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Information Services: JBCCI members will be provided with important business information services.</li>
                <li>Export: For Bangladeshi Exporters, JBCCI will provide related information about Japanese Importers and necessary Market Information of Japan.</li>
                <li>Import: For Bangladeshi Importers, JBCCI will provide related information about Japanese Exporters.</li>
              </ul>
            </div>
          </div>

          {/* Be Our Member */}
          <div className="mb-12 text-center rounded-2xl p-8"
            style={{ background: "linear-gradient(to right, #edeafd, #fff8e3)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: PRIMARY }}>BE OUR MEMBER</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Japan and Bangladesh are two friendly countries and this relationship has contributed in socio economic development, culture, education, infrastructure, know how transfer, trade, business migration, infrastructure development, SME, IT Business and human resource exchange with skill development, capacity building and in many areas.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MembershipPage;