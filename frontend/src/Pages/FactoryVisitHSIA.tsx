import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import all images from assets/visit/visit1 (add or remove imports as you have images)
import visitImg1 from '../assets/visit/visit1/1.jpg';
import visitImg2 from '../assets/visit/visit1/2.jpg';
import visitImg3 from '../assets/visit/visit1/3.jpg';
import visitImg4 from '../assets/visit/visit1/4.jpg';
import visitImg5 from '../assets/visit/visit1/5.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const carouselImages = [
  visitImg1,
  visitImg2,
  visitImg3,
  visitImg4,
  visitImg5
];

const FactoryVisitHSIA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToImage = (idx: number) => setCurrentIndex(idx);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: PRIMARY }}>
              FactoryVisit-HSIA
            </h1>
            <div className="text-xl mb-2 font-semibold" style={{ color: SECONDARY }}>
              FACTORY VISIT PROGRAM OF JBCCI
            </div>
            <div className="text-gray-700 mb-4">
              Project Visit Program of JBCCI Delegation to Hazrat Shah Jalal International Airport Expansion Project of Terminal-3,<br />
              Dhaka, Bangladesh (June 26, 2022)
            </div>
            <ul className="text-gray-700 font-medium mb-4 space-y-1 list-disc list-inside text-left max-w-xl mx-auto">
              <li>Great and unique architecture</li>
              <li>Simple to use &amp; Easy to build complex structuring</li>
              <li>Click and drag items to create beautiful pages, instantly</li>
            </ul>
          </div>
          {/* Carousel */}
          <div className="mb-10">
            <div className="relative w-full max-w-xl mx-auto">
              <img
                src={carouselImages[currentIndex]}
                alt={`HSIA Visit ${currentIndex + 1}`}
                className="rounded-xl shadow-lg w-full h-72 object-cover"
              />
              {/* Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                aria-label="Previous image"
                style={{ zIndex: 2 }}
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                aria-label="Next image"
                style={{ zIndex: 2 }}
              >
                &#8594;
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 w-full flex justify-center gap-2 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-yellow-400' : 'bg-white/70'} border border-gray-400`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              {carouselImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`HSIA thumbnail ${idx + 1}`}
                  className={`w-14 h-14 rounded object-cover cursor-pointer border-2 transition-transform duration-200 ${currentIndex === idx ? 'border-yellow-400 scale-110' : 'border-gray-200'}`}
                  onClick={() => goToImage(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FactoryVisitHSIA;