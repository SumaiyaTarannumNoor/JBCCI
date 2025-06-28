import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const SecretariateOfJBCCI: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-[#fff8e3]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-secondary">Secretariate of JBCCI</h1>
        <p className="text-gray-800 mb-4">
          {/* Replace with actual secretariate details */}
          This page will contain information about the Secretariate of JBCCI.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-full aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold">
              Img {i}
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default SecretariateOfJBCCI;