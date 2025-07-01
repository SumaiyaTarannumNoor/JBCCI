import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import two random images from assets/landing_page
import awardImg1 from '../assets/landing_page/3.jpg';
import awardImg2 from '../assets/landing_page/7.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const BusinessExcellenceAward: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Business Excellence Award
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Brizy is a front-end page builder where what you see is what you get. We designed it so you can be in complete control.
            </p>
            <div className="font-semibold text-xl mb-2" style={{ color: SECONDARY }}>
              Award 2019
            </div>
            <div className="text-gray-700 mb-4">
              JBCCI declared best business award for the year 2019.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <img
              src={awardImg1}
              alt="Business Excellence Award 1"
              className="w-full sm:w-1/2 h-56 object-cover rounded-xl shadow-md"
            />
            <img
              src={awardImg2}
              alt="Business Excellence Award 2"
              className="w-full sm:w-1/2 h-56 object-cover rounded-xl shadow-md"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BusinessExcellenceAward;