import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const BoardOfDirectors2018_20: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-700 mb-6">Board of Directors (2018-20)</h1>
        <p className="text-gray-700">[Put the actual list of directors for 2018-20 here]</p>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors2018_20;