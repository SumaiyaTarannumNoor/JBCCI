import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import images from assets/visit (adjust the filenames as needed)
import visit1 from '../assets/visit/1.jpg';
import visit2 from '../assets/visit/2.jpg';
import visit3 from '../assets/visit/1.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const FactoryProjectVisitProgram: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Factory Visit
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Brizy is a front-end page builder where what you see is what you get. We designed it so you can be in complete control.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-center" style={{ color: SECONDARY }}>
              PROJECT VISIT
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-2" style={{ color: PRIMARY }}>
                HSIA on 26 June 2022
              </h3>
              <p className="text-gray-700 mb-4">
                Project Visit Program of JBCCI Delegation to Hazrat Shah Jalal International Airport Expansion Project of Terminal-3, Dhaka, Bangladesh <br />
                <span className="text-sm text-gray-500">(June 26, 2022)</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src={visit1}
                  alt="HSIA Visit 1"
                  className="rounded-lg w-full h-48 object-cover shadow"
                />
                <img
                  src={visit2}
                  alt="HSIA Visit 2"
                  className="rounded-lg w-full h-48 object-cover shadow"
                />
                <img
                  src={visit3}
                  alt="HSIA Visit 3"
                  className="rounded-lg w-full h-48 object-cover shadow"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FactoryProjectVisitProgram;