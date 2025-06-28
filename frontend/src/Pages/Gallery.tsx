import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Gallery: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Gallery</h1>
        <p className="text-gray-700 mb-4">
          {/* Replace with gallery content */}
          This page will showcase the gallery of JBCCI events and activities.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Gallery;