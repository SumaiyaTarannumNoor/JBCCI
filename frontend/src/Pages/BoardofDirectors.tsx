import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BoardOfDirectors: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Board of Directors</h1>
        <p className="text-gray-700 mb-4">
          {/* Replace this content with your real board of directors listing */}
          This page will contain the list and profiles of the JBCCI Board of Directors.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors;